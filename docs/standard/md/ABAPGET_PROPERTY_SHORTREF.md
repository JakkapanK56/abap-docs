---
title: "ABAPGET_PROPERTY_SHORTREF"
description: |
  ABAPGET_PROPERTY_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PROPERTY_SHORTREF.htm"
abapFile: "ABAPGET_PROPERTY_SHORTREF.html"
keywords: ["do", "if", "case", "method", "data", "ABAPGET", "PROPERTY", "SHORTREF"]
---

[Reference](ABAPGET_PROPERTY.html)

`GET PROPERTY OF ole prop = dobj [NO FLUSH]\ [QUEUE-ONLY]\                                  [EXPORTING p1 = f1 p2 = f2 ...].`

Assigns the content of the property `prop` of an [automation object](ABENOLE_AUTOMATION_GLOSRY.html)\\ `ole` created using `CREATE OBJECT ole` to the data object `dobj`.

-   `NO FLUSH`\\
    Specifies that the property is applied on the presentation server only when the [function module](ABENFUNCTION_MODULE_GLOSRY.html)\\ `FLUSH` is called or the [screen layout](ABENSCREEN_GLOSRY.html) is changed.
-   `QUEUE-ONLY`\\
    Specifies that, in the case of a flush, the return codes of the methods called using [`CALL METHOD OF`](ABAPCALL_METHOD_OF_OLE_SHORTREF.html) in the automation queue are not written to the data objects `rc`.
-   `EXPORTING p1 = f1 p2 = f2 ...`\\
    Passes actual parameters `f1`, `f2`, ... to parameters `p1`, `p2`, ... of the property.

abenabap.html abenabap\_reference.html abenabap\_shortref.html