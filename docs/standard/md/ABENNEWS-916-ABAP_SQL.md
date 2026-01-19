---
title: "ABENNEWS-916-ABAP_SQL"
description: |
  ABENNEWS-916-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-916-ABAP_SQL.htm"
abapFile: "ABENNEWS-916-ABAP_SQL.html"
keywords: ["select", "do", "if", "ABENNEWS", "916", "ABAP", "SQL"]
---

[1\. Non-numeric Results in Aggregate Functions](#ABAP_MODIFICATION_1@4@)

[2\. Aggregate Functions in Hierarchy Aggregate Navigators](#ABAP_MODIFICATION_2@4@)

[3\. New Spatial Functions](#ABAP_MODIFICATION_3@4@)

[4. `DISTINCT` in `OVER` Clause](#ABAP_MODIFICATION_4@4@) 

[5. Enhancement of `LPAD` and `RPAD` Functions](#ABAP_MODIFICATION_5@4@)

The result of the aggregate functions [`MIN`](ABENSQL_AGG_FUNC.html) and [`MAX`](ABENSQL_AGG_FUNC.html) can now be non-numeric for [window expressions](ABAPSELECT_OVER.html) and [hierarchy aggregate navigators](ABENSELECT_HIERARCHY_DESC_AGG.html).

The aggregate function [`AVG`](ABENSQL_AGG_FUNC.html) can now be used for the hierarchy aggregate navigator [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) if a `JOIN` condition is not defined and for the hierarchy aggregate navigator [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).

The following [spatial functions](ABENSQL_SPATIAL_FUNC.html) are now available:

The addition `DISTINCT` is now allowed for the aggregate function `COUNT` in a [window expression](ABENSQL_WIN_FUNC.html).

The length `len` of the [`LPAD`](ABENSQL_STRING_FUNC.html) and [`RPAD`](ABENSQL_STRING_FUNC.html) functions can now be a host variable or an SQL expression. Additionally, the length of `len` can be less than 1 and greater than 1333. Both functions can produce the result type `SSTRING` with an undefined length.

-   `ST_3DLENGTH`
-   `ST_ASMVTGEOM`
-   `ST_BUFFER`
-   `ST_CLOSESTPOINTOFAPPROACH`
-   `ST_FRECHETDISTANCE`
-   `ST_INTERIORRINGN`
-   `ST_ISVALIDTRAJECTORY`
-   `ST_MAKEPOLYGON`
-   `ST_NEW_POINTM`
-   `ST_NEW_POINTZ`
-   `ST_NEW_POINTZM`
-   `ST_REMOVEPOINT`
-   `ST_REVERSE`
-   `ST_TOUCHES`
-   `ST_WITHIN`

abenabap.html abennews.html abennews-91.html abennews-916.html