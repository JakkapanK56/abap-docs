---
title: "ABAPSELECTION-SCREEN_FUNCTIONKEY"
description: |
  ABAPSELECTION-SCREEN_FUNCTIONKEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_FUNCTIONKEY.htm"
abapFile: "ABAPSELECTION-SCREEN_FUNCTIONKEY.html"
keywords: ["select", "do", "if", "data", "ABAPSELECTION", "SCREEN", "FUNCTIONKEY"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

``SELECTION-SCREEN FUNCTION KEY n [[`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html)].``

In the GUI status of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) set by the system, the [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html) contains five inactive [pushbuttons](ABENPUSHBUTTON_GLOSRY.html), to which the function codes *FC01* to *FC05* are assigned. This statement activates the pushbutton of the function code *FC0n*, where a value between 1 and 5 must be specified for `n`.

To enable use of the pushbuttons, the statement [`TABLES`](ABAPTABLES.html) can be used to declare an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) of the structure `SSCRFIELDS` from the ABAP Dictionary.

If a text is assigned to the component `functxt_0n` of the interface area `sscrfields` before the selection screen is called, this text is displayed on the corresponding pushbutton. Otherwise, the pushbutton does not contain any text.

When the user chooses a pushbutton in the application toolbar, the runtime framework raises the event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) and the associated function code is passed to the component `ucomm` of the interface work area `sscrfields`.

The [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html) can only be used in the selection include of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

[Selection Screens, Pushbuttons in the Application Toolbar](ABENSELSCREEN_PB_BAR_ABEXA.html)

-   To assign icons, a [tooltip](ABENTOOL_TIP_GLOSRY.html), and appropriate text to the pushbuttons, a data object of the structured type `SMP_DYNTXT` can be defined in the ABAP Dictionary. The ID of the icon, a tooltip, and the associated text must be assigned to the components of this data object. The content of the entire structure must then be assigned to the component `functxt_0n` of the interface work area `sscrfields`.
-   Once the event block in `AT SELECTION-SCREEN` has been processed, the system usually returns to displaying the selection screen. To exit [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) and continue executing the program, either *Execute* or *Cancel* must be chosen. This means pushbuttons on selection screens are intended primarily for use for dynamic modifications to the selection screen rather than to control the program.
-   If the content of the component `ucomm` is set to a function code used in the GUI status during selection screen processing, the [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) is modified accordingly.
-   It is not recommended that the system field `sy-ucomm` instead of `sscrfields-ucomm` is evaluated, since this does not guarantee that `sy-ucomm` is always given the correct value in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html