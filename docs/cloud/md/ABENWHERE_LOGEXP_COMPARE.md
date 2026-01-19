---
title: "ABENWHERE_LOGEXP_COMPARE"
description: |
  ABENWHERE_LOGEXP_COMPARE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_COMPARE.htm"
abapFile: "ABENWHERE_LOGEXP_COMPARE.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENWHERE", "LOGEXP", "COMPARE"]
---

``... operand1 operator operand2                      |\ \{[`[ALL|ANY|SOME]`](ABENWHERE_LOGEXP_ALL_ANY_SOME.html) ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html) )\} ...``

This relational expression compares the content of the operand `operand1` according to the comparison operator `operator` with the content of the operand `operand2` or with the result of a [scalar subquery](ABENWHERE_LOGEXP_ALL_ANY_SOME.html).

The following table shows the possible comparison operators:

The following should be noted when using these operators:

Reads flights with a seat occupancy that is less than the entered value.

Reads overbooked flights.

-   The following can be specified for `operand1` on the left side:

-   Any [SQL expressions](ABAPSQL_EXPR.html) except [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html).
-   [Aggregate expressions](ABAPSELECT_AGGREGATE.html) in a [`HAVING`](ABAPHAVING_CLAUSE.html) clause.

-   The following can be specified for `operand2` on the right side:

-   Any elementary [SQL operands](ABENSQL_OPERANDS.html).
-   Here, a column [`col`](ABENABAP_SQL_COLUMNS.html) must be specified as `[data_source](ABAPSELECT_DATA_SOURCE.html)~comp`, or `tabalias~comp` using the [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html) and it must be possible to [compare](ABENWHERE_LOGEXP_COMPARE_TYPES.html) the data types of the left side and right side.
    \\
    The content of an ABAP object, that is, an [untyped literal](ABENABAP_SQL_UNTYPED_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), or a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) must match the data type of `operand1` in accordance with the rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).
-   Built-in [SQL functions](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) and [cast expressions](ABENSQL_CAST.html).
-   [Aggregate expressions](ABAPSELECT_AGGREGATE.html) in a [`HAVING`](ABAPHAVING_CLAUSE.html) clause.

-   If `operand2` is an [untyped literal](ABENABAP_SQL_UNTYPED_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), or a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), the value is converted, if necessary, to the data type that matches the type of the operand `operand1` in accordance with the [ABAP conversion rules](ABENCONVERSION_RULES.html) and the [tables of built-in types in the ABAP Dictionary](ABENDDIC_BUILTIN_TYPES.html) before the statement is passed to the database.
-   Comparisons between columns or between SQL expressions (including [typed literals](ABENABAP_SQL_TYPED_LITERALS.html) and aggregate expressions) and columns are performed completely on the database. No type conversions are made in ABAP beforehand. If the data types or lengths on the left and right side do not match, the resulting behavior depends entirely on the conversion rules of the database, where fewer conversions are generally possible here than in ABAP. The platform-dependent behavior can produce different results or even SQL errors on individual platforms. For details on the conversion rules of SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   The decimal places are respected in comparisons between numeric types.
-   In greater than or less than comparisons with character-like types, the result can depend on the [code page](ABENCODEPAGE_GLOSRY.html) used by the database system. This applies in particular to the non-printable characters.
-   Trailing blanks are usually ignored in comparisons between character-like types.
-   In the case of columns that contain nothing but a blank character, it depends on the platform how this blank is saved:

-   In the SAP HANA database and in MaxDB, a single blank is saved as an empty string and not as the value from the respective code page.
-   In all other databases and in the [table buffer](ABENTABLE_BUFFERING_GLOSRY.html), a single blank is saved in accordance with the code page.

-   This means that the behavior produced when a value of this type is selected using size comparisons depends on the platform and buffering. More specifically, a single blank in the SAP HANA database and in MaxDB is not found in the interval of all possible characters.

-   Size comparisons for character-like operands should be avoided to prevent platform-dependent behavior. An exception here are simple cases, such as operands that contain only digits.

DATA seatsocc TYPE sflight-seatsocc. \\ncl\_demo\_input=>request( CHANGING field = seatsocc ). \\n\\ \\nSELECT carrid, connid, fldate \\n FROM sflight \\n WHERE seatsocc < @seatsocc \\n INTO TABLE @FINAL(sflight\_tab). SELECT carrid, connid, fldate \\n FROM sflight \\n WHERE seatsocc > sflight~seatsmax \\n INTO TABLE @FINAL(sflight\_tab). `**operator**` **Meaning** `=`, `EQ` True if the content of `operand1` is equal to the content of `operand2`. `<>`, `NE` True if the content of `operand1` is not equal to the content of `operand2`. `<`, `LT` True if the content of `operand1` is less than the content of `operand2`. `>`, `GT` True if the content of `operand1` is greater than the content of `operand2`. `<=`, `LE` True if the content of `operand1` is less than or equal to the content of `operand2`. `>=`, `GE` True if the content of `operand1` is greater than or equal to the content of `operand2`. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html