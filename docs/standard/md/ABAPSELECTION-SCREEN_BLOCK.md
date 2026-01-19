---
title: "ABAPSELECTION-SCREEN_BLOCK"
description: |
  ABAPSELECTION-SCREEN_BLOCK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_BLOCK.htm"
abapFile: "ABAPSELECTION-SCREEN_BLOCK.html"
keywords: ["select", "do", "if", "ABAPSELECTION", "SCREEN", "BLOCK"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOB_SHORTREF.html)

`SELECTION-SCREEN BEGIN OF BLOCK block`\\ 
                                `[WITH FRAME [TITLE title]]`\\ 
                                `[NO INTERVALS].`\\ 
`...`\\ 
`SELECTION-SCREEN END OF BLOCK block.`

[1. `... WITH FRAME [TITLE title]`](#ABAP_ADDITION_1@3@)

[2. `... NO INTERVALS`](#ABAP_ADDITION_2@3@)

These statements define a block with the name `block` on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). The name `block` must be specified directly and it must contain a maximum of 20 characters.

All screen elements on the selection screen defined by the statements [`PARAMETERS`](ABAPPARAMETERS.html), [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html), and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) between these statements are part of the block `block`. Additional blocks can be created within the definition of a block.

Each block is assigned a selection screen event [`AT SELECTION-SCREEN ON BLOCK`](ABAPAT_SELECTION-SCREEN.html), in which the user entries within the block can be processed together.

The addition `WITH FRAME` draws a frame around a block that is not empty. A maximum of five blocks can be nested. A standard width of 120 columns is defined for the outer frame. The frame of each nested block is narrower by 4 columns.

The addition `TITLE` can be specified to define a title for a block with a frame. The `title` can either be a freely definable name with a maximum of eight characters or the name of a text symbol from the program in the form `text-idf`, where `idf` is the three-character ID of the text symbol. If a freely definable name is chosen, the runtime framework generates a global variable of the same name of type `c` with a length of 70. When the selection screen is displayed, the content of the text symbol or the global variable is positioned at the top left corner of the frame. If the specified text symbol is not found, the system does not create a title.

If `NO INTERVALS` is specified, the addition `NO INTERVALS` is used implicitly in the statement `SELECT-OPTIONS` when all the [selection criteria](ABENSELECTION_CRITERION_GLOSRY.html) are defined for this block, and the block is narrowed accordingly. If the block has a frame, the blocks nested within it also inherit the addition `NO INTERVALS`.

Grouping of radio buttons into a block with a frame and title on the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) for an executable program.

SELECTION-SCREEN BEGIN OF BLOCK rad1 \\n WITH FRAME TITLE title. \\nPARAMETERS: r1 RADIOBUTTON GROUP gr1, \\n r2 RADIOBUTTON GROUP gr1, \\n r3 RADIOBUTTON GROUP gr1. \\nSELECTION-SCREEN END OF BLOCK rad1. \\n\\ \\nINITIALIZATION. \\n title = 'Selection'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html