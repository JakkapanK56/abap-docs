---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOND_ITERATION_VALUE_ABEXA.htm"
abapFile: "ABENCOND_ITERATION_VALUE_ABEXA.html"
keywords: ["do", "while", "if", "method", "class", "types", "internal-table", "ABENCOND", "ITERATION", "VALUE", "ABEXA"]
---

This example demonstrates [conditional iterations](ABENFOR_CONDITIONAL.html) with the operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

This example demonstrates the construction of internal tables using condition iterations with a constructor expression and the corresponding variant of the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html). Two internal tables with different iterations are created and directly output.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_value\_cond\_iteration DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_cond\_iteration IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\n out->write( \\n VALUE itab( \\n FOR j = 11 THEN j + 10 WHILE j < 40 \\n ( col1 = j col2 = j + 1 col3 = j + 2 ) ) ). \\n\\ \\n out->write( \\n VALUE itab( \\n FOR j = 31 THEN j - 10 UNTIL j < 10 \\n ( col1 = j col2 = j + 1 col3 = j + 2 ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_value\_cond\_iteration DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_cond\_iteration IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\n out->write( \\n VALUE itab( \\n FOR j = 11 THEN j + 10 WHILE j < 40 \\n ( col1 = j col2 = j + 1 col3 = j + 2 ) ) ). \\n\\ \\n out->write( \\n VALUE itab( \\n FOR j = 31 THEN j - 10 UNTIL j < 10 \\n ( col1 = j col2 = j + 1 col3 = j + 2 ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenfor.html abeniteration\_expressions\_abexas.html