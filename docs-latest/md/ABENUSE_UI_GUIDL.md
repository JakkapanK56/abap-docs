---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSE_UI_GUIDL.html"
abapFile: "ABENUSE_UI_GUIDL.html"
type: "abap-reference"
---

## Background

As system fields are defined using the `syst` structure in ABAP Dictionary, you can technically use them to define input fields in dynpros or in Web Dynpro.

## Rule

**Do not use system fields on the user interface**

Never use system field types to define input or output fields for dynpros or selection screens in application programs.

## Details

This rule is derived from the [SoC](ABENSEPARATION_CONCERNS_GUIDL.md) rule and the [use of data types rule](ABENUSING_TYPES_GUIDL.md). System fields are purely technical. Their semantic properties, are defined in ABAP Dictionary (documentation and other texts), do not allow meaningful use in the user dialogs of application programs.

## Hint

Similarly, you can apply the rule [only use semantically appropriate data types](ABENUSING_TYPES_GUIDL.md) to the use of `SYST` structure components (for typing interface parameters of procedures). The semantic meaning of a system field (expressed in the short text) does not generally match the meaning of the parameter.

## Example

When the program `PGL_SYSTEM_FIELD_ON_UI` is executed, input fields for document output language are displayed on a classic dynpro. The first input field is declared with reference to data type `syst-langu` of system field `sy-langu`. The second input field is declared with reference to a semantically suitable ABAP Dictionary data type. The displayed `F1` help clearly indicates that `syst-langu` is not suited for language fields in a user dialog. This is because the help only describes the behavior of the `sy-langu` field in a program. It does not describe the meaning of the language field in the relevant application.
