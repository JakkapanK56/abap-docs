---
title: "ABENDDIC_DECIMAL_FLOATING_POINT"
description: |
  ABENDDIC_DECIMAL_FLOATING_POINT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DECIMAL_FLOATING_POINT.htm"
abapFile: "ABENDDIC_DECIMAL_FLOATING_POINT.html"
keywords: ["select", "update", "do", "if", "case", "data", "types", "ABENDDIC", "DECIMAL", "FLOATING", "POINT"]
---

In [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

In ABAP Dictionary, the following data types are available for decimal floating numbers.

The following built-in ABAP Dictionary data types represent real floating point types of a database:

They can be used, without restrictions, as numeric data types in appropriate expressions. They are currently only supported by [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html).

The following built-in data types in ABAP Dictionary are used as replacements for real decimal floating point types:

These types can be used as replacements on database systems that do not support decimal floating point types. They are mainly used to save decimal floating point numbers from ABAP programs and can be used in a limited way as numeric data types in appropriate expressions:

The ABAP types that correspond to the 16- or 34-digit decimal floating numbers in ABAP Dictionary are `decfloat16` and `decfloat34`. They are handled internally according to the IEEE-754-2008 standard, and are supported by all ABAP operations. There is restricted support for floating point numbers with replacement types in [SQL expressions](ABAPSQL_EXPR.html). In [arithmetic SQL expressions](ABENSQL_ARITH.html), only those decimal floating point numbers are supported that are based on the decimal floating point types.

The addition `STYLE` after `WRITE [TO]` and the formatting option [`STYLE`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) in [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) are available for the formatting of decimal floating numbers in programs. These overwrite the output style defined in ABAP Dictionary. When the addition `CURRENCY` is used after `WRITE [TO]` for a decimal floating number defined in the ABAP Dictionary, it must be defined with the output style *Sign right*, otherwise an exception occurs.

-   [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html) for 16-digit numbers.
-   [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) for 34-digit numbers.

-   [`DF16_DEC`](ABENDDIC_BUILTIN_TYPES.html) and [`DF16_RAW`](ABENDDIC_BUILTIN_TYPES.html) for 16-digit numbers.
-   [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_RAW`](ABENDDIC_BUILTIN_TYPES.html) for 34-digit numbers.

-   `DF16_DEC` and `DF34_DEC`
-   In database fields of this type, decimal floating point numbers are stored as a packed number (type [`DEC`](ABENDDIC_BUILTIN_TYPES_INT_PACK.html)). The length and the number of decimal places must be specified when defining a data type in ABAP Dictionary. For this type, restricted operations can be performed on the database:

-   No operands of these types can be used in [arithmetic SQL expressions](ABENSQL_ARITH.html) or [numeric SQL functions](ABENSQL_ARITH_FUNC.html).
-   Columns, but no SQL expressions of these types, can be used as operands in the [aggregate functions](ABAPSELECT_AGGREGATE.html) except for `STRING_AGG`.
-   In the statement [`UPDATE`](ABAPUPDATE.html), operations with these types are possible with [`SET` `+` and `-`](ABAPUPDATE_SET_EXPRESSION.html).
-   Database fields with these types can be processed in [AMDP](ABENAMDP_GLOSRY.html).
-   When there is a write to the database, the system implicitly rounds off to the number of decimal places and decimal overflows can occur.

-   `DF16_RAW` and `DF34_RAW`
-   In database fields of this type, decimal floating point numbers are stored as binary (in `RAW` format). The length is set to 16 or 34 places. Values can be sorted, compared, and used in indexes. For this type, no calculations can be performed on the database. This is an SAP-specific format, which means that the corresponding fields also cannot be processed in [AMDP](ABENAMDP_GLOSRY.html). The scaling is lost when writing to the database.

-   If possible, the types `DECFLOAT16` and `DECFLOAT34` should be used.
-   If it is necessary to work with the replacement types, the intended use case determines which type is to be used:

-   The types `DF16_DEC` and `DF34_DEC` can be used for calculations on the database, but their value ranges are smaller than those of real decimal floating point numbers.
-   The types `DF16_RAW` and `DF34_RAW` cover the whole value range, but are not recognized as numbers by the databases.

-   As in the [general packed numbers](ABENDDIC_BUILTIN_TYPES_INT_PACK.html), the number of places in the replacement types `DF16_DEC` and `DF34_DEC` should be odd.
-   In [ABAP CDS](ABENCDS.html) it is not usually possible to execute expressions for the replacement types.

abenabap.html abenabap\_dictionary.html abenddic\_builtin\_types\_intro.html abenddic\_builtin\_types\_prop.html abenddic\_builtin\_types\_general.html