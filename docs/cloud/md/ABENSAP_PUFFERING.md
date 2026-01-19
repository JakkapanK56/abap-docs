---
title: "ABENSAP_PUFFERING"
description: |
  ABENSAP_PUFFERING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSAP_PUFFERING.htm"
abapFile: "ABENSAP_PUFFERING.html"
keywords: ["select", "do", "if", "case", "method", "data", "types", "ABENSAP", "PUFFERING"]
---

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) buffers data from the database in a [table buffer](ABENTABLE_BUFFER_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current AS instance. Table buffering is possible for the following objects and takes place when they are accessed using ABAP SQL:

Whether and how a DDIC database table or DDIC database view is buffered is determined by its [technical settings](ABENDDIC_DATABASE_TABLES_BUFFER.html). For a CDS entity, the buffering is determined by annotations and a [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html). Using buffering generally improves performance (by factors of between 50 and 500), since the data does not need to be transported between the AS ABAP and the database server each time and because changes between can be prevented.

When a DDIC or CDS object for which table buffering is defined is accessed using ABAP SQL, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is active by default. The buffering of the tabular data in the table buffer is performed by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html). The [buffering type](ABENBUFFER_TYPE.html) defines which records are loaded into the buffer when it is accessed. When such database tables of views are accessed using ABAP SQL statements in a program the following process takes place:

For processing the ABAP SQL statements for the buffered tabular data the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) is used. There are restrictions on accessing the table buffer for the following reasons.

The following sections go into more detail about table buffering:

-   [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html)
-   For more information, see [DDIC - Table Buffering of Database Tables](ABENDDIC_DATABASE_TABLES_BUFFER.html).
-   [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html) defined in the ABAP Dictionary
-   For more information, see DDIC - Database Views.
-   [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) defined in [ABAP CDS](ABENABAP_CDS_GLOSRY.html)
-   For more information, see [ABAP CDS - Table Buffering of CDS View Entities](ABENCDS_V2_VIEW_BUFFERING.html).
-   [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) defined in [ABAP CDS](ABENABAP_CDS_GLOSRY.html)
-   For more information, see [ABAP CDS - Projection Views](ABENCDS_PROJ_VIEWS.html).
-   [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) defined in [ABAP CDS](ABENABAP_CDS_GLOSRY.html)
-   For more information, see [ABAP CDS - Table Buffering of CDS DDIC-Based Views](ABENCDS_V1_BUFFERING.html).

-   For [read accesses](ABENABAP_SQL_READING.html), the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) determines whether this data is in the table buffer of the current AS instance. If this is the case, the data is read directly from the buffer. If the data is not contained in the buffer of the AS instance, the data is read from the database and loaded into the buffer. This means the data can be accessed from the buffer next time.
-   For [write accesses](ABENABAP_SQL_WRITING.html), an [asynchronous buffer synchronization](ABENBUFFER_SYNCHRO.html) is invoked.

-   The ABAP SQL in-memory engine supports a large subset of ABAP SQL but there are also some [restrictions](ABENABAP_SQL_INMEMENG.html). If an ABAP SQL statement is used that is not supported by the ABAP SQL in-memory engine, a buffered table cannot be accessed in the table buffer. The table buffer is bypassed and the database table is accessed on the database.
-   Depending on the [buffering type](ABENBUFFER_TYPE.html), further [restrictions](ABENBUFFER_RESTRICTIONS.html) can cause a bypassing of the table buffer.

-   [Table Buffering - Buffering Types](ABENBUFFER_TYPE.html)
-   [Table Buffering - Buffer Synchronization](ABENBUFFER_SYNCHRO.html)
-   [Table Buffering - Buffer Management](ABENBUFFER_MEMORY.html)
-   [Table Buffering - Restrictions](ABENBUFFER_RESTRICTIONS.html)
-   [Table Buffering](ABENTABLE_BUFFERING_ABEXA.html)\\ [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are applied to the database directly and therefore always bypass table buffering.

-   Typical candidates for buffering are customizing tables and system tables. In certain cases, customizing-like tables with master data can also be buffered. If it is vital that current data is accessed from a buffered table, the addition [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) of the statement `SELECT` can be used. If this addition is used a lot, the table should be checked for its suitability for buffering or whether the current data is really always required.
-   Buffering is not recommended for tables in the following cases:

-   The application must always have access to the current data and the delay caused by [asynchronous synchronization](ABENBUFFER_SYNCHRO.html) is not acceptable.
-   Many writes are performed on the tables. If more than one percent of the accesses are writes, buffering should be avoided, so that the extra work caused by synchronization does not outweigh the benefits of buffering.

-   When accessing data clusters in export/import tables using the statements [`EXPORT ... TO DATABASE`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT ... FROM DATABASE`](ABAPIMPORT_DATA_CLUSTER.html), [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is not supported.
-   If table buffering is [enabled](ABENCDS_V1_BUFFERING.html) for a [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), it is implicitly applied to its [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html). For [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), table buffering is applied directly to the CDS entity.
-   Tables or views that can also be accessed using [AMDP](ABENAMDP_GLOSRY.html) should not be buffered. If AMDP methods modify data in buffered tables or views, this is ignored by the database interface and the buffers are not synchronized accordingly. This can cause inconsistencies between the data in the buffers and on the database.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html