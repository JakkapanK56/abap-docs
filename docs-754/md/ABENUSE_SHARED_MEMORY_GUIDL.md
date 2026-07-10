---
title: "Using the Shared Memory - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_shared_memory_guidl.htm"
abapFile: "abenuse_shared_memory_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Data Storage](ABENDATA_STORAGE_GUIDL.md) → 

Using the Shared Memory

Background

The shared memory of an AS Instance is an highly important medium for buffering data with the goal of high-performance access. For this purpose, the shared memory can be used as follows:

-   To buffer data from database tables implicitly using [table buffering](ABENSAP_BUFFERING_GLOSRY.md "Glossary Entry"), which can be determined when defining the tables in ABAP Dictionary

-   To explicitly store data clusters in the cross-transaction application buffer using the statements EXPORT TO SHARED MEMORY or EXPORT TO SHARED BUFFER

-   To explicitly handle (data) objects stored there using shared objects, which are created using the addition AREA HANDLE of the statements CREATE OBJECT or CREATE DATA

Rule

Implement the explicit buffering in the shared memory using shared objects

Work with shared objects to explicitly use the shared memory for cross-program data buffering. The appropriate application scenarios are shared buffer and exclusive buffer. The access to shared objects should be wrapped in loader and broker classes.

Details

For explicit access to the shared memory, shared objects (CREATE AREA HANDLE) provide the following advantages compared to the cross-transaction application buffer (SHARED MEMORY, SHARED BUFFER):

-   Any number of (data) objects can be saved, including their mutual interdependencies.

-   (Data) objects can be used in the shared objects memory just like objects in the [internal session](ABENINTERNAL_SESSION_GLOSRY.md "Glossary Entry"). Technically, the shared objects memory can be considered an extension of the internal session during the time the memory is bound to it.

-   Multiple programs can access the same memory area simultaneously without having to copy data to their own internal session.

Scenarios in which shared objects can be used efficiently include the following:

-   Usage as a shared buffer
    A shared buffer contains a large data set on which many consumers can perform reads but which is changed rarely and is usually provided by a single program.

-   Usage as an exclusive buffer
    An exclusive buffer contains data that are accessed by only one program but that is maintained for various programs across transaction boundaries.

The shared memory should not be used for different purposes, if, for example this results in many modifying accesses of parallel consumers, since the current locking concept does not support this.

Access to the shared memory should be encapsulated in specific classes, and application programs should access the shared memory using these classes only. Normally, there are two classes, which can also be combined into one class:

-   A loader for creating and changing area instances

-   A broker for reads on area instances

Such wrapping ensures the following:

-   Central management of the connection of the internal session to the shared objects memory and the associated locks

-   Central exception handling and respective fallback strategies (for example, if the shared objects memory overflows, it is possible to ensure that objects in the internal session are used without the using program having to be notified of this).

-   Potential authorization checks

This makes the application program more legible, more robust, and easier to maintain.

Bad Example

The following source code shows how an internal table index\_table, which has been formatted elsewhere and buffered in the cross-transaction application buffer, is imported to a program. To store it locally, a local data object is required. Tasks like these can be performed more efficiently by using shared objects.

"Get index page from data cluster
IMPORT index\_html = index\_html
       FROM SHARED MEMORY docutables(...) ID ...
ASSERT sy-subrc = 0.

Good Example

The following source code shows how an internal table index\_table, which has been formatted elsewhere and buffered in the shared objects memory, can be accessed within program. By calling a get method, the corresponding broker ensures that its root attribute refers to a shared object that contains the table. A local data object is then not required to access the internal table in the program.

"Get index page from shared memory
cl\_docu\_tables\_broker=>get\_index\_table( ).
ASSERT cl\_docu\_tables\_broker=>root->index\_html
       IS NOT INITIAL.
