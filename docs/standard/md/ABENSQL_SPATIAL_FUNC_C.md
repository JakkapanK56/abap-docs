---
title: "ABENSQL_SPATIAL_FUNC_C"
description: |
  ABENSQL_SPATIAL_FUNC_C - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_SPATIAL_FUNC_C.htm"
abapFile: "ABENSQL_SPATIAL_FUNC_C.html"
keywords: ["if", "try", "types", "ABENSQL", "SPATIAL", "FUNC"]
---

The following table shows the spatial functions that can be specified as SQL expressions and the requirements on the arguments.

**Syntax** **Meaning** **Valid Argument Types** \\ **Result Type** **HANA Release**\\ `ST_NEW_CIRCULARSTRING( )` Constructs a circularstring representing the empty set - `xstring` SP7 `ST_NEW_CIRCULARSTRING( text[, srid] )` Constructs a circularstring from Well Known Text (WKT). `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_GEOMETRYCOLLECTION( )` Constructs a geometry collection representing the empty set. - `xstring` SP7 `ST_NEW_GEOMETRYCOLLECTION( text[, srid] )` Constructs a geometry collection from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_LINESTRING( )` Constructs a linestring representing the empty set. - `xstring` SP7 `ST_NEW_LINESTRING( text[, srid] )` Constructs a linestring from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_MULTILINESTRING( )` Constructs a multilinestring representing the empty set. - `xstring` SP7 `ST_NEW_MULTILINESTRING( text[, srid] )` Constructs a multilinestring from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_MULTIPOINT( )` Constructs a multipoint representing the empty set. - `xstring` SP7 `ST_NEW_MULTIPOINT( text[, srid] )` Constructs a multipoint from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_MULTIPOLYGON( )` Constructs a multi polygon representing the empty set. - `xstring` SP7 `ST_NEW_MULTIPOLYGON( text[, srid] )` Constructs a multi polygon from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_POINT( text[, srid] )` Constructs a point from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_POINT( x, y[, srid] )` Constructs a 2D point from X, Y coordinates. `x`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`y`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_POINTM( x, y, m[, srid])` Constructs a 2D point from X, Y coordinates and a measure value. `x`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`y`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`m`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_POINTZ( x, y, z[, srid] )` Constructs a 3D point from X, Y, Z coordinates. `x`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`y`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`z`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_POINTZM( x, y, z, m[, srid] )` Constructs a 3D point from X, Y, Z coordinates and a measure value. `x`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`y`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`z`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`m`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`srid`: `INT4` `xstring` SP7 `ST_NEW_POLYGON( )` Constructs a polygon representing the empty set. - `xstring` SP7 `ST_NEW_POLYGON( text[, srid] )` Constructs a polygon from a text representation. `text`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` \\
`srid`: `INT4` `xstring` SP7 abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_spatial\_func.html