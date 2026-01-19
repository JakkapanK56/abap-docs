---
title: "ABENASSERTION_GLOSRY"
description: |
  ABENASSERTION_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASSERTION_GLOSRY.htm"
abapFile: "ABENASSERTION_GLOSRY.html"
keywords: ["if", "try", "ABENASSERTION", "GLOSRY"]
---

Assertion in an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). An assertion is defined as a conditional [checkpoint](ABENCHECKPOINT_GLOSRY.html) using the [`ASSERT`](ABAPASSERT.html) statement. Assertions are either always active or can be [activated](ABENACTIVATABLE_CHECKPOINT_GLOSRY.html) by assigning them to a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html). When an active assertion is reached, the corresponding condition is evaluated. If the condition is violated, the program terminates with a runtime error, accesses the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html), or creates a log entry. If a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html) is assigned, the program behavior is controlled by the corresponding activation settings. Otherwise, the program is terminated.

ABENABALA\_GLOSSARY.html