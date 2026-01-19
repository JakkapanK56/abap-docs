---
title: "ABENDYNPRO_SIMPLE_MODULE_ABEXA"
description: |
  ABENDYNPRO_SIMPLE_MODULE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_SIMPLE_MODULE_ABEXA.htm"
abapFile: "ABENDYNPRO_SIMPLE_MODULE_ABEXA.html"
keywords: ["select", "if", "case", "data", "ABENDYNPRO", "SIMPLE", "MODULE", "ABEXA"]
---

This example demonstrates how to call a module.

The static next dynpro number of dynpro 100 is 100. Its layout is taken from the fields of the structure `DEMO_CONN` in the ABAP Dictionary. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n   MODULE init\_screen\_100. \\n   MODULE status\_0100. \\nPROCESS AFTER INPUT. \\n   MODULE clear\_ok\_code. \\n   MODULE get\_data. \\n   MODULE user\_command\_0100.

In the GUI status `STATUS_100`, the icon *Cancel*\\ (F12) is activated using the function code *CANCEL* and the function keys F5 and Shift+F2 are assigned the function codes `DISPLAY` and `CLEAR`. The way this program works is similar to the executable example [Processing Input/Output Fields](ABENDYNPRO_IN_OUT_FIELD_ABEXA.html), but the processing logic is distributed across multiple dialog modules and a subroutine is used to read the data from the database.

PROGRAM demo\_dynpro\_module.\\n\\nTABLES demo\_conn.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok LIKE ok\_code,\\n wa\_spfli TYPE spfli.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n MOVE-CORRESPONDING wa\_spfli TO demo\_conn.\\nENDMODULE.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100'.\\n SET TITLEBAR '100'.\\nENDMODULE.\\n\\nMODULE clear\_ok\_code INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\nENDMODULE.\\n\\nMODULE get\_data INPUT.\\n MOVE-CORRESPONDING demo\_conn TO wa\_spfli.\\n CLEAR demo\_conn.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n CASE sy-dynnr.\\n WHEN 0100.\\n CASE save\_ok.\\n WHEN 'CANCEL'.\\n LEAVE PROGRAM.\\n WHEN 'DISPLAY'.\\n PERFORM read\_data.\\n WHEN 'CLEAR'.\\n CLEAR wa\_spfli.\\n ENDCASE.\\n ...\\n ENDCASE.\\nENDMODULE.\\n\\nFORM read\_data.\\n SELECT SINGLE\\n cityfrom, airpfrom, cityto, airpto, fltime, deptime, arrtime\\n FROM spfli\\n WHERE carrid = @wa\_spfli-carrid AND connid = @wa\_spfli-connid\\n INTO CORRESPONDING FIELDS OF @wa\_spfli.\\nENDFORM.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_dynpro\_statements.html dynpmodule.html abenmodule\_abexas.html