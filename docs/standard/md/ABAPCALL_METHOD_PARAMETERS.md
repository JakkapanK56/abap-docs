---
title: "ABAPCALL_METHOD_PARAMETERS"
description: |
  ABAPCALL_METHOD_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_PARAMETERS.htm"
abapFile: "ABAPCALL_METHOD_PARAMETERS.html"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "ABAPCALL", "METHOD", "PARAMETERS"]
---

[Short Reference](ABAPCALL_METHOD_SHORTREF.html)

`... [EXPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[IMPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[CHANGING   p1 = a1 p2 = a2 ...]`\\ 
    `[RECEIVING  r  = a  ]`\\ 
    `[EXCEPTIONS [exc1 = n1 exc2 = n2 ...]`\\ 
                `[OTHERS = n_others]\ ].`

[1. `... EXPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_1@3@)

[2. `... IMPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_2@3@)

[3. `... CHANGING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_3@3@)

[4. `... RECEIVING r = a`](#ABAP_ADDITION_4@3@)

[5. `... EXCEPTIONS exc1 = n1 exc2 = n2 ... [OTHERS = n_others]`](#ABAP_ADDITION_5@3@)

Apart from the addition `EXCEPTIONS`, these additions assign actual parameters `a1 a2...` to the formal parameters `p1 p2 ...` or `r` of the parameter interface of the called method. Any data objects (and some expressions) can be specified as actual parameters if their data type matches the [typing](ABENTYPING_GLOSRY.html) of the corresponding formal parameter in accordance with the rules of the [typing check](ABENTYPING_CHECK.html).

With the exception of the return value `r` for [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) and the specification of arithmetic expressions for input parameters, every formal parameter inherits all properties of the assigned actual parameters when called. Non-class-based exceptions can be handled using the addition `EXCEPTIONS`. The order of the additions is fixed.

This addition assigns actual parameters to the [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of the called method. `EXPORTING` can be used to assign actual parameters to the optional input parameters and it must be used to assign actual parameters to the non-optional input parameters. In [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), a reference to an actual parameter is passed when the call is made. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the content of an actual parameter is assigned to the relevant formal parameter.

`a1`, `a2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), which means that, in addition to data objects, expressions can also be passed as actual parameters. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

Calls of a method with passing of actual parameters to input parameters. The first call is the syntax short form of the second call. Both have the same functionality.

This addition assigns actual parameters to the [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) of the called method. `IMPORTING` can be used to assign actual parameters to all output parameters, but this is not mandatory. In [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), a reference is passed to an actual parameter when the call is made. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the content of an output parameter is assigned to the relevant actual parameter only if the method is completed without errors.

