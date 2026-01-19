---
title: "ABAPGET_BIT"
description: |
  ABAPGET_BIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPGET_BIT.htm"
abapFile: "ABAPGET_BIT.html"
keywords: ["loop", "while", "if", "catch", "data", "types", "internal-table", "ABAPGET", "BIT"]
---

`GET BIT bitpos OF byte_string INTO val.`

This statement reads the bit at the bit position `bitpos` of the data object `byte_string` and assigns its value to the target field `val`. `val` can be specified as follows:

The data object `byte_string` must be byte-like. [Bit](ABENBIT_EXPRESSION_GLOSRY.html), [constructor](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) and [table](ABENTABLE_EXPRESSION_GLOSRY.html) expressions can be used. `bitpos` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`. The value of `bitpos` must be greater than 0, otherwise uncatchable exceptions are raised. The bit positions in `byte_string` are counted from left to right, starting with the [most significant bit (MSB)](ABENMOST_SIGNIFICANT_BIT_GLOSRY.html) of the data object. If the value of `bitpos` is greater than the number of bits in `byte_string`, no bit is read and `sy-subrc` is set to 4.

The hexadecimal value *1B* is assigned to the data object `hex` and its bits are read from front to back. The output is *00011011*, which corresponds to the binary representation of decimal 27 or hexadecimal *1B*.

Hexadecimal values are assigned to data objects and included in an internal table which is looped across. During the loop, the bits are read from front to back. Finally, the result is added to the internal table which shows the hexadecimal and binary values. The `GET BIT` statement demonstrates a table expression following `OF`.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `i` is declared.
-   Expressions with the [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) and [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) operators and table expressions.

-   If `byte_string` has the [deep](ABENDEEP_GLOSRY.html) type `xstring`, a bit is read from the referenced byte string, not from the reference.
-   The reading of single bits is especially intended for evaluating the results of [bit expressions](ABAPCOMPUTE_BIT.html).
-   Counting the bits from the [most significant bit (MSB)](ABENMOST_SIGNIFICANT_BIT_GLOSRY.html) can have unexpected results when working with components that count from the [least significant bit (LSB)](ABENLEAST_SIGNIFICANT_BIT_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA hex TYPE xstring VALUE \`1B\`. \\nFINAL(len) = xstrlen( hex ) \* 8. \\nDATA output TYPE string. \\n\\ \\nWHILE sy-index <= len. \\n GET BIT sy-index OF hex INTO FINAL(res). \\n output &&= res. \\nENDWHILE. \\nout->write\_text( output ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: BEGIN OF struc, \\n hex\_value TYPE xstring, \\n bin TYPE string, \\n END OF struc. \\n\\ \\nDATA: hex1 TYPE xstring VALUE \`1B\`, \\n hex2 TYPE xstring VALUE \`1C\`, \\n hex3 TYPE xstring VALUE \`1D\`, \\n output TYPE string, \\n itab TYPE TABLE OF struc. \\n\\ \\nFINAL(len) = xstrlen( hex2 ) \* 8. \\nitab = VALUE #( ( hex\_value = hex1 ) \\n ( hex\_value = hex2 ) \\n ( hex\_value = hex3 ) ). \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n WHILE sy-index <= len. \\n GET BIT sy-index OF itab\[ sy-tabix \]-hex\_value INTO FINAL(res). \\n output &&= res. \\n ENDWHILE. \\n\\ \\n itab\[ sy-tabix \]-bin = output. \\n CLEAR output. \\nENDLOOP. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 The value of the bit at position `bitpos` of `byte_string` was placed in the result field `val`. 4 The value of `bitpos` is greater than the number of bits in `byte_string` and no bit was read. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html