---
title: "ABAPCALL_METHOD_OLE2"
description: |
  ABAPCALL_METHOD_OLE2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_OLE2.htm"
abapFile: "ABAPCALL_METHOD_OLE2.html"
keywords: ["select", "do", "if", "case", "method", "data", "ABAPCALL", "METHOD", "OLE2"]
---

[Short Reference](ABAPCALL_METHOD_OF_OLE_SHORTREF.html)

 `CALL METHOD OF ole meth [= rc]\                 [EXPORTING p1 = f1 p2 = f2 ...]\                 [NO FLUSH]\ [QUEUE-ONLY].`

[1.`... EXPORTING p1 = f1 p2 = f2 ...`](#ABAP_ADDITION_1@3@)

[2.`... NO FLUSH`](#ABAP_ADDITION_2@3@)

[3.`... QUEUE-ONLY`](#ABAP_ADDITION_3@3@)

This statement calls the method `meth` of the automation object `ole`. The automation object must have been created using the special statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html) for automation objects. The name of the method must be specified in a character-like data object `meth`.

The return value of the external method `meth` can be stored in a data object `rc`. This data object expects, depending on the called method, a character-like data type of length 8 or a data type of type `ole2_object` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `OLE2` to be able to copy the addressed object.

The addition `EXPORTING` can be used to assign actual parameters `f1 f2 ...` to the input parameters `p1 p2 ...` of the automation method. The data type of the data objects `f1 f2 ...` depends on the requirements of the automation method.

The additions `NO FLUSH` and `QUEUE-ONLY` are described in the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html).

Depending on the selection on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html), this source code can be used to open the Excel file `Table.xls` in directory `C:\\temp`, start the application Word, and then close both applications again. The automation methods used are listed in the following table.

TABLES sscrfields. \\n\\ \\nDATA: excel TYPE ole2\_object, \\n word TYPE ole2\_object, \\n book TYPE ole2\_object, \\n rc TYPE c LENGTH 8. \\n\\ \\nSELECTION-SCREEN: \\n BEGIN OF SCREEN 100 AS WINDOW TITLE title, \\n BEGIN OF LINE, \\n PUSHBUTTON 2(12) button\_1 \\n USER-COMMAND word\_start, \\n PUSHBUTTON 20(12) button\_2 \\n USER-COMMAND excel\_start, \\n END OF LINE, \\n BEGIN OF LINE, \\n PUSHBUTTON 2(12) button\_3 \\n USER-COMMAND word\_stop, \\n PUSHBUTTON 20(12) button\_4 \\n USER-COMMAND excel\_stop, \\n END OF LINE, \\n END OF SCREEN 100. \\n\\ \\nSTART-OF-SELECTION. \\n button\_1 = 'Start Word'. \\n button\_2 = 'Start Excel'. \\n button\_3 = 'Stop Word'. \\n button\_4 = 'Stop Excel'. \\n CALL SELECTION-SCREEN 100 STARTING AT 10 10. \\n\\ \\nAT SELECTION-SCREEN. \\n CASE sscrfields-ucomm. \\n WHEN 'WORD\_START'. \\n CHECK word-handle <> -1. \\n CHECK word-header = space. \\n CREATE OBJECT word 'Word.Basic'. \\n CALL METHOD OF word 'AppShow'. \\n WHEN 'EXCEL\_START'. \\n CHECK excel-handle = 0. \\n CHECK excel-header = space. \\n CREATE OBJECT excel 'Excel.Application'. \\n SET PROPERTY OF excel 'Visible' = 1. \\n GET PROPERTY OF excel 'Workbooks' = book. \\n CALL METHOD OF book 'Open' = rc \\n EXPORTING #1 = 'C:\\\\temp\\\\Table.xls'. \\n WHEN 'WORD\_STOP'. \\n CALL METHOD OF word 'AppClose'. \\n FREE OBJECT word. \\n CLEAR: word-handle, word-header. \\n WHEN 'EXCEL\_STOP'. \\n CALL METHOD OF excel 'Quit'. \\n FREE OBJECT excel. \\n CLEAR: excel-handle, excel-header. \\n WHEN OTHERS. \\n LEAVE PROGRAM. \\n ENDCASE. `sy-subrc` **Meaning** **Application** **Method** **Parameter** **Function** 0 Method `meth` executed successfully. 1 Error in communication with SAP GUI. 2 Error when calling the method `meth`. 3 Error when setting an attribute. 4 Error when reading an attribute. Excel `Open` File name and path Open Excel `Quit` - Exit Word `AppShow` - Start Word `AppClose` - Exit abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html abenole2.html