---
title: "ABENNEWS-71-DECFLOAT"
description: |
  ABENNEWS-71-DECFLOAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-DECFLOAT.htm"
abapFile: "ABENNEWS-71-DECFLOAT.html"
keywords: ["do", "if", "method", "class", "data", "types", "exception-handling", "ABENNEWS", "DECFLOAT"]
---

Decimal floating point numbers with the types `decfloat16` and `decfloat34` have been introduced in ABAP to satisfy the demand for more precise processing of decimal numbers with a large range of values. The existing ABAP type `p` (packed number) represents a decimal number precisely and can be calculated precisely (apart from unavoidable commercial rounding), but the value range is often too small. The existing ABAP type `f` (binary floating point number) has a large value range, but cannot represent every decimal number precisely due to the internal binary representation.

Both of these requirements are satisfied by decimal floating point numbers. Unlike binary floating point numbers, decimal floating point numbers are represented internally with a decimal mantissa. Each decimal number can be represented precisely within the length of the mantissa (16 or 34) and it can be used for calculations in the same way as with type `p`. Unlike type `p`, the number of decimal places is not a property of the data type; an exponent of the value determines the decimal places instead. This means that decimal floating point numbers have the advantage of providing a very large range of values.

[1. New Built-In ABAP Types `decfloat16` and `decfloat34`](#ABAP_MODIFICATION_1@4@)

[2\. New Built-In Types in ABAP Dictionary](#ABAP_MODIFICATION_2@4@)

[3. New Built-In Functions `round` and `rescale`](#ABAP_MODIFICATION_3@4@)

[4\. Lossless Calculations](#ABAP_MODIFICATION_4@4@)

[5\. Methods for Decimal Floating Point Numbers](#ABAP_MODIFICATION_5@4@)

[6. Formatting of Decimal Floating Point Numbers Using `WRITE`](#ABAP_MODIFICATION_6@4@)

From ABAP release 7.0, EhP2, ABAP includes the new built-in [numeric](ABENNUMERIC_DATA_TYPE_GLOSRY.html)\\ [ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html)\\ [`decfloat16`](ABENBUILT_IN_TYPES_COMPLETE.html) and [`decfloat34`](ABENBUILT_IN_TYPES_COMPLETE.html) for [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html). The corresponding data objects are eight bytes or 16 bytes long and the data objects are [aligned](ABENALIGNMENT_GLOSRY.html) in their lengths. The [value range](ABENVALUE_RANGE_GLOSRY.html) is determined by mantissas of the length -383 and +384 or -6143 and +6144. The new [generic ABAP type](ABENGENERIC_ABAP_TYPE_GLOSRY.html)\\ [`decfloat`](ABENBUILT_IN_TYPES_GENERIC.html) covers both new types, `decfloat16` and `decfloat34`.

The following changes have been caused by the new types:

The following new types have been introduced in ABAP Dictionary for the new ABAP types `decfloat16` and `decfloat34`:

Data elements with these types can be used to declare fields in database tables and in dynpros. An *output style* can be specified in a domain or directly in a structure component created with one of these types. For dynpro fields whose data type is not defined in ABAP Dictionary, the *output style* can be defined in [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html).

The new [rounding functions](ABENROUNDING_FUNCTION_GLOSRY.html)\\ `round` and `rescale` enable decimal floating point numbers to be rounded or their [scaling](ABENSCALE_GLOSRY.html) to be changed. New constants have been added to the class `CL_ABAP_MATH`. These constants can be used to specify the rounding rule.

The new addition `EXACT` of the statement [`COMPUTE`](ABAPCOMPUTE.html) can be used to force a [lossless calculation](ABENLOSSLESS_CALCULATION_GLOSRY.html) for decimal floating point numbers, under certain prerequisites. No roundings are allowed in a lossless calculation; they raise the exception `CX_SY_CONVERSION_ROUNDING`.

Methods for operations with floating point numbers have been added to the class `CL_ABAP_MATH`.

The new class `CL_ABAP_DECFLOAT` contains special methods for decimal floating point numbers.

[Predefined formats](ABENWRITE_FORMATS.html) have been defined for the new types `decfloat16` and `decfloat34` for the statements [`WRITE ... TO`](ABAPWRITE_TO.html) for formatted assignments and [`WRITE`](ABAPWRITE-.html) for list output. The predefined output lengths for list output are 24 and 46.

The new addition [`STYLE`](ABAPWRITE_TO_OPTIONS.html) has been added to the `WRITE` statements for the formatting of decimal floating point numbers with different formats.

-   New [conversion](ABENCONVERSION_TYPE_DECFLOAT.html) and [comparison rules](ABENLOGEXP_RULES_OPERANDS.html) have been introduced for the new types.
-   If a decimal floating point number appears in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), the [calculation type](ABENARITH_TYPE.html) is `decfloat34`.
-   The [floating point functions](ABENFLOATING_POINT_FUNCTION_GLOSRY.html)\\ `exp`, `log`, `log10`, and `sqrt` now no longer work just with arguments of type `f`; they now also work with arguments of type `decfloat16` and `decfloat34`. The type of the argument determines the type of the return value. Decimal floating point numbers cannot be used as arguments for the remaining floating point functions at the moment.

-   [`DF16_DEC`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html) are used by database fields in which decimal floating point numbers, such as packed numbers with type `DEC` are stored. Database writes can cause roundings and overflows.
-   [`DF16_RAW`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_RAW`](ABENDDIC_BUILTIN_TYPES.html) are used by database fields in which decimal floating point numbers are stored in their internal representation.
-   \\ [`DF16_SCL`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_SCL`](ABENDDIC_BUILTIN_TYPES.html) are used by database fields in which decimal floating point numbers are stored with their scaling. In this kind of field, the decimal floating point numbers are stored as in `DF16_RAW` or `DF34_RAW`. The scaling must be specified in a direct successor database field with type `INT2`. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads. These data types are now obsolete and their use is strongly discouraged.

-   The method `GET_SCALE` gets the [scaling](ABENSCALE_GLOSRY.html) of a [decimal floating point number](ABENDECFLOAT_GLOSRY.html).
-   The method `GET_NUMBER_OF_DIGITS` gets the [precision](ABENPRECISION_GLOSRY.html) of a [decimal floating point number](ABENDECFLOAT_GLOSRY.html).
-   The method `NORMALIZE` gets a normalized floating point number. This means that the [scaling](ABENSCALE_GLOSRY.html) and [precision](ABENPRECISION_GLOSRY.html) of an input value are changed so that the mantissa has no trailing zeros.
-   The method `GET_MAX_DB_VALUE` returns the maximum value of a number of the type `DF16_DEC` or `DF34_DEC` on the database (from EhP1).
-   The method `GET_DB_LENGTH_DECS` returns the length and number of decimal places of a number of the type `DF16_DEC` or `DF34_DEC` on the database (from EhP1).

-   The methods `READ_DECFLOAT34` and `READ_DECFLOAT16` convert character-like data objects to decimal floating point numbers and, unlike regular assignments, enable enhanced exception handling.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html