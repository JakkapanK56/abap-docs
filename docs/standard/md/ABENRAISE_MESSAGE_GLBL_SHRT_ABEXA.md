---
title: "ABENRAISE_MESSAGE_GLBL_SHRT_ABEXA"
description: |
  ABENRAISE_MESSAGE_GLBL_SHRT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAISE_MESSAGE_GLBL_SHRT_ABEXA.htm"
abapFile: "ABENRAISE_MESSAGE_GLBL_SHRT_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "ABENRAISE", "MESSAGE", "GLBL", "SHRT", "ABEXA"]
---

The example demonstrates the short form of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) with the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html).

The example has exactly the same functionality as the executable example [`IF_T100_DYN_MSG` in a global exception](ABENRAISE_MESSAGE_GLOBAL_ABEXA.html). Here, the addition [`USING MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) is used, which explicitly passes the system fields `sy-msgty`, `sy-msgid`, `sy-msgno`, and `sy-msgv1` to `sy-msgv4` to the corresponding additions of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html).

\* Public class definition \\nCLASS cl\_demo\_raise\_msg\_global\_shrt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth EXCEPTIONS exception. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg\_global\_shrt IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( EXCEPTIONS exception = 4 ). \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!' \\n RAISING exception. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_raise\_msg\_global\_shrt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth EXCEPTIONS exception. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg\_global\_shrt IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( EXCEPTIONS exception = 4 ). \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!' \\n RAISING exception. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abapraise\_exception\_class.html abapraise\_exception\_message.html