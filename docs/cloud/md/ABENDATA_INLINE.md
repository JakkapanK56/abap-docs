---
title: "ABENDATA_INLINE"
description: |
  ABENDATA_INLINE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_INLINE.htm"
abapFile: "ABENDATA_INLINE.html"
keywords: ["loop", "do", "if", "data", "types", "internal-table", "field-symbol", "ABENDATA", "INLINE"]
---

`... DATA(var) ...`

A declaration expression with the declaration operator `DATA` declares a [variable](ABENVARIABLE_GLOSRY.html)\\ `var` that is used as an operand in the current [write position](ABENWRITE_POSITION_GLOSRY.html). The declared variable is visible statically in the program as of `DATA(var)` and is valid in the current [context](ABENOBJ_CONTEXT_GLOSRY.html). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator `DATA` can be specified in any designated [declaration position](ABENDECLARATION_POSITIONS.html). The date type of the variable is determined by the [operand type](ABENOPERAND_TYPE_GLOSRY.html). It must be possible to derive this type completely statically.

A variable `var` declared inline cannot be used in a read position of the same statement.

If a data object called `data` already exists in the current context, `DATA(var)` is interpreted as a [substring access](ABENOFFSET_LENGTH.html) and not as an inline declaration. A syntax warning indicates this. `DATA(var)` only works as an inline declaration if there is no data object called `data` yet.

Inline declaration of an internal table as the target field of an assignment and inline declaration of an appropriate work area in a `LOOP`. Since there are other write accesses to the variables, inline declarations with [`FINAL`](ABENFINAL_INLINE.html) are not possible here.

If a data object called `data` does not exist in the current context, the first statement is an inline declaration and the second statement executes a substring access.

-   A valid statement with an inline declaration of a variable can generally be interpreted as a short form for a declaration statement used as a direct prefix.
-   `DATA var TYPE ...`\\
    `... var ...`
-   Deviations from this rule occur only if an identically named data object of a more global context is used in the same statement. This is still valid in the statement and is only hidden after the statement.
-   Just like the statement `DATA`, an inline declaration does not open a local context for the current statement block. An inline declaration for a variable can only be made once within a context and the variable must not have been declared there using `DATA`.
-   An inline declaration can never occur on the right-hand side of an assignment or within an expression.
-   The operand position and the types of other operands can be included in the static derivation of the operand type. If the type of a different operand cannot be identified statically, for example because it is specified as a generically typed field symbol, either a suitable [standard type](ABENSTANDARD_TYPE_GLOSRY.html) is used or no inline declaration is possible.
-   If the operand type is defined by reference to a data type of the ABAP Dictionary, it is inherited with its semantic properties, such as field help, input help, or conversion exits.
-   If multiple equally valid operand types are possible in a [declaration position](ABENDECLARATION_POSITIONS.html), the recommended preferred data type is generally used.
-   If no other write accesses to the variable `var` should take place in the current context, it is preferable to use the declaration operator [`FINAL`](ABENFINAL_INLINE.html) to declare an immutable variable instead of `DATA`.

TYPES t\_itab TYPE TABLE OF i \\n WITH NON-UNIQUE KEY table\_line. \\n\\ \\nDATA(itab) = VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ). \\n... \\nAPPEND 4 TO itab. \\n... \\nLOOP AT itab INTO DATA(wa). \\n ... \\n wa = 0. \\n ... \\nENDLOOP. DATA(data) = '1'. \\nDATA(data) = '2'. abenabap.html abenabap\_reference.html abendeclarations.html abeninline\_declarations.html