---
title: "ABENCONSTRUCTOR_EXPRESSION_EXACT"
description: |
  ABENCONSTRUCTOR_EXPRESSION_EXACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPRESSION_EXACT.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_EXACT.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENCONSTRUCTOR", "EXPRESSION", "EXACT"]
---

``... EXACT type( [[`let_exp`](ABAPLET.html)] dobj ) ...``

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the lossless operator `EXACT` performs either a [lossless assignment](ABENLOSSLESS_MOVE.html) or a [lossless calculation](ABENLOSSLESS_CALCULATION.html), depending on the specified operand `dobj`, and creates a result with the data type `type`. The following can be specified for `type`:

The parentheses must contain exactly one operand `dobj` that can be converted to the data type `type`. `dobj` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The content of the result is determined as follows:

In the case of a value loss, the corresponding exception is raised in both cases. If the operand is compatible with the data type `type` in a lossless assignment, `EXACT` does not perform any checks and a syntax check warning occurs. For [enumerated types](ABENENUM_TYPE_GLOSRY.html), additional special [rules](ABENEXACT_CONSTRUCTOR_ENUM.html) apply.

An optional `LET` expression [`let_exp`](ABAPLET.html) can be specified before the operand to define local helper fields.

The lossless operator `EXACT` replaces the identically named addition of the obsolete statements [`MOVE`](ABAPMOVE_OBS.html) and [`COMPUTE`](ABAPCOMPUTE.html).

Lossless assignment. Here, the exception `CX_SY_CONVERSION_ERROR` is raised, because the operand contains an invalid value.

Lossless assignment with generic types. The first method call produces a successful assignment and the second raises the exception `CX_SY_CONVERSION_EXACT_NOT_SUP`. If the assignment is replaced with `p2 = EXACT #( + p1 )`, a lossless calculation is produced and no exception is raised.

Lossless calculation. Here, the exception `CX_SY_CONVERSION_ROUNDING` is raised, because the calculation is not lossless. The rounded result is assigned to the inline declared variable `rounded_result`.

`CX_SY_CONVERSION_EXACT_NOT_SUP`

-   A non-generic data type `dtype`, apart from [reference types](ABENREFERENCE_TYPE_GLOSRY.html).
-   The `#` character for a data type that is determined in accordance with the following hierarchy:

-   If the data type required in an operand position is unique and known completely, the [operand type](ABENOPERAND_TYPE_GLOSRY.html) is used. The operand type can also be generic, and the current type is used at runtime.
-   If the data type cannot be derived from the context, the calculation type `decfloat34` is used in lossless calculations and the data type of the operand is used in lossless assignments.

-   If the operand `dobj` is specified as an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), the expression is calculated in accordance with the rules for a [lossless assignment](ABENLOSSLESS_CALCULATION.html) and the result with the calculation type `decfloat34` is converted to the data type `type`.
-   In all other cases, the content of the result is determined by an assignment of the operand in accordance with the associated [conversion rules](ABENCONVERSION_RULES.html), during which a check is performed in accordance with the [rules of lossless assignments](ABAPMOVE_EXACT.html).

-   *Cause:* Invalid combination of types or lengths.
    *Runtime error:*\\ `CONVT_NOT_SUPPORTED`

TYPES numtext TYPE n LENGTH 255. \\n\\ \\nTRY. \\n FINAL(number) = EXACT numtext( '4 Apples + 2 Oranges' ). \\n CATCH cx\_sy\_conversion\_error INTO FINAL(exc). \\n ... \\nENDTRY. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS m1 IMPORTING p1 TYPE data \\n EXPORTING p2 TYPE data. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA arg TYPE i. \\n TRY. \\n p2 = EXACT #( p1 ) ##operator. \\n out->write\_data( p2 ). \\n CATCH cx\_sy\_conversion\_exact\_not\_sup \\n cx\_sy\_conversion\_error INTO FINAL(err). \\n out->write\_text( err->get\_text( ) ). \\n ENDTRY. \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: date TYPE d, \\n text TYPE string. \\n\\ \\n FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\n c1=>m1( EXPORTING p1 = time \\n IMPORTING p2 = text ). \\n\\ \\n c1=>m1( EXPORTING p1 = time \\n IMPORTING p2 = date ). \\n ENDMETHOD. \\nENDCLASS. TRY. \\n FINAL(exact\_result) = EXACT #( 3 \* ( 1 / 3 ) ). \\n CATCH cx\_sy\_conversion\_rounding INTO FINAL(exc). \\n FINAL(rounded\_result) = exc->value. \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html