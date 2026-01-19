---
title: "Extracts"
description: |
  The main memory cannot sort large datasets all at once. Until now large datasets were sorted by the operating system's own platform-dependent sort function. Now SAP's own platform-independent sort procedure is used. This reduces the costs of some sorting operations considerably. Extracts stored in t
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-PERFORMANCE.htm"
abapFile: "ABENNEWS-40-PERFORMANCE.html"
keywords: ["insert", "delete", "loop", "if", "data", "internal-table", "field-symbol", "ABENNEWS", "PERFORMANCE"]
---

Large datasets in ABAP can be managed either as internal tables or [extract datasets](ABENEXTRACT_DATASET_GLOSRY.html).

Internal tables are dynamic sequential datasets whose lines all have the same structure and a key.

[Extracts](ABENEXTRACT_GLOSRY.html) are dynamic sequential datasets whose lines can be structured differently. Extracts cannot be accessed using indexes or keys. They are always processed in a loop.

From ABAP release 4.5A, the performance of some crucial operations on internal tables and extracts has improved significantly.

Until now, the cost of manipulating indexes increased in linear relation to the number of entries being inserted or deleted from [standard](ABENSTANDARD_TABLE_GLOSRY.html) and [sorted tables](ABENSORTED_TABLE_GLOSRY.html). From ABAP release 4.5A, these index manipulation costs will only increase in logarithmic relation to the number of entries, mainly due to the fact that table indexes are now managed in tree form. This allows for more efficient insertion and deletion in very large standard and sorted tables.

[`Internal Tables`](ABENITAB.html)

Until now, individual entries in internal tables could only be processed indirectly using separate work areas. From ABAP release 4.5A, field symbols can be used to display internal table entries. It is now possible to both read internal table entries and write to them as well. This allows for better performance when working with large and complex tables and makes processing nested internal tables considerably easier.

To assign a table line to a field symbol, use the following statements:

[`LOOP AT itab ASSIGNING <fs>`](ABAPLOOP_AT_ITAB.html).

[`READ TABLE itab ASSIGNING <fs>`](ABAPREAD_TABLE.html).

Until now, [extracts](ABENEXTRACT_GLOSRY.html) were stored in SAP paging. In an effort to improve sorting and sequential processing performance, extracts of more than 500 `kBytes` are now stored directly in the file system.

Extracts

The main memory cannot sort large datasets all at once. Until now large datasets were sorted by the operating system's own platform-dependent sort function. Now SAP's own platform-independent sort procedure is used. This reduces the costs of some sorting operations considerably.

Extracts stored in the file system are always resorted physically. Internal tables are sorted physically if they are longer than `2^19` lines or greater than 12 MB. Physical sorting reduces the costs of any follow-on sequential processing.

abenabap.html abennews.html abennews-4.html abennews-40.html