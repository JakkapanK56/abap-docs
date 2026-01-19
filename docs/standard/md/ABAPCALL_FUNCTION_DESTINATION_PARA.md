---
title: "ABAPCALL_FUNCTION_DESTINATION_PARA"
description: |
  ABAPCALL_FUNCTION_DESTINATION_PARA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_DESTINATION_PARA.htm"
abapFile: "ABAPCALL_FUNCTION_DESTINATION_PARA.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "exception-handling", "ABAPCALL", "FUNCTION", "DESTINATION", "PARA"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

`... \{\ [EXPORTING  p1 = a1 p2 = a2 ...]`\\ 
      `[IMPORTING  p1 = a1 p2 = a2 ...]`\\ 
      `[TABLES     t1 = itab1 t2 = itab2 ...]`\\ 
      `[CHANGING   p1 = a1 p2 = a2 ...]`\\ 
      `[EXCEPTIONS [exc1 = n1 exc2 = n2 ...]`\\ 
                  `[system_failure        = ns [MESSAGE smess]]`\\ 
                  `[communication_failure = nc [MESSAGE cmess]]`\\ 
                  `[OTHERS = n_others]]\ \}`\\ 
  `|\ \{\ [PARAMETER-TABLE ptab]`\\ 
      `[EXCEPTION-TABLE etab]\ \} ...`

[1. `EXPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_1@3@)

[2. `IMPORTING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_2@3@)

[3. `TABLES t1 = itab1 t2 = itab2 ...`](#ABAP_ADDITION_3@3@)

[4. `CHANGING p1 = a1 p2 = a2 ...`](#ABAP_ADDITION_4@3@)

[5. `EXCEPTIONS exc1 = n1 exc2 = n2 ... [MESSAGE ...]`](#ABAP_ADDITION_5@3@)

[6. `PARAMETER-TABLE ptab`](#ABAP_ADDITION_6@3@)

[7. `EXCEPTION-TABLE etab`](#ABAP_ADDITION_7@3@)

Parameter passing for [sRFC](ABENSRFC_GLOSRY.html). These additions are used to assign actual parameters to the formal parameters of the synchronously called remote function module and return values to non-class-based exceptions. These additions essentially have the same meaning as they do in general [function module calls](ABAPCALL_FUNCTION_PARAMETER.html).

In the case of RFC, however, the following differences to general function module calls apply:

Some other differences for specific additions are described in the following.

The following differences apply to the additions `EXPORTING` and `IMPORTING`:

When using `TABLES` to pass data to [table parameters](ABAPTABLES_PARAMETERS_OBSOLETE.html), the difference is that only tables with [flat](ABENFLAT_GLOSRY.html) line types and no [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be passed and any existing [header lines](ABENHEADER_LINE_GLOSRY.html) are not passed.

With respect to the addition `CHANGING`, the same differences apply as to the additions `EXPORTING` and `IMPORTING`.

The addition `EXCEPTIONS` is used to perform classic [non-class-based](ABENEXCEPTIONS_NON_CLASS.html) exception handling, which works in essentially the same way as in general function module calls. In addition, however, the [special exceptions](ABENRFC_EXCEPTION.html)\\ `SYSTEM_FAILURE` and `COMMUNICATION_FAILURE` can be specified here to handle the exceptions raised by the RFC interface itself.

An optional `MESSAGE` addition can also be specified after these exceptions. If one of the special classic exceptions `system_failure` or `communication_failure` is raised, the first line of the associated [short dump](ABENSHORT_DUMP_GLOSRY.html) is placed in the `smess` or `cmess` field. This field must be flat and character-like.

If a remotely called function module raises a class-based exception during non-class-based exception handling, this exception is not transported and raises the predefined classic exception `SYSTEM_FAILURE` instead

These additions use the special internal tables `ptab` and `etab` to assign actual parameters to the formal parameters of the function module and return values to the non-class-based exceptions dynamically.

The description and usage of the internal tables is the same as for the [general call of function modules](ABAPCALL_FUNCTION_DYNAMIC.html), but the RFC-specific rules apply that are described above for static parameter passing.

Furthermore, the column `message` with type `REF TO data` of exception table `etab` can be used as pointer to a character-like field for the special exceptions `system_failure` or `communication_failure`. If such an exception occurs, the character like field is filled with the same content as `smess` or `cmess` specified behind `MESSAGE` in static parameter passing.

[RFC - Dynamic Parameter Passing in sRFC](ABENRFC_PARAMETER_TABLES_ABEXA.html)

-   Bindings of actual parameters to incorrectly specified formal parameters are ignored.
-   Typings are not checked. The content of actual parameters is handled in the remotely called function module and, if possible, is cast to the type of the formal parameter. Rules that depend on the typing and the [RFC log](ABENRFC_PROTOCOL.html) used apply. For more information, see the [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) documentation on SAP Help Portal.
-   Each formal parameter is handled implicitly like an optional parameter. Every input parameter or input/output parameter to which no actual parameter is assigned is given either its type-dependent initial value or a default value specified explicitly in the definition.

-   If a remote-enabled function module is not called using RFC, parameter passing behaves in the same way as in a general function module call and the corresponding exceptions are raised for incorrect formal parameters and unsuitable actual parameters.
-   If possible, the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) checks the passing of parameters and reports any incorrect formal parameters and unsuitable actual parameters as errors.

-   In character-like formal parameters, the actual parameter can have a length different from the formal parameter. In the called function module, a shorter actual parameter is filled with blanks on the right in the input and truncated in the output. If the actual parameter is longer, the reverse applies.
-   [Reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) cannot be passed directly or as components of deep structures. As in general function module calls, however, tables with [deep](ABENDEEP_GLOSRY.html) line types, structures, and strings can be passed.
-   When passing internal tables with non-unique [table keys](ABENITAB_KEY.html), the order of the duplicate lines in relation to these keys is not retained.

-   As long as [basXML](ABENBASXML_GLOSRY.html) is not configured as the [RFC protocol](ABENRFC_PROTOCOL.html), the classic binary RFC protocol is used implicitly for `TABLES` parameters, and not the XML format xRFC, which is otherwise used for deep types. Passing internal tables using the `TABLES` parameters can therefore be considerably faster in this case than with other parameters, depending on the data passed.
-   [basXML](ABENBASXML_GLOSRY.html) is now recommended as a uniform format for all types of RFC communication. The binary RFC protocol currently still has better performance than basXML, but this will change in the future. The addition `TABLES` is therefore only required for RFMs for which performance is currently critical.

-   Class-based exception handling in RFCs is not possible in the current release track.
-   The specification of [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) after `EXCEPTIONS` is ignored in RFC.
-   If the classic exception `SYSTEM_FAILURE` is raised when a [message of type *A*, *E*, or `X`](ABENABAP_MESSAGE_RFC.html) is sent, the `smess` field contains the message short text when `MESSAGE` is specified.

-   [Parameter Passing in RFC](ABENRFC_PARAMETERS_ABEXA.html)
-   [Exception Handling in RFC](ABENRFC_EXCEPTIONS_ABEXA.html)

-   The column `message` of exception table `etab` is not used for general function calls.
-   The character-like field referred by column `message` can also be of type `string` here.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_destination.html