---
title: "ABENBUFFER_COMPLETE_BUFFERING"
description: |
  ABENBUFFER_COMPLETE_BUFFERING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUFFER_COMPLETE_BUFFERING.htm"
abapFile: "ABENBUFFER_COMPLETE_BUFFERING.html"
keywords: ["while", "if", "data", "ABENBUFFER", "COMPLETE", "BUFFERING"]
---

When a row is read, all rows in the table or view are loaded to the [table buffer](ABENTABLE_BUFFER_GLOSRY.html). The buffered table or view is either entirely in the buffer or not at all. In the buffer, the buffered data records are sorted by the key of the table or view. Optimized access requires that the left-aligned part of the primary key or of the fields of a secondary index be as large as possible. If not, the buffer is scanned linearly.

If full buffering is switched on in a client-dependent table or view, generic buffering using the client column as a generic key is performed internally.

The table `T005` is fully buffered since it is small and accessed often by reads.

-   In a fully buffered table or view, access to nonexistent data is very fast (see [Buffer Management](ABENBUFFER_MEMORY.html)).
-   For fully buffered tables or views, [restrictions](ABENSQL_ENGINE_RESTR.html) that cause [bypassing](ABENBUFFER_RESTRICTIONS.html) the buffer come from the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) only.
-   Full buffering should be used for small amounts of data, such as customizing tables. For larger amounts of data, full buffering is worthwhile only if large quantities of data are read frequently. Writes on fully buffered tables should be performed only rarely.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html abenbuffer\_type.html