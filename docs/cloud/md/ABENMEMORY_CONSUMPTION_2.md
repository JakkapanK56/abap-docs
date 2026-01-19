---
title: "ABENMEMORY_CONSUMPTION_2"
description: |
  ABENMEMORY_CONSUMPTION_2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMEMORY_CONSUMPTION_2.htm"
abapFile: "ABENMEMORY_CONSUMPTION_2.html"
keywords: ["delete", "loop", "do", "while", "if", "try", "catch", "class", "data", "types", "internal-table", "ABENMEMORY", "CONSUMPTION"]
---

In addition to the maximum memory size that the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) can request for [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html), their maximum size is limited by the following factors:

If an operation with a dynamic data object exceeds its maximum size, an exception occurs:

In the following `DO` loop of class `CL_DEMO_STRING_SIZE_TOO_LARGE`, a string is concatenated with itself until it exceeds its maximum size and an exception occurs. After catching the exception, the byte-length of the string is determined before its content is deleted.

-   An upper limit for the number of places in strings or lines of internal tables results from the fact that 4 byte integers are used to address them internally and in ABAP statements, which limits them to 2147483647.
-   The size of strings and hashed tables is limited by the biggest memory block that can be requested in one piece.

-   For internal tables, such an exception is uncatchable and always results in a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html). There are different runtime errors for different situations, as for example [`TSV_TNEW_PAGE_ALLOC_FAILED`](https://launchpad.support.sap.com/#/notes/20527).
-   For strings, the exception is class-based and connected to exception class `CX_SY_STRING_SIZE_TOO_LARGE`. The runtime error `STRING_SIZE_TOO_LARGE` only occurs if the exception is not handled. After this exception is caught, the respective string contains the content it had directly before the exception. This is usually the content it had before the entire operation (statement, function). Exceptions from this rule are statements like [`CONCATENATE LINES OF`](ABAPCONCATENATE.html) or functions like [`concat_lines_of`](ABENCONCATENATION_FUNCTIONS.html), which can change the string before the exception occurs.

-   If there is only little memory space available, it may be better to use an internal table, because its memory space is requested in blocks, while the entire memory space required for a string must always be free as a whole.
-   It is strongly recommended that the content of a string after catching an exception `CX_SY_STRING_SIZE_TOO_LARGE` is regarded as undefined and that it is deleted as soon as possible.

DATA(txt) = \`X\`. \\nTRY. \\n DO. \\n txt = txt && txt. \\n ENDDO. \\n CATCH cx\_sy\_string\_size\_too\_large INTO FINAL(exc). \\n cl\_demo\_output=>display( \\n |\\{ exc->get\_text( ) \\n \\}.\\\\nThe resulting string has a length of \\{ \\n xstrlen( cl\_abap\_codepage=>convert\_to( \\n source = txt \\n codepage = 'UTF-16' ) ) \\} bytes.| ). \\n CLEAR txt. \\nENDTRY. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abenmemory\_consumption.html