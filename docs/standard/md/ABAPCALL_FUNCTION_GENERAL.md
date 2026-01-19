---
title: "ABAPCALL_FUNCTION_GENERAL"
description: |
  ABAPCALL_FUNCTION_GENERAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_GENERAL.htm"
abapFile: "ABAPCALL_FUNCTION_GENERAL.html"
keywords: ["update", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPCALL", "FUNCTION", "GENERAL"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

``CALL FUNCTION func \{\ [`parameter_list`](ABAPCALL_FUNCTION_PARAMETER.html)``\\ 
                   ``|\ [`parameter_tables`](ABAPCALL_FUNCTION_DYNAMIC.html)\ \}.``

This statement calls the [function module](ABENFUNCTION_MODULE_GLOSRY.html) specified in `func`. The name `func` must be a character-like data object that contains the name of a function module allowed by the package check in uppercase letters when the statement is executed. Since each function module in [AS ABAP](ABENAS_ABAP_GLOSRY.html) has a unique name, the function pool does not need to be specified. The following can be specified for `func`:

When the statement is executed, `func` is not evaluated until runtime in both cases. In particular, the types of the [parameters](ABAPCALL_FUNCTION_PARAMETER.html) are not known until runtime. In both cases, incorrectly specified function modules or parameters produce runtime errors and not syntax errors

The additions [`parameter_list`](ABAPCALL_FUNCTION_PARAMETER.html) or [`parameter_tables`](ABAPCALL_FUNCTION_DYNAMIC.html) are used to statically or dynamically assign actual parameters to the formal parameters of the function module and return values to the non-class-based exceptions.

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

Since `func` is not evaluated until runtime when function modules are called, no [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) and no [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) can be specified as actual parameters, unlike in static method calls.

Call of function modules `READ_SPFLI_INTO_TABLE` and `READ_SPFLI_INTO_TABLE_NEW` with parameter passing and handling of non-classified and class-based exceptions.

[Calling Function Modules](ABENCALL_FUNCTION_ABEXA.html)

`CX_SY_NO_HANDLER`

`CX_SY_DYN_CALL_ILLEGAL_FUNC`

`CX_SY_DYN_CALL_ILLEGAL_TYPE`

`CX_SY_DYN_CALL_PARAM_MISSING`

`CX_SY_DYN_CALL_PARAM_NOT_FOUND`

-   Literal or constant
-   If the data object `func` is specified as a [character literal](ABENTEXT_LITERAL_GLOSRY.html) or as a [constant](ABENCONSTANT_GLOSRY.html), it is evaluated as a statically specified object by tools such as the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) or the where-used list.
-   Variable
-   If the data object `func` is specified as a [variable](ABENVARIABLE_GLOSRY.html), it is specified only dynamically, and the content is not evaluated statically.

-   See [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

-   *Cause:* The called function is known but not active.
    *Runtime error:*\\ `CALL_FUNCTION_NOT_ACTIVE`
-   *Cause:* The called function is unknown.
    *Runtime error:*\\ `CALL_FUNCTION_NOT_FOUND`

-   *Cause:* The type of the actual parameter does not meet the requirements of the function interface.
    *Runtime error:*\\ `CALL_FUNCTION_CONFLICT_GEN_TYP`
-   *Cause:* The actual parameter does not have the length expected by the function.
    *Runtime error:*\\ `CALL_FUNCTION_CONFLICT_LENG`
-   *Cause:* The actual parameter does not have the type expected by the function.
    *Runtime error:*\\ `CALL_FUNCTION_CONFLICT_TYPE`
-   *Cause:* Only valid functions can be called in the update.
    *Runtime error:*\\ `CALL_FUNCTION_NO_VB`
-   *Cause:* An actual parameter does not meet the alignment requirements of the corresponding formal parameter.
    *Runtime error:*\\ `CALL_FUNCTION_WRONG_ALIGNMENT`

-   *Cause:* The function expects a parameter that was not passed by the caller.
    *Runtime error:*\\ `CALL_FUNCTION_PARM_MISSING`

-   *Cause:* The caller passed a parameter that is not recognized by the function.
    *Runtime error:*\\ `CALL_FUNCTION_PARM_UNKNOWN`

DATA itab TYPE spfli\_tab. \\n\\ \\nCALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE' \\n EXPORTING \\n id = 'LH' \\n IMPORTING \\n itab = itab \\n EXCEPTIONS \\n not\_found = 4. \\nIF sy-subrc <> 0. \\n ... \\nENDIF. \\n\\ \\nTRY. \\n CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE\_NEW' \\n EXPORTING \\n id = 'LH' \\n IMPORTING \\n itab = itab. \\n CATCH cx\_no\_flight\_found INTO FINAL(exc). \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html