---
title: "Initial Memory Requirements - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_memory_requ_guidl.htm"
abapFile: "abeninitial_memory_requ_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Internal Tables](ABENITAB_GUIDL.md) → 

Initial Memory Requirements

Background

Internal tables are stored in the memory block by block. The ABAP runtime environment allocates a suitable memory area for the data of the table by default. If the initial memory area is insufficient, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The INITIAL SIZE addition is used to predefine a number of table rows when declaring an internal table, to override the number of initially allocated rows set by the system.

Rule

Modify the initial memory requirements only for nested tables

Only use the INITIAL SIZE addition for the declaration of inner tables in nested tables if you can avoid using a large amount of memory unnecessarily.

Details

The INITIAL SIZE addition is not necessary for external or non-nested tables since the automatic memory location by the runtime environment leads to the required result. Automatic memory allocation only results in excessive memory consumption in nested inner tables if more memory is allocated for a number of inner tables than they actually use. If the number of entries in the inner tables is known from the outset, the initial main memory requirement can be set accordingly using INITIAL SIZE.

Note

Instance attributes of classes that are declared as inner tables can also be considered as nested tables. If many instances of a class with tabular attributes are expected, it can be useful to specify INITIAL SIZE.

Bad Example

The following source text shows the declaration of a nested table, where the initial memory requirement is specified incorrectly for the outer large table, not the inner small table.

TYPES small\_table TYPE STANDARD TABLE OF ...
  WITH NON-UNIQUE KEY ...
TYPES: BEGIN OF line\_structure,
         ...
         int\_table TYPE small\_table,
         ...
       END OF line\_structure,
       big\_table TYPE SORTED TABLE OF line\_structure
                 WITH UNIQUE KEY ...
                 INITIAL SIZE 10000.

Good Example

The following source text shows the declaration of a nested table, where the initial memory requirement is specified according to the above rule: for the inner small table and not the outer large table.

TYPES small\_table TYPE STANDARD TABLE OF ...
  WITH NON-UNIQUE KEY ...
  INITIAL SIZE 4.
TYPES: BEGIN OF line\_structure,
         ...
         int\_table TYPE small\_table,
         ...
       END OF line\_structure,
       big\_table TYPE SORTED TABLE OF line\_structure
                 WITH UNIQUE KEY ...
