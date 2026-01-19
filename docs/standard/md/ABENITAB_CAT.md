---
title: "ABENITAB_CAT"
description: |
  ABENITAB_CAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_CAT.htm"
abapFile: "ABENITAB_CAT.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "data", "types", "internal-table", "ABENITAB", "CAT"]
---

What category of table should be used in an individual case depends on the type of individual line access that will be used most frequently on the table. These rules are made suitably relative to tables with [secondary keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html).

A table `scarr_tab_down` intended for index access should be sorted by key field in descending order. This can only be a standard table. To sort in ascending order, a sorted table can and should be used, in this case `scarr_tab_up`. If only key access is required, then a hashed table like `scarr_tab_key` can be used.

-   **Standard Tables**
-   This table category is appropriate when the individual entries can be accessed using the [index](ABENINDEX_GLOSRY.html). Access using the index is the fastest possible access to table entries. Standard tables should be filled by appending lines using [`APPEND`](ABAPAPPEND.html) and implement other accesses using an index specification (`INDEX` addition of the respective statements). Since the cost of accesses to standard tables using the primary key increases linearly with the number of table entries, this type of access should only be used on standard tables if the filling of the table can be separated from the rest of the processing. If a standard table is sorted after filling, the cost of a key access with a binary search ([`BINARY SEARCH`](ABAPREAD_TABLE_FREE.html)) only depends logarithmically on the number of table entries.
-   **Sorted Tables**
-   This table category is appropriate if the table must already be sorted at the time it is constructed. The filling of the table takes place by insertion using the [`INSERT`](ABAPINSERT_ITAB.html) statement and in accordance with the sort order defined by the primary table key. The cost of key accesses depends logarithmically on the number of table entries because a binary search is performed automatically. Sorted tables are also particularly suited for partially sequential processing in a [`LOOP`](ABAPLOOP_AT_ITAB.html), if initial parts of the table key are specified in the `WHERE` condition.
-   **Hashed Tables**
-   This table category is suitable when key accesses are the central operation on table entries. Hashed tables cannot be accessed using a primary table index. However, the cost per key access is always constant and independent of the number of table entries. As with database tables, the key of hashed tables is always unique. Therefore, hashed tables are suitable for creating database-like internal tables and using them accordingly.

DATA scarr\_tab\_down \\n TYPE STANDARD TABLE OF scarr \\n WITH NON-UNIQUE KEY carrid. \\n\\ \\nDATA scarr\_tab\_up \\n TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nDATA scarr\_tab\_key \\n TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n ORDER BY carrid DESCENDING \\n INTO TABLE @scarr\_tab\_down. \\n\\ \\nscarr\_tab\_up = scarr\_tab\_down. \\n\\ \\nscarr\_tab\_key = scarr\_tab\_up. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( scarr\_tab\_down\[ 1 \] \\n )->write( scarr\_tab\_up\[ 1 \] \\n )->write( scarr\_tab\_key\[ carrid = 'UA' \] \\n )->display( ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html