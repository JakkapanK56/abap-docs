---
title: "ABENABAP_SYSTEM_COMMANDS_PRES"
description: |
  ABENABAP_SYSTEM_COMMANDS_PRES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SYSTEM_COMMANDS_PRES.htm"
abapFile: "ABENABAP_SYSTEM_COMMANDS_PRES.html"
keywords: ["do", "if", "method", "class", "ABENABAP", "SYSTEM", "COMMANDS", "PRES"]
---

The method `EXECUTE` of the class `CL_GUI_FRONTEND_SERVICES` can be used to call operating system statements of the presentation server. The prerequisite is that the current ABAP program is executed in [dialog processing](ABENDIALOG_PROCESSING_GLOSRY.html) and from SAP GUI.

The method `EXECUTE` of the class `CL_GUI_FRONTEND_SERVICES` replaces the obsolete function module `WS_EXECUTE`.

Call of the command line window in MS Windows.

cl\_gui\_frontend\_services=>execute( \\n EXPORTING \\n application = 'cmd.exe' \\n default\_directory = 'C:\\\\' \\n EXCEPTIONS \\n cntl\_error = 1 \\n error\_no\_gui = 2 \\n bad\_parameter = 3 \\n file\_not\_found = 4 \\n path\_not\_found = 5 \\n file\_extension\_unknown = 6 \\n error\_execute\_failed = 7 \\n synchronous\_failed = 8 \\n not\_supported\_by\_gui = 9 \\n OTHERS = 10 ). \\nIF sy-subrc <> 0. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html