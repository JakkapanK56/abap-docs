---
title: "ABAPDATA_PRIMARY_KEY"
description: |
  ABAPDATA_PRIMARY_KEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_PRIMARY_KEY.htm"
abapFile: "ABAPDATA_PRIMARY_KEY.html"
keywords: ["if", "data", "types", "internal-table", "ABAPDATA", "PRIMARY", "KEY"]
---

`... \{\ [UNIQUE | NON-UNIQUE]`\\ 
      `\{\ \{KEY [primary_key [ALIAS alias_name] COMPONENTS] comp1 comp2 ...\}`\\ 
      `|\ \{DEFAULT KEY\}\ \}  \}`\\ 
  `|\ \{ EMPTY KEY \} ...`

[1. `... [UNIQUE|NON-UNIQUE]\ \{KEY ...\}|\{DEFAULT KEY\}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... EMPTY KEY`](#ABAP_ALTERNATIVE_2@2@)

Definition of the primary table key of an internal table by specifying components or defines it as a standard key. The syntax and semantics of the additions are the same as for the statement [`TYPES`](ABAPTYPES_PRIMARY_KEY.html) for standalone table types, except that the primary key of a [bound](ABENBOUND_DATA_TYPE_GLOSRY.html) table type must always be fully specified.

If no primary key is specified for `DATA` using `WITH`, the addition `WITH NON-UNIQUE DEFAULT KEY` is added implicitly for standard tables. This gives the table a [standard key](ABENSTANDARD_KEY_GLOSRY.html), which can be empty. In sorted tables and hashed tables, the primary key must be specified explicitly and cannot be empty.

The declaration of the primary table key as a [standard key](ABENITAB_STANDARD_KEY.html) can be critical for various reasons. It is best to specify key fields explicitly instead. In particular, it must be ensured that the declaration of the standard key is not added by mistake because the key was not specified explicitly.

Definition of a sorted table with a primary key without an explicit name specification.

Definition of a sorted table with a primary key and an explicit name specification.

Definition of a sorted table with a primary key for which an alias name is defined.

Definition of an [empty primary key](ABENITAB_EMPTY_KEY.html) for an internal table. This variant is possible for standard tables only. The syntax and semantics are the same as for the statement [`TYPES`](ABAPTYPES_PRIMARY_KEY.html).

Declaration of a table with an empty primary key. Using the [`SORT`](ABAPSORT_ITAB.html) statement without specifying a sort criterion would have no effect for this table.

-   In [standard tables](ABENSTANDARD_TABLE_GLOSRY.html), only the addition `NON-UNIQUE KEY` can be specified. If uniqueness is not specified, this addition is added implicitly. The addition `UNIQUE KEY` cannot be specified.
-   In [sorted tables](ABENSORTED_TABLE_GLOSRY.html), one of the additions `UNIQUE KEY` or `NON-UNIQUE KEY` must be specified.
-   In [hashed tables](ABENHASHED_TABLE_GLOSRY.html), the addition `UNIQUE KEY` must be specified.

-   The addition `EMPTY KEY` can provide clarity in all situations in which the definition of a table key is not important.
-   In general, it is recommended that the addition `EMPTY KEY` is used instead of not specifying a key definition, since otherwise the [standard key](ABENITAB_STANDARD_KEY.html) is used, which often produces unexpected results.

DATA sbook\_tab \\n TYPE SORTED TABLE \\n OF sbook \\n WITH UNIQUE KEY carrid connid fldate bookid. DATA sbook\_tab \\n TYPE SORTED TABLE \\n OF sbook \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate bookid. DATA sbook\_tab \\n TYPE SORTED TABLE \\n OF sbook \\n WITH UNIQUE KEY primary\_key ALIAS full\_table\_key \\n COMPONENTS carrid connid fldate bookid. DATA unsorted\_carrier\_list \\n TYPE STANDARD TABLE \\n OF scarr \\n WITH EMPTY KEY. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html abapdata\_itab.html abapdata\_keydef.html