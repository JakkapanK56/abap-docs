---
title: "ABENSQL_GEO_CONV_FUNC"
description: |
  ABENSQL_GEO_CONV_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_GEO_CONV_FUNC.htm"
abapFile: "ABENSQL_GEO_CONV_FUNC.html"
keywords: ["select", "insert", "delete", "if", "try", "data", "types", "ABENSQL", "GEO", "CONV", "FUNC"]
---

`... AS_GEO_JSON( geom ) ...`

The function `AS_GEO_JSON` reads geometry input in the [Extended Well-Known Binary (EWKB) representation](ABENDDIC_GEO_DATA.html) and returns a geometry object in [JSON](ABENJSON_GLOSRY.html) format. `geom` must be a table column of type [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) containing a valid geometry. The result is a geometry object in [JSON](ABENJSON_GLOSRY.html) format with data type [`STRING`](ABENDDIC_BUILTIN_TYPES.html).

If `geom` is null, then null is returned.

A geometry is inserted into the DDIC database table `DEMO_GEOM_EWKB` with the spatial reference ID *4326*. Within the `SELECT` statement, the column is read with the built-in function `AS_GEO_JSON`. The data type is converted from [`xstring`](ABENDDIC_BUILTIN_TYPES.html) to [`string`](ABENDDIC_BUILTIN_TYPES.html) and the coordinates of a polygon in [JSON](ABENJSON_GLOSRY.html) format are returned as output.

-   The geodata type [`GEOM_EWKB`](ABENDDIC_GEO_DATA.html) is mapped to the ABAP type [`xstring`](ABENDDIC_BUILTIN_TYPES.html). During the conversion to [JSON](ABENJSON_GLOSRY.html) format, a type conversion to the ABAP type [`string`](ABENDDIC_BUILTIN_TYPES.html) is carried out.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_geom\_ewkb. \\nINSERT demo\_geom\_ewkb FROM @( VALUE #( \\n id = 'X' \\n geom\_ewkb\_4326 = \\n '0103000020E6100000010000000500000000000000000000000000000000000' & \\n '0000000000000000000000000000000F03F000000000000F03F000000000000' & \\n 'F03F000000000000F03F0000000000000000000000000000000000000000000' & \\n '00000' ) ). \\n\\ \\nSELECT SINGLE \\n as\_geo\_json( geom\_ewkb\_4326 ) \\n FROM demo\_geom\_ewkb \\n WHERE id = 'X' \\n INTO (@FINAL(geo\_json)). \\n\\ \\nout->write\_json( geo\_json ). \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_conversion\_functions.html