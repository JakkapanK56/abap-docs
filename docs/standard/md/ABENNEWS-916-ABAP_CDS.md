---
title: "ABENNEWS-916-ABAP_CDS"
description: |
  ABENNEWS-916-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-916-ABAP_CDS.htm"
abapFile: "ABENNEWS-916-ABAP_CDS.html"
keywords: ["if", "try", "ABENNEWS", "916", "ABAP", "CDS"]
---

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) can be defined for [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html) now:

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

-   Table buffering can be enabled and disabled with the annotation
-   [`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_TABLE_ENTITY_BUFFERING.html)
-   The [buffering type](ABENBUFFER_TYPE.html) can be specified with a CDS table entity buffer defined by
-   [`DEFINE TABLE ENTITY BUFFER ON cds_table_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

abenabap.html abennews.html abennews-91.html abennews-916.html