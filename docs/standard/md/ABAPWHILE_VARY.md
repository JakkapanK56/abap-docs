---
title: "ABAPWHILE_VARY"
description: |
  ABAPWHILE_VARY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWHILE_VARY.htm"
abapFile: "ABAPWHILE_VARY.html"
keywords: ["loop", "do", "while", "if", "data", "ABAPWHILE", "VARY"]
---

[Short Reference](ABAPWHILE_SHORTREF.html)

`WHILE ... VARY dobj FROM dobj1 NEXT dobj2 [RANGE range]`\\ 
         `[VARY ...].`\\ 
  `[statement_block]`\\ 
`ENDWHILE.`

The addition `VARY` and its addition `RANGE` have exactly the same effect on a [`WHILE`](ABAPWHILE.html) loop as the other obsolete additions [`VARYING`](ABAPDO_VARYING.html) and [`RANGE`](ABAPDO_VARYING.html) of the statement [`DO`](ABAPDO.html). The addition `VARY` can be used more than once in a `WHILE` statement.

-   The way the addition `VARY` works depends on the internal structure of the working memory, which itself can be affected by [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html).
-   Instead of the addition `VARY`, the statement [`ASSIGN`](ABAPASSIGN.html) should be used in the loop with the addition [`INCREMENT`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html).

-   *Cause:* Invalid access to tables, strings, field references, or object references within the range specified by the addition `RANGE`.
    *Runtime error:*\\ `DO_WHILE_VARY_ILLEGAL_ACCESS`
-   *Cause:* Access to data outside the range specified by the `RANGE` addition.
    *Runtime error:*\\ `DO_WHILE_VARY_NOT_IN_RANGE`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abenobsolete\_control\_structures.html