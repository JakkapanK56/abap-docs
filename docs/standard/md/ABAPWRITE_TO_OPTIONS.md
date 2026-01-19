---
title: "ABAPWRITE_TO_OPTIONS"
description: |
  ABAPWRITE_TO_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_TO_OPTIONS.htm"
abapFile: "ABAPWRITE_TO_OPTIONS.html"
keywords: ["select", "insert", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPWRITE", "OPTIONS"]
---

[Short Reference](ABAPWRITE_TO_SHORTREF.html)

`... [LEFT-JUSTIFIED|CENTERED|RIGHT-JUSTIFIED]`\\ 
    `[EXPONENT exp]`\\ 
    `[NO-GROUPING]`\\ 
    `[NO-SIGN]`\\ 
    `[NO-ZERO]`\\ 
    `[CURRENCY cur]`\\ 
    `[DECIMALS dec]`\\ 
    `[ROUND scale]`\\ 
    `[UNIT unit]`\\ 
    `[ENVIRONMENT TIME FORMAT]`\\ 
    `[TIME ZONE tz]`\\ 
    `[STYLE stl]`\\ 
    `[USING \{\ \{NO EDIT MASK\}|\{EDIT MASK mask\}\ \}]`\\ 
    `[ DD/MM/YY   | MM/DD/YY`\\ 
    `| DD/MM/YYYY | MM/DD/YYYY`\\ 
    `| DDMMYY     | MMDDYY`\\ 
    `| YYMMDD ] ...`

[1. `... LEFT-JUSTIFIED|CENTERED|RIGHT-JUSTIFIED`](#ABAP_ADDITION_1@3@)

[2. `... EXPONENT exp`](#ABAP_ADDITION_2@3@)

[3. `... NO-GROUPING`](#ABAP_ADDITION_3@3@)

[4. `... NO-SIGN`](#ABAP_ADDITION_4@3@)

[5. `... NO-ZERO`](#ABAP_ADDITION_5@3@)

[6. `... CURRENCY cur`](#ABAP_ADDITION_6@3@)

[7. `... DECIMALS dec`](#ABAP_ADDITION_7@3@)

[8. `... ROUND scale`](#ABAP_ADDITION_8@3@)

[9. `... UNIT unit`](#ABAP_ADDITION_9@3@)

[10. `... ENVIRONMENT TIME FORMAT`](#ABAP_ADDITION_10@3@)

[11. `... TIME ZONE tz`](#ABAP_ADDITION_11@3@)

[12. `... STYLE stl`](#ABAP_ADDITION_12@3@)

[13. `... USING \{\ \{NO EDIT MASK\}|\{EDIT MASK mask\}\ \}`](#ABAP_ADDITION_13@3@)

[14. `... DD/MM/YY | MM/DD/YY`](#ABAP_ADDITION_14@3@)

[`| DD/MM/YYYY | MM/DD/YYYY`](#ABAP_ADDITION_14@3@)

[`| DDMMYY | MMDDYY`](#ABAP_ADDITION_15@3@)

[`| YYMMDD`](#ABAP_ADDITION_16@3@)

These formatting options override the [predefined formats](ABENWRITE_FORMATS.html) of the statements [`WRITE ... TO`](ABAPWRITE_TO.html) and [`WRITE`](ABAPWRITE-.html). Without these additions, the content of the source field is formatted only according to its data type.

The result of the formatting is adapted to the available length. In the case of `WRITE ... TO`, this is the length of the target variable and for `WRITE`, this is the [output length](ABENWRITE_OUTPUT_LENGTH.html). In some cases, the behavior of the additions used [with `WRITE`](ABAPWRITE_INT_OPTIONS.html) can differ from the general behavior in the case of `WRITE ... TO`.

If a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) is executed during formatting, the other formatting options are ignored.

The additions can be used together, with the following restrictions:

Since the definition of a [decimal floating point number in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html) always defines an output format, the same exclusions apply to the output of data objects declared with reference to this type in the ABAP Dictionary as when using the addition `STYLE`.

This addition determines whether the content of the source field that is formatted according to the other options is adjusted within the available length to the right, the center, or to the left. Trailing blanks are ignored for fields of type `c` and are handled like all other characters for fields of type `string`.

The alignment is done by filling surplus positions in the result either from the right or from the left or alternately from the left and right with blanks. If the available length is not sufficient, source fields of the types `c` and `string` are truncated on the left in right-aligned alignment, unlike the usual [truncation behavior](ABENWRITE_TRUNCATIONS.html).

Left-aligned, centered, and right-aligned assignment of three text field literals to a text field of 50 characters length.

This addition cannot be used together with additions `ENVIRONMENT TIME FORMAT` and `TIME ZONE`.

This addition determines the exponent when formatting [floating point numbers](ABENFLOATING_POINT_NUMBER_GLOSRY.html). The addition `EXPONENT` affects source fields of the type `f` or when the addition `STYLE` is specified. Otherwise it is ignored.

`exp` expects a data object of the type `i` that contains the required exponent.

The formatted result of the statement `WRITE TO` is *1,414*. The standard formatting for a length of 6 would be *1E+00*.

This addition cannot be used together with additions `ENVIRONMENT TIME FORMAT` and `TIME ZONE`.

When formatting data objects of the data types (`s`), `i`, `int8`, `p`, `decfloat16`, or `decfloat34`, this addition suppresses the thousands separators. Otherwise, the addition is ignored.

If not defined otherwise in the [format settings](ABENFORMAT_SETTING_GLOSRY.html), the result of the formats is `1,000,000` and `1000000`.

This addition cannot be used together with additions `ENVIRONMENT TIME FORMAT` and `TIME ZONE`.

When formatting data objects of the data types (`s`), `i`, `int8`, `p`, `decfloat16`, `decfloat34`, or `f`, this addition suppresses the plus/minus sign. Otherwise, the addition is ignored.

Number output with explanatory text instead of with +/-sign.

This addition cannot be used together with additions `ENVIRONMENT TIME FORMAT` and `TIME ZONE`.

If the source field has a numeric data type and contains the value 0, the available length is padded with blanks. If the source field has the data type `c`, `n`, or `string`, leading zeros are formatted using blanks. Otherwise, the addition is ignored.

Formatting of the content of a numeric text field as *123* instead of *0000000123*.

This addition cannot be used together with the additions `STYLE`, `ENVIRONMENT TIME FORMAT` and `TIME ZONE`.

This addition determines the currency-dependent [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) when formatting data objects of the numeric data types (`b`, `s`), `i`, `int8`, `p` and `f`, `decfloat16` or `decfloat34`. For all other data types, the addition is ignored.

For all allowed numeric data types, `cur` expects a character-like field that contains a [currency ID](ABENCURRENCY_ID_GLOSRY.html) from the column `WAERS` of the database table `TCURC` in uppercase letters. By default, two decimal places are used for every value entered in `cur`, unless the currency ID specified is in the column `CURRKEY` of the database table `TCURX`. In this case, the number of decimal places is determined using the `CURRDEC` column of this table.

For the individual numeric data types, the following applies:

The formatted result of *12345678* is *123456,78*. The currency ID *EUR* is contained in the database table `TCURC`, but not in `TCURX`, which is why two decimal places are used by default.

This addition cannot be used together with additions `ENVIRONMENT TIME FORMAT` and `UNIT`.

This addition determines the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) when formatting data objects of the data types (`b`, `s`), `i`, `int8`, `p`, `decfloat16`, `decfloat34`, or `f`, as well as for `utclong`. Otherwise, the addition is ignored.

`dec` expects a data object of type `i` that contains the number of decimal places required. For the individual data types, the following applies:

If the formatting option `CURRENCY` is also specified, it is first executed for the data types (`b`, `s`), `i`, `int8` and `p` before the formatting option `DECIMALS` is applied. For data types `decfloat16`, `decfloat34`, and `f`, the formatting option `CURRENCY` is ignored if it is specified together with `DECIMALS`.

If decimal places are added for a time stamp in a packed number without decimal places (`TIMESTAMPL` from the ABAP Dictionary) with `DECIMALS`, these are created only if the available length is sufficient.

The formatted result of *1234.5678* is *1234,57*.

This addition cannot be used together with additions `STYLE`, `ENVIRONMENT TIME FORMAT`, `TIME ZONE`, and `UNIT`. Furthermore, `ROUND` cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html), because these always have an assigned output format.

For source fields of data type `p`, this addition multiplies the value of the data object by 10 to the power of -`scale` before it is formatted. Otherwise, the addition is ignored.

`scale` expects a data object of type `i` that contains the value of the desired scaling.

If the value of `scale` is greater than 0 and the addition `DECIMALS` is not specified, the interim result is rounded to the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) defined in the data type. If the addition `DECIMALS` is specified, it is rounded to the number of decimal places specified in `dec` and these places are output.

If the addition `CURRENCY` is specified, it is applied to the content of the source field before multiplication. If the addition `DECIMALS` is not specified, the number of decimal places determined by `cur` is used for rounding and formatting. If the addition `DECIMALS` is specified, the value in `dec` is used.

The formatted result of *12345678* is *123456.7800*.

This addition cannot be used together with additions `DECIMALS`, `ROUND`, `STYLE`, `ENVIRONMENT TIME FORMAT`, and `TIME ZONE`. Furthermore, `UNIT` cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html), because these always have an assigned output format.

This addition cuts off the [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) that have a value of 0 and that lie outside of the accuracy of a measurement unit when formatting data objects of data type `p`. Otherwise, the addition is ignored, except for type `f`.

`unit` expects a character-like field that contains a [unit code](ABENUNIT_ID_GLOSRY.html) from the column `MSEHI` of the database table `T006` in uppercase letters. The system uses column `DECAN` of the related line in database table `T006` to determine the number of decimal places. If the content of `unit` is not found in `T006`, the addition is ignored.

If the addition `CURRENCY` is used at the same time, this addition is executed first for data type `p`, and then for the addition `UNIT`. In this case the addition is ignored for data type `f` as well.

The first unit ID of the database table `T006` is read for which no decimal places are specified in the column `DECAN` and this is used after the addition `UNIT`. This formats *1234.0000* as *1234*.

This addition cannot be used together with additions `CURRENCY`, `DECIMALS`, `EXPONENT`, `NO-GROUPING`, `NO-SIGN`, `NO-ZERO`, `ROUND`, `STYLE`, `TIME ZONE`, or `UNIT`. Furthermore, `ENVIRONMENT TIME FORMAT` cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html), because these always have an assigned output format.

When this addition is used, the formatting is based on a time specification according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using [`SET COUNTRY`](ABAPSET_COUNTRY.html). A 24-hour format (default) and four 12-hour formats can be set. The source field can have the type `t`. The addition is ignored if other types are specified.

The required output length for the 12-hour formats is 11. If data is specified explicitly and statically in the statement `WRITE` for a source field with type `t`, an output length of at least 11 must be specified. If a dynamically specified output length or the target field in `WRITE TO` is shorter than 11, the truncation is performed as described [here](ABENWRITE_TRUNCATIONS.html).

Unlike time specifications, the format of digits or dates in the statement `WRITE` is always variable. The format of times is variable only if addition `ENVIRONMENT TIME FORMAT` is specified.

The following example searches for a 12 hour format in the column `TIMEFM` of data base table `T005X` and sets the formatting settings accordingly. The time is then formatted as follows: `02:29:11 PM`. For a demonstration of all formats, see the corresponding [executable example with string templates](ABENSTRING_TEMPLATE_TIME_ABEXA.html).

This addition cannot be used together with additions `CURRENCY`, `ENVIRONMENT TIME FORMAT`, `EXPONENT`, `NO-GROUPING`, `NO-SIGN`, `NO-ZERO`, `ROUND`, `STYLE`, or `UNIT`. Furthermore, `TIME ZONE` cannot be used for [decimal floating point numbers defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html), because these always have an assigned output format.

This addition uses the [rules for time zones](ABENTIME_ZONE_RULES.html) to convert the date and time information of a [time stamp](ABENTIME_STAMP_GLOSRY.html) to the [local date](ABENLOCAL_DATE_GLOSRY.html) and the [local time](ABENLOCAL_TIME_GLOSRY.html) of the [time zone](ABENTIME_ZONE_GLOSRY.html) specified in `tz`. The formatting follows the [predefined format](ABENWRITE_FORMATS.html) for time stamps. The addition `TIME ZONE` can be specified only if the source field is of one of the following data types, otherwise a syntax or runtime error occurs:

The addition `TIME ZONE` formats source fields of these types in accordance with the [predefined format](ABENWRITE_FORMATS.html) for time stamp outputs.

`tz` expects a character-like data object containing a [time zone](ABENTIME_ZONE_GLOSRY.html) from the database table `TTZZ`. If the [rule set](ABENTIME_ZONE_RULES.html) for the specified time zone is incomplete, an uncatchable exception is raised. If `tz` is initial, no time shift is calculated. The conversion takes place as for the statements [`CONVERT UTCLONG`](ABAPCONVERT_UTCLONG.html) and [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html). The special rules for the first and last second apply to the time stamp type `utclong`.

Initial values are handled as follows:

Error handling is as follows:

Formatting of time stamps in a time stamp field and in a packed number in Tasmanian time. If nothing else is defined in the formatting settings, the output shown below is produced.

The addition cannot be used together with the additions `CURRENCY`, `DD/MM/YY`, ..., `YYMMDD`, `ROUND`, `ENVIRONMENT TIME FORMAT`, `TIME ZONE`, and `UNIT`.

This addition defines the output format for [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html). Only source fields with a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) are allowed. Numeric source fields that do not have type `decfloat34` are [converted](ABENCONVERSION_ELEMENTARY.html) to this type before they are formatted. If other types are specified dynamically, the exception `CX_SY_WRITE_INVALID_STYLE` is raised.

Only those values can be specified for the `stl` output format that exist as constants of type `OUTPUTSTYLE` in the class `CL_ABAP_FORMAT`. If other values are specified, the exception `CX_SY_WRITE_INVALID_STYLE` is also raised. The following table contains all possible output formats:

If the addition `STYLE` is used together with other additions that also affect the format of numbers, the following rules apply:

The following `WRITE` statement formats the decimal floating point number 123456 as `123,456E+03`.

[Decimal Floating Point Number, Formatting with `STYLE`](ABENWRITE_STYLE_ABEXA.html)

This addition overrides a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) assigned using a reference to the ABAP Dictionary. The addition `NO EDIT MASK` only deactivates the execution of an assigned conversion exit. The addition `EDIT MASK` calls either another conversion exit or defines an [edit mask](ABENEDIT_MASK_GLOSRY.html). `mask` expects a character-like data object.

To call any conversion exit `CNVRT`, `mask` must contain two equal signs directly followed by the name of the conversion exit: `==CNVRT`. During formatting, the content of the source field is passed to function module `CONVERSION_EXIT_CNVRT_OUTPUT`, converted there, and the result is used. If the function module is not found, a catchable exception is raised. The statement `DESCRIBE FIELD` contains an addition to fill `mask` accordingly.

If the first two characters in `mask` are not equal signs, the content is interpreted as an edit mask, in which some characters have a particular meaning. The statement `WRITE` then does not directly format the content of the source field, and the character string in `mask` instead, as follows:

The formatting is executed for the available length. If formatting options other than an edit mask are also specified, they are applied first and then the special characters in the edit mask are replaced by the interim result. The date formatting mask `DD/MM/YY` is an exception to this rule. If it is specified, the edit mask is ignored.

Formatting of a duration. The assignment executes the function module `CONVERSION_EXIT_SDURA_OUTPUT`, which converts the duration specified in seconds into minutes. In the second assignment, the edit mask is used in accordance with the rules specified above, where the underscores *\_* are replaced with characters from `time`.

These additions cannot be used together with the addition `STYLE`, not for the time stamp type `utclong`, and not for [decimal floating point numbers defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html), which always have an assigned output format.

These additions affect the formatting of data objects of the data type `d` or the date specified in [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html) if they are specified as such by the addition `TIME ZONE`. Otherwise they are ignored.

The content of a data object of type `d`, or the date specified in a time stamp, is interpreted as a valid date in the form *yyyymmdd* and formatted for the individual additions as follows:

If the available length is too short, the formatted output is truncated on the right.

The formatting is, for example, *060131*.

-   The additions `ENVIRONMENT TIME FORMAT` and `TIME ZONE` are mutually exclusive and cannot be used with the additions `CURRENCY`, `DECIMALS`, `EXPONENT`, `NO-GROUPING`, `NO-SIGN`, `NO-ZERO`, `ROUND`, `STYLE`, or `UNIT`.
-   The addition `STYLE` cannot be used together with the additions `CURRENCY`, `DD/MM/YY`, ..., `YYMMDD`, `ROUND`, `ENVIRONMENT TIME FORMAT`, `TIME ZONE`, and `UNIT`.
-   The addition `UNIT` cannot be used together with the additions `DECIMALS`, `ROUND`, `STYLE`, `ENVIRONMENT TIME FORMAT`, and `TIME ZONE`.

-   In data type `f`, the mantissa is adjusted to this exponent by moving the decimal separator and padding with zeros. If `exp` contains 0, no exponent is created. If the value of `exp` is greater than the exponent of the source field plus 16, only zeros are assigned to the mantissa. If the value of `exp` is less than the exponent of the source field, and the output length is not sufficient for the places required in front of the decimal separator, the addition is ignored. If the value in `exp` is positive and has more than three digits, only the first three places of the exponent are considered.
-   If the formatting option `STYLE` is also specified, source fields of all numeric types (`b`, `s`), `i`, `int8`, `p`, `f`, `decfloat16`, and `decfloat34` are converted to `decfloat34` before formatting. For `STYLE`, only the scientific notation `O_SCIENTIFIC` can be declared together with `EXPONENT`. The addition `EXPONENT` defines the exponent for this notation.

-   For data objects of types (`b`, `s`), `i`, and `int8`, a decimal separator is inserted into the result at the position determined by `cur` and the thousands separators are moved accordingly.
-   For data objects of type `p`, the decimal places specified by the definition of the data type are ignored completely. Independently of the actual value and without rounding, decimal separators and thousands separators are inserted between the digits in the places determined by `cur`.
-   For data objects of type `f`, addition `CURRENCY` has the same effect as addition `DECIMALS` (see below), whereby the number of decimal places is determined by `cur`.
-   For data objects of type `decfloat16` and `decfloat34`, the addition `CURRENCY` implicitly adds the addition `STYLE cl_abap_format=>o_sign_as_postfix`, which formats the output in [commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html). For the decimal places, it has the same effect as addition `DECIMALS` (see below), whereby the number of decimal places is determined by `cur`. If the data object is declared with reference to a data type defined in the ABAP Dictionary, the dictionary type must have the [output format *Sign right*](ABENDDIC_DECIMAL_FLOATING_POINT.html). Otherwise a syntax error occurs or an exception of class `CX_SY_WRITE_INVALID_STYLE` is raised.

-   The addition `CURRENCY` is useful with currencies from the tables `TCURX` or `TCURX` for formatting data objects of types (`b`, `s`), `i`, `int8`, or `p` without decimal places, whose content consists of currency amounts in the smallest unit of the currency.
-   For decimal floating point numbers, the methods `CONVERT_CURR_TO_DECFLOAT` and `CONVERT_DECFLOAT_TO_CURR` of the system class [`CL_ABAP_DECFLOAT`](ABENCL_ABAP_DECFLOAT_DOC.html) are also available. These convert currency amounts to decimal floating point numbers, depending on a currency key and vice versa.
-   The restriction regarding the output format of decimal floating point numbers defined in the ABAP Dictionary does not apply to the formatting option [`CURRENCY`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) in [string templates](ABENSTRING_TEMPLATES.html).

-   Numeric Data Types
-   If the content of `dec` is less than 0, it is handled like 0, whereby the content of data objects of data types (`b`, `s`), `i`, `int8`, or `p` is multiplied by 10 to the power of `dec` beforehand.

-   For data objects of types (`b`, `s`), `i`, and `int8`, a decimal separator and as many zeros as specified in `dec` are appended. The content of `dec` must not exceed 14, otherwise an uncatchable exception is raised. If the content of `dec` is 0, the output remains unchanged.
-   For data objects of type `p`, independently of the number of decimal places determined in the data type, as many decimal places are used as specified in `dec`. The content of `dec` must not exceed 14, otherwise an uncatchable exception is raised. If the source field has more decimal places, they are rounded to the decimal places in `dec`. If the source field has fewer decimal places, zeros are appended accordingly.
-   For data objects of types `decfloat16` and `decfloat34`, the content of `dec` determines the number of decimal places in mathematical or commercial notation and the number of places in the mantissa in scientific notation. If the source field has more decimal places, they are rounded to the decimal places in `dec`. If the source field has fewer decimal places, zeros are appended accordingly.
-   For data objects of type `f`, the content of `dec` determines the number of decimal places in the [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html). If the content of `dec` is greater than 16, it is handled like 16. If the content of `dec` is greater than the number of decimal places of the source field, zeros are appended accordingly. If the content of `dec` is less than the number of decimal places of the source field, they are rounded to the decimal places in `dec`.

-   Time stamp
-   The content of `dec` must be between 0 and 7.

-   For time stamp fields of the time stamp type `utclong` as many decimal places as specified in `dec` are used. Surplus decimal places are truncated. If `dec` has the value 0, the decimal separator is removed. If `dec` has an invalid value, a catchable exception of class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   If the addition `TIMEZONE` is specified for suitable numbers of the type `p`, its content is interpreted as a time stamp. For data type `p` of length 8 without decimal places (`TIMESTAMP` from the ABAP Dictionary), as many zeros as specified in `dec` are appended. For data type `p` of length 11 with 7 decimal places (`TIMESTAMPL` from the ABAP Dictionary), as many decimal places as specified in `dec` are used. Surplus decimal places are truncated. If `dec` has the value 0, the decimal separator is removed. If `dec` has an invalid value, an asterisk *\** is inserted before the date and the last position of the time is truncated.

-   If the data type of source field is `p` and has at least as many decimal places as specified by `unit`, and if no other places that are not equal to 0 are cut off as a result, the content of the source field is formatted with this number of decimal places.
-   For data objects of type `f`, the addition `UNIT` has the same effect as the addition `DECIMALS` (see above), where the number of decimal places is determined by `unit`.

-   [Time Stamp Type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html).
-   Numeric data type `p` with length 8 without decimal places (`TIMESTAMP` from the ABAP Dictionary) or `p` with length 11 and seven decimal places (`TIMESTAMPL` from the ABAP Dictionary). The value of the embedded expression is interpreted as an UTC [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html).

-   If the addition `TIME ZONE` is not specified for the time stamp type `utclong`, it is added implicitly with an initial time zone.
-   If the addition `TIME ZONE` is not specified for time stamps in packed numbers, these are formatted as numeric fields of the type `p`.

-   The target area is filled with blanks for the time stamp type `utclong`.
-   For time stamps in packed numbers, the initial value 0 is an invalid value and is formatted as such.

-   The source field does not contain a valid time stamp:

-   For the time stamp type `utclong`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised. Before the exception is raised, the character string *\*??.??.???? ??:??:??,??????"* is written to the target variable or list.
-   Time stamps in packed numbers are still formatted as a time stamp, whereby the absolute value is considered for negative numbers. An asterisk *\** is inserted before the date and the last digit of the time is cut off. The time zone specified has no effect.

-   The value of `tz` is not contained in the database table `TTZZ`, or the conversion would result in a local time outside the value range for local date and time:

-   For the time stamp type `utclong`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised. Before the exception is raised, the current time stamp is formatted and written to the target variable or list, whereby an asterisk *\** is inserted before the date and the last digit of the time is cut off.
-   Time stamps in packed numbers are still formatted like a time stamp. An asterisk *\** is inserted before the date and the last digit of the time is cut off. The time zone specified has no effect.

-   The addition `ENVIRONMENT TIME FORMAT` cannot be specified together with `TIME ZONE`, which means that the 12-hour format for times cannot be used for time stamps in packed numbers. In contrast, the time stamp type `utclong` follows the current [formatting settings](ABENFORMAT_SETTING_GLOSRY.html) by default.
-   The additions `DD/MM/YY`, and so on, can be specified together with `TIME ZONE` for time stamps in packed numbers and then change the format of the specified date. They cannot be specified for the time stamp type `utclong`.
-   The addition `DECIMALS` can affect the number of decimal places.
-   An initial time zone `tz` matches `UTC` only if the tables of the [rules for time zones](ABENTIME_ZONE_RULES.html) are filled correctly for the time zone UTC.

-   The addition `EXPONENT` can only be specified for the output format `O_SCIENTIFIC` for scientific notation.
-   The addition `DECIMALS` cannot be specified for output formats that preserve scaling. For the output formats `O_SIMPLE` and `O_SIGN_AS_POSTFIX`, `DECIMALS` determines the number of decimal places. In some cases, commercial rounding may take place or trailing zeros may be appended. For the scientific output formats, `DECIMALS` determines the number of decimal places in the mantissa. In some cases, commercial rounding may take place.
-   The addition `USING EDIT MASK` can only be specified if it calls a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html). The addition `USING NO EDIT MASK` can be specified as usual.

-   The formats mainly correspond to the output formats specified when a [DDIC domain](ABENDOMAIN_GLOSRY.html) is created with one of the types `DF16_DEC`, `DF16_RAW`, `DF16_SCL` (obsolete), `DF34_DEC`, `DF34_RAW`, or `DF34_SCL` (obsolete) in ABAP Dictionary.
-   When a [decimal floating point number defined in the ABAP Dictionary](ABENDDIC_DECIMAL_FLOATING_POINT.html) is formatted, the formatting option `STYLE` overrides the output format defined in the ABAP Dictionary.
-   It is best to use the formatting option `STYLE` for the formatting of all numeric output. This addition then replaces all other additions whose output format can be specified using `stl`.
-   To specify the scaling of a decimal floating point number before the use of the format `O_SCALE_PRESERVING_SCIENTIFIC`, the built-in function [`rescale`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) can be called by specifying the parameter `dec`.
-   The methods `CONVERT_CURR_TO_DECFLOAT` and `CONVERT_DECFLOAT_TO_CURR` of the system class [`CL_ABAP_DECFLOAT`](ABENCL_ABAP_DECFLOAT_DOC.html) are helpful when representing currency amounts stored as decimal floating point numbers. These methods convert currency amounts to decimal floating point numbers depending on a currency key and vice versa.
-   The format `O_SCALE_PRESERVING_SCIENTIFIC` is intended to help create output that is aligned vertically with reference to the decimal separator and exponent without the addition `DECIMALS`. To achieve this, the built-in function [`rescale`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) can be called before output by specifying the parameter `prec`.

-   If the first two characters in `mask` are *LL* or *RR*, they are not inserted into the result. They control whether the formatting is executed left-aligned or right-aligned. If the first two characters are any other characters, the formatting is left-aligned.
-   All characters *\_* are replaced from the left (if *LL*) or from the right (if *RR*) by the characters for character-like types or numbers for the types (`b`, `s`), `i`, `int8`, or `p` from the source field. For fields of type `c`, trailing blanks are ignored. Data objects of types `f` or `x` are converted to type `c` before they are formatted. Surplus characters *\_* in `mask` are replaced by blanks. Characters from the source field for which there are no *\_* characters in `mask` are not inserted in the result.
-   If the source field is of type ((`b`, `s`), `i`, `int8` or `p`, the character *V* in `mask` is inserted from the left for a negative number as *\-* and for a positive number as a blank into the result.
-   All other characters in the edit mask are passed unchanged.

-   The plus/minus sign of a negative number is not inserted in the result if no formatting character *V* is specified. The decimal separator of a packed number with [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) must be specified at the required place in the edit mask.
-   For type `p`, note that only the digits are evaluated and the place of the decimal separator is irrelevant.
-   A conversion exit must be called for the types `decfloat16` and `decfloat34`. Edit masks cannot be specified.
-   When using `EDIT MASK` in the statement [`WRITE`](ABAPWRITE-.html) for lists, a number of [special features](ABAPWRITE_INT_OPTIONS.html) are applicable.

-   `DD/MM/YY` and `MM/DD/YY`
-   Both additions have the same effect. The date is formatted with a two-digit year and separators. Separators and the order depend on according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using [`SET COUNTRY`](ABAPSET_COUNTRY.html).
-   `DD/MM/YYYY` and `MM/DD/YYYY`
-   Both additions have the same effect. The date is formatted with a four-digit year with separators. Separators and the order is according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using [`SET COUNTRY`](ABAPSET_COUNTRY.html).
-   `DDMMYY` and `MMDDYY`
-   Both additions have the same effect. The date is formatted with a two-digit year with no separators. The order is according to the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html) that can be set using [`SET COUNTRY`](ABAPSET_COUNTRY.html).
-   `YYMMDD`
-   This addition formats the date with a two-digit year without separators in the format *yymmdd*.

-   The truncation on the right differs from the usual [truncation behavior](ABENWRITE_TRUNCATIONS.html) for the date output specified by the [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html), where first the separators are removed and then any surplus characters are cut off.
-   Some [special properties](ABAPWRITE_INT_OPTIONS.html) apply when date masks are used in the statement [`WRITE`](ABAPWRITE-.html) for lists.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA formatted\_text TYPE c LENGTH 50. \\n\\ \\nWRITE 'Left' TO formatted\_text LEFT-JUSTIFIED. \\nout->write( formatted\_text ). \\nWRITE 'Center' TO formatted\_text CENTERED. \\nout->write( formatted\_text ). \\nWRITE 'Right' TO formatted\_text RIGHT-JUSTIFIED. \\nout->write( formatted\_text ). \\n\\ \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: float TYPE f, \\n formatted\_text TYPE c LENGTH 6. \\n\\ \\nfloat = sqrt( 2 ). \\n\\ \\nWRITE float TO formatted\_text EXPONENT 0. \\n\\ \\nout->write( formatted\_text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\nSET COUNTRY 'US'. \\n\\ \\nWRITE CONV i( '1000000' ) TO text. \\nout->write( text ). \\nWRITE CONV i( '1000000' ) TO text NO-GROUPING. \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: number TYPE i, \\n formatted\_text TYPE c LENGTH 10. \\n\\ \\nDO 10 TIMES. \\n number = sy-index - 5. \\n IF number >= 0. \\n WRITE number TO formatted\_text. \\n out->write\_text( formatted\_text && \` (positive)\` ). \\n ELSE. \\n WRITE number TO formatted\_text NO-SIGN. \\n out->write\_text( formatted\_text && \` (negative)\` ). \\n ENDIF. \\nENDDO. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: num TYPE n LENGTH 10 VALUE '123', \\n formatted\_text TYPE c LENGTH 10. \\n\\ \\nWRITE num TO formatted\_text. \\nout->write\_text( formatted\_text ). \\nWRITE num TO formatted\_text NO-ZERO. \\nout->write\_text( formatted\_text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: int TYPE i VALUE 12345678, \\n formatted\_text TYPE c LENGTH 10. \\n\\ \\nWRITE int TO formatted\_text NO-GROUPING CURRENCY 'EUR'. \\nout->write\_text( formatted\_text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: pack TYPE p LENGTH 8 DECIMALS 4 \\n VALUE '1234.5678', \\n formatted\_text TYPE c LENGTH 10. \\n\\ \\nWRITE pack TO formatted\_text NO-GROUPING DECIMALS 2. \\nout->write\_text( formatted\_text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: pack TYPE p LENGTH 8 DECIMALS 0 \\n VALUE '12345678', \\n formatted\_text TYPE c LENGTH 12. \\n\\ \\nWRITE pack TO formatted\_text NO-GROUPING ROUND 2 DECIMALS 4. \\nout->write\_text( formatted\_text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: pack TYPE p LENGTH 8 DECIMALS 4 \\n VALUE '1234.0000', \\n formatted\_text TYPE c LENGTH 12, \\n unit TYPE t006-msehi. \\n\\ \\nSELECT SINGLE msehi \\n FROM t006 \\n WHERE decan = 0 \\n INTO (@unit). \\n\\ \\nIF sy-subrc = 0. \\n WRITE pack TO formatted\_text NO-GROUPING UNIT unit. \\n out->write\_text( formatted\_text ). \\nENDIF. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\nSELECT SINGLE land \\n FROM t005x \\n WHERE timefm = 1 \\n INTO @FINAL(land). \\nIF sy-subrc <> 0. \\n RETURN. \\nENDIF. \\n\\ \\nSET COUNTRY land. \\nWRITE sy-timlo TO text ENVIRONMENT TIME FORMAT. \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(ts) = utclong\_current( ). \\nFINAL(tspl) = cl\_abap\_tstmp=>utclong2tstmp\_short( ts ). \\n\\ \\nDATA: \\n formatted\_text1 TYPE c LENGTH 50, \\n formatted\_text2 TYPE c LENGTH 50. \\n\\ \\nSET COUNTRY 'US'. \\n\\ \\nWRITE ts TO formatted\_text1 TIME ZONE 'AUSTAS' DECIMALS 3. \\nWRITE tspl TO formatted\_text2 TIME ZONE 'AUSTAS' DECIMALS 3. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( formatted\_text1 \\n )->display( formatted\_text2 ). 04/05/2019 23:57:58.529 \\n\\ \\n04/05/2019 23:57:58.000 FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\nWRITE CONV decfloat34( '123456' ) TO text \\n STYLE cl\_abap\_format=>o\_engineering. \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: dura TYPE i, \\n time TYPE t VALUE '080000', \\n formatted\_text TYPE c LENGTH 30. \\n\\ \\ndura = sy-uzeit - time. \\ntime = dura. \\n\\ \\nWRITE dura TO formatted\_text USING EDIT MASK '==SDURA'. \\nout->write\_text( formatted\_text ). \\nWRITE time TO formatted\_text USING EDIT MASK \\n 'RRThe duration is \_\_:\_\_:\_\_'. \\nout->write\_text( formatted\_text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA formatted\_text TYPE c LENGTH 50. \\n\\ \\nWRITE sy-datlo TO formatted\_text YYMMDD. \\nout->write\_text( formatted\_text ). \\n\\ \\nout->display( ). **Constant `CL_ABAP_FORMAT=>...`** **Output Format** `O_SIMPLE` [Predefined Output Format](ABENWRITE_FORMATS.html) `O_SIGN_AS_POSTFIX` \\ [Commercial notation](ABENCOMMERCIAL_NOTATION_GLOSRY.html). The plus/minus sign is appended to the right (minus sign for negative values, blank for positive values). Trailing zeros in decimal places are cut off. If not enough space is available, the system does not switch to the scientific notation as in the `O_SIMPLE` format, and an exception occurs instead. `O_SCALE_PRESERVING` Predefined output format that preserves the [scaling](ABENSCALE_GLOSRY.html), in which trailing zeros in decimal places are not cut off. The same format is created as in the [conversion of a source field of type `decfloat34` to type `string`](ABENCONVERSION_TYPE_DECFLOAT.html), but the [predefined decimal separator](ABENWRITE_FORMATS.html) of the statement `WRITE` is used. If enough space is available, thousands separators are also inserted in the mathematical notation. If not enough space is available, an exception is raised. The maximum required length is 24 for `decfloat16` and 46 for `decfloat34`. `O_SCIENTIFIC` \\ [Scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html). No plus/minus sign is used for a positive number. The output always has at least a two digit exponent with a plus/minus sign. If the `EXPONENT` addition is not specified, only one digit whose value is not zero is output in the mantissa before the decimal separator, unless the source field has the value 0. Any trailing zeros in the decimal places of the mantissa are cut off. Using the addition `DECIMALS`, the number of decimal places of the exponent can be specified with `EXPONENT`. If neither of the additions `DECIMALS` and `EXPONENT` are used, the maximum length required is 23 for `decfloat16` and 42 for `decfloat34`. If not enough space is available, commercial rounding is used. If not enough space is available for the plus/minus sign, the minimum number of digits before the decimal separator of the mantissa and the required exponent, an exception of the `CX_SY_CONVERSION_OVERFLOW` class is raised. `O_SCIENTIFIC_WITH_LEADING_ZERO` \\ [Scientific with leading zero](ABENSCIENTIFIC_NOTATION_GLOSRY.html) with leading zero As `O_SCIENTIFIC` with the following differences: Only one digit with the value 0 is output before the decimal separator. The addition `EXPONENT` cannot be used. If the addition `DECIMALS` is not used, the maximum length needed is 24 for `decfloat16` and 43 for `decfloat34`. `O_SCALE_PRESERVING_SCIENTIFIC` \\ [Scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) preserving [scaling](ABENSCALE_GLOSRY.html). As `O_SCIENTIFIC` with the following differences: The exponent always has three digits for `decfloat16` and four digits for `decfloat34`. Trailing zeros after the decimal separator of the mantissa are not cut off. The addition `EXPONENT` cannot be specified. If not enough space is available, rounding does not take place. Instead, an exception of the `CX_SY_CONVERSION_OVERFLOW` class is raised. `O_ENGINEERING` Engineering format - as `O_SCIENTIFIC` with the following differences: The value of the exponent is always an integer multiple of 3. The value range of the digits before the decimal separator is between 1 and 999, unless the source field has the value 0. The `EXPONENT` addition cannot be specified. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapwrite\_to.html