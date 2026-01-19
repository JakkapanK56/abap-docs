---
title: "ABENNEWS-710-TOOLS"
description: |
  ABENNEWS-710-TOOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-710-TOOLS.htm"
abapFile: "ABENNEWS-710-TOOLS.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENNEWS", "710", "TOOLS"]
---

[1\. ABAP Editor](#ABAP_MODIFICATION_1@4@)

[2\. Class Builder](#ABAP_MODIFICATION_2@4@)

[3\. ABAP Debugger](#ABAP_MODIFICATION_3@4@)

[4\. Coverage Analyzer](#ABAP_MODIFICATION_4@4@)

[5\. ABAP Unit](#ABAP_MODIFICATION_5@4@)

[6\. Runtime Analysis](#ABAP_MODIFICATION_6@4@)

[7\. ABAP Test Cockpit](#ABAP_MODIFICATION_7@4@)

[8\. Checkpoint Groups](#ABAP_MODIFICATION_8@4@)

Code Completion has been added to the new ABAP front-end editor. This tool proposes appropriate ABAP words and operands for the current code location. By default, Code Completion is called using Ctrl+Space. The following units can be completed:

The proposals can be accepted as they are or as patterns with prefilled parameters.

The <ZK>Source Code-Based Editor</> setting is used to expand the internal include programs of a class pool. This displays the entire source code of a global class like a program in ABAP Editor and it can then be edited. When saved, the modified source code is then split among the associated include programs.

The following functions have been added to the two-process debugger:

Coverage Analyzer has been modified to include the following:

Code coverage is visualized in different colors in the new ABAP front-end editor. To measure the coverage of test runs, Coverage Analyzer has been integrated into ABAP Unit.

In ABAP release 7.0, EhP2, the additions introduced for the statement [`CLASS ... FOR TESTING`](ABAPCLASS_FOR_TESTING.html), namely `RISK LEVEL` and `DURATION`, have replaced the pseudo comments introduced in ABAP release 7.0, namely `"#AU Risk_Level ...` and `"#AU Duration ...`, used for defining the test properties of [test classes](ABENTEST_CLASS_GLOSRY.html).

An ABAP Unit Browser integrated into Object Navigator in ABAP Workbench allows:

For the latter item, test coverage can be measured and displayed using Coverage Analyzer.

Class `CL_ABAP_UNIT_ASSERT` replaces class `CL_AUNIT_ASSERT`. New methods are now assigned to the new class only. Existing unit tests do not have to be converted to the new class. It is recommended, however, that the new class is used only in new tests.

The runtime analysis tool has been switched to the new transaction `SAT` (the previous transactions were `SE30` and `ATRA`). The new runtime analysis tool

ABAP Test Cockpit (ATC) is a framework that is integrated into ABAP Workbench to execute various tests for development objects and to show the results of these. The following are some of the tests that are currently integrated:

The external release takes place in support package 12.

A time limit now applies to activation settings for [checkpoint groups](ABENCHECKPOINT_GROUP_GLOSRY.html). When an activation setting is saved in transaction `SAAB`, either a validity period (valid for the current day or week) or a validity end date must be specified. The default value (valid for the current day) is generally suitable for most applications.

-   Data objects including structures and components
-   Data types and classes
-   Components of classes
-   Function modules
-   Subroutines
-   Formal parameters
-   Database tables
-   ABAP words

-   **Variable display**:
-   A new tab page, **Auto**, displays the last return values of methods.
-   Long data objects can now be modified in the detail view.
-   **Table tool**:
-   Support for secondary keys (the key used can be toggled in the debugger).
-   Tables can be filled with data that was previously downloaded onto the presentation server.
-   Substructures of structured line types can be expanded in a line.
-   Columns can be hidden and made visible again.
-   Display settings are retained for specific tables.
-   **Breakpoint tool**:
-   Special breakpoints for Web Dynpro ABAP (specification of Web Dynpro component, Web Dynpro controller, or a Web Dynpro method).
-   Special breakpoints for Simple Transformations (debugging of Simple Transformations).
-   Special breakpoints for stack changes (breakpoint when switching program or procedure).
-   Special breakpoint for imprecise Decfloat calculation (stops if an imprecise statement or calculation with decimal floating point numbers takes place).
-   **Dynpro tool**:
-   New tool for analyzing screens (control, properties, layout).
-   **ST debugging**:
-   New tool for debugging Simple Transformations (step-by-step execution, variables display, breakpoints).
-   **Debugger scripting**:
-   ABAP debugger scripting can be used to analyze the current ABAP context.
-   Called using a breakpoint or an automated single step.
-   The context of the debuggee can be stopped, traced, or changed within a script. \\nAn integrated script tool scripts to be written, saved, loaded, and executed.
-   Transaction `SAS` allows the independent editing of debugger scripts.
-   **Statement debugging**:
-   Multiple statements in one line can be debugged step by step.
-   Logical expressions can also be debugged step by step.
-   **Layer debugging**:
-   The user can define the software layer (package, program, procedure, or interface) that should be debugged.
-   A layer can be executed as a single step in debugging.
-   **Stack tool**:
-   New setting for displaying the call stack of the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of a caller
-   **Exception tool**:
-   New tool for displaying and analyzing the last and previous class-based exceptions.
-   **Console tool**:
-   This new tool displays the growing data of serializations from ABAP to XML for `CALL TRANSFORMATION` and for classic list output.
-   **ABAP Enhancement Framework**:
-   Visualization of enhancements in the stack.
-   Possibility of skipping or executing enhancement implementations.
-   **ABAP byte code**:
-   In the *ABAP byte code* or *ABAP byte code (debug macro)* context menus, it is possible to select what a replacement for a proper macro debugging run can depict.
-   **Functions taken from the old debugger**:
-   Displays the classic list currently being created in the [ABAP session](ABENABAP_SESSION_GLOSRY.html) of the debuggee.
-   Possibility of restarting the entire application.
-   Settings (block tRFC sending, ESI debugging, shared objects: debug automatic area build, always create exception object, Control Framework: automation controller always processes requests synchronously, check sorting before `READ BINARY SEARCH`).

-   Code coverage is now measured on the statement level.
-   The coverage of individual conditions of logical expressions is measured.
-   The coverage of empty branches is measured.
-   The coverage of the executed and non-executed statement blocks in control structures is measured (branch coverage).

-   A structured overview of existing unit tests to be displayed.
-   Multiple test runs to be started at the same time.
-   Unit tests to be organized in favorites.

-   has a new user interface for analyzing measurements. Like ABAP Debugger, it consists of adjustable desktops where various tools can be organized.
-   contains additional and more flexible analysis tools than the previous version.
-   saves the measurement data to the database, which makes it independent of the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the AS instance.
-   enables the cross-system comparison of measurement data.

-   Extended program checks
-   Performance tests
-   Unit tests
-   Usability tests
-   Package checks

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html