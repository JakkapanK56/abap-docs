---
title: "ABAPSET_PROPERTY_SHORTREF"
description: |
  ABAPSET_PROPERTY_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_PROPERTY_SHORTREF.htm"
abapFile: "ABAPSET_PROPERTY_SHORTREF.html"
keywords: ["do", "data", "ABAPSET", "PROPERTY", "SHORTREF"]
---

[Reference](ABAPSET_PROPERTY.html)

`SET PROPERTY OF ole prop = dobj [NO FLUSH]\                                  [EXPORTING p1 = f1 p2 = f2 ...].`

Assigns the content of the data object `dobj` to the property `prop` of an [automation object](ABENOLE_AUTOMATION_GLOSRY.html)\\ `ole` created using `CREATE OBJECT ole`.

-   `NO FLUSH`\\
    Dictates that the property is not passed until the [function module](ABENFUNCTION_MODULE_GLOSRY.html)\\ `FLUSH` is called, or until a change of [screen layout](ABENSCREEN_GLOSRY.html) is passed to the presentation layer.
-   `EXPORTING p1 = f1 p2 = f2 ...`\\
    Passes actual parameters `f1`, `f2`, ... to parameters `p1`, `p2`, ... of the property.

abenabap.html abenabap\_reference.html abenabap\_shortref.html