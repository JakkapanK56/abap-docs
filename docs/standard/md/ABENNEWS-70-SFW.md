---
title: "ABENNEWS-70-SFW"
description: |
  ABENNEWS-70-SFW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-SFW.htm"
abapFile: "ABENNEWS-70-SFW.html"
keywords: ["if", "ABENNEWS", "SFW"]
---

[1\. Binding of Dynpros to Switch Framework](#ABAP_MODIFICATION_1@4@)

[2\. Binding the Syntax Check to Switch Framework](#ABAP_MODIFICATION_2@4@)

From ABAP release 7.0, [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) is available for the external control of the visibility of [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) or their components using [switches](ABENSWITCH_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html). The following changes have been made to dynpro and ABAP statements to enable this function:

The new addition `SWITCH` of the statement [`MODULE`](MODULE.html) in the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [`FIELD`](FIELD.html) and the activation of functions in the GUI status are controlled by binding switches to dynpro fields and status elements in Screen Painter or Menu Painter.

In every implicit or explicit compilation of an ABAP program, the syntax check uses the switch configuration of Switch Framework that is provided when the statement is executed.

When the statement [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [`SYNTAX-CHECK`](ABAPSYNTAX-CHECK_FOR_ITAB.html) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [`GENERATE SUBROUTINE POOL`](ABAPGENERATE_SUBROUTINE_POOL.html), the addition `WITH CURRENT SWITCHSTATES` has been introduced.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html