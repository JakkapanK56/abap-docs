---
title: "ABENNEWS-46-OBJECTS-DYNAMIC"
description: |
  ABENNEWS-46-OBJECTS-DYNAMIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-OBJECTS-DYNAMIC.htm"
abapFile: "ABENNEWS-46-OBJECTS-DYNAMIC.html"
keywords: ["method", "class", "ABENNEWS", "OBJECTS", "DYNAMIC"]
---

In Release 4.6A, the kernel functions of ABAP Objects are enhanced by dynamic method calls (or dynamic invoke).

In addition to the old static [access](ABENCLASS_COMPONENTS_ADDRESSING.html), methods can now also be addressed dynamically using the usual ABAP parenthesis semantics.

`f` and `c` are fields containing the name of the method `meth` or class `class`.

In contrast to subroutines and function modules, the actual parameters can also be passed dynamically in dynamic [method calls](ABAPCALL_METHOD_DYNAMIC.html).

-   Calling an instance method `meth`:
-   `CALL METHOD ref->(f)`
-   Calling a static method `meth`:
-   `CALL METHOD class=>(f)`
-   `CALL METHOD (c)=>meth`
-   `CALL METHOD (c)=>(f)`
-   Calling a method within the same class `meth`:
-   `CALL METHOD (f)`
-   `CALL METHOD ME->(f)`

abenabap.html abennews.html abennews-4.html abennews-46a.html