---
title: "ABENMOVE_EXACT_ELEMENTARY"
description: |
  ABENMOVE_EXACT_ELEMENTARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMOVE_EXACT_ELEMENTARY.htm"
abapFile: "ABENMOVE_EXACT_ELEMENTARY.html"
keywords: ["do", "if", "case", "catch", "class", "data", "types", "ABENMOVE", "EXACT", "ELEMENTARY"]
---

In conversions between incompatible [elementary data objects](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html), the operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) ensures that no values are lost. Regardless of the value of the operand, the operator `EXACT` generally does not allow conversions between data objects with the following data types, for which the values are always lost when the [conversion rules](ABENCONVERSION_ELEMENTARY.html) are applied.

Conversions from `d` to `t` and vice versa, and most conversions for UTC time stamps of the type `utclong` are prohibited regardless of the operator `EXACT`. Other conversions that are not allowed are conversions in which byte-like fields are converted directly or as an interim result to the data type `i` and vice versa.

If the compiler detects a forbidden conversion a syntax error occurs. If a forbidden conversion is detected at runtime, an exception of the class `CX_SY_CONVERSION_EXACT_NOT_SUP` is raised. The same applies to types for which conversions are allowed, but for which a loss of values can be identified regardless of the content, for example, if a conversion is made to fields that are too short.

If allowed conversions are made between incompatible elementary data objects, the operator `EXACT` checks the content of the operand at runtime as follows:

If the elementary data types for which no conversion is required are [compatible](ABENCOMPATIBLE_GLOSRY.html), no checks are performed, and no exceptions are raised.

[Lossless Assignment](ABENMOVE_EXACT_ABEXA.html).

-   From `x`, `xstring` to `n`, `d`, `t`, and vice versa.
-   From `x`, `xstring` to all [numeric data types](ABENNUMERIC_DATA_TYPE_GLOSRY.html), and vice versa.
-   From `d` and `t` to `b` and `s`

-   [Valid Values for Lossless Assignments](ABENMOVE_EXACT_ELEMENTARY_VALID.html)
-   [Suitable Values for Lossless Assignments](ABENMOVE_EXACT_ELEMENTARY_FIT.html)

-   When the operator `EXACT` is used, a catchable exception is always raised at runtime when a forbidden conversions is made, in particular, when an attempt is made to convert between `d` and `t`. In all other cases, an attempted conversion of this type raises an uncatchable exception.
-   If an operand contains an invalid or inappropriate value, this is assigned to its return value, even if the operator `EXACT` is used.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html abapmove\_exact.html