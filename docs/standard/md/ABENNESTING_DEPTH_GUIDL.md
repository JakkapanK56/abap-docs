---
title: "ABENNESTING_DEPTH_GUIDL"
description: |
  ABENNESTING_DEPTH_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNESTING_DEPTH_GUIDL.htm"
abapFile: "ABENNESTING_DEPTH_GUIDL.html"
keywords: ["loop", "do", "while", "if", "case", "method", "ABENNESTING", "DEPTH", "GUIDL"]
---

The nesting depth is the number of statement blocks that are nested due to the use of control structures (branches, loops). We will discuss the nesting depth at the level of a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)). [Implementations must not](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.html) occur at other points.

The maximum nesting depth is restricted to 256 by ABAP Compiler.

**Restrict the nesting depth of control structures**

Restrict the maximum nesting depth within a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) to five levels.

In addition to the [number of executable statements](ABENPROC_VOLUME_GUIDL.html), the control structures of a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) are also important for their clarity and traceability. Each new nesting level makes nested branches and loops (such as in the statements `IF`, `CASE`, `DO`, `WHILE`, and `LOOP`) increasingly complicated and difficult to interpret. For this reason, the nesting depth must be restricted within a procedure, for example by moving functions to other procedures.

A maximum nesting depth of five levels is considered tolerable. A deeper nesting requires a great deal of effort to trace the program flow based on the source code. This would considerably constrain maintenance and further development.

The use of modern language elements can help to restrict the maximum nesting depth. This is the case if a statement or a built-in function replaces an entire control structure, for instance, for `REPLACE` with the addition `ALL OCCURRENCES` or for the numeric extremum functions, `nmax( )` and `nmin( )`, to determine the maximum or minimum value. The former replaces a loop, the latter an `IF` control structure.

The transition from the bad to the good example in the rule for [modern ABAP](ABENMODERN_ABAP_GUIDL.html) shows how you can reduce the nesting depth by using modern language elements.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abencomplexity\_gdl.html