---
title: "ABAPSELECTION-SCREEN_TAB_SHORTREF"
description: |
  ABAPSELECTION-SCREEN_TAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_TAB_SHORTREF.htm"
abapFile: "ABAPSELECTION-SCREEN_TAB_SHORTREF.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "TAB", "SHORTREF"]
---

[Reference](ABAPSELECTION-SCREEN_TABBED.html)

`SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode                  [DEFAULT [PROGRAM prog] SCREEN dynnr]\                  [MODIF ID modid]\                  [FOR \{TABLE|NODE\} node [ID id]].`

Defines a [tab title](ABENTAB_TITLE_GLOSRY.html) with the name `tab`, the length `len`, and the [function code](ABENFUNCTION_CODE_GLOSRY.html)\\ `fcode` in a [tabstrip](ABENTABSTRIP_CONTROL_GLOSRY.html) area.

-   `DEFAULT [PROGRAM prog] SCREEN dynnr`\\
    Assigns the tab title a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html)\\ `dynnr` in the program `prog`.
-   [`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)\\
    Assigns the screen element to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.
-   [`FOR \{TABLE|NODE\} node`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)\\
    Assigns the screen element in a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) to a node `node` of the associated structure.
-   [`ID id`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)\\
    Defines a maximum three-character ID `id` for the screen element in a logical database.

abenabap.html abenabap\_reference.html abenabap\_shortref.html