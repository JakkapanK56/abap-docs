---
title: "String Templates, Formatting Settings"
description: |
  The following string templates return the same value. This formatting option adds or removes leading zeros from strings of digits. The option `ALPHA` can be specified only if the embedded expression has the data type `string`, `c`, or `n`. It cannot be specified together with other formatting option
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOMPUTE_STRING_FORMAT_OPTIONS.htm"
abapFile: "ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html"
keywords: ["insert", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "field-symbol", "ABAPCOMPUTE", "STRING", "FORMAT", "OPTIONS"]
---

\\ `... [WIDTH     = len]\      [ALIGN     = LEFT|RIGHT|CENTER|(dobj)|expr]\      [PAD       = c]\      [CASE      = RAW|UPPER|LOWER|(dobj)|expr]\      [SIGN      = LEFT|LEFTPLUS|LEFTSPACE|RIGHT|RIGHTPLUS|RIGHTSPACE|(dobj)|expr]\      [EXPONENT  = exp]\      [DECIMALS  = dec]\      [ZERO      = YES|NO|(dobj)|expr]\      [XSD       = YES|NO|(dobj)|expr]\      [STYLE     =  SIMPLE|SIGN_AS_POSTFIX|SCALE_PRESERVING                   |SCIENTIFIC|SCIENTIFIC_WITH_LEADING_ZERO                   |SCALE_PRESERVING_SCIENTIFIC|ENGINEERING                   |(dobj)|expr]\      [CURRENCY  = cur]\      [NUMBER    = RAW|USER|ENVIRONMENT|(dobj)|expr]\      [ALPHA     = IN|OUT|RAW|(dobj)|expr]\      [DATE      = RAW|ISO|USER|ENVIRONMENT|(dobj)|expr]\      [TIME      = RAW|ISO|USER|ENVIRONMENT|(dobj)|expr]\      [TIMESTAMP = SPACE|ISO|USER|ENVIRONMENT|(dobj)|expr]\      [TIMEZONE  = tz]\      [COUNTRY   = cty] ...`

