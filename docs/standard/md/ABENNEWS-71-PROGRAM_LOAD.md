---
title: "The now rarely used statements"
description: |
  are no longer required From ABAP release 7.0, EhP2 these statements are ignored by ABAP Compiler and can be deleted. The statements are no longer required -   `CLASS ... DEFINITION LOAD.`(ABAPCLASS_INTERFACE_LOAD.html) -   `INTERFACE ... LOAD.`(ABAPCLASS_INTERFACE_LOAD.html) -   `CLASS ... DEFE
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-PROGRAM_LOAD.htm"
abapFile: "ABENNEWS-71-PROGRAM_LOAD.html"
keywords: ["delete", "if", "class", "data", "ABENNEWS", "PROGRAM", "LOAD"]
---

When compiling an ABAP program before ABAP release 7.0, EhP2, all associated include programs were loaded when first accessing a global class, a global interface, or a type pool. These includes contain declarations of the corresponding class, interface, or type pool which can be used globally.

From ABAP release 7.0, EhP2, these include programs are not loaded until an element declared in them is actually required. For example, a class `class` is no longer loaded when a `TYPE REF TO class` type reference is made, but when a component of the class is accessed or the class itself.

This internal optimization of ABAP Compiler has the following additional consequences:

[1. Statement `TYPE-POOLS` is Obsolete](#ABAP_MODIFICATION_1@4@) 

[2. Addition `LOAD` for `CLASS` and `INTERFACE` is Obsolete](#ABAP_MODIFICATION_2@4@) 

[3. Addition `PUBLIC` for `CLASS, INTERFACE DEFINITION DEFERRED` is Obsolete](#ABAP_MODIFICATION_3@4@)

The statement [`TYPE-POOLS`](ABAPTYPE-POOLS.html) is no longer required for the use of a data type, a constant, or a macro from a type pool. The elements of a type pool can now be addressed in the same way as all other objects in ABAP Dictionary without previously loading the type pool.

`TYPE-POOLS` statements are ignored by ABAP Compiler from ABAP release 7.0, EhP2, and can be deleted.

In list processing in particular, the include programs <LIST>, <SYMBOL>, <ICON>, <LINE>, and <COLOR> are no longer needed, since they only contain `TYPE-POOLS` statements.

The now rarely used statements

are no longer required

From ABAP release 7.0, EhP2 these statements are ignored by ABAP Compiler and can be deleted.

The statements

are no longer required

-   [`CLASS ... DEFINITION LOAD.`](ABAPCLASS_INTERFACE_LOAD.html)
-   [`INTERFACE ... LOAD.`](ABAPCLASS_INTERFACE_LOAD.html)

-   [`CLASS ... DEFERRED PUBLIC.`](ABAPCLASS_INTERFACE_DEF_PUB.html)
-   [`INTERFACE ... DEFERRED PUBLIC.`](ABAPCLASS_INTERFACE_DEF_PUB.html)

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html