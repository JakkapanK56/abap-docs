---
title: "ABENINTERNAL_SESSION"
description: |
  ABENINTERNAL_SESSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINTERNAL_SESSION.htm"
abapFile: "ABENINTERNAL_SESSION.html"
keywords: ["do", "if", "class", "data", "ABENINTERNAL", "SESSION"]
---

The following figure shows the organization of programs within an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of an [ABAP session](ABENABAP_SESSION_GLOSRY.html) in a [user session](ABENUSER_SESSION_GLOSRY.html) of an [AS instance](ABENAS_INSTANCE_GLOSRY.html).

Multiple programs organized in program groups can be loaded into an internal session. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of this internal session.

When an internal session is created by [calling an ABAP program](ABENABAP_PROGRAM_CALL.html) using [`SUBMIT`](ABAPSUBMIT.html) or a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html), the main program group is created and the called program is its main program. The entire internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html), a [module pool](ABENMODUL_POOL_GLOSRY.html), or a [function pool](ABENFUNCTION_POOL_GLOSRY.html).

Each time a new [class pool](ABENCLASS_POOL_GLOSRY.html) or a new [function pool](ABENFUNCTION_POOL_GLOSRY.html) is loaded by external use, an additional program group is created and the class pool or the function pool is the main program of the additional program group. An external usage is usually an access to components that are exposed by class pool or function group (these are the visible components of the global class or function module), however, can also be an access to local components, such as when a type is specified using [absolute type names](ABENABSOLUTE_TYPENAME_GLOSRY.html). An additional program group is preserved for the entire lifetime of the internal session.

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function pool). The main program of an additional program group is a class pool or a function pool for which the additional program group is created during its loading.

When programs that are not function pools or class pools are loaded by an external usage, they do not form additional program groups; instead they are loaded into the program group of the user. This happens, for example:

The [data objects](ABENDATA_OBJECT_GLOSRY.html) of a program, except for the [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html), belong exclusively to their program and are only visible there. A loaded program exists for as long as the internal session exists. After returning from a program, its data objects are retained and are available when a [procedure](ABENPROCEDURE_GLOSRY.html) of the program is called again.

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for and hence references to the object.

This means that references to objects of the internal session can be passed to externally called procedures.

Data objects declared using [`TABLES`](ABAPTABLES.html) or [`DATA BEGIN|END OF COMMON PART ...`](ABAPDATA_COMMON.html) are [interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html). They are only created once per program group and are shared by all programs of a program group together.

The assignment of a program to a program group, and thus the definition of the other programs with which it shares the interface work area, can depend on the usage sequence.

Only the [dynpros](ABENDYNPRO_GLOSRY.html) of the main program of a program group can be called using [`CALL SCREEN`](ABAPCALL_SCREEN.html). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function pools) of additional program groups can also call their own dynpros.

[Lists](ABENCLASSIC_LIST_GLOSRY.html) are always assigned to the current [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) and therefore also to the main program of the program group.

By default, [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html) is used to access the [GUI status](ABENGUI_STATUS_GLOSRY.html) of the main program of a program group and uses its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement `CALL SCREEN` in an externally called subroutine, for example, never calls a dynpro of its own compilation unit. The dialog modules and list event blocks of the main program are executed.

-   During the external call of subroutines that are defined in executable programs, module pools or subroutine pools
-   When using the dynpro statement [`CALL SUBSCREEN sub_area INCLUDING prog`](CALL.html), if the dynpro is not defined in a function pool
-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](ABENABSOLUTE_TYPENAME_GLOSRY.html)
-   For statements such as [`SET PF-STATUS OF PROGRAM`](ABAPSET_PF-STATUS_DYNPRO.html), if the program of the required component is not a function pool.

-   To assign a program to a program group, the [program-initiating statement](ABENPROGRAM_INIT_STATEMENT_GLOSRY.html) and not the [program type](ABENPROGRAM_TYPE_GLOSRY.html) is of importance. For example, if the statement [`FUNCTION-POOL`](ABAPFUNCTION-POOL.html) is used in a subroutine pool instead of [`PROGRAM`](ABAPPROGRAM.html), the program creates an additional program group when it is loaded by external usage.
-   The assignment of an additional program to its program group is particularly important if procedures of this program are [called externally](ABENPROGRAM_GROUPS.html), since all the programs of a program group use the interface work areas, the dynpros, lists, and GUI status of the main program (see below for more information).

abenabap.html abenabap\_reference.html abenabap\_oview.html abenorganization\_of\_modules.html