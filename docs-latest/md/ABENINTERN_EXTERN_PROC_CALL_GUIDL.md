---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINTERN_EXTERN_PROC_CALL_GUIDL.html"
abapFile: "ABENINTERN_EXTERN_PROC_CALL_GUIDL.html"
type: "abap-reference"
---

## Background

When a procedure is called, a distinction is made between *internal* and *external* procedure calls. An internal call calls a procedure of the same program, whereas an external call calls a procedure of a different program. The major difference between internal and external procedure calls is that the program might have to be loaded first for an external call. With internal calls, the program is already loaded. Possible external calls, where a program might have to be loaded, include:

-   Methods of global classes in class pools
-   Function modules in function pools
-   Subroutines in all programs that can contain subroutines (`PERFORM...IN PROGRAM`)
-   Methods of local classes, where the name of the class is specified dynamically using an absolute type name (`\PROGRAM= ... \CLASS=...`)

The programs loaded within an [internal session](ABENINTERNAL_SESSION_GLOSRY.md) are grouped into *program groups*. There is always one *main program group* and a number of optional *additional program groups*. Each program group contains a main program and possibly several additional programs (loaded due to external use). The loaded programs are not always the result of a call. The reason could also have to do with other references to components of external programs, such as a reference to a visible data type of a global class. The loaded programs are not always the result of a call. The reason could also have to do with other references to components of external programs, such as a reference to a visible data type of a global class.

If shared resources of the program group are accessed in an externally called procedure, the information about which program group the program was loaded into is very important. Whether a program creates a separate program group when loaded or whether it is loaded into an existing program group, largely depends on the program type:

-   Class pools and function pools (and external calls of global class methods or function modules) always create a new program group when loaded.
-   If subroutines or methods of local classes of other program types (not class pools and function pools) are called externally, the programs are loaded into the program group of the calling program.

## Rule

**Only call suitable procedures externally**

Only call procedures externally that are intended for external calls. The methods of global classes and function modules are intended for external calls. Subroutines and the methods of local classes are not designed for external calls.

## Details

The only procedures designed for external calls are the visible methods of global classes and function modules. The master programs of these procedures are always main programs of their program groups and the procedure always works with the resources of this program group.

However, external calls of subroutines and dynamic calls of methods in local classes of other programs are problematic. Usually, subroutines and local classes are intended for internal use within their program. External calls are not anticipated during the development phase. (On the other hand, no problems occur when an already loaded program deliberately passes a reference to an object of a local class to another program). Therefore, these subroutines and local classes should always be handled as private components of the program, even though they are technically public.

In addition, an assignment to a particular program group is not statically defined. Because the call order can depend on user actions or data content, the program of the called procedure can belong to the main program group in one instance and can belong to an additional program group in another instance. This does not define which program group the shared resources belong to. The shared resources are:

-   **Classic dynpros (including selection screens and classic lists) and GUI statuses**
-   The classic dynpros and GUI statuses are always shared within a program group (the classic dynpros and GUI statuses of the main program in this program group). For example, the `CALL SCREEN` statement in an externally called procedure always calls a dynpro of the main program of the program group and not a dynpro of the compilation unit of the procedure. The response to user actions in the dynpro (called as described above) is also handled in the main program of the program group.
-   **Interface work areas**
-   Interface work areas are defined as table work areas using the `TABLES` and `NODES` statements or using the obsolete statement `DATA ... COMMON PART`. They are only created once for each program group and are shared by the main program and the loaded additional programs.

## Hint

Except for the warning regarding dynamic calls of methods of local classes from other programs, this rule is basically intended to raise the awareness of problems when using existing programs. In new programs, the creation of new subroutines and the use of [shared resources](ABENTABLE_WORK_AREA_GUIDL.md) are largely obsolete anyway. The problems mentioned above can only occur if classic dynpros or selection screens (and therefore GUI statuses and table work areas) are used.

## Example

The following source code demonstrates how to assign interface work areas to program groups, in the case of external subroutine calls. The table work area `dbtab` declared in `sapssubr` is shared either with `sapmprog` or with `saplfugr`. If `share` has the value *'FUGR'*, `saplfugr` and `sapssubr` share the table work area. Otherwise it is shared by `sapmprog` and `sapssubr`. It is not possible to rely on a specific assignment.

```
*********************************** 
PROGRAM sapmprog. 
TABLES dbtab. 
... 
IF share = 'FUGR'. 
  CALL FUNCTION 'FUNC'. 
ENDIF. 
... 
PERFORM sub IN PROGRAM sapssubr. 
********************************************************************** 
FUNCTION-POOL saplfugr.  
TABLES dbtab. 
... 
FUNCTION func. 
  PERFORM sub IN PROGRAM sapssubr. 
ENDFUNCTION. 
********************************************************************** 
PROGRAM sapssubr. 
TABLES dbtab. 
... 
FORM sub. 
  ... 
ENDFORM. 
***********************************
```
