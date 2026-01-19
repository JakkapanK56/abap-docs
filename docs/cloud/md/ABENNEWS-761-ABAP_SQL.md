---
title: "ABENNEWS-761-ABAP_SQL"
description: |
  ABENNEWS-761-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-761-ABAP_SQL.htm"
abapFile: "ABENNEWS-761-ABAP_SQL.html"
keywords: ["select", "if", "case", "data", "ABENNEWS", "761", "ABAP", "SQL"]
---

[1\. SQL Expressions](#ABAP_MODIFICATION_1@4@)

[2. `ON` Conditions](#ABAP_MODIFICATION_2@4@) 

[3\. Unions](#ABAP_MODIFICATION_3@4@)

[4\. Host Expressions](#ABAP_MODIFICATION_4@4@)

[5\. Access to CDS Entities](#ABAP_MODIFICATION_5@4@)

[6. Arrangement of `SELECT` Clauses and `FROM` Clauses](#ABAP_MODIFICATION_6@4@)

From ABAP release 7.61, other [SQL expressions](ABAPSQL_EXPR.html) can be used as operands in a [cast expression](ABENSQL_CAST.html) and `FLTP` is not the only data type that can be specified.

From ABAP release 7.61, it is possible to

As of ABAP release 7.61, the [set operator](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html) can also be used in [subqueries](ABENSUBQUERY_GLOSRY.html).

From ABAP release 7.61, [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) can also be specified as an operand `n` after [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) in the [`SELECT`](ABAPSELECT.html) statement.

From ABAP release 7.61, the new [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can also be specified as data sources of a [`SELECT`](ABAPSELECT.html) statement alongside [CDS views](ABENCDS_VIEW_GLOSRY.html).

If an input parameter of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is annotated with the new annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), ABAP SQL can pass the system value that matches the value of the annotation implicitly. The [annotation value](ABENANNOTATION_VALUE_GLOSRY.html)\\ [`#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) even prevents an actual parameter from being passed to input parameters explicitly that are annotated in this way for client IDs.

From ABAP release 7.61, the [`FROM` clause](ABAPFROM_CLAUSE.html) of a [`SELECT` statement](ABAPSELECT.html) can also be specified in front of the [`SELECT` clause](ABAPSELECT_CLAUSE.html). In this case, the `SELECT` clause must be introduced using the new addition [`FIELDS`](ABAPSELECT.html). This arrangement supports tools such as Code Completion.

-   Use [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) of the left side of the [`ON`](ABAPSELECT_JOIN.html) condition of any join.
-   Use the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) in an [`ON`](ABAPSELECT_JOIN.html) condition of an outer join.

abenabap.html abennews.html abennews-76.html abennews-761.html