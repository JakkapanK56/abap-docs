---
title: "ABENCONSTRUCTOR_EXPRESSION_CONV"
description: |
  ABENCONSTRUCTOR_EXPRESSION_CONV - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSTRUCTOR_EXPRESSION_CONV.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_CONV.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENCONSTRUCTOR", "EXPRESSION", "CONV"]
---

``... CONV type( [[`let_exp`](ABAPLET.html)] dobj ) ...``

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the conversion operator `CONV`\\ [converts](ABENTYPE_CONVERSION_GLOSRY.html) the operand `dobj` to the data type specified using `type` and creates an appropriate result. The following can be specified for `type`:

The parentheses must contain exactly one operand `dobj` that can be converted to the data type `type`, with the following restriction: If `dobj` is specified as a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html), `type` must be byte-like or character-like with the type `c` or `string`. `dobj` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

The content of the result is determined by an assignment of the operand in accordance with the associated [conversion rule](ABENCONVERSION_RULES.html). For [enumerated types](ABENENUM_TYPE_GLOSRY.html), special [rules](ABENCONV_CONSTRUCTOR_ENUM.html) apply. If `dobj` is compatible with the data type `type`, `CONV` does not need to be used and a syntax check warning is usually produced.

An optional `LET` expression [`let_exp`](ABAPLET.html) can be specified in front of the data object to define local helper fields. If a `LET` expression is specified, no warning is produced in conversions to compatible types, since `LET` can be used to construct new values using helper variables.

The method `CONVERT` of the interface `IF_ABAP_CONV_OUT` of the object created using the class `CL_ABAP_CONV_CODEPAGE` expects the data type `string` for the input parameter `SOURCE`. `CONV` is used to convert a text field to this data type, directly in the operand position.

Even though the internal table `itab` in the method `meth1` has the same line type as the table type of the parameter `para` of the method `meth2`, it cannot be passed directly due to the different table type and key. `CONV` is used to convert `itab` to the required table type.

The two calculations produce different results. In the first case, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is `f` and the end result is converted to `i`. In the second case, `CONV` converts each interim result to the calculation type `i`.

The first logical expression is false, as specified in the [comparison rules for character-like data types](ABENLOGEXP_CHARACTER.html). `CONV` is used to modify the comparison type of the second comparison so that the comparison is true.

-   A non-generic data type `dtype` (with the exception of [reference types](ABENREFERENCE_TYPE_GLOSRY.html)).
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html).

-   If the data type required in an operand position is unique and known completely, this type is used.
-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](ABENCONV_CONSTRUCTOR_INFERENCE.html).
-   In other cases, the character `#` cannot be specified.

-   The conversion operator `CONV` is suitable for avoiding the declaration of helper variables that are only necessary to do the following, for example

-   specify type-compliant actual parameters.
-   affect the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) or the [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html) of a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html).

-   The operand of `CONV` can itself be a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html), which means that `CONV` can be used within a calculation expression to transform results of partial calculations into a specific type.
-   No empty parentheses can be specified after `CONV` to construct an initial value of the specified type. The expression [`VALUE #( )`](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html) can be used to do this.
-   The conversion operator `CONV` closes the gap where the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) cannot be used to construct values for elementary data objects except for the initial value.
-   If a constructor expression with the conversion operator is used as a source field of an assignment in which the same conversion takes place, it is not necessary and is removed when the program is compiled.
-   For reference types, the conversion operator `CONV` is not necessary, since these involve only castings and no conversions. The operator [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) is used for castings.

DATA text TYPE c LENGTH 255. \\n\\ \\nFINAL(xstr) = cl\_abap\_conv\_codepage=>create\_out( \\n )->convert( source = CONV string( text ) ). CLASS class DEFINITION. \\n PUBLIC SECTION. \\n TYPES t\_itab TYPE STANDARD TABLE OF i \\n WITH EMPTY KEY. \\n METHODS meth1. \\n PRIVATE SECTION. \\n METHODS meth2 IMPORTING para TYPE t\_itab. \\nENDCLASS. \\n\\ \\nCLASS class IMPLEMENTATION. \\n METHOD meth1. \\n DATA itab TYPE SORTED TABLE OF i \\n WITH NON-UNIQUE DEFAULT KEY. \\n ... \\n meth2( CONV #( itab ) ). \\n ... \\n ENDMETHOD. \\n METHOD meth2. \\n ... \\n ENDMETHOD. \\nENDCLASS. DATA int TYPE i. \\n\\ \\nint = sqrt( 5 ) + sqrt( 6 ). \\nint = CONV i( sqrt( 5 ) ) + CONV i( sqrt( 6 ) ). DATA txt TYPE abap\_boolean. \\nDATA str TYPE string. \\n\\ \\ntxt = ' '. \\nstr = \` \`. \\n\\ \\nIF txt = str. \\n ... \\nENDIF. \\n\\ \\nIF txt = CONV abap\_bool( str ). \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html