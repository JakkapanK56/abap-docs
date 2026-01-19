---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAISE_ERROR_MESSAGE_ABEXA.htm"
abapFile: "ABENRAISE_ERROR_MESSAGE_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "ABENRAISE", "ERROR", "MESSAGE", "ABEXA"]
---

This example demonstrates how a caught message of a function module is forwarded.

This example works in basically the same way as the executable example for transforming a classic exception raised using `MESSAGE RAISING` to a class-based exception. Here, however, a message of type A caught using [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) is transformed.

See also the executable [example](ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA.html) for using a short form of statement [`RAISE EXCEPTION MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_raise\_error\_message DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_error\_message IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE' \\n EXPORTING \\n message\_type = 'A' \\n message\_place = 'in Function Module' \\n message\_event = 'Method MAIN' \\n EXCEPTIONS \\n error\_message = 4. \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 \\n MESSAGE ID sy-msgid \\n TYPE sy-msgty \\n NUMBER sy-msgno \\n WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_raise\_error\_message DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_error\_message IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE' \\n EXPORTING \\n message\_type = 'A' \\n message\_place = 'in Function Module' \\n message\_event = 'Method MAIN' \\n EXCEPTIONS \\n error\_message = 4. \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 \\n MESSAGE ID sy-msgid \\n TYPE sy-msgty \\n NUMBER sy-msgno \\n WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html abenif\_t100\_dyn\_msg.html