---
title: "Modularization units - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodularization_unit_guidl.htm"
abapFile: "abenmodularization_unit_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) → 

Modularization units

Die wesentlichen Modularisierungseinheiten bzw. aufrufbaren Einheiten innerhalb eines ABAP-Programms werden als Verarbeitungsblöcke bezeichnet. Hierbei wird nach Prozeduren auf der einen und Dialogmodulen sowie Ereignisblöcken auf der anderen Seite unterschieden. Während Dialogmodule und Ereignisblöcke aus der Dynpro-Ablauflogik oder im Rahmen der Ereignissteuerung durch die ABAP-Laufzeitumgebung aufgerufen werden, sind die Prozeduren für den direkten Aufruf aus einem ABAP-Programm heraus vorgesehen. Neben Verarbeitungsblöcken können auch noch Makros als aufrufbare Einheiten angelegt werden.

Procedures can be:

-   Methods

-   Function modules

-   Subroutines

Only procedures support parameter interfaces and have a local data context.

Dialog modules and event blocks do not have parameter interfaces and generally do not have a local data context.

Macros are a kind of halfway house between callable units and source code modularization.

-   [Function Modules and Subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")

-   [Type of Formal Parameters in Procedures](ABENTYPE_FORMAL_PARAM_PROC_GUIDL.md "Guideline")

-   [How Formal Parameters Are Passed](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.md "Guideline")

-   [Pass By Reference for Output Parameters](ABENREF_TRANSF_OUTPUT_PARAM_GUIDL.md "Guideline")

-   [Typing of Formal Parameters](ABENTYPE_FORMAL_PARAM_GUIDL.md "Guideline")

-   [Internal and External Procedure Calls](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md "Guideline")

-   [Exiting Procedures](ABENEXIT_PROCEDURE_GUIDL.md "Guideline")

-   [Dialog Modules and Event Blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md "Guideline")

-   [Macros](ABENMACROS_GUIDL.md "Guideline")

Continue
[Function Modules and Subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)
[Type of Formal Parameters in Procedures](ABENTYPE_FORMAL_PARAM_PROC_GUIDL.md)
[How Formal Parameters Are Passed](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.md)
[Pass By Reference for Output Parameters](ABENREF_TRANSF_OUTPUT_PARAM_GUIDL.md)
[Typing of Formal Parameters](ABENTYPE_FORMAL_PARAM_GUIDL.md)
[Internal and External Procedure Calls](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md)
[Exiting Procedures](ABENEXIT_PROCEDURE_GUIDL.md)
[Dialog Modules and Event Blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md)
[Macros](ABENMACROS_GUIDL.md)
