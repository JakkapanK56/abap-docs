---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINITIAL_MEMORY_REQU_GUIDL.html"
abapFile: "ABENINITIAL_MEMORY_REQU_GUIDL.html"
type: "abap-reference"
---

## Background

Internal tables are stored in the memory block by block. The ABAP runtime framework allocates a suitable memory area for the data of the table by default as the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.md). If the initial memory requirement is insufficient, further blocks are created using an internal duplication strategy until a threshold is reached. After this, all blocks are requested with a constant size between eight and 16 kilobytes.

The [`INITIAL SIZE`](ABAPTYPES_ITAB.md) addition can be used to predefine a number of table lines when declaring an internal table, to override the number of initially allocated lines set by the system.

## Rule

**Modify the initial memory requirement only for nested tables**

Only use the `INITIAL SIZE` addition for the declaration of inner tables in nested tables if you can avoid using a large amount of memory unnecessarily.

## Details

The `INITIAL SIZE` addition is not necessary for external or non-nested tables since the automatic memory location by the runtime framework leads to the required result. Automatic memory allocation only results in excessive memory consumption in nested inner tables if more memory is allocated for a number of inner tables than they actually use. If the number of entries in the inner tables is known from the outset, the initial main memory requirement can be set accordingly using `INITIAL SIZE`.

## Hint

Instance attributes of classes that are declared as inner tables can also be considered as nested tables. If many instances of a class with tabular attributes are expected, it can be useful to specify `INITIAL SIZE`.

## Bad Example

The following source text shows the declaration of a nested table, where the initial memory requirement is specified incorrectly for the outer large table, not the inner small table.

```
TYPES small_table TYPE STANDARD TABLE OF ... 
  WITH NON-UNIQUE KEY ... 
TYPES: BEGIN OF line_structure, 
         ... 
         int_table TYPE small_table, 
         ... 
       END OF line_structure, 
       big_table TYPE SORTED TABLE OF line_structure 
                 WITH UNIQUE KEY ... 
                 INITIAL SIZE 10000.
```

## Good Example

The following source text shows the declaration of a nested table, where the initial memory requirement is specified according to the above rule: for the inner small table and not the outer large table.

```
TYPES small_table TYPE STANDARD TABLE OF ... 
  WITH NON-UNIQUE KEY ... 
  INITIAL SIZE 4. 
TYPES: BEGIN OF line_structure, 
         ... 
         int_table TYPE small_table, 
         ... 
       END OF line_structure, 
       big_table TYPE SORTED TABLE OF line_structure 
                 WITH UNIQUE KEY ...
```
