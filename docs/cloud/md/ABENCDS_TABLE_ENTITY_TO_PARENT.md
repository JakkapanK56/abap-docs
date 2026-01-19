---
title: "ABENCDS_TABLE_ENTITY_TO_PARENT"
description: |
  ABENCDS_TABLE_ENTITY_TO_PARENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TABLE_ENTITY_TO_PARENT.htm"
abapFile: "ABENCDS_TABLE_ENTITY_TO_PARENT.html"
keywords: ["if", "class", "data", "ABENCDS", "TABLE", "ENTITY", "PARENT"]
---

``... ASSOCIATION TO PARENT target ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) ...``

Defines a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html).

The CDS to-parent association associates the current CDS entity, as an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and the same rules apply as described in topic [CDS DDL - CDS View Entity, `ASSOCIATION TO PARENT`](ABENCDS_TO_PARENT_ASSOC_V2.html). The only difference is that the addition `AS _assoc` is not used. The name of the to-parent association is declared using the name `_to_parent` in the element list of the table entity.

Demonstration of a simple CDS composition. The parent entity `DEMO_CDS_TE_COMPOS_1` defines a to-child association to the table entity `DEMO_CDS_TE_TO_PARENT_1`.

The child entity `DEMO_CDS_TE_TO_PARENT_1` defines a to-parent association to the table entity `DEMO_CDS_TE_COMPOS_1`.

@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@EndUserText.label: 'CDS table entity, composition'\\ndefine root table entity DEMO\_CDS\_TE\_COMPOS\_1\\n\\{\\n key key\_el : abap.int4;\\n col1 : abap.char(1);\\n \_to\_child: composition of exact one to many DEMO\_CDS\_TE\_TO\_PARENT\_1;\\n\\n\\}\\n @ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS table entity, composition'\\ndefine table entity DEMO\_CDS\_TE\_TO\_PARENT\_1\\n\\{\\n key key\_el : abap.int4;\\n col1 : abap.char(1);\\n \_to\_parent: association to parent DEMO\_CDS\_TE\_COMPOS\_1 \\n on \_to\_parent.key\_el = $projection.key\_el;\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html abencds\_define\_table\_entity.html abencds\_table\_entity\_element\_list.html abencds\_table\_entity\_element.html