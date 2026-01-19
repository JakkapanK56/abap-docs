---
title: "ABENST_TT_PARAMETER"
description: |
  ABENST_TT_PARAMETER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_TT_PARAMETER.htm"
abapFile: "ABENST_TT_PARAMETER.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENST", "PARAMETER"]
---

`<tt:parameter name="..." [ref-type="..."]`\\ 
                         `[kind="..."]`\\ 
                         `[[s-val="..."][d-val="..."]]|[val="..."] />`

The statement `tt:parameter` can be used to declare one or more parameters in an ST program outside of a template. The attribute `name` is used to define a symbolic name that can be used to access the parameter. This name can have a maximum of 30 characters.

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared with [`tt:root`](ABENST_TT_ROOT.html) and the variables declared with [`tt:variable`](ABENST_TT_VARIABLE.html).

The parameters can be addressed directly in the context of the [main template](ABENST_TT_TEMPLATE_MAIN.html). In [subtemplates](ABENST_TT_TEMPLATE_SUB.html), the parameters of the main template are not known.

Parameters are special [variables](ABENST_TT_VARIABLE.html) and can be used as such. Parameters are also applied as formal parameters of an ST program (or a subtemplate):

`ref-type` can be used to define the formal parameter as a reference variable. The value of `ref-type` determines the static type of the reference variable. All global ABAP classes and interfaces for an object reference variable are possible, as are data types for a data reference variable. The names of classes and interfaces are specified directly and without namespaces. The names of data types must be specified using an XML namespace that determines the context of the data type, as with [`tt:type`](ABENST_TT_TYPE.html). Class reference variables and interface reference variables are intended primarily for creating objects and calling instance methods. Data reference variables, however, are used for binding appropriately typed interface parameters when ABAP methods are called.

`kind` can be used to specify the category of formal parameter. Possible values for `kind` are:

If `kind` is not specified, the formal parameter is by default an input parameter.

The additions `s-val` and `d-val` or `val` can be used to assign a replacement value to each the input parameters, where the values are specified as [ABAP values](ABENST_ABAP_REPRESENTATION.html). If no actual parameter is assigned to an input parameter, it is set to the replacement value. `s-val` only takes effect in serializations, `d-val` only takes effect in deserializations, and `val` takes effect in both serializations and deserializations. Replacement values cannot be assigned to output parameters and input/output parameters.

This example demonstrates how parameters are passed to a called transformation. The same example is used for subtemplates in the statement [`tt:apply`](ABENST_TT_APPLY.html).

The transformation `DEMO_ST_PARAMETER1` below has three parameters `PARA1`, `PARA2`, and `PARA3`.

It can be called from the transformation `DEMO_ST_PARAMETER2` below:

The result of the calling transformation is:

The input parameter `PARA1` is changed in the called transformation, but the changed value is not returned to the actual parameter `VARI1`.

The output parameter `PARA2` is set to the value of actual parameter `VARI3`, which is passed to the called transaction, and this value is returned to the actual parameter `VARI2`.

The input/output parameter `PARA3` is set to the value of actual parameter `VARI1`, which is passed to the called transaction, and this value is returned to the actual parameter `VARI3`.

-   In [`tt:call`](ABENST_TT_CALL.html) (or [`tt:apply`](ABENST_TT_APPLY.html)), a current value can be assigned to a parameter with `tt:with-parameter`.
-   The addition `PARAMETERS` of the ABAP statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) can be used to assign an ABAP data object to a parameter as an actual parameter.

-   *in* input parameter - In the call, an input parameter uses the value of the assigned actual parameter. In the return, the actual parameter does not use the current value of the formal parameter.
-   *out* output parameter - In the call, an output parameter does not use the values of the assigned actual parameter. In the return, the actual parameter uses the current value of the formal parameter.
-   *in/out*  input/output parameter - In the call, an input/output parameter uses the value of the assigned actual parameter and, in the return, the actual parameter uses the current value of the formal parameter.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n 1\\ \\n3\\ \\n1 abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html abenst\_data\_declarations.html