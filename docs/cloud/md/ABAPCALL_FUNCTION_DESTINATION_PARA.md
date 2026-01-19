---
title: "ABAPCALL_FUNCTION_DESTINATION_PARA"
description: |
  ABAPCALL_FUNCTION_DESTINATION_PARA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_FUNCTION_DESTINATION_PARA.htm"
abapFile: "ABAPCALL_FUNCTION_DESTINATION_PARA.html"
keywords: ["do", "if", "class", "data", "types", "internal-table", "exception-handling", "ABAPCALL", "FUNCTION", "DESTINATION", "PARA"]
---

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

Parameter passing for sRFC. These additions are used to assign actual parameters to the formal parameters of the synchronously called remote function module and return values to non-class-based exceptions. These additions essentially have the same meaning as they do in general [function module calls](ABAPCALL_FUNCTION_PARAMETER.html).

Some other differences for specific additions are described in the following.

The following differences apply to the additions `EXPORTING` and `IMPORTING`:

When using `TABLES` to pass data to table parameters, the difference is that only tables with [flat](ABENFLAT_GLOSRY.html) line types and no [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be passed.

With respect to the addition `CHANGING`, the same differences apply as to the additions `EXPORTING` and `IMPORTING`.

The addition `EXCEPTIONS` is used to perform classic [non-class-based](ABENEXCEPTIONS_NON_CLASS.html) exception handling, which works in essentially the same way as in general function module calls. In addition,

If a remotely called function module raises a class-based exception during non-class-based exception handling, this exception is not transported and raises the predefined classic exception `SYSTEM_FAILURE` instead

These additions use the special internal tables `ptab` and `etab` to assign actual parameters to the formal parameters of the function module and return values to the non-class-based exceptions dynamically.

The description and usage of the internal tables is the same as for the [general call of function modules](ABAPCALL_FUNCTION_DYNAMIC.html), but the RFC-specific rules apply that are described above for static parameter passing.

Furthermore, the column `message` with type `REF TO data` of exception table `etab` can be used as pointer to a character-like field for the special exceptions `system_failure` or `communication_failure`. If such an exception occurs, the character like field is filled with the same content as `smess` or `cmess` specified behind `MESSAGE` in static parameter passing.

-   If a remote-enabled function module is not called using RFC, parameter passing behaves in the same way as in a general function module call and the corresponding exceptions are raised for incorrect formal parameters and unsuitable actual parameters.

-   In character-like formal parameters, the actual parameter can have a length different from the formal parameter. In the called function module, a shorter actual parameter is filled with blanks on the right in the input and truncated in the output. If the actual parameter is longer, the reverse applies.
-   [Reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) cannot be passed directly or as components of deep structures. As in general function module calls, however, tables with [deep](ABENDEEP_GLOSRY.html) line types, structures, and strings can be passed.
-   When passing internal tables with non-unique [table keys](ABENITAB_KEY.html), the order of the duplicate lines in relation to these keys is not retained.

-   Class-based exception handling in RFCs is not possible in the current release track.

-   The column `message` of exception table `etab` is not used for general function calls.
-   The character-like field referred by column `message` can also be of type `string` here.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abapcall\_function\_destination.html