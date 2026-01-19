---
title: "ABENSQL_SPATIAL_FUNC_M"
description: |
  ABENSQL_SPATIAL_FUNC_M - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_SPATIAL_FUNC_M.htm"
abapFile: "ABENSQL_SPATIAL_FUNC_M.html"
keywords: ["do", "if", "try", "data", "types", "ABENSQL", "SPATIAL", "FUNC"]
---

The following table shows the spatial functions that can be specified as SQL expressions and the requirements on the arguments.

**Syntax** **Meaning** **Valid Argument Types** \\ **Result Type** **HANA Release**\\ `ST_3DLENGTH( value[, unit_name] )` Returns the length of the linestring or multi-linestring in three-dimensional space. `value`: `xstring` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 \\ `FLTP` SP8 `ST_ADDMEASURE( value, measureend, measurestart )` Returns a derived linestring with added or altered M values. `value`: `xstring` \\
`measureend`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`measurestart`: `f` `xstring` SP7 `ST_ALPHASHAPE( value, radius[, unit_of_measure] )` Returns the alpha shape geometry of the input geometry, based on a specified radius value. `value`: `xstring` \\
`radius`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`unit_of_measure`: `CHAR` greater than 0 and less than or equal to 128 `xstring` SP7 `ST_ALPHASHAPEAREA( value, fraction )` Returns an alpha shape of the input geometry, based on a specified area fraction. `value`: `xstring` \\
`fraction`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_ALPHASHAPEEDGE( value, fraction )` Returns an alpha shape of the input geometry, based on a specified edge fraction. `value`: `xstring` \\
`fraction`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_AREA( value[, unit_name] )` Computes the area of the multipolygon. `value`: `xstring` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 `FLTP` SP7 `ST_ASBINARY( value )` Returns the WKB representation of a geometry. `value`: `xstring` `RAWSTRING` SP7 `ST_ASESRIJSON( value )` Returns the EsriJSON representation of a geometry. `value`: `xstring` `STRING` SP7 `ST_ASEWKB( value )` Returns the extended WKB representation of a geometry. `value`: `xstring` `RAWSTRING` SP7 `ST_ASEWKT( value )` Returns the extended WKT representation of a geometry. `value`: `xstring` `STRING` SP7 `ST_ASGEOJSON( value )` Returns a string representing a geometry in GeoJSON format. `value`: `xstring` `STRING` SP7 `ST_ASMVTGEOM( value, \ bounds = x[, \ extent = x, \ buffer = x, \ clipgeom = x] )` Constructs a geometry transformed into the coordinate system of a Mapbox Vector Tile. `value`: `xstring` \\
`bounds`: `xstring` \\
`extent`: `INT4` \\
`buffer`: `INT4` \\
`clipgeom`: `INT4` `xstring` SP7 `ST_ASSVG( value[, \ approximate = x, \ attribute = x, \ decimaldigits = x, \ pathdataonly = x, \ randomfill = x, \ relative = x] )` Returns an SVG figure representing a geometry. `VALUE`: `xstring` \\
`approximate`: `CHAR` greater than 0 and less than or equal to 3 \\
`attribute`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c`\\
`decimaldigits`: `INT4` \\
`pathdataonly`: `CHAR` greater than 0 and less than or equal to 3 \\
`randomfill`: `CHAR` greater than 0 and less than or equal to 3 \\
`relative`: `CHAR` greater than 0 and less than or equal to 3 `STRING` SP7 `ST_ASTEXT( value )` Returns the text representation of a geometry. `value`: `xstring` `STRING` SP7 `ST_ASWKB( value )` Returns the WKB representation of a geometry. `value`: `xstring` `RAWSTRING` SP7 `ST_ASWKT( value )` Returns the WKT representation of a geometry. `value`: `xstring` `STRING` SP7 `ST_BOUNDARY( value )` Returns the Open Geospatial Consortium (OGC) boundary of the geometry. `value`: `xstring` \\ `xstring` SP7 `ST_BUFFER( value, distance[, unit_name_or_nip] )` Returns the geometry that represents all points whose distance from any point of a geometry is less than or equal to a specified distance in the given units. `value`: `xstring` \\
`distance`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`unit_name_or_nip`: any data type `xstring` SP7 `ST_CENTROID( value )` Returns the `ST_Point` value that is the mathematical centroid of the geometry value. `value`: `xstring` `xstring` SP7 `ST_CLOSESTPOINTOFAPPROACH( value, trajectoryb )` Computes the smallest measure (first point in time if measure represents time) at which two trajectories are at closest distance to each other. \\ `value`: `xstring` \\
`trajectoryb`: `xstring` \\ `FLTP` SP7 `ST_COLLECT( value, geometry2 )` Collects geometries into a single geometry collection or multi-geometry. `value`: `xstring` \\
`geometry2`: `xstring` `xstring` SP7 `ST_CONCAVEHULL( value )` Returns the concave hull of the geometry. `value`: `xstring` `xstring` SP7 `ST_CONTAINS( value, geometry2 )` Tests if a geometry spatially contains another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_CONVEXHULL( value )` Returns the convex hull of the geometry. `value`: `xstring` `xstring` SP7 `ST_COORDDIM( value )` Returns the number of coordinate dimensions stored with each point of the geometry. `value`: `xstring` `INT4` SP7 `ST_COVEREDBY( value, geometry2 )` Tests if a geometry is spatially covered by another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_COVERS( value, geometry2 )` Tests if a geometry spatially covers another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_DIFFERENCE( value, geometry2 )` Returns the geometry that represents the point set difference of two geometries. `value`: `xstring` \\
`geometry2`: `xstring` `xstring` SP7 `ST_DIMENSION( value )` Returns the dimension of the geometry. Points have dimension 0, lines have dimension 1, and polygons have dimension 2. Any empty geometry has dimension -1. `value`: `xstring` `INT4` SP7 `ST_DISJOINT( value, geometry2 )` Tests if a geometry is spatially disjoint from another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_DISTANCE( value, geometry2[, unit_name] )` Returns the smallest distance between the <geometry> and the specified geometry. `value`: `xstring` \\
`geometry2`: `xstring` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 `FLTP` SP7 `ST_ENDPOINT( value )` Returns an `ST_Point` value that is the end point. `value`: `xstring` `xstring` SP7 `ST_ENVELOPE( value )` Returns the bounding rectangle for the geometry. `value`: `xstring` `xstring` SP7 `ST_EQUALS( value, geom2 )` Tests if a geometry is spatially equal to another geometry. `value`: `xstring` \\
`geom2`: `xstring` `INT4` SP7 `ST_EXTERIORRING( value )` Returns the exterior ring of the polygon. `value`: `xstring` `xstring` SP7 `ST_FORCE2D( value )` Returns the geometry which results from dropping the Z and M coordinates, from the target geometry, if they exist, retaining only the X and Y components. `value`: `xstring` `xstring` SP7 `ST_FORCE3DM( value )` Returns the geometry which results from dropping the Z coordinate of the target geometry, if it exists, and adding an M coordinate if it does not exist, setting its value to 0. \\ `value`: `xstring` `xstring` SP7 `ST_FORCE3DZ( value )` Returns the geometry which results from dropping the M coordinate of the target geometry, if it exists, and adding a Z coordinate if it does not exist, setting its value to 0. \\ `value`: `xstring` `xstring` SP7 `ST_FORCE4D( value )` Returns the geometry which results from adding Z and M coordinates, and if any of them do not exist, sets their value to 0. `value`: `xstring` `xstring` SP7 `ST_FRECHETDISTANCE( value, linestring2[, unit_name] )` Computes the discrete Fréchet distance between two linestrings. `value`: `xstring` \\
`linestring2`: `xstring` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 `FLTP` SP7 `ST_GEOHASH( value[, maximum_length] )` Returns the Geohash representation of a geometry. `value`: `xstring` \\
`maximum_length`: `INT4` `CHAR` with the length of 128 SP7 `ST_GEOMETRYTYPE( value )` Returns the name of the type of the geometry. `value`: `xstring` `CHAR` with the length of 128 SP7 `ST_INTERIORRINGN( value, N )` Returns the nth interior ring in the polygon. `value`: `xstring` \\
`n`: `INT4` `xstring` SP7 `ST_INTERSECTION( value, geometry2 )` Returns the geometry that represents the point set intersection of two geometries. `value`: `xstring` \\
`geometry2`: `xstring` `xstring` SP7 `ST_INTERSECTS( value, geometry2 )` Tests if a geometry spatially intersects another value. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_INTERSECTSFILTER( value, geometry2 )` An inexpensive test if the two geometries might intersect. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_INTERSECTSRECT( value, corner1, corner2 )` Tests if a geometry intersects a rectangle. `value`: `xstring` \\
`corner1`: `xstring` \\
`corner2`: `xstring` `INT4` SP7 `ST_INTERSECTSRECTPLANAR( value, corner1, corner2 )` Tests if a geometry intersects a rectangle. `value`: `xstring` \\
`corner1`: `xstring` \\
`corner2`: `xstring` `INT4` SP7 `ST_INVALIDREASON( value )` Returns the reason why a geometry is invalid. `value`: `xstring` `CHAR` with the length of 10000 SP7 `ST_IS3D( value )` Determines if the geometry has Z coordinate values. `value`: `xstring` `INT4` SP7 `ST_ISCLOSED( value )` Tests if the value is closed. A linestring is closed if the start and end points are coincident. A multilinestring is closed if it is non-empty and has an empty boundary. `value`: `xstring` `INT4` SP7 `ST_ISEMPTY( value )` Determines whether the geometry represents an empty set. `value`: `xstring` `INT4` SP7 `ST_ISMEASURED( value )` Determines if the geometry has associated measure values. `value`: `xstring` `INT4` SP7 `ST_ISRING( value )` Tests if the linestring is a ring. A linestring is a ring if it is closed and simple (no self intersections). `value`: `xstring` `INT4` SP7 `ST_ISSIMPLE( value )` Determines whether the geometry is simple (containing no self intersections or other irregularities). `value`: `xstring` `INT4` SP7 `ST_ISVALID( value )` Determines whether the geometry is a valid spatial object. `value`: `xstring` `INT4` SP7 `ST_ISVALIDTRAJECTORY( value )` Determines whether a given geometry is a valid trajectory. A valid trajectory is a `LineString` or `CircularString` with strictly increasing m-coordinates as measure. \\ `value`: `xstring` `INT4` SP7 `ST_LENGTH( value[, unit_name] )` Returns the length measurement of all the linestrings in the multilinestring. `value`: `xstring` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 `FLTP` SP7 `ST_LINEINTERPOLATEPOINT( value, fraction )` Returns a point linearly interpolated on a given linestring. `value`: `xstring` \\
`fraction`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_LINELOCATEPOINT( value, point )` Finds the point on a given linestring that is closest to a given point. `value`: `xstring` \\
`point`: `xstring` `FLTP` SP7 `ST_LINESUBSTRING( value, startfrac, endfrac )` Returns a sub-linestring of the given linestring. `value`: `xstring` \\
`startfrac`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`endfrac`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_LOCATEALONG( value, measure )` Returns a derived geometry collection value with elements that match the specified measure. \\ `value`: `xstring` \\
`measure`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\ `xstring` SP7 `ST_LOCATEBETWEEN( value, measurestart, measureend )` Returns a derived geometry collection value with elements that match the specified range of measures inclusively. `value`: `xstring` \\
`measurestart`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`measureend`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_M( value )` Returns the measure value of a geometry of type `ST_Point`. `value`: `xstring` `FLTP` SP7 `ST_MMAX( value )` Retrieves the maximum M coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_MMIN( value )` Retrieves the minimum M coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_NUMGEOMETRIES( value )` Returns the number of geometries contained in the geometry collection. `value`: `xstring` \\ `INT4` SP7 `ST_NUMINTERIORRING( value )` Returns the number of interior rings in the polygon. `value`: `xstring` `INT4` SP7 `ST_NUMINTERIORRINGS( value )` Returns the number of interior rings in the polygon. `value`: `xstring` `INT4` SP7 `ST_NUMPOINTS( value )` Returns the number of points defining the linestring. `value`: `xstring` `INT4` SP7 `ST_ORDERINGEQUALS( value, geom2 )` Tests if a geometry is identical to another geometry. `value`: `xstring` \\
`geom2`: `xstring` `INT4` SP7 `ST_OVERLAPS( value, geometry2 )` Tests if a geometry overlaps another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_PERIMETER( value[, unit_name] )` Computes the perimeter of the polygon in the specified unit. `value`: `xstring` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 `FLTP` SP7 `ST_POINTN( value, n )` Returns the nth point in the linestring. `value`: `xstring` \\
`n`: `INT4` \\ `xstring` SP7 `ST_POINTONSURFACE( value )` Returns an `ST_Point` value that is guaranteed to spatially intersect the multipolygon. `value`: `xstring` `xstring` SP7 `ST_REMOVEPOINT( value, position )` Removes a point from a given linestring or point. `value`: `xstring` \\
`position`: `INT4` `xstring` SP8 `ST_REVERSE( value )` Returns the geometry with the direction of all curves reversed. `value`: `xstring` `xstring` SP7 `ST_ROTATE( value, angle[, centerx, centery] )` Rotates a geometry by a given angle counter-clockwise around the coordinate systems origin or a given center. `value`: `xstring` \\
`angle`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`centerx`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`centery`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_SCALE( value, factor[, factory] )` Scales a geometry by the given factor. `value`: `xstring` \\
`factor`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`factory`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_SIMPLIFY( value, epsilon )` Simplifies a geometry using the Douglas-Peucker algorithm. `value`: `xstring` \\
`epsilon`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_SNAPTOGRID( value, cell_size )` Returns a copy of the geometry with all points snapped to the specified grid. `value`: `xstring` \\
`cell_size`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_SRID( value[, srid] )` Retrieves or modifies the spatial reference system associated with the geometry. `value`: `xstring` \\
`srid`: `INT4` `xstring` if `srid` is specified, else `INT4` SP7 `ST_STARTPOINT( value )` Returns an `ST_Point` value that is the starting point. `value`: `xstring` `xstring` SP7 `ST_SYMDIFFERENCE( value, geometry2 )` Returns the geometry that represents the point set symmetric difference of two geometries. \\ `value`: `xstring` \\
`geometry2`: `xstring` \\ `xstring` SP7 `ST_TOUCHES( value, geometry2 )` Tests if a geometry spatially touches another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP8 `ST_TRANSFORM( value, srid[, on_error] )` Creates a copy of the geometry transformed into the specified spatial reference system. `value`: `xstring` \\
`srid`: `INT4` \\
`on_error`: `CHAR` greater than 0 and less than or equal to 4 `xstring` SP7 `ST_TRANSLATE( value, deltax, deltay )` Translates a geometry by given offsets. `value`: `xstring` \\
`deltax`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`deltay`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_TRANSLATE3D( value, deltax, deltay, deltaz )` Translates a geometry by given offsets. `value`: `xstring` \\
`deltax`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f`\\
`deltay`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`deltaz`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP7 `ST_UNION( value, geometry2 )` Returns the geometry that represents the point set union of two geometries. `value`: `xstring` \\
`geometry2`: `xstring` `xstring` SP7 `ST_WITHIN( value, geometry2 )` Tests if a geometry is spatially contained within another geometry. `value`: `xstring` \\
`geometry2`: `xstring` `INT4` SP7 `ST_WITHINDISTANCE( value, geometry2, distance[, unit_name] )` Tests if two geometries are within a specified distance of each other. `value`: `xstring` \\
`geometry2`: `xstring` \\
`distance`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`unit_name`: `CHAR` greater than 0 and less than or equal to 128 `INT4` SP7 `ST_X( value )` Returns the X coordinate of a geometry of type `ST_Point`. `value`: `xstring` `FLTP` SP7 `ST_XMAX( value )` Retrieves the maximum X coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_XMIN( value )` Retrieves the minimum X coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_Y( value )` Returns the Y coordinate of a geometry of type `ST_Point`. `value`: `xstring` `FLTP` SP7 `ST_YMAX( value )` Retrieves the maximum Y coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_YMIN( value )` Retrieves the minimum Y coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_Z( value )` Returns the Z coordinate of a geometry of type `ST_Point`. `value`: `xstring` `FLTP` SP7 `ST_ZMAX( value )` Retrieves the maximum Z coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 `ST_ZMIN( value )` Retrieves the minimum Z coordinate value of a geometry. `value`: `xstring` `FLTP` SP7 abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_spatial\_func.html