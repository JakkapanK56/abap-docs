---
title: "ABENSQL_ENGINE_RESTR"
description: |
  ABENSQL_ENGINE_RESTR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_ENGINE_RESTR.htm"
abapFile: "ABENSQL_ENGINE_RESTR.html"
keywords: ["select", "update", "if", "case", "data", "types", "internal-table", "ABENSQL", "ENGINE", "RESTR"]
---

The following language elements of ABAP SQL can be processed on the database but not yet by the ABAP SQL in-memory engine:

-   Currently, reads that use one of the following cannot be processed by the ABAP SQL in-memory engine:

-   Use of [subqueries](ABENSUBQUERY_GLOSRY.html) except those used as [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) in the statement [`WITH`](ABAPWITH.html).
-   The statement [`WITH`](ABAPWITH.html) if access to database tables is involved. The ABAP SQL in-memory engine can process the statement `WITH` if only internal tables are accessed with [`FROM @itab`](ABAPSELECT_ITAB.html) within the complete statement.
-   Use of the ABAP SQL language element [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html).
-   Use of the ABAP SQL [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html).
-   Access to a table or view for which a replacement object is defined.
-   Use of a secondary connection specified explicitly using the addition [`CONNECTION`](ABAPSELECT_CONNECTION.html). If specified, a [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) can be processed by the ABAP SQL in-memory engine.
-   Access to a [CDS table function](ABENCDS_TABLE_FUNCTIONS.html) or a [CDS scalar function](ABENCDS_SCALAR_FUNCTIONS.html).

-   Currently, the following elements of a [main query](ABENMAINQUERY_GLOSRY.html) cannot be processed by the ABAP SQL in-memory engine:

-   [`JOIN`](ABAPSELECT_JOIN.html) expressions if access to database tables is involved. The ABAP SQL in-memory engine can process joins where only internal tables are accessed with [`FROM @itab`](ABAPSELECT_ITAB.html).
-   [SQL Expressions](ABAPSQL_EXPR.html) except those listed under [ABAP SQL In-Memory Engine, Supported SQL Expressions](ABENSQL_ENGINE_EXPR.html).
-   [Hierarchy data](ABENSELECT_HIERARCHY_DATA.html): [CDS hierarchies](ABENCDS_HIERARCHIES.html) and [hierarchy functions](ABENHIERARCHY_FUNCTION_GLOSRY.html)\\ [`SELECT FROM HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) and [`SELECT FROM hierarchy_navigator`](ABENSELECT_HIERARCHY_NAVIGATORS.html).
-   Additions [`DISTINCT`](ABAPSELECT_CLAUSE.html) and [`FOR UPDATE`](ABAPSELECT_SINGLE.html).
-   The [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause and therefore the [`HAVING`](ABAPHAVING_CLAUSE.html) clause too.

-   Currently, the following elements of [SQL conditions](ABENASQL_COND.html) in the `WHERE` clause cannot be processed by the ABAP SQL in-memory engine:

-   [SQL Expressions](ABAPSQL_EXPR.html) except those listed under [ABAP SQL In-Memory Engine, Supported SQL Expressions](ABENSQL_ENGINE_EXPR.html).
-   Comparisons between different types except the following cases: Both operands have numeric types except `DF16_DEC` or `DF34_DEC`; both operands are character-like; both operands have the type `RAW` with the same length.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_inmemeng.html