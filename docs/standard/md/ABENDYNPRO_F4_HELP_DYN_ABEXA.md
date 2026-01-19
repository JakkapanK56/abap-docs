---
title: "ABENDYNPRO_F4_HELP_DYN_ABEXA"
description: |
  ABENDYNPRO_F4_HELP_DYN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_F4_HELP_DYN_ABEXA.htm"
abapFile: "ABENDYNPRO_F4_HELP_DYN_ABEXA.html"
keywords: ["select", "if", "data", "types", "ABENDYNPRO", "HELP", "DYN", "ABEXA"]
---

The example illustrates how obsolete dynpro input help works.

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields `carrier` and `connection`. The function code of the pushbutton is *CANCEL* with the function type *E*. The dynpro field `carrier` is assigned the search help `DEMO_F4_DE` with the search help parameter `CARRID`, which accesses the database table `SCARR`. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  FIELD carrier VALUES ('AA', 'LH'). \\n  FIELD connection SELECT \* \\n                      FROM  spfli \\n                      WHERE carrid = carrier \\n                        AND connid = connection.

When selecting the `F4` help for the individual fields, the user is shown the following types of input help:

-   For the airline carrier, the search help displays the list of airline names and copies the airline ID for the selected line into the input field. If the airline code is not one of those listed in the `VALUES` list of the flow logic, the input check raises an error message in the PAI event. The search help, therefore, overrides the `VALUES` addition for the input help, but not for the input checks. For this reason, a `VALUES` addition should not be used here.
-   For the connection, the flow logic displays the list of selected entries from the database table `SPFLI` and copies the connection number of the selected line into the input field.

REPORT demo\_dynpro\_f4\_help\_dynpro.\\n\\nDATA: carrier(3) TYPE c,\\n connection(4) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abendynpro\_obsolet.html dynpfield\_value\_select.html