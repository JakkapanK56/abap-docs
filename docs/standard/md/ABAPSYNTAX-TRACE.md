---
title: "ABAPSYNTAX-TRACE"
description: |
  ABAPSYNTAX-TRACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-TRACE.htm"
abapFile: "ABAPSYNTAX-TRACE.html"
keywords: ["select", "do", "if", "class", "ABAPSYNTAX", "TRACE"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`SYNTAX-TRACE \{\ \{ON [...]\}\ | OFF \}.`

[1. `SYNTAX-TRACE ON.`](#ABAP_VARIANT_1@1@)

[2. `SYNTAX-TRACE ON OPTION CODING.`](#ABAP_VARIANT_2@1@)

[3. `SYNTAX-TRACE ON OPTION CLASS.`](#ABAP_VARIANT_3@1@)

[4. `SYNTAX-TRACE ON OPTION CLASS-CODING.`](#ABAP_VARIANT_4@1@)

[5. `SYNTAX-TRACE ON OPTION EXPAND.`](#ABAP_VARIANT_5@1@)

[6. `SYNTAX-TRACE ON OPTION SYNCPOINTS.`](#ABAP_VARIANT_6@1@)

[7. `SYNTAX-TRACE OFF.`](#ABAP_VARIANT_7@1@)

This statement has no effect at runtime and only affects the syntax check or the generation of the program that contains the statement. If the syntax check or generation was called in the test environment, this statement switches on trace output.

This statement has the same effect as `SYNTAX-TRACE ON`, except that the trace output is restricted to the processed program lines.

This statement has the same effect as `SYNTAX-TRACE ON`. Additionally, all operations are traced that are relevant for loading classes.

This statement has the same effect as `SYNTAX-TRACE ON`, except that the trace output is restricted to the processed program lines. Additionally, as for addition 3, all operations are traced that are relevant for loading classes.

This statement is currently ignored.

This statement can be used to activate the trace function of the ABAP syntax check and to select a certain mode for the trace output.

This trace mode `SYNCPOINTS` (for internal test purposes only) logs the declaration units, that is, used global class and interface declarations as well as [type pools](ABENTYPE_POOL_GLOSRY.html), for which the routines for creating the load table entries must be called after a delay and not immediately.

In doing so, the call of the generation routine is delayed until a synchronization point is reached, for which the generation of a set of declaration units is executed afterwards.

The trace that operates on the ABAP code level and not on the RSYN level provides the information about where such synchronization points were defined and which declaration units at these points in time have to be incorporated in the delayed generation.

The delayed generation of declaration units is necessary to solve sequencing problems in the load tables when precompiled headers are used to generate ABAP programs.

Switches off the syntax trace switched on with `SYNTAX-TRACE ON`.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abentests\_internal.html