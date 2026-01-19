---
title: "ABAPSELECTION-SCREEN_STANDARD"
description: |
  ABAPSELECTION-SCREEN_STANDARD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_STANDARD.htm"
abapFile: "ABAPSELECTION-SCREEN_STANDARD.html"
keywords: ["select", "do", "case", "data", "ABAPSELECTION", "SCREEN", "STANDARD"]
---

Each [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) contains a standard selection screen with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) 1000. The screen elements on the standard selection screen are defined by all [`PARAMETERS`](ABAPPARAMETERS.html), [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html), and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) statements that are not within the definition of a standalone selection screen, in other words, that are not defined between the following statements:

SELECTION-SCREEN BEGIN OF SCREEN ...\\ 
...\\ 
SELECTION-SCREEN END OF SCREEN ...

In cases where a standard selection screen combines the screen of the executable program and the screen of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), the screen elements of the executable program are arranged below the elements of the logical database.

Function pools and [module pools](ABENMODUL_POOL_GLOSRY.html) do not have a standard selection screen. Here, the three statements `PARAMETERS`, `SELECT-OPTIONS`, and `SELECTION-SCREEN` must be within the definition of the standalone selection screen.

It is advisable to group all the statements that define the standard selection screen and list them in the global declaration part together with the definitions of standalone selection screens.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_definition.html