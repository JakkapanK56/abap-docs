---
title: "ABAPFUNCTION-POOL"
description: |
  ABAPFUNCTION-POOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFUNCTION-POOL.htm"
abapFile: "ABAPFUNCTION-POOL.html"
keywords: ["do", "if", "method", "class", "data", "ABAPFUNCTION", "POOL"]
---

[Short Reference](ABAPFUNCTION-POOL_SHORTREF.html)

``FUNCTION-POOL fpool [[`list_options`](ABAPREPORT_LIST_OPTIONS.html)]``\\ 
                    `[MESSAGE-ID mid].`

[`... MESSAGE-ID mid`](#ABAP_ONE_ADD@1@)

The statement `FUNCTION-POOL` introduces a [function pool](ABENFUNCTION_POOL_GLOSRY.html). It must be the first statement of a standalone program after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are resolved.

Function pools are maintained using the [Function Builder](ABENFUNCTION_BUILDER_GLOSRY.html) tool in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html), where a [master program](ABENMASTER_PROGRAM_GLOSRY.html) and subordinate [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are generated automatically. The statement `FUNCTION-POOL` is created in the [top include](ABENTOP_INCLUDE_GLOSRY.html).

The full name of the master program of a function pool in the [repository](ABENREPOSITORY_GLOSRY.html) consists of the prefix `SAPL` and the name `fpool` of the statement `FUNCTION-POOL`.

A function pool is used as a framework for [function modules](ABENFUNCTION_MODULE_GLOSRY.html) and is organized in include programs as follows.

The periods `..` represent a two-digit number. The functionality of the Function Builder is based on compliance with this naming convention.

It is not recommended manipulating a function pool with the statements of [dynamic program development](ABENABAP_LANGUAGE_DYNAMIC.html). Instead, appropriate APIs should be used.

Structure of the function pool `SAPLABAP_DOCU` from include programs:

The function pool includes the top include at the first position, which contains the statement `FUNCTION-POOL` and other include programs for data and class declarations:

This addition specifies a message class `mid` that allows the use of short forms of the statement [`MESSAGE`](ABAPMESSAGE.html) in the function pool in which only the message type and message number are specified. The message class must be specified directly and appear in the column `ARBGB` of the database table `T100`. The variants of the statement [`MESSAGE`](ABAPMESSAGE.html) in which the message class is specified override the addition `MESSAGE-ID`.

-   A top include with the prefix `L` and the ending `TOP` in the declaration part of the function pool.
-   Optional include programs with the prefix `L` and the ending `D..` for the declaration of local classes within the top include.
-   An include program with the prefix `L` and the ending `UXX` in the implementation part of the function pool. This include program includes include programs with the ending `U..` for the implementation of each [function module](ABENFUNCTION_MODULE_GLOSRY.html) of the function pool. This structure must not be changed.
-   Optional include programs with the prefix `L` and the ending `P..` for the implementation of the methods of local classes in the implementation part of the function pool.
-   Optional include programs with the prefix `L` and the ending `O..` for the implementation of [PBO](ABENPBO_GLOSRY.html) modules in the implementation part of the function pool.
-   Optional include programs with the prefix `L` and the ending `I..` for the implementation of [PAI](ABENPAI_GLOSRY.html) modules in the implementation part of the function pool.
-   Optional include programs with the prefix `L` and the ending `E..` for the implementation of [event blocks](ABENEVENT_BLOCK_GLOSRY.html) in the implementation part of the function pool.
-   Optional include programs with the prefix `L` and the ending `F..` for the implementation of [subroutines](ABENSUBROUTINE_GLOSRY.html) in the implementation part of the function pool.

\*&---------------------------------------------------------------------\* \\n\*& Function Pool SAPLABAP\_DOCU \\n\*&---------------------------------------------------------------------\* \\n\\ \\nINCLUDE labap\_docutop. " Global Declarations \\n\\ \\nINCLUDE labap\_docue00. " Load of Program \\n\\ \\nINCLUDE labap\_docuuxx. " Function Modules \\n\\ \\nINCLUDE labap\_docuo01. " PBO Modules \\n\\ \\nINCLUDE labap\_docui01. " PAI Modules \\n\\ \\nINCLUDE labap\_docue01. " Handling of Runtime-Events \\n\\ \\nINCLUDE labap\_docup01. " Class implementations \\nINCLUDE labap\_docup02. \\nINCLUDE labap\_docup03. \\nINCLUDE labap\_docup04. \*&---------------------------------------------------------------------\* \\n\*& Include LABAP\_DOCUTOP \\n\*&---------------------------------------------------------------------\* \\n\\ \\nFUNCTION-POOL abap\_docu. \\n\\ \\nINCLUDE labap\_docud00. " Global Data for Screens \\n\\ \\nINCLUDE labap\_docud01. " Classes for Docu Display abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html