[1. `... WIDTH = len ...`](#ABAP_ADDITION_1@3@)

[2. `... ALIGN = LEFT|RIGHT|CENTER|(dobj)|expr ...`](#ABAP_ADDITION_2@3@)

[3. `... PAD = c ...`](#ABAP_ADDITION_3@3@)

[4. `... CASE = RAW|UPPER|LOWER|(dobj)|expr ...`](#ABAP_ADDITION_4@3@)

[5. `... SIGN = LEFT|LEFTPLUS|LEFTSPACE|RIGHT|RIGHTPLUS|RIGHTSPACE|(dobj)|expr ...`](#ABAP_ADDITION_5@3@)

[6. `... EXPONENT = exp ...`](#ABAP_ADDITION_6@3@)

[7. `... DECIMALS = dec ...`](#ABAP_ADDITION_7@3@)

[8. `... ZERO = YES|NO|(dobj)|expr ...`](#ABAP_ADDITION_8@3@)

[9. `... XSD = YES|NO|(dobj)|expr ...`](#ABAP_ADDITION_9@3@)

[10. `... STYLE = ...|(dobj)|expr ...`](#ABAP_ADDITION_10@3@)

[11. `... CURRENCY = cur ...`](#ABAP_ADDITION_11@3@)

[12. `... NUMBER = RAW|USER|ENVIRONMENT|(dobj)|expr ...`](#ABAP_ADDITION_12@3@)

[13. `... ALPHA = IN|OUT|RAW|(dobj)|expr ...`](#ABAP_ADDITION_13@3@)

[14. `... DATE = RAW|ISO|USER|ENVIRONMENT|(dobj)|expr ...`](#ABAP_ADDITION_14@3@)

[15. `... TIME = RAW|ISO|USER|ENVIRONMENT|(dobj)|expr ...`](#ABAP_ADDITION_15@3@)

[16. `... TIMESTAMP = SPACE|ISO|USER|ENVIRONMENT|(dobj)|expr ...`](#ABAP_ADDITION_16@3@)

[17. `... TIMEZONE = tz ...`](#ABAP_ADDITION_17@3@)

[18. `... COUNTRY = cty ...`](#ABAP_ADDITION_18@3@)

These formatting options override the [predefined formats](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) of [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html). The formatting options are specified as optional [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html) to which an actual parameter is assigned.

Actual parameters with fixed values can be specified as follows:

The formatting options that can be specified depend on the data type of the embedded expression. The formatting options `NUMBER`, `DATE`, `TIME`, `TIMESTAMP`, and `COUNTRY` are mutually exclusive.

If a formal parameter or a field symbol with a generic data type is specified as an embedded expression, only those formatting options can be specified that are allowed for all possible concrete data types.

The specifications `(dobj)` and `expr` together represent a summary [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). Unlike the regular [functional operand positions](ABENFUNCTIONAL_POSITIONS.html), however, the data object `dobj` must be placed in parentheses to distinguish it clearly from a parameter specified as a key word.

This formatting option defines the length of the string represented by the embedded expression as the value of `len`, where `len` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html).

The option `WIDTH` can be specified for all data types of the embedded expression. If the value of `len` is less than the minimum required length, it is ignored. This means that the predefined length cannot be reduced but only increased. By default, a string is extended on the right if it is enlarged, and padded with blanks. This default setting can be overridden using the formatting options `ALIGN` and `PAD`.

The length of the result of the following string template is 20. It consists of 4 digits, a decimal separator, and 15 trailing blanks.

[String Templates, Length](ABENSTRING_TEMPLATE_WIDTH_ABEXA.html)

This formatting option defines the alignment of the string represented by the embedded expression. It only has an effect if `WIDTH` is used at the same time to define a length that is greater than the minimum required length.

The values for the alignment are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `LEFT`. Depending on the alignment, surplus characters in the result are padded with blanks by default either on the right, left, or alternately left and right. This default setting can be overridden using the formatting option `PAD`.

The following string template creates the character string shown below it.

[String Templates, Alignments and Padding](ABENSTRING_TEMPLATE_ALIGN_ABEXA.html)

This formatting option defines the character used to pad surplus spaces in the result. It only has an effect if `WIDTH` is used at the same time to define a length that is greater than the minimum required length.

A data object of data type `c` or `string` can be specified for `c`, the first character of which is used as padding. If the `PAD` option is not specified or if `c` is specified as an empty string, blanks are used as padding.

The following string template creates the character string shown below it.

See [String Templates, Alignments and Padding](ABENSTRING_TEMPLATE_ALIGN_ABEXA.html)

This formatting option defines the case of the string represented by the embedded expression. It can be specified for all data types of the embedded expression.

The values for the case are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `RAW`.

The formatting option `CASE` affects the letters in a string. It is ignored by characters specified using `PAD`. In numeric data types, the *e* or *E* of an exponent is affected; in byte-like data types, the letters in a hexadecimal representation are affected. In a [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html), a *T* between date and time is affected. If the formatting option `XSD` is also specified, `CASE` affects the created asXML format.

The following string template creates the character string shown below it.

[String Templates, Case](ABENSTRING_TEMPLATE_CASE_ABEXA.html)

This formatting option defines the format of the +/- sign when the string represented by the embedded expression represents a numeric value. It can be specified only if the embedded expression has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html).

The values for the format of the plus/minus sign are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `LEFT`.

The following string template creates the character string shown below it.

[String Templates, Sign](ABENSTRING_TEMPLATE_SIGN_ABEXA.html)

This formatting option defines the exponent as the value of `exp` when formatting [floating point numbers](ABENFLOATING_POINT_NUMBER_GLOSRY.html), where `exp` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). The option `EXPONENT` can be specified only if the embedded expression has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html). It cannot be specified in combination with the options `TIMESTAMP` or `TIMEZONE`.

The option `EXPONENT` only affects the data type `f` or if the option `STYLE` is specified with the value `scientific`.

`exp` expects a data object of the type `i` that contains the required exponent.

If the value of the constant `CL_ABAP_FORMAT=>EXP_PRESERVE` is specified for `exp`, the exponent is used that matches the internal representation of the floating point number.

The following string template creates the character string shown below it.

This formatting option defines the number of decimal places when formatting numeric values or time stamps as the value of `dec`, where `dec` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). The option `DECIMALS` can be specified only if the embedded expression has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) or the [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ `utclong`. It cannot be specified together with the option `CURRENCY`.

`dec` expects a data object of type `i` that contains the number of decimal places required. For the individual data types, the following applies:

The `DECIMALS` formatting option does not override the [predefined format](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) for numeric types, specifying that thousands separators are not inserted.

The following string template creates the character string shown below it. If the [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html) is not specified, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of the embedded expression is `i`.

This formatting option defines the format of the numeric value zero. The option `ZERO` can be specified only if the embedded expression has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html). It cannot be specified together with the options `TIMESTAMP` or `TIMEZONE`.

The values for the format of the zero value are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `YES`.

The following string template creates the character string shown below it.

This formatting option formats the value of the embedded expression in [asXML](ABENASXML_GLOSRY.html) format that is assigned to its data type. The option `XSD` can be specified for all elementary data types. It cannot be specified together with other formatting options except `WIDTH`, `ALIGN`, `PAD`, `CASE`, and `ZERO`.

The option `XSD` affects all data types listed under [Mapping of Elementary ABAP Types](ABENABAP_XSLT_ASXML_ELEMENTARY.html), as specified there.

The values for the asXML format are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

If the data type of the embedded expression has the type `x` or `xstring`, a formatting option `CASE` specified at the same time is ignored, unless it refers to the domain `XSDUUID_RAW`.

The formatting of an embedded expression with `XSD` generally produces the same result as applying the predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`. Unlike `CALL TRANSFORMATION`, exceptions that can be raised during mapping are not wrapped but must be handled directly.

The following string template creates the character string shown below it. `XSDBOOLEAN` is a data element that refers to the special domain `XSDBOOLEAN` for the [mapping](ABENABAP_XSLT_ASXML_SCHEMA.html) of truth values.

This formatting option defines the style of [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html). The option `STYLE` can be specified only if the embedded expression has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html). It cannot be specified together with the options `CURRENCY`, `SIGN`, `TIMESTAMP`, or `TIMEZONE`.

The values for the format of a decimal floating point number are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The numeric value of the string is converted to the data type `decfloat34` and is handled as follows:

The [general rules](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) for embedded expressions apply to thousands separators and decimal separators. When combining other formatting options, the following applies:

The following string template creates the character string shown below it.

This formatting option defines the number of decimal places when formatting numeric values, dependent on a currency when specified in `cur` using a [currency ID](ABENCURRENCY_ID_GLOSRY.html). The option `CURRENCY` can be specified only if the embedded expression has one of the [numeric data types](ABENNUMERIC_DATA_TYPE_GLOSRY.html) (`b`, `s`), `i`, `int8`, `p` and `f`, `decfloat16` or `decfloat34`. It cannot be specified together with the options `DECIMALS`, `STYLE`, `TIMESTAMP`, or `TIMEZONE`. The option `SIGN` can also be used to control the formatting of the plus/minus sign.

The string is formatted with respect to its decimal places as follows for the individual numeric data types:

For the numeric data types `i`, `p`, and `f`, for `cur` a currency ID from a system table is expected and the behavior is governed by the content of system tables. By default two decimal places are used.

The following string template creates the character string shown below it.

This formatting option defines the format of the decimal representation (decimal and thousands separators). The option `NUMBER` can only be specified if the embedded expression has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html). In addition to the exclusions mentioned above, it cannot be specified together with the options `TIMESTAMP` or `TIMEZONE`.

The values for the format of the decimal representation are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `RAW`.

String Templates, Formatting Settings

The following string templates return the same value.

This formatting option adds or removes leading zeros from strings of digits. The option `ALPHA` can be specified only if the embedded expression has the data type `string`, `c`, or `n`. It cannot be specified together with other formatting options; apart from `WIDTH` and `CASE`.

The values for the format of the string of digits are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The length of the resulting character string is determined as follows:

The following string template creates the character string shown below it.

The first and the second assignment of string templates have different results:

The third and the fourth assignment have the same result, since in both cases the string template contains more than a single embedded expression and the length of the argument of `ALPHA` is used for the embedded expression.

The following assignments of string templates create different results:

This formatting option defines the format of a date. The option `DATE` can be specified only if the embedded expression has the data type `d`.

The values for the format of the date are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `RAW`.

String Templates, Formatting Settings

The following string template creates the character string shown below it, depending on the current date.

This formatting option defines the format of a time. The option `TIME` can be specified only if the embedded expression has the data type `t`.

The values for the format of the time specification are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `RAW`.

String Templates, Formatting Settings

The following string templates return the same value.

This formatting option defines the format of an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html). The option `TIMESTAMP` can be specified only if the embedded expression is of one of the following data types, otherwise a syntax or runtime error occurs:

The values for the format of the time stamp are fixed. The following table shows the key words and the associated values from the class `CL_ABAP_FORMAT` that can be specified as `dobj` or `expr`:

The default setting is `SPACE`.

Initial values and invalid values are handled as follows:

The following source text section shows the use of the time stamp formats.

This formatting option uses the [rules for time zones](ABENTIME_ZONE_RULES.html) to convert the date and time information of an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) into the [local date](ABENLOCAL_DATE_GLOSRY.html) and [local time](ABENLOCAL_TIME_GLOSRY.html) of the [time zone](ABENTIME_ZONE_GLOSRY.html) specified in `tz` and formats the result as a time stamp. The option `TIMEZONE` can be specified only if the embedded expression has of one of the following data types, otherwise a syntax or runtime error occurs:

If the option `TIMESTAMP` is not specified, an expression of the type `utclong` is formatted according to its [predefined format](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html). A time stamp in a packed number is formatted in the same way as with the specification `TIMESTAMP = SPACE`. If the option `TIMESTAMP` is specified, it takes effect.

`tz` expects a character-like data object containing a [time zone](ABENTIME_ZONE_GLOSRY.html) from a system table. If the [rule set](ABENTIME_ZONE_RULES.html) for the specified time zone is incomplete, an uncatchable exception is raised. If `tz` is initial, no time shift is calculated. The conversion takes place as described in the statements [`CONVERT UTCLONG`](ABAPCONVERT_UTCLONG.html) and [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html). The special rules for the first and last second apply to the time stamp type `utclong`.

Initial values are handled as follows:

Error handling is as follows:

The class `CL_DEMO_STRING_TEMPLATE_TZ` shows the use of the option `TIMEZONE` without using the option `TIMESTAMP` but also in connection with the option `COUNTRY`. Executing the class shows its effect.

[String Templates, Time Zones](ABENSTRING_TEMPLATE_TIMEZONE_ABEXA.html)

The formatting option `COUNTRY` defines a temporary [formatting setting](ABENFORMAT_SETTING_GLOSRY.html) for the currently embedded expression. It can be specified as an alternative to all formatting options for which the parameter `ENVIRONMENT` can be specified (that is, instead of `NUMBER`, `DATE`, `TIME`, and `TIMESTAMP`). The embedded expression is formatted as a number, date, or time, or time stamp, depending on its data type.

`cty` expects a data object of the type `LAND1` from the ABAP Dictionary that either contains a value from the `LAND` column of a system table or is initial. If not, an exception of the class `CX_SY_STRG_FORMAT` is raised.

If `cty` contains a value from the the system table , the [country-specific format](ABENCOUNTRY_FORMATS.html) defined there is used. If `cty` is initial, the formatting specified in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) is used.

The following string template creates the character string shown below it, depending on the content of the the system table.

-   Statically as a key word
-   Dynamically as

-   the content of a data object `(dobj)` specified in parentheses
-   result of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) or [method chaining](ABENMETHOD_CHAINING_GLOSRY.html), a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ `expr`

-   The possible values of `dobj` or `expr` are defined as constants in the class `CL_ABAP_FORMAT`.

-   In data type `f`, the mantissa is adjusted to this exponent by moving the decimal separator and padding with zeros. If `exp` contains 0, no exponent is created. If the value of `exp` is greater than the exponent of the source field plus 16, only zeros are assigned to the mantissa. If the value of `exp` is less than the exponent of the source field, and the output length is not sufficient for the places required in front of the decimal separator, the addition is ignored. If the value in `exp` is positive and has more than three digits, only the first three places of the exponent are considered.
-   If the formatting option `STYLE` is also specified, source fields of all numeric types (`b`, `s`), `i`, `int8`, `p`, `f`, `decfloat16`, and `decfloat34` are converted to `decfloat34` before formatting. For `STYLE`, only the scientific notation `O_SCIENTIFIC` can be declared together with `EXPONENT`. The addition `EXPONENT` defines the exponent for this notation.

-   Numeric Data Types
-   If the content of `dec` is less than 0, it is handled like 0, whereby the content of data objects of data types (`b`, `s`), `i`, `int8`, or `p` is multiplied by 10 to the power of `dec` beforehand.

-   For data objects of types (`b`, `s`), `i`, and `int8`, a decimal separator and as many zeros as specified in `dec` are appended. The content of `dec` must not exceed 14, otherwise an uncatchable exception is raised. If the content of `dec` is 0, the output remains unchanged.
-   For data objects of type `p`, independently of the number of decimal places determined in the data type, as many decimal places are used as specified in `dec`. The content of `dec` must not exceed 14, otherwise an uncatchable exception is raised. If the source field has more decimal places, they are rounded to the decimal places in `dec`. If the source field has fewer decimal places, zeros are appended accordingly.
-   For data objects of types `decfloat16` and `decfloat34`, the content of `dec` determines the number of decimal places in mathematical or commercial notation and the number of places in the mantissa in scientific notation. If the source field has more decimal places, they are rounded to the decimal places in `dec`. If the source field has fewer decimal places, zeros are appended accordingly.
-   For data objects of type `f`, the content of `dec` determines the number of decimal places in the [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html). If the content of `dec` is greater than 16, it is handled like 16. If the content of `dec` is greater than the number of decimal places of the source field, zeros are appended accordingly. If the content of `dec` is less than the number of decimal places of the source field, they are rounded to the decimal places in `dec`.

-   Time stamp
-   The content of `dec` must be between 0 and 7.

-   For time stamp fields of the time stamp type `utclong` as many decimal places as specified in `dec` are used. Surplus decimal places are truncated. If `dec` has the value 0, the decimal separator is removed. If `dec` has an invalid value, a catchable exception of class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   If one of the additions `TIMEZONE` or `TIMESTAMP` is specified for suitable numbers of the type `p`, their content is interpreted as an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html). For data type `p` of length 8 without decimal places (`TIMESTAMP` from the ABAP Dictionary), as many zeros as specified in `dec` are appended. For data type `p` of length 11 with 7 decimal places (`TIMESTAMPL` from the ABAP Dictionary), as many decimal places as specified in `dec` are used. Surplus decimal places are cut off. If `dec` has the value 0, the decimal separator is removed.

-   The default settings `SIMPLE` creates the [predefined format](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) of embedded expressions.
-   `SIGN_AS_POSTFIX` creates a [commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html). The plus/minus sign is appended on the right (a minus sign for negative values and a blank for positive values). Trailing zeros in decimal places are cut off.
-   `SCALE_PRESERVING` preserves the [scaling](ABENSCALE_GLOSRY.html), where trailing zeros in the decimal places are not cut off. The same format is created as in [conversions of a source field of type `decfloat34` to the type `string`](ABENCONVERSION_TYPE_DECFLOAT.html).
-   `SCIENTIFIC` creates a [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html). No sign is inserted for positive numbers. The result always has at least a two digit exponent with a plus/minus sign. If the addition `EXPONENT` is not specified, only one integer digit whose value is not zero is represented in the mantissa, unless the source field has the value 0. Any trailing zeros after the decimal separator of the mantissa are cut off. The formatting option `DECIMALS` can be used to specify the number of decimal places and `EXPONENT` can be used to specify the exponent.
-   `SCIENTIFIC_WITH_LEADING_ZERO` creates a [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) with a leading zero. Like `SCIENTIFIC` with the following differences:

-   Only one integer digit with the value 0 is represented.
-   The formatting option `EXPONENT` cannot be specified.

-   `SCALE_PRESERVING_SCIENTIFIC` creates a [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) while preserving the [scaling](ABENSCALE_GLOSRY.html). Like `SCIENTIFIC` with the following differences:

-   The exponent always has three digits for `decfloat16` and four digits for `decfloat34`.
-   Any trailing zeros after the decimal separator of the mantissa are not cut off.
-   The formatting option `EXPONENT` cannot be specified.

-   `ENGINEERING` creates a technical format. Like `SCIENTIFIC` with the following differences:

-   The value of the exponent is always an integer multiple of 3.
-   The value range of the integer digits is between 1 and 999, unless the source field has the value 0.
-   The formatting option `EXPONENT` cannot be specified.

-   The formatting option `EXPONENT` can only be specified for the output format `SCIENTIFIC`.
-   The formatting option `DECIMALS` cannot be specified for output formats that preserve scaling. For the output formats `SIMPLE` and `SIGN_AS_POSTFIX`, `DECIMALS` defines the number of decimal places, whereby commercial rounding may take place or trailing zeros may be appended. For the scientific output formats, `DECIMALS` determines the number of decimal places in the mantissa, possibly rounded commercially.

-   The formats mainly correspond to the output formats specified when a [DDIC domain](ABENDOMAIN_GLOSRY.html) is created with one of the types `DF16_DEC`, `DF16_RAW`, `DF16_SCL` (obsolete), `DF34_DEC`, `DF34_RAW`, or `DF34_SCL` (obsolete) in ABAP Dictionary.
-   When a [decimal floating point number defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html) is formatted, the formatting option `STYLE` overrides the output format defined in the ABAP Dictionary.
-   It is best to use the formatting option `STYLE` for the formatting of all numeric output. This addition then replaces all other additions whose output format can be specified using `stl`.
-   To specify the scaling of a decimal floating point number before the use of the format `O_SCALE_PRESERVING_SCIENTIFIC`, the built-in function [`rescale`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) can be called by specifying the parameter `dec`.
-   The methods `CONVERT_CURR_TO_DECFLOAT` and `CONVERT_DECFLOAT_TO_CURR` of the system class [`CL_ABAP_DECFLOAT`](ABENCL_ABAP_DECFLOAT_DOC.html) are helpful when representing currency amounts stored as decimal floating point numbers. These methods convert currency amounts to decimal floating point numbers depending on a currency key and vice versa.
-   The format `O_SCALE_PRESERVING_SCIENTIFIC` is intended to help create output that is aligned vertically with reference to the decimal separator and exponent without the addition `DECIMALS`. To achieve this, the built-in function [`rescale`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) can be called before output by specifying the parameter `prec`.

-   For data objects of the types (`b`, `s`), `i` and `int8`, a decimal separator is inserted into the result at the place determined by `cur`.
-   In the case of data type `p`, the formatting depends on how the value is specified:

-   If specified as a data object or as a functional method, the decimal places specified in the definition of the data type are completely ignored. Regardless of the actual value and without rounding, a decimal separator is inserted between the digits in the places determined by `cur`.
-   When specifying a value of an arithmetic expression or a [general numeric function](ABENGEN_NUM_FUNCTION_GLOSRY.html), `CURRENCY` works as in `DECIMALS`.

-   For data objects of type `f`, the formatting option `CURRENCY` has the same effect as `DECIMALS`, where the number of decimal places is determined by `cur`.
-   For data objects of type `decfloat16` and `decfloat34`, the formatting option `CURRENCY` implicitly adds the addition `STYLE cl_abap_format=>o_sign_as_postfix`, which formats the output in [commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html). However, the format of the `+/-` sign can be overwritten by the formatting option `SIGN`. For the decimal places, it has the same effect as the addition `DECIMALS` (see above), whereby the number of decimal places is determined by `cur`.

-   The formatting option `CURRENCY` does not override the [predefined format](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) specifying that thousands separators are not inserted.
-   For decimal floating point numbers, the methods `CONVERT_CURR_TO_DECFLOAT` and `CONVERT_DECFLOAT_TO_CURR` of the system class [`CL_ABAP_DECFLOAT`](ABENCL_ABAP_DECFLOAT_DOC.html) are available. These methods convert currency amounts to decimal floating point numbers depending on a currency key and vice versa.

-   If the formatting option `WIDTH` is not specified and a string template with a single embedded expression consisting of a single data object (not an [expression](ABENEXPRESSION_GLOSRY.html)) is assigned to a fixed-length target field of type `c`, `n`, `d`, or `t`, the length of the target field determines the available length. Otherwise, the length of the original data object or expression, including trailing blanks, is used.
-   If the formatting option `WIDTH` is specified, the specified length is only used if it is greater than the length of the uninterrupted string of digits without leading zeros or the character string without trailing blanks. Otherwise, the length of the uninterrupted string of digits without leading zeros or the character string without trailing blanks is used.

-   The parameter `IN` can be used to transform strings of digits without leading zeros to the format of [numeric text](ABENNUMERIC_TEXT_GLOSRY.html) with leading zeros. The parameter `OUT` can be used to convert numeric text with leading zeros to strings of digits without leading zeros.

-   In the first assignment, the length of the target object `20` is used for the result of `ALPHA` and assigned to `text`. The digits *1234* are placed right-aligned in the result and it is padded on the left with `0`.
-   In the second assignment, the length `4` of the argument of the built-in function `to_upper` is used where *1234* exactly fits in.

-   *12345* in `target1`
-   The length of the result of the string template is the length of the target field which is 5. The result is the right-aligned string of digits *0000012345* where the leftmost *00000* are truncated. The result *12345* is fully assigned to `target1`.
-   *00000* in `target2`
-   Since the embedded expression is a table expression, the length of the result of the string template is the length of the original field which is 10. The result is the full content *0000012345*. When assigning this to `target2`, the rightmost *12345* is truncated.

-   [Time Stamp Type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html).
-   Numeric data type `p` with length 8 without decimal places (`TIMESTAMP` from the ABAP Dictionary) or `p` with length 11 and seven decimal places (`TIMESTAMPL` from the ABAP Dictionary). The value of the embedded expression is interpreted as an UTC [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html).

-   An initial expression of the type `utclong` is represented as a character string filled with spaces whose length is that of the result for a valid time stamp. This length depends on the formatting options specified. Invalid values raise a catchable exception from the class `CX_SY_CONVERSION_NO_DATE_TIME`.
-   A packed number that does not represent a valid UTC time stamp according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) is formatted as a time stamp, where for negative values the absolute value is respected. If the formats `USER` and `ENVIRONMENT` are used, an asterisk *\** is inserted before the date and the last position of the time is cut off.

-   In addition to `TIMESTAMP`, the formatting option `DECIMALS` can affect the number of decimal places. Other options that change the date and time format or the decimal separator cannot be specified.
-   The option `TIMEZONE` can be used to specify a time zone to convert the date and time portions of the UTC time stamp to the corresponding local values.
-   Whereas the time stamp format `ISO` is already [predefined](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) for the data type `utclong`, and works even without a formatting option, the numeric format is [predefined](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) for time stamps in packed numbers. A time stamp represented as a packed number is identified and formatted as a time stamp only by using the formatting options `TIMESTAMP` or `TIMEZONE`.
-   The time stamp format `ISO` does not include an optional time zone designator as allowed by ISO 8601.

-   [Time Stamp Type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html).
-   Numeric data type `p` with length 8 without decimal places (`TIMESTAMP` from the ABAP Dictionary) or `p` with length 11 and seven decimal places (`TIMESTAMPL` from the ABAP Dictionary). The value of the embedded expression is interpreted as an UTC [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html).

-   A character string filled with spaces, whose length is that of the result for a valid time stamp, is generated for the time stamp type `utclong`.
-   For time stamps in packed numbers, the initial value 0 is an invalid value and is formatted as such.

-   The source field does not contain a valid UTC time stamp according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html):

-   For the time stamp type `utclong`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   Time stamps in packed numbers are still formatted as a time stamp and the absolute value is respected for negative numbers. The time zone specified has no effect.

-   The value of `tz` is not contained in the the system table, or the conversion would result in a local time outside the value range for local date and time:

-   For the time stamp type `utclong`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   For time stamps in packed numbers, the time zone UTC is used implicitly.

-   The decimal places of time stamps can also be defined with the formatting option `DECIMALS`.
-   An initial time zone `tz` matches `UTC` only if the tables of the [rules for time zones](ABENTIME_ZONE_RULES.html) are filled correctly for the time zone UTC.

-   In numbers, the `COUNTRY` formatting option overrides the [predefined setting](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html) with respect to thousands separators.

FINAL(text) = |\\{ CONV decfloat34( 1234 / 10 ) WIDTH = 20 \\}|. FINAL(text) = \\n |\\{ 1 WIDTH = 5 ALIGN = RIGHT \\n \\}\\{ 2 WIDTH = 5 ALIGN = RIGHT \\n \\}\\{ 3 WIDTH = 5 ALIGN = RIGHT \\}<-|. 1 2 3<- FINAL(text) = |\\{ 'X' ALIGN = RIGHT WIDTH = 10 PAD = '\_' \\}|. \_\_\_\_\_\_\_\_\_X FINAL(text) = \\n |\\{ cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n 'Hello World!' ) CASE = LOWER \\}|. 48656c6c6f20576f726c6421 FINAL(text) = |\\{ 1 SIGN = LEFTPLUS \\}|. +1 FINAL(text) = |\\{ CONV f( 2 / 3 ) \\}, \\{ CONV f( 2 / 3 ) EXPONENT = -1 \\}|. 0.66666666666666663, 6.6666666666666663E-01 FINAL(text) = |\\{ - 2 / 3 DECIMALS = 3 \\}, \\{ \\n CONV decfloat34( - 2 / 3 ) DECIMALS = 3 \\}, \\{ \\n CONV f( - 2 / 3 ) DECIMALS = 3 \\}|. -1.000, -0.667, -0.667 FINAL(text) = |\\{ 0 ZERO = NO \\}, \\{ 0 ZERO = YES \\}|. , 0 DATA: \\n flag1 TYPE xsdboolean VALUE abap\_true, \\n flag2 TYPE xsdboolean VALUE abap\_false. \\n\\ \\nFINAL(text) = |\\{ flag1 XSD = YES \\}, \\{ flag2 XSD = YES \\}|. true, false FINAL(text) = |\\{ CONV decfloat34( '123456' ) STYLE = ENGINEERING \\}|. 123.456E+03 FINAL(text) = |\\{ 12345678 CURRENCY = 'EUR' \\}|. 123456.78 ASSERT \\n |\\{ 1000000 NUMBER = ENVIRONMENT \\}| = \\n |\\{ 1000000 NUMBER = USER \\}|. FINAL(text) = |\\{ '1234' ALPHA = IN WIDTH = 10 \\}|. 0000001234 FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\ntext = |\\{ '1234' ALPHA = IN \\}|. \\nout->write( |\\{ text \\}, \\{ strlen( text ) \\}| ). \\n\\ \\ntext = |\\{ to\_upper( '1234' ) ALPHA = IN \\}|. \\nout->write( |\\{ text \\}, \\{ strlen( text ) \\}| ). \\n\\ \\ntext = |ALPHA: \\{ '1234' ALPHA = IN \\}|. \\nout->write( |\\{ text \\}, \\{ strlen( text ) \\}| ). \\n\\ \\ntext = |ALPHA: \\{ to\_upper( '1234' ) ALPHA = IN \\}|. \\nout->write( |\\{ text \\}, \\{ strlen( text ) \\}| ). \\n\\ \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES text TYPE c LENGTH 10. \\nTYPES texts TYPE STANDARD TABLE OF text WITH EMPTY KEY. \\n\\ \\nDATA(text) = '0000012345'. \\nDATA(texts) = VALUE texts( ( text ) ). \\n\\ \\nDATA target1 TYPE c LENGTH 5. \\nDATA target2 TYPE c LENGTH 5. \\n\\ \\ntarget1 = |\\{ text ALPHA = IN \\}|. \\ntarget2 = |\\{ texts\[ 1 \] ALPHA = IN \\}|. \\n\\ \\nout->write( |\\{ target1 \\}\\\\n\\{ \\n target2 \\}| ). \\n\\ \\nout->display( ). FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(text) = |\\{ date DATE = ISO \\}|. 2016-09-09 FINAL(user\_time) = cl\_demo\_date\_time=>get\_user\_time( ). \\nASSERT \\n |\\{ user\_time TIME = ENVIRONMENT \\}| = \\n |\\{ user\_time TIME = USER \\}|. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(ts) = utclong\_current( ). \\nFINAL(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ). \\nFINAL(tsp) = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ). \\n\\ \\nout->write( \\n |Standard:\\\\n\\{ \\n ts \\}\\\\n\\{ \\n tspl TIMEZONE = 'UTC' \\}\\\\n\\{ \\n tsp TIMEZONE = 'UTC' \\} | ). \\n\\ \\nout->write( \\n |ISO:\\\\n\\{ \\n ts TIMESTAMP = ISO \\}\\\\n\\{ \\n tspl TIMESTAMP = ISO \\}\\\\n\\{ \\n tsp TIMESTAMP = ISO \\} | ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(ts) = utclong\_current( ). \\nFINAL(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ). \\nFINAL(tsp) = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ). \\n\\ \\nout->write( \\n |Predefined:\\\\n\\{ \\n ts \\}\\\\n\\{ \\n tspl \\}\\\\n\\{ \\n tsp \\} | ). \\n\\ \\nout->write( \\n |UTC:\\\\n\\{ \\n ts TIMEZONE = 'UTC' \\}\\\\n\\{ \\n tspl TIMEZONE = 'UTC' \\}\\\\n\\{ \\n tsp TIMEZONE = 'UTC' \\} | ). \\n\\ \\nout->write( \\n |CET, DE:\\\\n\\{ \\n ts TIMEZONE = 'CET' COUNTRY = 'DE ' \\}\\\\n\\{ \\n tspl TIMEZONE = 'CET' COUNTRY = 'DE ' \\}\\\\n\\{ \\n tsp TIMEZONE = 'CET' COUNTRY = 'DE ' \\} | ). \\n\\ \\nout->write( \\n |EST, US:\\\\n\\{ \\n ts TIMEZONE = 'EST' COUNTRY = 'US ' \\}\\\\n\\{ \\n tspl TIMEZONE = 'EST' COUNTRY = 'US ' \\}\\\\n\\{ \\n tsp TIMEZONE = 'EST' COUNTRY = 'US ' \\} | ). \\n\\ \\nout->display( ). FINAL(text) = |\\{ 1000000 COUNTRY = 'DE ' \\}|. 1,000,000 **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** **Keyword** **Value of `dobj` or `expr`** **Effect** `LEFT` `CL_ABAP_FORMAT=>A_LEFT` Left-aligned `RIGHT` `CL_ABAP_FORMAT=>A_RIGHT` Right-aligned `CENTER` `CL_ABAP_FORMAT=>A_CENTER` Centered `RAW` `CL_ABAP_FORMAT=>C_RAW` Unchanged `UPPER` `CL_ABAP_FORMAT=>C_UPPER` Uppercase `LOWER` `CL_ABAP_FORMAT=>C_LOWER` Lowercase `LEFT` `CL_ABAP_FORMAT=>S_LEFT` *\-* left without space, no *+* `LEFTPLUS` `CL_ABAP_FORMAT=>S_LEFTPLUS` *\-* and *+* left without space `LEFTSPACE` `CL_ABAP_FORMAT=>S_LEFTSPACE` *\-* left without space, blank left for *+* `RIGHT` `CL_ABAP_FORMAT=>S_RIGHT` *\-* right without space, no *+* `RIGHTPLUS` `CL_ABAP_FORMAT=>S_RIGHTPLUS` *\-* and *+* right without space `RIGHTSPACE` `CL_ABAP_FORMAT=>S_RIGHTSPACE` *\-* left without space, blank right for *+* `YES` `CL_ABAP_FORMAT=>Z_YES` The value zero is represented as a numeric value in accordance with the current formatting. `NO` `CL_ABAP_FORMAT=>Z_NO` The value zero is represented as an empty string. `YES` `CL_ABAP_FORMAT=>X_YES` The value of the embedded expression is formatted depending on its data type in accordance with the asXML format specified under [Mapping of Elementary ABAP Types](ABENABAP_XSLT_ASXML_ELEMENTARY.html). If the data type refers to one of the domains specified under [Mapping of Further XML Schema Data Types](ABENABAP_XSLT_ASXML_SCHEMA.html) (except `XSDQNAME`), the format specified there is used. [XML fragments](ABENABAP_XSLT_ASXML_FRAGMENT.html) cannot be mapped using the domain `XSDANY`. `NO` `CL_ABAP_FORMAT=>X_NO` Unchanged `SIMPLE` `CL_ABAP_FORMAT=>O_SIMPLE` `SIGN_AS_POSTFIX` `CL_ABAP_FORMAT=>O_SIGN_AS_POSTFIX` `SCALE_PRESERVING` `CL_ABAP_FORMAT=>O_SCALE_PRESERVING` `SCIENTIFIC` `CL_ABAP_FORMAT=>O_SCIENTIFIC` `SCIENTIFIC_WITH_LEADING_ZERO` `CL_ABAP_FORMAT=>O_SCIENTIFIC_WITH_LEADING_ZERO` `SCALE_PRESERVING_SCIENTIFIC` \\ `CL_ABAP_FORMAT=>O_SCALE_PRESERVING_SCIENTIFIC` `ENGINEERING` `CL_ABAP_FORMAT=>O_ENGINEERING` `RAW` `CL_ABAP_FORMAT=>N_RAW` The decimal separator is the period (`.`) and no thousands separators are inserted. `USER` `CL_ABAP_FORMAT=>N_USER` The decimal and thousands separators are based on the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). `ENVIRONMENT` `CL_ABAP_FORMAT=>N_ENVIRONMENT` The decimal and thousands separators are determined according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using `SET COUNTRY`. `IN` `CL_ABAP_FORMAT=>L_IN` If the character string of the embedded expression only contains an uninterrupted string of digits apart from leading and trailing blanks, the string of digits is right-aligned in a character string of a certain length (see below), which is padded on the left with the digit *0*, if necessary. Otherwise, the characters of the character string of the embedded expression are left-aligned in the character string and padded with blanks on the right, if necessary. If the length is not sufficient, the string is truncated on the right in both cases. `OUT` `CL_ABAP_FORMAT=>L_OUT` If the character string of the embedded expression only contains an uninterrupted string of digits apart from leading and trailing blanks, leading zeros are removed from the string of digits and the remaining digits are left-aligned in a character string of a certain length (see below), which is padded on the right with blanks, if necessary Otherwise, all characters of the character string of the embedded expression are left-aligned in the character string and padded with blanks on the right, if necessary. If the length is not sufficient, the string is truncated on the right in both cases. `RAW` `CL_ABAP_FORMAT=>L_RAW` No formatting `RAW` `CL_ABAP_FORMAT=>D_RAW` The content of the date field is passed without formatting. `ISO` `CL_ABAP_FORMAT=>D_ISO` The date if formatted in accordance with ISO 8601, using hyphens (`-`) as separators: *yyyy-mm-dd*. `USER` `CL_ABAP_FORMAT=>D_USER` The date is formatted in accordance with the mask defined in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). `ENVIRONMENT` `CL_ABAP_FORMAT=>D_ENVIRONMENT` The formatting of the date is determined according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using `SET COUNTRY`. `RAW` `CL_ABAP_FORMAT=>T_RAW` The content of the time field is passed without formatting. `ISO` `CL_ABAP_FORMAT=>T_ISO` The time is formatted in accordance with ISO 8601, in 24-hour format using colons (`:`) as separators: *hh:mm:ss*. `USER` `CL_ABAP_FORMAT=>T_USER` The time is formatted in accordance with the format defined in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). `ENVIRONMENT` `CL_ABAP_FORMAT=>T_ENVIRONMENT` The formatting of the time is determined according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using `SET COUNTRY`. `SPACE` `CL_ABAP_FORMAT=>TS_SPACE` The time stamp is represented according to the SQL standard ISO 9075, where there is a space between date and time, and a period (`.`) is used as a decimal separator: *yyyy-mm-dd hh:mm:ss.fffffff*. `ISO` `CL_ABAP_FORMAT=>TS_ISO` The time stamp is represented according to ISO 8601 for date formats and time specifications, where the character *T* is between date and time and a comma (`,`) is used as the decimal separator: *yyyy-mm-ddThh:mm:ss,fffffff*. `USER` `CL_ABAP_FORMAT=>TS_USER` As `SPACE`, but the date and time format, and the decimal separator are taken from the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). `ENVIRONMENT` `CL_ABAP_FORMAT=>TS_ENVIRONMENT` As `SPACE`. However, the date and time format, and the decimal separator are defined according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using `SET COUNTRY`. - `CL_ABAP_FORMAT=>TS_RAW` The time stamp is formatted as an uninterrupted sequence of numbers without separators, except for a decimal separator (`.`) before fractions of seconds. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_expressions.html