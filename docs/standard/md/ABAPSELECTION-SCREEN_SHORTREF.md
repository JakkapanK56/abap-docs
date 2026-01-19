---
title: "ABAPSELECTION-SCREEN_SHORTREF"
description: |
  ABAPSELECTION-SCREEN_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_SHORTREF.htm"
abapFile: "ABAPSELECTION-SCREEN_SHORTREF.html"
keywords: ["select", "if", "data", "ABAPSELECTION", "SCREEN", "SHORTREF"]
---

[Reference](ABAPSELECTION-SCREEN.html)

`SELECTION-SCREEN  \{\ \{ COMMENT [/][pos|POS_LOW|POS_HIGH](len)                        \{ text |\ \{[text] FOR FIELD sel\}\ \}\                        [VISIBLE LENGTH vlen]\                        [MODIF ID modid]\ \}\                    |\ \{ FUNCTION KEY n \}\                    |\ \{ POSITION \{pos|POS_LOW|POS_HIGH\}\ \}\                    |\ \{ PUSHBUTTON [/][pos|POS_LOW|POS_HIGH](len)                        button_text USER-COMMAND fcode                        [VISIBLE LENGTH vlen]\                        [MODIF ID modid]\ \}\                    |\ \{ SKIP [n]\ \}\                    |\ \{ ULINE [[/][pos|POS_LOW|POS_HIGH](len)]\                        [MODIF ID modid]\ \}\ \}\                    [FOR \{TABLE|NODE\} node [ID id]].`

Creates basic screen elements on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

-   [`COMMENT text |\ \{[text] FOR FIELD sel\}`](ABAPSELECTION-SCREEN_COMMENT.html)\\
    Creates an output field with the text `text` that can be assigned to a parameter or a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `sel`.
-   [`FUNCTION KEY n`](ABAPSELECTION-SCREEN_FUNCTIONKEY.html)\\
    Activates one of the predefined pushbuttons with the [function codes](ABENFUNCTION_CODE_GLOSRY.html)\\ *FC01* to `"FC05"` in the [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html).
-   [`POSITION \{pos|POS_LOW|POS_HIGH\}`](ABAPSELECTION-SCREEN_LINE.html)\\
    Positions the following screen element within a line.
-   [`PUSHBUTTON button_text USER-COMMAND fcode`](ABAPSELECTION-SCREEN_PUSHBUTTON.html)\\
    Creates a pushbutton with the text `button_text` and the function code `fcode`.
-   [`SKIP [n]`](ABAPSELECTION-SCREEN_SKIP.html)\\
    Creates one or `n` blank lines.
-   [`ULINE`](ABAPSELECTION-SCREEN_ULINE.html)\\
    Creates a horizontal line.
-   [`[/][pos|POS_LOW|POS_HIGH](len)`](ABAPSELECTION-SCREEN_ULINE.html)\\
    Specifies the position of the screen element.
-   `VISIBLE LENGTH vlen`\\
    Defines the visible length of the screen element as `vlen`.
-   [`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)\\
    Assigns the screen element to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.
-   [`FOR \{TABLE|NODE\} node`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)\\
    **Obsolete:** Assigns the screen element in a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) to a node `node` of the associated structure.
-   [`ID id`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)\\
    **Obsolete:** Defines a maximum three-character ID `id` for the screen element in a logical database.

abenabap.html abenabap\_reference.html abenabap\_shortref.html