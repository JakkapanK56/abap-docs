---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSYSTEM_FIELDS_GDL.html"
abapFile: "ABENSYSTEM_FIELDS_GDL.html"
type: "abap-reference"
---

An ABAP program can request the state of the ABAP runtime framework using the [system fields](ABENSYSTEM_FIELDS.md). From a technical viewpoint, these system fields are a set of built-in variables (the components of the built-in `sy` structure with the data type `SYST` from ABAP Dictionary) that always exist when the program is running.

The system field `sy-repid` is an exception. This field indicates the name of the program currently running. In this case, we are dealing with a built-in constant and not a component of the built-in `sy` structure.

-   [Access](ABENSYST_FIELD_ACCESS_GUIDL.md)
-   [Obsolete and internal system fields](ABENOBS_INTERN_SYSTEM_FIELD_GUIDL.md)
-   [Evaluation](ABENEVALUATION_GUIDL.md)
-   [Return code](ABENRETURN_CODE_GUIDL.md)
-   [Use as actual parameter](ABENUSE_ACTUAL_PARAMETERS_GUIDL.md)
-   [Using system fields on the user interface](ABENUSE_UI_GUIDL.md)
-   [Use in operand positions](ABENUSE_OPERAND_POSITION_GUIDL.md)
