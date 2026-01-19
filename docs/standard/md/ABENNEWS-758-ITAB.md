---
title: "ABENNEWS-758-ITAB"
description: |
  ABENNEWS-758-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-758-ITAB.htm"
abapFile: "ABENNEWS-758-ITAB.html"
keywords: ["ABENNEWS", "758", "ITAB"]
---

Up to now, an [optimization of the `WHERE` condition](ABENITAB_WHERE_OPTIMIZATION.html) by using key access took place only under very limited circumstances where the key value pairs had to be compared explicitly for equality and combined by `AND`. Now, the compiler analyzes the `WHERE` condition thoroughly and tries itself to extract the key/value pairs that are necessary for the key access.

Furthermore, any [binary comparison operators](ABENLOGEXP_ANY_OPERAND.html) and the comparison operator [`BETWEEN`](ABENLOGEXP_BETWEEN.html) are now also respected for sorted keys.

abenabap.html abennews.html abennews-75.html abennews-758.html