---
title: "ABAPCALL_FUNCTION_PARAMETER"
description: |
  ABAPCALL_FUNCTION_PARAMETER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_PARAMETER.htm"
abapFile: "ABAPCALL_FUNCTION_PARAMETER.html"
keywords: ["update", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABAPCALL", "FUNCTION", "PARAMETER"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`... [EXPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[IMPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[TABLES     t1 = itab1 t2 = itab2 ...]`\\ 
    `[CHANGING   p1 = a1 p2 = a2 ...]`\\ 
    `[EXCEPTIONS [exc1 = n1 exc2 = n2 ...]`\\ 
                `[error_message = n_error]`\\ 
                `[OTHERS = n_others]].`

[1. `... EXPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_1@3@)

[2. `... IMPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_2@3@)

[3. `... TABLES t1 = itab1 t2 = itab2 ...`](#ABAP_ADDITION_3@3@)

[4. `... CHANGING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_4@3@)

[5. `... EXCEPTIONS exc1 = n1 exc2 = n2 ... OTHERS = n_others`](#ABAP_ADDITION_5@3@)

[6. `... EXCEPTIONS ... error_message = n_error ...`](#ABAP_ADDITION_6@3@)

With the exception of the addition `EXCEPTIONS`, these additions assign the actual parameters `a1`, `a2`, ... to the formal parameters `p1`, `p2`, ... or `t1`, `t2`, ... of the called function module. All data objects and some expressions whose data type [matches](ABENTYPING_CHECK.html) the [typing](ABENTYPING_GLOSRY.html) of the corresponding formal parameter can be specified as actual parameters. With the exception of calculation expressions specified for input parameters, each formal parameter inherits all properties of the assigned actual parameter when called. Non-class-based exceptions can be handled using the addition `EXCEPTIONS`. The order of the additions is predefined.

A catchable exception is raised whenever a formal parameter is incorrect, and the name of the function module is specified by a constant or as a character literal. Unlike method calls, formal parameters are not fully checked by the syntax check. Only parameters that are recognizably misspelled, e.g. by using certain special characters, lead to a syntax warning. A full static check only takes place in the extended program check. If the name of the function module is specified by a variable, the specification of an incorrect formal parameter is ignored at runtime.

This addition assigns actual parameters to the [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of the called function module. `EXPORTING` can be used to assign actual parameters to the optional input parameters but is mandatory for non-optional input parameters. In [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), a reference to an actual parameter is passed when the call is made. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the content of an actual parameter is assigned to the corresponding formal parameter.

`a1`, `a2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), which means that, in addition to data objects, expressions can also be passed as actual parameters. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

This addition assigns actual parameters to the [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) of the called function module. `IMPORTING` can be used to assign actual parameters to all output parameters, but this is not mandatory. In [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), a reference is passed to an actual parameter when the call is made. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the content of an output parameter is assigned to the relevant actual parameter only if the function module is completed without errors.

Unlike in [method calls](ABAPCALL_METHOD_PARAMETERS.html), no [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) and no [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) can be specified.

This addition assigns actual parameters to the [table parameters](ABENTABLE_PARAMETER_GLOSRY.html) of the called function module. If `TABLES` is used, internal tables `itab1`, `itab2`, ... must be assigned to all non-optional table parameters `t1`, `t2`, ... of the called function module and are optional for all optional table parameters. For `itab1`, `itab2`, ..., only [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) can be specified. The data is passed using a reference( except [RFC](ABAPCALL_FUNCTION_DESTINATION-.html)). If a specified table `itab1`, `itab2`, ... has a [header line](ABENHEADER_LINE_GLOSRY.html), this is also passed. Otherwise, the header line of the corresponding table parameter `t1`, `t2`, ... is initial after the call.

This addition assigns actual parameters to the [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) of the called function module. `CHANGING` can be used to assign actual parameters to the optional input/output parameters but is mandatory for non-optional input/output parameters. In [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html), a reference to an actual parameter is passed when the call is made. In [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the content of an actual parameter is assigned to the relevant formal parameter and the modified content of an input/output parameter is only assigned to the relevant actual parameter if the function module is completed without errors.

Unlike in [method calls](ABAPCALL_METHOD_PARAMETERS.html), no [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified.

`EXCEPTIONS` can be used to assign return codes to [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html)\\ `exc1 exc2 ...` declared in the parameter interface. Each exception `exc1 exc2 ...` that the caller wants to handle must be assigned to a directly specified number `n1 n2 ...` All numbers between 0 and 65535 can be specified. The behavior outside of this range is undefined.

By specifying `OTHERS` as the last entry after `EXCEPTIONS`, a common return code can be assigned to all exceptions not specified explicitly in `exc1 exc2...`. This is done by assigning a number `n_others`. The same return code can be assigned to different exceptions (including `OTHERS`). The behavior when an exception is raised is as follows:

If no exception is raised, a call sets `sy-subrc` to 0.

The addition `EXCEPTIONS` cannot be specified in the call if `RAISING` is used to declare [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) in the parameter interface of the called procedure.

During program execution, a specified exception is not checked when a function module is called. Only the extended program check reports whether a specified exception is not declared in its interface.

Specifying the predefined exception `error_message` after `EXCEPTIONS` changes the processing of all messages that are sent as follows during function module processing:

For these cases, message processing is affected as follows:

Call of the function module `GUI_DOWNLOAD` to store the content of an internal table in a file on the current [presentation server](ABENPRESENTATION_SERVER_GLOSRY.html). The name of the function module is specified as a character literal, which is the most frequent type of specification in static parameter assignment.

-   The formal parameters and non-class-based exceptions of a function module are defined as its [parameter interface](ABENFUNCTION.html) in the Function Builder.
-   A [system field](ABENSYSTEM_FIELD_GLOSRY.html) should [never be used an actual parameter](ABENUSE_ACTUAL_PARAMETERS_GUIDL.html).

-   [Substring access](ABENOFFSET_LENGTH.html) is not possible on an actual parameter of type `string` or `xstring` specified after `EXPORTING`.
-   Unlike in [method calls](ABAPCALL_METHOD_PARAMETERS.html), a generic type specification `#` is not possible when a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) is specified. This is because the typing of the parameters is not determined until runtime.

-   If the statement [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) is used to raise an exception `exc1 exc2 ...` to which a return code is assigned, the statement is terminated immediately, any procedure parameters passed by value are not filled, and the number `n1 n2 ...` assigned to the exception is available to be evaluated in `sy-subrc`.
-   If the call of an exception raised by [`RAISE`](ABAPRAISE_EXCEPTION.html) does not assign a return code, the program is terminated with a runtime error.
-   If the call of an exception raised by [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) does not assign a return code, the [message](ABENMESSAGE_GLOSRY.html) is sent, and the system resumes in accordance with the message type.

-   If the value 0 is assigned to an exception, this indicates that the caller wants to ignore this exception. If the exception is raised in the function module, no runtime error occurs, but the exception cannot be handled.
-   For more information about the behavior of class-based exceptions in function modules, see [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).
-   For the addition `EXCEPTIONS`, `CALL FUNCTION` also has an [obsolete short form](ABAPCALL_FUNCTION_EXC_SHORT_FORM.html), in which the specification of the return value `= n` can also be omitted after a specified exception. If an exception is raised, the value 1 is assigned to `sy-subrc` implicitly. The return code must always be specified explicitly, however.

-   Messages sent using the statement [`MESSAGE`](ABAPMESSAGE.html) without the addition [`RAISING`](ABAPMESSAGE_RAISING.html).
-   Messages sent using the statement [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) because no return code is assigned to them.
-   Messages sent by the ABAP runtime framework.

-   [Messages](ABENMESSAGE_GLOSRY.html) of the type S, I, or W are not sent but are flagged in the log during [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html) .
-   Messages of the type E and A raise the exception `error_message` and set `sy-subrc` to `n_error`. The message class, message type, message number, and the content of possible placeholders for the `MESSAGE` statement are available in the fields `sy-msgid`, `sy-msgno`, `sy-msgty`, and `sy-msgv1`, ... `sy-msgv4`. In the case of messages of type A, the statement [`ROLLBACK WORK`](ABAPROLLBACK.html) is also executed implicitly. For more information about behavior in [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html), see [messages in background processing](ABENABAP_MESSAGE_BATCH_JOB.html).
-   Messages of the type X are not affected. As always, they cause a program termination with a [short dump](ABENSHORT_DUMP_GLOSRY.html).

-   When messages are handled with the predefined exception `error_message`, it does not matter whether the message was sent in the current function module or in a module that is called by it. Unlike the exceptions raised by the statement [`RAISE`](ABAPRAISE_EXCEPTION.html), messages sent using the statement [`MESSAGE`](ABAPMESSAGE.html) are propagated across call levels.
-   The following situations can arise for the statement [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) within the called function module:

-   If a return code is assigned to the exception specified after `RAISING`, the exception is handled independently of `error_message` and `sy-subrc` is set to this value.
-   If no return code is assigned to the exception specified after `RAISING` and `error_message` is specified, the sent message is affected as specified above.
-   If no return code is assigned to the exception specified after `RAISING` and `error_message` is not specified, the message is sent in accordance with its type.

-   When a program is resumed after handling a type A message, it must be ensured that a complete [`ROLLBACK WORK`](ABAPROLLBACK.html) has been performed and not just a database rollback.
-   When programs are executed, the ABAP runtime framework can also send messages. These messages are caught using `error_message` in the same way as messages sent using `MESSAGE`.
-   One example for the latter is during automatic checks in dynpros.
-   Only messages from the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) are handled. Messages from programs [called](ABENABAP_PROGRAM_CALL.html) when the function module is processed are not handled.
-   The statement [`ROLLBACK WORK`](ABAPROLLBACK.html) is executed when messages of type A are caught using `error_message` and is therefore forbidden in [updates](ABENABAP_MESSAGE_UPDATE.html) and when processing subroutines after [`PERFORM ON COMMIT`](ABAPPERFORM_ON_COMMIT.html) or [`PERFORM ON ROLLBACK`](ABAPPERFORM_ON_COMMIT.html). It also produces runtime errors.

CONSTANTS path TYPE string VALUE \`c:\\\\temp\\\\\`. \\n\\ \\nDATA: line TYPE c LENGTH 80, \\n text\_tab LIKE STANDARD TABLE OF line, \\n fleng TYPE i. \\n\\ \\n... \\n\\ \\nCALL FUNCTION 'GUI\_DOWNLOAD' \\n EXPORTING \\n filename = path && \`text.txt\` \\n filetype = 'ASC' \\n IMPORTING \\n filelength = fleng \\n TABLES \\n data\_tab = text\_tab \\n EXCEPTIONS \\n file\_write\_error = 1 \\n invalid\_type = 2 \\n no\_authority = 3 \\n unknown\_error = 4 \\n OTHERS = 10. \\n\\ \\nCASE sy-subrc. \\n WHEN 1. \\n ... \\n ... \\nENDCASE. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_general.html