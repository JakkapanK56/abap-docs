---
title: "ABENLOGEXP_ASSIGNED"
description: |
  ABENLOGEXP_ASSIGNED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_ASSIGNED.htm"
abapFile: "ABENLOGEXP_ASSIGNED.html"
keywords: ["if", "data", "field-symbol", "ABENLOGEXP", "ASSIGNED"]
---

`... <fs> IS [NOT] ASSIGNED ...`

This predicate expression checks whether a memory area is assigned to a field symbol `<fs>`. The expression is true if the field symbol points to a memory area. `<fs>` expects a field symbol declared using [`FIELD-SYMBOLS`](ABAPFIELD-SYMBOLS.html) or declared inline using [`FIELD-SYMBOL( )`](ABENFIELD-SYMBOL_INLINE.html).

With the addition `NOT`, the expression is true if no memory area is assigned to the field symbol.

Assignment of a data object to a field symbol if no memory area has been assigned yet.

FIELD-SYMBOLS TYPE c. \\n\\ \\n... \\n\\ \\nIF IS NOT ASSIGNED. \\n ASSIGN 'Standard Text' TO . \\nENDIF. \\n\\ \\n... abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_expressions.html