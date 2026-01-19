---
title: "ABAPSELECTION-SCREEN_ULINE"
description: |
  ABAPSELECTION-SCREEN_ULINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_ULINE.htm"
abapFile: "ABAPSELECTION-SCREEN_ULINE.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "ULINE"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

`SELECTION-SCREEN ULINE [[/][pos|POS_LOW|POS_HIGH](len)]`\\ 
                       ``[[`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)]``\\ 
``\ [[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)].``

[`... [/][pos|POS_LOW|POS_HIGH](len)`](#ABAP_ONE_ADD@1@)

This statement creates a horizontal line on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). If the formatting specification `[/][pos|POS_LOW|POS_HIGH](len)` is not made, the system creates a new line across the width of the selection screen below the lines already filled. The maximum length of this line is 83. The [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) addition assigns the line to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.

The [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

This formatting specification is used to position the line on the selection screen. `len` specifies the length of the line. The other information describes the column from which the line is drawn (starting point of line). Only if multiple elements are specified in a line can this position be omitted and the line drawn starting from the current position. If a forward slash symbol (`/`) is specified, a length must be specified and the line is drawn in a new line, otherwise, it is drawn in the current line. If multiple elements are specified in a line, the slash character (`/`) cannot be specified. If there are conflicts with existing screen elements, the selection screen cannot be generated.

The length `len` must be specified directly as a positive number with a maximum of two digits. If a line is too long, it is truncated outside [blocks](ABAPSELECTION-SCREEN_BLOCK.html) with frames at position 83 and at the right margin of the block inside a block with a frame. The position can be either a number `pos` between 1 and 83, `POS_LOW`, or `POS_HIGH`. `POS_LOW` specifies the position where the input field for a [selection parameter](ABENSELPAR_GLOSRY.html) or the first input field for a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) is displayed. `POS_HIGH` specifies the position at which the second input field for a selection criterion is displayed. If the statement is part of a block with a frame, a number specified for `pos` is interpreted with respect to the frame.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html