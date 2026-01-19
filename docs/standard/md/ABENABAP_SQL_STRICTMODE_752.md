---
title: "ABENABAP_SQL_STRICTMODE_752"
description: |
  ABENABAP_SQL_STRICTMODE_752 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_752.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_752.html"
keywords: ["select", "if", "data", "types", "internal-table", "ABENABAP", "SQL", "STRICTMODE", "752"]
---

The strict mode of the syntax check in ABAP release 7.52 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.52](ABENNEWS-752-ABAP_SQL.html):

The strict mode in ABAP release 7.52 covers all rules of the [strict mode in ABAP release 7.51](ABENABAP_SQL_STRICTMODE_751.html), plus the following rules:

-   Use of `ONE TO MANY` in [`LEFT OUTER JOIN`](ABAPSELECT_JOIN.html)
-   [Parameter passing](ABENABAP_SQL_PARAMETERS.html) when using [path expressions](ABENABAP_SQL_PATH.html) in a [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) in [path expressions](ABENABAP_SQL_PATH.html) in a [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   Use of the type conversion functions [`BINTOHEX`](ABENSQL_TYPE_CONV_FUNC.html) and [`HEXTOBIN`](ABENSQL_TYPE_CONV_FUNC.html)
-   Use of the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) of statement [`SELECT`](ABAPSELECT.html) together with columns of the types `STRING`, `RAWSTRING`, and `GEOM_EWKB` plus `LCHR` and `LRAW` in the [`SELECT` list](ABAPSELECT_LIST.html) in a strict mode.
-   [Internal table](ABAPSELECT_ITAB.html) as the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) of a query
-   In [path expressions](ABENABAP_SQL_PATH.html):

-   CDS associations are used whose [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) are [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   [Parameters](ABENABAP_SQL_PARAMETERS.html) are passed when used to [specify columns](ABENABAP_SQL_COLUMNS.html)
-   The [cardinality](ABENCARDINALITY_GLOSRY.html) or the kind of the join expression are specified as [attributes](ABENABAP_SQL_PATH_FILTER.html).
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) are specified when used to [specify columns](ABENABAP_SQL_COLUMNS.html).

-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is switched off by the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html).

-   A [path expression](ABENABAP_SQL_PATH.html) as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`FROM`](ABAPFROM_CLAUSE.html) clause must have an alias name defined with [`AS`](ABAPFROM_CLAUSE.html).
-   The addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) cannot be specified for a [data source](ABAPSELECT_DATA_SOURCE.html) specified using a [path expression](ABENABAP_SQL_PATH.html).
-   When the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) is used in a query that accesses a CDS entity, this access is known statically, and [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) applies, a syntax error occurs.
-   Any character literals or constants used on the right side of [`LIKE`](ABENWHERE_LOGEXP_LIKE.html) that are more than twice as long as the left side produce a syntax error.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html