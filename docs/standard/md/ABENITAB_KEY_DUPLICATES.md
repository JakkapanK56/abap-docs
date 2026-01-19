---
title: "ABENITAB_KEY_DUPLICATES"
description: |
  ABENITAB_KEY_DUPLICATES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_KEY_DUPLICATES.htm"
abapFile: "ABENITAB_KEY_DUPLICATES.html"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABENITAB", "KEY", "DUPLICATES"]
---

When lines are inserted into internal tables with a unique primary key or unique secondary key, duplicates can occur with respect to one or more of these keys. Depending on whether the insertion is a single record operation or a mass operation, the ABAP runtime framework reacts as follows to an attempt to insert an entry with duplicate key values:

The first `INSERT` statement does not insert a line and sets `sy-subrc` to the value 4. The second `INSERT` statement produces a runtime error.

-   First, it checks whether duplicate key values would occur with respect to the primary key. The system behavior is as follows depending on the operation:

-   When single lines are inserted using the variant
-   [`INSERT wa INTO TABLE itab`](ABAPINSERT_ITAB_POSITION.html)
-   duplicate entries with respect to the primary key are ignored and `sy-subrc` is set to 4. This is often used to filter out duplicates when the table is constructed.
-   In all other cases, such as
-   [`INSERT ... INTO itab INDEX idx`](ABAPINSERT_ITAB_POSITION.html)\\ \\n[`INSERT LINES OF`](ABAPINSERT_ITAB_LINESPEC.html) (bulk operation) \\n[`APPEND`](ABAPAPPEND.html)\\ \\n[`COLLECT`](ABAPCOLLECT.html)\\ \\n[`=`](ABAPMOVE.html), [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) (bulk operations)
-   the runtime error `ITAB_DUPLICATE_KEY` occurs.

-   A check is then made to see whether duplicate key values would occur with respect to any existing unique secondary keys. If this is the case,

-   an exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised for the statements [`INSERT`](ABAPINSERT_ITAB.html) and [`APPEND`](ABAPAPPEND.html) if the operation is a single record operation.
-   For all other insert and assignment operations, particularly for all mass operations, the runtime error `ITAB_DUPLICATE_KEY` occurs.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line. \\n\\ \\nitab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\nINSERT 2 INTO TABLE itab. \\n\\ \\nINSERT 2 INTO itab INDEX 2. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html