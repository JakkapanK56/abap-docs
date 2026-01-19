---
title: "ABENCDS_V2_VIEW_BUFFERING"
description: |
  ABENCDS_V2_VIEW_BUFFERING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_V2_VIEW_BUFFERING.htm"
abapFile: "ABENCDS_V2_VIEW_BUFFERING.html"
keywords: ["select", "do", "if", "case", "try", "data", "types", "ABENCDS", "VIEW", "BUFFERING"]
---

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) settings for CDS view entities are defined in separate repository objects called [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html). The following types of CDS entity buffer are available:

The following sections provide information on the different types of CDS entity buffers:

The following [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) defines whether [table buffering](ABENSAP_PUFFERING.html) using a [CDS view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) is allowed for a [CDS view entity](ABENCDS_VIEW_ENTITY.html) or not:

[`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_VIEW_ENTITY_ANNO.html)

If buffering is allowed, the actual [buffering type](ABENBUFFER_TYPE.html) can be defined by a separate [ABAP tuning object](ABENABAP_TUNING_OBJECT_GLOSRY.html) called [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) with the DDL statement:

[`DEFINE VIEW ENTITY BUFFER ON cds_view_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

The CDS entity buffer relates the buffering type to one of the layers core, localization, industry, partner and customer. For each layer, one buffering type can be defined for a CDS view entity.

If the annotation `@AbapCatalog.entityBuffer.definitionAllowed` is set to `true`, the following restrictions apply to the CDS view entity:

Allowing buffering for a CDS view entity. The actual buffering is defined with the DDL for an entity buffer as shown under [`DEFINE VIEW ENTITY BUFFER`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html).

The following [CDS annotation](ABENCDS_ANNOTATION_GLOSRY.html) defines whether [CDS buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html) using a [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html) is allowed for a [CDS view entity](ABENCDS_VIEW_ENTITY.html) or not:

[`@AbapCatalog.entityBuffer.propagationAllowed: true|false`](ABENCDS_VIEW_ENTITY_ANNO.html)

If buffer propagation is allowed, the actual [SQL path target fields](ABENSQL_TARGET_FIELD_GLOSRY.html) that are propagated can be defined by a separate [ABAP tuning object](ABENABAP_TUNING_OBJECT_GLOSRY.html) called [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html) with the DDL statement:

[`PROPAGATE VIEW ENTITY BUFFER ON cds_entity ...`](ABENCDS_PROPAGATE_BUFFER.html)

One or more CDS propagated buffers can be specified for a CDS view entity. In total, a maximum of ten propagated fields can be defined for a CDS view entity.

If the annotation `@AbapCatalog.entityBuffer.propagationAllowed` is set to `true`, the following restrictions apply to the CDS view entity:

Allowing buffer propagation for a CDS transactional query. The actual buffering is defined with the DDL for a propagated buffer as shown under [`PROPAGATE VIEW ENTITY BUFFER`](ABENCDS_PROPAGATE_BUFFER.html). The original data source of the SQL path target field is the CDS view `DEMO_SALES_CDS_MAT_TEXT`. This view is fully buffered, so it fulfills the prerequisite for buffer propagation.

-   [CDS view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html): Defines the kind of table buffering for a CDS entity.
-   [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html): Defines fields for [CDS buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html).

-   The annotations [`@AbapCatalog.buffering.status`](ABENCDS_VIEW_ANNO_V1.html), [`@AbapCatalog.buffering.type`](ABENCDS_VIEW_ANNO_V1.html), and [`@AbapCatalog.buffering.numberOfKeyFields`](ABENCDS_VIEW_ANNO_V1.html) are not supported in CDS view entities. They are only valid for [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html).
-   Other than for [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), where the buffering is defined for the respective [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), the table buffering of CDS view entities is defined for the CDS entity itself.
-   In contrast to [table buffering of CDS DDIC-based views](ABENCDS_V1_BUFFERING.html) where ABAP SQL bypasses the table buffer if the prerequisites are not met, the restrictions are checked directly for the view in case of CDS view entities. For a view that does not meet the prerequisites, table buffering cannot be enabled.
-   A CDS data model with multiple layers that has buffering defined on multiple layers (for example, [table buffers](ABENTABLE_BUFFER_GLOSRY.html) and [CDS entity buffers](ABENCDS_ENTITY_BUFFER_GLOSRY.html)) stores data redundantly as soon as the buffers are accessed. For each individual view, the data is stored in a separate table buffer. Non-redundant storage is currently not supported.
-   Table buffering only takes place if the view entity is accessed by ABAP SQL and the same [restrictions](ABENBUFFER_RESTRICTIONS.html) apply.
-   The primary key of the buffered CDS view entity, specified using the addition [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V2.html), is relevant for buffering of CDS entities. A non-unique primary key might lead to unexpected buffer behavior. Therefore, the application developer should ensure that each data record of a buffered entity has a unique primary key.

-   Only the following [data sources](ABENCDS_DATA_SOURCE_V2.html) are possible:

-   [DDIC database tables](ABENDATABASE_TABLE_GLOSRY.html)
-   [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) annotated with the annotation `@AbapCatalog.entityBuffer.definitionAllowed: true`. A CDS view entity used as data source must allow buffering itself and must therefore meet all requirements listed here. In a CDS data model with multiple layers, each CDS view entity must allow buffering as a prerequisite for the upper layer to allow buffering.

-   There must be at least one key element and the combined length of the key elements must not be greater than 900 bytes. Key elements cannot be [LOBs](ABENLOB_GLOSRY.html).
-   No [input parameters](ABENCDS_PARAMETER_LIST_V2.html) are allowed.
-   No calculations are allowed that have results that do not depend on database content only, for example [time stamp functions](ABENCDS_TIMESTAMP_FUNCTIONS_V2.html) that return or depend on the current time stamp.
-   No [session variables](ABENCDS_SESSION_VARIABLE_V2.html) other than `$session.client` are allowed.
-   No database tables can be accessed where [data aging](ABENDATA_AGING_GLOSRY.html) is enabled,
-   No customer extensions are allowed. Annotations [`AbapCatalog.extensibility.extensible`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) or [`AbapCatalog.viewEnhancementCategory`](ABENCDS_VIEW_ENTITY_ANNO.html) cannot be used to enable extensions.
-   It is not possible to specify both a view entity buffer and a propagated buffer for a CDS view entity. The annotation `AbapCatalog.entityBuffer.propagationAllowed` must not be used with the value `true`.
-   The view entity must not have any element of the data type `GEOM_EWKB`.

-   No [set operators](ABENCDS_SET_OPERATORS.html) are allowed. This means that the CDS view entity must not contain any of the statements [`UNION`](ABENCDS_UNION_V2.html), [`EXCEPT`](ABENCDS_EXCEPT_V2.html), or [`INTERSECT`](ABENCDS_INTERSECT_V2.html).
-   It is not possible to specify both a view entity buffer and a propagated buffer for a CDS view entity. The annotation `AbapCatalog.entityBuffer.definitionAllowed` must not be used with the value `true`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.entityBuffer.definitionAllowed: true\\n\\ndefine view entity DEMO\_CDS\_GEN\_BUFFERED\_VIEW\\n as select from sairport\\n\\{\\n\\n key id as Id,\\n key name as Name,\\n time\_zone as Time\_Zone\\n\\}\\n @EndUserText.label: 'CDS transactional query, material'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.entityBuffer.propagationAllowed: true\\ndefine root view entity DEMO\_SALES\_PV\_MATERIAL\\n provider contract transactional\_query\\n as projection on DEMO\_SALES\_CDS\_MATERIAL\\n\\{\\n key material,\\n material\_type,\\n material\_group,\\n /\* Associations \*/\\n \_Text,\\n \_Text.material\_name as MaterialName : localized\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html