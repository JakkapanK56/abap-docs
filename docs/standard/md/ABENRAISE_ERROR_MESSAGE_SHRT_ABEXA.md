---
title: "ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA"
description: |
  ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA.htm"
abapFile: "ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA.html"
keywords: ["select", "if", "try", "catch", "method", "class", "ABENRAISE", "ERROR", "MESSAGE", "SHRT", "ABEXA"]
---

The example demonstrates the short form of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) with the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html).

The example has exactly the same functionality as the executable example [`IF_T100_DYN_MSG` for the exception `error_message`](ABENRAISE_ERROR_MESSAGE_ABEXA.html). Here, the addition [`USING MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) is used, which explicitly passes the system fields `sy-msgty`, `sy-msgid`, `sy-msgno`, and `sy-msgv1` to `sy-msgv4` to the corresponding additions of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html).

\* Public class definition \\nCLASS cl\_demo\_raise\_error\_msg\_shrt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_error\_msg\_shrt IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE' \\n EXPORTING \\n message\_type = 'A' \\n message\_place = 'in Function Module' \\n message\_event = 'START-OF-SELECTION' \\n EXCEPTIONS \\n error\_message = 4. \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_raise\_error\_msg\_shrt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_error\_msg\_shrt IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE' \\n EXPORTING \\n message\_type = 'A' \\n message\_place = 'in Function Module' \\n message\_event = 'START-OF-SELECTION' \\n EXCEPTIONS \\n error\_message = 4. \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abapraise\_exception\_class.html abapraise\_exception\_message.html