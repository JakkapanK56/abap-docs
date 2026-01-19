---
title: "ABENRESUMABLE_EXCEPTION_GLOSRY"
description: |
  ABENRESUMABLE_EXCEPTION_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRESUMABLE_EXCEPTION_GLOSRY.htm"
abapFile: "ABENRESUMABLE_EXCEPTION_GLOSRY.html"
keywords: ["if", "try", "catch", "class", "ABENRESUMABLE", "EXCEPTION", "GLOSRY"]
---

[Class-based exception](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) that is raised by the addition `RESUMABLE` of the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or by the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html). When a resumable exception is handled in a [`CATCH`](ABAPCATCH_TRY.html) block, processing can be resumed using the statement [`RESUME`](ABAPRESUME.html) directly after the raising statement if the context of the exception still exists. The property of resumability of an exception can be lost when the exception is propagated from [procedures](ABENPROCEDURE_GLOSRY.html) if it is not marked as resumable in all relevant [parameter interfaces](ABENPARAMETER_INTERFACE_GLOSRY.html) by the addition `RESUMABLE` in the `RAISING` declaration of the procedures.

ABENABALA\_GLOSSARY.html