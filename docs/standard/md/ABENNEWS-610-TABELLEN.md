---
title: "ABENNEWS-610-TABELLEN"
description: |
  ABENNEWS-610-TABELLEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-TABELLEN.htm"
abapFile: "ABENNEWS-610-TABELLEN.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "610", "TABELLEN"]
---

In ABAP release 6.10, the following enhancements have been made to internal tables:

[1\. Creating a Table Object](#ABAP_MODIFICATION_1@4@)

[2\. Checking the Convertibility of Key Fields](#ABAP_MODIFICATION_2@4@)

[3\. Duplicate or Overlapping Key Specifications](#ABAP_MODIFICATION_3@4@)

[4\. Support for Accessing Attributes](#ABAP_MODIFICATION_4@4@)

[5. Table Categories for Text Pools and `IN` Conditions](#ABAP_MODIFICATION_5@4@) 

[6. Handling Overflows in `COLLECT` and `SUM`](#ABAP_MODIFICATION_6@4@)

[7. Additions `ASSIGNING` and `REFERENCE INTO`](#ABAP_MODIFICATION_7@4@)

[8\. Uppercase and Lowercase Spelling in Dynamic Components](#ABAP_MODIFICATION_8@4@)

[9. Combined Key Specifications with `table_line`](#ABAP_MODIFICATION_9@4@)

[10\. Establishing the Number of Lines in an Internal Table](#ABAP_MODIFICATION_10@4@)

[11\. Optimization when Accessing Internal Tables](#ABAP_MODIFICATION_11@4@)

[12\. Offset and Length Declarations for the Table Definition](#ABAP_MODIFICATION_12@4@)

Any table objects can be created at runtime by using the statement [`CREATE DATA`](ABAPCREATE_DATA.html). If the table type is known in full, this is respected by the syntax check.

In the case of the statements [`READ TABLE itab WITH KEY k1 = v1 .... kn = vn`](ABAPREAD_TABLE.html) and [`DELETE TABLE itab WITH KEY = v1 .... kn = vn`](ABAPDELETE_ITAB.html), the system already checks whether the key values are convertible to the component type in the syntax check. This convertibility check is also effective for the newer variant `READ ... WITH TABLE KEY ...`. Previously, the runtime error `MOVE_NOT_SUPPORTED` was raised if the conversion was not possible.

In the case of duplicate or overlapping key specifications, the statement [`READ TABLE itab WITH KEY k1 = v1 .... kn = vn`](ABAPREAD_TABLE.html) now raises a syntax error instead of a syntax warning. If specified dynamically, it was previously the case that the last key specification was used; now the runtime error `DYN_KEY_DUPLICATE` is raised.

The addition `... COMPARING o->attr` now makes it possible to access the attributes of objects that are components of internal tables, similar to when reading, changing, deleting, or sorting internal tables.

Alongside [standard tables](ABENSTANDARD_TABLE_GLOSRY.html), the [tables categories](ABAPTYPES_TABCAT.html)\\ `HASHED` and `SORTED` are supported for the statements [`READ`](ABAPREAD_TEXTPOOL.html), [`DELETE`](ABAPDELETE_TEXTPOOL.html), and [`INSERT TEXTPOOL ...`](ABAPINSERT_TEXTPOOL.html). The `IN` conditions for [`SELECT ... WHERE`](ABAPWHERE.html) and [`LOOP ... WHERE`](ABENLOGEXP_SELECT_OPTION.html) are also no longer dependent on the table category.

Previously, fields of type `f` were only checked for possible overflows in the case of arithmetic additions. When using [`COLLECT`](ABAPCOLLECT.html) and [`SUM`](ABAPSUM.html), the addition was terminated in accordance with IEEE standards and a runtime error was raised as soon as the overflow limit (Infinity) was reached. Now this raises the exception `CX_SY_ARITHMETIC_OVERFLOW`, which can be caught using [`TRY`](ABAPTRY.html).

The additions [`ASSIGNING`](ABAPREAD_TABLE_OUTDESC.html) and [`REFERENCE INTO`](ABAPREAD_TABLE_OUTDESC.html) are now available for the statements [`READ`](ABAPREAD_TABLE.html), [`LOOP`](ABAPLOOP_AT_ITAB.html), [`INSERT`](ABAPINSERT_ITAB.html), [`APPEND`](ABAPAPPEND.html), [`MODIFY`](ABAPMODIFY_ITAB.html), and [`COLLECT`](ABAPCOLLECT.html). Previously, only the addition `ASSIGNING` for the keywords `LOOP` and `READ` was available.

Previously, the field content of a dynamic component always had to written in capitals, for example [`SORT ... BY ('COMP')`](ABAPSORT_ITAB.html). Now lowercase spelling is valid in specifications for all internal table statements.

Now there are additional key specifications for the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line`. Previously, it was not possible to have a key specified in the form `READ ... WITH KEY table_line->attr = ... table_line = ... BINARY SEARCH`, for example, where both the value of the attribute `attr` and the value of the reference itself were the key.

The number of lines in an internal table can be determined using the function [`LINES`](ABAPCOMPUTE_ARITH.html). For consistency, this function is intended to replace the statement [`DESCRIBE TABLE`](ABAPDESCRIBE_TABLE.html) in the long term, since not all ABAP types can be described using `DESCRIBE`.

For ABAP release 6.10, optimized access to tables of the types `SORTED` and `HASHED` has been introduced. For more details, see the section on [Optimized Key Operations](ABENITAB_PERFO.html).

In addition, in the case of assignments between internal tables of the same type, data is now only copied if changes were made to these tables. This [table sharing](ABENTABLE_SHARING_GLOSRY.html) has a positive effect on runtime and the memory required.

Until now, these optimizations had to be carried out explicitly using field symbols. Now it is possible to work normally with a work area, because no table is copied when reads are performed.

Previously, components of the table key could be specified with offset and length declarations, which resulted in undefined runtime behavior. This is no longer possible and a syntax error is raised instead.

abenabap.html abennews.html abennews-6.html abennews-610.html