---
title: "ABENABAP_SQL_TYPED_LITERALS"
description: |
  ABENABAP_SQL_TYPED_LITERALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_TYPED_LITERALS.htm"
abapFile: "ABENABAP_SQL_TYPED_LITERALS.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENABAP", "SQL", "TYPED", "LITERALS"]
---

`` ... dtype`...` ``

[Typed literals](ABENTYPED_LITERAL_GLOSRY.html) can be created for all [built-in ABAP Dictionary types](ABENDDIC_BUILTIN_TYPES.html) with the exception of `LCHR`, `LRAW`, `GEOM_EWKB`, `PREC`, `ACCP`, `DF16_SCL`, and `DF34_SCL`. A typed literal can be used in read positions of ABAP SQL statements where [host variables](ABENABAP_SQL_HOST_VARIABLES.html) are possible and where it is always handled as an [elementary SQL expression](ABENSQL_ELEM.html) of the specified data type. It is passed without an ABAP-specific type conversion to the database and evaluated there.

`dtype` is the name of a built-in dictionary type and it is followed by the character-like representation of the value in single backquotes (\`). Only those values can be specified that are accepted by the data type of the literal.

When using the [literal operator](ABENLITERAL_OPERATOR_GLOSRY.html) for concatenating two typed literals of the same type as a single character literal, the data type `dtype` is specified only once before the first subliteral. The syntax is, for example: `` INT8`123` & `456` ``.

Typed literals can be split into the following categories:

The following table describes the typed numeric literals:

Use of a typed numeric literal in a `WHERE` condition.

The following table describes the typed character literals:

Use of a typed character literal in a `WHERE` condition.

The following table describes the typed byte literals:

Use of a typed byte field literal in a `WHERE` condition.

The following table describes the typed literals for character-like types with special semantics:

Use of a typed numeric text literal in a `WHERE` condition.

The following table describes the typed date and time literals:

60 cannot be specified in a time, either as minutes or as seconds. In particular, this means that [leap seconds](ABENLEAP_SECOND_GLOSRY.html) cannot be specified.

Use of typed literals as operands in [SQL date and time functions](ABENABAP_SQL_DATE_TIME_FUNCTIONS.html).

The following table describes the typed currency and quantity literals:

Use of a typed currency field literal in a `WHERE` condition.

-   Typed literals should be used instead of untyped literals. They offer many advantages, such as more flexibility with regard to the data type they can have, explicit type declaration, and checking type compatibility of the value specified.
-   The maximum length of the content of a typed literal is 255 and can be restricted further by the [value range](ABENVALUE_RANGE_GLOSRY.html) of the data type. The maximum line length in the ABAP Editor is 255 characters, which means that a literal with 255 characters cannot be specified within a single row of a program due to the type name and the backquotes. The maximum length of 255 characters can be achieved only by using the [literal operator](ABENLITERAL_OPERATOR.html) &.

-   For all numeric literals, the rule applies that not more than one zero is allowed on the left side of the decimal point. Thus, `` DEC`00.00` `` is not allowed and `` INT1`00` `` as [integer literal](ABENINTEGER_LITERAL_GLOSRY.html) is not allowed either. This rule is verified by the syntax check.
-   A zero with a sign + or - is not allowed for [integer literals](ABENINTEGER_LITERAL_GLOSRY.html) and [packed number literals](ABENDECFLOAT_LITERAL_GLOSRY.html). For example, `` INT4`-0` `` is not allowed. This rule is verified by the syntax check.
-   For all [decimal floating point literals](ABENDECFLOAT_LITERAL_GLOSRY.html), there are alternative notations for the data type. This is indicated in the table above by the | sign.

-   The specified characters are used to represent byte values in a hexadecimal format.
-   The letters A-F must be in uppercase.
-   If [untyped character literals](ABENABAP_SQL_UNTYPED_LITERALS.html) are used for hexadecimal values, the number of characters may be odd and the value is padded on the right with hexadecimal 0 in accordance with the [conversion rules](ABENCONVERSION_TYPE_C.html).

SELECT \* \\n FROM demo\_ddic\_types \\n WHERE int8 = int8\`32984723948723\` \\n INTO TABLE @FINAL(result). SELECT \* \\n FROM demo\_ddic\_types \\n WHERE char10 = char\`hallo\` \\n INTO TABLE @FINAL(result). SELECT \* \\n FROM demo\_ddic\_types \\n WHERE raw1 = raw\`11\` \\n INTO TABLE @FINAL(result). SELECT \* \\n FROM demo\_ddic\_types \\n WHERE numc1 = numc\`1234\` \\n INTO TABLE @FINAL(result). SELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n utcl\_add\_seconds( utclong\`2020-04-01T12:01:01,2\`,50 ) AS utcl, \\n datn\_add\_months( datn\`17890101\`,15 ) AS add\_months, \\n tims\_is\_valid( tims\`121300\` ) AS tims \\n INTO @FINAL(result). SELECT \* \\n FROM demo\_ddic\_types \\n WHERE curr10\_2 = curr\`123.43\` \\n INTO TABLE @FINAL(result). **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** `` INT1`...` ``\\
`` INT2`...` ``\\
`` INT4`...` ``\\
`` INT8`...` `` \\ [Integer literal](ABENINTEGER_LITERAL_GLOSRY.html) Uninterrupted string of digits, with an optional sign + or - as a prefix. At least one digit must be specified. The value of the number must be in the value range of the respective [dictionary type](ABENDDIC_BUILTIN_TYPES.html). An empty literal ` `` ` is not allowed. `` DEC`...` `` [Packed number literal](ABENPACKED_NUMBER_LITERAL_GLOSRY.html) String of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. The length used in the memory and the number of decimal places are determined by the number of digits specified. An empty literal ` `` ` is not allowed. `` DECFLOAT16`...` ``\\
|\\ `` D16N`...` ``\\
`` DF16_RAW`...` ``\\
|\\ `` D16R`...` `` \\
`` DECFLOAT34`...` ``\\
|\\ `` D34N`...` ``\\
`` DF34_RAW`...` ``\\
|\\ `` D34R`...` `` [Decimal floating point literal](ABENDECFLOAT_LITERAL_GLOSRY.html) Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. Length restrictions, typing conventions, and scaling rules of the respective [dictionary type](ABENDDIC_BUILTIN_TYPES.html) apply. An empty literal ` `` ` is not allowed. `` DF16_DEC`...` ``\\
|\\ `` D16D`...` ``\\
`` DF34_DEC`...` ``\\
|\\ `` D34D`...` ``\\ [Decimal floating point literal](ABENDECFLOAT_LITERAL_GLOSRY.html)\\ The rules for [packed number literals](ABENPACKED_NUMBER_LITERAL_GLOSRY.html) (see above) apply. Furthermore, `DF16_DEC` can have a maximum length of 16 digits. An empty literal ` `` ` is not allowed. `` FLTP`...` `` [Binary floating point literal](ABENBINFLOAT_LITERAL_GLOSRY.html) Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. The maximum number of valid places is 16. An empty literal ` `` ` is not allowed. `` CHAR`...` ``\\ [Text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) String of any characters. The length of a text field literal must lie between 1 and 255 characters. An empty text field literal ` CHAR`` ` is allowed and denotes the initial value of one blank. To represent a backquote in a text field literal, two consecutive backquotes must be specified. `` STRING`...` ``\\
`` SSTRING`...` `` [Text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) String of any characters. A typed text string literal can have a maximum of 255 characters. A typed text string literal can be empty and the typed text string literal ` STRING`` ` represents an empty string with length 0. To represent a backquote in a text string literal, two consecutive backquotes must be specified. `` RAW`...` ``\\ [Byte field literal](ABENBYTE_FIELD_LITERAL_GLOSRY.html) String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. At least two characters must be specified. An empty literal ` RAW`` ` is not allowed. `` RAWSTRING`...` `` [Byte string literal](ABENBYTE_STRING_LITERAL_GLOSRY.html) String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. The empty byte string literal ` RAWSTRING`` ` represents an empty byte string. `` NUMC`...` ``\\ \\ [Numeric text literal](ABENNUMERIC_TEXT_LITERAL_GLOSRY.html)\\ Character string consisting of the digits 0 to 9. The length of a numeric text literal must lie between 1 and 255 characters. Empty numeric text literals ` NUMC`` ` or blanks within numeric text literals are not allowed. `` CLNT`...` `` \\ [Client literal](ABENCLIENT_LITERAL_GLOSRY.html)\\ String of any characters with a length of exactly 3 characters. Trailing blanks are not allowed. An empty literal ` CLNT`` ` is allowed and denotes the initial value of three blanks. `` LANG`...` `` \\ [Language key literal](ABENLANG_KEY_LITERAL_GLOSRY.html)\\ A language key literal can contain any character and it consists of exactly one character. A blank space is not allowed. An empty literal ` LANG`` ` is allowed and denotes a blank. `` DATS`...` ``\\
`` DATN`...` ``\\ [Date literal](ABENDATE_LITERAL_GLOSRY.html) Character string that represents a date in the format `YYYYMMDD`. Must contain a valid date according to the rules for valid dates described for time stamp literals below. An empty string ` `` ` is not allowed. `` TIMS`...` ``\\
`` TIMN`...` `` [Time literal](ABENTIME_LITERAL_GLOSRY.html) Character string that represents a time in the format `HHMMSS`. Must contain a valid time according to the rules for valid times described for time stamp literals below. An empty literal ` `` ` is not allowed. `` UTCLONG`...` `` [Time stamp literal](ABENTIME_STAMP_LITERAL_GLOSRY.html) Character string that represents an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) in the format `YYYY-MM-DDTHH:MM:SS,SSSSSSS`, precise to 100 nanoseconds. `YYYY-MM-DD` consists of eight digits separated by hyphens. They must represent dates that are valid in accordance with the calendar rules: `YYYY` (year): 0001 to 9999, `mm` (month): 01 to 12, `DD` (day): 01 to 31. *1582-10-05* to *1582-10-14* are skipped due to the conversion from the Julian to the Gregorian calendar. The letter *T* between the date and the time must be specified exactly as it is here. `HH:MM:SS,SSSSSSS` consists of digits separated by colons and a comma. They must represent a time in a 24-hour range in the format `HHMMSS`: 00 to 23 for `HH` (hours) and 00 to 59 for `MM` (minutes) and 00 to 59 for `SS,SSSSSSS` (seconds with a maximum of seven decimal places). More than seven decimal places can be specified, however the digits after the seventh decimal place must be *0*. The comma does not have to be specified. No other characters are allowed. An empty literal ` UTCLONG`` ` is allowed and denotes the initial value. `` CURR`...` `` [Currency field literal](ABENCURRENCY_LITERAL_GLOSRY.html) Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. Not more than one zero is allowed on the left side of the decimal point. A zero with a sign + or - is not allowed. An empty literal ` CURR`` ` is not allowed. `` CUKY`...` `` [Currency key literal](ABENCURRENCY_KEY_LITERAL_GLOSRY.html) String of any characters with a maximum of 5 characters. Trailing blanks are not allowed. An empty literal ` CUKY`` ` is allowed and denotes five blanks. `` QUAN`...` `` [Quantity field literal](ABENQUANTITY_FIELD_LITERAL_GLOSRY.html) Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. Not more than one zero is allowed on the left side of the decimal point. A zero with a sign + or - is not allowed. An empty literal ` QUAN`` ` is not allowed. `` UNIT`...` `` [Unit key literal](ABENUNIT_KEY_LITERAL_GLOSRY.html) String of any characters with a maximum of 3 characters. An empty literal ` UNIT`` ` is allowed and denotes two blanks. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html abenabap\_sql\_literals.html