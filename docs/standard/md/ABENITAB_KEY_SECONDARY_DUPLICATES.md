---
title: "When individual lines are inserted where the insert position is determined using a table key, that is, in the case of"
description: |
  the order of the duplicates with respect to the table key of the target table is determined in accordance with the insertion order of the individual lines. The duplicate line that was last inserted into the table is sorted before all other duplicates. For block operations such as an assignment(ABA
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_KEY_SECONDARY_DUPLICATES.htm"
abapFile: "ABENITAB_KEY_SECONDARY_DUPLICATES.html"
keywords: ["insert", "update", "do", "if", "case", "data", "types", "internal-table", "ABENITAB", "KEY", "SECONDARY", "DUPLICATES"]
---

Non-unique table keys can produce duplicate lines with respect to these keys. This section describes the order of these duplicates when inserting into tables with non-unique sorted table keys. This order is ignored with respect to non-unique primary keys in standard tables.

When individual lines are inserted where the insert position is determined using a table key, that is, in the case of

the order of the duplicates with respect to the table key of the target table is determined in accordance with the insertion order of the individual lines. The duplicate line that was last inserted into the table is sorted before all other duplicates.

For block operations such as an [assignment](ABAPMOVE.html) of an internal table to another table or when inserting multiple lines using [`INSERT LINES OF`](ABAPINSERT_ITAB_LINESPEC.html), the order of duplicates with respect to a sorted key of the target table in the block is taken from the source table. If there are already one or more duplicates in the target table, the source block duplicates are inserted in their original order in front of the first duplicate in the target table.

Some operations have the characteristics of block operations but are executed internally as sequences of single record operations. In this case, the original order of duplicates with respect to a sorted key in the target table is not retained. This is the case for the following operations:

The result of the following insertion is

-   the operations [`INSERT ... INTO TABLE ...`](ABAPINSERT_ITAB_POSITION.html) or
-   in [lazy updates](ABENLAZY_UPDATE_GLOSRY.html) of sorted secondary keys

-   Filling an internal table using [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) from a table previously stored using [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html) and all operations that are based internally on such an import, such as [posting](ABAPCALL_FUNCTION_UPDATE.html) operations.
-   Passing and inheriting internal tables for [Remote Function Calls](ABAPCALL_FUNCTION_DESTINATION_PARA.html).
-   The deserialization of an internal table from a table previously serialized to XML using [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

a a \\nb z \\nb y \\nb x \\nb b TYPES: \\n BEGIN OF line, \\n col1 TYPE string, \\n col2 TYPE string, \\n END OF line, \\n itab TYPE SORTED TABLE OF line \\n WITH NON-UNIQUE KEY col1. \\n\\ \\nDATA(itab) = VALUE itab( \\n ( col1 = 'b' col2 = 'b' ) \\n ( col1 = 'a' col2 = 'a' ) ). \\n\\ \\nFINAL(jtab) = VALUE itab( \\n ( col1 = 'b' col2 = 'x' ) \\n ( col1 = 'b' col2 = 'y' ) \\n ( col1 = 'b' col2 = 'z' ) ). \\n\\ \\nINSERT LINES OF jtab INTO TABLE itab. \\n\\ \\ncl\_demo\_output=>display( itab ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html