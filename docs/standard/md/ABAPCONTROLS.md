---
title: "ABAPCONTROLS"
description: |
  ABAPCONTROLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONTROLS.htm"
abapFile: "ABAPCONTROLS.html"
keywords: ["loop", "do", "if", "catch", "class", "ABAPCONTROLS"]
---

[Short Reference](ABAPCONTROLS_SHORTREF.html)

1\. `CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr.`

2\. `CONTROLS contrl TYPE TABSTRIP.`

For each [dynpro](ABENDYNPRO_GLOSRY.html) used in the program, all [table controls](ABENTABLE_CONTROL_GLOSRY.html) and [tabstrip controls](ABENTABSTRIP_CONTROL_GLOSRY.html) defined there must be declared in the declaration part using the statement `CONTROLS`, otherwise an uncatchable exception is raised when the corresponding dynpro is called. `contrl` expects the name of the control defined in the dynpro to be specified directly. After `TYPE`, `TABLEVIEW`, or `TABSTRIP` must be used to specify whether it is a table control or a tabstrip control.

For each control, the `CONTROLS` statement creates a structure with the name of the control in the ABAP program. The structure components enable the respective control to be processed in the ABAP program.

[Declaration of Table Controls](ABAPCONTROLS_TABLEVIEW.html)

[Declaration of Tabstrip Controls](ABAPCONTROLS_TABSTRIP.html)

-   For table controls, corresponding [loops](LOOP.html) must be programmed in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html). For tabstrip controls, suitable [subscreens](CALL.html) must be called.
-   [Splitter controls](ABENSPLITTER_CONTROL_GLOSRY.html) do not have to be declared using the `CONTROLS` statement. Instead the class `CL_DYNPRO_SPLITTER` is used.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html