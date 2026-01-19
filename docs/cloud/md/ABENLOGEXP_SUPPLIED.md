---
title: "ABENLOGEXP_SUPPLIED"
description: |
  ABENLOGEXP_SUPPLIED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_SUPPLIED.htm"
abapFile: "ABENLOGEXP_SUPPLIED.html"
keywords: ["if", "case", "method", "class", "ABENLOGEXP", "SUPPLIED"]
---

`... para IS [NOT] SUPPLIED ...`

This predicate expression checks whether a formal parameter `para` of a [procedure](ABENPROCEDURE_GLOSRY.html) is filled or requested. The expression is true if an actual parameter was assigned to the formal parameter when it was called.

This relational expression is only possible in function modules and methods. For `para`, all optional formal parameters can be specified.

With the addition `NOT`, the expression is true if no actual parameter was assigned to the formal parameter in the call.

The logical expression of the first `IF` statement in method `m1` is true if an actual parameter is assigned to formal parameter `p1` at the call. The check for the initial value would not be sufficient here, because this is the value of the replacement parameter specified with `DEFAULT`. The logical expression of the second `IF` statement is true if at the call no actual parameter is assigned to formal parameter `p2`.

-   In a [functionally called](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html)\\ [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html), the predicate expression `IS SUPPLIED` is true for its return value. In this case, a temporary actual parameter is always bound to the return value, which is used as the operand of the current operand position.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS m1 IMPORTING p1 TYPE i DEFAULT 0 \\n EXPORTING p2 TYPE i. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n IF p1 IS SUPPLIED. \\n ... \\n ELSE. \\n ... \\n ENDIF. \\n IF p2 IS NOT SUPPLIED. \\n RETURN. \\n ELSE. \\n ... \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html