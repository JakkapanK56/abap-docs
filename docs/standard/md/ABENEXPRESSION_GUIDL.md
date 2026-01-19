---
title: "ABENEXPRESSION_GUIDL"
description: |
  ABENEXPRESSION_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXPRESSION_GUIDL.htm"
abapFile: "ABENEXPRESSION_GUIDL.html"
keywords: ["loop", "do", "if", "method", "data", "ABENEXPRESSION", "GUIDL"]
---

An expression is part of an ABAP statement that returns a result. An expression consists of one or more operands in combination with operators or special ABAP words. Expressions can be logical expressions constructed from relational expressions and also calculation expressions. The latter type is subdivided into arithmetic expressions, bit expressions, and string expressions. Data objects, other suitable expressions, and calls of built-in functions and functional methods can all be used as expression operands. In character string processing, regular expressions for searches and pattern comparisons are also used.

These expressions can be nested and combined in many different ways. Nested and chained calls are possible for functional methods. The maximum nesting depth of expressions is restricted to 32 by ABAP Compiler.

**Limit the complexity of expressions**

Use expressions at operand positions in a way that means the program remains legible and understandable.

The various options for expressions mean that the use of helper variables is superfluous in many places. The use of expressions and functional calls at operand positions is useful under the following prerequisites:

Programs should always be kept clear and legible.. Do not be too ambitious and combine everything into one single expression. If an expression becomes too complex, it should be split at suitable points, and the intermediate results should be saved in helper variables. This particularly applies to character string processing with string templates and to regular expressions. These are very powerful but they can also make programs difficult to read very quickly. [Comments](ABENCOMMENTS_GDL.html) can also help to describe the way a complex expression works.

The following source code shows an arithmetic expression in a relational expression in a loop. The same total must be recalculated for each loop pass.

The following source code has the same function as the example above. However, the total is only calculated once before the loop.

-   The result of an expression or a calculation is required only once. If an intermediate result is required multiple times, it should only be calculated once and saved in a helper variable. (ABAP Compiler does not implicitly handle this task at the moment)
-   The data type of the result matches the operand position, or the conversion rules for an expression or call used at an operand position are suitable for the task to be implemented. If special type conversions must be performed, for example, for date or time fields, helper variables of an appropriate type might be required.

LOOP AT itab ASSIGNING . \\n IF oref->meth( ) < sy-tabix \* ( offset + length ). \\n ... \\n ENDIF. \\nENDLOOP. limit = offset + length. \\nLOOP AT itab ASSIGNING . \\n IF oref->meth( ) < sy-tabix \* limit. \\n ... \\n ENDIF. \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abencomplexity\_gdl.html