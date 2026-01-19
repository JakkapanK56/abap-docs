---
title: "ABAPTYPE-POOLS"
description: |
  ABAPTYPE-POOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPE-POOLS.htm"
abapFile: "ABAPTYPE-POOLS.html"
keywords: ["delete", "if", "class", "data", "types", "ABAPTYPE", "POOLS"]
---

[Short Reference](ABAPTYPE-POOLS_SHORTREF.html)

`TYPE-POOLS tpool.`

This statement is obsolete. It is checked for correct syntax but otherwise ignored by the ABAP Compiler.

The statement `TYPE-POOLS` was required in the past to load the elements of a [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `tpool` explicitly in the current context. It could be specified for the global data declaration of an ABAP program or in the declaration part of a class or an interface.

Now a type pool is loaded automatically when one of its elements is first accessed in a program.

-   After a type pool is loaded, the data types declared there hide identically named data types in the ABAP Dictionary which are not declared in the type pool. Previously, the pool was loaded explicitly using `TYPE-POOLS`. Since the statement `TYPE-POOLS` is no longer effective, regular data types from the ABAP Dictionary now hide identically named data types in a type pool until the type pool is loaded when accessing a non-hidden element. Creating identically named types in the ABAP Dictionary and in type pools has been forbidden for a long time however, so this situation should therefore no longer occur.
-   Previously, [macros](ABENMACRO_GLOSRY.html) defined in type pools only hide identically named macros from the database table `TRMAC` once the type pool had been loaded explicitly using the statement `TYPE-POOLS`. Now macros defined in type pools always hide identically named macros from the database table `TRMAC`. Due to different naming conventions however, this situation should not occur.
-   The syntax check no longer checks whether the specified type pool `tpool` actually exists.
-   The statement `TYPE-POOLS` can still be used to migrate current programs to lower releases. Otherwise it can be deleted.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenaddress\_obsolet.html