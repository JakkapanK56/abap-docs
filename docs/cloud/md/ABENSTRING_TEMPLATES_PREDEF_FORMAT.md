---
title: "ABENSTRING_TEMPLATES_PREDEF_FORMAT"
description: |
  ABENSTRING_TEMPLATES_PREDEF_FORMAT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATES_PREDEF_FORMAT.htm"
abapFile: "ABENSTRING_TEMPLATES_PREDEF_FORMAT.html"
keywords: ["insert", "if", "try", "data", "types", "ABENSTRING", "TEMPLATES", "PREDEF", "FORMAT"]
---

The following predefined formatting rules apply to embedded expressions in string templates. These rules can be overridden by explicit formatting options [`format_options`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html).

The predefined text length is the minimum length required to represent the entire result of the embedded expression.

The predefined text length can be overridden using the formatting option [`WIDTH`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html).

The length of the result of the following string template is 5. It consists of 4 digits and a decimal separator.

The predefined alignment for all data types is left-aligned.

The predefined alignment can be overridden using the formatting option [`ALIGN`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html).

The following string template creates the character string shown below it.

For character-like data types with fixed lengths (`c` and `n`) and the date/time types (`d`, `t`), the content is passed ignoring trailing blanks. The content of text strings with the type `string` is passed completely.

The following string template creates the character string shown below, depending on the date and time. The format is independent of the [formatting settings](ABENCOUNTRY.html).

Values of the byte-like data types `x` and `xstring` are formatted in hexadecimal format, where one byte is represented by two characters.

The following string template creates the character string shown below it.

The following rules apply to the representation of numeric values:

The following applies to the individual numeric data types:

The following string template creates the string below, with a platform-dependent result for the data type `f`. If the [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html) is not specified, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of the embedded expression is `i`.

A valid [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard in a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html) with the [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ `utclong` is formatted as *yyyy-mm-dd hh:mm:ss.fffffff* in accordance with the SQL standard ISO 9075. A blank is placed between the date and time and the period (`.`) is used as the default decimal separator. An initial time stamp field is represented by a string of 27 blanks. A time stamp field whose value is greater than or equal to the last second or is between *9999-12-31 23:59:59.0000000* and *"9999-12-31 23:59:59.9999999* is represented as *9999-12-31 23:59:59.9999999*.

This setting can be overwritten using formatting options such as [`TIMESTAMP`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html), [`COUNTRY`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html), or [`DECIMALS`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html).

The following string template creates the character string shown below it.

-   For negative values, the minus sign is placed on the left of the number, without a blank. No sign is placed in front of positive numbers by default.
-   The period (`.`) is always used as the decimal separator.
-   **No** thousands separators are inserted.

-   Values of data type (`b`, `s`), `i`, `int8`, and `p` are formatted in [mathematical notation](ABENMATHEMATICAL_NOTATION_GLOSRY.html) and all decimal places are considered.
-   Values with the data types `decfloat16` and `decfloat34` are formatted by default in [mathematical notation](ABENMATHEMATICAL_NOTATION_GLOSRY.html), that is, without an exponent. The formatting option [`EXPONENT`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be used to represent the exponent. Trailing zeros in decimal places are not displayed by default. The formatting option [`DECIMALS`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be used to determine the required number of decimal places.
-   Values with the data type `f` are formatted by default in [mathematical notation](ABENMATHEMATICAL_NOTATION_GLOSRY.html), without an exponent. The formatting option [`EXPONENT`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be used to represent the exponent. Trailing zeros in decimal places are not displayed by default. The formatting option [`DECIMALS`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be used to determine the required number of decimal places.

FINAL(text) = |\\{ CONV decfloat34( 1234 / 10 ) \\}|. FINAL(text) = |\\{ 1 WIDTH = 5 \\}\\{ 2 WIDTH = 5 \\}\\{ 3 WIDTH = 5 \\}<-|. 1 2 3 <- FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\nFINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(text) = |\\{ date \\} \\{ time \\}|. 20160909 081545 FINAL(text) = \\n |\\{ cl\_abap\_conv\_codepage=>create\_out( )->convert( 'Hello World!' ) \\}|. 48656C6C6F20576F726C6421 FINAL(text) = |\\{ - 2 / 3 \\}, \\{ \\n CONV decfloat34( - 2 / 3 ) \\}, \\{ \\n CONV f( - 2 / 3 ) \\}|. -1, -0.6666666666666666666666666666666667, -0.66666666666666663 FINAL(text) = |\\{ utclong\_add( val = VALUE utclong( ) \\n days = CONV #( CONV d( '20190402' ) ) \\n hours = 10 \\n minutes = 30 \\n seconds = CONV #( '12.3456789' ) ) \\}|. 2019-04-02 10:30:12.3456789 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_expressions.html