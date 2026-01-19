---
title: "ABENNEWS-762-ABAP_SQL"
description: |
  ABENNEWS-762-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-762-ABAP_SQL.htm"
abapFile: "ABENNEWS-762-ABAP_SQL.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "method", "class", "data", "internal-table", "ABENNEWS", "762", "ABAP", "SQL"]
---

[1. Subquery as Data Source of `INSERT`](#ABAP_MODIFICATION_1@4@)

[2\. SQL Functions](#ABAP_MODIFICATION_2@4@)

[3\. SQL Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Host Expressions](#ABAP_MODIFICATION_4@4@)

[5\. CDS Path Expressions](#ABAP_MODIFICATION_5@4@)

[6\. Access to Global Temporary Tables](#ABAP_MODIFICATION_6@4@)

[7. `ON` Conditions](#ABAP_MODIFICATION_7@4@) 

[8\. System Classes](#ABAP_MODIFICATION_8@4@)

[9\. CDS Views with Input Parameters](#ABAP_MODIFICATION_9@4@)

[10\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_10@4@)

In the ABAP SQL write statement [`INSERT`](ABAPINSERT_DBTAB.html), a parenthesized subquery [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html) can now be specified as a data source after `FROM`. The rows of the result set of the subquery are inserted into the target table directly on the database. No data transport is required between the database and AS ABAP.

The following changes have been made:

Columns of the built-in dictionary type `SSTRING` can now be used in the [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html)\\ [`CASE`](ABENSQL_CASE.html) and the [coalesce function](ABENSQL_COALESCE.html).

From ABAP release 7.62, [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) can be specified for the work areas `wa` or the internal tables `itab` (from which the data is taken) in the write statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html).

From ABAP release 7.62, [path expressions](ABENABAP_SQL_PATH.html) can be used as [data sources](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html).

When the new [global temporary tables](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html) in ABAP Dictionary are accessed using ABAP SQL, all temporary data stored here is guaranteed to be deleted before the next implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html), If not, a runtime error occurs.

From ABAP release 7.62, the full `ON` condition or subconditions of [joins](ABAPSELECT_JOIN.html) can be specified dynamically as [`(cond_syntax)`](ABENWHERE_LOGEXP_DYNAMIC.html). This is not possible if the full [`FROM` clause](ABAPFROM_CLAUSE.html) is specified dynamically as `(cond_syntax)`.

The new system class `CL_DBI_UTILITIES` contains utility methods for the database interface.

The documented method `IS_LOGGING_ON` can be used to verify whether [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is currently switched on for a database table.

In ABAP release 7.62 and higher, the [input parameters](ABENCDS_PARAMETER_LIST_V1.html) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property `VIEWS_WITH_PARAMETERS` using method `USE_FEATURES` of class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html). Querying this property results in a warning check from the syntax check.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_762.html), which handles the statement more strictly than the regular syntax check.

-   New Numeric Function
-   The new function [`ROUND`](ABENSQL_ARITH_FUNC.html) rounds numeric values.
-   New String Functions
-   The new functions [`CONCAT`](ABENSQL_STRING_FUNC.html), [`LPAD`](ABENSQL_STRING_FUNC.html), [`LENGTH`](ABENSQL_STRING_FUNC.html), [`LTRIM`](ABENSQL_STRING_FUNC.html), [`REPLACE`](ABENSQL_STRING_FUNC.html), [`RIGHT`](ABENSQL_STRING_FUNC.html), [`RTRIM`](ABENSQL_STRING_FUNC.html), and [`SUBSTRING`](ABENSQL_STRING_FUNC.html) perform operations on strings.
-   Coalesce Function Expanded
-   The [coalesce function](ABENSQL_COALESCE.html) can now have 255 arguments instead of just two and returns the value of the first argument that does not have the null value.

abenabap.html abennews.html abennews-76.html abennews-762.html abennews-762-745.html