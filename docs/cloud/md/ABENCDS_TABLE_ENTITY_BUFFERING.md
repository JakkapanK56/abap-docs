---
title: "ABENCDS_TABLE_ENTITY_BUFFERING"
description: |
  ABENCDS_TABLE_ENTITY_BUFFERING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TABLE_ENTITY_BUFFERING.htm"
abapFile: "ABENCDS_TABLE_ENTITY_BUFFERING.html"
keywords: ["select", "do", "if", "try", "class", "data", "ABENCDS", "TABLE", "ENTITY", "BUFFERING"]
---

The following [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) defines whether [table buffering](ABENSAP_PUFFERING.html) is allowed for a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html) or not:

[`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_VIEW_ENTITY_ANNO.html)

If buffering is allowed, the actual [buffering type](ABENBUFFER_TYPE.html) can be defined by a separate [ABAP tuning object](ABENABAP_TUNING_OBJECT_GLOSRY.html) called [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) with the DDL statement:

[`DEFINE TABLE ENTITY BUFFER ON cds_table_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

The CDS entity buffer relates the buffering type to one of the layers core, localization, industry, partner and customer. For each layer, a buffering type can be defined for a CDS table entity.

If the annotation `@AbapCatalog.entityBuffer.definitionAllowed` is set to `true`, the following restrictions apply to the CDS table entity:

Allowing buffering for a CDS table entity.

Example for buffering of the table entity `DEMO_CDS_TABLE_ENTITY_BUF`:

-   There must be at least one key element and the combined length of the key elements must not be greater than 900 bytes. Key elements cannot be [LOBs](ABENLOB_GLOSRY.html).
-   The table entity must not have any element of the data type `GEOM_EWKB`.

-   Buffer delegation using a [CDS delegated buffer](ABENCDS_DEL_BUFFER_GLOSRY.html) is not supported for table entities, since table entities do not select data from underlying data sources and there is no base object to delegate to.
-   [CDS buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html) is not supported for table entities.

@EndUserText.label: 'Demo: CDS table entity'\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.entityBuffer.definitionAllowed: true\\ndefine table entity DEMO\_CDS\_TABLE\_ENTITY\_BUF\\n\\{\\n key key\_field : abap.int8;\\n char\_field\_not\_null : abap.char(20);\\n char\_field\_null : abap.char(10) null;\\n numc\_field : abap.numc(10);\\n\\}\\n define table entity buffer on DEMO\_CDS\_TABLE\_ENTITY\_BUF \\n layer core \\n type full abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html