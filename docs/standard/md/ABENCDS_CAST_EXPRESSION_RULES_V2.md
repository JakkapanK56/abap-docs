---
title: "ABENCDS_CAST_EXPRESSION_RULES_V2"
description: |
  ABENCDS_CAST_EXPRESSION_RULES_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CAST_EXPRESSION_RULES_V2.htm"
abapFile: "ABENCDS_CAST_EXPRESSION_RULES_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "CAST", "EXPRESSION", "RULES"]
---

The following sections describe the conversion rules for [cast expressions](ABENCDS_CAST_EXPRESSION_V2.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html).

Data types that cannot be converted to each other are not mentioned here. In these cases, casts are either not possible or casting can only be done between operands of the same type. If the source type and the target type are technically identical, the content is transferred without being converted.

When the source type `DEC` is converted to a character-like target type, it depends on the database whether non-relevant zeros are included before and after the decimal separator.

-   Numeric target type

-   Possible target types for all numeric source types: `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `QUAN`, `DECFLOAT16`, and `DECFLOAT34`.
-   Possible target types for all numeric source types except `DECFLOAT16` and `DECFLOAT34`: `CURR` and `FLTP`.
-   The source value is converted to the internal representation of the target type.
-   If the value range is exceeded, an exception is raised that can be caught in ABAP using `CX_SY_OPEN_SQL_DB`. In the case of the target types `DEC`, `CURR`, and `QUAN`, this applies to the integer digits and any surplus decimal places are cut off without rounding.
-   In the case of the target types `DEC`, `CURR`, and `QUAN`, a syntax check warning is produced if it is known statically that an exception might be raised.
-   In the case of the target type `FLTP`, values that cannot be represented as [binary floating point numbers](ABENBINFLOAT_GLOSRY.html) are converted to the next adjacent number.

-   Character-like target type (not for `DECFLOAT16` and `DECFLOAT34`)

-   The possible target types are `CHAR`, `SSTRING`, and `CLNT` (only for `INT1`).
-   The number value is converted to a character string in [mathematical notation](ABENMATHEMATICAL_NOTATION_GLOSRY.html) and is left-aligned.
-   The length of the target type must be enough for all potential values in the source type including the sign and decimal separator.

-   Character-like target type

-   The possible target types are `CHAR`, `SSTRING`, `NUMC`, `CLNT`, `LANG`, `DATS`, `TIMS`, `UNIT`, `CUKY`, and `ACCP`. The target type `ACCP` must be specified using a data element. The data element must have the same length as the data type `ACCP`.
-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
-   There is no special handling for the target type `NUMC` and for the date/time types `DATS` and `TIMS`. It is advisable to only convert valid values. In the case of the target type `NUMC`, the built-in function [`LPAD`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) can be used to create leading zeros.

-   Numeric target type

-   The possible target types are `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, `QUAN`, `DECFLOAT16`, `DECFLOAT34`, and `FLTP`.
-   The validity of the content of the source field is not checked, which means that there can be decimal places.
-   The source field must contain a character string that can be interpreted as a number. If not, an exception is raised that can be caught in ABAP using `CX_SY_OPEN_SQL_DB`.
-   If the value range in the integer digits is exceeded, an exception is raised that can be caught in ABAP using `CX_SY_OPEN_SQL_DB`.
-   In the case of the target types `DECFLOAT16` and `DECFLOAT34`, rounding takes place to the last significant place.
-   In the case of the target types `INT1`, `INT2`, and `INT4`, any decimal places in the source field raise an exception. In the case of the target types `INT8`, `DEC`, `CURR`, and `QUAN`, surplus decimal places are cut off without rounding.
-   In the case of the target type `FLTP`, values that cannot be represented as [binary floating point numbers](ABENBINFLOAT_GLOSRY.html) are converted to the next adjacent number.

-   Character-like target type

-   The possible target types are `CHAR`, `SSTRING`, `NUMC`, `CLNT`, `ACCP`, `DATS`, and `TIMS`. The target type `ACCP` must be specified using a data element. The data element must have the same length as the data type `ACCP`.
-   The validity of the source field is not checked.
-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
-   The lengths of the source type and target type must match for the special target type for numeric text `NUMC` and for the date/time types `DATS` and `TIMS`. No other special handling takes place. It is advisable to only convert valid values. In the case of the target type `NUMC`, the built-in function [`LPAD`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) can be used to create leading zeros.

-   Character-like target type

-   The possible target types are `CHAR` and `SSTRING`.
-   The validity of the source field is not checked.
-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
-   The value of the character-like date field or time field is converted to the internal value of the date type or time type.
-   The character-like date field or time field must contain a valid date or a valid time or the initial value. If not, an exception of the class `CX_SY_OPEN_SQL_DB` is raised.

-   Character-like target type

-   The possible target types are `CHAR` and `SSTRING`, which need to be specified using simple types or data elements.
-   The validity of the source field is not checked.
-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_cast\_expression\_v2.html