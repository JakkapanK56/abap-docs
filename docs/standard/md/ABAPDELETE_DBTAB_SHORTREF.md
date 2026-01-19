---
title: "ABAPDELETE_DBTAB_SHORTREF"
description: |
  ABAPDELETE_DBTAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_DBTAB_SHORTREF.htm"
abapFile: "ABAPDELETE_DBTAB_SHORTREF.html"
keywords: ["delete", "if", "data", "internal-table", "ABAPDELETE", "DBTAB", "SHORTREF"]
---

[Reference](ABAPDELETE_DBTAB.html)

``DELETE \{\ \{ FROM dbtab|view|(target_syntax)             [USING CLIENT clnt]\ |\ [CLIENT SPECIFIED]\             [CONNECTION con|(con_syntax)]\             [WHERE [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\ [ORDER BY ... [OFFSET o]]\ [UP TO n ROWS]\ \}\         |\ \{ dbtab|view|(target_syntax) [CLIENT SPECIFIED]\                                        [CONNECTION con|(con_syntax)]\ \}\             FROM wa|\{TABLE itab\}\ \}.``

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Deletes rows from a database table or a DDIC table view.

-   [`FROM dbtab|view|(target_syntax)`](ABAPIUMD_TARGET.html)\\
    Specifies the database table and/or view statically or dynamically.
-   [`USING CLIENT`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in `clnt`.
-   [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in `wa` or `itab`.
-   `[CONNECTION con|(con_syntax)](ABAPIUMD_CONN.html)`\\
    Makes the change on a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   [`WHERE sql_cond`](ABAPDELETE_WHERE.html)\\
    Uses a `sql_cond` condition to specify the rows that are to be deleted.
-   [`[ORDER BY ... [OFFSET o]]\ [UP TO n ROWS]`](ABAPDELETE_WHERE.html)\\
    Specifies an offset and the maximum number of rows to delete. `ORDER BY` can be used (or must be used) to define an order.
-   [`FROM \{ wa|\{TABLE itab\}\ \}`](ABAPDELETE_SOURCE.html)\\
    Specifies the rows that are to be deleted by matching them with the key values of a work area `wa` or the rows of an internal table `itab`.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html