---
title: "ABAPSELECTION-SCREEN_INCLUDE_BLOCK"
description: |
  ABAPSELECTION-SCREEN_INCLUDE_BLOCK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_INCLUDE_BLOCK.htm"
abapFile: "ABAPSELECTION-SCREEN_INCLUDE_BLOCK.html"
keywords: ["select", "do", "if", "data", "ABAPSELECTION", "SCREEN", "INCLUDE", "BLOCK"]
---

[Short Reference](ABAPSELECTION-SCREEN_INCL_SHORTREF.html)

`SELECTION-SCREEN INCLUDE BLOCKS block [ID id].`

The addition `BLOCKS` is used to create a block `block` on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). `block` expects a block that must have already been created on a previous selection screen using the statement [`SELECTION-SCREEN BEGIN OF BLOCK`](ABAPSELECTION-SCREEN_BLOCK.html) or [`SELECTION-SCREEN BEGIN OF [TABBED] BLOCK`](ABAPSELECTION-SCREEN_TABBED.html).

The new block has exactly the same structure as the original block and contains the same screen elements. The properties of all selection parameters, selection criteria, output fields, and pushbuttons in the new block are taken from the corresponding elements in the original block as if they were taken individually using the statement `SELECTION-SCREEN INCLUDE`.

If a block is copied within a block with a frame, the width of the original block is adjusted to fit the area within the frame. The original block cannot contain any elements outside this area.

The addition [`ID`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in a selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The addition `INCLUDE` in this variant ensures that once a block structure has been defined, the structure and the corresponding global variables can be used by multiple selection screens at the same time.

Reuses a block from the standard selection screen of an executable program in a separate selection screen with the number 500.

SELECTION-SCREEN: BEGIN OF BLOCK block, \\n COMMENT /1(40) text, \\n ULINE. \\nPARAMETERS: p1(10) TYPE c, \\n p2(10) TYPE c, \\n p3(10) TYPE c. \\nSELECTION-SCREEN END OF BLOCK block. \\n\\ \\nSELECTION-SCREEN: BEGIN OF SCREEN 500 AS WINDOW, \\n INCLUDE BLOCKS block, \\n END OF SCREEN 500. \\n\\ \\nINITIALIZATION. \\n text = 'Standard Selection'. \\n\\ \\nSTART-OF-SELECTION. \\n ... \\n CALL SELECTION-SCREEN '0500' STARTING AT 10 10. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_include.html