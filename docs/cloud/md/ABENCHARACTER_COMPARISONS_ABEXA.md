---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHARACTER_COMPARISONS_ABEXA.htm"
abapFile: "ABENCHARACTER_COMPARISONS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENCHARACTER", "COMPARISONS", "ABEXA"]
---

This example demonstrates the [comparison operators for character-like data types](ABENLOGEXP_STRINGS.html).

Text fields with length 5 can be supplied with different content and compared with each other using the available comparison operators.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_character\_comparison DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_character\_comparison IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF result, \\n operand TYPE string, \\n result TYPE string, \\n fdpos TYPE sy-fdpos, \\n END OF result. \\n DATA results TYPE STANDARD TABLE OF result WITH EMPTY KEY. \\n\\ \\n DATA: f1 TYPE c LENGTH 5 VALUE 'BD ', \\n f2 TYPE c LENGTH 5 VALUE 'ABCDE'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = f1 \\n )->add\_field( CHANGING field = f2 )->request( ). \\n\\ \\n results = VALUE #( BASE results \\n ( operand = 'CO' \\n result = COND #( WHEN f1 CO f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CN' \\n result = COND #( WHEN f1 CN f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CA' \\n result = COND #( WHEN f1 CA f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'NA' \\n result = COND #( WHEN f1 NA f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CS' \\n result = COND #( WHEN f1 CS f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'NS' \\n result = COND #( WHEN f1 NS f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CP' \\n result = COND #( WHEN f1 CP f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'NP' \\n result = COND #( WHEN f1 NP f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n\\ \\n out->write( |'\\{ f1 WIDTH = 5 \\}' operand '\\{ f2 WIDTH = 5 \\}'| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_character\_comparison DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_character\_comparison IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF result, \\n operand TYPE string, \\n result TYPE string, \\n fdpos TYPE sy-fdpos, \\n END OF result. \\n DATA results TYPE STANDARD TABLE OF result WITH EMPTY KEY. \\n\\ \\n DATA: f1 TYPE c LENGTH 5 VALUE 'BD ', \\n f2 TYPE c LENGTH 5 VALUE 'ABCDE'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = f1 \\n )->add\_field( CHANGING field = f2 )->request( ). \\n\\ \\n results = VALUE #( BASE results \\n ( operand = 'CO' \\n result = COND #( WHEN f1 CO f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CN' \\n result = COND #( WHEN f1 CN f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CA' \\n result = COND #( WHEN f1 CA f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'NA' \\n result = COND #( WHEN f1 NA f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CS' \\n result = COND #( WHEN f1 CS f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'NS' \\n result = COND #( WHEN f1 NS f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'CP' \\n result = COND #( WHEN f1 CP f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n results = VALUE #( BASE results \\n ( operand = 'NP' \\n result = COND #( WHEN f1 NP f2 THEN abap\_true ) \\n fdpos = sy-fdpos ) ). \\n\\ \\n out->write( |'\\{ f1 WIDTH = 5 \\}' operand '\\{ f2 WIDTH = 5 \\}'| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_strings.html