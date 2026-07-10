---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_TABLE_TYPE_GUIDL.html"
abapFile: "ABENSELECT_TABLE_TYPE_GUIDL.html"
type: "abap-reference"
---

## Background

The table category specifies the internal administration for an internal table and the primary access type:

-   Standard tables that are managed with a primary table index. When inserting or deleting table lines, only the table index is reorganized, but not the remaining table lines. If lines are only appended (`APPEND`) at the end or deleted, no reorganization of the table index is required. However, access using the primary key is not optimized. It triggers a linear search across all lines.
-   Sorted tables are also managed using their primary table index, which is always available in the memory, sorted according to the primary table key. This means that the table index must usually be reorganized each time a table line is inserted or deleted. When accessing using the primary key, a binary search is performed, causing the time required for the search to be merely logarithmically dependent on the number of lines.
-   Hashed tables are based on distributed memory management. They are therefore optimized for access using the primary table key and attain a constant access time, regardless of the number of lines. In return, the distributed memory management requires additional memory space and does not allow for non-unique primary table keys. There is no primary table index, and a respective index access is not possible.

Standard tables and sorted tables can be summarized under the term *index tables*. An index access is always the fastest way to access table entries. The prerequisite for an index access is that the value for the index specification has been determined in advance. This usually requires a previous key access, for example, using `READ` `TABLE`, where the `sy-tabix` system field is set.

## Rule

**Use a suitable table category**

Select the table category according to the primary requirements. As a rule of thumb, if the tables are large, the following selection criteria apply:

-   Mainly index accesses: standard tables
-   Index accesses and key accesses: sorted tables
-   Only key accesses: hashed tables

## Details

Particularly for tables with a lot of lines, you have to select the appropriate table category carefully. The following recommendations are mainly derived from the processing speed requirements:

-   **Standard Tables**
-   This table category can always be used if the primary access types are sequential processing or index access. You should fill standard tables by appending lines using `APPEND` and implement the other accesses using an index specification (the addition `INDEX` of the respective statements). Ideally, the filling process is decoupled from other accesses. After explicit sorting has taken place, you can also use an optimized key access (free key) using `BINARY SEARCH`, which enables you to identify an entry point for sequential processing (`LOOP`), for example. However, due to the linear search, large standard tables (more than 100 lines) are not the appropriate table category, if the primary access type for an internal table is through key accesses.
-   **Sorted Tables**
-   This table category is useful if both a fast key access and an index access are necessary, and if the lines are supposed to be sorted when the table is filled. In addition, sorted tables are also suited for partially sequential access in a `LOOP` loop, where the first part of the table key is specified in the `WHERE` condition. Finally, sorted tables with an ambiguous key are the only alternative to hashed tables if no unique key can be defined.
-   **Hashed Tables**
-   This table category is useful if key accesses are the central operation for table entries, if the tables are large, and if a unique key can be defined.

In addition to the processing speed, memory requirements can also play an important role. If this is supposed to be optimized according to [Consider the Ratio of Administration and Application Data](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.md), you must also take into account the administration costs of the table categories.

-   Standard tables and sorted tables (*index tables*) that are managed using a table index, incur the least [administration costs](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.md) (6 bytes for each line on average). As long as the logical order in the table index corresponds to the physical order in the table body, a standard table does not incur any line-related administration costs. This is the case if you always append lines after the last line or delete only the last line.
-   Hashed tables require considerably more space for their [administration data](ABENADMIN_COSTS_DYN_MEM_OBJ_GUIDL.md) than index tables (18 or 30 bytes for each line on average).

Depending on the length of the key and the number of lines in an internal table, access using a sorted key can be as fast as or even faster than using a hashed table. In cases like this, and if the memory space is critical, you should work with a sorted table instead of a hashed table.

If you use [secondary keys](ABENSECONDARY_KEY_GUIDL.md), the rules mentioned here may be qualified to a certain degree, as the overall costs need to be considered in this case.
