---
title: "ABENLOGEXP_NUMERIC"
description: |
  ABENLOGEXP_NUMERIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_NUMERIC.htm"
abapFile: "ABENLOGEXP_NUMERIC.html"
keywords: ["do", "if", "case", "data", "types", "ABENLOGEXP", "NUMERIC"]
---

The following tables show the [comparison types](ABENCOMPARISON_TYPE_GLOSRY.html) for comparisons between numeric data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](ABENCONVERSION_ELEMENTARY.html) to this type. The [comparison rules for the comparison types](ABENCOMPARISON_TYPE.html) determine how the comparison is executed.

If a [decimal floating point number](ABENDECFLOAT_GLOSRY.html) is involved in a comparison, the comparison always takes place with the type `decfloat34`.

**Value Ranges and Length Adjustments**

The result of this example is a surprise at first, but is caused by the fact that the value *0.15* cannot be represented exactly as a binary floating point number.

**Value Ranges and Length Adjustments**

Both comparisons are true. Whereas the comparison type of the first comparison is character-like and different strings do not match, the comparison type of the second comparison, on the other hand, is numeric due to the numeric literal `-1`. The string `1-` contains a number in commercial notation, which is converted to an integer number with the value *\-1*.

**Length Adjustments**

The comparison type `p` has 31 places and the number of decimal places for the operand of type `p`.

In [conversions](ABENBYTE_SOURCE_FIELDS.html) of byte-like data types to any numeric type except `int8`, it should be noted that only the last four bytes are respected. In the case of `int8`, the last 8 bytes are respected.

The comparison is true for all valid integer numbers of the type `i`. In the comparison, the byte string created from a number is converted into the original number.

A valid time specification in `time` is converted to the number of seconds since midnight in the comparisons. This number is compared with the number of seconds that corresponds to noon.

-   When two operands with data type `p` are compared, numbers with more than 31 places are used internally to ensure that there is no overflow.

-   When two operands with data type `p` but with different lengths are compared, the shorter operand is [converted](ABENCONVERSION_TYPE_P.html) to the greater length.
-   When two operands with data type `p` but with different numbers of decimal places are compared, the operand with fewer decimal places is [converted](ABENCONVERSION_TYPE_P.html) to a number with the same number of decimal places as the other operand.

-   When an operand with type `p` is compared with an operand with type `int8`, `i`, `s`, or `b`, the comparison type `p` has 31 places and the number of decimal places of the operand of type `p`.
-   If the value of an operand of type `int8` does not match the value range of a comparison type `p`, the exception is caught internally, and the comparison delivers the correct result.

-   When the types `string` and `c` are compared with packed numbers of the type `p`, the comparison type `p` has 31 places with the number of decimal places of the operand of type `p`, which can raise exceptions if overflows occur.
-   When the type `n` is compared with packed numbers of the type `p`, the numeric text can contain up to 31 digits, excluding leading zeros and regardless of how many decimal places are in the operand with type `p`.
-   When the types `string`, `c`, and `n` are compared with integers of the types `int8`, `i`, `s`, and `b`, the numeric value in the character-like operand does not have to fit the value range of the comparison type `i`. If the numeric value is not in the value range, the comparison returns the correct result and no exception is raised.

cl\_demo\_output=>display( \\n COND #( \\n WHEN CONV f( '0.15' ) = CONV decfloat34( '0.15' ) \\n THEN \`OK\` \\n ELSE \`Surprise, surprise ...\` ) ). IF '-1' <> '1-'. \\n cl\_demo\_output=>write( |'-1' <> '1-'| ). \\nENDIF. \\n\\ \\nIF -1 = '1-'. \\n cl\_demo\_output=>write( |-1 = '1-'| ). \\nENDIF. \\n\\ \\ncl\_demo\_output=>display( ). DATA(num) = -2147483648. \\ncl\_demo\_input=>request( CHANGING field = num ). \\n\\ \\nFINAL(hex) = CONV xstring( num ). \\n\\ \\nIF hex = num. \\n cl\_demo\_output=>display( hex ). \\nENDIF. FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\ncl\_demo\_output=>display( \\n COND #( WHEN time < 43200 THEN 'AM' \\n WHEN time >= 43200 THEN 'PM' ) ). - **decfloat16**, **decfloat34** **f** **p**\\ **int8** **i** **s** **b**\\ **decfloat16**, **decfloat34** `decfloat34` `decfloat34` `decfloat34` `decfloat34`\\ `decfloat34` `decfloat34` `decfloat34`\\ **f** `decfloat34` `f` `f` `f` \\ `f` `f` `f`\\ **p** `decfloat34` `f` `p` \\ `p` \\ `p` `p` `p`\\ **int8** `decfloat34` `f` `p` `int8` \\ `int8` `int8` `int8`\\ **i** `decfloat34` `f` `p` `int8` \\ `i` `i` `i`\\ **s** `decfloat34` `f` `p` `int8` \\ `i` `s` `s`\\ **b** `decfloat34` `f` `p` `int8` \\ `i` `s` `b` - **decfloat16**, **decfloat34** **f** **p**\\ **int8** **i**, **s**, **b**\\ **string**, **c**, **n** `decfloat34` `f` `p` `int8` \\ `i` - **decfloat16**, **decfloat34** **f** **p**\\ **int8** **i**, **s**, **b**\\ **xstring**, **x** `decfloat34` `f` `p` `int8` \\ `i` - **decfloat16**, **decfloat34** **f** **p**\\ **int8** **i**, **s**, **b**\\ **d**, **t** `decfloat34` `f` \\ `p` \\ `int8` `i`\\ **utclong** `-` `-` \\ `-` \\ `-` `-` abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_operands\_dobj.html