---
title: "ABAPREFRESH_ITAB"
description: |
  ABAPREFRESH_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREFRESH_ITAB.htm"
abapFile: "ABAPREFRESH_ITAB.html"
keywords: ["delete", "do", "if", "class", "data", "internal-table", "ABAPREFRESH", "ITAB"]
---

[Short Reference](ABAPREFRESH_SHORTREF.html)

`REFRESH itab.`

This statement deletes all lines in an internal table `itab`. This releases the memory space required for the table, except for the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html). The operand `itab` must be an internal table.

The statement [`FREE`](ABAPFREE_DATAOBJECT.html) can be used to delete all lines and release all memory occupied by these lines including the initial memory requirement.

This statement always sets `sy-subrc` to 0.

The following example shows that `REFRESH` initializes the table body but not the header line of an internal table `itab`.

-   The statement `REFRESH itab` has the same effect on internal tables as [`CLEAR itab[]`](ABAPCLEAR.html). If the internal table `itab` has a [header line](ABENHEADER_LINE_GLOSRY.html), the [table body](ABENTABLE_BODY_GLOSRY.html) is initialized and not the header line.
-   If the internal table `itab` does not have a header line, `REFRESH itab` has the same effect as `CLEAR itab`. The use of tables with header lines is obsolete and forbidden in classes, which makes the use of `REFRESH` instead of `CLEAR` obsolete too. [`CLEAR`](ABAPCLEAR.html) or [`FREE`](ABAPFREE_DATAOBJECT.html) can always be used to delete lines in internal tables.

DATA itab TYPE TABLE OF i WITH HEADER LINE. \\n\\ \\nDO 3 TIMES. \\n itab = sy-index. \\n APPEND itab. \\nENDDO. \\n\\ \\nASSERT itab IS NOT INITIAL. \\nASSERT itab\[\] IS NOT INITIAL. \\n\\ \\nREFRESH itab. \\n\\ \\nASSERT itab IS NOT INITIAL. \\nASSERT itab\[\] IS INITIAL. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html