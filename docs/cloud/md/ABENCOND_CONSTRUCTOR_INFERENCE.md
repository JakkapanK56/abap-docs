---
title: "ABENCOND_CONSTRUCTOR_INFERENCE"
description: |
  ABENCOND_CONSTRUCTOR_INFERENCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOND_CONSTRUCTOR_INFERENCE.htm"
abapFile: "ABENCOND_CONSTRUCTOR_INFERENCE.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENCOND", "CONSTRUCTOR", "INFERENCE"]
---

If the following constructor expression is passed to generically typed formal parameters as an actual parameter using the character `#` as a symbol for the operand type, the following type inference is performed for the character `#`:

`[COND](ABENCONDITIONAL_EXPRESSION_COND.html)|[SWITCH](ABENCONDITIONAL_EXPRESSION_SWITCH.html) #( ... THEN ... )`

is passed to generically typed formal parameters as an actual parameter using the character `#` as a symbol for the operand type, the following type inference is performed for the character `#`:

The rules for derivations of the type where `#` is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

The operator `COND` generates a result of type `string` in this case. The generic parameter `p` has this type during the execution of the method, which is displayed by the value *g* returned by `DESCRIBE FIELD`. The method call leads to a corresponding syntax warning.

[Conditional Operator, Type Inference](ABENCOND_TYPE_INFERENCE_ABEXA.html)

-   If the data type of the operand after the first `THEN` is known statically and matches the generic type of the formal parameter, this data type is used.
-   If the data type of the operand after the first `THEN` is known statically and does not match the generic type of the formal parameter or if it is not known statically, the type is derived from the generic type as follows:

-   `string` for `csequence` and `clike`
-   `xstring` for `xsequence`
-   `decfloat34` for `numeric` and `decfloat`
-   `p` with the length 8 and no decimal places if `p` is generic
-   The [standard key](ABENSTANDARD_KEY_GLOSRY.html) for a standard table type with generic primary table key
-   Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types `c`, `n`, and `x` with generic lengths.

CLASS demo1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main IMPORTING p TYPE csequence. \\nENDCLASS. \\n\\ \\nCLASS demo1 IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n FINAL(t) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( p ) )->type\_kind. \\n out->write( |\\{ p \\} of type \\{ t \\}| ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS demo2 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo2 IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS: \\n TYPE any, \\n TYPE any. \\n ASSIGN 'AM' TO . \\n ASSIGN 'PM' TO . \\n\\ \\n demo1=>main( COND #( \\n WHEN cl\_demo\_date\_time=>get\_user\_time( ) < '120000' THEN \\ \\n ELSE ) ) ##TYPE. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenconditional\_expressions.html