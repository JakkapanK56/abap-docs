---
title: "More user-friendly design of the multiple selection GUI window"
description: |
  This screen is now organized in a much clearer manner using tabstrip controls(ABENTABSTRIP_CONTROL_GLOSRY.html) and table controls. Parameters and selection criteria with dynamic dictionary references. This allows dictionary references (and hence the type, length, documentation, and value help) to
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-SELSCREEN.htm"
abapFile: "ABENNEWS-40-SELSCREEN.html"
keywords: ["select", "update", "do", "if", "ABENNEWS", "SELSCREEN"]
---

[1\. Explicit Calls of Selection Screens](#ABAP_MODIFICATION_1@4@)

[2\. Calling with Variants](#ABAP_MODIFICATION_2@4@)

[3. Calling with `SUBMIT`](#ABAP_MODIFICATION_3@4@)

[4\. Initial Selection Screen for Transactions](#ABAP_MODIFICATION_4@4@)

[5\. New Design of Multiple Selection Screen](#ABAP_MODIFICATION_5@4@)

[6\. Dictionary References](#ABAP_MODIFICATION_6@4@)

[7\. New Function Modules](#ABAP_MODIFICATION_7@4@)

[Selection screens](ABENSELECTION_SCREEN_GLOSRY.html) can now be used universally: [`CALL SELECTION-SCREEN scrn`](ABAPCALL_SELECTION_SCREEN.html)

The language elements [`SELECTION-SCREEN BEGIN/END OF SCREEN`](ABAPSELECTION-SCREEN_DEFINITION.html) can be used to define multiple selection screens in module pools and function pools. These selection screens are called using [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html).

Selection screen variants can be assigned to one or more selection screens. [`CALL SELECTION-SCREEN scrn USING SELECTION-SET variant`](ABAPCALL_SELECTION_SCREEN.html)

Only the objects from the assigned screens are saved with the variant. Only the variants assigned to a screen are presented on that screen.

Specifying a selection screen in the statement [`SUBMIT`](ABAPSUBMIT.html).

[`SUBMIT report USING SELECTION-SCREEN scrn`](ABAPSUBMIT.html) can be used to start a report using different selection screens.

Specifying the initial selection screen for a variant in transaction code maintenance for [report transactions](ABENREPORT_TRANSACTION_GLOSRY.html).

This allows the initial screen to be set for a report started using a transaction code. A variant can also be made active when the transaction is called (including all of the usual features of variants, such as variables, hiding objects and so on). For example, different transactions can use the same report, but with different [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) or variants.

More user-friendly design of the multiple selection GUI window

This screen is now organized in a much clearer manner using [tabstrip controls](ABENTABSTRIP_CONTROL_GLOSRY.html) and table controls.

Parameters and selection criteria with dynamic dictionary references.

This allows dictionary references (and hence the type, length, documentation, and value help) to be set at runtime.

Function modules `RS_SELECTIONSCREEN_READ` and `RS_SELECTIONSCREEN_UPDATE`.

In the same way as the function modules `DYNP_VALUES_READ` and `DYNP_VALUES_UPDATE` for regular [dynpros](ABENDYNPRO_GLOSRY.html), both function modules allow access to user entries on selection screens or values to be modified on selection screens with their own F4. These function modules were created with the multiple selection screen in mind, since the field names used there are unknown to the application program.

abenabap.html abennews.html abennews-4.html abennews-40.html