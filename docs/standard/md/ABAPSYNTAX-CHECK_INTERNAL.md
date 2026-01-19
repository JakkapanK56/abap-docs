---
title: "Statements included in the interface of a program"
description: |
  SYNT_FILTER_MCALL Statements that are required for method calls. DATA: prog_tab TYPE TABLE OF string, n message TYPE string, n line TYPE i, n word TYPE string, n warnings TYPE STANDARD TABLE OF rslinlmsg. n nSYNTAX-CHECK FOR prog_tab n MESSAGE message n LINE line n WORD wor
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-CHECK_INTERNAL.htm"
abapFile: "ABAPSYNTAX-CHECK_INTERNAL.html"
keywords: ["do", "if", "try", "method", "data", "internal-table", "ABAPSYNTAX", "CHECK", "INTERNAL"]
---

**These additions are for internal use only. \\nDo not use them in application programs.**

[1. `... SHORTDUMP-ID sid`](#ABAP_ADDITION_1@3@)

[2. `... TRACE-TABLE trt`](#ABAP_ADDITION_2@3@)

[3. `... REPLACING incl`](#ABAP_ADDITION_3@3@)

[4. `... FRAME ENTRY dir`](#ABAP_ADDITION_4@3@)

[5. `... ID id TABLE idt`](#ABAP_ADDITION_5@3@)

[6. `... FILTER flt`](#ABAP_ADDITION_6@3@)

If a runtime error occurs, the field `sid` returns the maximum 30-character key of the corresponding [short dump](ABENSHORT_DUMP_GLOSRY.html).

Any trace output is stored in the internal table `trt`. The trace output is controlled by the statements `SYNTAX-TRACE ON` and `SYNTAX-TRACE OFF`. A standard table without secondary keys can be specified for `trt`.

This addition can only be used together with the `PROGRAM` addition and under the following prerequisites:

The program text contained in the internal table `itab` does not include the compilation unit, it contains an [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) instead, and the program named under `PROGRAM` is to be checked. However, if the include program specified in `incl` is included in this program, the content of the internal table `itab` should be used instead.

The properties required for checking the program (e.g. [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), [program type](ABENPROGRAM_TYPE_GLOSRY.html)) are taken from the field `dir`. Here, `dir` expects a structure of type `TRDIR`.

This addition writes information to the internal table `idt`. The identifier `id` controls the type of information that is written to the associated table `itab`.

For correction proposals (`ID 'CORR'`), the type pool `SLIN` must be included. For other information, the type pool `SYNT` must be included. These type pools contain the required type specifications.

After `ID`, the following values can be entered for `id` that create the specified information:

**Information About Use in Internal SAP Development Tools**

If `ERR` (collection of error messages) is specified and the entire source code cannot be processed, `sy-subrc` is set to the value 6 instead of the value 4.

**Information About Use Only in Compiler-Related Tools**

This information should never be evaluated in general tools, since its structure can change at any time.

Other values after `ID` are undocumented, partially obsolete, and not released for use.

Collecting syntax warnings in a table.

Only the ABAP statements specified in `flt` are respected in the check. `flt` must have the type `SYNT_FILTER` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SYNT`.

Possible values are:

*SYNT\_FILTER\_INTERFACE*

Statements included in the interface of a program

*SYNT\_FILTER\_MCALL*

Statements that are required for method calls.

DATA: prog\_tab TYPE TABLE OF string, \\n message TYPE string, \\n line TYPE i, \\n word TYPE string, \\n warnings TYPE STANDARD TABLE OF rslinlmsg. \\n\\ \\nSYNTAX-CHECK FOR prog\_tab \\n MESSAGE message \\n LINE line \\n WORD word \\n PROGRAM '...' \\n ID 'MSG' TABLE warnings. **Value** **Information** **Value** **Information** `MSG` Warning messages `CORR` Correction proposals `ERR` Error messages `SYMB` Technical dump of the symbol table `DATA` Data objects of the program `DPAR` Help properties of data objects `TYPE` Type objects of program `FOTY` Type objects used by subroutines `FUTY` Type objects used by function modules `TYCH` Components of type objects `CROS` Referenced data objects `STR` Name `FORM` Subroutines `FPAR` Subroutine parameters (`FORM`) `PERF` Subroutine calls `APAR` Subroutine parameters (`PERFORM`) `FUNC` Function modules `FFPA` Function module parameter `CALL` Function module calls `FAPA` Function module parameters (`CALL FUNCTION`) `HYPH` Data objects with hyphens in names `INCL` Includes in program abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abapsyntax-check\_for\_itab.html