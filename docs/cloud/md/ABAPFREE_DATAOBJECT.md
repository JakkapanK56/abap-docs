---
title: "ABAPFREE_DATAOBJECT"
description: |
  ABAPFREE_DATAOBJECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFREE_DATAOBJECT.htm"
abapFile: "ABAPFREE_DATAOBJECT.html"
keywords: ["delete", "do", "if", "data", "internal-table", "ABAPFREE", "DATAOBJECT"]
---

`FREE dobj.`

The statement `FREE` deletes all lines from an internal table and releases the complete memory area that was occupied by the lines, including the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html).

On other data objects, `FREE` works like the statement [`CLEAR`](ABAPCLEAR.html).

If `dobj` is a structure with tabular components, the memory of all the tabular components is released.

At the breakpoints in the *memory analysis* of the ABAP debugger, it can be observed that `FREE` releases more allocated bound memory than `CLEAR`. Note that in the restricted language scope breakpoints are not allowed but left here as comments for more clarity.

-   If `dobj` is an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), `FREE` only affects the [table body](ABENTABLE_BODY_GLOSRY.html) and not the header line.
-   Unlike `CLEAR`, the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) does not remain occupied when `FREE` is used. This can become necessary when there is a lack of memory.
-   In general, `FREE` should only be used if the entire memory is to be released completely and the internal table is no longer needed or at the least not filled again immediately.
-   See also [Memory Requirements of Deep Data Objects](ABENMEMORY_CONSUMPTION_1.html).

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY \\n INITIAL SIZE 10000. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ). \\n\\ \\nCLEAR itab. \\n\*BREAK-POINT. \\n\\ \\nFREE itab. \\n\*BREAK-POINT. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abeninitializations.html