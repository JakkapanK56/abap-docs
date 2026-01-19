---
title: "This example demonstrates how a local exception class is linked with a message"
description: |
  The functional method `meth` raises an exception from the local exception class `cx_t100` that implements the interface `IF_T100_MESSAGE`(ABENIF_T100_MESSAGE.html). When the exception is raised, the constructor is given a message class, a message number, and values for the placeholders of the mess
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMESSAGE_INTERFACE_ABEXA.htm"
abapFile: "ABENMESSAGE_INTERFACE_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENMESSAGE", "INTERFACE", "ABEXA"]
---

This example demonstrates how a local exception class is linked with a message

The functional method `meth` raises an exception from the local exception class `cx_t100` that implements the interface [`IF_T100_MESSAGE`](ABENIF_T100_MESSAGE.html). When the exception is raised, the constructor is given a message class, a message number, and values for the placeholders of the message.

The constructor of the local exception class `cx_t100` fills the attribute `T100KEY` of the interface `IF_T100_MESSAGE` with the values passed. In this way, the exception class represents the passed message from the table `T100` in which the placeholders *&* are replaced with the content of the attributes `text1` to `text4`.

The method `main` catches the exception in the reference variable `oref` and indicates the following:

See also the executable examples listed below.

-   The exception text can be obtained using the method `GET_TEXT` of the component interface `IF_MESSAGE` in the interface `IF_T100_MESSAGE`. The implementation of the method `GET_TEXT` is in the superclass `CX_ROOT`, which already includes the interface `IF_MESSAGE`.
-   The reference variable can be used directly as an operand of the statement [`MESSAGE`](ABAPMESSAGE.html) in ABAP language versions where that syntax is allowed.

-   [System Interface `IF_T100_DYN_MSG` in Local Exception Class](ABENRAISE_MESSAGE_ABEXA.html)

\* CCDEF \\nCLASS cx\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check. \\n PUBLIC SECTION. \\n INTERFACES if\_t100\_message. \\n METHODS constructor IMPORTING id TYPE symsgid \\n no TYPE symsgno \\n text1 TYPE csequence OPTIONAL \\n text2 TYPE csequence OPTIONAL \\n text3 TYPE csequence OPTIONAL \\n text4 TYPE csequence OPTIONAL. \\n DATA text1 TYPE c LENGTH 50. \\n DATA text2 TYPE c LENGTH 50. \\n DATA text3 TYPE c LENGTH 50. \\n DATA text4 TYPE c LENGTH 50. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_message\_oref DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n RAISING cx\_t100. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS cx\_t100 IMPLEMENTATION. \\n METHOD constructor. \\n super->constructor( ). \\n me->text1 = text1. \\n me->text2 = text2. \\n me->text3 = text3. \\n me->text4 = text4. \\n if\_t100\_message~t100key-msgid = id. \\n if\_t100\_message~t100key-msgno = no. \\n if\_t100\_message~t100key-attr1 = 'TEXT1'. \\n if\_t100\_message~t100key-attr2 = 'TEXT2'. \\n if\_t100\_message~t100key-attr3 = 'TEXT3'. \\n if\_t100\_message~t100key-attr4 = 'TEXT4'. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_message\_oref IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( ). \\n CATCH cx\_t100 INTO FINAL(oref). \\n out->write( oref->get\_text( ) ). \\n "MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n RAISE EXCEPTION TYPE cx\_t100 \\n EXPORTING \\n id = 'SABAPDEMOS' \\n no = '104' \\n text1 = 'I' \\n text2 = 'am' \\n text3 = 'an' \\n text4 = 'Exception!'. \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS cx\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check. \\n PUBLIC SECTION. \\n INTERFACES if\_t100\_message. \\n METHODS constructor IMPORTING id TYPE symsgid \\n no TYPE symsgno \\n text1 TYPE csequence OPTIONAL \\n text2 TYPE csequence OPTIONAL \\n text3 TYPE csequence OPTIONAL \\n text4 TYPE csequence OPTIONAL. \\n DATA text1 TYPE c LENGTH 50. \\n DATA text2 TYPE c LENGTH 50. \\n DATA text3 TYPE c LENGTH 50. \\n DATA text4 TYPE c LENGTH 50. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_message\_oref DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS meth \\n RAISING cx\_t100. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS cx\_t100 IMPLEMENTATION. \\n METHOD constructor. \\n super->constructor( ). \\n me->text1 = text1. \\n me->text2 = text2. \\n me->text3 = text3. \\n me->text4 = text4. \\n if\_t100\_message~t100key-msgid = id. \\n if\_t100\_message~t100key-msgno = no. \\n if\_t100\_message~t100key-attr1 = 'TEXT1'. \\n if\_t100\_message~t100key-attr2 = 'TEXT2'. \\n if\_t100\_message~t100key-attr3 = 'TEXT3'. \\n if\_t100\_message~t100key-attr4 = 'TEXT4'. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_message\_oref IMPLEMENTATION. \\n METHOD main. \\n TRY. \\n meth( ). \\n CATCH cx\_t100 INTO FINAL(oref). \\n out->write( oref->get\_text( ) ). \\n "MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD meth. \\n RAISE EXCEPTION TYPE cx\_t100 \\n EXPORTING \\n id = 'SABAPDEMOS' \\n no = '104' \\n text1 = 'I' \\n text2 = 'am' \\n text3 = 'an' \\n text4 = 'Exception!'. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenmessage\_interfaces.html abenif\_t100\_message.html