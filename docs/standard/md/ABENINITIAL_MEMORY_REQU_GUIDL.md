---
title: "ABENINITIAL_MEMORY_REQU_GUIDL"
description: |
  ABENINITIAL_MEMORY_REQU_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINITIAL_MEMORY_REQU_GUIDL.htm"
abapFile: "ABENINITIAL_MEMORY_REQU_GUIDL.html"
keywords: ["if", "class", "data", "types", "internal-table", "ABENINITIAL", "MEMORY", "REQU", "GUIDL"]
---

Internal tables are stored in the memory block by block. The ABAP runtime framework allocates a suitable memory area for the data of the table by default as the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html). If the initial memory requirement is insufficient, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The [`INITIAL SIZE`](ABAPTYPES_ITAB.html) addition can be used to predefine a number of table lines when declaring an internal table, to override the number of initially allocated lines set by the system.

**Modify the initial memory requirement only for nested tables**

Only use the `INITIAL SIZE` addition for the declaration of inner tables in nested tables if you can avoid using a large amount of memory unnecessarily.

The `INITIAL SIZE` addition is not necessary for external or non-nested tables since the automatic memory location by the runtime framework leads to the required result. Automatic memory allocation only results in excessive memory consumption in nested inner tables if more memory is allocated for a number of inner tables than they actually use. If the number of entries in the inner tables is known from the outset, the initial main memory requirement can be set accordingly using `INITIAL SIZE`.

Instance attributes of classes that are declared as inner tables can also be considered as nested tables. If many instances of a class with tabular attributes are expected, it can be useful to specify `INITIAL SIZE`.

The following source text shows the declaration of a nested table, where the initial memory requirement is specified incorrectly for the outer large table, not the inner small table.

The following source text shows the declaration of a nested table, where the initial memory requirement is specified according to the above rule: for the inner small table and not the outer large table.

TYPES small\_table TYPE STANDARD TABLE OF ... \\n WITH NON-UNIQUE KEY ... \\nTYPES: BEGIN OF line\_structure, \\n ... \\n int\_table TYPE small\_table, \\n ... \\n END OF line\_structure, \\n big\_table TYPE SORTED TABLE OF line\_structure \\n WITH UNIQUE KEY ... \\n INITIAL SIZE 10000. TYPES small\_table TYPE STANDARD TABLE OF ... \\n WITH NON-UNIQUE KEY ... \\n INITIAL SIZE 4. \\nTYPES: BEGIN OF line\_structure, \\n ... \\n int\_table TYPE small\_table, \\n ... \\n END OF line\_structure, \\n big\_table TYPE SORTED TABLE OF line\_structure \\n WITH UNIQUE KEY ... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenitab\_gdl.html