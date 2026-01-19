---
title: "ABAPSELECTION-SCREEN_LINE"
description: |
  ABAPSELECTION-SCREEN_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LINE.htm"
abapFile: "ABAPSELECTION-SCREEN_LINE.html"
keywords: ["select", "if", "case", "data", "ABAPSELECTION", "SCREEN", "LINE"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOL_SHORTREF.html)

`SELECTION-SCREEN BEGIN OF LINE.`\\ 
`...`\\ 
``[SELECTION-SCREEN POSITION \{pos|POS_LOW|POS_HIGH\}\ [[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)]].``\\ 
`...`\\ 
`SELECTION-SCREEN END OF LINE.`

The first and last statements define a new line below the existing elements on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). All the screen elements within these statements that are defined using the statements [`PARAMETERS`](ABAPPARAMETERS.html)\\ [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) are placed in this line one after the other without spaces.

Multiple `SELECTION-SCREEN POSITION` statements can be specified within the definition of a line. The statement `SELECTION-SCREEN POSITION` can be used to define the output position for the following screen element. The position `pos` can either be specified directly as a number between 1 and 83 or using `POS_LOW` or `POS_HIGH` expressions. The expression `POS_LOW` specifies the position in which the input field for a selection parameter or the first input field for a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) is displayed by default. `POS_HIGH` specifies the position in which the second input field for a selection criterion is displayed by default. If a different position is specified in the statement defining the following element, this is respected. The statement `SELECTION-SCREEN POSITION` is only possible within the definition of a line. If there are conflicts with existing screen elements, the selection screen cannot be generated.

The additions [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The following applies in the definition of a line:

If a screen element is assigned a position greater than 83 or is positioned outside a [block](ABAPSELECTION-SCREEN_BLOCK.html) with a frame, the selection screen is not generated. In the case of input and output fields that were positioned beforehand but have a length that extends beyond the end of the line, the visible length is shortened accordingly, and the content is displayed as scrollable in the visible length. In this case, pushbuttons and horizontal lines are cut off at position 83 or where the frame of the block ends.

A pushbutton, an input field, and an output field in a line in the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) for an executable program.

-   Output fields are not created for selection texts for the selection parameters and selection criteria displayed in these kinds of lines. Instead, these can be created by specifying a [`SELECTION-SCREEN COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html).
-   Further lines cannot be defined using `SELECTION-SCREEN BEGIN OF LINE`.
-   It is not possible to define blocks or [tabstrip controls](ABENTABSTRIP_CONTROL_GLOSRY.html) using [`SELECTION-SCREEN BEGIN OF [TABBED] BLOCK`](ABAPSELECTION-SCREEN_TABBED.html).
-   Within a line, only one selection criterion should be defined with [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) whose description can be specified in advance using [`SELECTION-SCREEN COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html). Other combinations, especially definitions of elements according to the selection criteria, can produce undefined behavior.
-   Backslashes (`/`) are not allowed in format specifications.
-   The position specification `pos` can be omitted in formatting specifications.

SELECTION-SCREEN: BEGIN OF LINE, \\n PUSHBUTTON 2(10) push USER-COMMAND fcode, \\n POSITION 16. \\nPARAMETERS para TYPE c LENGTH 20. \\nSELECTION-SCREEN: COMMENT 40(40) text, \\n END OF LINE. \\n\\ \\nINITIALIZATION. \\n push = 'Push'. \\n text = '<--- Fill field, then push button!'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html