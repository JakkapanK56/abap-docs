---
title: "ABAPUNPACK"
description: |
  ABAPUNPACK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUNPACK.htm"
abapFile: "ABAPUNPACK.html"
keywords: ["if", "data", "types", "ABAPUNPACK"]
---

[Short Reference](ABAPUNPACK_SHORTREF.html)

`UNPACK source TO destination.`

This statement converts the content of the data object `source` in accordance with special rules and assigns the converted content to the data object `destination`. `source` expects the data type `p` of length 16 without [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) and no operands of data type `decfloat16` or `decfloat34` can be used. The data type of `destination` must be character-like and [flat](ABENFLAT_GLOSRY.html).

The conversion is performed according to the following rules:

After the assignments, `char1` and `char2` contain the values *123,456* and *0000123456*.

`CX_SY_CONVERSION_NO_NUMBER`

`CX_SY_CONVERSION_OVERFLOW`

-   If the data type of `source` is not of type `p` with length 16 and without decimal places, the content of `source` is converted to this data type. Contrary to the rules described in [Conversion Rules for Elementary Data Types](ABENCONVERSION_ELEMENTARY.html), any decimal separator in `source` is completely ignored.
-   The digits of the interim result are assigned as right-aligned digits to the data object `destination` and without a plus/minus sign. Any surplus places in `destination` are padded with zeros on the left. If the length of `destination` is not sufficient, it is truncated on the left.

-   The function of the statement `UNPACK` is based on the fact that the [BCD](ABENBCD_GLOSRY.html) representation of a [place](ABENPLACE_GLOSRY.html) corresponds to the second half byte of code of a digit in most character representations. This conversion is generally known as *Unpacking*.
-   The statement [`PACK`](ABAPPACK.html) used for packing is obsolete and can be replaced by a regular [assignment](ABAPMOVE.html).

-   *Cause:* Source field cannot be interpreted as a number
    *Runtime error:*\\ `CONVT_OVERFLOW`

-   *Cause:* Overflow during conversion (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`

-   *Cause:* Source field (type `p`) contains an incorrect BCD format
    *Runtime error:*\\ `BCD_BADDATA`

DATA: pack TYPE p LENGTH 8 DECIMALS 3 VALUE '123.456', \\n char1 TYPE c LENGTH 10, \\n char2 TYPE c LENGTH 10. \\n\\ \\nchar1 = pack. \\nUNPACK pack TO char2. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenabap\_data\_move.html