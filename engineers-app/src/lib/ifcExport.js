// IFC4 (Industry Foundation Classes) export — a real first-pass BIM model,
// an open alternative to proprietary formats like Revit's .rvt. Builds a
// plain-text STEP file (ISO-10303-21) following the IFC4 schema, with a
// full spatial hierarchy (IfcProject -> IfcSite -> IfcBuilding ->
// IfcBuildingStorey per floor) and real solid geometry
// (IfcExtrudedAreaSolid) for walls/slabs/doors/windows/stairs/columns/
// footings — openable in any real BIM tool (Revit, ArchiCAD, Solibri,
// FreeCAD, BIMcollab...).
//
// Ported from architect-studio-360's lib/ifcExport.js (verified there
// against the web-ifc parser — the same engine IFC.js/That Open Company
// use — to confirm the STEP structure and IFCLOCALPLACEMENT/
// IFCEXTRUDEDAREASOLID hierarchy produce real geometry, not just
// IFC-shaped text), adapted for this app's per-stair width and its
// columns/foundation entities, which didn't exist in the ported source.
//
// **Documented v1 limits** (intentional, not a hidden gap):
// - Each room's walls are built on their own (same approach as this
//   app's DXF export) — no shared-wall merge between touching rooms, so
//   a strict collision checker can flag a small overlap at a shared wall.
// - A sloped roof is exported as a flat slab at wall-top height (same
//   footprint as the room) — the actual slope needs a more involved
//   IfcShapeRepresentation this v1 doesn't build.
// - Doors/windows are simplified boxes at the opening (real width/height)
//   — without the full IfcRelVoidsElement/IfcOpeningElement relationship
//   some strict BIM checkers look for specifically; visually/volumetrically
//   correct, just not that full semantic relationship.
// - Furniture isn't exported (this is a model of the building itself, not
//   its contents) — matches the DXF/3D exports' own scope.
// - The foundation/footing footprint is the same bounding-box
//   approximation build3d.js's 3D foundation and DXF export use (exact
//   for a rectangular footprint, an honest approximation for an
//   irregular one).
import { WALL_T, ROOF_T, COLUMN_SIZE, FOUNDATION_OVERHANG, FOUNDATION_DEPTH, computeFloorBaseYMap, openingRowToShape, foundationFootprint } from "./build3d";
import { floorLabel, floorToFloorHeight, stairEffectiveFootprint } from "./planGeometry";

const IFC_GUID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";
function randomIfcGuid() {
  let s = "";
  for (let i = 0; i < 22; i++) s += IFC_GUID_CHARS[Math.floor(Math.random() * IFC_GUID_CHARS.length)];
  return s;
}

function fmt(n) {
  if (!Number.isFinite(n)) n = 0;
  let s = n.toFixed(4).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ".0");
  if (!s.includes(".")) s += ".0";
  return s;
}

