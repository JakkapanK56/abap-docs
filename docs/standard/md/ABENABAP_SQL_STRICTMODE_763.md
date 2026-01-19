---
title: "ABENABAP_SQL_STRICTMODE_763"
description: |
  ABENABAP_SQL_STRICTMODE_763 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_763.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_763.html"
keywords: ["select", "delete", "if", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "763"]
---

The strict mode of the syntax check in ABAP release 7.63 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.63](ABENNEWS-763-ABAP_SQL.html):

The strict mode in ABAP release 7.63 covers all rules of the [strict mode in ABAP release 7.62](ABENABAP_SQL_STRICTMODE_762.html), plus the following rules:

-   Use of the string functions [`LEFT`](ABENSQL_STRING_FUNC.html), [`CONCAT_WITH_SPACE`](ABENSQL_STRING_FUNC.html), [`INSTR`](ABENSQL_STRING_FUNC.html), and [`RPAD`](ABENSQL_STRING_FUNC.html)
-   Use of [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) after the addition [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) of the statement [`SELECT`](ABAPSELECT.html)
-   Use of the additions [`ORDER BY`](ABAPDELETE_WHERE.html), [`OFFSET`](ABAPDELETE_WHERE.html), and [`UP TO`](ABAPDELETE_WHERE.html) in the statement [`DELETE`](ABAPDELETE_DBTAB.html)

-   Only the data types `b`, `s`, `i`, and `int8` are allowed for the operand `n` after the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html). A literal or a constant cannot have the value 0 here.
-   In the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), the additions grouped under [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html), [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html), and [`OPTIONS`](ABAPSELECT_OPTIONS.html) must also be specified at the end of the `SELECT` statement.
-   If it is not possible to make a [lossless](ABAPMOVE_EXACT.html) read on a [host constant](ABENHOST_CONSTANT_GLOSRY.html), a syntax error occurs.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html