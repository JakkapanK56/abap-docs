---
title: "ABENBUFFER_MEMORY"
description: |
  ABENBUFFER_MEMORY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUFFER_MEMORY.htm"
abapFile: "ABENBUFFER_MEMORY.html"
keywords: ["do", "data", "internal-table", "ABENBUFFER", "MEMORY"]
---

Table buffering takes place in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of each AS instance. The [table buffer](ABENTABLE_BUFFER_GLOSRY.html) consists of a central management structure, an alphabetical directory of tables, and a data area. The individual areas of a [generically buffered](ABENBUFFER_GENERIC_BUFFERING.html) table or view are managed as individual [fully buffered](ABENBUFFER_COMPLETE_BUFFERING.html) tables. The buffered data is stored in the data area as [internal tables](ABENINTERNAL_TABLE_GLOSRY.html). The data area is managed using SAP Memory Management.

When a buffered table or view is accessed using ABAP SQL, a search first takes place for the name of the table in the table directory and then a binary search takes place for the data.

In both single record buffering and in generic buffering, information about nonexistent rows in a table or view is also saved. The first time a nonexistent row is read, the key values of the primary key or generic key are loaded into the associated data area with an otherwise empty row and a corresponding flag. The next time an attempt is made to read this row, the buffer already indicates that this row does not exist.

-   The management of single record buffering slightly less efficient than generic or full buffering. In single record buffering, the rows are loaded into the internal table in the data area gradually. In generic buffering and full buffering, all data of a table or view is loaded in a single step and sorted on the database.
-   When saved to memory, [null values](ABENNULL_VALUE_GLOSRY.html) are handled as such and are not transformed to type-dependent initial values.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html