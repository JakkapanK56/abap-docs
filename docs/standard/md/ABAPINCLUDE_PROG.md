---
title: "ABAPINCLUDE_PROG"
description: |
  ABAPINCLUDE_PROG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINCLUDE_PROG.htm"
abapFile: "ABAPINCLUDE_PROG.html"
keywords: ["do", "if", "class", "data", "ABAPINCLUDE", "PROG"]
---

[Short Reference](ABAPINCLUDE_SHORTREF.html)

`INCLUDE incl [IF FOUND].`

[`... IF FOUND`](#ABAP_ONE_ADD@1@)

The statement `INCLUDE` includes the [include program](ABENINCLUDE_PROGRAM_GLOSRY.html)\\ `incl` at this position in the source code. In syntax checks and the generation of the program by the ABAP Compiler, the statement is replaced by the source code of the include program. The included `INCLUDE` program must consist of full statements.

If the specified include program does not exist, the program is syntactically incorrect and cannot be executed. This error situation can be suppressed by specifying the addition `IF FOUND`.

The addition `IF FOUND` specifies that the specified [include program](ABENINCLUDE_PROGRAM_GLOSRY.html) is only included if it exists. If the include program does not exist, the `INCLUDE` statement is ignored and no syntax error occurs at this position.

If the addition `IF FOUND` is specified, the including program should not be dependent on the source code of the include program. Otherwise, the include program may be syntactically correct in systems where it exists but incorrect in other systems.

These lines show the [master program](ABENMASTER_PROGRAM_GLOSRY.html) of the function pool `ABAP_DOCU`, which represents the ABAP Keyword Documentation in [SAP GUI](ABENSAP_GUI_GLOSRY.html). It only contains `INCLUDE` statements that include the actual source code, where `labap_docutop` itself is made up of include programs for the individual declarations (global data and class declarations local to the program).

-   [Modularize source code with include programs.](ABENSOURCE_CODE_MODULAR_GUIDL.html)
-   [Do not use include programs multiple times](ABENMULTIPLE_USE_INCLUDE_GUIDL.html)

-   The statement `INCLUDE` is the only statement that can be used at the first position of a program instead of a [statement that introduces a program](ABENPROGRAM_INIT_STATEMENT_GLOSRY.html). The requirement for this is that, after the include program is resolved, a statement that introduces a program is positioned at the start of the including program.
-   [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) supports the automatic creation of include programs for specific program parts, such as the [top include](ABENTOP_INCLUDE_GLOSRY.html) for global declarative statements. It is recommended that the naming conventions proposed by the ABAP Workbench are always used. The top include can contain only declarative statements and is respected when individual include programs of a program are compiled.
-   In the [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) of the Object Navigator of the ABAP Workbench, the `INCLUDE` programs included by a program are listed as its subnodes.

\*&----------------------------------------------------------------\* \\n\*& Function Pool SAPLABAP\_DOCU \\n\*&----------------------------------------------------------------\* \\n\\ \\n INCLUDE labap\_docutop. " Global Declarations \\n\\ \\n INCLUDE labap\_docue00. " Load of Program \\n\\ \\n INCLUDE labap\_docuuxx. " Function Modules \\n\\ \\n INCLUDE labap\_docuo01. " PBO Modules \\n\\ \\n INCLUDE labap\_docui01. " PAI Modules \\n\\ \\n INCLUDE labap\_docue01. " Handling of Runtime-Events \\n\\ \\n INCLUDE labap\_docup01. " Class implementations \\n INCLUDE labap\_docup02. \\n INCLUDE labap\_docup03. \\n INCLUDE labap\_docup04. \\n\\ \\n INCLUDE labap\_docut99. " Unit tests abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_includes.html abenabap\_language\_include.html