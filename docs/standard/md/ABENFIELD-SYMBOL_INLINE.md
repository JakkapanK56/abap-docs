---
title: "ABENFIELD-SYMBOL_INLINE"
description: |
  ABENFIELD-SYMBOL_INLINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFIELD-SYMBOL_INLINE.htm"
abapFile: "ABENFIELD-SYMBOL_INLINE.html"
keywords: ["loop", "do", "if", "data", "types", "internal-table", "field-symbol", "ABENFIELD", "SYMBOL", "INLINE"]
---

`... FIELD-SYMBOL(<fs>) ...`

A declaration expression with the declaration operator `FIELD-SYMBOL` declares a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html)\\ `<fs>` to which a memory area is assigned in the current operand position. The declared field symbol is visible statically in the program from `FIELD-SYMBOL(<fs>)` and is valid in the current [context](ABENOBJ_CONTEXT_GLOSRY.html). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator `FIELD-SYMBOL` can be specified in every valid [declaration position](ABENDECLARATION_POSITIONS.html), which involves assignments of the memory area only. The typing of the field symbol is determined using the statically known type of the assigned memory area. It can be generic or complete.

A field symbol `<fs>` declared inline cannot be used in a read position of the same statement.

[Only use inline declarations locally](ABENDECLARATION_INLINE_GUIDL.html).

Inline declaration of a field symbol for an internal table in an `ASSIGN` statement and inline declaration of a field symbol for the lines of the table in a `LOOP`.

-   A valid statement with an inline declaration of a field symbol can generally be interpreted as a short form for a declaration statement used as a direct prefix.
-   `FIELD-SYMBOLS <fs> TYPE ...`\\
    `... <fs> ...`
-   Exceptions to this rule occur only if an identically named field symbol from a more global context is used in the same statement. This data object is still valid in the statement and is only hidden after the statement.
-   Just like the statement `FIELD-SYMBOLS`, an inline declaration does not open a local context for the current statement block. An inline declaration for a field symbol can only be made once within a context and the field symbol must not have been declared there using `FIELD-SYMBOLS`.
-   If the type of the assigned memory area is defined by reference to a data type of the ABAP Dictionary, it is inherited with its semantic properties, such as field help, input help, or conversion exits.

TYPES t\_itab TYPE TABLE OF i \\n WITH NON-UNIQUE KEY table\_line. \\n\\ \\nFINAL(itab) = VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\nASSIGN itab TO FIELD-SYMBOL(). \\n\\ \\nLOOP AT ASSIGNING FIELD-SYMBOL(). \\n ... \\nENDLOOP. abenabap.html abenabap\_reference.html abendeclarations.html abeninline\_declarations.html