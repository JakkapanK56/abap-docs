---
title: "ABENABAP_SUBROUTINES"
description: |
  ABENABAP_SUBROUTINES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SUBROUTINES.htm"
abapFile: "ABENABAP_SUBROUTINES.html"
keywords: ["method", "ABENABAP", "SUBROUTINES"]
---

***This concept is only supported temporarily in the current ABAP language version and must be replaced with a valid concept for that version.***\\ \\n\\n

Before the introduction of ABAP Objects, subroutines were mainly used for the local modularization of an ABAP program, however, they can also be called externally. Their functions are implemented between the statements [`FORM`](ABAPFORM.html) and [`ENDFORM`](ABAPENDFORM.html). A subroutine is declared immediately when implemented.

Subroutines should no longer be created in new programs for the following reasons:

In those places where subroutines cannot yet be replaced by methods (`PERFORM ON COMMIT|ROLLBACK`, `GENERATE SUBROUTINE POOL`), they should be used purely as wrappers for method calls and must not contain any other functional code.

-   The parameter interface has clear weaknesses when compared with the parameter interface of methods, such as:

-   [Positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) instead of [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html)
-   No real input parameters in pass by reference
-   Typing is only optional
-   No optional parameters

-   Every subroutine belongs implicitly to the public interface of its program, which is generally not desired.
-   Calling subroutines externally is critical with respect to the assignment of the compilation unit to a [program group](ABENPROGRAM_GROUP_GLOSRY.html) in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html). This assignment cannot generally be defined statically.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html