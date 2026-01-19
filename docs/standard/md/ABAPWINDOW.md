---
title: "ABAPWINDOW"
description: |
  ABAPWINDOW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWINDOW.htm"
abapFile: "ABAPWINDOW.html"
keywords: ["select", "do", "if", "data", "ABAPWINDOW"]
---

[Short Reference](ABAPWINDOW_SHORTREF.html)

`WINDOW STARTING AT col1 lin1`\\ 
       `[ENDING  AT col2 lin2].`

This statement initiates the display of the current details list in a dialog box. It only works in the event blocks for an interactive list event. If there are multiple `WINDOW` statements in an event block, the last one is valid.

The upper left corner is determined for the column and the line by the values in `col1` and `lin1`. The values refer to the GUI window of the basic list. The lower right corner is set automatically. The maximum lower right corner can either be specified in `col2` and `lin2` or is specified using the lower right corner of the GUI window where the list event took place.

`col1`, `lin1`, `col2`, and `lin2` expect data objects of the type `i`. The values of all data objects should be within the GUI window of the basic list and the values of `col1` and `lin1` should be less than those of `col2` and `lin2`. If not, the behavior is undefined.

If no GUI status is set using [`SET PF-STATUS`](ABAPSET_PF-STATUS_LIST.html) and an event block is defined using [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html) or [`AT PFnn`](ABAPAT_PFNN.html), the system automatically uses a [standard list status](ABENSTANDARD_LIST_STATUS_GLOSRY.html) suitable for the dialog box without a [menu bar](ABENMENU_BAR_GLOSRY.html) and [system toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html). This includes pushbuttons for the predefined function codes *PICK* (only for `AT LINE-SELECTION`), *PRI*, *%SC*, *%SC+*, and *RW* in the [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html).

If a GUI status is set using `SET PF-STATUS`, this should be created in the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) as a dialog box status and by including the list template.

Displays the details of an airline in a dialog box after a line is selected.

DATA: scarr\_wa TYPE scarr, \\n col TYPE i, \\n lin TYPE i. \\n\\ \\nSTART-OF-SELECTION. \\n SELECT carrid \\n FROM scarr \\n INTO scarr\_wa-carrid. \\n WRITE / scarr\_wa-carrid. \\n HIDE scarr\_wa-carrid. \\n ENDSELECT. \\n CLEAR scarr\_wa-carrid. \\n\\ \\nAT LINE-SELECTION. \\n col = sy-cucol + 40. \\n lin = sy-curow + 2. \\n WINDOW STARTING AT sy-cucol sy-curow \\n ENDING AT col lin. \\n IF sy-lsind = 1 AND \\n scarr\_wa-carrid IS NOT INITIAL. \\n SELECT SINGLE carrname, url \\n FROM scarr \\n WHERE carrid = @scarr\_wa-carrid \\n INTO (@scarr\_wa-carrname, @scarr\_wa-url). \\n WRITE: scarr\_wa-carrname, / scarr\_wa-url. \\n ENDIF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html