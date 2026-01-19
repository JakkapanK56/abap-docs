---
title: "ABAPTABLES"
description: |
  ABAPTABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTABLES.htm"
abapFile: "ABAPTABLES.html"
keywords: ["if", "class", "data", "ABAPTABLES"]
---

[Short Reference](ABAPTABLES_SHORTREF.html)

`TABLES table_wa.`

This statement is not allowed in classes and declares a data object `table_wa` as a table work area whose data type is taken from the identically named structured data type `table_wa` from the ABAP Dictionary. `table_wa` must be defined as a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) in the ABAP Dictionary. Either DDIC database tables or [DDIC views](ABENDDIC_VIEW_GLOSRY.html) with flat components can be specified for `table_wa`.

Table work areas declared using `TABLES` are [interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html) and should only be declared in the global declaration part of a program for the following purpose:

[No table work areas except for classic dynpros](ABENTABLE_WORK_AREA_GUIDL.html)

Declaration of a table work area `demo_conn` with reference to the identically named dictionary structure `DEMO_CONN` in a [module pool](ABENMODUL_POOL_GLOSRY.html).

-   The statement `TABLES` is required for exchanging data between [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) and the ABAP program, if the fields were defined in a dynpro of the program by being taken from the ABAP Dictionary. In the dynpro event [PBO](ABENPBO_GLOSRY.html), the content of the table work area is passed to identically named dynpro fields. In [PAI](ABENPAI_GLOSRY.html), the system takes the data from identically named dynpro fields.
-   In [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), flat table work areas can be used to copy the data that is provided for the event [`GET table_wa`](ABAPGET-.html) by a linked [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). `TABLES` is synonymous with the statement [`NODES`](ABAPNODES.html) for this purpose.

-   Table work areas declared using `TABLES` behave like shared data declared using the addition [`COMMON PART`](ABAPDATA_COMMON.html). They are shared by the programs of a [program group](ABENPROGRAM_GROUP_GLOSRY.html). This feature should not be exploited for reasons outlined in [Program Groups in External Procedure Calls](ABENPROGRAM_GROUPS.html).
-   Table work areas declared using `TABLES` can be declared in subroutines and function modules, however this is not recommended. A table work area declared in a [procedure](ABENPROCEDURE_GLOSRY.html) is not local but belongs to the context of a [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html). It is visible in the compilation unit as soon as it is declared and lives for as long as the compilation unit. In contrast to regular program-global data, the content of the table work areas declared in subroutines and function modules is stored temporarily when these are called. Assignments that are made during the runtime of the procedure are preserved only until the procedure is completed. When the procedure is exited, the table work areas are filled with the content that they contained when the procedure was called. Table work areas declared in procedures behave like global data to which the statement [`LOCAL`](ABAPLOCAL.html) is applied in the procedure.
-   It is recommended that `NODES` and not `TABLES` is always used for interface work areas for logical databases. This makes it clear that they are nodes of logical databases.
-   A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) cannot be specified after `TABLES`. A [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) should not be specified, since the usage of CDS-managed DDIC views is [obsolete](ABENCDS_ACCESS_OBSOLETE.html).
-   The variant [`TABLES *`](ABAPTABLES_ASTERISK.html) is completely obsolete.

PROGRAM demo\_dynpro\_module. \\n\\ \\nTABLES demo\_conn. \\n\\ \\n... abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html