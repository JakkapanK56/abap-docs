---
title: "ABENNEWS-46-OBJECTS-ENTWICKLUNGEN"
description: |
  ABENNEWS-46-OBJECTS-ENTWICKLUNGEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-OBJECTS-ENTWICKLUNGEN.htm"
abapFile: "ABENNEWS-46-OBJECTS-ENTWICKLUNGEN.html"
keywords: ["delete", "loop", "do", "if", "case", "method", "class", "data", "internal-table", "ABENNEWS", "OBJECTS", "ENTWICKLUNGEN"]
---

In Release 4.6A the following components are added to the core ABAP Objects functions:

[1\. Creating Objects with Explicitly Specified Class](#ABAP_MODIFICATION_1@4@)

[2\. Non-Public Instantiation](#ABAP_MODIFICATION_2@4@)

[3\. Internal Tables as Collections](#ABAP_MODIFICATION_3@4@)

[4\. Functional Methods in Expressions](#ABAP_MODIFICATION_4@4@)

[5\. C Destructor](#ABAP_MODIFICATION_5@4@)

[6\. Change Process for Global Interfaces](#ABAP_MODIFICATION_6@4@)

[7\. Compiler Enhancements](#ABAP_MODIFICATION_7@4@)

[8\. Internal Optimizations](#ABAP_MODIFICATION_8@4@)

The statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) has two new variants that make it possible to specify the name of the class where the instance is created, both statically and dynamically. Previously, a reference variable with reference to the class had to be created before an object could be created. In the new variants of the statement `CREATE OBJECT`, any reference variables can be used that are compatible with the specified class.

The new additions `CREATE PROTECTED` and `CREATE PRIVATE` of the statement [`CLASS class DEFINITION`](ABAPCLASS.html) can be used to ensure that only the class itself or its subclasses can create instances of the class `class`. This makes instance management non-ambiguous.

If the line type of internal tables contains reference variables as components `comp`, the attributes `attr` of the object to which the reference of a line points can be used as key values for reading, sorting, and changing table lines. This is possible in the following statements:

If a table contains non-structured lines of the type of a reference variable, the attributes of the object to which a line points can be addressed using `table_line``->attr`.

[Functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) calls are supported for the following statements and expressions:

ABAP Objects does not support an instance destructor that can be implemented in ABAP. For special cases, and for internal use only, there is a destructor known as a [C destructor](ABENC_DESTRUCTOR.html).

If a method is missing in the implementation, the syntax check produces a warning message instead of an error message. If the method is called at runtime, it is canceled.

If an implemented method is not used, a warning message is produced instead of an error message. The code of the method is ignored.

The statement [`CLASS class DEFINITION LOAD`](ABAPCLASS_DEFERRED.html) is no longer required with the following statements:

From within a global superclass, a subclass can be referenced provided that the superclass does not address components of the subclass.

The following improvements were made:

-   `LOOP AT itab ... WHERE comp->attr ...`
-   `READ TABLE itab ... WITH [TABLE] KEY comp->attr = ...`
-   `SORT itab BY comp->attr ...`
-   `DELETE itab WHERE comp->attr ...`
-   `MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...`

-   In arithmetic expressions (`COMPUTE`)
-   In bit expressions (`COMPUTE`)
-   In relational expressions
-   In multiple queries (`CASE`, `WHEN`)
-   In loops (`LOOP`)
-   In assignments (`=`)

-   `CALL METHOD global_class=>method`
-   `SET HANDLER global_class=>method`
-   `METHODS m FOR EVENT e OF CLASS global_class`

-   Objects are now addressed indirectly using indexes instead of pointers. This makes the `ABAP data` layout platform-independent. In addition, this ensures object mobility as a basis for future developments such as:

-   Integrated persistence services
-   Shared memory objects
-   Destroy for objects
-   More compact memory management

-   Improved memory management is achieved because objects are managed without blocks. In addition, objects can be released individually.
-   [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) uses mark & sweep instead of reference counting, which enables cycles to be detected. This provides efficient support for the debugger in finding all references to a specific object.
-   Finally, a separate interface load has been introduced to relieve the load of the implementing classes from some of its tasks.

abenabap.html abennews.html abennews-4.html abennews-46a.html