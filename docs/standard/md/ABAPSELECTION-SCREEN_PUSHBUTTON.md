---
title: "ABAPSELECTION-SCREEN_PUSHBUTTON"
description: |
  ABAPSELECTION-SCREEN_PUSHBUTTON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_PUSHBUTTON.htm"
abapFile: "ABAPSELECTION-SCREEN_PUSHBUTTON.html"
keywords: ["select", "do", "if", "case", "data", "ABAPSELECTION", "SCREEN", "PUSHBUTTON"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

\\ `SELECTION-SCREEN PUSHBUTTON [/][pos|POS_LOW|POS_HIGH](len) button_text`\\ 
                            `USER-COMMAND fcode`\\ 
                            ``[VISIBLE LENGTH vlen]\                              [\ [`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)]\  \ [[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)].``

[1. `... [/][pos|POS_LOW|POS_HIGH](len)`](#ABAP_ADDITION_1@3@)

[2. `... USER-COMMAND fcode`](#ABAP_ADDITION_2@3@)

[3. `... VISIBLE LENGTH vlen`](#ABAP_ADDITION_3@3@)

This statement creates a [pushbutton](ABENPUSHBUTTON_GLOSRY.html) on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). The text on the pushbutton is determined by the content of `button_text`. The rules that apply to `text` in the addition [`COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html) also apply to `button_text`. The addition [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) assigns the pushbutton to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.

The [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

The position of the pushbutton must be specified using this addition. The syntax and meaning are the same as when creating [horizontal lines](ABAPSELECTION-SCREEN_ULINE.html), although in this case `len` defines the length of the pushbutton in the dynpro of the [selection screen](ABENDYNPRO_GLOSRY.html). If a pushbutton extends beyond position 83 or a [block](ABAPSELECTION-SCREEN_BLOCK.html) with a frame, it is truncated on the right.

If the addition `USER-COMMAND` is specified, the pushbutton must be assigned a function code `fcode`. The function code `fcode` must be specified directly and can only contain a maximum of 20 characters.

To enable the pushbutton, the statement [`TABLES`](ABAPTABLES.html) must be used to declare an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) of the structure `SSCRFIELDS` from the ABAP Dictionary.

If the user selects the pushbutton on the selection screen, the runtime framework raises the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) and the function code `fcode` is passed to the component `ucomm` in the interface work area `sscrfields`.

The addition `VISIBLE LENGTH` defines the visible length `vlen` of the pushbutton and its text. The syntax and meaning of this addition are the same as when creating [output fields](ABAPSELECTION-SCREEN_COMMENT.html), although a pushbutton is never displayed shorter than the text defined for it.

Defines and accesses a [standalone selection screen](ABENSTAND-ALONE_SEL_SCREEN_GLOSRY.html)\\ `500` with two pushbuttons in an executable program. An icon and a tooltip are created for the second pushbutton.

-   The function module `ICON_CREATE` can be used to assign an icon, a [tooltip](ABENTOOL_TIP_GLOSRY.html), and a text to a pushbutton. The length `len` of a pushbutton for the internal display of the icon must be set to a sufficient length and the visible length must be modified using `VISIBLE LENGTH`.
-   Once the event block in `AT SELECTION-SCREEN` has been processed, the system usually returns to displaying the selection screen. To exit [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) and continue executing the program, either *Execute* or *Cancel* must be chosen. This means pushbuttons on selection screens are intended primarily for use for dynamic modifications to the selection screen rather than to control the program.

-   If the function code of a pushbutton corresponds to a function code used in the GUI status of the selection screen, the [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) is affected accordingly.
-   It is not recommended that the system field `sy-ucomm` is evaluated instead of `sscrfields-ucomm`, since this does not guarantee that `sy-ucomm` is always given the correct value in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

TABLES sscrfields. \\n\\ \\nSELECTION-SCREEN: \\n BEGIN OF SCREEN 500 AS WINDOW TITLE title, \\n PUSHBUTTON 2(10) but1 USER-COMMAND cli1, \\n PUSHBUTTON 12(30) but2 USER-COMMAND cli2 \\n VISIBLE LENGTH 10, \\n END OF SCREEN 500. \\n\\ \\nAT SELECTION-SCREEN. \\n CASE sscrfields. \\n WHEN 'CLI1'. \\n ... \\n WHEN 'CLI2'. \\n ... \\n ENDCASE. \\n\\ \\nSTART-OF-SELECTION. \\n title = 'Push button'. \\n but1 = 'Button 1'. \\n\\ \\n CALL FUNCTION 'ICON\_CREATE' \\n EXPORTING \\n name = icon\_information \\n text = 'Button 2' \\n info = 'My quick info' \\n IMPORTING \\n RESULT = but2 \\n EXCEPTIONS \\n OTHERS = 0. \\n\\ \\n CALL SELECTION-SCREEN '0500' STARTING AT 10 10. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html