---
title: "ABENNEWS-752-ABAP_OBJECTS"
description: |
  ABENNEWS-752-ABAP_OBJECTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-752-ABAP_OBJECTS.htm"
abapFile: "ABENNEWS-752-ABAP_OBJECTS.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENNEWS", "752", "ABAP", "OBJECTS"]
---

When implementing interfaces in classes with the statement [`INTERFACES`](ABAPINTERFACES_CLASS.html), the following restrictions do not apply:

-   Methods and attributes of component interfaces of the implemented interface can now be specified after the additions `ABSTRACT METHODS`, `FINAL METHODS`, and `DATA VALUES` using the name of the component interface and the [interface component selector](ABENINTERFACE_COMP_SELECTOR_GLOSRY.html)`~`. Until now, this was only possible for methods by using an [alias name](ABENALIAS_GLOSRY.html), for attributes the interface itself had to be included.
-   Attributes that are declared in component interfaces can now be specified after the addition `DATA VALUES` by using [alias names](ABENALIAS_GLOSRY.html).

abenabap.html abennews.html abennews-75.html abennews-752.html