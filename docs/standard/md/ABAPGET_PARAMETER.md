---
title: "ABAPGET_PARAMETER"
description: |
  ABAPGET_PARAMETER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PARAMETER.htm"
abapFile: "ABAPGET_PARAMETER.html"
keywords: ["select", "do", "if", "case", "data", "ABAPGET", "PARAMETER"]
---

[Short Reference](ABAPGET_PARAMETER_SHORTREF.html)

`GET PARAMETER ID pid FIELD dobj.`

This statement sets the content of the data object `dobj` to the content of the [SPA/GPA](ABENSPA_GPA_PARAMETER_GLOSRY.html) parameter specified in `pid` in the [user memory](ABENUSER_MEMORY_GLOSRY.html). The ID `pid` expects a [flat](ABENFLAT_GLOSRY.html) character-like field that contains a maximum of 20 characters and not only blanks. The field is case-sensitive. The binary content of the SPA/GPA parameter is passed to `dobj` without being converted. The following can be specified for `dobj`:

The statement `GET PARAMETER` does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [session memory](ABENROLL_AREA_GLOSRY.html), which is loaded during roll-in and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](ABENSPA_GPA.html)). If the SPA/GPA parameter specified in `pid` does not yet exist in the [user memory](ABENUSER_MEMORY_GLOSRY.html) for the current user, the data object `dobj` is initialized and `sy-subrc` is set to 4.

A program can only read those SPA/GPA parameters for which there is a name in the table `TPARA`. If it is possible to statically determine that an ID specified `pid` is not in the database table `TPARA`, the extended program check reports an error.

In this example, the current value of the SPA/GPA parameter `RID` is read from the user memory to the data object `prog`. In the dynpros in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html), this parameter is linked to the input fields for a program name. When an ABAP Workbench tool in which an ABAP program is processed, is first called, the parameter is created in the event PAI and assigned the name of the program specified there. If, in the same user session, no dynpro was processed that sets the parameter `RID` and no corresponding `SET PARAMETER` statement was executed beforehand, `RID` is not found in the user memory.

-   An existing flat character-like variable.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `XUVALUE` is declared.

-   An SPA/GPA parameter that can be read using `GET PARAMETER` can either have been created previously using the statement [`SET PARAMETER`](ABAPSET_PARAMETER.html) or created automatically in the [PAI](ABENPAI_GLOSRY.html) event of a [dynpro](ABENDYNPRO_GLOSRY.html) or [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) in the user memory.
-   An SPA/GPA parameter specified in `pid` must be entered in uppercase to match a name in the database table `TPARA`.
-   Since the statements `SET PARAMETER` and `GET PARAMETER` do not work directly with the SPA/GPA parameters of the user memory, they are only suitable for passing data within an [ABAP session](ABENABAP_SESSION_GLOSRY.html) and not for passing data between parallel ABAP sessions because programs that run in parallel can affect the state of the parameters in an uncontrolled manner.

DATA: para TYPE tpara-paramid VALUE 'RID', \\n prog TYPE sy-repid. \\n\\ \\nGET PARAMETER ID para FIELD prog. \\n\\ \\nIF sy-subrc <> 0. \\n MESSAGE 'Parameter not found' TYPE 'I'. \\nENDIF. `sy-subrc` **Meaning** 0 The SPA/GPA parameter specified in `pid` exists for the current user in the user memory and its value was passed to the target field. 4 The SPA/GPA parameter specified in `pid` does not exist for the current user in the user memory. abenabap.html abenabap\_reference.html abencreate\_objects.html abenspa\_gpa.html