---
title: "ABENTYPING_ARITH_EXPR"
description: |
  ABENTYPING_ARITH_EXPR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTYPING_ARITH_EXPR.htm"
abapFile: "ABENTYPING_ARITH_EXPR.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENTYPING", "ARITH", "EXPR"]
---

[Expressions](ABENOPERANDS_EXPRESSIONS.html) can be specified as actual parameters in the following formal parameters:

The parameters are evaluated from left to right (and from inside to outside) and the procedure is executed. A parameter cannot be affected by the method itself but by the evaluation of a preceding expression. This applies in particular to [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) in [result positions](ABENRESULT_POSITION_GLOSRY.html).

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

If calculation expressions are specified as actual parameters, the calculation type and calculation length are determined as follows:

When binding a function, a calculation expression, a constructor expression, or a table expression, the parameters are always [passed by value](ABENPASS_BY_VALUE_GLOSRY.html), even if the formal parameter is defined as to be [passed by reference](ABENPASS_BY_REFERENCE_GLOSRY.html).

The return value of a function or the result of a calculation expression, a constructor expression, or a table expression is [converted](ABENCONVERSION_RULES.html), if necessary, to the type of the input parameter and passed.

The functional method `m1` is called twice for each assignment to `result`. The first call is executed in an arithmetic expression, which is passed as an actual parameter in the second call. In the first call of each assignment, the formal parameter `p1` has type `p` of length 16. The number of decimal places is 0 in the first assignment, 14 in the second, and 1 in the third assignment. In the second call, the formal parameter `p1` has the type `decfloat34` in each assignment, because the calculation type of the arithmetic expression is determined by the return value of `m1`.

-   Write Positions

-   [Output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html), [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html), and [return values](ABENRETURN_VALUE_GLOSRY.html) in [method calls](ABAPCALL_METHOD_PARAMETERS.html).

-   Read Positions

-   [Input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of [methods](ABENMETHOD_GLOSRY.html) in [method calls](ABAPCALL_METHOD_PARAMETERS.html), when [objects are created](ABAPCREATE_OBJECT_PARAMETERS.html), or when exceptions are raised using [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional exception](ABENCONDITIONAL_EXPRESSIONS.html)
-   [Input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of [function modules](ABENFUNCTION_MODULE_GLOSRY.html) for all variants of the statement [`CALL FUNCTION`](ABAPCALL_FUNCTION.html).

-   In the case of [dynamic method calls](ABAPCALL_METHOD_DYNAMIC.html), the same rules apply as to static method calls. However, handling at runtime is time-consuming. Therefore, helper variables should be used in a dynamic call instead of expressions if possible. Function module calls are always dynamic and, compared to method calls, fewer rules apply.

-   A [numeric function](ABENMATHEMATICAL_FUNKTION_GLOSRY.html), a [description function](ABENDESCRIPTION_FUNCTION_GLOSRY.html), or an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) can

-   be bound to any numeric or any input parameter typed using the type `any` in a method call.
-   be bound to any appropriately typed input parameter in a function module call.

-   A [bit function](ABENBIT_FUNCTION_GLOSRY.html) or a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) can

-   be bound to any byte-like or general typed input parameter in a method call.
-   be passed to input parameters of type `x` or a generic type including `x` in function module calls.

-   A [character string function](ABENCSTRING_FUNCTION_GLOSRY.html) or a [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) can

-   be bound to any character-like or general typed input parameter in a method call.
-   be passed to input parameters of type `string` or a generic type including `string` in function module calls.

-   A [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) can

-   be passed to every input parameter that matches the specified type [`type`](ABENCONSTRUCTOR_EXPRESSIONS.html) of the constructor expression in method calls. In this case, with the exception of conversion operator [`CONV`](ABENCONV_CONSTRUCTOR_INFERENCE.html) in the constructor expression, the `#` character can only be specified for `type` if the input parameter is typed completely and this type is used.
-   be passed to every input parameter that matches the specified type [`type`](ABENCONSTRUCTOR_EXPRESSIONS.html) of the constructor expression in function module calls. The character `#` cannot be specified for `type` in the constructor expression since no static derivations of types are possible in function module calls.

-   A [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) can

-   be passed in method or function calls to every input parameter that matches the type of the result.

-   In function module calls, the typing is not checked until runtime.
-   No arithmetic expressions, description functions, or numeric functions can be passed to formal parameters with the generic type [`data`](ABENBUILT_IN_TYPES_GENERIC.html). This restriction can be bypassed using the [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html)\\ [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) on the actual parameter. This restriction does not apply to the generic type `any`.

-   The [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of an arithmetic expression is determined

-   in method calls from the operands of the expression and the typing of the input parameter, if this parameter is completely typed. If the input parameter is typed generically, only the operands of the expression are evaluated.
-   in function module calls from the operands of the expression. The typing of the input parameter is ignored.

-   The [calculation length](ABENCALCULATION_LENGTH_GLOSRY.html) of a bit expression is the length of the largest operand of the expression.

-   In a function, a constructor expression, or a table expression, the formal parameter inherits the type of the return value or result. Only bit functions are handled like bit expressions (see below).
-   With an arithmetic expression, the formal parameter inherits the calculation type determined by the operand. If the calculation type is `p`, the length is always 16. The number of decimal places is determined by the accuracy required for the calculation and therefore depends on the values of the operands.
-   In a bit expression or a bit function, the formal parameter is set to type `x` in the calculation length determined by the operands.
-   In a string expression, the formal parameter is set to the type `string` for completely generic typing or the generic types `csquence`\\ `clike`. In the case of the types `c` and `n` with generic length, the length is set to the length of the result of the string expression.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS m1 IMPORTING p1 TYPE numeric \\n RETURNING VALUE(ret) TYPE decfloat34. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n ret = p1. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA num1 TYPE p DECIMALS 2 VALUE '2.00'. \\n DATA num2 TYPE p DECIMALS 2 VALUE '1.00'. \\n DATA result TYPE decfloat34. \\n\\ \\n result = c1=>m1( sqrt( 4 ) + c1=>m1( num1 / 2 ) ). \\n result = c1=>m1( sqrt( 4 ) + c1=>m1( num1 / 3 ) ). \\n result = c1=>m1( sqrt( 4 ) + c1=>m1( num2 / 2 ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html abentyping\_check.html