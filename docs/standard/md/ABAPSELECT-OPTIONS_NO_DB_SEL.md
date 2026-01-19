---
title: "ABAPSELECT-OPTIONS_NO_DB_SEL"
description: |
  ABAPSELECT-OPTIONS_NO_DB_SEL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT-OPTIONS_NO_DB_SEL.htm"
abapFile: "ABAPSELECT-OPTIONS_NO_DB_SEL.html"
keywords: ["select", "do", "if", "data", "ABAPSELECT", "OPTIONS", "SEL"]
---

[Short Reference](ABAPSELECT-OPTIONS_SHORTREF.html)

`...  [ NO DATABASE SELECTION ] ...`

The addition `NO DATABASE SELECTION` of the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) is only possible in an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that is linked to a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) and controls the passing of the [selection table](ABENSELECTION_TABLE_GLOSRY.html) to the logical database in the following situations:

If this addition is specified, the [selection table](ABENSELECTION_TABLE_GLOSRY.html) is not passed to the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) as a dynamic selection after [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

If logical databases are no longer used, it is no longer necessary to use this addition of the statement `SELECT-OPTIONS`.

-   It is used in an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that is linked with a logical database.
-   A component of a node in the linked logical database is specified for `dobj` after the addition [`FOR`](ABAPSELECT-OPTIONS_FOR.html) and is declared in the program with a [`TABLES`](ABAPTABLES.html) or [`NODES`](ABAPNODES.html) statement.
-   The node in the logical database is designed for dynamic selections.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_reporting\_statements.html