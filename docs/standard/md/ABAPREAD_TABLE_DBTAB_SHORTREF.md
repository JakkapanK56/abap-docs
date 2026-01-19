---
title: "ABAPREAD_TABLE_DBTAB_SHORTREF"
description: |
  ABAPREAD_TABLE_DBTAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_DBTAB_SHORTREF.htm"
abapFile: "ABAPREAD_TABLE_DBTAB_SHORTREF.html"
keywords: ["if", "data", "ABAPREAD", "TABLE", "DBTAB", "SHORTREF"]
---

[Reference](ABAPREAD_TABLE_DBTAB.html)

`READ TABLE dbtab [WITH KEY key]\                   [SEARCH \{FKEQ|FKGE|GKEQ|GKGE\}]\                   [VERSION vers].`

**Obsolete:** Reads a single row from a database table or view `dbtab`.

-   `WITH KEY key`\\
    Determines the search key using the content of the data object `key`. Otherwise, the content of the [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `dbtab` is used.
-   `SEARCH \{FKEQ|FKGE|GKEQ|GKGE\}`\\
    Determines the search mode in the database table.
-   `VERSION vers`\\
    Specifies a different database table in `vers`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html