---
title: "ABENCDS_SQL_FUNCTIONS_V2"
description: |
  ABENCDS_SQL_FUNCTIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SQL_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_SQL_FUNCTIONS_V2.html"
keywords: ["select", "if", "ABENCDS", "SQL", "FUNCTIONS"]
---

`... func( arg1[, arg2] ... ) ...`

Calls built-in [SQL functions](ABENSQL_FUNCTION_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). For passed arguments `arg1`, `arg2`, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

If an argument contains the [null value](ABENNULL_VALUE_GLOSRY.html), the result is always the null value, except in the coalesce function. If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

-   [Numeric functions](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)
-   [String functions](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html)
-   [Coalesce function](ABENCDS_COALESCE_EXPRESSION_V2.html)

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html