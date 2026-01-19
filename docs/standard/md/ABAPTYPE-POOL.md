---
title: "Type pools can only contain the statements"
description: |
  Here, the declared data types, constants, and macros(ABENMACRO_GLOSRY.html) must start with the prefix `tpool` of the type pool. The elements declared in a type pool can be addressed statically or dynamically by their name in every ABAP program in which the type pool can be used. This program is l
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPE-POOL.htm"
abapFile: "ABAPTYPE-POOL.html"
keywords: ["do", "class", "data", "types", "ABAPTYPE", "POOL"]
---

[Short Reference](ABAPTYPE-POOL_SHORTREF.html)

`TYPE-POOL tpool.`

The statement `TYPE-POOL` introduces a [type pool](ABENTYPE_POOL_GLOSRY.html) called `tpool`. It must be the first statement of a type pool after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are resolved. Type pools are only defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) tool in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html), where an ABAP program is generated automatically, including the statement `TYPE-POOL`. The actual name of the program of a type pool in the repository does not completely match the name of the type pool and is only relevant internally.

Type pools can only contain the statements

Here, the declared data types, constants, and [macros](ABENMACRO_GLOSRY.html) must start with the prefix `tpool` of the type pool. The elements declared in a type pool can be addressed statically or dynamically by their name in every ABAP program in which the type pool can be used. This program is loaded when an element of a type pool is first accessed.

Type pools with the definition of a table type.

-   [`INCLUDE`](ABAPINCLUDE_PROG.html),
-   [`INCLUDE TYPE|STRUCTURE`](ABAPINCLUDE_TYPE.html)
-   [`TYPES`](ABAPTYPES.html),
-   [`CONSTANTS`](ABAPCONSTANTS.html),
-   [`DEFINE`](ABAPDEFINE.html) and [`END-OF-DEFINITION`](ABAPEND-OF-DEFINITION.html)
-   [`CLASS ... DEFINITION DEFERRED PUBLIC`](ABAPCLASS_DEFERRED.html)

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary.
-   Since you can also define data types and constants in the public visibility section of global classes, type pools are obsolete and should no longer be created. Existing type pools can still be used.
-   To avoid conflicts in the type reference with the addition `LIKE`, you must ensure that constants in type pools do not have the same name as existing flat structures or database tables in ABAP Dictionary.
-   The name of a type pool can contain a maximum of five characters.
-   Previously, type pools had to be declared in ABAP programs using the [`TYPE-POOLS`](ABAPTYPE-POOLS.html) statement before their elements could be accessed statically or dynamically. This restriction is now obsolete. The statement `TYPE-POOLS` is no longer necessary.

TYPE-POOL mytgr. \\nTYPES mytgr\_spfli\_tab TYPE HASHED TABLE \\n OF spfli \\n WITH UNIQUE KEY carrid connid. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html