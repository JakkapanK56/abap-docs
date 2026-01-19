---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMOVE_EXACT_ABEXA.htm"
abapFile: "ABENMOVE_EXACT_ABEXA.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "ABENMOVE", "EXACT", "ABEXA"]
---

This example demonstrates how the operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) is used to make lossless assignments.

Without the operator `EXACT`, `text` is assigned to `num_text` without the check for validity of the assigned value against the associated [conversion rules](ABENCONVERSION_TYPE_STRING.html), which produces a value that is not very intuitive, *00000042*.

Using the operator `EXACT`, the value that is passed is checked and an exception is raised in the case in question.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_move\_exact DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_move\_exact IMPLEMENTATION. \\n METHOD main. \\n DATA: text TYPE string VALUE \`4 Apples + 2 Oranges\`, \\n num\_text TYPE n LENGTH 8. \\n out->begin\_section( text \\n )->begin\_section( \`Not really exact:\` ). \\n num\_text = text. \\n out->write\_data( num\_text \\n )->next\_section( \`Try to be exact:\` ). \\n TRY. \\n num\_text = EXACT #( text ). \\n out->write\_data( num\_text ). \\n CATCH cx\_sy\_conversion\_error INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_move\_exact DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_move\_exact IMPLEMENTATION. \\n METHOD main. \\n DATA: text TYPE string VALUE \`4 Apples + 2 Oranges\`, \\n num\_text TYPE n LENGTH 8. \\n out->begin\_section( text \\n )->begin\_section( \`Not really exact:\` ). \\n num\_text = text. \\n out->write\_data( num\_text \\n )->next\_section( \`Try to be exact:\` ). \\n TRY. \\n num\_text = EXACT #( text ). \\n out->write\_data( num\_text ). \\n CATCH cx\_sy\_conversion\_error INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html abapmove\_exact.html abenmove\_exact\_elementary.html