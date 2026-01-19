---
title: "ABENABAP_SQL_STRICTMODE_740_SP08"
description: |
  ABENABAP_SQL_STRICTMODE_740_SP08 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_740_SP08.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_740_SP08.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "740", "SP08"]
---

The strict mode of the syntax check in ABAP release 7.40, SP08 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.40 SP08](ABENNEWS-740_SP08-ABAP_SQL.html):

The strict mode in ABAP release 7.40, SP08 covers all rules of the [strict mode in ABAP release 7.40, SP05](ABENABAP_SQL_STRICTMODE_740_SP05.html), plus the following rules:

-   Columns `dbtab~*` specified in the [`SELECT` list](ABAPSELECT_LIST.html).
-   Inline declarations using [`@DATA(...)`](ABAPSELECT_INTO_TARGET.html) for the [target area](ABAPINTO_CLAUSE.html) of [`SELECT`](ABAPSELECT.html).
-   [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html):

-   Minus sign (`-`) in front of an operand of an [arithmetic expression](ABENSQL_ARITH.html)
-   SQL expression as an operand of a [simple case distinction](ABENSQL_SIMPLE_CASE.html)
-   Use of a [complex case distinction](ABENSQL_SEARCHED_CASE.html)
-   SQL expression after `SELECT` together with [aggregate expressions](ABAPSELECT_AGGREGATE.html) or the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html)
-   SQL expression after the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) of the statement `SELECT`
-   SQL expression as an argument of [aggregate expressions](ABAPSELECT_AGGREGATE.html) in the `SELECT` list or in the `HAVING` clause

-   [Joins](ABAPSELECT_JOIN.html):

-   Use of the additions `LIKE`, `IN`, and `NOT` and the operators `OR` or `NOT` in an `ON` condition.
-   Outer join without a comparison between columns on the left and right sides.

-   [Subquery](ABENSUBQUERY_GLOSRY.html) specified in a [dynamic `WHERE` condition](ABENWHERE_LOGEXP_DYNAMIC.html).
-   Arrangement of the [`INTO` clause](ABAPINTO_CLAUSE.html) as the final clause of a `SELECT` statement.

-   If the content of an [untyped literal](ABENABAP_SQL_UNTYPED_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), or a host [expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) that is read in an operand position needs to be converted to the target type, this is done using the [rules for lossless assignments](ABAPMOVE_EXACT.html). If the assignment cannot be lossless, an exception is raised.
-   If [`AS tabalias`](ABAPFROM_CLAUSE.html) is used to define an alias name for a DDIC database table, this name must also be used in dynamic tokens.
-   Comparisons between non-[comparable types](ABENWHERE_LOGEXP_COMPARE_TYPES.html) produce a syntax error or raise an exception.
-   If a column specified in the [`HAVING` clause](ABAPHAVING_CLAUSE.html) outside of an aggregate expression is not specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html), a syntax error occurs.
-   Columns listed directly in the [`SELECT` list](ABAPSELECT_LIST.html) cannot be specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) if a `HAVING` clause is specified.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html