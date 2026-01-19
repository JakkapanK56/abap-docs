---
title: "ABENCOMPARISON_TYPE"
description: |
  ABENCOMPARISON_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOMPARISON_TYPE.htm"
abapFile: "ABENCOMPARISON_TYPE.html"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "ABENCOMPARISON", "TYPE"]
---

When operands with elementary data types are compared, the comparison is performed according to a comparison type that is determined by the involved operands, as described for [elementary data objects](ABENLOGEXP_RULES_OPERANDS_DOBJ.html) and [calculation expressions](ABENLOGEXP_RULES_EXPRESSIONS.html). The comparison type can be one of the [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html). When incompatible operands are compared, the operands that do not have the comparison type are converted to this type.

If the comparison type is one of the [numeric data types](ABENBUILTIN_TYPES_NUMERIC.html), the numeric values are compared.

The comparison of a text string with an integer is performed with numeric comparison type `i`. If the text string cannot be converted to `i`, an uncatchable exception would be raised in the comparison. Convertibility is therefore checked first using the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html).

If the comparison type is one of the [character-like data types](ABENBUILTIN_TYPES_CHARACTER.html), the content is compared from left to right. Based on the internal binary representation in the [code page](ABENCODEPAGE_GLOSRY.html) used, the first differing character from the left determines which operand is greater.

The example shows whether the binary representation of uppercase letters is larger, the same or smaller than the binary representation of lowercase letters for individual characters. For the Unicode character representation [UCS-2](ABENUCS2_GLOSRY.html) used by ABAP, uppercase letters are smaller than lowercase letters. Numbers and special characters are not case-sensitive and the result of the comparison for equality is true.

If the comparison type is one of the [byte-like data types](ABENBUILTIN_TYPES_BYTE.html), the content is compared from left to right. Based on the byte values, the first differing byte from the left determines which operand is greater.

A byte-like comparison type is achieved by comparing byte-like operands. Invalid values are converted into hexadecimal zeros here when they are entered.

If the comparison type is one of the [date/time types](ABENBUILTIN_TYPES_DATE_TIME.html), the content is compared from left to right. Based on the internal binary representation in the [code page](ABENCODEPAGE_GLOSRY.html) used, the first differing character from the left determines which operand is greater.

For operands of types `d` and `t` that contain a valid date or a valid time, the later date or time is always greater than the earlier one.

Comparison of a date obtained by the addition of a numeric value from the current date to the original date. The later date is always greater than the earlier date.

If the comparison type is the [time stamp type](ABENBUILTIN_TYPES_DATE_TIME.html), the times are compared, whereby a later time is always the greater value and the initial value is always less than every real time stamp.

-   Since platform-dependent rounding errors may occur with data type `f`, a comparison for equality often does not make any sense for binary floating point numbers.
-   [Scale](ABENSCALE_GLOSRY.html) and [precision](ABENPRECISION_GLOSRY.html) are not relevant in comparisons between decimal floating point numbers.

-   For operands of types `c` and `string`, the content is not compared with the [locale](ABENLOCALE_GLOSRY.html) of the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). The statement [`CONVERT TEXT`](ABAPCONVERT_TEXT.html) can be used to determine the order of the locale.
-   For operands of type `n` that contain a valid string of digits, the proportions of the numbers represented are determined correctly.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA char TYPE string. \\ncl\_demo\_input=>add\_field( CHANGING field = char ). \\nDATA num TYPE i. \\ncl\_demo\_input=>request( CHANGING field = num ). \\n\\ \\nTRY. \\n FINAL(test) = CONV i( char ). \\n CATCH cx\_sy\_conversion\_error. \\n out->write( \`Try again!\` ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->write( \\n COND #( WHEN char > num THEN \`CHAR is greater than NUM\` \\n WHEN char = num THEN \`CHAR equals NUM\` \\n ELSE \`CHAR is lower than NUM\` ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA char TYPE c LENGTH 1. \\ncl\_demo\_input=>request( CHANGING field = char ). \\n\\ \\nout->write( \\n COND #( WHEN to\_upper( char ) > to\_lower( char ) \\n THEN \`Upper case is greater than lower case\` \\n WHEN to\_upper( char ) = to\_lower( char ) \\n THEN \`Upper case is equal to lower case\` \\n ELSE \`Upper case is lower than lower case\` ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA hex1 TYPE x LENGTH 1. \\ncl\_demo\_input=>add\_field( CHANGING field = hex1 ). \\nDATA hex2 TYPE x LENGTH 1. \\ncl\_demo\_input=>request( CHANGING field = hex2 ). \\n\\ \\nout->write( \\n COND #( WHEN hex1 > hex2 \\n THEN \`HEX1 is greater than HEX2\` \\n WHEN hex1 = hex2 \\n THEN \`HEX1 equals HEX2\` \\n ELSE \`HEX1 is lower than HEX2\` ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\ncl\_demo\_input=>add\_field( CHANGING field = date ). \\nDATA(days) = CONV int2( 0 ). \\ncl\_demo\_input=>request( CHANGING field = days ). \\n\\ \\nFINAL(new\_date) = CONV d( date + days ). \\n\\ \\nout->write( \\n COND #( WHEN new\_date > date \\n THEN \`NEW\_DATE is greater than DATE\` \\n WHEN new\_date = date \\n THEN \`NEW\_DATE equals DATE\` \\n ELSE \`NEW\_DATE is lower than DATE\` ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html