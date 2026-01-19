---
title: "ABENTYPE_FORMAL_PARAM_PROC_GUIDL"
description: |
  ABENTYPE_FORMAL_PARAM_PROC_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTYPE_FORMAL_PARAM_PROC_GUIDL.htm"
abapFile: "ABENTYPE_FORMAL_PARAM_PROC_GUIDL.html"
keywords: ["select", "do", "if", "case", "method", "class", "types", "internal-table", "ABENTYPE", "FORMAL", "PARAM", "PROC", "GUIDL"]
---

The parameter interface of a procedure consists of formal parameters and specifies the [exceptions](ABENCLASS_EXCEPTION_GUIDL.html) possible in the procedure. The possible types of formal parameters are:

The actual behavior of a formal parameter, however, is in part determined by the combination of the parameter type and the [pass by type](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.html).

**Choose the appropriate formal parameter type**

Select a formal parameter type that corresponds to the parameter semantics:

For the consumer of a procedure, the parameter types provide important information about how they are used in the procedure and leads the user to expect the procedure to behave in a certain way. If an unsuitable parameter type is selected, the risk of inappropriate use increases.

Input parameters or input/output parameters that are not necessarily required for the execution of a procedure should be defined as optional by using `OPTIONAL` or by specifying a `DEFAULT` value. Otherwise, calling programs are forced to pass unnecessary parameters and create helper variables especially for this purpose.

A narrow parameter interface in line with a [procedure with an appropriate number of statements](ABENPROC_VOLUME_GUIDL.html) only requires a few input parameters and one return value. However, this cannot really be applied consistently in practice and is therefore not set out as a rule here.

Another parameter type are table parameters that can be declared for function modules and subroutines using `TABLES`. Basically, they have the same effects as input/output parameters for internal tables. This parameter type is obsolete and should no longer be used.

The following source code shows a formal parameter that is declared as an output parameter using `EXPORTING`, but is used in the method like an input/output parameter declared with `CHANGING`. This does not correspond to the semantics that a calling program expects.

The following source code corrects the above example by declaring the parameter as an input/output parameter with `CHANGING` according to its use.

-   **Input parameters**
-   Defined using `IMPORTING` in methods and function modules and using `USING` in subroutines.
-   **Output parameters**
-   Defined using `EXPORTING` in methods and function modules.
-   **Input/output parameters**
-   Defined using `CHANGING` in methods, function modules, and subroutines.
-   **Return values**
-   Defined using `RETURNING` in methods.

-   Input parameters for parameters that are evaluated but not changed in the procedure.
-   Output parameters or return values for parameters that are not evaluated but changed in the procedure.
-   Input/output parameters for parameters that are evaluated and changed in the procedure.

-   Input-only parameters should always have the `IMPORTING` type (or `USING` for subroutines). Be aware that, when using pass by reference, writes performed on an input parameter defined using `USING` are possible without a syntax error being produced (as is the case with input parameters of methods or function modules defined using `IMPORTING`). Yet another reason to not use subroutines.
-   Output-only parameters should always be `EXPORTING` or `RETURNING`.
-   Parameters that are received and changed should always be of the `CHANGING` type. In particular, in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) the fact that an `EXPORTING` parameter (or a `USING` parameter in the case of subroutines) passed by reference [behaves](ABENREF_TRANSF_OUTPUT_PARAM_GUIDL.html) (from a technical perspective) like a `CHANGING` parameter should not be exploited.

CLASS class DEFINITION. \\n PUBLIC SECTION. \\n METHODS do\_something \\n EXPORTING e\_parameter TYPE ... \\nENDCLASS.CLASS class IMPLEMENTATION. \\n METHOD do\_something. \\n "evaluate e\_parameter \\n ... \\n "set e\_parameter \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS class DEFINITION. \\n PUBLIC SECTION. \\n METHODS do\_something \\n CHANGING c\_parameter TYPE ... \\nENDCLASS.CLASS class IMPLEMENTATION. \\n METHOD do\_something. \\n "evaluate c\_parameter \\n ... \\n "set c\_parameter \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenmodularization\_unit\_gdl.html