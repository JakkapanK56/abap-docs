---
title: "ABENWRITE_FORMATS"
description: |
  ABENWRITE_FORMATS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWRITE_FORMATS.htm"
abapFile: "ABENWRITE_FORMATS.html"
keywords: ["insert", "if", "case", "try", "data", "types", "ABENWRITE", "FORMATS"]
---

The predefined output format of the statements [`WRITE ... TO`](ABAPWRITE_TO.html) and [`WRITE`](ABAPWRITE-.html) depends on the data type and user-specific default settings. It is partly dependent on the length available. In the case of `WRITE ... TO`, this is the length of the target variable; in the case of `WRITE`, this is the [output length](ABENWRITE_OUTPUT_LENGTH.html). If the length is not sufficient, the variables are truncated as specified in the predefined [truncation behavior](ABENWRITE_TRUNCATIONS.html).

The following table shows the predefined alignment for the built-in ABAP types.

The text field `text` is padded with blanks on the left by `WRITE`.

For, information about the number format with respect to decimal and thousands separators, see.

If nothing else is defined in the [formatting settings](ABENFORMAT_SETTING_GLOSRY.html), the example produces the output shown below. It should be noted that the place on the far right is reserved for the sign for type `i`.

Data objects of character-like data types are passed without formatting. In the case of character-like data types with a fixed length (`c`, `n`), trailing blanks are cut off. The content of text strings with the type `string` is passed completely.

After the assignment, the variable `text` contains the left-aligned character string `Hello World!`.

Byte-like data objects are formatted in hexadecimal format, where one byte is represented by two characters.

After the assignment, the variable `text` contains the left-aligned character string `48656C6C6F20576F726C`.

The content of a date field or time field of type `d` or `t` or the content of a time stamp field of type `utclong` is formatted in accordance with the rules for date and time formats listed below. Here, the content is not checked for the character-like types `d` and `t`.

If nothing else is defined in the [formatting settings](ABENFORMAT_SETTING_GLOSRY.html), the example produces the output shown below.

Apart from one exception, numbers, date formats, and time formats are determined by the current [formatting setting](ABENCOUNTRY.html) of the [language environment](ABENLANGUAGE_ENVIRONMENT_GLOSRY.html), which can be set using [`SET COUNTRY`](ABAPSET_COUNTRY.html).

The predefined number format for the output of numeric fields, that is, decimal and thousands separators, depends on the current [formatting setting](ABENFORMAT_SETTING_GLOSRY.html). The possible formats correspond to the [country-specific number formats](ABENCOUNTRY_FORMATS.html). Thousands separators are inserted only if the length is sufficient.

If nothing else is defined in the [formatting settings](ABENFORMAT_SETTING_GLOSRY.html), the example produces the output shown below.

1,000,000\\ 
\\ 
1,000,000

The predefined date format for the output of date fields of type `d` depends on the current [formatting setting](ABENFORMAT_SETTING_GLOSRY.html). The possible formats correspond to the [country-specific date formats](ABENCOUNTRY_FORMATS.html). The respective separators are inserted only if the length is sufficient. A date field is formatted regardless of its content.

If nothing else is defined in the [formatting settings](ABENFORMAT_SETTING_GLOSRY.html), the example produces the format shown below.

Time fields of type `t` are by default always displayed in 24-hour format with colons as separators. Separators are inserted only if the length is sufficient. To use a 12-hour format defined in the current formatting settings, the addition [`ENVIRONMENT TIME FORMAT`](ABAPWRITE_TO_OPTIONS.html) must be used. A time field is formatted regardless of its content.

The example produces the format shown below.

The output of [time stamp fields with the time stamp type](ABENUTCLONG.html)\\ `utclong` and [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html) where the addition [`TIME ZONE`](ABAPWRITE_INT_OPTIONS.html) is specified is constructed from a date and time output in their current formats, separated by a blank.

If nothing else is defined in the [formatting settings](ABENFORMAT_SETTING_GLOSRY.html), the example creates the format shown below.

-   In the numeric data types (`b`, `s`), `i`, `int8`, and `p`, the last place on the right is reserved for the sign (this also applies to `b`, even though these numbers are always positive). Here, negative values are given a minus *\-* in the result and positive values a blank. The thousands separators defined in the user master record are inserted if the available length is sufficient. If data type `p` is used, decimal places are respected regardless of the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) and a decimal separator is inserted if necessary (see below).
-   If the available length is sufficient, decimal floating point numbers with the data types `decfloat16` and `decfloat34` are displayed in [mathematical notation](ABENMATHEMATICAL_NOTATION_GLOSRY.html) and with the thousands separators defined in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). If the available length is not sufficient for the decimal places of the number, it is rounded commercially to the number of positions available. If the available length is not sufficient for the places in front of the decimal separator, the value is formatted in [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) without thousands separators. Negative numbers are prefixed with a minus sign in both cases. An exponent is always displayed with a plus/minus sign, but without leading zeros. Trailing zeros in the decimal places are not shown.
-   A binary floating point number with the type `f` is formatted in [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) with a preceding plus/minus sign (empty if the number is positive), a place before the decimal separator, a maximum of 16 [decimal places](ABENDECIMAL_PLACE_GLOSRY.html), the character *E*, and a three-figure exponent, including a plus/minus sign.

