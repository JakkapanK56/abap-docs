---
title: "Memory Consumption of Dynamic Memory Objects - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmem_cons_dyn_mem_obj_guidl.htm"
abapFile: "abenmem_cons_dyn_mem_obj_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Dynamic Programming Techniques](ABENDYNAMIC_PROG_TECHNIQUE_GUIDL.md) → 

Memory Consumption of Dynamic Memory Objects

Background

In dynamic objects, the actual data is addressed using a reference. This means that dynamic memory objects are always deep objects. Possible dynamic memory objects are:

-   Table bodies of internal tables addressed using internal table references

-   Text strings or byte strings addressed using internal string references

-   Anonymous data objects created using CREATE DATA and addressed using data references in data reference variables

-   Instances of classes created using CREATE OBJECT and addressed using object references in object reference variables

The maximum total size and number of all dynamically managed memory objects in an [internal session](ABENINTERNAL_SESSION_GLOSRY.md "Glossary Entry") are defined in principle by the maximum amount of memory that this session can request to execute programs.

Alongside the available memory on the current AS Instance, there are two further technical limits that can restrict the size of individual dynamic memory objects:

-   The upper limit is 2³¹-1 for the size of a string in bytes (in the character representation [UCS-2](ABENUCS2_GLOSRY.md "Glossary Entry") used by the ABAP programming language, every character in a string occupies 2 bytes) and the number of rows in an internal table.

-   The memory for the content of a string and for hash management of an internal hashed table must be provided as one piece. Therefore, the ztta/max\_ memreq\_mb profile parameter is relevant for these two memory object types. It defines the maximum amount of memory that can be requested as one piece. A maximum size for strings and a limitation on the number of rows in hashed tables can be directly derived from this amount. This limitation does not depend on the width of table rows. Only the hash management (and not the table content) must be provided as one piece in the memory. The current limitation is the highest power of two, which is less than or equal to an eighth of the value specified by the profile parameter. For example, if the profile parameter specifies 250MB, a hashed table can contain approximately 16 million rows.

Any attempt to exceed these limits produces a runtime error and the termination of the program.

Rule

Avoid memory bottlenecks

When using dynamic memory objects, ensure that the program is not terminated due to a lack of memory.

Details

Memory limits are fixed limitations that cannot be deactivated with programming. To avoid memory bottlenecks, we recommend that you account for:

-   The limits of the available physical memory when developing a program

-   The specified technical limits for strings and hashed tables

The only way to prevent memory limits from being exceeded is to use programming to restrict the data loaded into the memory. This applies to processing large data sets and also to object creation. The latter can produce memory bottlenecks if overly large objects or too many small objects are created. Memory leaks (unused, unreleased memory) can also cause memory problems.

Editing Large Data Sets
You need to process large data sets that are stored in a persistent repository as one piece, but the sets do not fit into the available memory. In this case, you must import and process these data sets, either in packages or sequentially. A common language element here is the PACKAGE SIZE addition. You can this addition when importing large data sets to internal tables with the ABAP SQL statement SELECT. Memory-saving processing of large strings (Large Object, LOB) in database tables is also possible. Locators enable you to access substrings of strings in database tables. Streaming allows a sequential and gradual transfer of data into the memory. Both concepts were predominantly introduced in ABAP to avoid memory bottlenecks.

Releasing Memory
The main advantage of dynamically managed memory is that it can be released again. Use this option to delete data and objects no longer required, to avoid memory leaks and possible memory bottlenecks:

-   You can delete strings using the CLEAR statement.

-   You can use CLEAR or FREE to delete internal tables. FREE releases the entire memory space occupied by rows, whereas the initial memory requirement of the table remains reserved if CLEAR is used. An appropriate size for the [initial memory requirement](ABENINITIAL_MEMORY_REQU_GUIDL.md "Guideline") is usually defined by the ABAP runtime environment itself. However, it can also be predefined using the INITIAL SIZE addition.

-   Anonymous data objects and instances of classes are deleted by the Garbage Collector, after all reference variables that refer to these objects have been initialized. Here, you must ensure that all references are actually identified during initialization. This is not always straightforward, particularly in the case of complex object networks. To analyze memory problems and detect memory leaks, you can use Memory Inspector and the ABAP Debugger memory analysis. You can display memory consumption rankings for all dynamically managed memory objects.

Note

Note that statically managed data objects can also involve unnecessary memory consumption. For example, large flat structures with unused or initial components, whose initial values require a lot of memory space. Here, strings that only contain blanks occupy 2 bytes for each blank. The situation can become particularly critical if these structures are combined with dynamic techniques (if they are used as internal table rows, for example). Consequently, boxed components were introduced. They support initial value sharing for initial substructures, which means that the initial value of a substructure is created only once in memory. For structures with substructures that have a sparse fill level, this can reduce memory consumption and copy costs significantly.

Bad Example

In the following source code, all the data in a very large database table is imported into an internal table. Here there is an obvious risk of memory bottlenecks.

SELECT \*
       FROM very\_large\_table
       INTO TABLE ...

Good Example

In the following source code, the PACKAGE SIZE addition is used. This restricts the maximum size of the internal table to a secure level.

SELECT \*
       FROM very\_large\_table
       INTO TABLE ... PACKAGE SIZE 1000.
       ENDSELECT.
