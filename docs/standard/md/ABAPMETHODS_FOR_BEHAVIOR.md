---
title: "ABAPMETHODS_FOR_BEHAVIOR"
description: |
  ABAPMETHODS_FOR_BEHAVIOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_FOR_BEHAVIOR.htm"
abapFile: "ABAPMETHODS_FOR_BEHAVIOR.html"
keywords: ["if", "method", "class", "ABAPMETHODS", "FOR", "BEHAVIOR"]
---

`\{ METHODS read   FOR BEHAVIOR ... \}\  |\ \{ METHODS modify FOR BEHAVIOR ... \}\  |\ \{ METHODS lock   FOR BEHAVIOR ... \}`

Obsolete declaration of [ABP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) in the [handler class](ABENABP_HANDLER_CLASS_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). When using the addition `FOR BEHAVIOR`, the methods must have one of the predefined names `modify`, `read`, or `lock`.

Instead the following declarations should be used:

Here, the name of the method is not prescribed. The meaning of the methods is defined by the addition `FOR MODIFY`, `FOR READ`, or `FOR LOCK` instead.

-   [`METHODS meth FOR READ ...`](ABAPMETHODS_FOR_RAP_BEHV.html)
-   [`METHODS meth FOR MODIFY ...`](ABAPMETHODS_FOR_RAP_BEHV.html)
-   [`METHODS meth FOR LOCK ...`](ABAPMETHODS_FOR_RAP_BEHV.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenrap\_obsolete.html abenabp\_obsolete.html