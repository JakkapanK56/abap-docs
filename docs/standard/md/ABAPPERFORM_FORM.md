---
title: "ABAPPERFORM_FORM"
description: |
  ABAPPERFORM_FORM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPERFORM_FORM.htm"
abapFile: "ABAPPERFORM_FORM.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "ABAPPERFORM", "FORM"]
---

[Short Reference](ABAPPERFORM_SHORTREF.html)

`... subr`\\ 
  `|\ \{subr|(sname) IN PROGRAM \{prog|(pname)\}\ [IF FOUND]\}`\\ 
  `|\ \{n OF subr1 subr2 ...\} ...`

[1. `... subr ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... subr|(sname) IN PROGRAM \{prog|(pname)\}\ [IF FOUND] ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... n OF subr1 subr2 ...`](#ABAP_ALTERNATIVE_3@2@)

These names are used in the statement [`PERFORM`](ABAPPERFORM.html) to specify the called program and the ABAP program in which it is defined.

In addition to the alternatives shown here, there is another [obsolete form](ABAPPERFORM_OBSOLETE.html) of the external subroutine call.

When specified directly, `subr` calls any subroutine of the current program using its name declared in the statement [`FORM`](ABAPFORM.html). The subroutine must exist.

Call of a directly specified subroutine without parameters.

[`... IF FOUND`](#ABAP_ONE_ADD@1@)

The specification is used to call any subroutine of another program (external subroutine call). The subroutine and the program can be specified as follows:

Valid programs for external subroutine calls are [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), [module pools](ABENMODUL_POOL_GLOSRY.html), [function pools](ABENFUNCTION_POOL_GLOSRY.html), and [subroutine pools](ABENSUBROUTINE_POOL_GLOSRY.html). If an external subroutine is specified statically, the syntax check does not check whether the specified program and subroutine exist, and nor does it check the type of the program. If the addition `IF FOUND` is not specified, the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) reports any invalid or nonexistent programs or subroutines as errors. This also applies to names specified as constants or literals.

If the statically or dynamically specified subroutine or program does not exist at runtime and the addition `IS FOUND` is not specified, a catchable exception of the class `CX_SY_DYN_CALL_ILLEGAL_FORM` or `CX_SY_PROGRAM_NOT_FOUND` is raised.

If the specified program exists, it is loaded, if required, into the [internal session](ABENINTERNAL_SESSION_GLOSRY.html), raising the event [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html), and is searched for the specified subroutine.

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

If the addition `IF FOUND` is specified and the statically or dynamically specified subroutine or program does not exist at runtime, the catchable exception is prevented and the execution proceeds behind the statement `PERFORM`. Furthermore, the extended program check does not perform a check for the `PERFORM` statement.

If not already loaded, an existing program is loaded into the internal session independently from the addition `IF FOUND`.

With the addition `IF FOUND`, the statement `PERFORM` can trigger the execution of the event block [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html) even if no subroutine is performed.

Dynamic call of a subroutine of the same program without parameters.

If specified, this selects a subroutine `subr` of the current program from a list. The list `subr1 subr2 ...` can contain up to 256 directly specified subroutines. `n` expects a numeric data object containing a number between 1 and the specified number of subroutines when the statement is executed. The subroutine `subr` is called, whose list position is in `n`. In this variant, it is not possible to specify `parameter_list` and only subroutines without a parameter interface can be called.

This example calls `n` internal subroutines `subr_1` through `subr_n` successively from a list.

-   `subr`
-   Direct static specification as `subr`.
-   `(sname)`
-   Specification of the subroutine as the content of a character-like data object `sname`. The data object `sname` must contain the name of the subroutine in uppercase letters.
-   `prog`
-   Direct specification of the program as `prog` (static external subroutine call).
-   `(pname)`
-   Specification of the program as the content of a character-like data object `pname` (dynamic external subroutine call). The data object `pname` must contain the name of the program in uppercase letters. The following can be specified for `pname`:

-   Literal or constant
-   If the data object `pname` is specified as a character literal or as a constant, it can be evaluated statically, and the specified program is recognized as the used object.
-   Variable
-   If the data object `pname` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

-   When the statement is executed, `pname` is not evaluated until runtime (in both cases).

-   External calls of subroutines are almost completely obsolete. Instead of subroutines, methods and function modules can be used as explicit functional interfaces of a program.
-   Any subroutines defined in an [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) cannot be called externally by specifying the include program, since it cannot be generated as a standalone program. This type of subroutine can only be called by specifying the name of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) if the include program is included in the unit.
-   External calls of subroutines are critical, since it is usually not possible to statically determine which [program groups](ABENPROGRAM_GROUPS.html) are assigned to the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html).
-   The program name can also specify the current program. If no further addition is specified except `IN PROGRAM` (no `IF FOUND`, no [parameter list](ABAPPERFORM_PARAMETERS.html)), the program name can be omitted. Then, the name of the current program is used implicitly.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nPERFORM do\_something. \\n\\ \\n... \\n\\ \\nout->display( ). \\n\\ \\n\\ \\nFORM do\_something. \\n out->write( \`doing something\` ). \\nENDFORM. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(subr) = 'DO\_SOMETHING'. \\nFINAL(prog) = sy-repid. \\n\\ \\nPERFORM (subr) IN PROGRAM (prog) IF FOUND. \\n... \\nout->display( ). \\n\\ \\n\\ \\nFORM do\_something. \\n out->write( \`doing something\` ). \\nENDFORM. DATA n TYPE i. \\n\\ \\n... \\n\\ \\nDO n TIMES. \\n PERFORM sy-index OF subr\_1 subr\_2 ... . \\nENDDO. \\n\\ \\nFORM subr\_1. \\n ... \\nENDFORM. \\n\\ \\nFORM subr\_2. \\n ... \\nENDFORM. \\n\\ \\n... abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapperform.html abapperform\_general.html