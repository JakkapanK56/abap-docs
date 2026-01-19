---
title: "ABENDYNPRO_STATUS_ICONS_ABEXA"
description: |
  ABENDYNPRO_STATUS_ICONS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_STATUS_ICONS_ABEXA.htm"
abapFile: "ABENDYNPRO_STATUS_ICONS_ABEXA.html"
keywords: ["if", "case", "data", "ABENDYNPRO", "STATUS", "ICONS", "ABEXA"]
---

This example illustrates how status icons are used on dynpros.

The static next dynpro number of dynpro 100 is 100. A status field called `status_icon` is created with a visible length of 16 and a defined length of 26. The status icon and the space for the text are represented by placeholders in the Screen Painter. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE set\_icon. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE change.

Depending on the local `value` field in the program, the dialog module `set_icon` passes different values to the function module `ICON_CREATE`. The status field `status_icon` is filled with the content of the export parameter `result` of the function module. This displays the corresponding icon including the text and tooltip on the screen. When the user chooses *Continue*, the content of the field `value` are changed in the PAI, and consequently a new icon is defined in the PBO event.

REPORT demo\_dynpro\_status\_icons.\\n\\nDATA value TYPE i VALUE 1.\\n\\nDATA: status\_icon TYPE icons-text,\\n icon\_name(20) TYPE c,\\n icon\_text(10) TYPE c.\\n\\nCALL SCREEN 100.\\n\\nMODULE set\_icon OUTPUT.\\n\\n SET PF-STATUS 'SCREEN\_100'.\\n\\n CASE value.\\n WHEN 1.\\n icon\_name = 'ICON\_GREEN\_LIGHT'.\\n icon\_text = text-003.\\n WHEN 2.\\n icon\_name = 'ICON\_YELLOW\_LIGHT'.\\n icon\_text = text-002.\\n WHEN 3.\\n icon\_name = 'ICON\_RED\_LIGHT'.\\n icon\_text = text-001.\\n ENDCASE.\\n\\n CALL FUNCTION 'ICON\_CREATE'\\n EXPORTING\\n name = icon\_name\\n text = icon\_text\\n info = 'Status'\\n add\_stdinf = 'X'\\n IMPORTING\\n result = status\_icon\\n EXCEPTIONS\\n icon\_not\_found = 1\\n outputfield\_too\_short = 2\\n OTHERS = 3.\\n\\n CASE sy-subrc.\\n WHEN 1.\\n MESSAGE e101(sabapdemos) WITH text-004.\\n WHEN 2.\\n MESSAGE e101(sabapdemos) WITH text-005.\\n WHEN 3.\\n MESSAGE e101(sabapdemos) WITH text-006.\\n ENDCASE.\\n\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE change.\\n CASE value.\\n WHEN 1.\\n value = 2.\\n WHEN 2.\\n value = 3.\\n WHEN 3.\\n value = 1.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html