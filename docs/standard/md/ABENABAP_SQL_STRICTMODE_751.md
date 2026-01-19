---
title: "ABENABAP_SQL_STRICTMODE_751"
description: |
  ABENABAP_SQL_STRICTMODE_751 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_751.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_751.html"
keywords: ["select", "delete", "if", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "751"]
---

The strict mode of the syntax check in ABAP release 7.51 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.51](ABENNEWS-751-ABAP_SQL.html):

The strict mode in ABAP release 7.51 covers all rules of the [strict mode in ABAP release 7.50](ABENABAP_SQL_STRICTMODE_750.html), plus the following rules:

-   Use of the string functions [`LEFT`](ABENSQL_STRING_FUNC.html), [`CONCAT_WITH_SPACE`](ABENSQL_STRING_FUNC.html), [`INSTR`](ABENSQL_STRING_FUNC.html), and [`RPAD`](ABENSQL_STRING_FUNC.html)
-   Use of [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) after the addition [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) of the statement [`SELECT`](ABAPSELECT.html)
-   Use of the additions [`ORDER BY`](ABAPDELETE_WHERE.html), [`OFFSET`](ABAPDELETE_WHERE.html), and [`UP TO`](ABAPDELETE_WHERE.html) in the statement [`DELETE`](ABAPDELETE_DBTAB.html)
-   Statement [`WITH`](ABAPWITH.html)
-   [Cross join](ABAPSELECT_JOIN.html) in the [`SELECT` statement](ABAPSELECT.html)
-   [Inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) for `dbcur` in the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).
-   Use of new SQL functions:

-   Numeric function [`DIVISION`](ABENSQL_ARITH_FUNC.html)
-   String functions [`LOWER`](ABENSQL_STRING_FUNC.html) and [`UPPER`](ABENSQL_STRING_FUNC.html)
-   Date functions [`DATS_IS_VALID`](ABENSQL_DATE_FUNC.html), [`DATS_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATS_ADD_DAYS`](ABENSQL_DATE_FUNC.html) and [`DATS_ADD_MONTHS`](ABENSQL_DATE_FUNC.html)

-   Use of the addition [`AS dtype`](ABAPSELECT_AVG_AS.html) in the aggregate function [`AVG`](ABENSQL_AGG_FUNC.html)
-   Use of the addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) in the [`INTO`](ABAPINTO_CLAUSE.html) clause

-   Only the data types `b`, `s`, `i`, and `int8` are allowed for the operand `n` after the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html). A literal or a constant cannot have the value 0 here.
-   In the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), the additions grouped under [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html), [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html), and [`OPTIONS`](ABAPSELECT_OPTIONS.html) must also be specified at the end of the `SELECT` statement.
-   If it is not possible to make a [lossless](ABAPMOVE_EXACT.html) read on a [host constant](ABENHOST_CONSTANT_GLOSRY.html), a syntax error occurs.
-   The syntax of one of the [database hints](ABENDATABASE_HINT_GLOSRY.html) specified after [`%_HINTS`](ABENABAP_SQL_DB_HINTS.html) is checked, if possible.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html