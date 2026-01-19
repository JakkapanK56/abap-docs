---
title: "ABAPSELECTION-SCREEN_INCLUDE_PUSHB"
description: |
  ABAPSELECTION-SCREEN_INCLUDE_PUSHB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCLUDE_PUSHB.htm"
abapFile: "ABAPSELECTION-SCREEN_INCLUDE_PUSHB.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "INCLUDE", "PUSHB"]
---

[Short Reference](ABAPSELECTION-SCREEN_INCL_SHORTREF.html)

`SELECTION-SCREEN INCLUDE PUSHBUTTON [/][pos](len) button_text`\\ 
                                    `[USER-COMMAND fcode]`\\ 
                                    `[MODIF ID modid]`\\ 
                                    `[ID id].`

The addition `PUSHBUTTON` is used to create a [pushbutton](ABENPUSHBUTTON_GLOSRY.html) on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). `button_text` expects a name already used to create a pushbutton using the statement [`SELECTION-SCREEN PUSHBUTTON`](ABAPSELECTION-SCREEN_PUSHBUTTON.html) on a previous selection screen. The name of a text symbol cannot be specified. The content of the global variable `button_text` that was generated for the original selection screen is used as the text for the new pushbutton.

The additions have the same meaning as in the statement `SELECTION-SCREEN PUSHBUTTON`. If `USER-COMMAND` is not specified, the function code from the original selection screen is applied.

The addition [`ID`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in a selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The addition `INCLUDE` in this variant ensures that the global variable `button_text` can be used by multiple selection screens at the same time.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_include.html