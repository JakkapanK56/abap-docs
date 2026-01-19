---
title: "ABENCDS_F1_DEFINE_CUSTOM_ENTITY"
description: |
  ABENCDS_F1_DEFINE_CUSTOM_ENTITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DEFINE_CUSTOM_ENTITY.htm"
abapFile: "ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENCDS", "DEFINE", "CUSTOM", "ENTITY"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@ObjectModel.query.implementedBy : 'class_name'`](ABENCDS_F1_CUSTOM_QUERY.html)]\  [DEFINE]\ [ROOT] CUSTOM ENTITY custom_entity           [[`parameter_list`](ABENCDS_F1_CUSTOM_PARAMETER_LIST.html)]\            [`element_list`](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html)[;]``

[1. `... ROOT ...`](#ABAP_ADDITION_1@3@)

Defines a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)\\ `custom_entity` in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). When a CDS custom entity is activated, its metadata is created but no other object instances are created on the database or in AS ABAP. The name `custom_entity` must comply with the naming conventions for [dictionary types](ABENDDIC_DATA_TYPES.html) and can have a maximum of 30 characters.

A CDS custom entity can be used as a global structured type in ABAP programs. The entity is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP. The elements of the CDS custom entity define the components of the global structured type that can be referenced in ABAP programs using `TYPE`. As is the case for any CDS entity, the annotations of a CDS custom entity can be evaluated.

The following DDL source code shows a CDS custom entity:

In ABAP CDS, the keyword `ROOT` is used to define the CDS custom entity `custom_entity` as a [root entity](ABENROOT_ENTITY_GLOSRY.html) of the hierarchy of a [business object](ABENBUSINESS_OBJECT_GLOSRY.html). The following applies to the root entity:

-   [`@entity_annot`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can be used to specify optional [annotations](ABENCDS_ANNOTATION_GLOSRY.html) for the CDS custom entity.
-   The annotation [`@ObjectModel.query.implementedBy`](ABENCDS_F1_CUSTOM_QUERY.html) binds an ABAP class which implements an ABAP query. This query is not called by the ABAP runtime framework but by a framework like the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html).
-   [`parameter_list`](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) is used to declare a list of optional input parameters for the CDS custom entity.
-   [`element_list`](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) is used to declare elements, CDS associations, CDS to-child associations, and CDS-to-parent associations of the CDS custom entity.

-   A CDS custom entity cannot be used as a data source in other CDS entities or in ABAP SQL.
-   CDS custom entities can be used as values for the CDS annotations `AssociationRef` and `ElementRef`.
-   The annotation `ObjectModel.query.implementedBy` is mandatory when working in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).
-   In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), custom entities are used as a data model basis for [RAP unmanaged queries](ABENRAP_UNMANGED_QUERY_GLOSRY.html).

-   There is exactly one root entity in the structure of a business object.
-   A root entity can have [child entities](ABENCHILD_ENTITY_GLOSRY.html) defined by means of [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) using the keyword [`COMPOSITION`](ABENCDS_F1_CUSTOM_COMPOSITION.html), but this is not mandatory. A root entity can also be a [leaf entity](ABENLEAF_ENTITY_GLOSRY.html).
-   A root entity does not have a [parent entity](ABENPARENT_ENTITY_GLOSRY.html). [To-parent](ABENCDS_F1_CUSTOM_TP_ASSOCIATION.html) associations are not allowed in root entities.

@EndUserText.label: 'Custom Entity for Sales Order'\\ndefine root custom entity DEMO\_SALES\_SO\_CUSTOM\_ANALYTICS\\n \\{\\n key SalesOrderKey : DEMO\_BT\_RAW\_16;\\n @EndUserText.label : 'Sales Order Item Count'\\n SalesOrderItemCount : int4;\\n TypeCode : abap.char(5);\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html