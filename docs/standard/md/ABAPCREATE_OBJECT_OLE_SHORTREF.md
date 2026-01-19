---
title: "ABAPCREATE_OBJECT_OLE_SHORTREF"
description: |
  ABAPCREATE_OBJECT_OLE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_OLE_SHORTREF.htm"
abapFile: "ABAPCREATE_OBJECT_OLE_SHORTREF.html"
keywords: ["if", "case", "method", "class", "data", "ABAPCREATE", "OBJECT", "OLE", "SHORTREF"]
---

[Reference](ABAPCREATE_OBJECT_OLE2.html)

`CREATE OBJECT ole class [NO FLUSH]\ [QUEUE-ONLY].`

Creates an [OLE automation object](ABENOLE_AUTOMATION_GLOSRY.html)\\ `ole` of the automation class `class`. Here, `ole` must have the type `ole2_object` from the [type pool](ABENTYPE_POOL_GLOSRY.html) OLE2 and `class` specifies the name of the class.

-   `NO FLUSH`\\
    Specifies that the request to create an object is not passed to the current presentation server until the function module `FLUSH` is called or when the [screen layout](ABENSCREEN_GLOSRY.html) changes.
-   `QUEUE-ONLY`\\
    Specifies that, in the case of a flush, the return codes of the methods called using [`CALL METHOD OF`](ABAPCALL_METHOD_OF_OLE_SHORTREF.html) in the automation queue are not written to the data objects `rc`.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html