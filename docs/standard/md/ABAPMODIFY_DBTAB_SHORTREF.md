---
title: "ABAPMODIFY_DBTAB_SHORTREF"
description: |
  ABAPMODIFY_DBTAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_DBTAB_SHORTREF.htm"
abapFile: "ABAPMODIFY_DBTAB_SHORTREF.html"
keywords: ["select", "insert", "delete", "if", "data", "internal-table", "ABAPMODIFY", "DBTAB", "SHORTREF"]
---

[Reference](ABAPMODIFY_DBTAB.html)

`MODIFY dbtab|view|(target_syntax)         [USING CLIENT clnt]\ |\ [CLIENT SPECIFIED]\         [CONNECTION con|(con_syntax)]\         FROM \{ wa|\{TABLE itab\}|( SELECT subquery_clauses ) \}.`

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Inserts rows into or deletes them from a database table or a DDIC table view.

-   [`dbtab|view|(target_syntax)`](ABAPIUMD_TARGET.html)\\
    Specifies the database table and/or view statically or dynamically.
-   [`USING CLIENT`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in `clnt`.
-   [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in the data source.
-   `[CONNECTION con|(con_syntax)](ABAPIUMD_CONN.html)`\\
    Makes the change on a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   [`FROM \{ wa|\{TABLE itab\}|( SELECT subquery_clauses ) \}`](ABAPMODIFY_SOURCE.html)\\
    Specifies the rows to be inserted as a `wa` work area, as rows of an internal table `itab`, or as the result set of a subquery.

abenabap.html abenabap\_reference.html abenabap\_shortref.html