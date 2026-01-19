---
title: "ABAPSELECTION-SCREEN_INCLUDE_PARAM"
description: |
  ABAPSELECTION-SCREEN_INCLUDE_PARAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCLUDE_PARAM.htm"
abapFile: "ABAPSELECTION-SCREEN_INCLUDE_PARAM.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "INCLUDE", "PARAM"]
---

[Short Reference](ABAPSELECTION-SCREEN_INCL_SHORTREF.html)

`SELECTION-SCREEN INCLUDE PARAMETERS para`\\ 
                                    `[OBLIGATORY [OFF]]`\\ 
                                    `[MODIF ID modid]`\\ 
                                    `[ID id].`

The addition `PARAMETERS` is used to create the screen elements for the selection parameter `para` on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). `para` expects a selection parameter that was already declared using the statement [`PARAMETERS`](ABAPPARAMETERS.html) in a previous selection screen. All properties of the selection parameter are taken from the original selection screen.

The additions `OBLIGATORY` and `MODIF ID` have the same meaning as in the statement `PARAMETERS` and overwrite the corresponding properties taken from the original selection screen. If the selection parameter on the original selection screen is declared using the addition `OBLIGATORY`, this property can be deactivated on the current selection screen by specifying `OFF`.

The addition [`ID`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in a selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The addition `INCLUDE` in this variant ensures that the global variant `para` can be filled with values by multiple selection screens at the same time.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_include.html