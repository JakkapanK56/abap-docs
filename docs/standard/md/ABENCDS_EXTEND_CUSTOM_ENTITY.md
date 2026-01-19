---
title: "ABENCDS_EXTEND_CUSTOM_ENTITY"
description: |
  ABENCDS_EXTEND_CUSTOM_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_EXTEND_CUSTOM_ENTITY.htm"
abapFile: "ABENCDS_EXTEND_CUSTOM_ENTITY.html"
keywords: ["select", "delete", "if", "class", "data", "ABENCDS", "EXTEND", "CUSTOM", "ENTITY"]
---

`\  EXTEND CUSTOM ENTITY CustomEntity WITH    \{ ElementListExtension \}`

Extends an existing [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html)\\ `CustomEntity` using a [CDS custom entity extension](ABENCDS_CUS_ENTITY_EXTEND_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). An existing CDS custom entity can have one or more CDS custom entity extensions.

As a prerequisite, the extended entity must allow extensions. Extensions are allowed by default or can be explicitly allowed with the annotation [`AbapCatalog.extensibility.extensible`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) with the value `true`. If the value `false` is specified, extensions are not allowed.

Custom entity extensions can make additions to the original entity, but they cannot modify, overwrite, or delete elements from the original entity. A custom entity extension can specify only features that are possible within custom entities, but with some limitations. The following can be specified in a custom entity extension:

Elements that are added to a custom entity by an extension change the custom entity signature. The ABAP class that implements the CDS custom entity can access the original and the extension fields.

As stated above, a custom entity extension changes the custom entity signature of the ABAP class that implements the custom entity. To use the extension elements, the following options exist:

The CDS custom entity extension `DEMO_CDS_EXTEND_CUSTOM`

adds a new element and two new associations to the existing CDS custom entity.

-   New elements. These new elements are defined as described in topic [`DEFINE CUSTOM ENTITY`, Element](ABENCDS_F1_CUSTOM_ELEMENT.html). Those elements can have [element annotations](ABENCDS_F1_CUSTOM_ELEMENT_ANNO.html). New key elements are not possible.
-   New associations `_assoc1`, `_assoc2` can be defined in the CDS custom entity extension. The same rules apply that are described in topic [`DEFINE CUSTOM ENTITY`, association](ABENCDS_F1_CUSTOM_ASSOCIATION.html).
-   New [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html)\\ `_compos1`, `_compos2` can be defined in the CDS custom entity extension under the condition that the composition target is also defined as composition child and has the required to-parent association. The composition target is the extended custom entity, not the extension itself. The same rules apply that are described in topic [`DEFINE CUSTOM ENTITY`, Composition](ABENCDS_F1_CUSTOM_COMPOSITION.html).
-   Each appended element must have a unique name.

-   CDS custom entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](ABENCDS_F1_CUSTOM_PARAMETER_LIST.html) in a custom entity extension.
-   [CDS to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) must not be defined in a custom entity extension.
-   No addition `ROOT` can be specified in the statement `EXTEND CUSTOM ENTITY` to transform a regular entity to a [root entity](ABENROOT_ENTITY_GLOSRY.html).
-   An appended element cannot be defined as a `KEY` element.
-   In a custom entity extension, [header annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) are not supported. That means that no annotations are allowed in front of the statement `EXTEND CUSTOM ENTITY`.

-   If the implementing ABAP class selects data from data sources, such as CDS entities or DDIC database tables, these data sources can also be extended. The custom entity extension fields can be passed to the extension fields of the data source with `MOVE-CORRESPONDING`.
-   If a customer wants to process the extension fields in the custom entity implementation, this can be enabled via BAdIs provided by the owner of the custom entity.

extend custom entity DEMO\_CDS\_ORIGINAL\_CUSTOM with\\n\\{\\n col4 : abap.char(1);\\n @ObjectModel.sort.enabled: false\\n @ObjectModel.filter.enabled: false\\n \_assoc : association to DEMO\_CDS\_CUSTOM\_ENTITY \\n on $projection.col2 = \_assoc.id;\\n \_compos : composition of exact one to one DEMO\_CDS\_CUSTOM\_CHILD;\\n\\}\\n @EndUserText.label: 'CDS custom entity, extended entity'\\n@AbapCatalog.extensibility.extensible: true\\n\\ndefine root custom entity DEMO\_CDS\_ORIGINAL\_CUSTOM\\n with parameters\\n param1 : abap.int4\\n\\{\\n key col1 : abap.char( 5 );\\n col2 : abap.int4;\\n col3 : abap.int4;\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_extension.html