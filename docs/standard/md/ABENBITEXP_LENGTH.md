---
title: "ABENBITEXP_LENGTH"
description: |
  ABENBITEXP_LENGTH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBITEXP_LENGTH.htm"
abapFile: "ABENBITEXP_LENGTH.html"
keywords: ["if", "method", "data", "ABENBITEXP", "LENGTH"]
---

A bit expression is assigned a calculation length in which the operation is executed.

The calculation length is the length of the longest bit expression operand involved. Unlike in the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of an arithmetic expression, the type of the result is not included.

Before the entire expression is evaluated, all operands involved are converted to the length of the longest operand based on the [rules for the source field type `x`](ABENCONVERSION_TYPE_X.html) and [`xstring`](ABENCONVERSION_TYPE_XSTRING.html). This means that shorter operands are padded with hexadecimal 0 on the right.

The result in the calculation length is handled as follows:

The result of the following bit expression is hexadecimal `11111010` with a length of 4 bytes.

-   If used in the statement [`COMPUTE`](ABENEQUALS_BIT_EXPR.html), the final result of the entire expression is converted to the length of the data object `result` based on the rules for source field type `x` and `xstring`. In assignments to an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) the result of type `xstring` is in the calculation length.
-   If used in [relational expressions](ABENRELATIONAL_EXPRESSION_GLOSRY.html), the result is used as an operand in the length resulting from the calculation.
-   If used as an argument of [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html) or [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), the result is used as an operand in the length resulting from the calculation.
-   If used as an [actual parameter](ABENTYPING_ARITH_EXPR.html) for [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of [methods](ABENMETHOD_GLOSRY.html), the final result of the entire expression is converted to the length of the formal parameter based on the rules for source field type `x` and `xstring`. If the formal parameter is typed generically, it is set to the type `x` in the length determined by the operands.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA hex1 TYPE xstring VALUE '10101010'. \\nDATA hex2 TYPE xstring VALUE '0101'. \\nout->write( \\n |\\{ hex1 BIT-OR hex2 \\}\\\\n\\{ \\n xstrlen( CONV xstring( hex1 BIT-OR hex2 ) ) \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abapcompute\_bit.html