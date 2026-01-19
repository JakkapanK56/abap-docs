---
title: "ABAPSELECT_OPTIONS_USING"
description: |
  ABAPSELECT_OPTIONS_USING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_OPTIONS_USING.htm"
abapFile: "ABAPSELECT_OPTIONS_USING.html"
keywords: ["select", "do", "if", "data", "ABAPSELECT", "OPTIONS", "USING"]
---

`... USING \{ CLIENT clnt \}\          |\ \{ CLIENTS IN @client_range_tab \}\          |\ \{ CLIENTS IN T000 \}\          |\ \{ ALL CLIENTS \} ...`

The addition `USING` behind [`OPTIONS`](ABAPSELECT_OPTIONS.html) switches the [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) for all [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data sources of the current ABAP SQL statement. The variants of the addition have the same effect as if they were placed as individual [`USING`](ABAPSELECT_CLIENT.html) additions in the [`FROM` clause](ABAPFROM_CLAUSE.html) of each query of the statement.

If `USING` is specified behind `OPTIONS` there must be at least on client-dependent data source in a query of the current statement and the addition `USING` or the obsolete [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) cannot be used in an individual query.

The client handling of two `WITH` statements is switched with `USING`. In the first `WITH` statement, the switching is done for all data sources behind `OPTIONS`, In the second `WITH` statement, the switching is done individually for each data source. The results are the same.

-   Placing the addition `USING` behind `OPTIONS` is especially useful in statements with many queries as for example [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) in the [`WITH`](ABAPWITH.html) statement or `SELECT` statements combined by [`UNION`, `INTERSECT`, `EXCEPT`](ABAPUNION.html). It allows switching client handling in the same way for all client-dependent queries instead of using the same `USING` addition for each client-dependent query.
-   The addition [`EXPOSE CLIENT`](ABAPSELECT_CLIENT.html) cannot be used behind `OPTIONS` but only for individual data sources.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(clnt) = '000'. \\ncl\_demo\_input=>request( CHANGING field = clnt ). \\n\\ \\nWITH \\n +carriers AS ( SELECT FROM scarr \\n FIELDS carrid, carrname ) \\n SELECT FROM spfli AS s \\n INNER JOIN +carriers AS c \\n ON s~carrid = c~carrid \\n FIELDS c~carrname, s~connid \\n WHERE s~carrid = 'UA' \\n INTO TABLE @FINAL(result\_options) \\n UP TO 10 ROWS \\n OPTIONS \\n USING CLIENT @clnt. \\n\\ \\nout->write( result\_options ). \\n\\ \\nWITH \\n +carriers AS ( SELECT FROM scarr \\n USING CLIENT @clnt \\n FIELDS carrid, carrname ) \\n SELECT FROM spfli AS s \\n INNER JOIN +carriers AS c \\n ON s~carrid = c~carrid \\n USING CLIENT @clnt \\n FIELDS c~carrname, s~connid \\n WHERE s~carrid = 'UA' \\n INTO TABLE @FINAL(result\_individual) \\n UP TO 10 ROWS. \\n\\ \\nASSERT result\_options = result\_individual. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_options.html