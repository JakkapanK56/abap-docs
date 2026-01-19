---
title: "ABENLOGEXP_SUPPLIED"
description: |
  ABENLOGEXP_SUPPLIED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_SUPPLIED.htm"
abapFile: "ABENLOGEXP_SUPPLIED.html"
keywords: ["update", "if", "case", "method", "class", "ABENLOGEXP", "SUPPLIED"]
---

`... para IS [NOT] SUPPLIED ...`

This predicate expression checks whether a formal parameter `para` of a [procedure](ABENPROCEDURE_GLOSRY.html) is filled or requested. The expression is true if an actual parameter was assigned to the formal parameter when it was called.

This relational expression is only possible in function modules and methods. For `para`, all optional formal parameters can be specified.

With the addition `NOT`, the expression is true if no actual parameter was assigned to the formal parameter in the call.

Some specific rules must be observed in the following procedures:

In cases where `IS SUPPLIED` is not evaluated, the predicate expression returns the value true.

The logical expression of the first `IF` statement in method `m1` is true if an actual parameter is assigned to formal parameter `p1` at the call. The check for the initial value would not be sufficient here, because this is the value of the replacement parameter specified with `DEFAULT`. The logical expression of the second `IF` statement is true if at the call no actual parameter is assigned to formal parameter `p2`.

-   [Remote-enabled function modules](ABENREMOTE_ENABLED_FM_GLOSRY.html)

-   In a [remote function call](ABAPCALL_FUNCTION_DESTINATION-.html) between two AS ABAP, both must have at least ABAP release 4.6 so that `IS SUPPLIED` can be used in the called function module.
-   In a function module called using [`CALL FUNCTION ... STARTING NEW TASK ...`](ABAPCALL_FUNCTION_STARTING.html), `IS SUPPLIED` is not evaluated.
-   In calls from an external RFC interface, `IS SUPPLIED` is evaluated for all currently supported [RFC Libraries](ABENRFC_INTERFACE.html). `IS SUPPLIED` is not evaluated only when an older RFC Library such as `librfc32.dll` is used instead of RFC Software Development Kit for C and C++.

-   [Update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html)
-   In an update function module called using [`CALL FUNCTION ... IN UPDATE TASK ...`](ABAPCALL_FUNCTION_UPDATE.html), `IS SUPPLIED` is not evaluated.

-   In a [functionally called](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html)\\ [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html), the predicate expression `IS SUPPLIED` is true for its return value. In this case, a temporary actual parameter is always bound to the return value, which is used as the operand of the current operand position.
-   The predicate expression `IS SUPPLIED` includes the obsolete expression [`IS REQUESTED`](ABENLOGEXP_REQUESTED.html).

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS m1 IMPORTING p1 TYPE i DEFAULT 0 \\n EXPORTING p2 TYPE i. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n IF p1 IS SUPPLIED. \\n ... \\n ELSE. \\n ... \\n ENDIF. \\n IF p2 IS NOT SUPPLIED. \\n RETURN. \\n ELSE. \\n ... \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html