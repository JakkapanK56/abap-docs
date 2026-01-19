---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCREATE_SIMPLE_DATA_ABEXA.htm"
abapFile: "ABENCREATE_SIMPLE_DATA_ABEXA.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENCREATE", "SIMPLE", "DATA", "ABEXA"]
---

This example demonstrates how elementary data objects are created.

The method `create_data` creates all elementary data objects that are possible with the built-in ABAP types, depending on the passed input values.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_create\_simple\_data DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS create\_data IMPORTING \\n VALUE(typ) TYPE c \\n VALUE(len) TYPE i \\n VALUE(dec) TYPE i \\n RETURNING \\n VALUE(dref) TYPE REF TO data \\n RAISING \\n cx\_sy\_create\_data\_error. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_simple\_data IMPLEMENTATION. \\n METHOD main. \\n DATA dref TYPE REF TO data. \\n\\ \\n DATA: type LENGTH 10 TYPE c, \\n length TYPE i, \\n decimals TYPE i. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( EXPORTING text = \`Built-In ABAP Type\` \\n CHANGING field = type \\n )->add\_field( EXPORTING text = \`Length\` \\n CHANGING field = length \\n )->request( EXPORTING text = \`Decimals\` \\n CHANGING field = decimals ). \\n\\ \\n TRY. \\n IF to\_lower( type ) = 'p' AND decimals > 2 \* length - 1. \\n "Would lead to undefined state for packed number \\n RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error. \\n ENDIF. \\n dref = create\_data( typ = type \\n len = length \\n dec = decimals ). \\n\\ \\n FINAL(descr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( dref->\* ) ). \\n type = descr->type\_kind. \\n length = descr->length. \\n decimals = descr->decimals. \\n\\ \\n out->write( |\\{ type \\} \\{ length \\} \\{ decimals \\}| ). \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( |Error creating \\{ type \\} \\{ \\n length \\} \\{ \\n decimals \\}| ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD create\_data. \\n TRANSLATE typ TO LOWER CASE. \\n CASE typ. \\n WHEN 'd' OR 'decfloat16' OR 'decfloat34' OR 'f' OR 'i' \\n OR 'string' OR 't' OR 'xstring'. \\n CREATE DATA dref TYPE (typ). \\n WHEN 'c' OR 'n' OR 'x'. \\n CREATE DATA dref TYPE (typ) LENGTH len. \\n WHEN 'p'. \\n CREATE DATA dref TYPE p LENGTH len DECIMALS dec. \\n WHEN OTHERS. \\n RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error. \\n ENDCASE. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_create\_simple\_data DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS create\_data IMPORTING \\n VALUE(typ) TYPE c \\n VALUE(len) TYPE i \\n VALUE(dec) TYPE i \\n RETURNING \\n VALUE(dref) TYPE REF TO data \\n RAISING \\n cx\_sy\_create\_data\_error. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_simple\_data IMPLEMENTATION. \\n METHOD main. \\n DATA dref TYPE REF TO data. \\n\\ \\n DATA: type LENGTH 10 TYPE c, \\n length TYPE i, \\n decimals TYPE i. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( EXPORTING text = \`Built-In ABAP Type\` \\n CHANGING field = type \\n )->add\_field( EXPORTING text = \`Length\` \\n CHANGING field = length \\n )->request( EXPORTING text = \`Decimals\` \\n CHANGING field = decimals ). \\n\\ \\n TRY. \\n IF to\_lower( type ) = 'p' AND decimals > 2 \* length - 1. \\n "Would lead to undefined state for packed number \\n RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error. \\n ENDIF. \\n dref = create\_data( typ = type \\n len = length \\n dec = decimals ). \\n\\ \\n FINAL(descr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( dref->\* ) ). \\n type = descr->type\_kind. \\n length = descr->length. \\n decimals = descr->decimals. \\n\\ \\n out->write( |\\{ type \\} \\{ length \\} \\{ decimals \\}| ). \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( |Error creating \\{ type \\} \\{ \\n length \\} \\{ \\n decimals \\}| ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD create\_data. \\n TRANSLATE typ TO LOWER CASE. \\n CASE typ. \\n WHEN 'd' OR 'decfloat16' OR 'decfloat34' OR 'f' OR 'i' \\n OR 'string' OR 't' OR 'xstring'. \\n CREATE DATA dref TYPE (typ). \\n WHEN 'c' OR 'n' OR 'x'. \\n CREATE DATA dref TYPE (typ) LENGTH len. \\n WHEN 'p'. \\n CREATE DATA dref TYPE p LENGTH len DECIMALS dec. \\n WHEN OTHERS. \\n RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error. \\n ENDCASE. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html abapcreate\_data\_built\_in.html