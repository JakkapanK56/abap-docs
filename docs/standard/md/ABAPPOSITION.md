---
title: "ABAPPOSITION"
description: |
  ABAPPOSITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPOSITION.htm"
abapFile: "ABAPPOSITION.html"
keywords: ["do", "if", "data", "ABAPPOSITION"]
---

[Short Reference](ABAPPOSITION_SHORTREF.html)

`POSITION pos.`

This statement places the [list cursor](ABENLIST_CURSOR_GLOSRY.html) at the position of the current line in the list buffer specified in `pos`. The program expects a data object of the type `i` for `pos`. If the value of `pos` is 0 or less than or equal to 0 or greater than the page length in `sy-linsz` defined with the addition [`LINE-SIZE`](ABAPNEW-PAGE_OPTIONS.html) of the program-initiating statement or [`NEW-PAGE`](ABAPNEW-PAGE.html), none of the subsequent output statements create any output until the list cursor is positioned within a line again.

Definition and use of a [macro](ABENMACRO_GLOSRY.html)\\ `write_frame` to draw frames around [`WRITE`](ABAPWRITE-.html) output. The `POSITION` statement positions the list cursor for subsequent output.

-   An output statement that follows `POSITION` and does not have its own position specification `pos` after `AT` writes to the specified position regardless of whether or not sufficient space is available on the line, truncating the output length accordingly, if necessary.
-   If an output position is specified within an existing output, it must be ensured that the position always refers to the characters stored in the list buffer. If Unicode characters that require more than one column in the list are displayed, the displayed output position can differ from the specified output position. In addition, the displayed content of a partially overwritten output can be shifted, depending on the characters that overwrote the output.

DATA: x TYPE i, \\n y TYPE i, \\n l TYPE i. \\n\\ \\nDEFINE write\_frame. \\n x = sy-colno. y = sy-linno. \\n WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP. \\n l = sy-colno - x. \\n y -= 1. SKIP TO LINE y. \\n ULINE AT x(l). \\n y += 2. SKIP TO LINE y. \\n ULINE AT x(l). \\n y -= 1. x = sy-colno. SKIP TO LINE y. POSITION x. \\nEND-OF-DEFINITION. \\n\\ \\nSKIP. \\nWRITE 'Demonstrating'. \\nwrite\_frame 'dynamic frames'. \\nWRITE 'in'. \\nwrite\_frame 'ABAP'. \\nWRITE 'output lists.'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html