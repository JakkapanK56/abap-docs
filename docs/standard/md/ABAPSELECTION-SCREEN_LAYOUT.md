---
title: "ABAPSELECTION-SCREEN_LAYOUT"
description: |
  ABAPSELECTION-SCREEN_LAYOUT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LAYOUT.htm"
abapFile: "ABAPSELECTION-SCREEN_LAYOUT.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSELECTION", "SCREEN", "LAYOUT"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

1\. `SELECTION-SCREEN SKIP [n]\ [ldb_additions].`

2\. `SELECTION-SCREEN ULINE [[/][pos](len)]\ [MODIF ID modid]`\\
`[ldb_additions].`

3\. `SELECTION-SCREEN COMMENT [/][pos](len)`\\
`\{text|\{[text] FOR FIELD sel\}\}`\\
`[VISIBLE LENGTH vlen]`\\
`[MODIF ID modid]`\\
`[ldb_additions].`

4\. `SELECTION-SCREEN PUSHBUTTON [/][pos](len) button_text`\\
`USER-COMMAND ucom`\\
`[VISIBLE LENGTH vlen]`\\
`[MODIF ID modid]`\\
`[ldb_additions].`

5\. `SELECTION-SCREEN BEGIN OF LINE.`\\
`...`\\
`[SELECTION-SCREEN POSITION pos [ldb_additions]].`\\
`...`\\
`SELECTION-SCREEN END OF LINE.`

6\. `SELECTION-SCREEN BEGIN OF BLOCK block`\\
`[WITH FRAME [TITLE title]]`\\
`[NO INTERVALS].`\\
`...`\\
`SELECTION-SCREEN END OF BLOCK block.`

7\. `SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES.`\\
`...`\\
`SELECTION-SCREEN TAB (len) tab USER-COMMAND ucom`\\
`[DEFAULT [PROGRAM prog] SCREEN dynnr].`\\
`...`\\
`SELECTION-SCREEN END OF BLOCK tblock.`

8\. `SELECTION-SCREEN FUNCTION KEY n [ldb_additions].`

The [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) input fields are created using the statements [`PARAMETERS`](ABAPPARAMETERS.html) and [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html). By default, each of these statements creates its own line on the selection screen. The variants of the statement `SELECTION-SCREEN` shown above allow selection screens to be created differently. Other screen elements can be defined and the order of elements on the screen modified.

The above statements can be executed within the definition of a selection screen in the global declaration part of [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), function pools and [module pools](ABENMODUL_POOL_GLOSRY.html).

[Blank Lines](ABAPSELECTION-SCREEN_SKIP.html)

[Horizontal Lines](ABAPSELECTION-SCREEN_ULINE.html)

[Output Fields](ABAPSELECTION-SCREEN_COMMENT.html)

[Pushbuttons](ABAPSELECTION-SCREEN_PUSHBUTTON.html)

[Lines with Multiple Elements](ABAPSELECTION-SCREEN_LINE.html)

[Blocks](ABAPSELECTION-SCREEN_BLOCK.html)

[Tabstrips](ABAPSELECTION-SCREEN_TABBED.html)

[Pushbuttons in the Application Toolbar](ABAPSELECTION-SCREEN_FUNCTIONKEY.html)

-   The maximum width of a selection screen is 83. If this width is exceeded, the selection screen is truncated or not generated. In the case of blocks with a frame, the maximum width is reduced by the width of the frame.
-   All selection screen elements that can be created using the statement `SELECTION-SCREEN` are located in one namespace. This is the case even if the elements were created in different selection screens. In the case of selection screen elements for which a global data object is generated when the objects are created, the namespace of the program data object must also be respected. If an element or a data object is to be used in multiple selection screens, the addition [`INCLUDE`](ABAPSELECTION-SCREEN_INCLUDE.html) of the statement `SELECTION-SCREEN` can be used.
-   The selection screen elements must be positioned so that they do not overlap. If not, an error is produced when the selection screen is generated.
-   Shared namespaces particularly apply to a [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html), which consists of the selection screens of a logical database and the program itself. The elements defined in a program must not conflict with the elements in the logical database.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html