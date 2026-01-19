---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOMPUTE_EXACT_ABEXA.htm"
abapFile: "ABENCOMPUTE_EXACT_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENCOMPUTE", "EXACT", "ABEXA"]
---

The example demonstrates [lossless calculations](ABENLOSSLESS_CALCULATION_GLOSRY.html) and the exceptions raised when roundings occur.

The lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) is used to perform the following calculations and to assign the result to a data object with the type `decfloat34`:

result = number / sy-index

result = number \* ( 1 / sy-index )

If rounding is not needed, the result `result` is produced. If roundings are needed, the associated exception `CX_SY_CONVERSION_ROUNDING` is caught, and its attribute `VALUE` is displayed. The results of lossless calculations are flagged in the display.

This example demonstrates how the structure of an arithmetic expression can affect the result of a lossless calculation. For example, the division of the number `number` by itself is always a lossless calculation. Multiplying `number` by `1 / number`, however, raises an exception when a rounding occurs in the division.

The following two expressions are further examples of the affect the structure has on an arithmetic expression:

result = number \* 1 / sy-index

result = 1 / sy-index \* number

The first expression has an effect like `number / sy-index` and the second like `number * ( 1 / sy-index )`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_compute\_exact DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n BEGIN OF o, \\n div TYPE string, \\n result1 TYPE string, \\n flag1 TYPE string, \\n result2 TYPE string, \\n flag2 TYPE string, \\n END OF o, \\n output LIKE TABLE OF o. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_compute\_exact IMPLEMENTATION. \\n METHOD main. \\n DATA: number TYPE i VALUE 3, \\n result TYPE decfloat34, \\n exc TYPE REF TO cx\_sy\_conversion\_rounding. \\n\\ \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n\\ \\n out->begin\_section( \\n |\\{ number \\} / div vs. \\{ number \\} \* ( 1 / div )| ). \\n\\ \\n DO 100 TIMES. \\n APPEND INITIAL LINE TO output. \\n output\[ sy-index \]-div = sy-index. \\n TRY. \\n result = EXACT #( number / sy-index ). \\n output\[ sy-index \]-result1 = result. \\n output\[ sy-index \]-flag1 = \`X\`. \\n CATCH cx\_sy\_conversion\_rounding INTO exc. \\n output\[ sy-index \]-result1 = exc->value. \\n output\[ sy-index \]-flag1 = \` \`. \\n ENDTRY. \\n TRY. \\n result = EXACT #( number \* ( 1 / sy-index ) ). \\n output\[ sy-index \]-result2 = result. \\n output\[ sy-index \]-flag2 = \`X\`. \\n CATCH cx\_sy\_conversion\_rounding INTO exc. \\n output\[ sy-index \]-result2 = exc->value. \\n output\[ sy-index \]-flag2 = \` \`. \\n ENDTRY. \\n ENDDO. \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_compute\_exact DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n BEGIN OF o, \\n div TYPE string, \\n result1 TYPE string, \\n flag1 TYPE string, \\n result2 TYPE string, \\n flag2 TYPE string, \\n END OF o, \\n output LIKE TABLE OF o. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_compute\_exact IMPLEMENTATION. \\n METHOD main. \\n DATA: number TYPE i VALUE 3, \\n result TYPE decfloat34, \\n exc TYPE REF TO cx\_sy\_conversion\_rounding. \\n\\ \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n\\ \\n out->begin\_section( \\n |\\{ number \\} / div vs. \\{ number \\} \* ( 1 / div )| ). \\n\\ \\n DO 100 TIMES. \\n APPEND INITIAL LINE TO output. \\n output\[ sy-index \]-div = sy-index. \\n TRY. \\n result = EXACT #( number / sy-index ). \\n output\[ sy-index \]-result1 = result. \\n output\[ sy-index \]-flag1 = \`X\`. \\n CATCH cx\_sy\_conversion\_rounding INTO exc. \\n output\[ sy-index \]-result1 = exc->value. \\n output\[ sy-index \]-flag1 = \` \`. \\n ENDTRY. \\n TRY. \\n result = EXACT #( number \* ( 1 / sy-index ) ). \\n output\[ sy-index \]-result2 = result. \\n output\[ sy-index \]-flag2 = \`X\`. \\n CATCH cx\_sy\_conversion\_rounding INTO exc. \\n output\[ sy-index \]-result2 = exc->value. \\n output\[ sy-index \]-flag2 = \` \`. \\n ENDTRY. \\n ENDDO. \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abapcompute\_arith.html abenlossless\_calculation.html