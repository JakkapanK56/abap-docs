---
title: "ABAPTYPES_TABCAT"
description: |
  ABAPTYPES_TABCAT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_TABCAT.htm"
abapFile: "ABAPTYPES_TABCAT.html"
keywords: ["insert", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPTYPES", "TABCAT"]
---

`... \{\ \{[STANDARD] TABLE\}\      |\ \{SORTED TABLE\}\      |\ \{HASHED TABLE\}\      |\ \{ANY TABLE\}\      |\ \{INDEX TABLE\}\ \} ...`

[1. `... [STANDARD] TABLE`](#ABAP_ADDITION_1@3@)

[2. `... SORTED TABLE`](#ABAP_ADDITION_2@3@)

[3. `... HASHED TABLE`](#ABAP_ADDITION_3@3@)

[4. `... ANY TABLE`](#ABAP_ADDITION_4@3@)

[5. `... INDEX TABLE`](#ABAP_ADDITION_5@3@)

Defines the table category of an internal table. Possible specifications:

The addition `STANDARD` is optional for standard tables.

The additions of the statement `TYPES` listed above are language element additions for defining table categories. They are not to be confused with the [generic ABAP types](ABENBUILT_IN_TYPES_GENERIC.html) with the same name.

The non-generic table categories specify the internal administration and primary access type for an internal table in ABAP programs:

For non-generic table categories, the definition of the table key [`key`](ABAPTYPES_KEYDEF.html) determines whether the defined table type is generic.

Declaration of two internal tables with the elementary line type `string`. The table `words` is a standard table with an empty key. The table `sorted_words` is a sorted table with the explicitly defined primary key `table_line`, that is, the entire table line. When the table `words` is assigned to the table `sorted_words`, the lines are sorted in ascending order according to their content.

The generic table categories define a generic table type that can only be used for [typing](ABENTYPING_GLOSRY.html) formal parameters and field symbols:

A generic table type must not be used as a component of a [structured type](ABAPTYPES_STRUC.html).

Definition of a generic table type `index_table` for index tables. In the method `meth`, an index access can be performed on the parameter `para` typed using this type. Only index tables can be passed to this parameter. If there is not at least one line in the internal table, the method is exited.

-   Non-generic table categories

-   `STANDARD TABLE` for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html)
-   `SORTED TABLE` for [sorted tables](ABENSORTED_TABLE_GLOSRY.html)
-   `HASHED TABLE` for [hashed tables](ABENHASHED_TABLE_GLOSRY.html)

-   Generic table categories

-   `ANY TABLE` covers all table categories
-   `INDEX TABLE` of [index tables](ABENINDEX_TABLE_GLOSRY.html) ([standard tables](ABENSTANDARD_TABLE_GLOSRY.html) and [sorted tables](ABENSORTED_TABLE_GLOSRY.html))

-   Standard tables are managed internally in the system using a [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html). New lines are either appended to the table or inserted at specific positions.
-   Like standard tables, sorted tables are also managed using a [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html). The entries in this index are always sorted by the primary table key. The sort order is ascending and corresponds to the result of the statement [`SORT`](ABAPSORT_ITAB.html) with no additions. The sorting is based on the [comparison rules](ABENLOGEXP_RULES.html) for the data types of the key fields.
-   Hashed tables are managed by a hash algorithm. There is no [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html). The entries are not ordered in the memory. The position of a line is calculated from a key specification using a hash function.

-   `ANY TABLE` covers all table categories
-   `INDEX TABLE` covers standard tables and sorted tables

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: words TYPE STANDARD TABLE OF string \\n WITH EMPTY KEY, \\n sorted\_words TYPE SORTED TABLE OF string \\n WITH NON-UNIQUE KEY table\_line. \\n\\ \\nSPLIT \`This short text contains some short words\` \\n AT \` \` INTO TABLE words. \\nout->write( words ). \\n\\ \\nsorted\_words = words. \\nout->write( sorted\_words ). \\n\\ \\nout->display( ). CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n TYPES index\_table TYPE INDEX TABLE OF scarr. \\n METHODS meth IMPORTING para TYPE index\_table. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n IF NOT line\_exists( para\[ 1 \] ). \\n RETURN. \\n ENDIF. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_itab.html