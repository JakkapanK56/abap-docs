---
title: "ABENBUFFER_GENERIC_BUFFERING"
description: |
  ABENBUFFER_GENERIC_BUFFERING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUFFER_GENERIC_BUFFERING.htm"
abapFile: "ABENBUFFER_GENERIC_BUFFERING.html"
keywords: ["if", "case", "data", "ABENBUFFER", "GENERIC", "BUFFERING"]
---

When a read is performed on a row, all rows are loaded into the table buffer that match this row in a left-aligned part of the primary key. The number of respected key fields is specified in the definition and is always less than the total number of key fields. These key fields form the generic key.

The individual generic areas are handled like standalone tables or views whose primary key is the generic key and that are fully buffered.

If a fully specified generic key is used to access an unbuffered row through ABAP SQL, an attempt is made to load the area. If the row is not found, this is noted in the buffer and the database is not accessed again the next time a row is accessed using a fully specified generic key.

One good application of generic buffering is language-dependent data that has the language code field as a generic key.

-   In a generically buffered table or view, access to nonexistent data is very fast (see [Buffer Management](ABENBUFFER_MEMORY.html)).
-   When using generic buffering, any ABAP SQL statements must respect the generic key to prevent them from [bypassing](ABENBUFFER_RESTRICTIONS.html) table buffering.
-   Generic buffering should be used if usually only certain areas of the table or view are required. These areas should not be too small, to prevent too many of them from being created and overloading buffer management. They should also not be too big, to prevent too much data from being loaded. [Full buffering](ABENBUFFER_COMPLETE_BUFFERING.html) may also be more efficient in some cases. Accordingly, the generic key must not cover too many or too few fields.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html abenbuffer\_type.html