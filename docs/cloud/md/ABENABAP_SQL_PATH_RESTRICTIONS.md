---
title: "ABENABAP_SQL_PATH_RESTRICTIONS"
description: |
  ABENABAP_SQL_PATH_RESTRICTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_PATH_RESTRICTIONS.htm"
abapFile: "ABENABAP_SQL_PATH_RESTRICTIONS.html"
keywords: ["select", "do", "while", "if", "data", "ABENABAP", "SQL", "PATH", "RESTRICTIONS"]
---

In principle, the same restrictions apply to path expressions in ABAP SQL and the [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE expressions](ABENCTE_ASSOCIATION_GLOSRY.html) used there as to using a corresponding [join expression](ABAPSELECT_JOIN.html). For example, a path expression cannot be used together with the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html). These restrictions are documented in the corresponding clauses. The following restrictions currently apply:

Fewer restrictions apply to the path expressions [`path_expr`](ABENCDS_PATH_EXPRESSION_V2.html) in the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) CDS DDL. If CDS association reads are required that are possible in ABAP CDS but not in ABAP SQL, they can be moved to a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

-   Requirements for the CDS entities or common table expressions

-   The [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) of the associations of a path expression cannot be DDIC database tables or DDIC database views with [replacement objects](ABENREPLACEMENT_OBJECT_GLOSRY.html).
-   No [literals](ABENCDS_LITERAL_V1.html) with prefixed `#domain` or `:domain` can be used in the CDS associations of the path expression to check the fixed value in the value range of a domain.
-   Due to [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html), no associations can be used whose `ON` condition accesses the client columns of their [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) or [association target](ABENASSOCIATION_TARGET_GLOSRY.html).

-   Requirements for ABAP SQL

-   If a value greater than to one is defined for the [cardinality](ABENCARDINALITY_GLOSRY.html) of an association of a path expression in the `FROM` clause, the identical path expression must also be specified in the [`SELECT` list](ABAPSELECT_LIST.html).
-   If the addition `CORRESPONDING` or an inline declaration [`@DATA|@FINAL(...)`](ABAPSELECT_INTO_TARGET.html) is used in the [`INTO`](ABAPINTO_CLAUSE.html) clause of a `SELECT` statement, columns of the [`SELECT` list](ABAPSELECT_LIST.html) specified using a path expression must have an alias name `alias` defined using [`AS`](ABAPSELECT_LIST.html).
-   A [data source](ABAPSELECT_DATA_SOURCE.html) specified as a path expression in the [`FROM` clause](ABAPFROM_CLAUSE.html) can be used in the `SELECT` statement only by using an alias name `tabalias` defined using `AS` in front of the column selector `~`.
-   The addition `USING CLIENT` cannot be combined with path expressions that contain [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) if they are [exposed](ABAPWITH_ASSOCIATIONS_DEFINING.html) by common table expressions.
-   If the alias name `tabalias` is specified statically using `AS` while the [`FROM` clause](ABAPFROM_CLAUSE.html)\\ `source_syntax` is specified dynamically, no path expressions can be used here.
-   Path expressions cannot be used in the `ON` condition of a [join expression](ABAPSELECT_JOIN.html).
-   In `SELECT` statements, path expressions cannot be used together with the additions [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) or [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenabap\_sql\_path.html