---
title: "ABENCATCHABLE_EXCEPTION_GLOSRY"
description: |
  ABENCATCHABLE_EXCEPTION_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCATCHABLE_EXCEPTION_GLOSRY.htm"
abapFile: "ABENCATCHABLE_EXCEPTION_GLOSRY.html"
keywords: ["try", "catch", "method", "class", "ABENCATCHABLE", "EXCEPTION", "GLOSRY"]
---

[Exception](ABENEXCEPTION_GLOSRY.html) that can be handled in the program using the statements [`TRY - CATCH - ENDTRY`](ABAPTRY.html) without causing a [runtime error](ABENRUNTIME_ERROR_GLOSRY.html). Catchable exceptions are based on [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html) and are implemented by [exception objects](ABENEXCEPTION_OBJECT_GLOSRY.html). A catchable exception is raised either by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) or by the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION.html) in a program, or by the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSION_GLOSRY.html). Before the introduction of [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html), catchable exceptions could be user-defined only in the interfaces of [function modules](ABENFUNCTION_MODULE_GLOSRY.html) and [methods](ABENMETHOD_GLOSRY.html) and raised using [`RAISE`](ABAPRAISE_EXCEPTION.html). Predefined catchable exceptions occurred as [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html), now they are obsolete.

[**\-> More about**](ABENABAP_EXCEPTIONS.html)

ABENABALA\_GLOSSARY.html