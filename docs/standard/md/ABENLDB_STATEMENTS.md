---
title: "ABENLDB_STATEMENTS"
description: |
  ABENLDB_STATEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_STATEMENTS.htm"
abapFile: "ABENLDB_STATEMENTS.html"
keywords: ["select", "if", "data", "ABENLDB", "STATEMENTS"]
---

The following statements or additions for statements can be used in logical databases only. If logical databases are no longer created, these statements are no longer needed.

The database program of a logical database provides other programs with data about interface work areas. The name of a database program is `SAPDBldb`, where `ldb` is the name of the logical database. A special addition and statement both exist for the database program of a logical database.

A [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) can be defined in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). The standard selection screen of the logical database is combined with the standard selection screen of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that is linked to the logical database, to form a shared standard selection screen. The name of this selection include is `DBldbSEL`, where `ldb` is the name of the logical database.

The elements of the standard selection screen of a logical database are defined using the usual statements: [`PARAMETERS`](ABAPPARAMETERS.html), [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html).

The following elements are using exclusively for creating the selection screen of a logical database:

-   Addition [`DEFINING DATABASE`](ABAPREPORT_DEFINING.html) for the statement `REPORT`
-   Statement [`PUT`](ABAPPUT.html)

-   Special variants of the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN_LDB.html)
-   Special additions of the statement [`PARAMETERS`](ABAPPARAMETERS_LDB.html)
-   Special additions of the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS_LDB.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html