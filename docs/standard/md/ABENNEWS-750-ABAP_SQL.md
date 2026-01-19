---
title: "ABENNEWS-750-ABAP_SQL"
description: |
  ABENNEWS-750-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-750-ABAP_SQL.htm"
abapFile: "ABENNEWS-750-ABAP_SQL.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "method", "class", "data", "internal-table", "ABENNEWS", "750", "ABAP", "SQL"]
---

[1. Arrangement of `SELECT` Clauses and `FROM` Clauses](#ABAP_MODIFICATION_1@4@) 

[2\. Unions](#ABAP_MODIFICATION_2@4@)

[3\. Host Expressions](#ABAP_MODIFICATION_3@4@)

[4\. SQL Expressions](#ABAP_MODIFICATION_4@4@)

[5\. SQL Functions](#ABAP_MODIFICATION_5@4@)

[6. Result Type of `COUNT`](#ABAP_MODIFICATION_6@4@)

[7. `ON` Conditions](#ABAP_MODIFICATION_7@4@) 

[8. Columns Specified After `BETWEEN`](#ABAP_MODIFICATION_8@4@)

[9. Subquery as Data Source of `INSERT`](#ABAP_MODIFICATION_9@4@)

[10\. Access to CDS Entities](#ABAP_MODIFICATION_10@4@)

[11\. CDS Path Expressions](#ABAP_MODIFICATION_11@4@)

[12\. Access to Global Temporary Tables](#ABAP_MODIFICATION_12@4@)

[13\. CDS Views with Input Parameters](#ABAP_MODIFICATION_13@4@)

[14\. System Classes](#ABAP_MODIFICATION_14@4@)

[15\. Access to Replacement Objects](#ABAP_MODIFICATION_15@4@)

[16\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_16@4@)

From ABAP release 7.50, the [`FROM` clause](ABAPFROM_CLAUSE.html) of a [`SELECT` statement](ABAPSELECT.html) can also be specified in front of the [`SELECT` clause](ABAPSELECT_CLAUSE.html). In this case, the `SELECT` clause must be introduced using the new addition [`FIELDS`](ABAPSELECT.html). This arrangement supports tools such as `Code Completion` in ABAP Editor.

From ABAP release 7.50, the addition [`UNION`](ABAPUNION_CLAUSE.html) creates the union of the results sets of two [`SELECT`](ABAPSELECT.html) statements.

From ABAP release 7.50, [host expressions](ABENABAP_SQL_HOST_VARIABLES.html) with the syntax `@( expr )` can be specified in many operand positions in which [host variables](ABENABAP_SQL_HOST_VARIABLES.html) are possible. For `expr`, all ABAP expressions can calls are possible that can be specified in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

Operand positions for host expressions in ABAP release 7.50:

The following changes have been made:

If an SQL expression can be specified, any individual literals, host variables, and host expressions can also be specified.

The following changes have been made:

From ABAP release 7.50, the result type of all aggregate functions [`COUNT`](ABENSQL_AGG_FUNC.html) is `INT8`.

The following is possible from ABAP release 7.50:

From ABAP release 7.50, numeric columns can be specified on the right side in an interval condition using [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html), providing the name of the database table or view is prefixed using `~`.

In the ABAP SQL write statement [`INSERT`](ABAPINSERT_DBTAB.html), a parenthesized [subquery](ABAPINSERT_FROM_SELECT.html) can now be specified as a data source after `FROM`. The rows of the results set of the subquery are inserted into the target table directly on the database. No data transport is required between the database and the application server.

The following changes have been made:

From ABAP release 7.50, [path expressions](ABENABAP_SQL_PATH.html) can be specified in `SELECT` statements that access CDS views with associations published for outside use as follows.

When the new [global temporary tables](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html) in ABAP Dictionary are accessed using ABAP SQL, all temporary data stored here is guaranteed to be deleted before the next implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html), If not, a runtime error occurs.

In ABAP release 7.50 and higher, the [input parameters](ABENCDS_PARAMETER_LIST_V1.html) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query the property `VIEWS_WITH_PARAMETERS` using the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html). Querying this property results in a warning check from the syntax check.

The following changes have been made:

From ABAP release 7.50, it is possible to define a [CDS view](ABENCDS_VIEW_GLOSRY.html) as a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) in ABAP Dictionary (transaction `SE11`) for a database table or a database view.

If a replacement object is defined for a database table or database view specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement, the `SELECT` statement accesses the CDS view and not the database table or the database view.

This change was implemented using an internal tool a kernel patch after ABAP release 7.40, SP10.

If one the new features listed above (with the exception of dynamic join conditions) is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_750.html), which handles the statement more strictly than the regular syntax check.

-   Arguments of [SQL expressions](ABAPSQL_EXPR.html) and hence all operand positions in which these are possible.
-   Operand `n` after [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) in the [`SELECT`](ABAPSELECT.html) statement,
-   Right sides of [`WHERE`](ABAPWHERE.html), [`ON`](ABAPSELECT_JOIN.html), or [`HAVING`](ABAPHAVING_CLAUSE.html) conditions, except for `LIKE` and `IN`.
-   [Actual parameters](ABAPSELECT_DATA_SOURCE.html) for input parameters of CDS views.
-   In the write statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html), the work areas `wa` or the internal tables `itab` from which the data is taken.
-   Right side of a [`SET` expression](ABAPUPDATE_SET_EXPRESSION.html) in `UPDATE`.

-   From ABAP release 7.50, [SQL expressions](ABAPSQL_EXPR.html) can be specified in the following operand positions (except in the `SELECT` list):

-   Left side of any [`WHERE`](ABAPWHERE.html) condition
-   Left side of a [`HAVING`](ABAPHAVING_CLAUSE.html) condition
-   Left side of a [complex case distinction](ABENSQL_SEARCHED_CASE.html)
-   As an operand of a [cast expression](ABENSQL_CAST.html).

-   In the SQL expression [`CASE`](ABENSQL_CASE.html), columns with the built-in dictionary type `SSTRING` can now be used.

-   New Numeric Function
-   The new function [`ROUND`](ABENSQL_ARITH_FUNC.html) rounds numeric values.
-   New String Functions
-   The new functions [`CONCAT`](ABENSQL_STRING_FUNC.html), [`LPAD`](ABENSQL_STRING_FUNC.html), [`LENGTH`](ABENSQL_STRING_FUNC.html), [`LTRIM`](ABENSQL_STRING_FUNC.html), [`REPLACE`](ABENSQL_STRING_FUNC.html), [`RIGHT`](ABENSQL_STRING_FUNC.html), [`RTRIM`](ABENSQL_STRING_FUNC.html), and [`SUBSTRING`](ABENSQL_STRING_FUNC.html) perform operations on strings.
-   Coalesce Function Expanded
-   The [coalesce function](ABENSQL_COALESCE.html) can now have 255 arguments instead of just two and returns the value of the first argument that does not have the null value. Columns with the built-in dictionary type `SSTRING` can now be used as arguments.

-   [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) can be used on the left side of the [`ON`](ABAPSELECT_JOIN.html) condition of any join expression.
-   The expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) can be used in an [`ON`](ABAPSELECT_JOIN.html) condition of an outer join.
-   The full `ON` condition or subconditions of [joins](ABAPSELECT_JOIN.html) can be specified dynamically as [`(cond_syntax)`](ABENWHERE_LOGEXP_DYNAMIC.html). This is not possible if the full [`FROM` clause](ABAPFROM_CLAUSE.html) is specified dynamically as `(cond_syntax)`.

-   From ABAP release 7.50, the restriction no longer applies that a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) can only be used together with database tables and classic views in a [`SELECT`](ABAPSELECT.html) statement if addressed using its [CDS database view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html). From ABAP release 7.50, CDS views can be addressed using the name of their [CDS entity](ABENCDS_ENTITY_GLOSRY.html), even if associated with database tables or classic views using [joins](ABENJOIN_GLOSRY.html) or [subqueries](ABENSUBQUERY_GLOSRY.html). This makes accesses performed on a CDS using the CDS database view [obsolete](ABENABAP_SQL_CDS_OBSOLETE.html).
-   From ABAP release 7.50, the new [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can also be specified as [data sources](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement alongside [CDS views](ABENCDS_VIEW_GLOSRY.html).
-   If an input parameter of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is annotated with the new annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), ABAP SQL can pass the system value that matches the value of the annotation implicitly. The annotation value [`#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) even prevents an actual parameter from being passed to input parameters explicitly that are annotated in this way for client IDs.

-   Path expressions closed with an element can be specified as [columns](ABENABAP_SQL_COLUMNS.html).
-   Path expressions closed with a target data source can be used as [data sources](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html).

-   The class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) can now be used to check all features of databases that can be integrated in ABAP programming but which cannot be used in all database systems.
-   The new system class `CL_DBI_UTILITIES` contains utility methods for the database interface. The documented method `IS_LOGGING_ON` can be used to verify whether [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is currently switched on for a database table.

abenabap.html abennews.html abennews-75.html abennews-750.html