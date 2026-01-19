---
title: "ABENFINAL_INLINE"
description: |
  ABENFINAL_INLINE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFINAL_INLINE.htm"
abapFile: "ABENFINAL_INLINE.html"
keywords: ["select", "loop", "do", "while", "if", "catch", "method", "data", "internal-table", "ABENFINAL", "INLINE"]
---

`... FINAL(var) ...`

Declaration of an [immutable variable](ABENIMMUTABLE_VARIABLE_GLOSRY.html). A declaration expression with the declaration operator `FINAL` in general works in the same way as an inline declaration with the declaration operator [`DATA`](ABENDATA_INLINE.html) and the same general rules apply.

While `DATA` declares a regular variable, `FINAL` declares an immutable variable: The write position where the variable `var` is declared with `FINAL` is the only one, where a value can be assigned to that variable in the current [context](ABENOBJ_CONTEXT_GLOSRY.html). In all other positions, any write access leads either to a syntax error or the uncatchable exception `MOVE_TO_LIT_NOTALLOWED_NODATA`.

The declaration operator `FINAL` can be used in the same [declaration positions](ABENDECLARATION_POSITION_GLOSRY.html) as the operator `DATA` with one exception: `FINAL` cannot be used behind `OPEN CURSOR` because usually there is always a second write access with `CLOSE CURSOR` in the same context.

Four immutable variables `date`, `yesterday`, `result`, and `wa` are declared inline with `FINAL`. They can be used at read positions but any attempt using them at write positions would lead to a syntax error or an exception.

Inline declaration of an internal table as a target field of a [`SELECT`](ABAPSELECT.html) statement and inline declaration of a variable for the table transformed to HTML. The data type of the variable is determined by the return value of the method.

The content of the variable `num` referred by the immutable reference variable `dref` can be changed, but not the content of the immutable reference variable itself. `dref` always points to `num` in the following code snippet.

-   The fact that there is only one write position for `FINAL` in a context does not mean that only one write access can be executed at runtime. For example, the declaration operator `FINAL` can be positioned inside a loop or it can be used after `INTO` in a [`LOOP`](ABAPLOOP_AT_ITAB.html) statement. Then a value is assigned multiple times to `var`, but `var` cannot be changed in any other write position.
-   If an immutable variable is a [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html), the immutability concerns the [reference](ABENREFERENCE_GLOSRY.html) but not the content of the object referred by the reference. An immutable reference variable followed by the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html) (`->`) can be used in [write positions](ABENWRITE_POSITION_GLOSRY.html).
-   If a data object called `final` already exists in the current context, `FINAL(var)` is interpreted as a [substring access](ABENOFFSET_LENGTH.html) and not as an inline declaration.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(yesterday) = CONV d( date - 1 ). \\n\\ \\n"yesterday -= 1. <-- Syntax error \\n\\ \\nSELECT carrid, connid, seatsocc \\n FROM sflight \\n WHERE fldate = @yesterday \\n INTO TABLE @FINAL(result). \\n\\ \\nLOOP AT result INTO FINAL(wa). \\n ... \\n "wa-seatsocc = 0. <-- Syntax error \\n ... \\nENDLOOP. \\n\\ \\n"APPEND wa TO result. <-- Syntax error SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nFINAL(html) = cl\_demo\_output=>get( itab ). DATA num TYPE i. \\n\\ \\nFINAL(dref) = REF i( num ). \\n\\ \\ndref->\* = 111. \\n\\ \\n"dref = REF i( 111 ). "Syntax error abenabap.html abenabap\_reference.html abendeclarations.html abeninline\_declarations.html