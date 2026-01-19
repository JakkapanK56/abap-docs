---
title: "ABENABAP_SQL_STRICTMODE_753"
description: |
  ABENABAP_SQL_STRICTMODE_753 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_753.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_753.html"
keywords: ["select", "insert", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "753"]
---

The strict mode of the syntax check in ABAP release 7.53 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.53](ABENNEWS-753-ABAP_SQL.html):

The strict mode in ABAP release 7.53 covers all rules of the [strict mode in ABAP release 7.52](ABENABAP_SQL_STRICTMODE_752.html).

-   Use of one of the new [date/time functions](ABENABAP_SQL_DATE_TIME_FUNCTIONS.html)\\ `TIMS_IS_VALID`, `TSTMP_IS_VALID`, `TSTMP_CURRENT_UTCTIMESTAMP`, `TSTMP_SECONDS_BETWEEN`, `TSTMP_ADD_SECONDS`, `TSTMP_TO_DATS`, `TSTMP_TO_TIMS`, `TSTMP_TO_DST`, or `DATS_TIMS_TO_TSTMP`.
-   Use of one of the new [time zone functions](ABENSQL_TIMEZONE_FUNC.html)\\ `ABAP_SYSTEM_TIMEZONE` or `ABAP_USER_TIMEZONE`.
-   Use of the relational expression [`IS [NOT] INITIAL`](ABENWHERE_LOGEXP_INITIAL.html).
-   Access to [hierarchy data](ABENSELECT_HIERARCHY_DATA.html).
-   The [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html) is used.
-   A [subquery](ABAPINSERT_FROM_SELECT.html) is used in the statement [`MODIFY`](ABAPMODIFY_DBTAB.html).
-   The addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) is specified in a [subquery](ABAPINSERT_FROM_SELECT.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html) or the table or view that is modified by the `INSERT` statement is accessed there.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html