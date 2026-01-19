---
title: "ABENABAP_SQL_STRICTMODE_773"
description: |
  ABENABAP_SQL_STRICTMODE_773 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_773.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_773.html"
keywords: ["select", "insert", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "773"]
---

The strict mode of the syntax check in ABAP release 7.73 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.73](ABENNEWS-773-ABAP_SQL.html):

The strict mode in ABAP release 7.73 covers all rules of the [strict mode in ABAP release 7.72](ABENABAP_SQL_STRICTMODE_772.html).

-   Access to [hierarchy data](ABENSELECT_HIERARCHY_DATA.html).
-   The [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html) is used.
-   A [subquery](ABAPINSERT_FROM_SELECT.html) is used in the statement [`MODIFY`](ABAPMODIFY_DBTAB.html).
-   The addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) is specified in a [subquery](ABAPINSERT_FROM_SELECT.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html) or the table or view that is modified by the `INSERT` statement is accessed there.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html