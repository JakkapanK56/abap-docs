---
title: "ABENABAP_SQL_STRICTMODE_765"
description: |
  ABENABAP_SQL_STRICTMODE_765 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_765.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_765.html"
keywords: ["select", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "765"]
---

The strict mode of the syntax check in ABAP release 7.65 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.65](ABENNEWS-765-ABAP_SQL.html):

The strict mode in ABAP release 7.65 covers all rules of the [strict mode in ABAP release 7.64](ABENABAP_SQL_STRICTMODE_764.html), plus the following rules:

-   Statement [`WITH`](ABAPWITH.html)
-   [Cross join](ABAPSELECT_JOIN.html) in the [`SELECT` statement](ABAPSELECT.html)
-   [Inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) for `dbcur` in the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).
-   Use of new SQL functions:

-   Numeric function [`DIVISION`](ABENSQL_ARITH_FUNC.html)
-   String functions [`LOWER`](ABENSQL_STRING_FUNC.html) and [`UPPER`](ABENSQL_STRING_FUNC.html)
-   Date functions [`DATS_IS_VALID`](ABENSQL_DATE_FUNC.html), [`DATS_DAYS_BETWEEN`](ABENSQL_DATE_FUNC.html), [`DATS_ADD_DAYS`](ABENSQL_DATE_FUNC.html) and [`DATS_ADD_MONTHS`](ABENSQL_DATE_FUNC.html)

-   Use of the addition [`AS dtype`](ABAPSELECT_AVG_AS.html) in the aggregate function [`AVG`](ABENSQL_AGG_FUNC.html)
-   Use of the addition [`EXTENDED RESULT`](ABAPSELECT_EXTENDED_RESULT.html) in the [`INTO`](ABAPINTO_CLAUSE.html) clause

-   The syntax of one of the [database hints](ABENDATABASE_HINT_GLOSRY.html) specified after [`%_HINTS`](ABENABAP_SQL_DB_HINTS.html) is checked, if possible.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html