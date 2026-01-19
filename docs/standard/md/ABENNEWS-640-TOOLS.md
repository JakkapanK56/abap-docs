---
title: "ABENNEWS-640-TOOLS"
description: |
  ABENNEWS-640-TOOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-TOOLS.htm"
abapFile: "ABENNEWS-640-TOOLS.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "internal-table", "ABENNEWS", "640", "TOOLS"]
---

[1\. Assertions and Activatable Breakpoints](#ABAP_MODIFICATION_1@4@)

[2\. New Two-Process Debugger](#ABAP_MODIFICATION_2@4@)

[3\. Enhancements to the Previous Debugger](#ABAP_MODIFICATION_3@4@)

[4\. Memory Inspector](#ABAP_MODIFICATION_4@4@)

[5\. Code Inspector](#ABAP_MODIFICATION_5@4@)

[6\. ABAP Unit](#ABAP_MODIFICATION_6@4@)

[7\. Runtime Analysis](#ABAP_MODIFICATION_7@4@)

The new statement [`ASSERT`](ABAPASSERT.html) can be used to define [assertions](ABENASSERTION_GLOSRY.html). Assertions help verify particular assumptions about the state of a program in a particular location, and they guarantee that these assumptions hold.

Assertions can be activated from outside the program using a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html) and the addition `ID`. The same addition was also introduced for the statement [`BREAK-POINT`](ABAPBREAK-POINT.html) to activate breakpoints using checkpoint groups.

This change was also transported back to ABAP release 6.20.

The new two-process debugger is a completely new development, with particular emphasis on the development of a more modern user interface. The main differences between this and the previous ABAP debugger are that the new debugger is executed in a separate [ABAP session](ABENABAP_SESSION_GLOSRY.html) and the object that is being analyzed (the debuggee) is now the entire ABAP session instead of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The new ABAP debugger provides the user with a flexible and freely configurable interface with over eight desktops, on which between one and four tools, such as source code display or structure display, can be placed and arranged. In ABAP release 6.40, there is now a choice of the previous debugger and the new debugger; it is now also possible to switch between the two at any time during a debugger session.

The following improvements were made:

The Memory Inspector tool was introduced for the analysis of [memory snapshots](ABENMEMORY_SNAPSHOT_GLOSRY.html).

This change was also transported back to ABAP release 6.20.

The Code Inspector tool was introduced to check [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) for performance, security, syntax, and the adherence to naming conventions.

The [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) tool was integrated in the ABAP runtime framework to test individual program sections. ABAP Unit is based on the execution of [test methods](ABENTEST_METHOD_GLOSRY.html) in [test classes](ABENTEST_CLASS_GLOSRY.html).

When measuring [`BSP`](ABENBUSINESS_SERVER_PAGES_GLOSRY.html) applications, it is now also possible to specify a different variant to the standard variant for restrictions (in the runtime analysis transaction `SE30`).

The class `CL_ABAP_RUNTIME` provides methods for creating objects. The method `GET_RUNTIME` can be used to execute multiple runtime measurements with different resolutions and parallel measurements (see [Class for Runtime Measurements](ABENCL_ABAP_RUNTIME.html)).

-   When internal tables are displayed, offsets and lengths can be specified for the character-like components in the column headers.
-   When internal tables are displayed, the corresponding icons next to the table names can be selected to list the names of all internal tables displayed in the previous debugger session and double-clicked to display them. The display starts from the line number and the component with which the selected table was last displayed.
-   If the program flow is stuck on a `CASE` statement, the system branches in a single step to the affected `WHEN` block.
-   In ABAP Editor, *external debugging* can be activated and deactivated under *Utilities -> Settings*. Depending on the settings and whether a regular ABAP program or an ABAP Script for a [BSP](ABENBUSINESS_SERVER_PAGES_GLOSRY.html) is being edited, a prompt may appear (when creating breakpoints in ABAP Editor) asking whether these breakpoints are to be HTTP breakpoints or session breakpoints. HTTP breakpoints are persisted in the database for different logons; session breakpoints are regular breakpoints that refer to the current logon.

abenabap.html abennews.html abennews-6.html abennews-640.html