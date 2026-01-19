---
title: "ABENDYNPRO_F4_HELP_DIAL_ABEXA"
description: |
  ABENDYNPRO_F4_HELP_DIAL_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_F4_HELP_DIAL_ABEXA.htm"
abapFile: "ABENDYNPRO_F4_HELP_DIAL_ABEXA.html"
keywords: ["select", "if", "data", "types", "internal-table", "ABENDYNPRO", "HELP", "DIAL", "ABEXA"]
---

This example demonstrates how input helps can be implemented in dialog modules.

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields `carrier` and `connection`. The function code of the pushbutton is *CANCEL* with the function type *E*. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\nPROCESS ON VALUE-REQUEST. \\n  FIELD carrier MODULE value\_carrier. \\n  FIELD connection MODULE value\_connection.

When selecting the `F4` help for the individual fields, the user is shown the following types of input help:

-   For the airline, the module `value_carrier` is called at POV. There, the function module `F4IF_FIELD_VALUE_REQUEST` displays the input help of the component `CARRIER1` of the structure `DEMOF4HELP` from the ABAP Dictionary, namely the search help `DEMOF4DE`. The selection of the user is passed to the dynpro field `carrier`.
-   For the connection, the module `value_connection` is called at POV. There, the function module `DYNP_VALUES_READ` passes the value of the dynpro field `carrier` to the program. `SELECT` then extracts the matching values from the database table `SPFLI` into the internal table `values_tab` and passes them to the function module `F4IF_INT_TABLE_VALUE_REQUEST`. The function module displays these values as an input help and passes the selection of the user to the dynpro field `connection`.

REPORT demo\_dynpro\_f4\_help\_module .\\n\\nTYPES: BEGIN OF values,\\n carrid TYPE spfli-carrid,\\n connid TYPE spfli-connid,\\n END OF values.\\n\\nDATA: carrier(3) TYPE c,\\n connection(4) TYPE c.\\n\\nDATA: progname TYPE sy-repid,\\n dynnum TYPE sy-dynnr,\\n dynpro\_values TYPE TABLE OF dynpread,\\n field\_value LIKE LINE OF dynpro\_values,\\n values\_tab TYPE TABLE OF values.\\n\\nCALL SCREEN 100.\\n\\nMODULE init OUTPUT.\\n progname = sy-repid.\\n dynnum = sy-dynnr.\\n CLEAR: field\_value, dynpro\_values.\\n field\_value-fieldname = 'CARRIER'.\\n APPEND field\_value TO dynpro\_values.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE value\_carrier INPUT.\\n\\n CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'\\n EXPORTING\\n tabname = 'DEMOF4HELP'\\n fieldname = 'CARRIER1'\\n dynpprog = progname\\n dynpnr = dynnum\\n dynprofield = 'CARRIER'\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF..\\n\\nENDMODULE.\\n\\nMODULE value\_connection INPUT.\\n\\n CALL FUNCTION 'DYNP\_VALUES\_READ'\\n EXPORTING\\n dyname = progname\\n dynumb = dynnum\\n translate\_to\_upper = 'X'\\n TABLES\\n dynpfields = dynpro\_values\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\n field\_value = dynpro\_values\[ 1 \].\\n\\n SELECT carrid, connid\\n FROM spfli\\n WHERE carrid = @( CONV #( field\_value-fieldvalue ) )\\n INTO CORRESPONDING FIELDS OF TABLE @values\_tab.\\n\\n CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'\\n EXPORTING\\n retfield = 'CONNID'\\n dynpprog = progname\\n dynpnr = dynnum\\n dynprofield = 'CONNECTION'\\n value\_org = 'S'\\n TABLES\\n value\_tab = values\_tab\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abeninput\_help\_abexas.html