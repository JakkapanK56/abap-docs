---
title: "ABENABAP_SQL_STRICTMODE_777"
description: |
  ABENABAP_SQL_STRICTMODE_777 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_777.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_777.html"
keywords: ["select", "do", "if", "class", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "777"]
---

The strict mode of the syntax check in ABAP release 7.77 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.77](ABENNEWS-777-ABAP_SQL.html):

The strict mode in ABAP release 7.77 covers all rules of the [strict mode in ABAP release 7.76](ABENABAP_SQL_STRICTMODE_776.html), plus the following rules:

-   Use of the additions [`NEW`](ABAPSELECT_INTO_TARGET.html) or [`INDICATORS`](ABAPSELECT_INDICATORS.html) in the [`INTO`](ABAPINTO_CLAUSE.html) clause.
-   Use of the [new data types](ABENNEWS-777-DDIC.html) from the ABAP Dictionary in a [`CAST`](ABENSQL_CAST.html) expression or after the addition [`AS`](ABAPSELECT_AVG_AS.html) of the aggregate function `AVG`.
-   Use of the additions `USING [ALL] CLIENTS [IN]` in [queries](ABAPSELECT_CLIENT.html) or in [write statements](ABAPIUMD_CLIENT.html).
-   Use of the `WITH` additions in the [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) or of the hierarchy navigator [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).
-   Use of the built-in function [`UUID`](ABENSQL_UUID.html).
-   Use of the window functions [`LEAD`](ABENSQL_WIN_FUNC.html) and [`LAG`](ABENSQL_WIN_FUNC.html).
-   Evaluation of value tuples in a relational expression using the operator [`IN`](ABENWHERE_LOGEXP_LIST_IN.html).
-   Evaluation of [LOBs](ABENLOB_GLOSRY.html) or [geodata types](ABENGEO_DATA_TYPE_GLOSRY.html) in the relational expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html).

-   An alias name defined using the addition `AS` for columns of the result set in a [`SELECT`](ABAPSELECT_LIST.html) list or for data sources in the [`FROM`](ABAPFROM_CLAUSE.html) clause must comply with the [naming conventions](ABENNAMING_CONVENTIONS.html) for program-internal names and the name `table_line` cannot be used. More specifically, an alias name must not contain a minus character (`-`).
-   If strict mode is applied to the statement [`FETCH`](ABAPFETCH.html), it is also applied to the associated statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html). If the rules are broken in `OPEN CURSOR`, an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS` is raised.
-   The obsolete use of the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) is forbidden in the statement [`SELECT`](ABAPSELECT.html) in queries and subqueries.
-   The obsolete use of the addition [`CLIENT SPECIFIED`](ABAPUD_CLIENT_OBSOLETE.html) in write statements is forbidden.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html