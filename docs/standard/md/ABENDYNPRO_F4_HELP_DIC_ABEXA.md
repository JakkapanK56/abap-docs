---
title: "ABENDYNPRO_F4_HELP_DIC_ABEXA"
description: |
  ABENDYNPRO_F4_HELP_DIC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_F4_HELP_DIC_ABEXA.htm"
abapFile: "ABENDYNPRO_F4_HELP_DIC_ABEXA.html"
keywords: ["do", "if", "data", "ABENDYNPRO", "HELP", "DIC", "ABEXA"]
---

This example demonstrates how input helps from the ABAP Dictionary can be used.

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the components of the structure `DEMOF4HELP` from the ABAP Dictionary. The function code of the pushbutton is *CANCEL* with the function type *E*. When the user chooses the `F4` help for the individual fields, the following is displayed:

-   The fields *Date* and *Time* refer to the components `DATE_FIELD` and `TIME_FIELD` of the DDIC structure. The data type is either `DATS` or `TIMS`. Consequently, the input help displayed here is either a calendar or a clock, both set to the current values by default.
-   The field *Numbers* refers to the component `NUM_FIELD` of the DDIC structure. This component is based on the domain `DEMO_NUMBERS` to which ten fixed values are assigned. These are displayed as the input help.
-   The first field *Airline* refers to the component `CARRIER1` of the DDIC structure. This component is based on the data element `DEMOF4DE`. The search help `DEMO_F4_DE` with the parameter `CARRID` is assigned to this data element. The search help reads the columns `CARRID` and `CARRNAME` of the database table `SCARR`. Only `SCARRNAME` is specified but `CARRID` is flagged as an export parameter.
-   The second field *Airline* refers to the component `CARRIER2` of the DDIC structure. This component is assigned the check table `SCARR`. The check table `SCARR` in turn is assigned the search help `H_SCARR` which can display and export both columns `CARRID` and `CARRNAME`.
-   The field *Connection Number* refers to the component `CONNID` of the DDIC structure. This component is assigned the search help `DEMO_F4_FIELD`. The search help has two parameters, `CARRID` and `CONNID`, which are assigned to the components `CARRIER2` and `CONNID` of the structure. The search help imports `CARRIER`, reads the associated data from the database table `SPFLI`, displays `CARRIER` and `CONNID`, and exports `CONNID`.

REPORT demo\_dynpro\_f4\_help\_dictionary.\\n\\nTABLES demof4help.\\n\\nCALL SCREEN 100.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abeninput\_help\_abexas.html