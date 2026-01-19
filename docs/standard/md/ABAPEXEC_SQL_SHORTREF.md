---
title: "ABAPEXEC_SQL_SHORTREF"
description: |
  ABAPEXEC_SQL_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_SQL_SHORTREF.htm"
abapFile: "ABAPEXEC_SQL_SHORTREF.html"
keywords: ["select", "if", "data", "ABAPEXEC", "SQL", "SHORTREF"]
---

[Reference](ABAPEXEC.html)

`EXEC SQL [PERFORMING subr].    ...  ENDEXEC.`

Defines an area in which [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements can be specified for database accesses.

-   [`PERFORMING subr`](ABAPEXEC_IMPLICIT.html)\\
    **Obsolete:** Implicit cursor processing if a `SELECT` statement is specified. Here, the subroutine `subr` is called for each row read.

abenabap.html abenabap\_reference.html abenabap\_shortref.html