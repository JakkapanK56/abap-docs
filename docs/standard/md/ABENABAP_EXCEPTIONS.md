---
title: "ABENABAP_EXCEPTIONS"
description: |
  ABENABAP_EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_EXCEPTIONS.htm"
abapFile: "ABENABAP_EXCEPTIONS.html"
keywords: ["if", "try", "catch", "class", "exception-handling", "ABENABAP", "EXCEPTIONS"]
---

Exceptions are events during the execution of an ABAP program that interrupt the program flow because it is not possible for the program to continue in a meaningful way. Exception handling enables a response to these events.

Exception situations can be detected either by the program or by the runtime framework. When an exception situation is detected, either the ABAP program or the runtime framework raises an exception. Exceptions in the ABAP runtime framework are generally caused by error situations that cannot be predicted by the static [program check](ABENPROGRAM_CHECK_GLOSRY.html).

Exceptions are either catchable or uncatchable.

Exceptions that were not caught, that is, all uncatchable exceptions and all catchable exceptions not caught in the program, produce a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html), which means that the program is terminated with a [short dump](ABENSHORT_DUMP_GLOSRY.html).

-   Catchable exceptions are [class-based](ABENEXCEPTIONS.html). They are predefined in the system, or can be user-defined. They are raised either by the ABAP runtime framework or in an ABAP program using

-   The statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html)
-   [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) specified in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html)

-   They can be handled using [`TRY - CATCH - ENDTRY`](ABAPTRY.html).
-   In addition, there are also [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html) and obsolete [catchable runtime errors](ABENSYSTEM-EXCEPTIONS.html).
-   Uncatchable exceptions are raised only by the ABAP runtime framework. They are a response to error situations that cannot generally be handled meaningfully in a program.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html