---
title: "ABAPWRITE_TO"
description: |
  ABAPWRITE_TO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_TO.htm"
abapFile: "ABAPWRITE_TO.html"
keywords: ["do", "if", "case", "catch", "method", "data", "types", "ABAPWRITE"]
---

[Short Reference](ABAPWRITE_TO_SHORTREF.html)

`WRITE \{source|(source_name)\} TO destination`\\ 
     ``[`[format_options]`](ABAPWRITE_TO_OPTIONS.html).``

The statement `WRITE TO` prepares the content of a source either using

as a character string and assigns the formatted content to the character-like data object `destination`.

The source field can be specified either statically or dynamically:

Only the data types grouped together under the [`simple`](ABENBUILT_IN_TYPES_GENERIC.html) generic type can be used as source fields.

The target field `destination` must be character-like and flat.

If `source` is specified statically, `sy-subrc` is not set.

After the assignment, the variables `date_short` and `date_long` contain the current local date in the order specified in the user master record. The variable `date_long` contains the separators defined there. The variable `date_short` does not contain any separators because their length is not sufficient. The content of the variable `date_mask` is formatted according to the formatting addition `DD/MM/YY`, for which their length is sufficient.

If one of the following catchable exceptions is raised in the output of a decimal floating point number, the target field or output of the statement [`WRITE`](ABAPWRITE-.html) is filled using asterisks (*\**).

`CX_SY_WRITE_INVALID_STYLE`

`CX_SY_CONVERSION_NO_NUMBER`

`CX_SY_CONVERSION_OVERFLOW`

-   [predefined formats](ABENWRITE_FORMATS.html) or
-   explicit formatting options [`format_options`](ABAPWRITE_TO_OPTIONS.html)

-   `source`
-   The static specification is made directly as `source`. `source` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) with the restriction that no [numeric literals](ABENNUMERIC_LITERAL_GLOSRY.html), [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html), or [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) can be specified directly.
-   `source_name`
-   The dynamic specification is made as the content of a parenthesized flat character-like data object `source_name`, which must contain the name of the data object in question (non-case-sensitive). If the data object specified in `source_name` does not exist, no assignment takes place and `sy-subrc` is set to 4. When evaluating `source_name`, the same applies as to a dynamically specified [`(name)`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) in the statement [`ASSIGN`](ABAPASSIGN.html). The following can be specified for `source_name`:

-   Literal or constant
-   If the data object `source_name` is specified as a text field literal or as a constant, it can be evaluated statically, and the specified data object is recognized as the used object.
-   Variable
-   If the data object `source_name` is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

-   When the statement is executed, `name` is not evaluated until runtime in both cases.

-   All [flat](ABENFLAT_GLOSRY.html) data types; flat structures are handled like a data object of type `c` and can only contain character-like components.
-   The data types `string` and `xstring`
-   [enumerated types](ABENENUM_TYPE_GLOSRY.html); the name (maximum three characters) of the [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) that defines the current [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) is used in uppercase letters.

-   If the length of the target field `destination` is shorter than the length of the format of the data object either [predefined](ABENWRITE_FORMATS.html) or specified using [`format_options`](ABAPWRITE_TO_OPTIONS.html), the output is truncated in formatting and in the subsequent assignment in accordance with a type-specific [truncation behavior](ABENWRITE_TRUNCATIONS.html).
-   If the available length is greater than the length required for formatting, the system places the result in the target field based on the predefined or user-defined alignment and fills the non-required space with blanks.

-   Although the statement `WRITE TO` does not send any data to an output medium, a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) may be executed.
-   The statement `WRITE TO` is mainly suited for formatting data for output purposes but not for further internal processing. For example, a field can no longer be handled as a numeric data object if the decimal separator is represented as a comma.
-   No numeric literals can be specified between `WRITE` and `TO` because the statement cannot be distinguished from a [`WRITE`](ABAPWRITE-.html) statement with a specified position.
-   The use of the `WRITE TO` statement can be replaced in most cases by [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html) of [string expressions](ABAPCOMPUTE_STRING.html).
-   It is possible to use string templates as source fields for the statement `WRITE TO`, but this is not usually recommended since both `WRITE TO` and string templates are used to format data and only a single method should be used. It is best to use string templates only.

-   *Cause:* Incorrect output format for decimal floating point numbers with the `STYLE` addition.
    *Runtime error:*\\ `WRITE_INVALID_STYLE`

-   *Cause:* Invalid format of the source field in the output of a decimal floating point number.
    *Runtime error:*\\ `CONVT_NO_NUMBER`

-   *Cause:* Target field is too short to represent a decimal floating point number.
    *Runtime error:*\\ `CONVT_OVERFLOW`

-   *Cause:* Negative length specified when offset/length is specified.
    *Runtime error:*\\ `WRITE_TO_LENGTH_NEGATIVE`
-   *Cause:* Negative offset specified when offset/length is specified.
    *Runtime error:*\\ `WRITE_TO_OFFSET_NEGATIVE`
-   *Cause:* Offset specified when offset/length is specified is greater than the field length.
    *Runtime error:*\\ `WRITE_TO_OFFSET_TOOLARGE`
-   *Cause:*\\ `CURRENCY` parameter in `WRITE` does not have type `c`\\
    *Runtime error:*\\ `WRITE_CURRENCY_ILLEGAL_TYPE`
-   *Cause:* Rounding parameter less than -14
    *Runtime error:*\\ `WRITE_ROUND_TOO_SMALL`
-   *Cause:*\\ `UNIT` parameter in `WRITE` does not have type `c`\\
    *Runtime error:*\\ `WRITE_UNIT_ILLEGAL_TYPE`
-   *Cause:* Incomplete rules for a time zone when using the addition `TIME ZONE`\\
    *Runtime error:*\\ `CONVERT_TSTMP_INCONSISTENT_TAB`

DATA: date\_long TYPE c LENGTH 10, \\n date\_short TYPE c LENGTH 8, \\n date\_mask TYPE c LENGTH 8. \\n\\ \\nWRITE sy-datlo TO: date\_short, \\n date\_long, \\n date\_mask DD/MM/YY. `**sy-subrc**` **Meaning** 0 The data object specified in `source_name` was found and the assignment was performed. 4 The data object specified in `source_name` was not found and the assignment was not performed. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html