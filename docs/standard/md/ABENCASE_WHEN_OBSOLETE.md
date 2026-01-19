---
title: "ABENCASE_WHEN_OBSOLETE"
description: |
  ABENCASE_WHEN_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCASE_WHEN_OBSOLETE.htm"
abapFile: "ABENCASE_WHEN_OBSOLETE.html"
keywords: ["if", "case", "class", "ABENCASE", "WHEN", "OBSOLETE"]
---

`CASE ... statements WHEN ... ... ENDCASE.`

The statements `statements` between [`CASE`](ABAPCASE.html) and the first statement [`WHEN`](ABAPWHEN.html) have the same effect as when they are specified directly in front of `CASE`. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of `CASE`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abenobsolete\_control\_structures.html