---
title: "Using System Fields on the User Interface - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_ui_guidl.htm"
abapFile: "abenuse_ui_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [System Fields](ABENSYSTEM_FIELDS_GUIDL.md) → 

Using System Fields on the User Interface

Background

As system fields are defined using the syst structure in ABAP Dictionary, you can technically use them to define input fields in dynpros/in Web Dynpro.

Rule

Do not use system fields on the user interface

Never use system field types to define input or output fields for dynpros or selection screens in application programs.

Details

This rule is derived from the [SoC](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline") rule and the [use of data types rule](ABENUSING_TYPES_GUIDL.md "Guideline"). System fields are purely technical. Their semantic attributes, are defined in ABAP Dictionary (documentation and other texts), do not allow meaningful use in the user dialogs of application programs.

Note

Similarly, you can apply the rule [only use semantically appropriate data types](ABENUSING_TYPES_GUIDL.md "Guideline") to the use of SYST structure components (for typing interface parameters of procedures). The semantic meaning of a system field (expressed in the short text) does not generally match the meaning of the parameter.

Example

When the program PGL\_SYSTEM\_FIELD\_ON\_UI is executed, input fields for document output language are displayed on a classic dynpro. The first input field is declared with reference to data type syst-langu of system field sy-langu. The second input field is declared with reference to a semantically suitable ABAP Dictionary data type. The displayed F1 help clearly indicates that syst-langu is not suited for language fields in a user dialog. This is because the help only describes the behavior of the sy-langu field in a program. It does not describe the meaning of the language field in the relevant application.
