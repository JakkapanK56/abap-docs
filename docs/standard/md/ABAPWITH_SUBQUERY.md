---
title: "ABAPWITH_SUBQUERY"
description: |
  ABAPWITH_SUBQUERY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH_SUBQUERY.htm"
abapFile: "ABAPWITH_SUBQUERY.html"
keywords: ["select", "insert", "do", "if", "catch", "method", "class", "data", "internal-table", "ABAPWITH", "SUBQUERY"]
---

[Short Reference](ABAPINSERT_DBTAB_SHORTREF.html)

``... \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\        [[`WHERE`](ABAPWHERE.html)\ [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\        [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\        [[`ORDER BY`](ABAPORDERBY_CLAUSE.html)\ [`[UP TO n ROWS [OFFSET o]]`](ABAPSELECT_UP_TO_OFFSET.html)]\        [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]  ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of [subqueries](ABENSUBQUERY_GLOSRY.html) of a [`WITH`](ABAPWITH.html) statement. These clauses define the result set of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html).

The result set can be used as a temporary table in subsequent subqueries and in the main query of the current `WITH` statement as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html).

The names of the columns of the result set are defined by the [`SELECT`](ABAPSELECT_LIST.html) of the subquery by default. However, they can be overwritten in the `WITH` statement. If a union set, an intersection set, or a difference set is created in the subquery using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html) the column names are determined by the `SELECT` list of the first `SELECT` statement.

If the clauses of the subquery contain dynamic tokens, the common table expression can only be used in other dynamic tokens of the `WITH` statement.

The addition [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) and the addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can only be used after [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html). An `ORDER BY` clause in a subquery is not supported by all databases. This means a syntax check warning from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) can occur that can be hidden using the pragma `##db_feature_mode[limit_in_subselect_or_cte]`. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised.

Subquery of a common table expression `+flights` with almost all possible clauses. Since the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause followed by the addition [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) is not supported by all databases, a syntax warning from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) is raised that can be hidden here using the pragma `##db_feature_mode[limit_in_subselect_or_cte]`.

This example demonstrates a common table expression in which all clauses of the subquery and the main query are specified as dynamic tokens. In the [`INTO`](ABAPINTO_CLAUSE.html) clause, the addition [`NEW`](ABAPSELECT_INTO_TARGET.html) and the declaration operator [`@FINAL(...)`](ABAPSELECT_INTO_TARGET.html) are used to declare a generic data reference variable that points to the result in an anonymous data object.

-   If a [query](ABENASQL_QUERY_GLOSRY.html) accesses a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that is linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and for which [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not disabled using the value *#NOT\_ALLOWED* for the annotation [`@AccessControl.authorizationCheck`](ABENCDS_VIEW_ANNO_V1.html) or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause or [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) for the complete `SELECT` statement, only that data is read that meets the [access condition](ABENACCESS_CONDITION_GLOSRY.html) defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the `SELECT` statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is accessed, no access control takes place.
-   In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clauses in [subqueries](ABENSUBQUERY_GLOSRY.html). This requires the constant `LIMIT_IN_SUBSELECT_OR_CTE` of this class to be passed to the method in an internal table.

DATA carrids TYPE RANGE OF sflight-carrid. \\n\\ \\n... \\n\\ \\nWITH \\n +flights AS ( SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n AVG( seatsocc AS DEC( 16,2 ) ) AS avg \\n WHERE carrid IN @carrids \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid UP TO 1 ROWS ) \\n ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\] \\n SELECT FROM +flights AS f \\n INNER JOIN scarr AS s \\n ON f~carrid = s~carrid \\n FIELDS s~carrname, f~connid, f~avg \\n ORDER BY s~carrname, f~connid \\n INTO TABLE @FINAL(itab). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA carrid TYPE spfli-carrid VALUE 'LH'. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nDATA: \\n sel\_sub1 TYPE string VALUE \`cityfrom AS city\`, \\n sel\_sub2 TYPE string VALUE \`cityto AS city\`, \\n frm\_sub TYPE string VALUE \`spfli\`, \\n whr\_sub TYPE string VALUE \`carrid = @carrid\`, \\n sel\_main TYPE string VALUE \`\*\`, \\n frm\_main TYPE string VALUE \`sgeocity\`, \\n whr\_main TYPE string VALUE \`city IN ( SELECT city FROM +cities )\`. \\n\\ \\nWITH \\n +cities AS ( \\n SELECT (sel\_sub1) \\n FROM (frm\_sub) \\n WHERE (whr\_sub) \\n UNION DISTINCT \\n SELECT (sel\_sub1) \\n FROM (frm\_sub) \\n WHERE (whr\_sub) ) \\n SELECT (sel\_main) \\n FROM (frm\_main) \\n WHERE (whr\_main) \\n INTO TABLE NEW @FINAL(result). \\n\\ \\nout->write( result->\* ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html