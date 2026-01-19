---
title: "ABENCDS_F1_CUSTOM_COMPOSITION"
description: |
  ABENCDS_F1_CUSTOM_COMPOSITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_CUSTOM_COMPOSITION.htm"
abapFile: "ABENCDS_F1_CUSTOM_COMPOSITION.html"
keywords: ["if", "ABENCDS", "CUSTOM", "COMPOSITION"]
---

``... COMPOSITION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)]\ [OF] target ...``

Defines a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) of a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).

The to-child association associates the current CDS entity, as a [composition source](ABENCOMPOSITION_SOURCE_GLOSRY.html), with the [composition target](ABENCOMPOSITION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the to-child association.

To-child associations are specialized [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and they work in the same way as described in topic [CDS DDL - CDS View Entity, `COMPOSITION`](ABENCDS_COMPOSITION_V2.html). The only difference is that in CDS to-child associations in CDS custom entities, the addition `AS` is not used. The name of the to-child association is declared using the name `_compos` in the element list of the CDS custom entity.

The following DDL source code shows a CDS custom entity that defines a CDS to-child association to another CDS custom entity:

@EndUserText.label: 'SO Custom Entity with association'\\ndefine root custom entity DEMO\_SALES\_CUSTOM\_COMPOSITION\\n \\{\\n key id : abap.char(20);\\n seller\_id : abap.char(20);\\n buyer\_id : abap.char(20);\\n act\_indicator : abap.char( 1 );\\n type\_code : abap.char( 5 );\\n \_items : composition of exact one to one \\n DEMO\_SALES\_CUSTOM\_CHILD;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html abencds\_f1\_custom\_element\_list.html abencds\_f1\_custom\_element.html