function escapeStr(s) {
  return String(s ?? "").replace(/'/g, "''").replace(/[\r\n]+/g, " ");
}

class IfcWriter {
  constructor() {
    this.lines = [];
    this.next = 1;
  }
  add(text) {
    const id = this.next++;
    this.lines.push(`#${id}=${text};`);
    return id;
  }
}

function point2(w, x, y) {
  return w.add(`IFCCARTESIANPOINT((${fmt(x)},${fmt(y)}))`);
}
function point3(w, x, y, z) {
  return w.add(`IFCCARTESIANPOINT((${fmt(x)},${fmt(y)},${fmt(z)}))`);
}

// Closed polygon (any number of sides, rectangular or free-form) extruded
// vertically (height along Z), starting at elevation. Points are in real
// world coordinates directly — same approach the DXF export uses: the
// position is built into the geometry itself rather than a separate
// per-element local placement.
function extrudedSolid(w, points2d, height, elevation, zAxisId, xAxisId, extrudeDirId) {
  const ptIds = points2d.map((p) => point2(w, p.x, p.y));
  const polylineId = w.add(`IFCPOLYLINE((${[...ptIds, ptIds[0]].map((id) => `#${id}`).join(",")}))`);
  const profileId = w.add(`IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#${polylineId})`);
  const basePt = point3(w, 0, 0, elevation);
  const axisId = w.add(`IFCAXIS2PLACEMENT3D(#${basePt},#${zAxisId},#${xAxisId})`);
  return w.add(`IFCEXTRUDEDAREASOLID(#${profileId},#${axisId},#${extrudeDirId},${fmt(height)})`);
}

function productShape(w, contextId, solidId) {
  const shapeRepId = w.add(`IFCSHAPEREPRESENTATION(#${contextId},'Body','SweptSolid',(#${solidId}))`);
  return w.add(`IFCPRODUCTDEFINITIONSHAPE($,$,(#${shapeRepId}))`);
}

// IfcWall/IfcSlab/IfcStair/IfcColumn/IfcFooting all share the same
// attribute shape (9 fields: GlobalId..Tag + PredefinedType).
function addBuildingElement(w, kind, predefinedType, ownerHistory, name, placementId, shapeId) {
  return w.add(`${kind}('${randomIfcGuid()}',#${ownerHistory},'${escapeStr(name)}',$,$,#${placementId},#${shapeId},$,${predefinedType})`);
}

// IfcDoor/IfcWindow: extra attributes (OverallHeight/OverallWidth/PredefinedType + 2 optional fields).
function addFixtureElement(w, kind, predefinedType, ownerHistory, name, placementId, shapeId, height, width) {
  return w.add(`${kind}('${randomIfcGuid()}',#${ownerHistory},'${escapeStr(name)}',$,$,#${placementId},#${shapeId},$,${fmt(height)},${fmt(width)},${predefinedType},$,$)`);
}

// Same "walk the cursor" algorithm buildWall (lib/build3d.js) and
// wallPillars (lib/dxfExport.js) use for the solid pillars around
// openings — a local copy here (full version: start/width/sill/openH) to
// also build the header/sill slabs above and below each opening, not
// just the solid pillars.
function wallSegments(resolvedOpenings, length) {
  const sorted = resolvedOpenings.slice().sort((a, b) => a.start - b.start);
  let cursor = 0;
  const pillars = [];
  sorted.forEach((o) => {
    if (o.start > cursor + 0.02) pillars.push([cursor, o.start]);
    cursor = Math.max(cursor, o.start + o.width);
  });
  if (cursor < length - 0.02) pillars.push([cursor, length]);
  return { pillars, openings: sorted };
}

function rectPoints(p1x, p1y, ux, uy, nx, ny, a, b, half) {
  return [
    { x: p1x + ux * a - nx * half, y: p1y + uy * a - ny * half },
    { x: p1x + ux * b - nx * half, y: p1y + uy * b - ny * half },
    { x: p1x + ux * b + nx * half, y: p1y + uy * b + ny * half },
    { x: p1x + ux * a + nx * half, y: p1y + uy * a + ny * half },
  ];
}

// One straight wall edge — solid pillars around openings + header/sill
// slabs above/below each opening + the door/window element itself at its
// opening (same structure as buildWall in the 3D viewport, just IFC
// elements instead of THREE.Mesh).
function addWallEdge(w, ctx, p1, p2, edgeOpenings, wallHeight, ownerHistory, placementId, elementIds) {
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const length = Math.hypot(dx, dy);
  if (length < 0.02) return;
  const ux = dx / length, uy = dy / length, nx = -uy, ny = ux;
  const half = WALL_T / 2;

  const resolved = edgeOpenings.map((o) => openingRowToShape(o, length, wallHeight));
  const { pillars, openings } = wallSegments(resolved, length);

  pillars.forEach(([a, b]) => {
    const corners = rectPoints(p1.x, p1.y, ux, uy, nx, ny, a, b, half);
    const solidId = extrudedSolid(w, corners, wallHeight, 0, ctx.zAxis, ctx.xAxis, ctx.zAxis);
    const shapeId = productShape(w, ctx.context, solidId);
    elementIds.push(addBuildingElement(w, "IFCWALL", ".SOLIDWALL.", ownerHistory, "Wall", placementId, shapeId));
  });

  openings.forEach((o) => {
    const corners = rectPoints(p1.x, p1.y, ux, uy, nx, ny, o.start, o.start + o.width, half);
    if (o.sill > 0.02) {
      const solidId = extrudedSolid(w, corners, o.sill, 0, ctx.zAxis, ctx.xAxis, ctx.zAxis);
      const shapeId = productShape(w, ctx.context, solidId);
      elementIds.push(addBuildingElement(w, "IFCWALL", ".SOLIDWALL.", ownerHistory, "Wall (below opening)", placementId, shapeId));
    }
    const headerBottom = o.sill + o.openH;
    const headerH = wallHeight - headerBottom;
    if (headerH > 0.02) {
      const solidId = extrudedSolid(w, corners, headerH, headerBottom, ctx.zAxis, ctx.xAxis, ctx.zAxis);
      const shapeId = productShape(w, ctx.context, solidId);
      elementIds.push(addBuildingElement(w, "IFCWALL", ".SOLIDWALL.", ownerHistory, "Wall (above opening)", placementId, shapeId));
    }
    const fixtureSolid = extrudedSolid(w, corners, o.openH, o.sill, ctx.zAxis, ctx.xAxis, ctx.zAxis);
    const fixtureShape = productShape(w, ctx.context, fixtureSolid);
    if (o.isDoor) {
      elementIds.push(addFixtureElement(w, "IFCDOOR", ".DOOR.", ownerHistory, "Door", placementId, fixtureShape, o.openH, o.width));
    } else {
      elementIds.push(addFixtureElement(w, "IFCWINDOW", ".WINDOW.", ownerHistory, "Window", placementId, fixtureShape, o.openH, o.width));
    }
  });
}

function rectRoomEdges(room) {
  const { gx, gy, gw, gh } = room;
  return [
    { wall: "top", p1: { x: gx, y: gy }, p2: { x: gx + gw, y: gy } },
    { wall: "bottom", p1: { x: gx, y: gy + gh }, p2: { x: gx + gw, y: gy + gh } },
    { wall: "left", p1: { x: gx, y: gy }, p2: { x: gx, y: gy + gh } },
    { wall: "right", p1: { x: gx + gw, y: gy }, p2: { x: gx + gw, y: gy + gh } },
  ];
}

function addRoomWallsAndSlabs(w, ctx, room, wallHeight, ownerHistory, placementId, elementIds) {
  if (room.points && room.points.length >= 3) {
    const n = room.points.length;
    for (let i = 0; i < n; i++) {
      const p1 = room.points[i], p2 = room.points[(i + 1) % n];
      const edgeOpenings = (room.openings || []).filter((o) => o.edge_index === i);
      addWallEdge(w, ctx, p1, p2, edgeOpenings, wallHeight, ownerHistory, placementId, elementIds);
    }
    const floorSolid = extrudedSolid(w, room.points, 0.06, -0.06, ctx.zAxis, ctx.xAxis, ctx.zAxis);
    elementIds.push(addBuildingElement(w, "IFCSLAB", ".FLOOR.", ownerHistory, "Floor", placementId, productShape(w, ctx.context, floorSolid)));
    if (room.has_roof) {
      const roofSolid = extrudedSolid(w, room.points, ROOF_T, wallHeight, ctx.zAxis, ctx.xAxis, ctx.zAxis);
      elementIds.push(addBuildingElement(w, "IFCSLAB", ".ROOF.", ownerHistory, "Roof", placementId, productShape(w, ctx.context, roofSolid)));
    }
    return;
  }

  rectRoomEdges(room).forEach(({ wall, p1, p2 }) => {
    const edgeOpenings = (room.openings || []).filter((o) => o.wall === wall);
    addWallEdge(w, ctx, p1, p2, edgeOpenings, wallHeight, ownerHistory, placementId, elementIds);
  });

  const rect = [
    { x: room.gx, y: room.gy },
    { x: room.gx + room.gw, y: room.gy },
    { x: room.gx + room.gw, y: room.gy + room.gh },
    { x: room.gx, y: room.gy + room.gh },
  ];
  const floorSolid = extrudedSolid(w, rect, 0.06, -0.06, ctx.zAxis, ctx.xAxis, ctx.zAxis);
  elementIds.push(addBuildingElement(w, "IFCSLAB", ".FLOOR.", ownerHistory, "Floor", placementId, productShape(w, ctx.context, floorSolid)));
  if (room.has_roof) {
    const roofSolid = extrudedSolid(w, rect, ROOF_T, wallHeight, ctx.zAxis, ctx.xAxis, ctx.zAxis);
    elementIds.push(addBuildingElement(w, "IFCSLAB", ".ROOF.", ownerHistory, "Roof", placementId, productShape(w, ctx.context, roofSolid)));
  }
}

function addStair(w, ctx, s, allRooms, projectWallHeight, ownerHistory, placementId, elementIds) {
  const h = floorToFloorHeight(allRooms, s.floor ?? 0, projectWallHeight);
  if (!(h > 0)) return;
  const rotation = s.rotation || 0;
  const { w: fw, d: fd } = stairEffectiveFootprint(h, rotation, s.width);
  const x0 = s.x - fw / 2, x1 = s.x + fw / 2, y0 = s.y - fd / 2, y1 = s.y + fd / 2;
  const rect = [{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }];
  const solidId = extrudedSolid(w, rect, h, 0, ctx.zAxis, ctx.xAxis, ctx.zAxis);
  const shapeId = productShape(w, ctx.context, solidId);
  elementIds.push(addBuildingElement(w, "IFCSTAIR", ".STRAIGHT_RUN_STAIR.", ownerHistory, "Stair", placementId, shapeId));
}

// Columns and footings don't exist in the ported source (architect-
// studio-360 never had them) — added for this app's own column/
// foundation entities, same geometry helpers as everything else above.
function addColumn(w, ctx, c, floorBaseY, defaultWallHeight, ownerHistory, placementId, elementIds) {
  const size = c.size ?? COLUMN_SIZE;
  const height = c.height ?? defaultWallHeight;
  const half = size / 2;
  const rect = [
    { x: c.x - half, y: c.y - half },
    { x: c.x + half, y: c.y - half },
    { x: c.x + half, y: c.y + half },
    { x: c.x - half, y: c.y + half },
  ];
  const solidId = extrudedSolid(w, rect, height, 0, ctx.zAxis, ctx.xAxis, ctx.zAxis);
  const shapeId = productShape(w, ctx.context, solidId);
  elementIds.push(addBuildingElement(w, "IFCCOLUMN", ".COLUMN.", ownerHistory, "Column", placementId, shapeId));
}

// A standalone wall segment (not a room's own edge) — same addWallEdge
// helper every room wall already uses, just called directly on the
// segment's two endpoints with no openings of its own (phase 1 scope:
// doors/windows still only attach to a room's walls).
function addWall(w, ctx, wseg, defaultWallHeight, ownerHistory, placementId, elementIds) {
  const height = wseg.height ?? defaultWallHeight;
  addWallEdge(w, ctx, { x: wseg.x1, y: wseg.y1 }, { x: wseg.x2, y: wseg.y2 }, [], height, ownerHistory, placementId, elementIds);
}

function addGroundFloorFoundation(w, ctx, allRooms, columnsForGroundFloor, ownerHistory, placementId, elementIds) {
  const fp = foundationFootprint(allRooms, 0);
  if (fp) {
    const rect = [
      { x: fp.minX - FOUNDATION_OVERHANG, y: fp.minY - FOUNDATION_OVERHANG },
      { x: fp.maxX + FOUNDATION_OVERHANG, y: fp.minY - FOUNDATION_OVERHANG },
      { x: fp.maxX + FOUNDATION_OVERHANG, y: fp.maxY + FOUNDATION_OVERHANG },
      { x: fp.minX - FOUNDATION_OVERHANG, y: fp.maxY + FOUNDATION_OVERHANG },
    ];
    const solidId = extrudedSolid(w, rect, FOUNDATION_DEPTH, -FOUNDATION_DEPTH, ctx.zAxis, ctx.xAxis, ctx.zAxis);
    const shapeId = productShape(w, ctx.context, solidId);
    elementIds.push(addBuildingElement(w, "IFCFOOTING", ".STRIP_FOOTING.", ownerHistory, "Foundation", placementId, shapeId));
  }

  (columnsForGroundFloor || []).forEach((c) => {
    const size = c.size ?? COLUMN_SIZE;
    const half = size / 2 + FOUNDATION_OVERHANG;
    const rect = [
      { x: c.x - half, y: c.y - half },
      { x: c.x + half, y: c.y - half },
      { x: c.x + half, y: c.y + half },
      { x: c.x - half, y: c.y + half },
    ];
    const solidId = extrudedSolid(w, rect, FOUNDATION_DEPTH, -FOUNDATION_DEPTH, ctx.zAxis, ctx.xAxis, ctx.zAxis);
    const shapeId = productShape(w, ctx.context, solidId);
    elementIds.push(addBuildingElement(w, "IFCFOOTING", ".PAD_FOOTING.", ownerHistory, "Column Footing", placementId, shapeId));
  });
}

// project: {name, wall_height}; allRooms/stairsList/columnsList: same
// project data every other export (3D/DXF) already uses. `t` is this
// app's i18n t() function — optional, defaults to identity so storey
// names fall back to English rather than throwing.
export function exportProjectToIfc(project, allRooms, stairsList, columnsList, wallsList, t = (s) => s) {
  const w = new IfcWriter();
  const wallHeight = project?.wall_height ?? 2.7;
  const projectName = project?.name || "Untitled Project";

  const origin = point3(w, 0, 0, 0);
  const zAxis = w.add(`IFCDIRECTION((0.,0.,1.))`);
  const xAxis = w.add(`IFCDIRECTION((1.,0.,0.))`);
  const yAxis = w.add(`IFCDIRECTION((0.,1.,0.))`);
  const worldAxis = w.add(`IFCAXIS2PLACEMENT3D(#${origin},#${zAxis},#${xAxis})`);

  const person = w.add(`IFCPERSON($,$,'User',$,$,$,$,$)`);
  const org = w.add(`IFCORGANIZATION($,'${escapeStr(projectName)}',$,$,$)`);
  const personOrg = w.add(`IFCPERSONANDORGANIZATION(#${person},#${org},$)`);
  const app = w.add(`IFCAPPLICATION(#${org},'1.0','Lamsa Engineers','LAMSA')`);
  const ownerHistory = w.add(`IFCOWNERHISTORY(#${personOrg},#${app},$,.ADDED.,$,$,$,0)`);

  const lenUnit = w.add(`IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.)`);
  const areaUnit = w.add(`IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)`);
  const volUnit = w.add(`IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)`);
  const angleUnit = w.add(`IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)`);
  const units = w.add(`IFCUNITASSIGNMENT((#${lenUnit},#${areaUnit},#${volUnit},#${angleUnit}))`);

  const geomContext = w.add(`IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#${worldAxis},#${yAxis})`);
  const ctx = { context: geomContext, zAxis, xAxis };

  const projectId = w.add(`IFCPROJECT('${randomIfcGuid()}',#${ownerHistory},'${escapeStr(projectName)}',$,$,$,$,(#${geomContext}),#${units})`);

  const sitePlacement = w.add(`IFCLOCALPLACEMENT($,#${worldAxis})`);
  const siteId = w.add(`IFCSITE('${randomIfcGuid()}',#${ownerHistory},'Site',$,$,#${sitePlacement},$,$,.ELEMENT.,$,$,$,$,$)`);
  w.add(`IFCRELAGGREGATES('${randomIfcGuid()}',#${ownerHistory},$,$,#${projectId},(#${siteId}))`);

  const buildingPlacement = w.add(`IFCLOCALPLACEMENT(#${sitePlacement},#${worldAxis})`);
  const buildingId = w.add(`IFCBUILDING('${randomIfcGuid()}',#${ownerHistory},'${escapeStr(projectName)}',$,$,#${buildingPlacement},$,$,.ELEMENT.,$,$,$)`);
  w.add(`IFCRELAGGREGATES('${randomIfcGuid()}',#${ownerHistory},$,$,#${siteId},(#${buildingId}))`);

  const floors = [...new Set([...allRooms.map((r) => r.floor ?? 0), ...(wallsList || []).map((wseg) => wseg.floor ?? 0)])].sort((a, b) => a - b);
  const floorsToExport = floors.length ? floors : [0];
  const topFloor = Math.max(0, ...floors);
  const floorBaseYMap = computeFloorBaseYMap(allRooms, wallHeight, topFloor);
  const storeyIds = [];

  floorsToExport.forEach((floorNum) => {
    const floorRooms = allRooms.filter((r) => (r.floor ?? 0) === floorNum);
    const elevation = floorBaseYMap.get(floorNum) ?? 0;
    const elevPt = point3(w, 0, 0, elevation);
    const elevAxis = w.add(`IFCAXIS2PLACEMENT3D(#${elevPt},#${zAxis},#${xAxis})`);
    const storeyPlacement = w.add(`IFCLOCALPLACEMENT(#${buildingPlacement},#${elevAxis})`);
    const storeyId = w.add(
      `IFCBUILDINGSTOREY('${randomIfcGuid()}',#${ownerHistory},'${escapeStr(floorLabel(floorNum, t))}',$,$,#${storeyPlacement},$,$,.ELEMENT.,${fmt(elevation)})`
    );
    storeyIds.push(storeyId);

    const roomWallHeight = floorRooms[0]?.wall_height ?? wallHeight;
    const elementPlacement = w.add(`IFCLOCALPLACEMENT(#${storeyPlacement},#${worldAxis})`);
    const elementIds = [];

    floorRooms.forEach((room) => {
      addRoomWallsAndSlabs(w, ctx, room, room.wall_height ?? roomWallHeight, ownerHistory, elementPlacement, elementIds);
    });

    (stairsList || []).filter((s) => (s.floor ?? 0) === floorNum).forEach((s) => {
      addStair(w, ctx, s, allRooms, wallHeight, ownerHistory, elementPlacement, elementIds);
    });

    const floorColumns = (columnsList || []).filter((c) => (c.floor ?? 0) === floorNum);
    floorColumns.forEach((c) => {
      addColumn(w, ctx, c, elevation, wallHeight, ownerHistory, elementPlacement, elementIds);
    });

    (wallsList || []).filter((wseg) => (wseg.floor ?? 0) === floorNum).forEach((wseg) => {
      addWall(w, ctx, wseg, wallHeight, ownerHistory, elementPlacement, elementIds);
    });

    if (floorNum === 0) {
      addGroundFloorFoundation(w, ctx, allRooms, floorColumns, ownerHistory, elementPlacement, elementIds);
    }

    if (elementIds.length) {
      w.add(
        `IFCRELCONTAINEDINSPATIALSTRUCTURE('${randomIfcGuid()}',#${ownerHistory},$,$,(${elementIds.map((id) => `#${id}`).join(",")}),#${storeyId})`
      );
    }
  });

  w.add(`IFCRELAGGREGATES('${randomIfcGuid()}',#${ownerHistory},$,$,#${buildingId},(${storeyIds.map((id) => `#${id}`).join(",")}))`);

  const header = [
    "ISO-10303-21;",
    "HEADER;",
    "FILE_DESCRIPTION((''),'2;1');",
    `FILE_NAME('${escapeStr(projectName)}.ifc','${new Date().toISOString()}',(''),(''),'Lamsa Engineers','Lamsa Engineers','');`,
    "FILE_SCHEMA(('IFC4'));",
    "ENDSEC;",
    "",
    "DATA;",
  ].join("\n");

  const footer = ["ENDSEC;", "", "END-ISO-10303-21;", ""].join("\n");

  return [header, w.lines.join("\n"), footer].join("\n");
}
