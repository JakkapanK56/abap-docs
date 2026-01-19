---
title: "ABAPINTERFACE-POOL"
description: |
  ABAPINTERFACE-POOL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINTERFACE-POOL.htm"
abapFile: "ABAPINTERFACE-POOL.html"
keywords: ["if", "class", "ABAPINTERFACE", "POOL"]
---

`INTERFACE-POOL.`\\ 

The statement `INTERFACE-POOL` introduces an [interface pool](ABENINTERFACE_POOL_GLOSRY.html) for a [global interface](ABENGLOBAL_INTERFACE_GLOSRY.html). It must be the first statement of an interface pool after any [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) are resolved.

Interface pools are maintained exclusively with the Class Builder tool in the ABAP Workbench or with the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). A [master program](ABENMASTER_PROGRAM_GLOSRY.html) and an associated [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) are generated automatically. The statement `INTERFACE-POOL` is created in the master program.

The full name of the master program of an interface pool in the [repository](ABENREPOSITORY_GLOSRY.html) starts with the name of the global interface, is padded with the character `=` up to and including position 30, and ends with `IP`.

The name of the include program of an interface pool included by the master program is constructed in exactly the same way as the name of the interface pool itself, however with an different ending.

The name of the master program of the interface pool of the global interface `IF_DEMO_INTERFACE_POOL` is `IF_DEMO_INTERFACE_POOL========IP` and it includes `IF_DEMO_INTERFACE_POOL========IU`.

-   The statements that are allowed in an interface pool are listed under [Statements in Class Pools and Interface Pools](ABENCLASS_INTERACE_POOLS.html).

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_program\_statement.html