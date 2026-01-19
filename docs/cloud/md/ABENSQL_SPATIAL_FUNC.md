---
title: "ABENSQL_SPATIAL_FUNC"
description: |
  ABENSQL_SPATIAL_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_SPATIAL_FUNC.htm"
abapFile: "ABENSQL_SPATIAL_FUNC.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "data", "ABENSQL", "SPATIAL", "FUNC"]
---

`... func( arg1[, arg2] ... ) ...`

Calls a [spatial function](ABENSPATIAL_FUNC_GLOSRY.html)\\ `func` as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The arguments `arg1`, `arg2`, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

Using spatial functions, [spatial data](ABENSPATIAL_DATA_GLOSRY.html) can be accessed, manipulated, and analyzed. The implemented functions in ABAP SQL are mapped to the methods, functions, and constructors for spatial data in [SAP HANA](ABENSAP_HANA_GLOSRY.html). For more information refer to the [SAP HANA Spatial Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/cbbbfc20871e4559abfd45a78ad58c02/e1c934157bd14021a3b43b5822b2cbe9).

The spatial functions are listed and described in the following tables:

Calculation of the distance between two spatial points.

-   [Spatial Constructors](ABENSQL_SPATIAL_FUNC_C.html)
-   [Spatial Methods](ABENSQL_SPATIAL_FUNC_M.html)
-   [Spatial Functions](ABENSQL_SPATIAL_FUNC_F.html)
-   [Aggregate Spatial Functions](ABENSQL_SPATIAL_FUNC_A.html)

DELETE FROM demo\_geo\_point. \\nINSERT demo\_geo\_point FROM @( VALUE #( \\n point1 = \`010100002000000000E561A1D634A748400D71AC8BDB482140\` \\n point2 = \`0101000020000000006919A9F754BC49408A20CEC3090C1F40\` ) ). \\n\\ \\nSELECT st\_distance( point1, point2 ) \\n FROM demo\_geo\_point \\n INTO TABLE @FINAL(distance). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html