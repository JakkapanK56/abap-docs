---
title: "ABENWHERE_LOGEXP_COMPARE_TYPES"
description: |
  ABENWHERE_LOGEXP_COMPARE_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_COMPARE_TYPES.htm"
abapFile: "ABENWHERE_LOGEXP_COMPARE_TYPES.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENWHERE", "LOGEXP", "COMPARE", "TYPES"]
---

The following table shows which [built-in data types](ABENDDIC_BUILTIN_TYPES.html) in the ABAP Dictionary can be compared with each other. The table applies to the following:

Invalid comparisons produce a syntax error in [conditions of an expression](ABENABAP_SQL_EXPR_LOGEXP.html) and in the [strict mode from ABAP release 7.40, SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html). In other cases, a syntax warning is produced. The result of invalid comparisons is determined by the database system and is platform-dependent. For details on comparisons on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

The comparability of dictionary types is significant for comparisons with [columns](ABENABAP_SQL_COLUMNS.html) or [SQL expressions](ABAPSQL_EXPR.html) on the right side or for [comparisons in SQL expressions](ABENABAP_SQL_EXPR_LOGEXP.html). This applies in particular to [literals](ABENABAP_SQL_LITERALS.html), [host variables](ABENABAP_SQL_HOST_VARIABLES.html), and [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) when handled as [elementary SQL expressions](ABENSQL_ELEM.html). These elements are mapped to a dictionary type and comparability is identified for the dictionary type in question.

-   [Comparisons](ABENWHERE_LOGEXP_COMPARE.html) of a [`WHERE`](ABAPWHERE.html) condition or [`HAVING`](ABAPHAVING_CLAUSE.html) condition in which SQL expressions are specified on the left side (`lhs`) and columns are specified on the right side (`rhs`).
-   Comparisons of an [`ON`](ABAPSELECT_JOIN.html) condition.
-   Comparisons in [expressions](ABENABAP_SQL_EXPR_LOGEXP.html).

-   There are no restrictions for combinations using *x*.
-   Combinations with *y* cannot be used in [conditions in an expression](ABENABAP_SQL_EXPR_LOGEXP.html).
-   In combinations with *z*, the lengths and decimal places must match in the compared columns or expressions in [conditions in an expression](ABENABAP_SQL_EXPR_LOGEXP.html).
-   Combinations with *e* can only be used in [conditions in an expression](ABENABAP_SQL_EXPR_LOGEXP.html) and cannot be used in [conditions for a statement](ABENABAP_SQL_STMT_LOGEXP.html).
-   In combinations with *l*, the lengths of the compared columns or expressions must match.
-   In [conditions in an expression](ABENABAP_SQL_EXPR_LOGEXP.html), combinations with *\=* can only be compared for equality.

-   Any [literals](ABENABAP_SQL_LITERALS.html), [host variables](ABENABAP_SQL_HOST_VARIABLES.html), and [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) that are not handled as [elementary SQL expressions](ABENSQL_ELEM.html) are usually converted to the matching dictionary type instead of being mapped to a dictionary type. For example, it may be possible to compare a host variable as the right side of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) for statements with more dictionary types than in a [relational expression for SQL expressions](ABENABAP_SQL_EXPR_LOGEXP.html).

-   SQL expressions of the types `DF16_DEC` or `DF34_DEC` are compared with other numeric types other than themselves.
-   SQL expressions of the type `SSTRING` are compared with types other than themselves in a [`CASE` expression](ABENSQL_CASE.html).

-   The table does not show the [obsolete types](ABENDDIC_OBSOLETE_TYPES.html)\\ `DF16_SCL` and `DF34_SCL`, which cannot be compared in [conditions in an expression](ABENABAP_SQL_EXPR_LOGEXP.html) and, like `DF16_RAW` and `DF34_RAW`, can otherwise only be compared with themselves.
-   In the following cases, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_762.html), which handles the statement more strictly than the regular syntax check.

**lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DF16_DEC`** **`DF16_RAW`** **`DECFLOAT34`** **`DF34_DEC`** **`DF34_RAW`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`CLNT`** **`LANG`** **`DATS`** **`TIMS`** **`ACCP`** **`UNIT`** **`CUKY`** **`DATN`** **`TIMN`** **`UTCLONG`** **`RAW`**\\ **`INT1`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`INT2`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`INT4`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`INT8`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`DEC`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`CURR`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`QUAN`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`DECFLOAT16`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`DF16_DEC`** y y y y y y y y z - - y - - - - - - - - - - - - - - - - **`DF16_RAW`** - - - - - - - - - x - - - - - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x x x x y - x y - - - - - - - - - - - - - - - - **`DF34_DEC`** y y y y y y y y y - - z - - - - - - - - - - - - - - - - **`DF34_RAW`** - - - - - - - - - - - - x - - - - - - - - - - - - - - - **`FLTP`** - - - - - - - - - - - - - x - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - - - - - x x x x x x x y x x y y - - **`SSTRING`** - - - - - - - - - - - - - - x x x x x e e y x x - - - - **`NUMC`** - - - - - - - - - - - - - - x x x x x e e y x x - - - - **`CLNT`** - - - - - - - - - - - - - - x x x x x e e y x x - - - - **`LANG`** - - - - - - - - - - - - - - x x x x x e e y x x - - - - **`DATS`** - - - - - - - - - - - - - - x e e e e x e - e e y - - - **`TIMS`** - - - - - - - - - - - - - - x e e e e e x - e e - y - - **`ACCP`** - - - - - - - - - - - - - - y y y y y - - y y y - - - - **`UNIT`** - - - - - - - - - - - - - - x x x x x e e y x x - - - - **`CUKY`** - - - - - - - - - - - - - - x x x x x e e y x x - - - - **`DATN`** - - - - - - - - - - - - - - y - - - - y - - - - x - - - **`TIMN`** - - - - - - - - - - - - - - y - - - - - y - - - - x - - **`UTCLONG`** - - - - - - - - - - - - - - - - - - - - - - - - - - = - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - - - - - l, y abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html abenwhere\_logexp\_compare.html