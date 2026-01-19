---
title: "ABAPCLASS_INTERFACE_LOAD"
description: |
  ABAPCLASS_INTERFACE_LOAD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_INTERFACE_LOAD.htm"
abapFile: "ABAPCLASS_INTERFACE_LOAD.html"
keywords: ["if", "class", "types", "ABAPCLASS", "INTERFACE", "LOAD"]
---

[Short Reference](ABAPCLASS_DEFERRED_LOAD_SHORTREF.html)

`CLASS class DEFINITION LOAD.  \  INTERFACE intf LOAD.`

The variants of the statements [`CLASS`](ABAPCLASS.html) and [`INTERFACE`](ABAPINTERFACE.html) with the addition `LOAD` are obsolete. The ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed because it contained recursive access to a global class or a global interface. These types of recursions are avoided since the introduction of lazy loading of programs in release 7.02 and a class or an interface is loaded automatically when a component is first accessed.

These variants of the statements `CLASS` and `INTERFACE` can also be specified in contexts other than the context described in [`CLASS`](ABAPCLASS.html) and [`INTERFACE`](ABAPINTERFACE.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenaddress\_obsolet.html