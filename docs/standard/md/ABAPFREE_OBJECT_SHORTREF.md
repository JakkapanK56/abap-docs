---
title: "ABAPFREE_OBJECT_SHORTREF"
description: |
  ABAPFREE_OBJECT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFREE_OBJECT_SHORTREF.htm"
abapFile: "ABAPFREE_OBJECT_SHORTREF.html"
keywords: ["ABAPFREE", "OBJECT", "SHORTREF"]
---

[Reference](ABAPFREE_OBJECT.html)

`FREE OBJECT ole [NO FLUSH].`

Frees the memory of an [automation object](ABENOLE_AUTOMATION_GLOSRY.html)\\ `ole` created using `CREATE OBJECT ole` on the presentation server.

-   `NO FLUSH`\\
    The effect is that the release is passed to the presentation layer only after function module `FLUSH` is called or when a [screen layout](ABENSCREEN_GLOSRY.html) changes.

abenabap.html abenabap\_reference.html abenabap\_shortref.html