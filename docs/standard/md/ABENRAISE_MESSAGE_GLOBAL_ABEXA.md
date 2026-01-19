---
title: "This example demonstrates how a global exception class is linked with a message"
description: |
  This example demonstrates the transformation of a non-class-based exception raised in a method using the statement `MESSAGE RAISING`(ABAPMESSAGE_RAISING.html) and, when the method is called, handled using the addition `EXCEPTIONS`(ABAPCALL_METHOD_PARAMETERS.html), to a class-based exception. Thi
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAISE_MESSAGE_GLOBAL_ABEXA.htm"
abapFile: "ABENRAISE_MESSAGE_GLOBAL_ABEXA.html"
keywords: ["if", "case", "try", "catch", "method", "class", "ABENRAISE", "MESSAGE", "GLOBAL", "ABEXA"]
---

This example demonstrates how a global exception class is linked with a message

This example demonstrates the transformation of a non-class-based exception raised in a method using the statement [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) and, when the method is called, handled using the addition [`EXCEPTIONS`](ABAPCALL_METHOD_PARAMETERS.html), to a class-based exception. This example works in the same way as the [executable example](ABENMESSAGE_INTERFACE_REUSE_ABEXA.html) for the system interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html), but uses the class `CX_DEMO_DYN_T100`, which implements the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html).

See also the executable [example](ABENRAISE_MESSAGE_GLBL_SHRT_ABEXA.html) for using a short form of statement [`RAISE EXCEPTION MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html).

-   In both cases, `sy-msgid` and `sy-msgno` can be used after the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) to associate the exception object with the message.
-   `sy-msgv1` to `sy-msgv4` can be specified after [`WITH`](ABAPRAISE_EXCEPTION_MESSAGE.html) and are automatically assigned to the interface attributes `MSGV1` to `MSGV4` here.
-   `sy-msgty` can also be passed here using [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html).

\* Public class definition \\nCLASS cl\_demo\_raise\_msg\_global DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth EXCEPTIONS exception. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg\_global IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( EXCEPTIONS exception = 4 ). \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 \\n MESSAGE ID sy-msgid \\n TYPE sy-msgty \\n NUMBER sy-msgno \\n WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!' \\n RAISING exception. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_raise\_msg\_global DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth EXCEPTIONS exception. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg\_global IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( EXCEPTIONS exception = 4 ). \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 \\n MESSAGE ID sy-msgid \\n TYPE sy-msgty \\n NUMBER sy-msgno \\n WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4. \\n ENDIF. \\n CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!' \\n RAISING exception. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html abenif\_t100\_dyn\_msg.html