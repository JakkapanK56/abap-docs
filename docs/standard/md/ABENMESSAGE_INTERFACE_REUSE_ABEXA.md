---
title: "ABENMESSAGE_INTERFACE_REUSE_ABEXA"
description: |
  ABENMESSAGE_INTERFACE_REUSE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESSAGE_INTERFACE_REUSE_ABEXA.htm"
abapFile: "ABENMESSAGE_INTERFACE_REUSE_ABEXA.html"
keywords: ["if", "case", "try", "catch", "method", "class", "ABENMESSAGE", "INTERFACE", "REUSE", "ABEXA"]
---

This example demonstrates the [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) addition when an exception is raised using `IF_T100_MESSAGE`.

This example demonstrates the transformation of a non-class-based exception raised in a method using [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) and handled during a method call using the addition [`EXCEPTIONS`](ABAPCALL_METHOD_PARAMETERS.html) to a class-based exception. It uses the exception class `CX_DEMO_T100` from the [executable example](ABENMESSAGE_INTERFACE_GLOBAL_ABEXA.html) for the system interface `IF_T100_MESSAGE` in a global exception class, which includes only the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html) and not [`IF_T100_DYN_MSG`](ABENIF_T100_MESSAGE.html).

The properties of the message sent using `MESSAGE RAISING` are available in the system fields `sy-msgty`, `sy-msgid`, `sy-msgno`, and `sy-msgv1` to `sy-msgv4` after the exception has been caught.

The [executable example](ABENRAISE_MESSAGE_GLOBAL_ABEXA.html) for the system interface `IF_T100_DYN_MSG` in a global exception demonstrates how all properties of the message can be specified after the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html).

-   `sy-msgid` and `sy-msgno` are used after the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) to associate the exception object with the message.
-   `sy-msgv1` to `sy-msgv4` are assigned to the input parameters of the instance constructor and these are automatically assigned to the identically named attributes.
-   `sy-msgty` cannot be passed in this case.

\* Public class definition \\nCLASS cl\_demo\_raise\_msg\_reuse\_attr DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth EXCEPTIONS exception. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg\_reuse\_attr IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( EXCEPTIONS exception = 4 ). \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_t100 \\n MESSAGE ID sy-msgid \\n NUMBER sy-msgno \\n EXPORTING text1 = CONV #( sy-msgv1 ) \\n text2 = CONV #( sy-msgv2 ) \\n text3 = CONV #( sy-msgv3 ) \\n text4 = CONV #( sy-msgv4 ). \\n ENDIF. \\n CATCH cx\_demo\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}"| ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!' \\n RAISING exception. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_raise\_msg\_reuse\_attr DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth EXCEPTIONS exception. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg\_reuse\_attr IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( EXCEPTIONS exception = 4 ). \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_demo\_t100 \\n MESSAGE ID sy-msgid \\n NUMBER sy-msgno \\n EXPORTING text1 = CONV #( sy-msgv1 ) \\n text2 = CONV #( sy-msgv2 ) \\n text3 = CONV #( sy-msgv3 ) \\n text4 = CONV #( sy-msgv4 ). \\n ENDIF. \\n CATCH cx\_demo\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}"| ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!' \\n RAISING exception. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html abenif\_t100\_message.html