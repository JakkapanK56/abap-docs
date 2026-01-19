---
title: "ABENSQL_SPATIAL_FUNC_F"
description: |
  ABENSQL_SPATIAL_FUNC_F - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_SPATIAL_FUNC_F.htm"
abapFile: "ABENSQL_SPATIAL_FUNC_F.html"
keywords: ["if", "try", "types", "ABENSQL", "SPATIAL", "FUNC"]
---

The following table shows the spatial functions that can be specified as SQL expressions and the requirements on the arguments.

**Syntax** **Meaning** **Valid Argument Types** \\ **Result Type** **HANA Release**\\ `ST_GEOMFROMESRIJSON( esrijson )` Constructs a geometry from an EsriJSON geometry object. `esrijson`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` `xstring` SP7 `ST_GEOMFROMEWKB( ewkb )` Constructs a geometry from a string representation. `ewkb`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `x` `xstring` SP7 `ST_GEOMFROMEWKT( ewkt )` Constructs a geometry from a string representation. `ewkt`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` `xstring` SP7 `ST_GEOMFROMGEOHASH( geohash[, srid] )` Constructs a geometry from a Geohash string. The default value for `srid` is 0. `geohash`: `CHAR` \\
`srid`: `i` or `int4` `xstring` SP7 `ST_GEOMFROMTEXT( wkt[, srid] )` Constructs a geometry from a character string representation. The default value for `srid` is 0. `wkt`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `i` or `int4` `xstring` SP7 `ST_GEOMFROMWKB( wkb[, srid] )` Constructs a geometry from a string representation. The default value for `srid` is 0. `wkb`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `x` \\
`srid`: `i` or `int4` `xstring` SP7 `ST_GEOMFROMWKT( wkt[, srid] )` Constructs a geometry from a string representation. The default value for `srid` is 0. `wkt`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `i` or `int4` `xstring` SP7 `ST_MAKELINE( value, secondpoint )` Creates a linestring from two given points. `value`: `xstring` \\
`secondpoint`: `xstring` `xstring` SP7 `ST_MAKEPOLYGON( exterionring[, interiorring] )` Creates a polygon from a given exterior ring (shell) and an optional collection of interior rings (holes). `exterionring`: `xstring` \\
`interiorring`: `xstring` `xstring` SP7 `ST_POINTFROMGEOHASH( geohash[, srid] )` Constructs a point from a Geohash string. The default value for `srid` is 0. `geohash`: `CHAR` greater than 0 and less than or equal to 128 \\
`srid`: `i` or `int4` `xstring` SP7 abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_spatial\_func.html