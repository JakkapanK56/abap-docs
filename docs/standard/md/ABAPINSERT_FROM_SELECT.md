---
title: "ABAPINSERT_FROM_SELECT"
description: |
  ABAPINSERT_FROM_SELECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_FROM_SELECT.htm"
abapFile: "ABAPINSERT_FROM_SELECT.html"
keywords: ["select", "insert", "delete", "do", "if", "catch", "method", "class", "data", "internal-table", "ABAPINSERT", "FROM", "SELECT"]
---

[Short Reference](ABAPINSERT_DBTAB_SHORTREF.html)

``... \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\        [[`WHERE`](ABAPWHERE.html)\ [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\        [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\        [[`ORDER BY`](ABAPORDERBY_CLAUSE.html)\ [`[UP TO n ROWS [OFFSET o]]`](ABAPSELECT_UP_TO_OFFSET.html)]\        [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]\        [[`OPTIONS`](ABAPSELECT_OPTIONS.html)]\          [[`USING ...`](ABAPSELECT_OPTIONS_USING.html)]\          [[`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html)] ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of a [subquery](ABENSUBQUERY_GLOSRY.html) after the addition `FROM` of the statements [`INSERT`](ABAPINSERT_DBTAB.html) and [`MODIFY`](ABAPMODIFY_DBTAB.html). These clauses define a result set, which is used as a data source of the `INSERT` or `MODIFY` statement.

Apart from the client column, the result set of the subquery must have at least as many columns as the primary key of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) that is filled using the `INSERT` statement or modified using the `MODIFY` statement. It cannot, however, have more columns than the target [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html).

The following special rules apply:

A further subquery within the subquery cannot access the table or view processed using the `INSERT` or `MODIFY` statement.

Insertion of columns of a result set formed by an inner join in a table entity.

-   `FROM` clause

-   If the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) processed using the `INSERT` or `MODIFY` statement is [client-dependent](ABENDDIC_DATABASE_TABLES_CLIENT.html), at least one data source of the subquery must be client-dependent.
-   In the [`FROM`](ABAPFROM_CLAUSE.html) clause, [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) cannot be switched off using the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html).
-   If the subquery uses default client handling or if client handling is switched using [`USING CLIENT`](ABAPSELECT_CLIENT.html), implicit client handling in the `INSERT` statement or `MODIFY` statement cannot be switched using [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html).
-   If implicit client handling is switched in the subquery using [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html), implicit client handling in the `INSERT` statement or `MODIFY` statement must be switched using [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html).

-   `SELECT` clause

-   Any [`SELECT` lists](ABAPSELECT_LIST.html) of the subquery specified as comma-separated lists must define one column of the result set for at least every column of the primary key of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled.
-   If the subquery uses default client handling or switches client handling using [`USING CLIENT`](ABAPSELECT_CLIENT.html), no client column can be specified as the first column in the `SELECT` list. In other positions, client columns are not interpreted as client columns.
-   If implicit client handling is switched in the subquery using [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html), the first column of the `SELECT` list must be a client column.
-   In a [`SELECT` list](ABAPSELECT_LIST.html) of the subquery specified using `*`, the result set produced for at least every column of the primary key of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled must contain a column.
-   If the subquery uses default client handling \\nor switches client handling using [`USING CLIENT`](ABAPSELECT_CLIENT.html), the client column of the result set is ignored.
-   If implicit client handling is switched in the subquery using [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html), the client column of the result set is respected.

-   `ORDER BY` clause

-   The addition [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html).
-   The addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html).
-   For the variant `ORDER BY n` that specifies the position of a column, [special rules](ABAPINSERT_FROM_SELECT_ORDER_BY_N.html) apply.
-   An `ORDER BY` clause in a subquery is not supported by all databases. This means a syntax check warning from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) can occur that can be hidden using the pragma `##db_feature_mode[limit_in_subselect_or_cte]`. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised.

-   `OPTIONS`

-   Behind [`OPTIONS`](ABAPSELECT_OPTIONS.html), the addition [`USING`](ABAPSELECT_OPTIONS_USING.html) and the addition [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) can be placed.

-   If a subquery is used, the ABAP SQL statement cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If a [query](ABENASQL_QUERY_GLOSRY.html) accesses a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that is linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and for which [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not disabled using the value *#NOT\_ALLOWED* for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html) or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause or [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) for the complete `SELECT` statement, only that data is read that meets the [access condition](ABENACCESS_CONDITION_GLOSRY.html) defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the `SELECT` statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is accessed, no access control takes place.
-   In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clauses in [subqueries](ABENSUBQUERY_GLOSRY.html). This requires the constant `LIMIT_IN_SUBSELECT_OR_CTE` of this class to be passed to the method in an internal table.
-   Implicit client handling of the subquery is not specified by client handling of the `INSERT` statement or `MODIFY` statement. An addition [`USING`](ABAPIUMD_CLIENT.html) or [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html) of the [`INSERT`](ABAPINSERT_DBTAB.html) statement or [`MODIFY`](ABAPMODIFY_DBTAB.html) statement is ignored by the subquery. The subquery uses either the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) or a client specified in the subquery using [`USING`](ABAPSELECT_CLIENT.html). When the result of the subquery is written, however, implicit client handling of the `INSERT` statement or `MODIFY` statement applies by default. This can be controlled using the additions [`USING CLIENT`](ABAPIUMD_CLIENT.html) or [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html).
-   The use of a subquery in the statement [`MODIFY`](ABAPMODIFY_DBTAB.html) and the use of `USING CLIENT` or an access in the subquery to the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) that is filled with an `INSERT` statement results in the [strict mode as of ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html). If used, [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html) applies [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_cds\_join1\_te. \\nINSERT demo\_cds\_join1\_te \\n FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' d = 'd1' ) \\n ( a = 'a2' b = 'b2' d = 'd2' ) \\n ( a = 'a3' b = 'b3' d = 'd3' ) ) ). \\nDELETE FROM demo\_cds\_join2\_te. \\nINSERT demo\_cds\_join2\_te \\n FROM TABLE @( VALUE #( ( d = 'd1' e = 'e1' f = 'f1' ) \\n ( d = 'd2' e = 'e2' f = 'f2' ) \\n ( d = 'd3' e = 'e3' f = 'f3' ) ) ). \\n\\ \\nDELETE FROM demo\_cds\_join3\_te. \\nINSERT demo\_cds\_join3\_te FROM ( SELECT FROM demo\_cds\_join1\_te AS d1 \\n INNER JOIN demo\_cds\_join2\_te AS d2 \\n ON d1~d = d2~d \\n FIELDS d1~a, d1~b, d2~e, d2~f ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_join3\_te \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html