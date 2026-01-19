---
title: "ABENCDS_TABLE_ENTITY_COMPOS"
description: |
  ABENCDS_TABLE_ENTITY_COMPOS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TABLE_ENTITY_COMPOS.htm"
abapFile: "ABENCDS_TABLE_ENTITY_COMPOS.html"
keywords: ["if", "class", "data", "ABENCDS", "TABLE", "ENTITY", "COMPOS"]
---

``... COMPOSITION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)] OF target ...``

Defines a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html).

The to-child association associates the current CDS entity, as a [composition source](ABENCOMPOSITION_SOURCE_GLOSRY.html), with the [composition target](ABENCOMPOSITION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the to-child association.

To-child associations are specialized [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and they work in the same way as described in topic [CDS DDL - CDS View Entity, `COMPOSITION`](ABENCDS_COMPOSITION_V2.html) with the following differences:

Demonstration of a simple CDS composition. The parent entity `DEMO_CDS_TE_COMPOS_1` defines a to-child association to the table entity `DEMO_CDS_TE_TO_PARENT_1`.

The child entity `DEMO_CDS_TE_TO_PARENT_1` defines a to-parent association to the table entity `DEMO_CDS_TE_COMPOS_1`.

-   In CDS to-child associations in table entities, the addition `AS` is not used. The name of the to-child association is declared using the name `_compos` in the element list of the CDS table entity.
-   The cardinality must be written in words. The numeric notation is not available in table entities.

@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@EndUserText.label: 'CDS table entity, composition'\\ndefine root table entity DEMO\_CDS\_TE\_COMPOS\_1\\n\\{\\n key key\_el : abap.int4;\\n col1 : abap.char(1);\\n \_to\_child: composition of exact one to many DEMO\_CDS\_TE\_TO\_PARENT\_1;\\n\\n\\}\\n @ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS table entity, composition'\\ndefine table entity DEMO\_CDS\_TE\_TO\_PARENT\_1\\n\\{\\n key key\_el : abap.int4;\\n col1 : abap.char(1);\\n \_to\_parent: association to parent DEMO\_CDS\_TE\_COMPOS\_1 \\n on \_to\_parent.key\_el = $projection.key\_el;\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html abencds\_define\_table\_entity.html abencds\_table\_entity\_element\_list.html abencds\_table\_entity\_element.html