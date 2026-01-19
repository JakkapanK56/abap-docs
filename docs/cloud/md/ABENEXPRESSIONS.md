---
title: "ABENEXPRESSIONS"
description: |
  ABENEXPRESSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXPRESSIONS.htm"
abapFile: "ABENEXPRESSIONS.html"
keywords: ["if", "method", "types", "ABENEXPRESSIONS"]
---

The following expressions can be specified in [expression positions](ABENEXPRESSION_POSITION_GLOSRY.html):

An expression in a [write position](ABENWRITE_POSITION_GLOSRY.html) has a result that is assigned a value.

An expression in a [read position](ABENREAD_POSITION_GLOSRY.html) has a result that is used as an operand in the statement. Logical expressions can contain [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html), that is, arithmetic expressions, string expressions, and bit expressions as operands of relational expressions. The three different calculation expression types cannot currently be mixed within a calculation expression.

-   Write positions

-   [Declaration expressions](ABENINLINE_DECLARATIONS.html)
-   Certain [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html)
-   Certain [table expressions](ABENTABLE_EXPRESSIONS.html)

-   Read positions

-   [Built-in Functions](ABENBUILT_IN_FUNCTIONS.html) and [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html)
-   [Logical expressions](ABENLOGEXP.html)
-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html)
-   [Table expressions](ABENTABLE_EXPRESSIONS.html) and [mesh path expressions](ABENMESH_PATH_EXPRESSION.html)
-   [Arithmetic expressions](ABAPCOMPUTE_ARITH.html)
-   [String expressions](ABAPCOMPUTE_STRING.html)
-   [Bit expressions](ABAPCOMPUTE_BIT.html)

-   Although the calculation expression types cannot be mixed directly, a different type of expression can be used as an argument of a allowed function in another expression. In the same way, logical expressions can occur as arguments of [Boolean functions](ABENBOOLE_FUNCTION_GLOSRY.html) in calculation expressions.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), three other kinds of expressions are possible:

-   [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html)
-   [Aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html)
-   [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html)

-   The ABAP expressions above can be used as [host expressions](ABENHOST_EXPRESSION_GLOSRY.html) in ABAP SQL.

abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_expressions.html abenoperators\_expressions.html