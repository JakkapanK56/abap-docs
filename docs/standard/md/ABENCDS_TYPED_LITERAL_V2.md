---
title: "ABENCDS_TYPED_LITERAL_V2"
description: |
  ABENCDS_TYPED_LITERAL_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TYPED_LITERAL_V2.htm"
abapFile: "ABENCDS_TYPED_LITERAL_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "TYPED", "LITERAL"]
---

``... [`dtype`](ABENCDS_TYPING.html)'...'``

[Typed literal](ABENTYPED_LITERAL_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). Typed literals can be created for all [built-in ABAP Dictionary types](ABENDDIC_BUILTIN_TYPES.html) with the exception of `LCHR`, `LRAW`, `GEOM_EWKB`, `PREC`, `ACCP`, `DF16_SCL`, `DF34_SCL`, and `VARC`. A typed literal can be used in all operand positions where this is documented.

[`dtype`](ABENCDS_TYPING.html) is the name of a [built-in dictionary type](ABENCDS_TYPING.html) with the type namespace `abap.` and it is followed by the character-like representation of the value in single quotes ('). Only those values can be specified that are accepted by the data type of the literal. Length and decimal places are derived from the literal value, they must not be explicitly specified.

Typed literals should be used instead of untyped literals. They offer many advantages, such as more flexibility with regard to the data type they can have, explicit type declaration, and checking type compatibility of the value specified.

Typed literals can be divided into the following categories:

The following table describes the typed numeric literals:

Use of a typed numeric literal in different operand positions in a CDS view entity.

The following table describes the typed character literals:

Use of typed character literals in a CDS view entity.

The class `CL_DEMO_CDS_CHAR_TYPED_LIT` accesses the view and demonstrates the following:

The following table describes the typed byte literals:

Use of a typed byte field literal in a CDS view entity.

The following table describes the typed literals for character-like types with special semantics:

Use of a typed numeric text literal in a `WHERE` condition.

The following table describes the typed date and time literals:

60 cannot be specified in a time, either as minutes or as seconds. In particular, this means that [leap seconds](ABENLEAP_SECOND_GLOSRY.html) cannot be specified.

Use of typed literals as operands in a CDS view entity.

The following table describes the typed currency and quantity literals:

If a currency or quantity field is specified in the `SELECT` list using a CDS typed literal, a reference to a currency key or unit of reference key is mandatory. This is specified with the following annotations:

CDS view entity with currency and quantity literals.

-   A zero with a sign + is not allowed for [integer literals](ABENINTEGER_LITERAL_GLOSRY.html) and [packed number literals](ABENDECFLOAT_LITERAL_GLOSRY.html). For example, `abap.int4'+0'` is not allowed. This rule is verified by the syntax check. A zero with a sign - is allowed though.
-   For all [decimal floating point literals](ABENDECFLOAT_LITERAL_GLOSRY.html), there are alternative notations for the data type. This is indicated in the table above by the | sign.
-   A literal prefixed with a sign is **never** interpreted as an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).

-   Trailing blanks are included in the type length of text field and text string literals.
-   Trailing blanks are removed from typed literals of type `CHAR` and `SSTRING`, but not from typed literals of type `STRING`.

-   The specified characters are used to represent byte values in a hexadecimal format.
-   The letters A-F must be in uppercase.

-   Currency key: `Semantics.amount.currencyCode`
-   Unit key: `Semantics.quantity.unitOfMeasure`

