---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAISE_ABEXA.htm"
abapFile: "ABENRAISE_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENRAISE", "ABEXA"]
---

This example demonstrates the statement `RAISE EXCEPTION`.

This example shows the two variants of the statement `RAISE EXCEPTION`. The first statement raises an exception of the class `CX_DEMO_CONSTRUCTOR` in the inner `TRY` block, creates the relevant object, and passes the current program name to the instance constructor. The inner `CATCH` block handles the exception, produces the exception text as output and raises the exception again without creating a new object. The outer `CATCH` block handles the exception again. The class `CX_DEMO_CONSTRUCTOR` is defined in such a way that the passed program name appears in the exception text. The generated instance constructor ensures this.

The output of the line number in which the exception was raised indicates that, when the existing exception object was reused, its information was changed.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_raise\_exception DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_exception IMPLEMENTATION. \\n METHOD main. \\n DATA: oref TYPE REF TO cx\_demo\_constructor, \\n text TYPE string, \\n position TYPE i. \\n TRY. \\n TRY. \\n RAISE EXCEPTION TYPE cx\_demo\_constructor \\n EXPORTING \\n my\_text = sy-repid. \\n CATCH cx\_demo\_constructor INTO oref. \\n text = oref->get\_text( ). \\n oref->get\_source\_position( \\n IMPORTING source\_line = position ). \\n out->write\_text( |\\{ position \\} \\{ text \\}| ). \\n RAISE EXCEPTION oref. \\n ENDTRY. \\n CATCH cx\_demo\_constructor INTO oref. \\n text = oref->get\_text( ). \\n oref->get\_source\_position( \\n IMPORTING source\_line = position ). \\n out->write\_text( |\\{ position \\} \\{ text \\}| ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_raise\_exception DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_raise\_exception IMPLEMENTATION. \\n METHOD main. \\n DATA: oref TYPE REF TO cx\_demo\_constructor, \\n text TYPE string, \\n position TYPE i. \\n TRY. \\n TRY. \\n RAISE EXCEPTION TYPE cx\_demo\_constructor \\n EXPORTING \\n my\_text = sy-repid. \\n CATCH cx\_demo\_constructor INTO oref. \\n text = oref->get\_text( ). \\n oref->get\_source\_position( \\n IMPORTING source\_line = position ). \\n out->write\_text( |\\{ position \\} \\{ text \\}| ). \\n RAISE EXCEPTION oref. \\n ENDTRY. \\n CATCH cx\_demo\_constructor INTO oref. \\n text = oref->get\_text( ). \\n oref->get\_source\_position( \\n IMPORTING source\_line = position ). \\n out->write\_text( |\\{ position \\} \\{ text \\}| ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexception\_abexas.html