---
title: "ABENABAP_SQL_STRICTMODE_768"
description: |
  ABENABAP_SQL_STRICTMODE_768 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_768.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_768.html"
keywords: ["select", "types", "ABENABAP", "SQL", "STRICTMODE", "768"]
---

The strict mode of the syntax check in ABAP release 7.68 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.68](ABENNEWS-768-ABAP_SQL.html):

The strict mode in ABAP release 7.68 covers all rules of the [strict mode in ABAP release 7.67](ABENABAP_SQL_STRICTMODE_767.html).

-   Use of the type conversion functions [`BINTOHEX`](ABENSQL_TYPE_CONV_FUNC.html) and [`HEXTOBIN`](ABENSQL_TYPE_CONV_FUNC.html)
-   Use of the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) of statement [`SELECT`](ABAPSELECT.html) together with columns of the types `STRING`, `RAWSTRING`, and `GEOM_EWKB` plus `LCHR` and `LRAW` in the [`SELECT` list](ABAPSELECT_LIST.html) in a strict mode.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html