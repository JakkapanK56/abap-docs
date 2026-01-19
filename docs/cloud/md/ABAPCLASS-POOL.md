---
title: "ABAPCLASS-POOL"
description: |
  ABAPCLASS-POOL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS-POOL.htm"
abapFile: "ABAPCLASS-POOL.html"
keywords: ["if", "class", "ABAPCLASS", "POOL"]
---

`CLASS-POOL [MESSAGE-ID id].`

[`... MESSAGE-ID mid`](#ABAP_ONE_ADD@1@)

The statement `CLASS-POOL` introduces a [class pool](ABENCLASS_POOL_GLOSRY.html) for a [global class](ABENGLOBAL_CLASS_GLOSRY.html). It must be the first statement of a standalone program, after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) have been resolved.

Class pools are maintained with the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). A [master program](ABENMASTER_PROGRAM_GLOSRY.html) and associated [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are generated automatically. The statement `CLASS-POOL` is created in the master program.

The full name of the master program of a class pool in the [repository](ABENREPOSITORY_GLOSRY.html) starts with the name of the global class, is padded with the character `=` up to and including position 30, and ends with `CP`. The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings.

The name of the master program of the class pool of the global class `CL_DEMO_CLASS_POOL` is `CL_DEMO_CLASS_POOL============CP`.

This addition specifies a message class `mid` that allows the use of short forms of the statement [`MESSAGE`](ABAPMESSAGE.html) in the class pool in which only the message type and message number are specified.

-   The statements that are allowed in a class pool are listed under [Statements in Class Pools and Interface Pools](ABENCLASS_INTERACE_POOLS.html).
-   For technical reasons the class pool of a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that can be part of an inheritance tree that is

-   a [subclass](ABENSUBCLASS_GLOSRY.html)
-   a non-[final](ABENFINAL_GLOSRY.html) class that is not a subclass but can be a [superclass](ABENSUPERCLASS_GLOSRY.html)

-   must contain the `CO` and `CI` includes with the statements [`PROTECTED SECTION`](ABAPPROTECTED.html) and [`PRIVATE SECTION`](ABAPPRIVATE.html) also for empty protected and private sections.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html