---
title: "If a constructor expression"
description: |
  `REDUCE(ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) #( ... INIT ... FOR ... )` is passed to generically typed formal parameters as an actual parameter using the character `#` as a symbol for the operand type, the following type inference is performed for the character `#`: The operator `REDUCE` genera
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREDUCE_CONSTRUCTOR_INFERENCE.htm"
abapFile: "ABENREDUCE_CONSTRUCTOR_INFERENCE.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENREDUCE", "CONSTRUCTOR", "INFERENCE"]
---

If a constructor expression

`[REDUCE](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) #( ... INIT ... FOR ... )`

is passed to generically typed formal parameters as an actual parameter using the character `#` as a symbol for the operand type, the following type inference is performed for the character `#`:

The operator `REDUCE` generates a result of type `string` here. The generic parameter `p` has this type during the execution of the method, which is shown by the value *g* in the attribute `type_kind`. The method call leads to a corresponding syntax warning that is suppressed by a pragma.

[Reduce Operator, Type Inference](ABENREDUCE_TYPE_INFERENCE_ABEXA.html)

-   If the data type of the first declaration after `INIT` matches the generic type of the formal parameter, this data type is used.
-   If the data type of the first declaration after `INIT` does not match the generic type of the formal parameter, the type is derived from the generic type as follows:

-   `string` for `csequence` and `clike`
-   `xstring` for `xsequence`
-   `decfloat34` for `numeric` and `decfloat`
-   `p` with the length 8 and no decimal places if `p` is generic
-   The [standard key](ABENSTANDARD_KEY_GLOSRY.html) for a standard table type with generic primary table key
-   Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types `c`, `n`, and `x` with generic lengths.

-   The data type of the first declaration after `INIT` is always identified statically.
-   The rules for derivations of the type where `#` is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth IMPORTING p TYPE csequence. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n FINAL(t) = cl\_abap\_typedescr=>describe\_by\_data( p )->type\_kind. \\n cl\_demo\_output=>display( |\\{ p \\} of type \\{ t \\}| ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n demo=>meth( REDUCE #( INIT s = 0 \\n FOR i = 1 UNTIL i > 10 \\n NEXT s += i ) ) ##type. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenconstructor\_expression\_reduce.html