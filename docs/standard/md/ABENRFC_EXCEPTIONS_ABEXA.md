---
title: "ABENRFC_EXCEPTIONS_ABEXA"
description: |
  ABENRFC_EXCEPTIONS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_EXCEPTIONS_ABEXA.htm"
abapFile: "ABENRFC_EXCEPTIONS_ABEXA.html"
keywords: ["if", "case", "method", "class", "data", "exception-handling", "ABENRFC", "EXCEPTIONS", "ABEXA"]
---

This example demonstrates exception handling in RFC.

The `DEMO_RFM_CLASSIC_EXCEPTION` function module raises the non-class-based exception `CLASSIC_EXCEPTION`.

When `DEMO_RFM_CLASSIC_EXCEPTION` is called, `EXCEPTIONS` is specified and values for `sy-subrc` are assigned to the possible classic exceptions. If none of the predefined RFC interface exceptions are raised, `sy-subrc` is set to 3.

\* Public class definition \\nCLASS cl\_demo\_rfc\_exceptions DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rfc\_exceptions IMPLEMENTATION. \\n METHOD main. \\n DATA msg TYPE c LENGTH 80. \\n\\ \\n "Classical exception handling \\n CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION' \\n DESTINATION 'SELF' \\n EXCEPTIONS \\n system\_failure = 1 MESSAGE msg \\n communication\_failure = 2 MESSAGE msg \\n OTHERS = 3. \\n CASE sy-subrc. \\n WHEN 1. \\n out->write( \`EXCEPTION SYSTEM\_FAILURE \` && msg ). \\n WHEN 2. \\n out->write( \`EXCEPTION COMMUNICATION\_FAILURE \` && msg ). \\n WHEN 3. \\n out->write( \`EXCEPTION OTHERS\` ). \\n ENDCASE. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_rfc\_exceptions DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rfc\_exceptions IMPLEMENTATION. \\n METHOD main. \\n DATA msg TYPE c LENGTH 80. \\n\\ \\n "Classical exception handling \\n CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION' \\n DESTINATION 'SELF' \\n EXCEPTIONS \\n system\_failure = 1 MESSAGE msg \\n communication\_failure = 2 MESSAGE msg \\n OTHERS = 3. \\n CASE sy-subrc. \\n WHEN 1. \\n out->write( \`EXCEPTION SYSTEM\_FAILURE \` && msg ). \\n WHEN 2. \\n out->write( \`EXCEPTION COMMUNICATION\_FAILURE \` && msg ). \\n WHEN 3. \\n out->write( \`EXCEPTION OTHERS\` ). \\n ENDCASE. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc\_abexas.html