@EndUserText.label: 'CDS view entity, numeric typed literals'\\n\\ndefine view entity DEMO\_CDS\_NUMERIC\_TYPED\_LIT\\n as select from demo\_ddic\_types\\n \\n association of many to many demo\_ddic\_types as \_assoc\\n on \_assoc.d34n = abap.decfloat34'1.02'\\n\\{\\n key id,\\n abap.int1'1' as int1,\\n abap.dec'.15' as dec\_literal,\\n abap.decfloat34'123.456E789' \* 100 as ArithmField,\\n \_assoc\\n\\}\\nwhere\\n d16n = abap.d16n'123.45'\\n @EndUserText.label: 'CDS view entity, typed char literals'\\n\\ndefine view entity DEMO\_CDS\_CHAR\_TYPED\_LIT\\n as select from demo\_ddic\_types\\n\\{\\n key id,\\n abap.char'aaa ' as char\_trailing\_blanks,\\n abap.sstring'aaa ' as sstring\_trailing\_blanks,\\n abap.string'aaa ' as string\_trailing\_blanks,\\n 'aaa' as untyped\_literal\\n\\}\\n @EndUserText.label: 'CDS view entity, typed byte literals'\\n\\ndefine view entity DEMO\_CDS\_TYPED\_BYTE\_LIT\\n as select from demo\_ddic\_types\\n\\{\\n key id\\n\\}\\nwhere\\n raw1 = abap.raw'AA'\\n @EndUserText.label: 'CDS view entity, numeric typed literals'\\n\\ndefine view entity DEMO\_CDS\_NUMERIC\_TEXT\_TYP\_LIT\\n as select from demo\_ddic\_types\\n\\{\\n key id\\n\\}\\nwhere\\n numc1 = abap.numc'1'\\n @EndUserText.label: 'CDS view entity, typed literals'\\n\\ndefine view entity DEMO\_CDS\_DATE\_AND\_TIME\_TYP\_LIT\\n as select from demo\_ddic\_types\\n \\n association of many to many demo\_ddic\_types as \_assoc\\n on \_assoc.datn = abap.datn'20220203'\\n\\{\\n key id,\\n utcl\_add\_seconds(abap.utcl'2020-01-02 23:59:59,1234567',\\n 200) as add\_seconds,\\n\\n datn\_add\_months(abap.datn'20200104', 13) as add\_months,\\n\\n case when datn < abap.datn'20200101'\\n then abap.char'<'\\n else abap.char'>'\\n end as caseExpressionField,\\n \_assoc\\n\\}\\nwhere\\n utcl <> abap.utcl'2018-02-21 23:59:59.1234567'\\n @EndUserText.label: 'CDS view entity, typed literals'\\n\\ndefine view entity DEMO\_CDS\_CURR\_AND\_QUAN\_TYP\_LIT\\n as select from demo\_ddic\_types\\n\\{\\n key id,\\n cuky,\\n unit2,\\n \\n @Semantics.amount.currencyCode: 'cuky'\\n abap.curr'123.45' as currencyField,\\n \\n @Semantics.quantity.unitOfMeasure: 'unit2'\\n abap.quan'-200.12345' as quantityField\\n\\}\\n **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** **Syntax** **Name** **Possible Characters** `abap.int1'...'`\\
`abap.int2'...'`\\
`abap.int4'...'`\\
`abap.int8'...'` \\ [Integer literal](ABENINTEGER_LITERAL_GLOSRY.html) Uninterrupted string of digits, with an optional sign + or - as a prefix. At least one digit must be specified. The value of the number must be in the value range of the respective [dictionary type](ABENDDIC_BUILTIN_TYPES.html). An empty literal `''` is not allowed. `abap.dec'...'` [Packed number literal](ABENPACKED_NUMBER_LITERAL_GLOSRY.html) String of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. The length used in the memory and the number of decimal places are determined by the number of digits specified. An empty literal `''` is not allowed. `abap.decfloat16'...'`\\
|\\ `abap.d16n'...'` \\
`abap.decfloat34'...'`\\
|\\ `abap.d34n'...'`\\
[Decimal floating point literal](ABENDECFLOAT_LITERAL_GLOSRY.html) Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. Length restrictions, typing conventions, and scaling rules of the respective [dictionary type](ABENDDIC_BUILTIN_TYPES.html) apply. An empty literal `''` is not allowed. `abap.fltp'...'` [Binary floating point literal](ABENBINFLOAT_LITERAL_GLOSRY.html) Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. The maximum number of valid places is 16. An empty literal `''` is not allowed. `abap.char'...'`\\ [Text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) String of any characters. The length of a text field literal must lie between 1 and 255 characters. An empty text field literal `abap.char''` is allowed and denotes the initial value of one blank. Trailing blanks are removed but the type length includes the trimmed trailing blanks. `abap.string'...'`\\
`abap.sstring'...'` [Text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) String of any characters. A typed text string literal can have a maximum of 255 characters. A typed text string literal can be empty and the typed text string literal `abap.string''` represents an empty string with length 0. \\
For data type `abap.sstring`, trailing blanks are removed but the type length includes the trimmed trailing blanks. \\
For data type `abap.string`, trailing blanks are not removed. `abap.raw'...'`\\ [Byte field literal](ABENBYTE_FIELD_LITERAL_GLOSRY.html) String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. At least two characters must be specified. An empty literal `abap.raw''` is not allowed. `abap.rawstring'...'`\\
|\\ `abap.rstr''` [Byte string literal](ABENBYTE_STRING_LITERAL_GLOSRY.html) String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. The empty byte string literal `abap.rawstring''` represents an empty byte string. `abap.numc'...'`\\ \\ [Numeric text literal](ABENNUMERIC_TEXT_LITERAL_GLOSRY.html)\\ Character string consisting of the digits 0 to 9. The length of a numeric text literal must lie between 1 and 255 characters. Empty numeric text literals `abap.numc''` or blanks within numeric text literals are not allowed. Negative values are not allowed. `abap.clnt'...'` \\ [Client literal](ABENCLIENT_LITERAL_GLOSRY.html)\\ String of any characters with a length of exactly 3 characters. Blanks are not allowed. An empty literal `abap.clnt''` is not allowed. `abap.lang'...'` \\ [Language key literal](ABENLANG_KEY_LITERAL_GLOSRY.html)\\ A language key literal can contain any character and it consists of exactly one character. An empty literal `abap.lang''` is not allowed. A blank space is allowed. `abap.dats'..'`\\
`abap.datn'...'`\\ [Date literal](ABENDATE_LITERAL_GLOSRY.html) Character string that represents a date in the format `YYYYMMDD`. Must contain a valid date according to the rules for valid dates described for time stamp literals below. An empty literal `''` is not allowed. `abap.tims'...'`\\
`abap.timn'...'` [Time literal](ABENTIME_LITERAL_GLOSRY.html) Character string that represents a time in the format `HHMMSS`. Must contain a valid time according to the rules for valid times described for time stamp literals below. An empty literal `''` is not allowed. `abap.utclong'...'`\\
|\\ `abap.utcl'...'` [Time stamp literal](ABENTIME_STAMP_LITERAL_GLOSRY.html) Character string that represents a [time stamp](ABENTIME_STAMP_GLOSRY.html) in the format `YYYY-MM-DD HH:MM:SS,SSSSSSS`, precise to 100 nanoseconds. `YYYY-MM-DD` consists of eight digits separated by hyphens. They must represent dates that are valid in accordance with the calendar rules: `YYYY` (year): 0001 to 9999, `mm` (month): 01 to 12, `DD` (day): 01 to 31. *1582-10-05* to *1582-10-14* are skipped due to the conversion from the Julian to the Gregorian calendar. `HH:MM:SS,SSSSSSS` consists of digits separated by colons and a full stop. They must represent a time in a 24-hour range in the format `HHMMSS`: 00 to 23 for `HH` (hours) and 00 to 59 for `MM` (minutes) and 00 to 59 for `SS.SSSSSSS` (seconds with exactly seven decimal places). No other characters are allowed. An empty literal `''` is not allowed. `abap.curr'...'` [Currency field literal](ABENCURRENCY_LITERAL_GLOSRY.html) Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. Exactly two decimal places must be specified. `abap.cuky'...'` [Currency key literal](ABENCURRENCY_KEY_LITERAL_GLOSRY.html) String of any characters with a maximum of 5 characters. An empty literal `abap.cuky''` is allowed and denotes five blanks. `abap.quan'...'` [Quantity field literal](ABENQUANTITY_FIELD_LITERAL_GLOSRY.html) Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. `abap.unit'...'` [Unit key literal](ABENUNIT_KEY_LITERAL_GLOSRY.html) String of any characters with a maximum of 3 characters. An empty literal `''` is allowed and denotes two blanks. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html abencds\_literal\_v2.html