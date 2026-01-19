---
title: "ABENLOGEXP_CHARACTER"
description: |
  ABENLOGEXP_CHARACTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_CHARACTER.htm"
abapFile: "ABENLOGEXP_CHARACTER.html"
keywords: ["do", "if", "catch", "data", "types", "ABENLOGEXP", "CHARACTER"]
---

The following tables show the [comparison types](ABENCOMPARISON_TYPE_GLOSRY.html) for comparisons between character-like data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](ABENCONVERSION_ELEMENTARY.html) to this type. The [comparison rules for the comparison types](ABENCOMPARISON_TYPE.html) determine how the comparison is performed. If no comparison type is specified for a combination, no comparisons are possible.

**Value Ranges and Length Adjustments**

Comparison of a numeric text with an integer. If `numtext` contains an invalid value, an uncatchable exception is raised with the runtime error `CONVT_NO_NUMBER`.

**Length Adjustments**

In comparisons between text fields of the type `c` and text strings of the type `string`, any trailing blanks are ignored by conversions from `c` to `string`. This can lead to unexpected results. The conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be used here to force other comparison types (see the example there).

In the following comparison, the comparison type is `c` and the comparison is performed in the current code page, in accordance with the binary representation. In most code pages, *a* is greater than *Z*. See also the example for [`CONVERT TEXT`](ABAPCONVERT_TEXT.html).

The following comparison is false, which is probably unexpected. The value returned by [`boolc`](ABENBOOLE_FUNCTIONS.html) has the type `string` and contains a blank, whereas the constant `abap_false` has the type `c`. For the comparison, the value of `abap_false` is converted to an empty string, since the blank it contains is ignored.

The following comparison, however, is true, since the return value of [`xsdbool`](ABENBOOLE_FUNCTIONS.html) has the same ABAP type as the constant `abap_false`.

[Comparing Text Strings of Different Length](ABENSTRING_COMPARISON_ABEXA.html)

**Length Adjustments**

The logical expression `CONV xstring( 255 ) = 'FF'` is true.

**Length Adjustments**

The example shows the length adjustment in a comparison of a time field with a character string. Both comparisons are true.

The following comparison is always true. The initial text string literal is converted to the initial value of a time stamp field and this is smaller than any real time stamp.

-   When the types `string` and `c` are compared with packed numbers of the type `p`, the comparison type `p` has 31 places with the number of decimal places of the operand of type `p`, which can raise exceptions if overflows occur.
-   When the type `n` is compared with packed numbers of the type `p`, the numeric text can contain up to 31 digits, excluding leading zeros and regardless of how many decimal places are in the operand with type `p`.
-   When the types `string`, `c`, and `n` are compared with integers of the types `int8`, `i`, `s`, and `b`, the numeric value in the character-like operand does not have to fit the value range of the comparison type `i`. If the numeric value is not in the value range, the comparison returns the correct result and no exception is raised.

-   Operands with a different length of data type `string` never match. If the content of the operands match for the length of the shorter operand, the shorter operand is smaller than the longer one. Otherwise, the surplus places in the longer field are truncated on the right, and then the content is compared.
-   In comparisons between two operands of data type `c` with the same length, the entire length is compared, which means the trailing blanks are respected. In comparisons between two operands of data type `c` with different lengths, the shorter field is [converted](ABENCONVERSION_TYPE_C.html) to the longer field, with blanks used as padding on the right.
-   In comparisons between two operands of data type `n`, the shorter field is [converted](ABENCONVERSION_TYPE_N.html) to the longer field, with the character *0* used as padding on the left.

-   In comparisons of data type `c` with `x` or `xstring`, the shorter field is adjusted to the length of the longer field after conversions from `x` to `c` or `xstring` to `string`. Blanks are used as padding on the right.
-   Lengths are not adjusted in comparisons between the data type `string` on one side and `x` or `xstring` on the other.

-   For comparisons between data types `c`, `n`, or `string` on the one hand and `d` on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks are truncated.
-   For comparisons between data types `c` or `n` on the one hand and `t` on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks or characters *0* are truncated.
-   Lengths are not adjusted for comparisons between the data type `string` and `t`.

DATA numtext TYPE n LENGTH 3. \\ncl\_demo\_input=>add\_field( CHANGING field = numtext ). \\nDATA num TYPE int1. \\ncl\_demo\_input=>request( CHANGING field = num ). \\n\\ \\ncl\_demo\_output=>display( \\n COND #( WHEN numtext < num THEN |\\{ numtext \\} < \\{ num \\}| \\n WHEN numtext > num THEN |\\{ numtext \\} > \\{ num \\}| \\n ELSE |\\{ numtext \\} = \\{ num \\}| ) ). IF 'a' > 'Z'. \\n cl\_demo\_output=>display\_text( \`'a' > 'Z'\` ). \\nELSE. \\n cl\_demo\_output=>display\_text( \`'a' < 'Z'\` ). \\nENDIF. IF boolc( 1 = 2 ) = abap\_false. \\n cl\_demo\_output=>display\_text( 'yes' ). \\nELSE. \\n cl\_demo\_output=>display\_text( 'no' ). \\nENDIF. IF xsdbool( 1 = 2 ) = abap\_false. \\n cl\_demo\_output=>display\_text( 'yes' ). \\nELSE. \\n cl\_demo\_output=>display\_text( 'no' ). \\nENDIF. FINAL(int) = 255. \\n\\ \\nASSERT CONV xstring( int ) = 'FF'. IF CONV t( '120000' ) = '12'. \\n cl\_demo\_output=>write( |CONV t( '120000' ) = '12'| ). \\nENDIF. \\n\\ \\nIF CONV t( '123000' ) <> '12'. \\n cl\_demo\_output=>write( |CONV t( '123000' ) <> '12'| ). \\nENDIF. \\n\\ \\ncl\_demo\_output=>display( ). ASSERT utclong\_current( ) > \`\`. - **string**, **c**, **n**\\ **decfloat16**, **decfloat34** `decfloat34`\\ **f** `f`\\ **p** `p`\\ **int8** `int8`\\ **i**, **s**, **b** `i` - **string** **c** **n**\\ **string** `string` `string` `p`\\ **c** `string` `c` `p`\\ **n** `p` `p` `n` - **string** **c** **n**\\ **xstring** `string` `string` `p`\\ **x** `string` `c` `p` - **string** **c** **n**\\ **d**, **t** `string` `c` `n`\\ **utclong** `utclong` `utclong` `-` abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_operands\_dobj.html