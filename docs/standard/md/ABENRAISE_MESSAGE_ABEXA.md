---
title: "This example demonstrates how a local exception class is linked with a message"
description: |
  This example applies the executable example(ABENMESSAGE_INTERFACE_ABEXA.html) for the interface `IF_T100_MESSAGE` directly to the interface `IF_T100_DYN_MSG`. The local class `cx_dyn_t100` implements the interface `IF_T100_DYN_MSG`(ABENIF_T100_DYN_MSG.html) and the addition `MESSAGE`(ABAPRAISE
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAISE_MESSAGE_ABEXA.htm"
abapFile: "ABENRAISE_MESSAGE_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "ABENRAISE", "MESSAGE", "ABEXA"]
---

This example demonstrates how a local exception class is linked with a message

This example applies the [executable example](ABENMESSAGE_INTERFACE_ABEXA.html) for the interface `IF_T100_MESSAGE` directly to the interface `IF_T100_DYN_MSG`. The local class `cx_dyn_t100` implements the interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html) and the addition [`MESSAGE`](ABAPRAISE_EXCEPTION_MESSAGE.html) of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) is used to raise the exception in the method `meth`.

Unlike when using [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html), no separate attributes for the placeholders of the message and no implementation of the instance constructor are required in `cx_dyn_t100`. Furthermore, the message type is passed in an attribute of the exception object when `IF_T100_DYN_MSG` is used. An alias name is introduced for this attribute here.

\* CCDEF \\nCLASS cx\_dyn\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check. \\n PUBLIC SECTION. \\n INTERFACES if\_t100\_dyn\_msg. \\n ALIASES msgty FOR if\_t100\_dyn\_msg~msgty. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_raise\_msg DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n RAISING cx\_dyn\_t100. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( ). \\n CATCH cx\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n "MESSAGE oref TYPE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n RAISE EXCEPTION TYPE cx\_dyn\_t100 \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'. \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS cx\_dyn\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check. \\n PUBLIC SECTION. \\n INTERFACES if\_t100\_dyn\_msg. \\n ALIASES msgty FOR if\_t100\_dyn\_msg~msgty. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_raise\_msg DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n RAISING cx\_dyn\_t100. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_msg IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( ). \\n CATCH cx\_dyn\_t100 INTO FINAL(oref). \\n out->write( \\n |Caught exception:\\\\n\\\\n| && \\n |"\\{ oref->get\_text( ) \\}", Type \\{ oref->msgty \\} | ). \\n "MESSAGE oref TYPE oref->msgty. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n RAISE EXCEPTION TYPE cx\_dyn\_t100 \\n MESSAGE e104(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html abenif\_t100\_dyn\_msg.html