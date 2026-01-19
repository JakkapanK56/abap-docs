---
title: "ABENDYNPRO_HOLD_DATA_ABEXA"
description: |
  ABENDYNPRO_HOLD_DATA_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_HOLD_DATA_ABEXA.htm"
abapFile: "ABENDYNPRO_HOLD_DATA_ABEXA.html"
keywords: ["delete", "if", "data", "ABENDYNPRO", "HOLD", "DATA", "ABEXA"]
---

This example demonstrates how to hold input data across transactions.

The static next dynpro of dynpro 100 is 0. It contains a single input/output field `field`. The dynpro flow logic is:

PROCESS BEFORE OUTPUT. \\n  MODULE hold\_data. \\nPROCESS AFTER INPUT.

In the PBO event of the dynpro, the Hold Data attribute is activated regardless of the static default. If, after entering a value, the user chooses *System -> User Profile -> Hold Data* or *Set Data*, the value is displayed again when the dynpro is called a second time and whenever the program is subsequently called (in the same [ABAP session](ABENABAP_SESSION_GLOSRY.html)) unless the user chooses Delete Data. This overwrites any value assigned to the field `field` in the ABAP program.

REPORT demo\_dynpro\_set\_hold\_data.\\n\\nDATA field(10) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nfield = 'XXXXXXXXXX'.\\n\\nCALL SCREEN 100.\\n\\nMODULE hold\_data OUTPUT.\\n SET HOLD DATA ON.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abapset\_hold\_data.html