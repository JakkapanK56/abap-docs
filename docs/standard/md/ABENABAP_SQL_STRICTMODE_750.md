---
title: "ABENABAP_SQL_STRICTMODE_750"
description: |
  ABENABAP_SQL_STRICTMODE_750 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_750.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_750.html"
keywords: ["select", "insert", "update", "if", "case", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "750"]
---

The strict mode of the syntax check in ABAP release 7.50 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.50](ABENNEWS-750-ABAP_SQL.html):

The strict mode in ABAP release 7.50 covers all rules of the [strict mode in ABAP release 7.40 SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html), plus the following rules:

If used in the statements `FETCH` and `CLOSE CURSOR`, the escape character `@` is ignored by the checks made on the associated statement `OPEN CURSOR`.

-   Use of [`UNION`](ABAPUNION.html).
-   Use of [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html)
-   [SQL expressions](ABAPSQL_EXPR.html) on the left-hand side of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) of an [SQL condition](ABENASQL_COND.html)
-   Specifying columns on the right side of an interval condition [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html)
-   Shared use of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) with DDIC database tables or DDIC views in a `SELECT` statement.
-   In a [cast expression](ABENSQL_CAST.html), other [SQL expressions](ABAPSQL_EXPR.html) are used as operands or `FLTP` is not the only data type that can be specified as the target type.
-   In an [`ON`](ABAPSELECT_JOIN.html) condition

-   of any join, an [SQL expression](ABENSQL_EXPRESSION_GLOSRY.html) is used on the left side,
-   of an outer join, the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) is used.

-   Use of [`UNION`](ABAPUNION.html) in a [subquery](ABENSUBQUERY_GLOSRY.html).
-   Use of a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) as an operand `n` after [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) or [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) in the [`SELECT`](ABAPSELECT.html) statement.
-   [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement.
-   Implicit pass of a value to an input parameter of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), annotated with the annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), in the [`SELECT`](ABAPSELECT.html) statement.
-   A [`SELECT` clause](ABAPSELECT_CLAUSE.html) started with [`FIELDS`](ABAPSELECT.html) after the [`FROM` clause](ABAPFROM_CLAUSE.html) in the [`SELECT` statement](ABAPSELECT.html).
-   Access to a [global temporary table (GTT)](ABENDDIC_DATABASE_TABLES_GTT.html).
-   Use of the numeric function [`ROUND`](ABENSQL_ARITH_FUNC.html) or the string functions [`CONCAT`](ABENSQL_STRING_FUNC.html), [`LPAD`](ABENSQL_STRING_FUNC.html), [`LENGTH`](ABENSQL_STRING_FUNC.html), [`LTRIM`](ABENSQL_STRING_FUNC.html), [`REPLACE`](ABENSQL_STRING_FUNC.html), [`RIGHT`](ABENSQL_STRING_FUNC.html), [`RTRIM`](ABENSQL_STRING_FUNC.html), and [`SUBSTRING`](ABENSQL_STRING_FUNC.html).
-   [Path expression](ABENABAP_SQL_PATH.html) as a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html).
-   Subquery as [data source](ABAPINSERT_SOURCE.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html).
-   [Comparison](ABENWHERE_LOGEXP_COMPARE_TYPES.html) of columns or expressions of the types `DF16_DEC` or `DF34_DEC` with other numeric types (except with itself) or comparison of columns or expressions of the type `SSTRING` with other types (except with itself) in a [`CASE` expression](ABENSQL_CASE.html).
-   Use of the target type `INT8` in a [`CAST` expression](ABENSQL_CAST.html).

-   In a [`SELECT`](ABAPSELECT.html) statement, it is not possible to access to a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a corresponding CDS view as an [obsolete data source](ABENABAP_SQL_CDS_OBSOLETE.html).
-   No [writes](ABENABAP_SQL_WRITING.html) can be performed on DDIC database tables or DDIC views with a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html).
-   If it is not possible to make a [lossless](ABAPMOVE_EXACT.html) read on an [untyped literal](ABENABAP_SQL_UNTYPED_LITERALS.html), a syntax error occurs.
-   A column can occur only once in a single [update expression](ABAPUPDATE_SET_EXPRESSION.html) after the addition [`SET`](ABAPUPDATE_SOURCE.html) of the statement [`UPDATE`](ABAPUPDATE.html).
-   If the [`SELECT` list](ABAPSELECT_LIST.html) is specified as `*`, [`HAVING` clauses](ABAPHAVING_CLAUSE.html) without [`GROUP BY` clauses](ABAPGROUPBY_CLAUSE.html) are forbidden.
-   The [`INTO`](ABAPINTO_CLAUSE.html) clause must be specified as the last clause of a [`SELECT`](ABAPSELECT.html) statement and the ABAP-specific additions [`OPTIONS`](ABAPSELECT_OPTIONS.html) of the `SELECT` statement must be specified after the `INTO` clause.
-   If an [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) statement is checked in accordance with the rules of the strict mode from ABAP release 7.60, all [host variables](ABENABAP_SQL_HOST_VARIABLES.html) must be prefixed with the escape character `@` in the statements [`FETCH`](ABAPFETCH.html) and [`CLOSE CURSOR`](ABAPCLOSE_CURSOR.html) that access the open cursor.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html