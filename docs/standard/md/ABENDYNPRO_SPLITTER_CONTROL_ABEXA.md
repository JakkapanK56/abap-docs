---
title: "ABENDYNPRO_SPLITTER_CONTROL_ABEXA"
description: |
  ABENDYNPRO_SPLITTER_CONTROL_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_SPLITTER_CONTROL_ABEXA.htm"
abapFile: "ABENDYNPRO_SPLITTER_CONTROL_ABEXA.html"
keywords: ["select", "data", "ABENDYNPRO", "SPLITTER", "CONTROL", "ABEXA"]
---

This example demonstrates a [splitter control](ABENSPLITTER_CONTROL_GLOSRY.html).

A subscreen is assigned to both parts of the splitter control. The subscreens are called in the dynpro flow logic.

REPORT demo\_dynpro\_splitter\_control.\\n\\nDATA splitter TYPE REF TO cl\_dynpro\_splitter.\\n\\nSTART-OF-SELECTION.\\n\\n CREATE OBJECT splitter\\n EXPORTING\\n splitter\_name = 'SPLITTER'.\\n\\n CALL SCREEN 100.\\n\\nMODULE set\_status OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\nENDMODULE.\\n\\nMODULE set\_sash OUTPUT.\\n splitter->set\_sash( ).\\nENDMODULE.\\n\\nMODULE cancel.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE get\_sash INPUT.\\n splitter->get\_guisash( ).\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html