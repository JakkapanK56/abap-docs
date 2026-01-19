---
title: "ABENABAP_SUBROUTINES"
description: |
  ABENABAP_SUBROUTINES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SUBROUTINES.htm"
abapFile: "ABENABAP_SUBROUTINES.html"
keywords: ["method", "ABENABAP", "SUBROUTINES"]
---

Before the introduction of ABAP Objects, subroutines were mainly used for the local modularization of an ABAP program, however, they can also be called externally. Their functions are implemented between the statements [`FORM`](ABAPFORM.html) and [`ENDFORM`](ABAPENDFORM.html). A subroutine is declared immediately when implemented.

Subroutines should no longer be created in new programs for the following reasons:

In those places where subroutines cannot yet be replaced by methods ([`PERFORM ON COMMIT|ROLLBACK`](ABAPPERFORM_ON_COMMIT.html), [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html)), they should be used purely as wrappers for method calls and must not contain any other functional code.

The syntax allows the definition of a subroutine to be split between a declaration part and an implementation part using the statements [`FORM ... DEFINITION`](ABAPFORM_DEFINITION.html) and [`FORM ... IMPLEMENTATION`](ABAPFORM_DEFINITION.html), but this is not supported by all tools and should be avoided.

-   The parameter interface has clear weaknesses when compared with the parameter interface of methods, such as:

-   [Positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) instead of [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html)
-   No real input parameters in pass by reference
-   Typing is only optional
-   No optional parameters

-   Every subroutine belongs implicitly to the public interface of its program, which is generally not desired.
-   Calling subroutines externally is critical with respect to the assignment of the compilation unit to a [program group](ABENPROGRAM_GROUP_GLOSRY.html) in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html). This assignment cannot generally be defined statically.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html