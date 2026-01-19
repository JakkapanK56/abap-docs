---
title: "ABENABAP_DYNPROS_VALUE_HELP_MOD"
description: |
  ABENABAP_DYNPROS_VALUE_HELP_MOD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_VALUE_HELP_MOD.htm"
abapFile: "ABENABAP_DYNPROS_VALUE_HELP_MOD.html"
keywords: ["select", "update", "do", "if", "data", "types", "ABENABAP", "DYNPROS", "VALUE", "HELP", "MOD"]
---

To define input helps in dialog modules, dialog modules can be called at POV time:

`PROCESS ON VALUE-REQUEST. ... FIELD field MODULE mod. ...`

After [`PROCESS ON VALUE-REQUEST`](PROCESS.html), the `MODULE` statement can only be used in combination with the `FIELD` statement. When `F4` is selected, the dialog module `mod` of the `FIELD` statement on whose field `field` the cursor is positioned. If multiple `FIELD` statements are specified for the same field `field`, only the first statement is executed. The dialog module `mod` does not provide the content of the dynpro field `field`, since this content is not transported by the `FIELD` statement during event POH. If the recommended [search helps](ABENSEARCH_HELP_GLOSRY.html) and search help exits do not meet requirements, proposal lists for the input help can be programmed in this dialog module.

Function modules are available here that support search helps as well as all other types of input help, and which also transport data between the dynpro and the ABAP program. These function modules are prefixed with `F4IF_`. The most important are:

The additional function modules `DYNP_VALUES_READ` and `DYNP_VALUES_UPDATE` read and return dynpro fields at POV time. For further information, see the relevant function module documentation.

[Input Helps in Dialog Modules](ABENDYNPRO_F4_HELP_DIAL_ABEXA.html)

-   `F4IF_FIELD_VALUE_REQUEST`
-   Calls the input help in the ABAP Dictionary dynamically. The import parameters `TABNAME` and `FIELDNAME` can be used to pass the name of the component of a structure or database in the ABAP Dictionary to the function module. The ABAP Dictionary input help defined for this component is called. All relevant dynpro fields are read. Any fields selected from the proposal list are either passed to the relevant input-enabled screen fields, if the import parameters `DYNPPROG`, `DYNPNR`, and `DYNPROFIELD` are specified, or passed back in the table parameter `RETURN_TAB`.
-   `F4IF_INT_TABLE_VALUE_REQUEST`
-   This function module displays a proposal list created in the ABAP program. This list is passed to the function module in the table parameter `VALUE_TAB`. The selection of the user is either passed to the corresponding input-enabled screen fields, if the import parameters `DYNPPROG`, `DYNPNR`, and `DYNPROFIELD` are specified, or passed back in the table parameter `RETURN_TAB`.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abenabap\_dynpros\_value\_help.html