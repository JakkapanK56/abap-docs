---
title: "ABENSQL_ENGINE_EXPR"
description: |
  ABENSQL_ENGINE_EXPR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_ENGINE_EXPR.htm"
abapFile: "ABENSQL_ENGINE_EXPR.html"
keywords: ["select", "do", "while", "if", "case", "catch", "class", "data", "types", "internal-table", "ABENSQL", "ENGINE", "EXPR"]
---

The evaluation of [SQL expressions](ABAPSQL_EXPR.html) as well as the execution of [built-in functions](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) as operands of such expressions is not fully supported by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) and must be processed partly on the database. The following expressions and functions can be processed by the ABAP SQL in-memory engine. Their use in read accesses (even nested) does not lead to the bypassing of table buffering and does not cause the transport of an internal table accessed with [`FROM @itab`](ABAPSELECT_ITAB.html) to the database:

The expressions and functions can be used in both [`SELECT`](ABAPSELECT_LIST.html) lists and in [`WHERE`](ABAPWHERE.html) clauses.

If a catchable exception is raised when an SQL expression is processed by the ABAP SQL in-memory engine, it is wrapped by the class `CX_SY_OPEN_SQL_DB` and can be handled using this class. The attribute `PREVIOUS` of the associated exception object is then given the name of the original exception class.

-   [Elementary SQL expression](ABENSQL_ELEM.html)
-   [Built-in SQL function](ABENSQL_BUILTIN_FUNC.html)

-   [Numeric functions](ABENSQL_ARITH_FUNC.html)\\ `ABS`, `CEIL`, `DIV`, `FLOOR`, and `MOD`
-   [String functions](ABENSQL_STRING_FUNC.html)\\ `CONCAT`, `CONCAT_WITH_SPACE`, `LEFT`, `LENGTH`, `LOWER`, `RIGHT`, `UPPER` and `SUBSTRING`
-   [Null value function](ABENSQL_COALESCE.html)\\ `COALESCE` (in the [`SELECT`](ABAPSELECT_LIST.html) list only)

-   [Arithmetic expressions](ABENSQL_ARITH.html)
-   [Case distinctions](ABENSQL_CASE.html) (in the [`SELECT`](ABAPSELECT_LIST.html) list only)
-   [Aggregate functions](ABENSQL_AGG_FUNC.html)\\ `MAX`, `MIN`, and `SUM` (in the [`SELECT`](ABAPSELECT_LIST.html) list only)
-   A standalone [aggregate function](ABENSQL_AGG_FUNC.html)\\ `COUNT( * )` (in the [`SELECT`](ABAPSELECT_LIST.html) list only).

-   When an SQL expression is processed by the ABAP SQL in-memory engine, the same results are produced as on the database and not as in the corresponding ABAP evaluation. The following are some examples:

-   Evaluations of the functions [`DIV`](ABENSQL_ARITH_FUNC.html) and [`MOD`](ABENSQL_ARITH_FUNC.html) that are not the same as calculations with the identically named [ABAP operators](ABENARITH_OPERATORS.html).
-   Operands of the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) that do not have trailing blanks on the database, unlike in ABAP.
-   Any [null values](ABENNULL_VALUE_GLOSRY.html) produced as results of nested expressions, for example in the [`COALESCE`](ABENSQL_COALESCE.html) function or in [comparisons](ABENABAP_SQL_EXPR_LOGEXP.html), are handled as null values.
-   The result of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) with columns that contain [null values](ABENNULL_VALUE_GLOSRY.html) is unknown, except in the case of the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html).
-   Calculations for built-in type [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2--are-done-with-the-respective-arithmetic--the-abap--calculation-type--abenarith-type-html--for---decfloat16---abenbuiltin-types-numeric-html--is---decfloat34---abenbuiltin-types-numeric-html--in-contrast-------when-calculating-with-the-built-in-types---df16-dec---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2) and [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2), the ABAP SQL in-memory engine uses the respective decimal floating point arithmetic, while the database uses packed number arithmetic. This can lead to different results.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_inmemeng.html