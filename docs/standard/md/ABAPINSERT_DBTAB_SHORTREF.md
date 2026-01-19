---
title: "ABAPINSERT_DBTAB_SHORTREF"
description: |
  ABAPINSERT_DBTAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_DBTAB_SHORTREF.htm"
abapFile: "ABAPINSERT_DBTAB_SHORTREF.html"
keywords: ["select", "insert", "if", "data", "internal-table", "ABAPINSERT", "DBTAB", "SHORTREF"]
---

[Reference](ABAPINSERT_DBTAB.html)

`INSERT \{\ \{INTO dbtab|view|(target_syntax)            [USING CLIENT clnt]\ |\ [CLIENT SPECIFIED]\            [CONNECTION con|(con_syntax)]\            VALUES wa\}\         |\ \{ dbtab|view|(target_syntax)             [USING CLIENT clnt]\ |\ [CLIENT SPECIFIED]\             [CONNECTION con|(con_syntax)]\             FROM wa|\{TABLE itab [ACCEPTING DUPLICATE KEYS]\}|( SELECT subquery_clauses ) \}\ \}.`

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Inserts rows into a database table or into a DDIC table view.

-   `[INTO dbtab|view|(target_syntax)](ABAPIUMD_TARGET.html)`\\
    Specifies the database table and/or view statically or dynamically.
-   [`USING CLIENT`](ABAPIUMD_CLIENT.html)\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in `clnt`.
-   `[CLIENT SPECIFIED](ABAPIUMD_CLIENT.html)`\\
    Switches implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) to the client specified in the data source.
-   `[CONNECTION con|(con_syntax)](ABAPIUMD_CONN.html)`\\
    Makes the change on a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   `[\{VALUES wa\}|\{FROM wa\}|\{FROM TABLE itab\}](ABAPINSERT_SOURCE.html)`\\
    Specifies the rows to be inserted as a `wa` work area or as rows of an `itab` internal table.
-   `[ACCEPTING DUPLICATE KEYS](ABAPINSERT_SOURCE.html)`\\
    Prevents an exception if rows that already exist are to be inserted.
-   [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html)\\
    Specifies the inserted rows as a result set of a subquery `SELECT subquery_clauses`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html