---
title: "ABAPSELECTION-SCREEN_INCL_SHORTREF"
description: |
  ABAPSELECTION-SCREEN_INCL_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCL_SHORTREF.htm"
abapFile: "ABAPSELECTION-SCREEN_INCL_SHORTREF.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "INCL", "SHORTREF"]
---

[Reference](ABAPSELECTION-SCREEN_INCLUDE.html)

`SELECTION-SCREEN INCLUDE \{\ \{ PARAMETERS parameter                               [OBLIGATORY [OFF]]\                               [MODIF ID modid]\ \}\                           |\ \{ SELECT-OPTIONS selcrit                               [OBLIGATORY [OFF]]\                               [NO INTERVALS [OFF]]\                               [NO-EXTENSION [OFF]]\                               [MODIF ID modid]\ \}\                           |\ \{ COMMENT [/][pos](len) text                               [FOR FIELD sel]\                               [MODIF ID modid]\ \}\                           |\ \{ PUSHBUTTON [/][pos](len) button_text                               [USER-COMMAND fcode]\                               [MODIF ID modid]\ \}\                           |\ \{ BLOCKS block \}\ \}\                           [ID id].`

Inherits screen elements from a different [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

-   [`PARAMETERS parameter`](ABAPSELECTION-SCREEN_INCLUDE_PARAM.html)\\
    Inherits the screen elements from a parameter `parameter`.
-   [`SELECT-OPTIONS selcrit`](ABAPSELECTION-SCREEN_INCLUDE_SELOP.html)\\
    Inherits the screen elements from a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `selcrit`.
-   [`COMMENT [/][pos](len) text`](ABAPSELECTION-SCREEN_INCLUDE_COMNT.html)\\
    Inherits an output field in the position specified in `pos` and `len`.
-   [`PUSHBUTTON [/][pos](len) button_text [USER-COMMAND fcode]`](ABAPSELECTION-SCREEN_INCLUDE_PUSHB.html)\\
    Inherits a pushbutton in the position specified in `pos` and `len`. The [function code](ABENFUNCTION_CODE_GLOSRY.html) is either inherited or specified as `fcode`.
-   [`BLOCKS block`](ABAPSELECTION-SCREEN_INCLUDE_BLOCK.html)\\
    Inherits a block `block` or a [tabstrip](ABENTABSTRIP_CONTROL_GLOSRY.html) area with all its elements.
-   [`[OBLIGATORY [OFF]]\ [NO INTERVALS [OFF]]\ [MODIF ID modid]\ [FOR FIELD sel]`](ABAPSELECTION-SCREEN_INCLUDE_SELOP.html)\\
    Overwrites the corresponding properties of the inherited element.
-   [`ID id`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)\\
    Defines an ID `id` with a maximum of three characters on a logical database for the inherited screen element.

abenabap.html abenabap\_reference.html abenabap\_shortref.html