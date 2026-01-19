---
title: "ABAPSELECTION-SCREEN_LDB"
description: |
  ABAPSELECTION-SCREEN_LDB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LDB.htm"
abapFile: "ABAPSELECTION-SCREEN_LDB.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "LDB"]
---

[Versions of the standard selection screen](ABAPSELECTION-SCREEN_LDB_VERSION.html)\\
\\
1\. `SELECTION-SCREEN BEGIN OF VERSION vers text.`\\
`...`\\
`SELECTION-SCREEN EXCLUDE \{PARAMETERS para\}`\\
`|\ \{SELECT-OPTIONS selcrit\}`\\
`|\ \{RADIOBUTTON GROUPS group\}`\\
`|\ \{BLOCKS block\}`\\
`|\ \{IDS id\}.`\\
`...`\\
`SELECTION-SCREEN END OF VERSION vers.`\\
\\
[Nodes for field selections](ABAPSELECTION-SCREEN_LDB_FIELD.html)\\
\\
2\. `SELECTION-SCREEN FIELD SELECTION`\\
`FOR \{NODE|TABLE\} node [ID id].`\\
\\
[Nodes for dynamic selections](ABAPSELECTION-SCREEN_LDB_DYNAMIC.html)\\
\\
3\. `SELECTION-SCREEN DYNAMIC SELECTIONS`\\
`FOR \{NODE|TABLE\} node [ID id].`

These variants of the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) are intended specially for use in a logical database and can only be specified in the [selection include](ABENLDB_STATEMENTS.html).

If logical databases are no longer created, the use of these variants is no longer necessary.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html