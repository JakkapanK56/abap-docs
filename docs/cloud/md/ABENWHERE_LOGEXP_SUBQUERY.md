---
title: "ABENWHERE_LOGEXP_SUBQUERY"
description: |
  ABENWHERE_LOGEXP_SUBQUERY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_SUBQUERY.htm"
abapFile: "ABENWHERE_LOGEXP_SUBQUERY.html"
keywords: ["select", "update", "delete", "do", "if", "catch", "class", "data", "internal-table", "ABENWHERE", "LOGEXP", "SUBQUERY"]
---

``... \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\        [[`WHERE`](ABAPWHERE.html)\ [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\        [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\        [[`ORDER BY`](ABAPORDERBY_CLAUSE.html)\ [`[UP TO n ROWS [OFFSET o]]`](ABAPSELECT_UP_TO_OFFSET.html)]\        [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]  ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of a [subquery](ABENSUBQUERY_GLOSRY.html) in a condition [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) in ABAP SQL.

In the [`FROM`](ABAPFROM_CLAUSE.html) clause, the addition `USING` cannot specified to affect [client handling](ABENCLIENT_HANDLING_GLOSRY.html). Client handling of the subquery depends on the client handling of the outer statement. An addition `USING` of the outer statement also affects the subquery.

A subquery can be used within the following relational expressions `sql_cond` for a subquery:

Conditions of a subquery can themselves contain subqueries. In nested subqueries, the columns specified in the SQL conditions are searched inside out and the columns of inner subqueries hide columns with the same name in outer subqueries.

Only a limited number of `SELECT` statements can be used as subqueries in an ABAP SQL statement. The maximum number is defined so that the ABAP SQL statement can be executed on all supported database systems. If known statically, more than 50 `SELECT` statements currently produce a syntax error and otherwise a runtime error. This restriction is independent of whether the subqueries are nested or occur in different relational expressions of the SQL condition.

The addition [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) and the addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html). An `ORDER BY` clause in a subquery is not supported by all databases. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised.

[Subquery in `WHERE` Condition](ABENSELECT_SUBQUERY_ABEXA.html)

-   [`operand operator [ALL|ANY|SOME] subquery`](ABENWHERE_LOGEXP_ALL_ANY_SOME.html)
-   [`[NOT] EXISTS subquery`](ABENWHERE_LOGEXP_EXISTS.html)
-   [`[NOT] IN subquery`](ABENWHERE_LOGEXP_OPERAND_IN.html) ([scalar subquery](ABENSCALAR_SUBQUERY_GLOSRY.html))
-   [`IN subquery with value tuples`](ABENWHERE_LOGEXP_LIST_IN.html)

-   In a correlated subquery, a DDIC projection view cannot be accessed in the surrounding `SELECT` statement.
-   If a subquery is used in a condition, the ABAP SQL statement cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). It bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If a [query](ABENASQL_QUERY_GLOSRY.html) accesses a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that is linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and for which [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not disabled using the value *#NOT\_ALLOWED* for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html) or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause or [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) for the complete `SELECT` statement, only that data is read that meets the [access condition](ABENACCESS_CONDITION_GLOSRY.html) defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the `SELECT` statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is accessed, no access control takes place.
-   In subqueries that are used in the `WHERE` condition of a [`DELETE`](ABAPDELETE_WHERE.html) or [`UPDATE`](ABAPUPDATE_SOURCE.html) statement, the DDIC database table to be changed cannot be accessed.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html