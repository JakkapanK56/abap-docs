---
title: "ABAPCALL_DB_PROCEDURE_SHORTREF"
description: |
  ABAPCALL_DB_PROCEDURE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_DB_PROCEDURE_SHORTREF.htm"
abapFile: "ABAPCALL_DB_PROCEDURE_SHORTREF.html"
keywords: ["data", "internal-table", "ABAPCALL", "PROCEDURE", "SHORTREF"]
---

[Reference](ABAPCALL_DATABASE_PROCEDURE.html)

`CALL DATABASE PROCEDURE proxy|(prox_name)`\\ 
    `[CONNECTION con|(con_syntax)]`\\ 
    `\{\ [EXPORTING  p1 = a1 p2 = a2 ...]`\\ 
      `[IMPORTING  p1 = a1 p2 = a2 ...]\ \}`\\ 
  `|\ \{\ [PARAMETER-TABLE ptab]\ \}.`

Calls a database procedure of [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) written in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) using a database proxy `proxy`.

-   [`CONNECTION con|(con_syntax)`](ABAPCALL_DATABASE_PROCEDURE.html)\\
    Executes the statement on a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   [`EXPORTING p1 FROM a1 p2 FROM a2 ...`](ABAPCALL_DB_PROC_PARAMETERS.html)\\
    Passes actual parameters `a1`, `a2`, ... to input parameters `p1`, `p2`, ...
-   [`IMPORTING p1 TO a1 p2 TO a2 ...`](ABAPCALL_DB_PROC_PARAMETERS.html)\\
    Inherits output parameters `p1`, `p2`, ... in actual parameters `a1`, `a2`, ...
-   [`PARAMETER-TABLE ptab`](ABAPCALL_DB_PROC_PARAMETER_TABLES.html)\\
    Assigns dynamic actual parameters to formal parameters using an internal table `ptab` of type `abap_parmbind_tab`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html