---
title: "ABAPINSERT_FROM_SELECT"
description: |
  ABAPINSERT_FROM_SELECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINSERT_FROM_SELECT.htm"
abapFile: "ABAPINSERT_FROM_SELECT.html"
keywords: ["select", "insert", "delete", "do", "if", "catch", "class", "data", "internal-table", "ABAPINSERT", "FROM", "SELECT"]
---

``... \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\        [[`WHERE`](ABAPWHERE.html)\ [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\        [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\        [[`ORDER BY`](ABAPORDERBY_CLAUSE.html)\ [`[UP TO n ROWS [OFFSET o]]`](ABAPSELECT_UP_TO_OFFSET.html)]\        [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]\        [[`OPTIONS`](ABAPSELECT_OPTIONS.html)]\          [[`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html)] ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of a [subquery](ABENSUBQUERY_GLOSRY.html) after the addition `FROM` of the statements [`INSERT`](ABAPINSERT_DBTAB.html) and [`MODIFY`](ABAPMODIFY_DBTAB.html). These clauses define a result set, which is used as a data source of the `INSERT` or `MODIFY` statement.

Apart from the client column, the result set of the subquery must have at least as many columns as the primary key of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) that is filled using the `INSERT` statement or modified using the `MODIFY` statement. It cannot, however, have more columns than the target [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html).

The following special rules apply:

A further subquery within the subquery cannot access the table processed using the `INSERT` or `MODIFY` statement.

Insertion of columns of a result set formed by an inner join in a table entity.

-   `FROM` clause

-   If the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) processed using the `INSERT` or `MODIFY` statement is [client-dependent](ABENDDIC_DATABASE_TABLES_CLIENT.html), at least one data source of the subquery must be client-dependent.

-   `SELECT` clause

-   Any [`SELECT` lists](ABAPSELECT_LIST.html) of the subquery specified as comma-separated lists must define one column of the result set for at least every column of the primary key of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled.
-   In a [`SELECT` list](ABAPSELECT_LIST.html) of the subquery specified using `*`, the result set produced for at least every column of the primary key of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled must contain a column.
-   If the subquery uses default client handling, the client column of the result set is ignored.

-   `ORDER BY` clause

-   The addition [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html).
-   The addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html).
-   For the variant `ORDER BY n` that specifies the position of a column, [special rules](ABAPINSERT_FROM_SELECT_ORDER_BY_N.html) apply.
-   An `ORDER BY` clause in a subquery is not supported by all databases. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised.

-   `OPTIONS`

-   Behind [`OPTIONS`](ABAPSELECT_OPTIONS.html), the addition [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) can be placed.

-   If a subquery is used, the ABAP SQL statement cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If a [query](ABENASQL_QUERY_GLOSRY.html) accesses a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that is linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and for which [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not disabled using the value *#NOT\_ALLOWED* for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html) or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause or [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) for the complete `SELECT` statement, only that data is read that meets the [access condition](ABENACCESS_CONDITION_GLOSRY.html) defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the `SELECT` statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is accessed, no access control takes place.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_cds\_join1\_te. \\nINSERT demo\_cds\_join1\_te \\n FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' d = 'd1' ) \\n ( a = 'a2' b = 'b2' d = 'd2' ) \\n ( a = 'a3' b = 'b3' d = 'd3' ) ) ). \\nDELETE FROM demo\_cds\_join2\_te. \\nINSERT demo\_cds\_join2\_te \\n FROM TABLE @( VALUE #( ( d = 'd1' e = 'e1' f = 'f1' ) \\n ( d = 'd2' e = 'e2' f = 'f2' ) \\n ( d = 'd3' e = 'e3' f = 'f3' ) ) ). \\n\\ \\nDELETE FROM demo\_cds\_join3\_te. \\nINSERT demo\_cds\_join3\_te FROM ( SELECT FROM demo\_cds\_join1\_te AS d1 \\n INNER JOIN demo\_cds\_join2\_te AS d2 \\n ON d1~d = d2~d \\n FIELDS d1~a, d1~b, d2~e, d2~f ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_join3\_te \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html