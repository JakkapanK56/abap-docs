---
title: "ABAPCALL_TRANSFORMATION_OBJECTS"
description: |
  ABAPCALL_TRANSFORMATION_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSFORMATION_OBJECTS.htm"
abapFile: "ABAPCALL_TRANSFORMATION_OBJECTS.html"
keywords: ["method", "internal-table", "ABAPCALL", "TRANSFORMATION", "OBJECTS"]
---

[Short Reference](ABAPCALL_TRANSFORMATION_SHORTREF.html)

`... OBJECTS \{o1 = e1 o2 = e2 ...\}|(otab) ...`

This addition of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) can be used to pass object references `e1 e2 ...` to an XSL transformation as external objects `o1 o2 ...` to call their methods here.

Instead of using a static parameter list, the objects can be passed dynamically as value pairs in the columns of the internal table `otab` with the type `abap_trans_objbind_tab` from the [type pool](ABENTYPE_POOL_GLOSRY.html) ABAP.

The addition `OBJECTS` is obsolete. External objects are handled like parameters and object references must be passed accordingly with the addition [`PARAMETERS`](ABAPCALL_TRANSFORMATION.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenextern\_obsolete.html abenabap\_xml\_obsolete.html