---
title: "ABENBUFFER_SINGLE_BUFFERING"
description: |
  ABENBUFFER_SINGLE_BUFFERING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBUFFER_SINGLE_BUFFERING.htm"
abapFile: "ABENBUFFER_SINGLE_BUFFERING.html"
keywords: ["select", "if", "data", "ABENBUFFER", "SINGLE", "BUFFERING"]
---

Only those rows are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses.

If a [`WHERE`](ABAPWHERE.html) clause is used to access a non-buffered row and this clause specifies equality conditions joined using `AND`, an attempt is made to load this row. If the row is not found, this is noted in the buffer and a fully specified `WHERE` clause is used to avoid a new database access in the next read.

-   When using single record buffering, any ABAP SQL statements must respect the entire primary key to prevent them from [bypassing](ABENBUFFER_RESTRICTIONS.html) table buffering.
-   Single record buffering is recommended for large amounts of data from which single rows are often read. For comparatively small amounts of data from which many rows are read, [full buffering](ABENBUFFER_COMPLETE_BUFFERING.html) is usually preferred since this reduces the number of direct database accesses required for loading.
-   The use of single record buffering depends on the `WHERE` clause only and not on the use of the addition [`SINGLE`](ABAPSELECT_SINGLE.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html abenbuffer\_type.html