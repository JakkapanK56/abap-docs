---
title: "ABENNEWS-778-EXCEPTIONS"
description: |
  ABENNEWS-778-EXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-778-EXCEPTIONS.htm"
abapFile: "ABENNEWS-778-EXCEPTIONS.html"
keywords: ["do", "method", "ABENNEWS", "778", "EXCEPTIONS"]
---

Exceptions of category `CX_NO_CHECK` are always declared implicitly in interfaces of procedures and can always be propagated.

Now it is also possible to declare exceptions of category `CX_NO_CHECK` with `RAISING` in procedure interfaces, for example for [methods](ABAPMETHODS_GENERAL.html). This allows it to document the possible occurrence of such exceptions and to change the category of existing exceptions to `CX_NO_CHECK` without leading to syntax errors in procedure interfaces.

abenabap.html abennews.html abennews-77.html abennews-778.html