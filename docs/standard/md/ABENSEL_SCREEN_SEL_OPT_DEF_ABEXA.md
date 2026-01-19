---
title: "ABENSEL_SCREEN_SEL_OPT_DEF_ABEXA"
description: |
  ABENSEL_SCREEN_SEL_OPT_DEF_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSEL_SCREEN_SEL_OPT_DEF_ABEXA.htm"
abapFile: "ABENSEL_SCREEN_SEL_OPT_DEF_ABEXA.html"
keywords: ["select", "data", "ABENSEL", "SCREEN", "SEL", "OPT", "DEF", "ABEXA"]
---

The example demonstrates which default values can be set for selection criteria.

The symbol in front of the first field indicates that the field `airline-option` contains the operator `NB`. The green color indicates that the field `airline-sign` contains the value *I*. The arrow on the right pushbutton is not green since only one line of the selection table is filled.

REPORT demo\_sel\_screen\_select\_default.\\n\\nDATA wa\_spfli TYPE spfli.\\n\\nSELECT-OPTIONS airline FOR wa\_spfli-carrid\\n DEFAULT 'AA'\\n TO 'LH'\\n OPTION nb\\n SIGN i.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselect-options.html abapselect-options\_value.html