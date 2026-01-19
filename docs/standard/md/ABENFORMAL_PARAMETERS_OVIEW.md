---
title: "ABENFORMAL_PARAMETERS_OVIEW"
description: |
  ABENFORMAL_PARAMETERS_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFORMAL_PARAMETERS_OVIEW.htm"
abapFile: "ABENFORMAL_PARAMETERS_OVIEW.html"
keywords: ["update", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABENFORMAL", "PARAMETERS", "OVIEW"]
---

The parameter interface of a procedure consists of [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) and specifies the possible [exceptions](ABENEXCEPTION_GLOSRY.html) in the procedure.

Formal parameters are;

In addition, there are several obsolete [table parameters](ABENTABLE_PARAMETER_GLOSRY.html). Formal parameters are either generic or completely [typed](ABENTYPING_GLOSRY.html). [Pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) or [pass by value](ABENPASS_BY_VALUE_GLOSRY.html) can be specified for most formal parameters. Pass by value is mandatory for some formal parameters.

Formal parameters have names and are either [generic](ABENGENERIC_DATA_TYPE_GLOSRY.html) or completely typed. Depending on their [typing](ABENTYPING_GLOSRY.html), they can be used in the same way as [data objects](ABENDATA_OBJECT_GLOSRY.html) in the procedure. The formal parameters make up a substantial part of the [signature](ABENSIGNATURE_GLOSRY.html) of a procedure. Formal parameters are either [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) (for [subroutines](ABENSUBROUTINE_GLOSRY.html)) or [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html) (for [methods](ABENMETHOD_GLOSRY.html) and [function modules](ABENFUNCTION_MODULE_GLOSRY.html)).

When a procedure is called, formal parameters are bound to [actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html). The required data type of an actual parameter and the kind of parameter passing ([pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) or [pass by value](ABENPASS_BY_VALUE_GLOSRY.html)) are specified by the definition of the formal parameter. To [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of the of [methods](ABENMETHOD_GLOSRY.html), [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html)\\ [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html) can be passed besides data objects.

[Choose the appropriate formal parameter type](ABENTYPE_FORMAL_PARAM_PROC_GUIDL.html)

Parameters can be passed to procedures either by reference or by value.

When deciding whether to use pass by reference or pass by value for a formal parameter, the performance and robustness of each pass-by type must be compared.

In ABAP, pass by reference always has better performance since no local data object is created and no data transport is necessary when the procedure is called. Therefore, for performance reasons, pass by reference is usually preferable, unless explicit or implicit writes to an input parameter take place in the procedure or if it needs to be ensured that an input/output parameter or an output parameter is returned only if the procedure ends without any errors. In such a case, pass by value is mandatory, to make sure that the assigned [actual parameter](ABENACTUAL_PARAMETER_GLOSRY.html) is not modified simultaneously in the caller when writes are made to a formal parameter. For performance reasons, only parameters of 100 bytes or less should be passed in these cases, whenever possible.

Also note the following when using pass by reference:

Procedures and their calls must be programmed in such a way that these kinds of errors do not occur.

To summarize, pass by reference is always preferable when performance is important, whereas pass by value is more secure in situations where the emphasis is on robustness and data consistency. These factors must be considered when deciding which pass-by type to use with which type of parameter.

[Choose a suitable pass-by type](ABENTYPE_TRANSF_FORMAL_PARA_GUIDL.html)

For a method `meth`, `CHANGING` parameter `p1` is defined for pass by reference and `p2` for pass by value. The value of both parameters is changed before an exception is raised. The actual parameter `a1` bound to the parameter using pass by reference contains the changed value when the exception is handled. The actual parameter `a2` bound to the parameter using pass by value, on the other hand, keeps its value.

[Class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) can be declared using `RAISING` in all procedures ([methods](ABENMETHOD_GLOSRY.html), [function modules](ABENFUNCTION_MODULE_GLOSRY.html), and [subroutines](ABENSUBROUTINE_GLOSRY.html)), and can then be [propagated from the procedure](ABENEXCEPTIONS_PROCEDURES.html). `EXCEPTIONS` can also be used in methods and function modules to define non-class-based exceptions, which can then be raised in the procedure using [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html).

-   [Input parameters](ABENINPUT_PARAMETER_GLOSRY.html)
-   An input parameter is a formal parameter to which the value of an actual parameter s passed at the time of a call and which is evaluated in the procedure. Input parameters for which [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) is defined must not be accessed with write access in the procedure. Input parameters are defined for [methods](ABENMETHOD_GLOSRY.html) and [function modules](ABENFUNCTION_MODULE_GLOSRY.html) using `IMPORTING`, which is why they are also called [importing parameters](ABENIMPORTING_PARAMETER_GLOSRY.html). For [subroutines](ABENSUBROUTINE_GLOSRY.html), input parameters are defined using `USING` and the latter are not protected against write access defined for pass by reference.
-   [Output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html)
-   An output parameter is a formal parameter whose value is set in the procedure and is made available in the actual parameter after the procedure is completed. Output parameters are defined in [methods](ABENMETHOD_GLOSRY.html) and [function modules](ABENFUNCTION_MODULE_GLOSRY.html) using `EXPORTING` and are therefore also referred to as [exporting parameters](ABENEXPORTING_PARAMETER_GLOSRY.html). In [subroutines](ABENSUBROUTINE_GLOSRY.html), output parameters are grouped together with the [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) and are defined using `CHANGING`.
-   [Input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html)
-   An input/output parameter is a formal parameter to which the value of an actual parameter s passed at the time of a call, whose value can be set in the procedure and is available in the actual parameter at the end of the procedure. In all procedures, input/output parameters are defined using the addition `CHANGING` and are therefore also referred to as [changing parameters](ABENCHANGING_PARAMETER_GLOSRY.html).
-   [Return values](ABENRETURN_VALUE_GLOSRY.html)
-   Return values contain the result of [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) at the end of the procedure. They are defined using the addition [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html) and are therefore also referred to as [returning parameters](ABENRETURNING_PARAMETER_GLOSRY.html).

-   **Pass by reference**
-   In the case of pass by reference, a reference to the actual parameter is passed to the procedure when it is called. The procedure then works with the actual parameter itself. No local data object is created for the actual parameter. Input parameters that are passed by reference cannot be changed in the procedure (exception: `USING` parameters of subroutines).
-   **Pass by value**
-   In the case of pass by value, a type-compliant local data object is created as a copy of the actual parameter for the formal parameter. Output parameters and return values are initialized when the procedure is started and input parameters, as well as input/output parameters, are given the value of the actual parameter. A changed formal parameter is only passed to the actual parameter if the procedure is completed without errors.

-   In [subroutines](ABENSUBROUTINE_GLOSRY.html), writes can be made to an input parameter defined using `USING` without a syntax error being produced. In contrast, for input parameters of methods or function modules defined using `IMPORTING` writes are syntactically forbidden.
-   An output parameter that is passed by reference acts like an input/ output parameter; that is, if read access to an output parameter is carried out in the procedure before the value of that parameter is changed, this value is not initial, unlike with pass by value, but corresponds to the current value of the actual parameter in the caller.
-   If a procedure is terminated because of an error, that is, if it is terminated for a reason other than reaching its last statement or `RETURN`, `EXIT`, or `CHECK`, all actual parameters that are passed by reference are set to the value of the assigned formal parameter that the parameter was at when the program was terminated. In pass by value, no values are passed to actual parameters when a procedure is terminated.

-   When strings or internal tables of the same type are passed by value, [table sharing](ABENSHARING_GLOSRY.html) takes effect between the data object created locally and the passed data object, such as in [assignments](ABENASSIGNMENT_GLOSRY.html). However, [table sharing](ABENTABLE_SHARING_GLOSRY.html) only occurs if the line type of the internal table allows it. When passing strings and internal tables, the performance drawbacks of pass by value can, under certain circumstances, be lifted by sharing.
-   Only pass by reference can be specified for the obsolete [table parameters](ABENTABLE_PARAMETER_GLOSRY.html).
-   A local data object is generated for formal parameters that are passed by reference and are not bound to an actual parameter during the call as for pass by value.
-   There are special rules for defining [literals](ABENTYPING_LITERALS.html) and [expressions as actual parameters](ABENTYPING_ARITH_EXPR.html):

-   When a literal is bound, its typing is not checked as strictly.
-   When a function, a calculation expression, a constructor expression, or a table expression is bound, passing is always [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), even if the formal parameter is defined as [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html).

-   The result of the [typing check](ABENTYPING_CHECK.html) when passing actual parameters to formal parameters is independent of the pass type. In a [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the check for [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) is always performed, even though this is stricter than necessary in individual cases. For example, a special reference variable cannot be passed to a general typed `CHANGING` parameter, even if pass by value is defined for this parameter.
-   Pass by value is mandatory for the [return value](ABENRETURN_VALUE_GLOSRY.html) of [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html), the output parameters of [events](ABENEVENT_GLOSRY.html) in ABAP Objects, and for all formal parameters of [RFC](ABENRFC_GLOSRY.html)\-enabled function modules and [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) (pass by value is also used implicitly with table parameters).

CLASS cx\_exception DEFINITION \\n INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth CHANGING p1 TYPE i \\n VALUE(p2) TYPE i \\n RAISING cx\_exception. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n p1 = 333. \\n p2 = 444. \\n RAISE EXCEPTION TYPE cx\_exception. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA(a1) = 111. \\n DATA(a2) = 222. \\n TRY. \\n cls=>meth( CHANGING p1 = a1 \\n p2 = a2 ). \\n CATCH cx\_exception. \\n cl\_demo\_output=>display( |\\{ a1 \\}, \\{ a2 \\}| ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_procedures.html