---
title: "ABENNEWS-791-ITAB"
description: |
  ABENNEWS-791-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-791-ITAB.htm"
abapFile: "ABENNEWS-791-ITAB.html"
keywords: ["ABENNEWS", "791", "ITAB"]
---

Up to now, an [optimization of the `WHERE` condition](ABENITAB_WHERE_OPTIMIZATION.html) by using key access took place only under very limited circumstances where the key value pairs had to be compared explicitly for equality and combined by `AND`. Now, the compiler analyzes the `WHERE` condition thoroughly and tries itself to extract the key/value pairs that are necessary for the key access.

abenabap.html abennews.html abennews-79.html abennews-791.html