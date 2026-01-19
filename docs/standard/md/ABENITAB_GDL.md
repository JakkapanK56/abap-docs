---
title: "ABENITAB_GDL"
description: |
  ABENITAB_GDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_GDL.htm"
abapFile: "ABENITAB_GDL.html"
keywords: ["select", "loop", "do", "if", "method", "data", "types", "internal-table", "ABENITAB", "GDL"]
---

An internal table is a dynamic data object consisting of a sequence of lines with the same data type. The data type of an internal table is a table type that has the following basic properties of every internal table:

Internal tables enable variable datasets (a variable number of lines) with a fixed structure (the line type) to be processed in the working memory of the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of a program. The content of an internal table can either be accessed sequentially in a `LOOP` or by accessing individual lines (for example, by using `READ TABLE` or a table expression).

There are two ways of accessing individual lines:

Primary table access is possible for all three table categories. Access using the primary key, however, is optimized only for sorted tables and hashed tables. In standard tables, primary key access uses a linear search. Access using the primary line index, on the other hand, is possible for standard tables and sorted tables only. As well as its primary key, an internal key can also have further secondary keys. These keys enhance and optimize access options to the various table categories.

-   **Line Type**
-   The line type can be any data type. In particular, tables of
-   elementary types, tables of structures, tables of tables, and
-   tables or references are all possible.
-   **Table category**
-   The table category specifies the storage method and primary access method. The possible table categories are:

-   Standard tables administered using a primary table index and which cannot have a unique primary table key.
-   Sorted tables administered using a primary table index and that can have a unique or non-unique primary table key (used to sort the table).
-   Hashed tables whose primary table key always has to be unique and which use a hash algorithm (distributed memory management) to administer their lines. A hashed table does not have a primary table index.

-   **Primary table key**
-   Every internal table has a primary table key. A table key consists of columns from the internal table. The content of these columns identifies table lines. The table category determines whether a key is unique or non-unique.

-   By specifying a key (a table key or a free key)
-   By specifying a line index

-   [Selecting the Table Category](ABENSELECT_TABLE_TYPE_GUIDL.html)
-   [Secondary Keys](ABENSECONDARY_KEY_GUIDL.html)
-   [Initial Memory Requirement](ABENINITIAL_MEMORY_REQU_GUIDL.html)
-   [Sorted Filling](ABENSORT_GUIDL.html)
-   [Compressed Filling](ABENCOLLECT_GUIDL.html)
-   [Target Area](ABENTABLE_OUTPUT_GUIDL.html)
-   [Loop Processing](ABENLOOP_GUIDL.html)

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html