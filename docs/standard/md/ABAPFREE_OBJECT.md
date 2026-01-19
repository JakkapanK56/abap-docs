---
title: "ABAPFREE_OBJECT"
description: |
  ABAPFREE_OBJECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFREE_OBJECT.htm"
abapFile: "ABAPFREE_OBJECT.html"
keywords: ["data", "ABAPFREE", "OBJECT"]
---

[Short Reference](ABAPFREE_OBJECT_SHORTREF.html)

`FREE OBJECT ole [NO FLUSH].`

[`... NO FLUSH`](#ABAP_ONE_ADD@1@)

This statement releases the memory occupied by the object `ole` on the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). The automation object must have been created using the special statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html) for automation objects. After the release, the object remains on the current automation server, but can no longer be processed in the ABAP program. The description of the statement `CREATE OBJECT` applies to the [typing](ABENTYPING_GLOSRY.html) of `ole`.

When the statement `FREE OBJECT` is passed to the presentation layer, the entire automation queue collected using the addition `NO FLUSH` is passed.

An automation object `ole` created using `CREATE OBJECT` must also be released using `FREE OBJECT` to avoid memory bottlenecks and terminations of the application.

The meaning of the addition `NO FLUSH` is included in the description of the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_OLE2.html).

Release of an Excel object.

DATA app TYPE ole2\_object. \\n\\ \\nCREATE OBJECT app 'Excel.Application' NO FLUSH. \\n... \\nFREE OBJECT app NO FLUSH. `sy-subrc` **Meaning** 0 Memory released successfully. 1 Error in communication with SAP GUI. 2 Error in function call in SAP GUI. abenabap.html abenabap\_reference.html abenabap\_screens.html abenfrontend\_services.html abenole2.html