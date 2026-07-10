---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMODULARIZATION_UNIT_GDL.html"
abapFile: "ABENMODULARIZATION_UNIT_GDL.html"
type: "abap-reference"
---

The key modularization units or callable units within an ABAP program are referred to as processing blocks. In this context, procedures on one side are distinguished from dialog modules and event blocks on the other side. While dialog modules and event blocks are called from the dynpro flow logic or from the event processing of the ABAP runtime framework, procedures are designed for direct calls from an ABAP program. In addition to processing blocks, macros can also be created as callable units.

Procedures can be:

-   Methods
-   Function modules
-   Subroutines

Only procedures support parameter interfaces and have a local data context.

Dialog modules and event blocks do not have parameter interfaces and generally do not have a local data context.

Macros are a kind of halfway house between callable units and source code modularization.

-   [Function Modules and Subroutines](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md)
-   [Type of Formal Parameters in Procedures](ABENTYPE_FORMAL_PARAM_PROC_GUIDL.md)
-   [Passing of Formal Parameters](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.md)
-   [Pass By Reference for Output Parameters](ABENREF_TRANSF_OUTPUT_PARAM_GUIDL.md)
-   [Typing of Formal Parameters](ABENTYPE_FORMAL_PARAM_GUIDL.md)
-   [Internal and External Procedure Calls](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md)
-   [Exiting Procedures](ABENEXIT_PROCEDURE_GUIDL.md)
-   [Dialog Modules and Event Blocks](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md)
-   [Macros](ABENMACROS_GUIDL.md)
