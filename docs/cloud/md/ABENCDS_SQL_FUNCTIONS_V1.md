---
title: "ABENCDS_SQL_FUNCTIONS_V1"
description: |
  ABENCDS_SQL_FUNCTIONS_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SQL_FUNCTIONS_V1.htm"
abapFile: "ABENCDS_SQL_FUNCTIONS_V1.html"
keywords: ["select", "if", "ABENCDS", "SQL", "FUNCTIONS"]
---

`... func( arg1[, arg2] ... ) ...`

Calls built-in [SQL functions](ABENSQL_FUNCTION_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). For passed arguments `arg1`, `arg2`, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

If an argument contains the [null value](ABENNULL_VALUE_GLOSRY.html), the result is always the null value (except in the [Coalesce function](ABENCDS_COALESCE_EXPRESSION_V1.html)). If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

-   [Numeric functions](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html)
-   [String functions](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html)
-   [Coalesce function](ABENCDS_COALESCE_EXPRESSION_V1.html)

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_builtin\_functions\_v1.html