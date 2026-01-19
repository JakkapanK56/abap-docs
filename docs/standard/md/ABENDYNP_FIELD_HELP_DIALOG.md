---
title: "ABENDYNP_FIELD_HELP_DIALOG"
description: |
  ABENDYNP_FIELD_HELP_DIALOG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_FIELD_HELP_DIALOG.htm"
abapFile: "ABENDYNP_FIELD_HELP_DIALOG.html"
keywords: ["select", "update", "if", "data", "ABENDYNP", "FIELD", "HELP", "DIALOG"]
---

`FIELD dynp_field MODULE mod.`

If the statement `FIELD` is [linked](FIELD_MODULE.html) with a statement `MODULE` in the event block at POH or POV, the specified dialog module `mod` is called if the function keys F1 or F4 are selected on the assigned screen element. After the dialog module is processed, the system returns to display the current [screen layout](ABENSCREEN_GLOSRY.html) without raising the event [PBO](ABENPBO_GLOSRY.html) and without automatically transporting data from the ABAP program to the dynpro. After the dialog module is called, no condition `AT` or `ON` can be specified.

A field help or input help should be programmed in the called dialog module. If data is to be transported between the dynpro and the ABAP program, this transport must be programmed there as well. For both tasks, there are function modules, such as `DYNP_VALUES_READ` or `DYNP_VALUES_UPDATE`. The function module `DYNP_VALUES_UPDATE` is intended for the event POV and only works there and only for the current dynpro. If data is to be passed from the ABAP program to the dynpro outside of POV, the function module `DYNP_UPDATE_FIELDS` can also be used.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpfield.html abendynp\_field\_help.html