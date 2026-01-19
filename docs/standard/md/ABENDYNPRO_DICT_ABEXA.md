---
title: "ABENDYNPRO_DICT_ABEXA"
description: |
  ABENDYNPRO_DICT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_DICT_ABEXA.htm"
abapFile: "ABENDYNPRO_DICT_ABEXA.html"
keywords: ["select", "do", "while", "if", "data", "ABENDYNPRO", "DICT", "ABEXA"]
---

The example shows how dynpro fields can be associated with ABAP Dictionary.

The static next dynpro number of dynpro 100 is 100. The statement `TABLES` passes the components of the structure `DEMO_CONN` from ABAP Dictionary. The structure `DEMO_CONN` was especially created in ABAP Dictionary for dynpros of the flight data model. In addition to the components of the database table `SPFLI`, there is also a component `MARK` whose domain `S_FLAG` only defines the fixed values blank and *X*. On the dynpro, the ABAP Dictionary text for `MARK` is overwritten with *Cancel*. For all other fields the ABAP Dictionary fields are used. Some fields are no longer ready for input in the Screen Painter. Users can enter values for the airline and flight number. In this process, the user is automatically assisted by the field and the input help and the valid value check against check tables of the ABAP Dictionary. These checks are performed automatically before any dialog module is called in the ABAP program. It is not possible for the user to enter an airline not defined in the check table `SCARR` or to enter any flight numbers not matching the airlines defined in `SPFLI`, or to enter any values for `MARK` except blank and *X*. These checks do not have to be programmed in the ABAP program. The module `user_command_0100` of the ABAP program reads additional values for the checked key from the database table `SPFLI` and sends them to the dynpro in the `init_screen_100` event. The work area `demo_conn`, declared using the statement `TABLES` is used as an interface, while the actual data from the database is processed in the work area `wa_spfli`. If the user fills the *Cancel* field with *X*, the program exits.

PROGRAM demo\_dynpro\_dictionary .\\n\\nTABLES demo\_conn.\\nDATA wa\_spfli TYPE spfli.\\n\\nCALL SCREEN 100.\\n\\nMODULE init\_screen\_100 OUTPUT.\\n CLEAR demo\_conn-mark.\\n MOVE-CORRESPONDING wa\_spfli TO demo\_conn.\\n CLEAR wa\_spfli.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n IF demo\_conn-mark = 'X'.\\n LEAVE PROGRAM.\\n ENDIF.\\n MOVE-CORRESPONDING demo\_conn TO wa\_spfli.\\n SELECT SINGLE cityfrom, airpfrom, cityto, airpto,\\n fltime, deptime, arrtime\\n FROM spfli\\n WHERE carrid = @wa\_spfli-carrid AND connid = @wa\_spfli-connid\\n INTO CORRESPONDING FIELDS OF @wa\_spfli.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpro\_user\_actions.html abendynpro\_field\_abexas.html