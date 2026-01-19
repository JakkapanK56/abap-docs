---
title: "ABAPSELECTION-SCREEN_INCLUDE"
description: |
  ABAPSELECTION-SCREEN_INCLUDE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCLUDE.htm"
abapFile: "ABAPSELECTION-SCREEN_INCLUDE.html"
keywords: ["select", "do", "if", "ABAPSELECTION", "SCREEN", "INCLUDE"]
---

[Short Reference](ABAPSELECTION-SCREEN_INCL_SHORTREF.html)

1\. `SELECTION-SCREEN INCLUDE PARAMETERS para`\\
`[OBLIGATORY [OFF]]`\\
`[MODIF ID modid]`\\
`[ID id].`

2\. `SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit`\\
`[OBLIGATORY [OFF]]`\\
`[NO INTERVALS [OFF]]`\\
`[MODIF ID modid]`\\
`[ID id].`

3\. `SELECTION-SCREEN INCLUDE COMMENT [/][pos](len) text`\\
`[FOR FIELD sel]`\\
`[MODIF ID modid]`\\
`[ID id].`

4\. `SELECTION-SCREEN INCLUDE PUSHBUTTON [/][pos](len) button_text`\\
`[USER-COMMAND ucom]`\\
`[MODIF ID modid]`\\
`[ID id].`

5\. `SELECTION-SCREEN INCLUDE BLOCKS block [ID id].`

These variants of the statement `SELECTION-SCREEN` enable elements that have already been created in other [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) of the same program to be included in a selection screen. Either selection parameters, selection criteria, output fields, pushbuttons, or entire blocks can be included. They can be included in all and from all selection screens of the elements of the program. No elements can be included within the same selection screen. An element cannot be used more than once in the same selection screen. The definition of the selection screen from which the elements are included must be arranged in front of the current selection screen.

Reusing a block of the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) of an executable program in a [standalone selection screen](ABENSTAND-ALONE_SEL_SCREEN_GLOSRY.html) that has the number `500`.

[Include Parameters](ABAPSELECTION-SCREEN_INCLUDE_PARAM.html)

[Include Selection Criteria](ABAPSELECTION-SCREEN_INCLUDE_SELOP.html)

[Include Output Field](ABAPSELECTION-SCREEN_INCLUDE_COMNT.html)

[Include Pushbutton](ABAPSELECTION-SCREEN_INCLUDE_PUSHB.html)

[Include Blocks](ABAPSELECTION-SCREEN_INCLUDE_BLOCK.html)

SELECTION-SCREEN: BEGIN OF BLOCK block, \\n COMMENT /1(40) text, \\n ULINE. \\nPARAMETERS: p1(10) TYPE c, \\n p2(10) TYPE c, \\n p3(10) TYPE c. \\nSELECTION-SCREEN END OF BLOCK block. \\n\\ \\nSELECTION-SCREEN: BEGIN OF SCREEN 500 AS WINDOW, \\n INCLUDE BLOCKS block, \\n END OF SCREEN 500. \\n\\ \\nINITIALIZATION. \\n text = 'Standard Selection'. \\n\\ \\nSTART-OF-SELECTION. \\n ... \\n CALL SELECTION-SCREEN '0500' STARTING AT 10 10. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html