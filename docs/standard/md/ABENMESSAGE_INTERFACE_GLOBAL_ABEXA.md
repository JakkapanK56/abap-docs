---
title: "This example demonstrates how a global exception class is linked with a message"
description: |
  This example works in the same way as the executable example in System Interface `IF_T100_MESSAGE` in a Local Exception Class(ABENMESSAGE_INTERFACE_ABEXA.html). Here, however, the interface `IF_T100_MESSAGE` is included in the global exception class(ABENEXCEPTION_CLASS_GLOSRY.html) `CX_DEMO_T1
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMESSAGE_INTERFACE_GLOBAL_ABEXA.htm"
abapFile: "ABENMESSAGE_INTERFACE_GLOBAL_ABEXA.html"
keywords: ["select", "if", "try", "catch", "method", "class", "ABENMESSAGE", "INTERFACE", "GLOBAL", "ABEXA"]
---

This example demonstrates how a global exception class is linked with a message

This example works in the same way as the executable example in [System Interface `IF_T100_MESSAGE` in a Local Exception Class](ABENMESSAGE_INTERFACE_ABEXA.html). Here, however, the interface `IF_T100_MESSAGE` is included in the global [exception class](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `CX_DEMO_T100`. The association with a message class was selected when the class was created. This specifies that the exception class is generated in such a way that it supports messages as [exception texts](ABENEXCEPTION_TEXTS.html), rather than merely including the interface `IF_T100_MESSAGE`.

On the tab *Texts* in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html), the message 888 from the message class `SABAPDEMOS` is assigned to the exception text `DEMO` of the exception class under *Message Text*. The placeholders of the message are linked with the attributes `TEXT1` to `TEXT4`. The source code of the public section of the class implements this assignment using the structured constant `DEMO` with the type `SCX_T100KEY`. The constructor has an input parameter `TEXTID` that can be passed the constant `DEMO` and the input parameters `TEXT1` to `TEXT4` used to fill the identically named attributes.

A structure passed to the input parameter `TEXTID` when an exception from this class is raised is assigned to the structure `T100KEY` of the interface `IF_T100_MESSAGE`. This uses the corresponding message as an exception text. It is recommended that only the predefined constants of the class are passed, as shown here.

See also the executable examples listed below.

-   [System Interface `IF_T100_MESSAGE` for Exception with Message](ABENMESSAGE_INTERFACE_REUSE_ABEXA.html)
-   [System Interface `IF_T100_DYN_MSG` in Global Exception Class](ABENRAISE_MESSAGE_GLOBAL_ABEXA.html)

\* Public class definition \\nCLASS cl\_demo\_message\_oref\_global DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n RAISING cx\_demo\_t100. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_message\_oref\_global IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( ). \\n CATCH cx\_demo\_t100 INTO FINAL(oref). \\n out->write( oref->get\_text( ) ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n RAISE EXCEPTION TYPE cx\_demo\_t100 \\n EXPORTING \\n textid = cx\_demo\_t100=>demo \\n text1 = 'I' \\n text2 = 'am' \\n text3 = 'an' \\n text4 = 'Exception!'. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_message\_oref\_global DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n RAISING cx\_demo\_t100. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_message\_oref\_global IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( ). \\n CATCH cx\_demo\_t100 INTO FINAL(oref). \\n out->write( oref->get\_text( ) ). \\n MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n RAISE EXCEPTION TYPE cx\_demo\_t100 \\n EXPORTING \\n textid = cx\_demo\_t100=>demo \\n text1 = 'I' \\n text2 = 'am' \\n text3 = 'an' \\n text4 = 'Exception!'. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html abenif\_t100\_message.html