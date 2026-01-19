---
title: "ABENFRONTEND_FILES"
description: |
  ABENFRONTEND_FILES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFRONTEND_FILES.htm"
abapFile: "ABENFRONTEND_FILES.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENFRONTEND", "FILES"]
---

Programs that are executed in [dialog](ABENDIALOG_PROCESSING_GLOSRY.html) and from SAP GUI can use the following methods of the class `CL_GUI_FRONTEND_SERVICES` to access files on the current [presentation server](ABENPRESENTATION_SERVER_GLOSRY.html):

The methods of the class `CL_GUI_FRONTEND_SERVICES` replace older function modules with similar functions, such as `GUI_UPLOAD`, `GUI_DOWNLOAD`, `WS_UPLOAD`, or `WS_DOWNLOAD`.

Writes to and reads a file on a presentation server with the operating system MS Windows. The directory is created on request. The SAP GUI availability query prevents runtime errors if the programs are not executed in [dialog processing](ABENDIALOG_PROCESSING_GLOSRY.html).

[Uploading an Excel File](ABENEXCEL_TO_ITAB_ABEXA.html)

-   the methods `GUI_UPLOAD` and `GUI_DOWNLOAD` to read and write to files,
-   the methods `FILE_...` to examine and process files,
-   the methods `DIRECTORY_...` to examine and process directories,
-   the method `EXECUTE` to execute [operating system statements](ABENABAP_SYSTEM_COMMANDS_PRES.html).

DATA gui TYPE c LENGTH 1. \\nCALL FUNCTION 'GUI\_IS\_AVAILABLE' \\n IMPORTING \\n return = gui. \\nIF gui IS INITIAL. \\n RETURN. \\nENDIF. \\n\\ \\nFINAL(dir) = \`C:\\\\temp\\\\my\_temp\\\\\`. \\nFINAL(name) = \`myfile.dat\`. \\n\\ \\nIF cl\_gui\_frontend\_services=>directory\_exist( dir ) = abap\_false. \\n DATA rc TYPE i. \\n cl\_gui\_frontend\_services=>directory\_create( \\n EXPORTING \\n directory = dir \\n CHANGING \\n rc = rc \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0 OR \\n rc <> 0 OR \\n cl\_gui\_frontend\_services=>directory\_exist( dir ) = abap\_false. \\n MESSAGE 'Directory could not be created' TYPE 'I' DISPLAY LIKE 'E'. \\n RETURN. \\n ENDIF. \\nENDIF. \\n\\ \\nFINAL(file) = dir && name. \\nIF cl\_gui\_frontend\_services=>file\_exist( file ) = abap\_true. \\n DATA ans TYPE c LENGTH 1. \\n CALL FUNCTION 'POPUP\_TO\_CONFIRM' \\n EXPORTING \\n text\_question = 'Overwrite existing file?' \\n text\_button\_1 = 'Yes' \\n text\_button\_2 = 'No' \\n IMPORTING \\n answer = ans. \\nENDIF. \\n\\ \\nTYPES data\_line TYPE x LENGTH 255. \\nDATA data\_tab TYPE STANDARD TABLE OF data\_line WITH EMPTY KEY. \\n\\ \\nCALL TRANSFORMATION id SOURCE text = \`Test data\` \\n RESULT XML data\_tab. \\n\\ \\nIF ans <> 2. \\n cl\_gui\_frontend\_services=>gui\_download( \\n EXPORTING \\n filename = file \\n filetype = 'BIN' \\n CHANGING \\n data\_tab = data\_tab \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n MESSAGE 'File could not be written' TYPE 'I' DISPLAY LIKE 'E'. \\n RETURN. \\n ENDIF. \\nENDIF. \\n\\ \\n... \\n\\ \\nCLEAR data\_tab. \\ncl\_gui\_frontend\_services=>gui\_upload( \\n EXPORTING \\n filename = file \\n filetype = 'BIN' \\n CHANGING \\n data\_tab = data\_tab \\n EXCEPTIONS \\n OTHERS = 4 ). \\nIF sy-subrc <> 0. \\n MESSAGE 'File could not be read' TYPE 'I' DISPLAY LIKE 'E'. \\n RETURN. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html