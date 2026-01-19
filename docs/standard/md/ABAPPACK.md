---
title: "ABAPPACK"
description: |
  ABAPPACK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPACK.htm"
abapFile: "ABAPPACK.html"
keywords: ["do", "if", "class", "data", "types", "ABAPPACK"]
---

[Short Reference](ABAPPACK_SHORTREF.html)

`PACK source TO destination.`

This statement, which is forbidden in classes, converts the content of the data object `source` to the data type `p` of length 16 without [decimal places](ABENDECIMAL_PLACE_GLOSRY.html). In contrast to the [conversion rules for elementary data types](ABENCONVERSION_ELEMENTARY.html), any decimal separators in `source` are ignored. This assigns the converted content to the data object `destination`.

The data type of `source` must be character-like, [flat](ABENFLAT_GLOSRY.html), and its content must be interpretable as a numeric value. The data type of `destination` must be flat. If `destination` has the data type `p`, the intermediate result is assigned to it from right to left. Surplus places are cut off on the left, and the decimal places are determined by the data type of `destination`. If `destination` does not have the data type `p`, the intermediate result is converted to the data type of `destination` in accordance with the rules in the [conversion table for source field type `p`](ABENCONVERSION_TYPE_P.html).

Usage of `PACK`.

Usage of `=`.

`CX_SY_CONVERSION_NO_NUMBER`

`CX_SY_CONVERSION_OVERFLOW`

-   The function of the statement `PACK` is based on the fact that the second half-byte of the code of a digit in most character representations matches the [BCD](ABENBCD_GLOSRY.html) representation of the associated numeric value. This conversion is generally known as *packing*.
-   If the source field contains a number without a decimal separator, and the target field has `dobj2` of data type `p` with sufficient length and without decimal places, the result of the `PACK` statement matches the result of a regular [statement](ABAPMOVE.html).
-   The statement [`UNPACK`](ABAPUNPACK.html) does not demonstrate the same behavior as a regular [assignment](ABAPMOVE.html) and is therefore not yet obsolete.

-   *Cause:* Source field cannot be interpreted as a number
    *Runtime error:*\\ `CONVT_NO_NUMBER`

-   *Cause:* Overflow during conversion (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`

-   *Cause:* Source field (type `p`) contains an incorrect BCD format
    *Runtime error:*\\ `BCD_BADDATA`

DATA: txt TYPE c LENGTH 30, \\n num TYPE p. \\n\\ \\nPACK txt TO num. DATA: txt TYPE c LENGTH 30, \\n num TYPE p. \\n\\ \\nnum = txt. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenobsolete\_assignments.html