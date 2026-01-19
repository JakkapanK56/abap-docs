---
title: "ABAPSET_BIT"
description: |
  ABAPSET_BIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_BIT.htm"
abapFile: "ABAPSET_BIT.html"
keywords: ["loop", "do", "if", "catch", "data", "types", "internal-table", "ABAPSET", "BIT"]
---

[Short Reference](ABAPSET_BIT_SHORTREF.html)

`SET BIT bitpos OF byte_string [TO val].`

This statement sets the bit at bit position `bitpos` of the `byte_string` to 1 or, if specified, to the value of data object `val`. The other bits in `byte_string` remain unchanged. `byte_string` is a [result position](ABENRESULT_POSITION_GLOSRY.html), that is, either a variable or a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified.

The data object `byte_string` must be byte-like, whereas `bitpos` and `val` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`. The value of `bitpos` must be greater than 0 and `val` must be either 0 or 1, otherwise an uncatchable exception is raised. The bit positions in `byte_string` are counted from left to right starting with the [most significant bit (MSB)](ABENMOST_SIGNIFICANT_BIT_GLOSRY.html) of the data object. If the value of `bitpos` is greater than the number of bits in `byte_string`, no replacement is made and `sy-subrc` is set to 4.

In the data object `hex` with eight bits, the bit is set to the value 1 at the position determined by the loop counter `sy-index`, with all other bits set to 0. The output is *80 40 20 10 08 04 02 01*.

In this example, single bits are set in the lines of an internal table, where a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) is used as a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) in `SET BIT`.

-   If `byte_string` has the [deep](ABENDEEP_GLOSRY.html) type `xstring`, a bit is set in the referenced byte string, not in the reference.
-   Setting single bits is intended in particular for preparing operators in [bit expressions](ABAPCOMPUTE_BIT.html).
-   The built-in function [`bit-set`](ABENBIT_FUNCTIONS.html) can also be used to set an individual bit.
-   Counting the bits from the [most significant bit (MSB)](ABENMOST_SIGNIFICANT_BIT_GLOSRY.html) can have unexpected results when working with components that count from the [least significant bit (LSB)](ABENLEAST_SIGNIFICANT_BIT_GLOSRY.html).

-   *Cause:* The bit position is greater than or equal to `0`.
    *Runtime error:*\\ `BIT_OFFSET_NOT_POSITIVE`
-   *Runtime error:*\\ `BIT_NO_ZERO_OR_ONE`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA hex TYPE x LENGTH 1. \\nDATA output TYPE string. \\nDO 8 TIMES. \\n CLEAR hex. \\n SET BIT sy-index OF hex. \\n output &&= |\\{ hex \\} |. \\nENDDO. \\nout->write( output ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n hex TYPE x LENGTH 1, \\n hex\_tab TYPE STANDARD TABLE OF hex WITH EMPTY KEY. \\n\\ \\nDATA(hex\_tab) = VALUE hex\_tab( FOR i = 1 UNTIL i > 8 ( ) ). \\n\\ \\nDO 8 TIMES. \\n SET BIT sy-index OF hex\_tab\[ sy-index \]. \\nENDDO. \\n\\ \\nout->write( hex\_tab ). \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 A bit of the data object `byte_string` was set at position `bitpos`. 4 The value of `bitpos` is greater than the number of bits in `byte_string` and no bit was set. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html