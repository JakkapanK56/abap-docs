---
title: "ABENSQL_TIMS_TIME_FUNC"
description: |
  ABENSQL_TIMS_TIME_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_TIMS_TIME_FUNC.htm"
abapFile: "ABENSQL_TIMS_TIME_FUNC.html"
keywords: ["select", "insert", "delete", "if", "class", "data", "types", "ABENSQL", "TIMS", "TIME", "FUNC"]
---

`... TIMS_IS_VALID( time ) ...`

This SQL function performs operations with arguments of the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html).

The function `TIMS_IS_VALID` determines whether the specification `time` contains a valid time in the format `HHMMSS`. The actual parameter must have the built-in data type [`TIMS`](ABENDDIC_BUILTIN_TYPES.html). The result has the data type [`INT4`](ABENDDIC_BUILTIN_TYPES.html). A valid time and the initial value produce the value 1 and all other input values (including the null value) produce the value 0.

The use of this function leads to the [strict mode from ABAP release 7.71](ABENABAP_SQL_STRICTMODE_771.html).

Applying the time function to a time column of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_SQL_TIME_FUNCTIONS` executes this access to the table and displays the result.

FINAL(time1) = cl\_demo\_date\_time=>get\_user\_time( ). \\n\\ \\n... \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( \\n id = 'X' \\n tims1 = time1 ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS tims1 AS time1, \\n tims\_is\_valid( tims1 ) AS valid1 \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_date\_time\_functions.html abensql\_time\_func.html