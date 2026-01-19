---
title: "ABENITAB_DATA_TYPE"
description: |
  ABENITAB_DATA_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_DATA_TYPE.htm"
abapFile: "ABENITAB_DATA_TYPE.html"
keywords: ["do", "if", "data", "types", "internal-table", "field-symbol", "ABENITAB", "DATA", "TYPE"]
---

A [table type](ABENTABLE_TYPE_GLOSRY.html) defined as a [DDIC table type](ABENDDIC_TABLE_TYPE_GLOSRY.html) or using [`TYPES`](ABAPTYPES_ITAB.html) or [`DATA`](ABAPDATA_ITAB.html) is specified completely using the following [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html):

Unlike all other user-defined data types, a table type defined in the ABAP Dictionary or using [`TYPES`](ABAPTYPES_ITAB.html) does not have to be specified completely. Either only the keys or the line type and the keys can remain unspecified. This makes the type generic and it can be used only for [typings](ABENTYPING_GLOSRY.html) of field symbols and formal parameters. The predefined [generic ABAP types](ABENBUILT_IN_TYPES_GENERIC.html)\\ `ANY TABLE` and `INDEX TABLE` can be used for this purpose. The first type includes all table categories and the second type includes standard tables and sorted tables, known as [index tables](ABENINDEX_TABLE_GLOSRY.html).

Like [strings](ABENSTRING_GLOSRY.html), internal tables are [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html). Their line type, table category, and table key are always specified completely, but the number of lines is variable and restricted only by the capacity restrictions of specific system installations (see [Maximum Size of Dynamic Data Objects](ABENMEMORY_CONSUMPTION_2.html)).

An additional type property that is not one of the [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) and thus is ignored by the [compatibility checks](ABENCOMPATIBLE_GLOSRY.html) is the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html). When defining a table type, the addition [`INITIAL SIZE`](ABAPTYPES_ITAB.html) can be used to affect the initial memory requirement.

Table keys are evaluated when [typing](ABENTYPING_GLOSRY.html) is checked. Only actual parameters that have the same keys can be assigned to a formal parameter or a field symbol whose table type has a non-generic primary key or one or more secondary keys.

Definition of a table type `spfli_tab` with the structured line type `SPFLI` from the ABAP Dictionary, the table category hashed table, a unique primary key, and exactly one non-unique sorted secondary key `cities`.

-   **Line type**
-   The [line type](ABENROW_TYPE_GLOSRY.html) of an internal table can be any data type. If the line type is structured, the individual components of a line are also referred to as the columns of the internal table.
-   **Table category**
-   The [table category](ABENTABLE_CATEGORY_GLOSRY.html) defines how an internal table is administered and how its individual lines can be accessed. There are three table categories:

-   [Standard tables](ABENSTANDARD_TABLE_GLOSRY.html) are administered internally using a [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html), which can be implemented using a logical index if necessary. The table can be accessed using either a table index or a [table key](ABENTABLE_KEY_GLOSRY.html). The primary key of a standard table is always non-unique. The response time for accessing the table using the primary key depends linearly on the number of entries in the table. [Secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be defined to make key access to standard tables more efficient.
-   [Sorted tables](ABENSORTED_TABLE_GLOSRY.html) are also administered internally using a [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html). They are always sorted according to the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). Sorting is in ascending order by size according to the [comparison rules](ABENLOGEXP_RULES.html) for the data types of the key fields and returns the same result as the [`SORT`](ABAPSORT_ITAB.html) statement without specifying additions. The table can be accessed using either a table index or a [table key](ABENTABLE_KEY_GLOSRY.html). The primary key of a sorted table can be either unique or non-unique. The response time for accessing the table using the primary key depends logarithmically on the number of table entries, since a binary search is used.
-   [Hashed tables](ABENHASHED_TABLE_GLOSRY.html) are administered internally using a [hash algorithm](ABENHASH_ALGORITHM_GLOSRY.html). Hashed tables can be accessed using a [table key](ABENTABLE_KEY_GLOSRY.html) or a [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html). The primary key of hashed tables is always unique. The response time for primary key access is constant and independent of the number of entries in the table.

-   **Table key**
-   A [table key](ABENTABLE_KEY_GLOSRY.html) is used to identify lines in a table (see below). There are two possible key types for internal tables: [primary keys](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and optional [secondary keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). Every internal table has a primary key, which is either the [standard key](ABENSTANDARD_KEY_GLOSRY.html) or a user-defined key. Depending on the table category, the primary key can be defined as unique or non-unique. A secondary key is either a sorted key, which can be unique or non-unique, or a unique hash key. If keys are unique, a line with a specific content in the [key fields](ABENKEY_FIELD_GLOSRY.html) can exist only once in the internal table. A table key can consist of components of the line type or of the entire line ([pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line`) if they are not internal tables or do not contain internal tables. When a table key is defined, the order of the key fields is significant.

TYPES spfli\_tab \\n TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto \\n WITHOUT FURTHER SECONDARY KEYS. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html