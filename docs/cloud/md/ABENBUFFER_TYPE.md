---
title: "ABENBUFFER_TYPE"
description: |
  ABENBUFFER_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUFFER_TYPE.htm"
abapFile: "ABENBUFFER_TYPE.html"
keywords: ["do", "if", "data", "types", "ABENBUFFER", "TYPE"]
---

The following buffering types can be defined for a DDIC database table or CDS view entity:

The buffering type is defined and transported separately from the buffered entity.

If generic buffering or full buffering is activated, and the database table is specified statically in an ABAP SQL statement, the [secondary indexes](ABENSECONDARY_INDEX_GLOSRY.html) of the table are not ignored when the data is read from the [table buffer](ABENTABLE_BUFFER_GLOSRY.html). If single record buffering is used, only the primary index is read. A secondary index defined in the ABAP Dictionary is evaluated regardless of whether the index was created on the database or not.

-   [Table Buffering - Single Record Buffering](ABENBUFFER_SINGLE_BUFFERING.html)
-   [Table Buffering - Generic Buffering](ABENBUFFER_GENERIC_BUFFERING.html)
-   [Table Buffering - Full Buffering](ABENBUFFER_COMPLETE_BUFFERING.html)

-   For DDIC database tables this is done as [part](ABENDDIC_DATABASE_TABLES_BUFFER.html) of their [technical settings](ABENDDIC_DATABASE_TABLES_TECHSPEC.html).
-   For CDS entities, a tuning object named [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) is defined that defines table buffering settings.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html