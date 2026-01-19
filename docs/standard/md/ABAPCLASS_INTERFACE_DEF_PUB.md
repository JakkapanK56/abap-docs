---
title: "ABAPCLASS_INTERFACE_DEF_PUB"
description: |
  ABAPCLASS_INTERFACE_DEF_PUB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_INTERFACE_DEF_PUB.htm"
abapFile: "ABAPCLASS_INTERFACE_DEF_PUB.html"
keywords: ["if", "class", "types", "ABAPCLASS", "INTERFACE", "DEF", "PUB"]
---

[Short Reference](ABAPCLASS_DEFERRED_LOAD_SHORTREF.html)

`CLASS class DEFINITION DEFERRED PUBLIC.  \  INTERFACE intf DEFERRED PUBLIC.`

The variants of the statements [`CLASS DEFINITION DEFERRED`](ABAPCLASS_DEFERRED.html) and [`INTERFACE DEFERRED`](ABAPINTERFACE_DEFERRED.html) with the addition `PUBLIC` are obsolete.

The addition `PUBLIC` explicitly delays loading the class or interface until the end of the current program unit. Individual components of the class or interface can only be accessed after it has been loaded.

An example of using the addition `DEFERRED PUBLIC` was a type pool in which a reference type is declared with reference to a global class, which itself contains components with references to this reference type. In this situation, the entire class cannot be loaded before the type pool, since the types are not yet known. After the statement `CLASS DEFINITION ... DEFERRED PUBLIC`, however, the class name can be specified after `REF TO` without the class having been loaded previously.

-   These statements were previously required to prevent unwanted recursions when referring to global classes.
-   The addition `PUBLIC` became obsolete with the introduction of lazy loading of programs in release 7.02.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenaddress\_obsolet.html