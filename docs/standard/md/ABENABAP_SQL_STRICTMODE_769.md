---
title: "ABENABAP_SQL_STRICTMODE_769"
description: |
  ABENABAP_SQL_STRICTMODE_769 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_769.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_769.html"
keywords: ["select", "if", "data", "internal-table", "ABENABAP", "SQL", "STRICTMODE", "769"]
---

The strict mode of the syntax check in ABAP release 7.69 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.69](ABENNEWS-769-ABAP_SQL.html):

The strict mode in ABAP release 7.69 covers all rules of the [strict mode in ABAP release 7.68](ABENABAP_SQL_STRICTMODE_768.html), plus the following rules:

-   [Internal table](ABAPSELECT_ITAB.html) as the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) of a query
-   In [path expressions](ABENABAP_SQL_PATH.html):

-   CDS associations are used whose [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) are [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   [Parameters](ABENABAP_SQL_PARAMETERS.html) are passed when used to [specify columns](ABENABAP_SQL_COLUMNS.html)
-   The [cardinality](ABENCARDINALITY_GLOSRY.html) or the kind of the join expression are specified as [attributes](ABENABAP_SQL_PATH_FILTER.html).
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) are specified when used to [specify columns](ABENABAP_SQL_COLUMNS.html).

-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is switched off by the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html).

-   When the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) is used in a query that accesses a CDS entity, this access is known statically, and [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) applies, a syntax error occurs.
-   Any character literals or constants used on the right side of [`LIKE`](ABENWHERE_LOGEXP_LIKE.html) that are more than twice as long as the left side produce a syntax error.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html