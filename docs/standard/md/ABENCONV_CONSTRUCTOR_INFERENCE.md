---
title: "If a constructor expression"
description: |
  `CONV(ABENCONSTRUCTOR_EXPRESSION_CONV.html) #( let_exp(ABAPLET.html) dobj )` is passed to generically typed formal parameters as an actual parameter using the character `#` as a symbol for the operand type, the following type inference is performed for the character `#`: Other combinations of
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONV_CONSTRUCTOR_INFERENCE.htm"
abapFile: "ABENCONV_CONSTRUCTOR_INFERENCE.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENCONV", "CONSTRUCTOR", "INFERENCE"]
---

If a constructor expression

`[CONV](ABENCONSTRUCTOR_EXPRESSION_CONV.html) #( [[let_exp](ABAPLET.html)] dobj )`

is passed to generically typed formal parameters as an actual parameter using the character `#` as a symbol for the operand type, the following type inference is performed for the character `#`:

Other combinations of generic formal parameter types and operands cannot be made more concrete in any meaningful way and produce a syntax error with the exception of table types that are explicitly generic with respect to their secondary table keys.

Syntax warnings that can be hidden using pragmas also indicate any redundant conversions resulting from the rules above.

The rules for derivations of the type where `#` is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

The operator `CONV` generates a result of type `decfloat34` in this case. The generic parameter `p` has this type during the execution of the method, which is shown by the value *e* returned by [`DESCRIBE FIELD`](ABAPDESCRIBE_FIELD.html). The method call produces a corresponding syntax warning.

[Conversion Operator, Type Inference](ABENCONV_TYPE_INFERENCE_ABEXA.html)

-   If the data type of the operand `dobj` is known and matches the generic type of the formal parameter, no conversion is performed, and the type of the operand is used instead.
-   If the data type of the operand `dobj` is known and is elementary, types are derived from it as follows for formal parameter types with generic lengths as follows:

-   Generic type `c`
-   `c` with the length of the operand in operands of the types `n`, `d`, and `t`; `c` of the predefined [output length](ABENWRITE_OUTPUT_LENGTH.html) of the operand for all other operand types except strings; no type is derived for operands of the types `string` and `xtring`
-   Generic type `n`
-   `n` with the length of the operand for operands of the types `n`, `d`, and `t` and `n` with the length of a [conversion](ABENCONVERSION_ELEMENTARY.html) of the operand to `n` for all other operand types except numeric types with decimal places and strings; no type is derived for operands of the types `decfloat16`, `decfloat34`, `f`, and `p` with decimal places plus `string` and `xtring`
-   Generic type `x`
-   `x` with the rounded half length of the operand for operands of the type `c`; `x` with the length 4 for all other operand types except strings; no type is derived for operands of the types `string` and `xtring`
-   Generic type `p`
-   `p` without decimal places with the length 16 for operands of the types `decfloat16`, `decfloat34`, `f`, `string`, or `c` and `n` with lengths greater than 15; `p` without decimal places with the length 8 for all other operand types

-   In other cases, the type is derived from the generic type of the formal parameter as follows:

-   `csequence` and `clike` produce `string`
-   `xsequence` produces `xstring`
-   `numeric` and `decfloat` produce `decfloat34`
-   `p` produces `p` with the length 8 and no decimal places
-   Standard table type with generic primary table key produces a standard table with a [standard key](ABENSTANDARD_KEY_GLOSRY.html)

CLASS demo1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main IMPORTING p TYPE numeric. \\nENDCLASS. \\n\\ \\nCLASS demo1 IMPLEMENTATION. \\n METHOD main. \\n FINAL(t) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( \\n p ) )->type\_kind. \\n cl\_demo\_output=>display( |\\{ p \\} of type \\{ t \\}| ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS demo2 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo2 IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE any. \\n ASSIGN 100 TO . \\n demo1=>main( CONV #( ) ) ##TYPE. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconstructor\_expression\_conv.html