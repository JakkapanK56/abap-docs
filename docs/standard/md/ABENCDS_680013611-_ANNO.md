---
title: "SAP MaxDB"
description: |
  IBM DB2 IBM DB2 for AS/400 IBM DB2 UDB Informix Microsoft SQL Server Oracle DB SAP HANA database Sybase ASE All database systems Kind ABAP annotation(ABENABAP_ANNOTATION_GLOSRY.html) Syntax `AbapCatalog.dbHints .dbSystem` Scope `#VIEW` Type `String(3)` Enums `#ADA, #A
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_680013611-_ANNO.htm"
abapFile: "ABENCDS_680013611-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "680013611", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The [framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ [`@Consumption.dbHints`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html) replaces the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`@AbapCatalog.dbHints`](ABENCDS_ANNOTATIONS_ABAP_TABLES.html) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime framework.

Technical settings of a CDS entity.

**Obsolete:** Specifiactions for database hints.

Replaced by @Consumption.dbHintsCalculatedBy.

**Obsolete:** Database system for which a database hint is specified (evaluated using SADL).

SAP MaxDB

IBM DB2

IBM DB2 for AS/400

IBM DB2 UDB

Informix

Microsoft SQL Server

Oracle DB

SAP HANA database

Sybase ASE

All database systems

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.dbHints[ ].dbSystem`\\ **Scope** `#VIEW`\\ **Type** `String(3)`\\ **Enums** `#ADA, #ALL, #ASE, #DB2, #DB4, #DB6, #HDB, #INF, #MSS, #ORA`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html