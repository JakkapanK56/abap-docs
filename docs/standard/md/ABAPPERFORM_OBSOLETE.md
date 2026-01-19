---
title: "ABAPPERFORM_OBSOLETE"
description: |
  ABAPPERFORM_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPERFORM_OBSOLETE.htm"
abapFile: "ABAPPERFORM_OBSOLETE.html"
keywords: ["do", "if", "case", "catch", "method", "class", "ABAPPERFORM", "OBSOLETE"]
---

[Short Reference](ABAPPERFORM_SHORTREF.html)

`PERFORM subr(prog) [IF FOUND]\ [[parameter_list](ABAPPERFORM_PARAMETERS.html)].`

A variant of the [external subroutine call](ABAPPERFORM_FORM.html) that is not allowed in classes. The statement `PERFORM` calls the statically specified subroutine `subr` of a statically specified program `prog`.

-   The existence of the specified program and subroutine is not checked by the syntax check. Only the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) reports a nonexistent program or subroutine as an error by default. If the addition `IF FOUND` is specified, the extended program check does not perform a check either.
-   If the specified subroutine or program does not exist at runtime, a catchable exception of the class `CX_SY_DYN_CALL_ILLEGAL_FORM` or `CX_SY_PROGRAM_NOT_FOUND` is raised by default. If the addition `IF FOUND` is specified, the statement `PERFORM` is skipped.

-   In this variant, the program name `prog` is specified directly in parentheses. Since parentheses in operand positions indicate a dynamic specification in all other cases, this form of the name is obsolete. The specification with the addition [`IN PROGRAM`](ABAPPERFORM_FORM.html) should be used instead.
-   External calls of subroutines are obsolete anyway. Instead of subroutines, methods and function modules can be used as explicit functional interfaces of a program.
-   Furthermore, external calls of subroutines are critical, since it cannot usually be statically determined to which [program groups](ABENPROGRAM_GROUPS.html) the compilation unit is assigned.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html