---
title: "ABAPCALL_FUNCTION"
description: |
  ABAPCALL_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION.htm"
abapFile: "ABAPCALL_FUNCTION.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "ABAPCALL", "FUNCTION"]
---

[Short Reference](ABAPCALL_FUNCTION_SHORTREF.html)

1\. `CALL FUNCTION func \{\ [parameter_list](ABAPCALL_FUNCTION_PARAMETER.html)`\\
`|\ [parameter_tables](ABAPCALL_FUNCTION_DYNAMIC.html)\ \}.`

2\. `CALL FUNCTION ... DESTINATION ...`

3\. `CALL FUNCTION update_function IN UPDATE TASK`\\
`[EXPORTING p1 = a1 p2 = a2 ...]`\\
`[TABLES t1 = itab1 t2 = itab2 ...].`

Call or registering of a function module. Static and dynamic function module calls have no syntactic differences. The function module is always specified by a data object and the name of the called function module not determined until runtime.

The system field `sy-subrc` is set to 0 when a function module is called. If a [non-class-based exception](ABENEXCEPTIONS_NON_CLASS.html) is raised and is handled by the assignment of a value, `sy-subrc` is set to this value. After the registration of an update function module using `CALL FUNCTION ... IN UPDATE TASK`, `sy-subrc` is undefined.

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

[General Function Module Call](ABAPCALL_FUNCTION_GENERAL.html)

[Remote Function Call](ABAPCALL_FUNCTION_DESTINATION-.html)

[Registration of an Update Task Function Module](ABAPCALL_FUNCTION_UPDATE.html)

-   Unlike in method calls, there are no different syntax variants for static calls and dynamic calls of function modules. They can, however, be distinguished as follows

-   In a dynamic function module call, the name of the function module is specified in a variable and the parameter is passed dynamically. This is possible in general function module calls.

-   In both cases, incorrectly specified function modules or parameters produce runtime errors and not syntax errors
-   [`CALL CUSTOMER-FUNCTION`](ABAPCALL_CUSTOMER-FUNCTION.html) is another variant for calling obsolete function module exits.

-   In static function module calls, a statically known function module is specified as a [character literal](ABENCHARACTER_LITERAL_GLOSRY.html) or as a constant and the parameter is passed statically.
-   These static specifications are evaluated by tools such as the [Extended Program Check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) or the where-used list.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html