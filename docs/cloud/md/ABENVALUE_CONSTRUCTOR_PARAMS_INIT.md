---
title: "ABENVALUE_CONSTRUCTOR_PARAMS_INIT"
description: |
  ABENVALUE_CONSTRUCTOR_PARAMS_INIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENVALUE_CONSTRUCTOR_PARAMS_INIT.htm"
abapFile: "ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html"
keywords: ["while", "if", "method", "class", "data", "types", "internal-table", "ABENVALUE", "CONSTRUCTOR", "PARAMS", "INIT"]
---

`... VALUE dtype|#( ) ...`

If no parameters are specified in the parentheses, the return value is set to its type-specific initial value. This is possible for any non-generic data types `dtype`. The `#` character can stand for corresponding statically recognizable operand types. When `VALUE #( )` is passed to a generically typed formal parameter, the type is also derived from its generic type as follows:

Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. This applies in particular to the types `c`, `n`, and `x` with generic lengths.

Creation of a suitable initial structure for a non-optional input parameter of a method.

[Value Operator, Type Inference](ABENVALUE_TYPE_INFERENCE_ABEXA.html)

-   `string` for `csequence` and `clike`
-   `xstring` for `xsequence`
-   `decfloat34` for `numeric` and `decfloat`
-   `p` with the length 8 and no decimal places for generic `p`
-   The [standard key](ABENSTANDARD_KEY_GLOSRY.html) for a standard table type with generic primary table key

-   While `VALUE` with pass by value is used only to construct certain complex values (structures and internal tables), `VALUE` without pass by value, on the other hand, is a general method for creating type-dependent initial values in any operand positions.
-   The rules for derivations of the type where `#` is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   If `dtype` or `#` stand for an [enumerated type](ABENENUM_TYPE_GLOSRY.html), its initial value is created according to its [base type](ABENBASE_TYPE_GLOSRY.html).

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n TYPES: BEGIN OF t\_struct, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF t\_struct. \\n CLASS-METHODS m1 IMPORTING p TYPE t\_struct. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n c1=>m1( VALUE #( ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html