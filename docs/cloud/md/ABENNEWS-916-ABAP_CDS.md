---
title: "ABENNEWS-916-ABAP_CDS"
description: |
  ABENNEWS-916-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-916-ABAP_CDS.htm"
abapFile: "ABENNEWS-916-ABAP_CDS.html"
keywords: ["if", "try", "data", "types", "ABENNEWS", "916", "ABAP", "CDS"]
---

[1. Stricter Rules for Association `ON` Conditions in CDS Custom Entities](#ABAP_MODIFICATION_1@4@) 

[2\. New Element Annotations](#ABAP_MODIFICATION_2@4@)

[3\. CDS Table Entity, Table Buffering](#ABAP_MODIFICATION_3@4@)

[4\. Static External Entities](#ABAP_MODIFICATION_4@4@)

[5\. CDS Static Caches](#ABAP_MODIFICATION_5@4@)

Stricter rules for the association `ON` condition for CDS custom entities have been implemented. For details, see [CDS DDL - `DEFINE CUSTOM ENTITY`, `association`](ABENCDS_F1_CUSTOM_ASSOCIATION.html).

The same rules also apply if other CDS entities define associations with a CDS custom entity as an association target.

The following [ABAP annotations](ABENCDS_ABAP_ANNOS.html) are now supported as [element annotations](ABENCDS_F1_ELEMENT_ANNOTATION.html) with the annotation [scope](ABENCDS_ANNOTATIONS_SCOPES.html)\\ `#ELEMENT`.

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) can be defined for [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html) now:

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

With the first release of [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html), only [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html) were available. Now, [static external entities](ABENCDS_STATIC_EE_GLOSRY.html) are also available. They are defined using the addition[`PROVIDED BY logical_external_schema`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html) in the data definition.

[Static caches](ABENSTATIC_VIEW_CACHE_GLOSRY.html) are now available in ABAP CDS. These can lead to performance gains when aggregated data is cached.

-   `[AbapCatalog.typeSpec.conversionExit](ABENCDS_58258031_ANNO.html)`
-   `[AbapCatalog.typeSpec.outputLength](ABENCDS_1569826112_ANNO.html)`

-   Table buffering can be enabled and disabled with the annotation
-   [`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_TABLE_ENTITY_BUFFERING.html)
-   The [buffering type](ABENBUFFER_TYPE.html) can be specified with a CDS table entity buffer defined by
-   [`DEFINE TABLE ENTITY BUFFER ON cds_table_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

abenabap.html abennews.html abennews-91.html abennews-916.html