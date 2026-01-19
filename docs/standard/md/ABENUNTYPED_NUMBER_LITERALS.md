---
title: "ABENUNTYPED_NUMBER_LITERALS"
description: |
  ABENUNTYPED_NUMBER_LITERALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUNTYPED_NUMBER_LITERALS.htm"
abapFile: "ABENUNTYPED_NUMBER_LITERALS.html"
keywords: ["if", "case", "data", "types", "field-symbol", "ABENUNTYPED", "NUMBER", "LITERALS"]
---

`... [+|-]n[n[n[...]]] ...`

A numeric literal consists of a continuous sequence of up to 31 digits `n` (`0` to `9`), which can be directly preceded by a plus (`+`) or minus (`-`) sign.

The first literal is of the type `i`. The following literals are of the type `p` with lengths 8 and 16.

Targeted conversion of a character literal into type `int8`.

The example shows that a casting of a [packed number literal](ABENPACKED_NUMBER_LITERAL_GLOSRY.html) to the type `int8` has a different result than when using a field of the type `int8`, due to the different internal representation. If the field symbol `<fs2>` were typed with the [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html), an exception would even be raised for the use in the [embedded expression](ABENEMBEDDED_EXPRESSION_GLOSRY.html) of the output.

-   Numeric literals between -2147483648 and 2147483647 are [integer literals](ABENINTEGER_LITERAL_GLOSRY.html) and have the built-in ABAP type [`i`](ABENBUILTIN_TYPES_NUMERIC.html).
-   Numeric literals outside of this interval are [packed number literals](ABENPACKED_NUMBER_LITERAL_GLOSRY.html) and have the built-in ABAP type [`p`](ABENBUILTIN_TYPES_NUMERIC.html), with a length of 8 bytes if they are not longer than 15 digits and with a length of 16 bytes if they have between 16 and 31 digits.

-   There are no numeric literals of type [`int8`](ABENBUILTIN_TYPES_NUMERIC.html). The [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html)\\ [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be used to convert a numeric literal to the type `int8`.
-   [Packed number literals](ABENPACKED_NUMBER_LITERAL_GLOSRY.html) have a different internal representation from [integer literals](ABENINTEGER_LITERAL_GLOSRY.html). They cannot be [cast](ABENCAST_CASTING_GLOSRY.html) directly on field symbols with the data type integer.
-   In numeric literals, no decimal separators or [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) with mantissa and exponent are possible.
-   Numbers that cannot be represented as numeric literals can only be specified in character literals. If they are used in operand positions in which a numeric value is expected, they are converted into these. The [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html)\\ [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) is recommended for targeted conversions.
-   Numeric literals that span multiple lines are not allowed. Furthermore, the [literal operator](ABENLITERAL_OPERATOR.html)\\ `&` cannot be used to create a composite literal from multiple numeric literals.
-   A numeric literal `+|-literal` directly prefixed with a plus or minus sign must not be confused with a [simple arithmetic expression](ABAPCOMPUTE_ARITH.html)\\ `+|- literal` for which there is a space between the operator `+|-` and an unsigned literal. Unlike the numeric literal, the expression is not evaluated until runtime. Therefore, in such cases, the numeric literal should always be used for performance reasons.

DATA: t TYPE c LENGTH 1, \\n l TYPE i. \\n\\ \\nDATA(datadescr) = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( \\n 123456 ) ). \\n\\ \\ncl\_demo\_output=>write( datadescr->type\_kind ). \\n\\ \\ndatadescr = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( 123456790123 ) ). \\ncl\_demo\_output=>write( |\\{ datadescr->type\_kind \\} \\{ \\n datadescr->length \\}| ). \\n\\ \\ndatadescr = CAST cl\_abap\_datadescr( \\n cl\_abap\_typedescr=>describe\_by\_data( 12345679012345678 ) ). \\ncl\_demo\_output=>write( |\\{ datadescr->type\_kind \\} \\{ \\n datadescr->length \\}| ). \\n\\ \\ncl\_demo\_output=>display( ). FINAL(num) = CONV int8( '123456790123' ). FIELD-SYMBOLS TYPE int8. \\nFIELD-SYMBOLS TYPE int8. \\nDATA num TYPE int8. \\n\\ \\nnum = 3155380704000000000. \\nASSIGN num TO CASTING. \\nASSIGN 3155380704000000000 TO CASTING. \\n\\ \\ncl\_demo\_output=>display( |\\{ \\} \\\\n| && \\n |\\{ \\}| ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abenliteral.html