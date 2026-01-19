---
title: "ABAPSELECTION-SCREEN_INCLUDE_COMNT"
description: |
  ABAPSELECTION-SCREEN_INCLUDE_COMNT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCLUDE_COMNT.htm"
abapFile: "ABAPSELECTION-SCREEN_INCLUDE_COMNT.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "INCLUDE", "COMNT"]
---

[Short Reference](ABAPSELECTION-SCREEN_INCL_SHORTREF.html)

`SELECTION-SCREEN INCLUDE COMMENT [/][pos](len) text`\\ 
                                 `[FOR FIELD sel]`\\ 
                                 `[MODIF ID modid]`\\ 
                                 `[ID id].`

The addition `COMMENT` is used to create an output field on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). `text` expects a name that was already used in a previous selection screen to create an output field using the statement [`SELECTION-SCREEN COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html). The name of a text symbol cannot be specified. The new output field represents the content of the global `text` variable that was already generated for the original selection screen.

The additions have the same meaning as in the statement `SELECTION-SCREEN COMMENT`. If `FOR FIELD` is not specified, the assignment of the original selection screen is applied.

The addition [`ID`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in a selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The addition `INCLUDE` in this variant ensures that the global variable `text` can be used by multiple selection screens at the same time.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_include.html