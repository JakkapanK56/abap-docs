---
title: "ABENSEL_SCREEN_GUI_STATUS_ABEXA"
description: |
  ABENSEL_SCREEN_GUI_STATUS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_GUI_STATUS_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_GUI_STATUS_ABEXA.html"
keywords: ["select", "data", "ABENSEL", "SCREEN", "GUI", "STATUS", "ABEXA"]
---

The example demonstrates how the GUI status of a selection screen can be changed.

In this example program, the two functions *Print* and *Save as Variant* are disabled. The function codes of the default GUI status can be found in the field *GUI Status* which can be displayed by choosing *System -> Status*.

REPORT demo\_sel\_screen\_status .\\n\\nDATA itab TYPE TABLE OF sy-ucomm.\\n\\nPARAMETERS test(10) TYPE c.\\n\\nAT SELECTION-SCREEN OUTPUT.\\n\\n itab = VALUE #( ( CONV sy-ucomm( 'PRIN' ) )\\n ( CONV sy-ucomm( 'SPOS' ) ) ).\\n\\n CALL FUNCTION 'RS\_SET\_SELSCREEN\_STATUS'\\n EXPORTING\\n p\_status = sy-pfkey\\n TABLES\\n p\_exclude = itab.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_overview.html