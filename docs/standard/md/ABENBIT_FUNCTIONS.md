---
title: "ABENBIT_FUNCTIONS"
description: |
  ABENBIT_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBIT_FUNCTIONS.htm"
abapFile: "ABENBIT_FUNCTIONS.html"
keywords: ["do", "if", "data", "ABENBIT", "FUNCTIONS"]
---

`... bit-set( arg ) ...`

The [built-in function](ABENBUILT_IN_FUNCTIONS.html)\\ `bit-set` is a [bit function](ABENBIT_FUNCTION_GLOSRY.html) that sets individual bits of its result. It expects an integer numeric value as an argument. The argument is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of the type `i`.

The length of the result is the minimum number of bytes needed to include the set bits.

The function can be used in all places where a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) can be used, particularly in bit expressions themselves. The same applies to handling the result as to bit expressions. More specifically, during assignment to an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), the resulting byte chain is handled like a byte string of data type `xstring`, and when passing a generic typed formal parameter, it is handled like a byte field of data type `x`. An empty byte chain defines a generically typed formal parameter as a byte field with a length of 1 and a hexadecimal value of *00*.

[Setting Bits](ABENBIT_FUNC_ABEXA.html)

-   If the argument is positive, the function creates a byte chain in which the bit has the value 1 at the position specified by the argument. All other bits have the value 0. The position is counted from left to right starting with the [most significant bit (MSB)](ABENMOST_SIGNIFICANT_BIT_GLOSRY.html).
-   If the argument has the value 0, the result is an empty byte chain.
-   If the argument is negative, the function creates a byte chain in which all bits up to and including the place specified by the argument have the value 1 and all bits after this position have the value 0.

-   The function [`boolx`](ABENBOOLE_FUNCTIONS.html) is also a [bit function](ABENBIT_FUNCTION_GLOSRY.html) in principle, but due to its properties is handled as a [logical function](ABENLOGIC_FUNCTION_GLOSRY.html).
-   Unlike the statement [`SET BIT`](ABAPSET_BIT.html), the result field does not need to be filled first.
-   Counting the bits from the [most significant bit (MSB)](ABENMOST_SIGNIFICANT_BIT_GLOSRY.html) can be unexpected when working with components that count from the [least significant bit (LSB)](ABENLEAST_SIGNIFICANT_BIT_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abenbinary\_functions.html