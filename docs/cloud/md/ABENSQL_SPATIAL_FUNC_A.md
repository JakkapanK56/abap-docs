---
title: "ABENSQL_SPATIAL_FUNC_A"
description: |
  ABENSQL_SPATIAL_FUNC_A - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_SPATIAL_FUNC_A.htm"
abapFile: "ABENSQL_SPATIAL_FUNC_A.html"
keywords: ["do", "if", "try", "data", "types", "ABENSQL", "SPATIAL", "FUNC"]
---

The following table shows the aggregate spatial functions that can be specified as SQL expressions and the requirements on the arguments.

**Syntax** **Meaning** **Valid Argument Types** **Result Type** **HANA Release**\\ `ST_ALPHASHAPEAGGR( value, radius[, unit_of_measure] )` Returns the alpha shape geometry of a set of input geometries, based on a specified radius value. `value`: `xstring` \\
`radius`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` \\
`unit_of_measure`: `CHAR` greater than 0 and less than or equal to 128 `xstring` SP8 `ST_ALPHASHAPEAREAAGGR( value, fraction )` Returns the alpha shape geometry of a set of input geometries, based on a specified area fraction. `value`: `xstring` \\
`fraction`: [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `f` `xstring` SP8 `ST_ASESRIJSON_MULTICOLUMN( expression_list[, \ geom_name = x, \ object_id_name = x, \ include_z_values = x, \ include_m_values = x, \ coordinate_precision = x, \ format = x] )` Returns a string representing a set of rows in the EsriJSON format. `expression_list`: any data type \\
`geom_name`: `CHAR` greater than 0 and less than or equal to 128 \\
`object_id_name`: `CHAR` greater than 0 and less than or equal to 128 \\
`include_z_values`: `INT4` \\
`include_m_values`: `INT4` \\
`coordinate_precision`: `INT4` \\
`format`: `CHAR` greater than 0 and less than or equal to 128 `CHAR` SP7 `ST_ASGEOJSON_MULTICOLUMN( expression_list[, \ geom_name = x, \ feature_id_name = x, \ include_bbox = x, \ include_null_property_values = x, \ coordinate_precision = x, \ format = x] )` Returns a string representing a set of rows in the GeoJSON format. `expression_list`: any data type \\
`geom_name`: `CHAR` greater than 0 and less than or equal to 128 \\
`feature_id_name`: `CHAR` greater than 0 and less than or equal to 128 \\
`include_bbox`: `INT4` \\
`include_null_property_values`: `INT4` \\
`coordinate_precision`: `INT4` \\
`format`: `CHAR` greater than 0 and less than or equal to 128 `CHAR` SP7 `ST_ASMVT( expression_list[, \ layer_name = x, \ extent = x, \ geom_name = x] )` Returns a binary representation of a set of rows in the Mapbox Vector Tile format. `expression_list`: any data type \\
`layer_name`: `CHAR` greater than 0 and less than or equal to 128 \\
`extent`: `INT4` \\
`geom_name`: `CHAR` greater than 0 and less than or equal to 128 `RAWSTRING` SP7 `ST_ASSVGAGGR( value )` Returns a complete or partial SVG document which renders the geometries in a group. `value`: `xstring` `CHAR` SP7 `ST_COLLECTAGGR( value )` Creates a single geometry collection or multi-geometry containing all geometries of the column. `value`: `xstring` `xstring` SP7 `ST_CONCAVEHULLAGGR( value )` Returns the alpha shape geometry of a set of input geometries. `value`: `xstring` `xstring` SP7 `ST_CONVEXHULLAGGR( value )` Returns the convex hull for all of the geometries in a group. `value`: `xstring` `xstring` SP7 `ST_ENVELOPEAGGR( value )` Returns the bounding rectangle for all of the geometries in a group. `value`: `xstring` `xstring` SP7 `ST_INTERSECTIONAGGR( value )` Returns the spatial intersection of all of the geometries in a group. `value`: `xstring` `xstring` SP7 `ST_UNIONAGGR( value )` Returns the spatial union of all of the geometries in a group. `value`: `xstring` `xstring` SP7 abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_spatial\_func.html