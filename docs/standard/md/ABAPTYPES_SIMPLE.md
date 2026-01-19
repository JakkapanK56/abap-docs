---
title: "ABAPTYPES_SIMPLE"
description: |
  ABAPTYPES_SIMPLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_SIMPLE.htm"
abapFile: "ABAPTYPES_SIMPLE.html"
keywords: ["if", "data", "types", "ABAPTYPES", "SIMPLE"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)

`TYPES \{\ \{dtype[(len)] TYPE abap_type [DECIMALS dec]\}`\\ 
      `|\ \{dtype TYPE abap_type [LENGTH len]\ [DECIMALS dec]\}\}.`

[`... DECIMALS dec`](#ABAP_ONE_ADD@1@)

By specifying a [built-in data type](ABENBUILTIN_ABAP_TYPE_GLOSRY.html)\\ `abap_type`, a non-generic elementary data type is defined. For `abap_type`, all [built-in data types](ABENBUILT_IN_TYPES_COMPLETE.html) can be used, except for the internal types `b` and `s`.

For the ABAP types `c`, `n`, `p`, and `x`, the length of the data type `dtype` must be specified by entering a number directly or by specifying a corresponding numeric constant `len` within the [length range](ABENBUILT_IN_TYPES_COMPLETE.html) defined for the type in question. For all other ABAP types, the length is determined by the value in the [tables](ABENBUILT_IN_TYPES_COMPLETE.html) of built-in ABAP types and no length can be specified in `len`.

The length `len` is specified either in parentheses directly after the type name `dtype`, or after the addition `LENGTH`. The specified length must be positive. If the length is not specified explicitly for the ABAP types `c`, `n`, `p`, and `x`, the [standard length](ABENBUILT_IN_TYPES_COMPLETE.html) is defined implicitly.

These statements create three elementary data types that are local to the program. Values for the unspecified technical properties of the built-in types `c` and `p` are specified.

In the ABAP type [`p`](ABENBUILTIN_TYPES_NUMERIC.html), the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) must be defined using the addition `DECIMALS` and by specifying an unsigned number directly or a corresponding numeric constant `dec`. The addition cannot be specified in other data types.

A maximum of 14 decimal places can be specified. If the number of decimal places is greater than the number of places or digits calculated from `2 * len - 1`, a syntax check warning occurs. This is because only the last `2 * len - 1` decimal places can be filled with digits.

For the decimal separator to be respected in operations with packed numbers, the [program property](ABENPROGRAM_PROPERTY_GLOSRY.html)\\ *fixed point arithmetic* must be set. Otherwise, the addition `DECIMALS` only affects the output on dynpros and the format for the statement [`WRITE [TO]`](ABAPWRITE_TO.html).

If the number of decimal places is greater than the number of digits, the decimal separator is outside the sequence of digits, which should be respected in assignments and outputs. Such a number can raise exceptions in conversions to external formats such as data types of the database in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or during serializations to [asXML](ABENASXML_GLOSRY.html).

Definition of a numeric type for a packed number with three digits and two decimal places. The value range is -9.99 to +9.99 in increments of 0.01.

Defines a numeric type for a packed number with three digits and five decimal places. This statement produces a syntax check warning. The value range is -0.00999 to +0.00999 in increments of 0.00001. Not all decimal places can be used.

-   For reasons of legibility, it is best to always use the addition `LENGTH` instead of parentheses to specify the length `len`.
-   The non-specifiable internal types `b` and `s` can be achieved by referencing the built-in data types [`INT1`](ABENDDIC_BUILTIN_TYPES.html) and [`INT2`](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary.
-   It is not necessary to list all additions in [obsolete variants](ABAPTYPES_IMPLICIT.html) of the above statement since they are added implicitly.

TYPES: text10 TYPE c LENGTH 10, \\n text20 TYPE c LENGTH 20, \\n number TYPE p LENGTH 8 DECIMALS 2. TYPES number TYPE p LENGTH 2 DECIMALS 2. TYPES number TYPE p LENGTH 5 DECIMALS 5. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html