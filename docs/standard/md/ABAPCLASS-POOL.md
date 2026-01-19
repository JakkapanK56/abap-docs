---
title: "ABAPCLASS-POOL"
description: |
  ABAPCLASS-POOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-POOL.htm"
abapFile: "ABAPCLASS-POOL.html"
keywords: ["if", "method", "class", "data", "types", "ABAPCLASS", "POOL"]
---

[Short Reference](ABAPCLASS-POOL_SHORTREF.html)

`CLASS-POOL [MESSAGE-ID id].`

[`... MESSAGE-ID mid`](#ABAP_ONE_ADD@1@)

The statement `CLASS-POOL` introduces a [class pool](ABENCLASS_POOL_GLOSRY.html) for a [global class](ABENGLOBAL_CLASS_GLOSRY.html). It must be the first statement of a standalone program, after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) have been resolved.

Class pools are maintained in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) in the ABAP Workbench or with the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). A [master program](ABENMASTER_PROGRAM_GLOSRY.html) and associated [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are generated automatically. The statement `CLASS-POOL` is created in the master program.

The full name of the master program of a class pool in the [repository](ABENREPOSITORY_GLOSRY.html) starts with the name of the global class, is padded with the character `=` up to and including position 30, and ends with `CP`. The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings.

A class pool is organized in include programs as follows:

Unlike in [function pools](ABENFUNCTION_POOL_GLOSRY.html), the actual structure of a class pool constructed from include programs is not shown in the Class Builder.

[Local Types for Global Classes](ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.html)

The name of the master program of the class pool of the global class `CL_DEMO_CLASS_POOL` is `CL_DEMO_CLASS_POOL============CP`. The program `DEMO_SHOW_CP` shows the class pool and all related include programs, including the tool-internal helper programs.

This addition specifies a message class `mid` that allows the use of short forms of the statement [`MESSAGE`](ABAPMESSAGE.html) in the class pool in which only the message type and message number are specified. The message class must be specified directly and appear in the column `ARBGB` of the database table `T100`. The variants of the statement [`MESSAGE`](ABAPMESSAGE.html) in which the message class is specified override the addition `MESSAGE-ID`.

-   An include program with the ending `CCDEF` ([CCDEF include](ABENCCDEF_GLOSRY.html)) for class-relevant local definitions.
-   Three include programs for the [declaration part](ABENDECLARATION_PART_GLOSRY.html) of the global class:

-   An include program with the ending `CU` that contains the statement [`CLASS DEFINITION`](ABAPCLASS_DEFINITION.html) of the global class and its public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html).
-   An include program with the ending `CO` that contains the protected [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of the global class.
-   An include program with the ending `CI` that contains the private [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of the global class.

-   An include program with the ending `CCMAC` for [macros](ABENMACRO_GLOSRY.html).
-   An include program with the ending `CCIMP` ([CCIMP include](ABENCCIMP_GLOSRY.html)) for local definitions and implementations.
-   An include program with the ending `CCAU` ([test include](ABENTEST_INCLUDE_GLOSRY.html)) for local [test classes](ABENTEST_CLASS_GLOSRY.html).
-   An include program with the ending `CMnnn` where `nnn` is a numeric index for each method implementation of the global class.

-   The statements that are allowed in a class pool are listed under [Statements in Class Pools and Interface Pools](ABENCLASS_INTERACE_POOLS.html).
-   For technical reasons the class pool of a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that can be part of an inheritance tree that is

-   a [subclass](ABENSUBCLASS_GLOSRY.html)
-   a non-[final](ABENFINAL_GLOSRY.html) class that is not a subclass but can be a [superclass](ABENSUPERCLASS_GLOSRY.html)

-   must contain the `CO` and `CI` includes with the statements [`PROTECTED SECTION`](ABAPPROTECTED.html) and [`PRIVATE SECTION`](ABAPPRIVATE.html) also for empty protected and private sections.
-   Besides above include programs that actually make up the class pool, there are other include programs ending e.g. with `==CS` or `==CT`. These are internal helper objects of tools like ADT or Class Builder and are not included in the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html). For example, the include ending with `==CS` contains the [declaration part](ABENDECLARATION_PART_GLOSRY.html) and the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of the global class and is used for the source code based class builder.
-   It is not recommended manipulating a class pool with the statements of [dynamic program development](ABENABAP_LANGUAGE_DYNAMIC.html). Instead, appropriate APIs should be used.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html