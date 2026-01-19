---
title: "ABAPSELECTION-SCREEN_INCLUDE_SELOP"
description: |
  ABAPSELECTION-SCREEN_INCLUDE_SELOP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCLUDE_SELOP.htm"
abapFile: "ABAPSELECTION-SCREEN_INCLUDE_SELOP.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "INCLUDE", "SELOP"]
---

[Short Reference](ABAPSELECTION-SCREEN_INCL_SHORTREF.html)

`SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit`\\ 
                                        `[OBLIGATORY [OFF]]`\\ 
                                        `[NO INTERVALS [OFF]]`\\ 
                                        `[NO-EXTENSION [OFF]]`\\ 
                                        `[MODIF ID modid]`\\ 
                                        `[ID id].`

The addition `SELECT-OPTIONS` is used to create the screen elements for the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `selcrit` on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). `selcrit` expects a selection criterion that was already declared using the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) on a previous selection screen. All properties of the selection criterion are taken from the original selection screen.

The additions `OBLIGATORY`, `NO INTERVALS``NO-EXTENSION`, and `MODIF ID` have the same meaning as in the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS_SCREEN.html) and overwrite the corresponding properties taken from the original selection screen. If the selection criterion was declared using the additions `OBLIGATORY` or `NO INTERVALS` on the original selection screen, these properties can be deactivated on the current selection screen by specifying `OFF`.

The addition [`ID`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in a selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The addition `INCLUDE` in this variant ensures that the [selection table](ABENSELECTION_TABLE_GLOSRY.html)\\ `selcrit` can be filled with values from multiple selection screens at the same time.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_include.html