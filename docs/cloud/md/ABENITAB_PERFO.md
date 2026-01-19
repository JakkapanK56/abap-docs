---
title: "ABENITAB_PERFO"
description: |
  ABENITAB_PERFO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENITAB_PERFO.htm"
abapFile: "ABENITAB_PERFO.html"
keywords: ["insert", "update", "delete", "loop", "do", "if", "case", "try", "data", "types", "internal-table", "ABENITAB", "PERFO"]
---

When assignments are made between internal tables of the same type whose line type does not contain any table types, only the internal administration functions are passed to the [table body](ABENTABLE_BODY_GLOSRY.html) for performance reasons. [Table sharing](ABENTABLE_SHARING_GLOSRY.html) is revoked only when write access to one of the tables involved is initiated. The actual copy process then takes place.

Internal tables are [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) whose area in the memory is extended block by block. The size of the first block in the memory is called [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) and can be affected in the declaration of an internal table using the additions [`INITIAL SIZE`](ABAPTYPES_ITAB.html) and the obsolete `OCCURS`.

It is usually up to the system to determine the size of the first block. `INITIAL SIZE` is not used or specified with the value 0. In this case, a suitable block size is chosen the first time lines are added to an internal table.

Specifying a concrete value greater than 0 after `INITIAL SIZE` is only practical if it is known in advance how many entries are to be made in the table, and the first block is therefore to be created with the most suitable dimensions. This can be particularly important for internal tables that are components of other internal tables, and which only contain a few lines (no more than around 5).

To avoid excessive memory demands, the system ignores values that produce memory demands greater than the constant block size.

In an [index table](ABENINDEX_TABLE_GLOSRY.html), the logical order of the table entries is not generally consistent with the physical order of the entries in the main memory. In this case, the logical order is no longer administrated by a physical index, but by a logical index. The same basically applies to the [secondary table indexes](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) used to manage [secondary](ABENSECONDARY_TABLE_KEY_GLOSRY.html)\\ [sorted keys](ABENSORTED_KEY_GLOSRY.html).

Use of the logical index produces additional memory requirements, and index maintenance places a high demand on resources (time and memory) when inserting or deleting table lines. The resource requirements increase proportionally with the number of remaining lines after the insertion or deletion position. For very large internal tables, this can result in considerable demands on performance at runtime.

The logical index is only created when it is needed, that is, when a line is inserted in front of another line, if the order of the table lines is changed, or a line other than the last line is deleted. A logical index is not required if an internal table is filled using only[`APPEND`](ABAPAPPEND.html), and if only its last line or lines is/are deleted using [`DELETE`](ABAPDELETE_ITAB.html).

In contrast to filling a table with [`INSERT`](ABAPINSERT_ITAB.html), appending lines with [`APPEND`](ABAPAPPEND.html) does not require any resources for index maintenance. It is therefore preferable to use `APPEND` instead of `INSERT` to create a [standard table](ABENSTANDARD_TABLE_GLOSRY.html). This is possible if the order of the entries is not important, or if entries can be appended in the correct order.

If entire line areas of a table can be processed at once, this should not be done line-by-line, but using block operations. Block operations are possible using the `FROM` and `TO` additions of the statements [`INSERT`](ABAPINSERT_ITAB.html), [`APPEND`](ABAPAPPEND.html) and [`DELETE`](ABAPDELETE_ITAB.html). Block operations are also more efficient than single record operations when reading from or modifying database tables with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements with the additions `FROM|APPENDING|TO TABLE`.

If, when reading table lines using [`READ TABLE`](ABAPREAD_TABLE.html) or [`LOOP AT`](ABAPLOOP_AT_ITAB.html), a work area is used or table lines can be changed using [`MODIFY`](ABAPMODIFY_ITAB.html) instead of direct access, the `TRANSPORTING` addition can be used to prevent unnecessary assignments of table components to the work area. This can lead to a noticeable improvement in performance, particularly if table-like components are excluded from processing.

The [use of secondary table keys](ABENITAB_KEY_SECONDARY_USAGE.html) should be planned and executed carefully and sparingly. The time gained when accessing individual lines should not be lost again by the increased memory and time requirements for managing the secondary keys. Secondary keys are generally recommended for internal tables that are filled once and rarely changed during program execution.

When lines are deleted from an internal table, administration costs are incurred for all table keys and table indexes. The primary key and all unique secondary keys are updated directly, but non-unique secondary keys are updated only if the line to be deleted is included in the updated part of an associated index ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)).

It should be noted that, particularly for standard tables, the mean runtime of the statement [`DELETE`](ABAPDELETE_ITAB.html) always depends linearly on the number of table lines, even when secondary keys are specified using [`WITH TABLE KEY`](ABAPDELETE_ITAB_KEY.html) or [`USING KEY`](ABAPDELETE_ITAB_KEY.html). This is because a linear search is required to update the primary index, even though the line to be deleted can itself be found quickly.

Deleting lines in internal tables using [`DELETE`](ABAPDELETE_ITAB.html) does not usually release any memory in the internal table. Statements such as [`CLEAR`](ABAPCLEAR.html) or [`FREE`](ABAPFREE_DATAOBJECT.html) must be used to release memory in internal tables.

When using the [`READ`](ABAPREAD_TABLE.html) statement with a specified free key of the form [`WITH KEY ...`](ABAPREAD_TABLE_FREE.html), the search is optimized in all cases where this is possible, that is:

If part of a free key meets these conditions, this partial key is first used to search for an entry. In sorted tables, this is done using a binary search with a logarithmic consumption of resources, and in hashed tables using a hash algorithm, that is, with constant resource consumption. If an entry is found, the system checks whether the rest of the key conditions are also met. This means that over-specific keys in particular are optimized.

See also [Optimization of the `WHERE` Condition](ABENITAB_WHERE_OPTIMIZATION.html).

For textual sorting of an internal table in accordance with the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html), it can be more efficient to use the statement [`CONVERT TEXT INTO SORTABLE CODE`](ABAPCONVERT_TEXT.html) instead of [`SORT AS TEXT`](ABAPSORT_ITAB.html) in the following cases:

-   In [sorted tables](ABENSORTED_TABLE_GLOSRY.html), if any initial section of the [table key](ABENTABLE_KEY_GLOSRY.html) or the complete table key is covered by the specified key.
-   In [hashed tables](ABENHASHED_TABLE_GLOSRY.html), if the complete table key is covered.

-   If an internal table is sorted by locale and then searched binarily using the statement `READ TABLE` or using a [table expression](ABENTABLE_EXPRESSIONS.html).
-   An internal table must be sorted more than once.
-   Indexes for database tables should be structured in accordance with a locale.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html