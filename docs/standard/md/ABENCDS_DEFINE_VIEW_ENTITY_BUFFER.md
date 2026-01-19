---
title: "ABENCDS_DEFINE_VIEW_ENTITY_BUFFER"
description: |
  ABENCDS_DEFINE_VIEW_ENTITY_BUFFER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.htm"
abapFile: "ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html"
keywords: ["do", "if", "try", "class", "data", "ABENCDS", "DEFINE", "VIEW", "ENTITY", "BUFFER"]
---

``DEFINE VIEW | TABLE ENTITY BUFFER ON cds_entity                     LAYER CORE                         | LOCALIZATION                         | INDUSTRY                         | PARTNER                         | CUSTOMER                     TYPE SINGLE                        |\ \{GENERIC NUMBER OF KEY ELEMENTS number\}\                        | FULL                        |\ [`DELEGATED`](ABENCDS_DEFINE_DELEGATED_BUFFER.html)\                        | NONE``

Defines a [CDS view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) or a [CDS table entity buffer](ABENCDS_TABLE_ENTITY_B_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html).

The following variants are available:

View entity buffers and table entity buffers are [ABAP tuning objects](ABENABAP_TUNING_OBJECT_GLOSRY.html) that specify a layer dependent [buffering type](ABENBUFFER_TYPE.html) for the [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) of a [CDS entity](ABENCDS_V2_VIEW_GLOSRY.html)\\ `cds_entity`. As a prerequisite, the definition of the CDS entity must contain the following annotation:

`@AbapCatalog.entityBuffer.definitionAllowed:true`.

This annotation entails additional syntax checks. It is only allowed if the CDS view entity in question fulfills certain prerequisites. These prerequisites are described in the following topics:

If a CDS entity buffer is active for a CDS entity, the annotation cannot be removed there.

The [buffering type](ABENBUFFER_TYPE.html) is set as follows:

The addition `LAYER` defines the layer for which the buffering type is valid. The layer determines the priority if there are multiple view entity buffers for one CDS entity. The priority is as follows, where the list starts with the lowest and ends with the highest priority:

It is not possible to define multiple view entity buffers with the same layer for one CDS entity.

The addition `TYPE NONE` can be used to switch off buffering explicitly. This is especially useful for switching off buffering in a higher layer that was defined in a lower layer.

ABAP Data Models guide, section about [CDS View Entity Buffers](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/ddcf02dcfaa344f4a32c9d13dbda167b?version=sap_cross_product_abap).

The following definitions demonstrate the three kinds of table buffering for three different CDS entities in the layer `core`.

The CDS entities `DEMO_CDS_FULL_BUFFERED_VIEW`, `DEMO_CDS_GEN_BUFFERED_VIEW`, `DEMO_CDS_SINGLE_BUFFERED_VIEW`, and `DEMO_CDS_DEL_BUFFERED_VIEW` all contain the annotation `@AbapCatalog.entityBuffer.definitionAllowed: true`.

Allowing buffering for a CDS table entity.

Example for buffering of the table entity `DEMO_CDS_TABLE_ENTITY_BUF`:

-   The syntax `DEFINE VIEW ENTITY BUFFER ON cds_entity ...` can be used to specify buffering settings for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html).
-   The syntax `DEFINE TABLE ENTITY BUFFER ON cds_entity ...` can be used to specify buffering settings for a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html).

-   [ABAP CDS - Table Buffering of CDS View Entities](ABENCDS_V2_VIEW_BUFFERING.html).
-   [ABAP CDS - Table Buffering of CDS Table Entities](ABENCDS_TABLE_ENTITY_BUFFERING.html).

-   `TYPE SINGLE` defines [single record buffering](ABENBUFFER_SINGLE_BUFFERING.html).
-   `TYPE GENERIC` defines [generic buffering](ABENBUFFER_GENERIC_BUFFERING.html). The number of respected key fields must be set by `number` behind `NUMBER OF KEY ELEMENTS`. `number` must be a positive numeric literal that is not greater than the number of key elements of the CDS entity `cds_entity`.
-   `TYPE FULL` defines [complete buffering](ABENBUFFER_COMPLETE_BUFFERING.html).
-   [`TYPE DELEGATED`](ABENCDS_DEFINE_DELEGATED_BUFFER.html) defines [delegated buffering](ABENCDS_DEL_BUFFER_GLOSRY.html).
-   **Limitation:** The buffering type `DELEGATED` is available in CDS view entity buffers only. It is not available in CDS table entity buffers.

-   The name of a CDS view entity buffer is not reflected in its definition. It only occurs as the name of the repository object in ADT.
-   The layers specified with `LAYER` are the same as in the definition of a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html) with [`ANNOTATE ENTITY`](ABENCDS_F1_ANNOTATE_VIEW.html).
-   Only the explicitly defined key fields of a CDS entity must be respected behind `NUMBER OF KEY ELEMENTS`. Unlike [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), there is no client column to be respected for [client-dependent views](ABENCDS_V2_VIEW_CLIENT_HANDLING.html).
-   A CDS entity buffer fulfills the same task as the respective [technical settings](ABENDDIC_DATABASE_TABLES_BUFFER.html) of a DDIC database table. Both can be activated and transported separately from the buffered entity. But compared to buffering DDIC database tables, the buffering type for a CDS entity has the additional feature of being layer-specific.
-   Table buffering only takes place if the view entity is accessed by ABAP SQL, and the same [restrictions](ABENBUFFER_RESTRICTIONS.html) apply.

1.  `CORE` - SAP basis component
2.  `LOCALIZATION` - SAP application component
3.  `INDUSTRY` - SAP industry solution
4.  `PARTNER` - partner
5.  `CUSTOMER` - customer

define view entity buffer on DEMO\_CDS\_FULL\_BUFFERED\_VIEW \\n layer core \\n type fulldefine view entity buffer on DEMO\_CDS\_GEN\_BUFFERED\_VIEW \\n layer core \\n type generic number of key elements 1define view entity buffer on DEMO\_CDS\_SINGLE\_BUFFERED\_VIEW \\n layer core \\n type singledefine view entity buffer on DEMO\_CDS\_DEL\_BUFFERED\_VIEW \\n layer core \\n type delegated @EndUserText.label: 'Demo: CDS table entity'\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.entityBuffer.definitionAllowed: true\\ndefine table entity DEMO\_CDS\_TABLE\_ENTITY\_BUF\\n\\{\\n key key\_field : abap.int8;\\n char\_field\_not\_null : abap.char(20);\\n char\_field\_null : abap.char(10) null;\\n numc\_field : abap.numc(10);\\n\\}\\n define table entity buffer on DEMO\_CDS\_TABLE\_ENTITY\_BUF \\n layer core \\n type full abenabap.html abencds.html abencds\_tuning\_objects.html abencds\_entity\_buffers.html