-   If there is not enough space available to display a number using these rules, an exception is raised for decimal floating point numbers only. Other numeric types are truncated and flagged with *\**.
-   For the data types `b` and `s`, it should be noted that the [predefined output lengths](ABENWRITE_OUTPUT_LENGTH.html) for lists ignore the place that is reserved for the plus/minus sign, which can lead to unexpected results.

-   The date format is taken from the current [formatting setting](ABENFORMAT_SETTING_GLOSRY.html) for time stamp fields with the type `utclong` and for UTC time stamps in packed numbers.
-   The time format is determined as follows:

-   The time format is taken from the current [formatting settings](ABENFORMAT_SETTING_GLOSRY.html) for time stamp fields with the type `utclong`. In the case of initial time stamp fields, the target area is padded with blanks. A time stamp field whose value is greater than or equal to the last second or between *9999-12-31 23:59:59.0000000* and *9999-12-31 23:59:59.9999999* is represented as *9999-12-31 23:59:59.9999999*.
-   In the case of UTC time stamps in packed numbers, the time format is always the 24 hour format with colons as separators. The 12 hour [time format](ABENCOUNTRY_FORMATS.html) is not possible. In front of second fractions, the decimal separator is always a comma (`,`). An initial packed number is considered invalid by the addition `TIME ZONE` and its output is *\*00.00.0000 00:00:00.000000*.

-   The addition `TIME ZONE` must be specified for time stamp fields with the type `TIME ZONE`.
-   Time stamps in packed numbers for which the addition `TIME ZONE` is not specified are handled as data type `p`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 40. \\nDATA num TYPE i VALUE -1234. \\nWRITE num TO text. \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\nSET COUNTRY 'US'. \\n\\ \\nWRITE CONV i( '123456' ) TO text. \\nout->write( text ). \\nWRITE CONV decfloat34( 123456 ) TO text. \\nout->write( text ). \\nWRITE CONV f( 123456 ) TO text. \\nout->write( text ). \\n\\ \\nout->display( ). \\ 123,456 \\n\\ \\n\\ 123,456 \\n\\ \\n\\ 1.2345600000000E+05 FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\nWRITE 'Hello World!' TO text. \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 20. \\n\\ \\nWRITE cl\_abap\_conv\_codepage=>create\_out( )->convert( 'Hello World!' ) \\n TO text. \\n\\ \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 10. \\n\\ \\nFINAL(d\_placeholder) = 'XXXXXXXX'. \\nFINAL(t\_placeholder) = 'XXXXXX'. \\n\\ \\nSET COUNTRY 'US'. \\n\\ \\nWRITE CONV d( d\_placeholder ) TO text. \\nout->write( text ). \\nWRITE CONV t( t\_placeholder ) TO text. \\nout->write( text ). \\n\\ \\nout->display( ). XX/XX/XXXX \\n\\ \\nXX:XX:XX FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 10. \\n\\ \\nSET COUNTRY 'US'. \\nWRITE CONV i( '1000000' ) TO text. \\nout->write( text ). \\nSET COUNTRY 'DE'. \\nWRITE CONV i( '1000000' ) TO text. \\nout->write( text ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 10. \\n\\ \\nSET COUNTRY 'US'. \\nWRITE sy-datlo TO text. \\nout->write( text ). \\nSET COUNTRY 'DE'. \\nWRITE sy-datlo TO text. \\nout->write( text ). \\n\\ \\nout->display( ). 04/04/2019 \\n\\ \\n04.04.2019 FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: text1 TYPE c LENGTH 8, \\n text2 TYPE c LENGTH 6. \\n\\ \\nWRITE sy-timlo TO text1. \\nout->write( text1 ). \\nWRITE sy-timlo TO text2. \\nout->write( text2 ). \\n\\ \\nout->display( ). 13:07:35 \\n\\ \\n130.735 FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 30. \\n\\ \\nFINAL(ts) = utclong\_current( ). \\nFINAL(tspl) = cl\_abap\_tstmp=>utclong2tstmp( ts ). \\n\\ \\nSET COUNTRY 'DE'. \\nWRITE ts TO text TIME ZONE 'UTC'. \\nout->write( text ). \\nWRITE tspl TO text TIME ZONE 'UTC'. \\nout->write( text ). \\n\\ \\nSET COUNTRY 'US'. \\nWRITE ts TO text TIME ZONE 'UTC'. \\nout->write( text ). \\nWRITE tspl TO text TIME ZONE 'UTC'. \\nout->write( text ). \\n\\ \\nout->display( ). 04.04.2019 12:42:48.2006610 \\n\\ \\n04.04.2019 12:42:48.2006610 \\n\\ \\n04/04/2019 12:42:48.2006610 \\n\\ \\n04/04/2019 12:42:48.2006610 **Data Type** **Alignment** [Numeric data types](ABENBUILTIN_TYPES_NUMERIC.html) Right-aligned [Character-like data types](ABENBUILTIN_TYPES_CHARACTER.html) Left-aligned [Byte-like data types](ABENBUILTIN_TYPES_BYTE.html) Left-aligned [Date types/time types](ABENBUILTIN_TYPES_DATE_TIME.html) Left-aligned abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapwrite\_to.html