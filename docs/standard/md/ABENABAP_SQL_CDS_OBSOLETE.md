---
title: "ABENABAP_SQL_CDS_OBSOLETE"
description: |
  ABENABAP_SQL_CDS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_CDS_OBSOLETE.htm"
abapFile: "ABENABAP_SQL_CDS_OBSOLETE.html"
keywords: ["select", "if", "data", "ABENABAP", "SQL", "CDS", "OBSOLETE"]
---

`SELECT ... FROM cds_db_view ...`

Specifies a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) that is associated with a [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) using its name `CDS_DB_VIEW` that is defined in the annotation [`@AbapCatalog.sqlViewName`](ABENCDS_DEFINE_VIEW_V1.html) as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) of the [`SELECT`](ABAPSELECT.html) statement. If the name `CDS_DB_VIEW` is used, the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is accessed directly and handled like a [DDIC view](ABENDDIC_VIEW_GLOSRY.html). More specifically, the following applies:

-   [Client handling](ABENCLIENT_HANDLING_GLOSRY.html) depends only on the existence of a [client column](ABENCLIENT_COLUMN_GLOSRY.html) and not by the [client dependency](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) of the CDS view.
-   Any [CDS roles](ABENCDS_ROLE_GLOSRY.html) defined for [CDS access controls](ABENCDS_ACCESS_CONTROL_GLOSRY.html) are applied only when the CDS entity is accessed and not when the CDS-managed DDIC view is accessed.
-   The key fields of the DDIC database view are used for the syntax check and not the key fields of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html).

-   To keep the behavior consistent and to use only the defined properties of a CDS view, only the name of the CDS entity should be used to access a CDS view.
-   Direct access to a CDS-managed DDIC view (obsolete) is forbidden in [strict mode from ABAP release 7.62](ABENABAP_SQL_STRICTMODE_762.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html