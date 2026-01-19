---
title: "ABENABAP_SQL_STRICTMODE_761"
description: |
  ABENABAP_SQL_STRICTMODE_761 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_761.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_761.html"
keywords: ["select", "update", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "761"]
---

The strict mode of the syntax check in ABAP release 7.61 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.61](ABENNEWS-761-ABAP_SQL.html):

The strict mode in ABAP release 7.61 covers all rules of the [strict mode in ABAP release 7.60](ABENABAP_SQL_STRICTMODE_760.html), plus the following rules:

-   In a [cast expression](ABENSQL_CAST.html), other [SQL expressions](ABAPSQL_EXPR.html) are used as operands or `FLTP` is not the only data type that can be specified as the target type.
-   In an [`ON`](ABAPSELECT_JOIN.html) condition

-   of any join, an [SQL expression](ABENSQL_EXPRESSION_GLOSRY.html) is used on the left side,
-   of an outer join, the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) is used.

-   Use of [`UNION`](ABAPUNION.html) in a [subquery](ABENSUBQUERY_GLOSRY.html).
-   Use of a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) as an operand `n` after [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) or [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) in the [`SELECT`](ABAPSELECT.html) statement.
-   [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement.
-   Implicit pass of a value to an input parameter of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), annotated with the annotation [`@Environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html), in the [`SELECT`](ABAPSELECT.html) statement.
-   A [`SELECT` clause](ABAPSELECT_CLAUSE.html) started with [`FIELDS`](ABAPSELECT.html) after the [`FROM` clause](ABAPFROM_CLAUSE.html) in the [`SELECT` statement](ABAPSELECT.html).

-   A column can occur only once in a single [update expression](ABAPUPDATE_SET_EXPRESSION.html) after the addition [`SET`](ABAPUPDATE_SOURCE.html) of the statement [`UPDATE`](ABAPUPDATE.html).
-   If the [`SELECT` list](ABAPSELECT_LIST.html) is specified as `*`, [`HAVING` clauses](ABAPHAVING_CLAUSE.html) without [`GROUP BY` clauses](ABAPGROUPBY_CLAUSE.html) are forbidden.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html