The actual parameters are [result positions](ABENRESULT_POSITION_GLOSRY.html), which means that variables and [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

Other generic data types cannot be specified correctly for inline declarations and produce a syntax error.

The method `GET_DOCU` of the class `CL_ABAP_DOCU_ITF` has two input parameters and two output parameters, as well as a return value that indicates whether the method was executed successfully. The method is called [functionally](ABAPCALL_METHOD_FUNCTIONAL.html) as an operand of a [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html) in a logical expression. The values in the output are reused in further method calls only if the method completed successfully.

This addition assigns actual parameters to the [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) of the called method. `CHANGING` can be used to assign actual parameters to the optional input/output parameters and it must be used to assign actual parameters to the non-optional input/output parameters. In [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), a reference to an actual parameter is passed when the call is made. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the content of an actual parameter is assigned to the relevant formal parameter. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the modified content of an input/output parameter is assigned to the relevant actual parameter only if the method is completed without errors.

The actual parameters are [result positions](ABENRESULT_POSITION_GLOSRY.html), which means that variables and [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

Call of a method with an input/output parameter.

This addition assigns an actual parameter to the [return value](ABENRETURN_VALUE_GLOSRY.html) of the called method. It is only possible for [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html) and not for [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html). An actual parameter can be assigned to the return value of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) using `RECEIVING`. The data type of the actual parameter does not have to follow the general rules of the [typing check](ABENTYPING_CHECK.html) and it is sufficient if the return value can be converted to the actual parameter in accordance with the [conversion rules](ABENCONVERSION_RULES.html).

If the method is completed without errors, the content of the formal parameter is assigned to the actual parameter. The content is converted if necessary. If an exception is raised here, it cannot be handled and a runtime error always occurs instead.

The actual parameter is a [result position](ABENRESULT_POSITION_GLOSRY.html), which means that variables and [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

An existing variable or expression or an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) can be specified as an actual parameter. An inline declaration is made as soon as the data type of the return value is fully known.

The addition `RECEIVING` is not usually used for static method calls. A functional method with a return value is not usually called as a [standalone method call](ABAPCALL_METHOD_STATIC_SHORT.html) but as a [functional method call](ABAPCALL_METHOD_FUNCTIONAL.html) in [operand positions](ABENOPERAND_POSITION_GLOSRY.html) instead.

Calls of a functional method with return value. The first call is the usual [functional method call](ABAPCALL_METHOD_FUNCTIONAL.html). The second call demonstrates the unusual use of the addition `RECEIVING`. The result is the same in both cases.

This addition is only possible for [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html) and not for [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html).

`EXCEPTIONS` can be used to assign return codes to [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html)\\ `exc1 exc2 ...` declared in the parameter interface. Each exception `exc1 exc2 ...` that the caller wants to handle must be assigned to a directly specified number `n1 n2 ...` All numbers between 0 and 65535 can be specified. The behavior outside of this range is undefined.

By specifying `OTHERS` as the last entry after `EXCEPTIONS`, a common return code can be assigned to all exceptions not specified explicitly in `exc1 exc2...`. This is done by assigning a number `n_others`. The same return code can be assigned to different exceptions (including `OTHERS`). The behavior when an exception is raised is as follows:

If no exception is raised, a call sets `sy-subrc` to 0.

The addition `EXCEPTIONS` cannot be specified in the call if `RAISING` is used to declare [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) in the parameter interface of the called procedure. The specified exceptions must exist in the parameter interface of the method.

Handling of non-class-based exceptions in a method call.

-   The formal parameters and non-class-based exceptions of a method are defined as its [parameter interface](ABENPARAMETER_INTERFACE_GLOSRY.html) using the additions of the statements [`METHODS`](ABAPMETHODS_PARAMETERS.html) or [`CLASS-METHODS`](ABAPCLASS-METHODS_GENERAL.html) of global or local classes.
-   Unlike [function module calls](ABAPCALL_FUNCTION_GENERAL.html), static parameter passing is checked by the syntax check and not just by the extended program check.
-   A [system field](ABENSYSTEM_FIELD_GLOSRY.html) should [never be used as an actual parameter](ABENUSE_ACTUAL_PARAMETERS_GUIDL.html).

-   No [substring access](ABENOFFSET_LENGTH.html) is possible after an actual parameter of type `string` or `xstring` specified after `EXPORTING`.
-   The addition `EXPORTING` can also be omitted in the [short form](ABAPCALL_METHOD_STATIC_SHORT.html) of the static method call.

-   Existing variables or writable expressions can be specified as actual parameters for [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html). Inline declarations, however, cannot be specified.
-   Inline declarations [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) can also be specified for [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html). If an inline declaration is specified and a formal parameter is completely typed, this type is used for the declaration. If the formal parameter is typed generically, the following data types are used:

-   `string` for `csequence` and `clike`
-   `xstring` for `xsequence`
-   `decfloat34` for `numeric` and `decfloat`
-   `p` with the length 8 and no decimal places if `p` is generic
-   The [standard key](ABENSTANDARD_KEY_GLOSRY.html) for a standard table type with a generic primary table key

-   If a formal parameter is typed with the generic type `c` or `x`, for example, `string` or `xstring` cannot be used as the type for an inline declaration, since the typing cannot be checked.
-   Functional method calls are on the right side of assignments or are part of expressions where no inline declarations are possible.

-   If the statement [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) is used to raise an exception `exc1 exc2 ...` to which a return code is assigned, the statement is terminated immediately, any procedure parameters passed by value are not filled, and the number `n1 n2 ...` assigned to the exception is available to be evaluated in `sy-subrc`.
-   If the call of an exception raised by [`RAISE`](ABAPRAISE_EXCEPTION.html) does not assign a return code, the program is terminated with a runtime error.
-   If the call of an exception raised by [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) does not assign a return code, the [message](ABENMESSAGE_GLOSRY.html) is sent, and the system resumes in accordance with the message type.

-   If the value 0 is assigned to an exception, this indicates that the caller wants to ignore this exception. If the exception is raised in the method, no runtime error occurs, but the exception cannot be handled.
-   For more information about the behavior of class-based exceptions in methods, see [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->write\_data( name = 'Some text' \\n value = 'blah, blah ...' ). \\n\\ \\nout->write\_data( EXPORTING name = 'Some text' \\n value = 'blah, blah ...' ). \\n\\ \\nout->display( ). DATA: itf TYPE tline\_tab, \\n head TYPE thead. \\n\\ \\nIF cl\_abap\_docu\_itf=>get\_docu( \\n EXPORTING object = 'ABENABAP' \\n IMPORTING itf = itf \\n head = head ) = 0. \\n cl\_abap\_docu\_itf=>get\_docu\_includes( \\n EXPORTING head = head \\n CHANGING itf = itf ). \\nENDIF. DATA(text) = \`...\`. \\ncl\_demo\_input=>request( CHANGING field = text ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA html type string. \\n\\ \\nhtml = out->get( 'blah, blah ...' ). \\n\\ \\nout->get( EXPORTING data = 'blah, blah ...' \\n RECEIVING output = html ). cl\_gui\_frontend\_services=>directory\_exist( \\n EXPORTING \\n directory = '...' \\n RECEIVING \\n result = FINAL(flag) \\n EXCEPTIONS \\n cntl\_error = 1 \\n error\_no\_gui = 2 \\n wrong\_parameter = 3 \\n not\_supported\_by\_gui = 4 \\n OTHERS = 5 ). \\nIF sy-subrc <> 0. \\n CASE sy-subrc. \\n WHEN 1. \\n ... \\n ... \\n ENDCASE. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html