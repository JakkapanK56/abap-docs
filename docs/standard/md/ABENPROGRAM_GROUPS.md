---
title: "ABENPROGRAM_GROUPS"
description: |
  ABENPROGRAM_GROUPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROGRAM_GROUPS.htm"
abapFile: "ABENPROGRAM_GROUPS.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENPROGRAM", "GROUPS"]
---

The programs within an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) form [program groups](ABENINTERNAL_SESSION.html) there. There is always one [main program group](ABENMAIN_PROGRAM_GROUP_GLOSRY.html) and possibly multiple [additional program groups](ABENADDITIONAL_PROG_GROUP_GLOSRY.html). Each program group contains a main program and any other programs loaded. If, during an external procedure call, the procedure accesses shared resources of the program group, it is important to know the program group of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) of the procedure. This determines whether non-critical external procedure calls and critical external procedure calls are made.

The only procedures intended for external calls are the visible methods of global classes and function modules. The compilation units of these procedures are always [main programs](ABENMAIN_PROGRAM_GLOSRY.html) of their program groups and it is always determined that the procedures work with the resources of this program group.

For this reason, only the methods of global classes and function modules should be called externally.

Subroutines and the methods of local classes are not intended for external calls. Both in external subroutine calls and in dynamic calls of the local class of a program that does not create its own program group, there is no static assignment to a program group. The program in which a program that is yet to be loaded is used for the first time determines the program group. The order of the user actions, field content, or switches can determine the order of usage, which means that the compilation unit of the procedure can belong to the main program group in one instance, and to an additional program group in another instance.

The way external procedures of additionally loaded programs are used is critical for the following reasons:

This means there is no static way of determining which interface work areas and which screens are used by an externally called subroutine or local class. The following figure shows how programs are loaded into program groups, using the example of an external subroutine call.

Subroutines and methods of local classes must always be called internally and never externally.

The [text elements](ABENTEXT_ELEMENT_GLOSRY.html) of an additionally loaded program are always taken from its own [text pool](ABENTEXT_POOL_GLOSRY.html).

The table work area `dbtab` declared in `sapssubr` is shared either with `sapmprog` or with `saplfugr`. If `share` has the value `'FUGR'`, `saplfugr` and `sapssubr` share the table work area. Otherwise, it is shared by `sapmprog` and `sapssubr`.

PROGRAM sapmprog.\\ 
TABLES dbtab.\\ 
...\\ 
IF share = 'FUGR'.\\ 
  CALL FUNCTION 'FUNC'.\\ 
ENDIF. \\ 
...\\ 
PERFORM sub IN PROGRAM sapssubr.

FUNCTION-POOL saplfugr.  
TABLES dbtab.\\ 
...\\ 
FUNCTION func.\\ 
  PERFORM sub IN PROGRAM sapssubr.\\ 
ENDFUNCTION.

PROGRAM sapssubr.   
TABLES dbtab.\\ 
...\\ 
FORM sub.\\ 
  ...\\ 
ENDFORM.

-   Within a program group, only the [dynpros](ABENDYNPRO_GLOSRY.html), [selection screens](ABENSELECTION_SCREEN_GLOSRY.html), [lists](ABENCLASSIC_LIST_GLOSRY.html), and [GUI statuses](ABENGUI_STATUS_GLOSRY.html) of the main program are used. For example, the statement [`CALL SCREEN`](ABAPCALL_SCREEN.html) does not call any dynpros of its own compilation unit in an externally called subroutine of another loaded program and calls a dynpro of the main program of its program group instead. The responses to user actions are also raised in the main program.
-   [Interface work areas](ABENINTERFACE_WORK_AREA_GLOSRY.html) declared using the statements [`TABLES`](ABAPTABLES.html), [`NODES`](ABAPNODES.html), or [`DATA BEGIN OF COMMON PART`](ABAPDATA_COMMON.html) are only created once for each program group and are shared by all of its programs. Each main program shares the interface work area with additionally loaded programs.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abencall\_procedures\_extern.html