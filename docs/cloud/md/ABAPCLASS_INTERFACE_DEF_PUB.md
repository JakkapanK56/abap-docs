---
title: "ABAPCLASS_INTERFACE_DEF_PUB"
description: |
  ABAPCLASS_INTERFACE_DEF_PUB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS_INTERFACE_DEF_PUB.htm"
abapFile: "ABAPCLASS_INTERFACE_DEF_PUB.html"
keywords: ["class", "ABAPCLASS", "INTERFACE", "DEF", "PUB"]
---

`CLASS class DEFINITION DEFERRED PUBLIC.  \  INTERFACE intf DEFERRED PUBLIC.`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

The variants of the statements [`CLASS DEFINITION DEFERRED`](ABAPCLASS_DEFERRED.html) and [`INTERFACE DEFERRED`](ABAPINTERFACE_DEFERRED.html) with the addition `PUBLIC` are obsolete.

The addition `PUBLIC` explicitly delays loading the class or interface until the end of the current program unit. Individual components of the class or interface can only be accessed after it has been loaded.

-   These statements were previously required to prevent unwanted recursions when referring to global classes.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenaddress\_obsolet.html