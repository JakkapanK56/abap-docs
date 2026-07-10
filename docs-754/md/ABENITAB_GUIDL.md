---
title: "Internal Tables - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_guidl.htm"
abapFile: "abenitab_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) → 

Internal Tables

An internal table is a dynamic data object consisting of a sequence of rows with the same data type. The data type of an internal table is a table type that has the following basic properties of every internal table:

-   Row type

The row type can be any data type. In particular, tables of

elementary types, tables of structures, tables of tables, and

tables or references are all possible.

-   Table category

The table category specifies the type of storage and primary access. The possible table categories are:

-   Standard tables administered using a primary table index and which cannot have a unique primary table key.

-   Sorted tables administered using a primary table index and that can have a unique or non-unique primary table key (used to sort the table).

-   Hashed tables whose primary table key always has to be unique and which use a hash algorithm (distributed memory management) to administer their rows. A hashed table does not have a primary table index.

-   Primary table key

Every internal table has a primary table key. A table key consists of columns from the internal table. The content of these columns identifies table rows. The table category determines whether a key is unique or non-unique.

Internal tables enable variable datasets (a variable number of rows) with a fixed structure (the row type) to be edited in the working memory of the [internal session](ABENINTERNAL_SESSION_GLOSRY.md "Glossary Entry") of a program. The content of an internal table can either be accessed sequentially in a LOOP or by accessing individual rows (for example, by using READ TABLE or a table expression).

There are two ways of accessing individual rows:

-   By specifying a key (a table key or a free key)

-   By specifying a row index

Primary table access is possible for all three table categories. Access using the primary key, however, is optimized only for sorted tables and hashed tables. In standard tables, primary key access uses a linear search. Access using the primary row index, on the other hand, is possible for standard tables and sorted tables only. As well as its primary key, an internal key can also have further secondary keys. These keys enhance and optimize access options to the various table categories.

-   [Selecting the Table Category](ABENSELECT_TABLE_TYPE_GUIDL.md "Guideline")

-   [Secondary Keys](ABENSECONDARY_KEY_GUIDL.md "Guideline")

-   [Initial Memory Requirements](ABENINITIAL_MEMORY_REQU_GUIDL.md "Guideline")

-   [Sorted Filling](ABENSORT_GUIDL.md "Guideline")

-   [Compressed Filling](ABENCOLLECT_GUIDL.md "Guideline")

-   [Output Behavior](ABENTABLE_OUTPUT_GUIDL.md "Guideline")

-   [Loop Processing](ABENLOOP_GUIDL.md "Guideline")

Continue
[Selecting the Table Category](ABENSELECT_TABLE_TYPE_GUIDL.md)
[Secondary Key](ABENSECONDARY_KEY_GUIDL.md)
[Initial Memory Requirements](ABENINITIAL_MEMORY_REQU_GUIDL.md)
[Sorted Filling](ABENSORT_GUIDL.md)
[Collected Filling](ABENCOLLECT_GUIDL.md)
[Output Behavior](ABENTABLE_OUTPUT_GUIDL.md)
[Loop Processing](ABENLOOP_GUIDL.md)
