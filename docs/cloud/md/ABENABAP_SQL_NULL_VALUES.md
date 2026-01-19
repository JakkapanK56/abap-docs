---
title: "ABENABAP_SQL_NULL_VALUES"
description: |
  ABENABAP_SQL_NULL_VALUES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_NULL_VALUES.htm"
abapFile: "ABENABAP_SQL_NULL_VALUES.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "data", "internal-table", "ABENABAP", "SQL", "NULL", "VALUES"]
---

A null value is a special value returned by a [database](ABENDATABASE_GLOSRY.html) in order to indicate an undefined value or result. Null values do not correspond to any content of [data objects](ABENDATA_OBJECT_GLOSRY.html) in ABAP. Especially, a null value is not the same as a type-dependent initial value.

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), null values can be handled using one of the following:

ABAP SQL statements for [write access](ABENABAP_SQL_WRITING.html) generally do not create null values, except when processing [views](ABENVIEW_GLOSRY.html) that do not cover all columns of a database table.

As values of database fields, null values might occur in the following situations:

In read accesses with the ABAP SQL statement [`SELECT`](ABAPSELECT.html), null values can be produced by

When they are passed to data objects, they are transformed to type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html). However, in the additions [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) and [`ORDER BY`](ABAPORDERBY_CLAUSE.html), in the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) or internal tables as [data sources](ABAPSELECT_ITAB.html), null values are handled as null values. A [null indicator](ABENNULL_INDICATOR_GLOSRY.html) of a structured target area of a query can show which columns of the result set contain null values and which do not.

In the following example, the condition `IS NULL` is true because the [`CASE`](ABENSQL_CASE.html) expression on the left side does not find a true `WHEN` condition and does not have an `ELSE` branch.

-   The condition [`IS NULL`](ABENWHERE_LOGEXP_NULL.html)
-   The special expression [`sql_null`](ABENSQL_NULL.html)
-   A [null indicator](ABENNULL_INDICATOR_GLOSRY.html)
-   The function [`coalesce`](ABENSQL_COALESCE.html)
-   The parameter `on_null` in [date/time conversion functions](ABENSQL_DATE_TIME_CONVERSIONS.html)

-   Depending on the [database system](ABENDATABASE_SYSTEM_GLOSRY.html), empty [strings](ABENSTRING_GLOSRY.html) can also be represented by null values.
-   Null values can be produced in DDIC database tables if new columns are appended to filled tables.

-   [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html),
-   outer [joins](ABENJOIN_GLOSRY.html),
-   [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html),
-   when [CDS entities](ABENCDS_ENTITY_GLOSRY.html) containing such constructs are accessed.

-   When [subqueries](ABENSUBQUERY_GLOSRY.html) are inserted using [`INSERT`](ABAPINSERT_DBTAB.html) or [`MODIFY`](ABAPMODIFY_DBTAB.html), null values are also transformed to type-dependent initial values or raise an exception after an attempt to set a key field to the null value.
-   It is, by principle, not possible to insert null values in key fields of DDIC database tables. If an attempt is made, this raises an exception on the database.
-   In the ABAP Dictionary, a [flag for initial values](ABENDDIC_DATABASE_TABLES_INIT.html) can be set when inserting new columns in existing DDIC database tables to preserve the type-dependent initial value instead of the null value.

DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nSELECT SINGLE '\_' AS id \\n FROM demo\_expressions \\n WHERE CASE WHEN id = 'Y' THEN 'Z' END IS NULL \\n INTO @FINAL(wa). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html