---
title: "ABENWRITE_OUTPUT_LENGTH"
description: |
  ABENWRITE_OUTPUT_LENGTH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWRITE_OUTPUT_LENGTH.htm"
abapFile: "ABENWRITE_OUTPUT_LENGTH.html"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "ABENWRITE", "OUTPUT", "LENGTH"]
---

When data is written using the statement `WRITE`, the output is stored in the [list buffer](ABENLIST_BUFFER_GLOSRY.html) and accessed from there for display when the list is called.

Each time a data object is output by a `WRITE`, an output length is defined, either implicitly in accordance with the tables below, or [explicitly](ABAPWRITE-.html) if `len` is specified after the addition `AT`. The output length defines the following:

If the output length is not specified explicitly, it is set for built-in ABAP types as listed in the following tables:

The output length of text field literals is set in the same way as that of data objects of the data type `string`.

For the data types `SSTRING` and `STRING`, it is not possible specify an output length in the ABAP Dictionary and the lengths given in the table above always apply.

For the data types `RAWSTRING` and `GEOM_EWKB`, it is not possible specify an output length in the ABAP Dictionary and the lengths given in the table above always apply.

The output length of an [enumerated type](ABENENUM_TYPE_GLOSRY.html) is 30.

In the list output, an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) is converted to the name of the [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html), which can have a maximum of 30 characters.

If the output length is shorter than the length of the data format specified for the data object or defined using [`int_format_options`](ABAPWRITE_INT_OPTIONS.html), the output is truncated in accordance with the [truncation behavior](ABENWRITE_TRUNCATIONS.html) described in [`WRITE ... TO`](ABAPWRITE_TO.html).

If the output length is greater than the length of a predefined or user-defined format, this output length is filled in the list buffer and output is arranged there according to the predefined or user-defined alignment. Space that is not required is filled with blanks.

When displaying or spooling a list, the content stored in the list buffer is passed to the list. Each character generally occupies one position in the list buffer. However, a character can occupy more than one column in the list (this is particularly the case with East Asian characters). However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is then truncated during the transfer from the list buffer to the list, left-aligned outputs are truncated from the right, right-aligned outputs are truncated from the left. Centered outputs are truncated by the alternative removal of the first empty space from both sides, starting with the side with the most empty spaces, then other characters are removed from the right hand side. If characters are removed when passed from the list buffer to the list, this is indicated on the left by the character `<` and on the right by the character `>`. On a displayed list, the entire list content can be displayed by choosing *System -> List -> Unicode Display*.

The methods of the system class `CL_ABAP_LIST_UTILITIES` can be used to calculate output lengths in the list buffer and in list display. The return values of these methods can be used to program a correct column alignment for ABAP lists, even if they contain characters that require more than one column.

-   The number of positions (or memory spaces) available for characters in the list buffer,
-   The number of columns (or cells) available in the actual list.

-   With all data objects, except those of type `string`, and with text field literals, it is possible that fewer characters are displayed in the list than are stored in the list buffer when predefined output lengths are used. With data objects of data type `string` and text field literals it is assumed that all characters should be displayed. For this reason, the implicit output length is calculated using the characters contained in the data object so that it corresponds to the number of columns needed in the list. Any trailing blanks in the list buffer are cut off during the writing of the actual list.
-   For data objects whose data types are defined in reference to the ABAP Dictionary, a different output length can be specified in the corresponding [domains](ABENDDIC_DOMAINS.html) or using the [built-in type](ABENDDIC_BUILTIN_TYPES.html). The output length specified here is used instead of the implicit output length from the table above.

-   The predefined output length specified in the table above for the type `s` is not sufficient to display the sign for a 5-digit number. If the types `i` and `int8` are used, the length is sufficient for all possible numbers without decimal separators.
-   If, in the case of type `p`, the number of decimal places is greater than the number of digits calculated from 2 x the length of `dobj` - 1, the predefined length is not enough. This is because the decimal separator is outside the string of digits and must be padded with zeros.

-   The predefined output lengths given in the table above for the types `d` and `t` are not sufficient to display the corresponding [separator](ABENWRITE_FORMATS.html).
-   The output length for the data type `utclong` is specified such that the date and time data [country-specific date](ABENDATE_FORMATS.html) and [time formats](ABENTIME_FORMATS.html) can be output.

**Data Type** **Output Length** **Data Type** **Output Length** **Data Type** **Output Length** **Data Type** **Output Length** `b` 3 `s` 5 `i` 11 `int8` 20 `p` 2 x length of `dobj` (+ 1, if there is a decimal separator) `decfloat16` 24 `decfloat34` 46 `f` 24 `c` Length of `dobj`, maximum 255 `string` Number of columns required in the list. If this is greater than the number of characters in `dobj`, the surplus places are padded with blanks when written to the list buffer. The filling takes place to the right of left-aligned outputs, to the left of right-aligned outputs and alternatively to the right and to the left of centered outputs. `n` Length of `dobj`, maximum 255 `x` 2 x length of `dobj`, maximum 255 `xstring` 2 x number of bytes contained `d` 8 `t` 6 `utclong` 30 abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapwrite-.html