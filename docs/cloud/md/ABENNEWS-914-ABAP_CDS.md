---
title: "ABENNEWS-914-ABAP_CDS"
description: |
  ABENNEWS-914-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-914-ABAP_CDS.htm"
abapFile: "ABENNEWS-914-ABAP_CDS.html"
keywords: ["insert", "update", "delete", "if", "method", "data", "ABENNEWS", "914", "ABAP", "CDS"]
---

[1\. Writable CDS View Entities](#ABAP_MODIFICATION_1@4@)

[2\. CDS Table Entities](#ABAP_MODIFICATION_2@4@)

[3\. CDS Service Definitions Can Now Expose AMDP Procedure Implementations](#ABAP_MODIFICATION_3@4@)

[4\. Writable CDS External Entities](#ABAP_MODIFICATION_4@4@)

CDS view entities can now be defined as writable using the syntax `[WRITABLE](ABENCDS_DEFINE_WRTBL_VIEW_V2.html)`. Some restrictions apply, which are listed in the respective chapter.

A new kind of CDS entity is available: the [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html). A CDS table entity defines a database table in ABAP CDS using the statement [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html). CDS table entities are the [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) successor of [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html).

The new keyword [`EXPOSE METHOD`](ABENSRVD_DEFINE_SERVICE.html) can now be used in [CDS service definitions](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) for exposing [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) for consumption in a [business service](ABENBS_GLOSRY.html).

[CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) can now be defined as [writable](ABENWRITABLE_EE_GLOSRY.html) using the syntax `[WRITABLE](ABENCDS_WRITABLE_EE.html)`. Writable external entities allow modifying data on external database systems using the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) operations. An [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) is required to establish a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and enable the [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) for write access.

abenabap.html abennews.html abennews-91.html abennews-914.html