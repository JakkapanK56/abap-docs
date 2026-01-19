---
title: "ABAPSET_RUN_TIME_ANALYZER"
description: |
  ABAPSET_RUN_TIME_ANALYZER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_RUN_TIME_ANALYZER.htm"
abapFile: "ABAPSET_RUN_TIME_ANALYZER.html"
keywords: ["select", "do", "if", "method", "ABAPSET", "RUN", "TIME", "ANALYZER"]
---

[Short Reference](ABAPSET_RUN_TIME_ANALYZER_SHORTREF.html)

`SET RUN TIME ANALYZER \{ON|OFF\}.`

This statement affects the measurement of a program with the [runtime analysis](ABENRUNTIME_ANALYSIS_GLOSRY.html) tool. If the setting *Particular Units* is activated in the runtime analysis, which can be done using *Restrictions -> Program Units*, the runtime analysis only measures the runtime of statements that occur between `SET RUN TIME ANALYZER ON` and `SET RUN TIME ANALYZER OFF`.

The statement `SET RUN TIME ANALYZER` always sets the return code `sy-subrc` to 0.

If the method `m0` is executed when runtime analysis is switched on, only the runtime from the call and execution of the method `m2` is measured.

-   This statement should only be used in the test phase of a program to enable a later runtime measurement independently of the source code.
-   Runtime analysis can be switched on and off in transaction `SAT` by selecting *System -> Utilities -> Runtime Analysis* or by entering `/RON` and `/ROFF` in the command field of the [system toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html)
-   Runtime analysis can be stopped and started on a program-driven basis by calling the static methods `ON` and `OFF` in `CL_ABAP_TRACE_SWITCH` either before or after the statements `SET RUN TIME ANALYZER`.
-   Runtime analysis was replaced by the ABAP Profiler in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

METHOD m0. \\n me->m1( ). \\n SET RUN TIME ANALYZER ON. \\n me->m2( ). \\n SET RUN TIME ANALYZER OFF. \\n me->m3( ). \\nENDMETHOD. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_runtime\_measurements.html