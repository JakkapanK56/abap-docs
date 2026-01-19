---
title: "ABENNEWS-740_SP08-ABAP_OBJECTS"
description: |
  ABENNEWS-740_SP08-ABAP_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-ABAP_OBJECTS.htm"
abapFile: "ABENNEWS-740_SP08-ABAP_OBJECTS.html"
keywords: ["do", "if", "method", "class", "ABENNEWS", "740", "SP08", "ABAP", "OBJECTS"]
---

The new addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html) of the statements [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html) can be used to make general methods, functional methods, plus event handlers of [interfaces](ABENOO_INTF_GLOSRY.html) optional. An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, a default behavior is specified for calls of non-implemented methods in the definition. `DEFAULT IGNORE` calls an empty method and `DEFAULT FAIL` raises an exception.

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html