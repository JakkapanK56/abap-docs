---
title: "ABENITAB_INITIAL_MEM_REQ"
description: |
  ABENITAB_INITIAL_MEM_REQ - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENITAB_INITIAL_MEM_REQ.htm"
abapFile: "ABENITAB_INITIAL_MEM_REQ.html"
keywords: ["insert", "do", "if", "case", "data", "types", "internal-table", "ABENITAB", "INITIAL", "MEM", "REQ"]
---

The initial memory requirement is a type property of a [table type](ABENTABLE_TYPE_GLOSRY.html) that is not part of its [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) and does not affect its compatibility to other table types.

As for all dynamic data objects, [memory](ABENMEMORY_CONSUMPTION_1.html) is requested for internal tables by inserting content. The data of an internal table is stored in the memory in blocks and the memory is requested block by block. The first block is allocated in the memory even before the table is filled with lines. This block is called the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) of an internal table

If the initial memory requirement becomes insufficient for adding more lines, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The size of the internal memory requirement can be affected by addition [`INITIAL SIZE`](ABAPTYPES_ITAB.html). Normally, this is not necessary, but can make sense for nested internal tables.

When an internal table is initialized with [`CLEAR`](ABAPCLEAR.html), the initial memory requirement is not released. When an internal table is initialized with [`FREE`](ABAPFREE_DATAOBJECT.html), the initial memory requirement is released. The latter is necessary only in case of memory bottlenecks. Normally, performance is improved by reusing the allocated memory when refilling the internal table.

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html