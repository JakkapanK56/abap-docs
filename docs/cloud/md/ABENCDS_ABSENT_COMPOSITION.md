---
title: "ABENCDS_ABSENT_COMPOSITION"
description: |
  ABENCDS_ABSENT_COMPOSITION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ABSENT_COMPOSITION.htm"
abapFile: "ABENCDS_ABSENT_COMPOSITION.html"
keywords: ["if", "data", "ABENCDS", "ABSENT", "COMPOSITION"]
---

``... COMPOSITION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)]\ [OF] target ...``

Defines a [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) of a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).

The CDS to-child association associates the current CDS abstract entity, as an [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the to-child association.

CDS to-child associations are specialized [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and they work in the same way as described in topic [CDS DDL - CDS View Entity, `COMPOSITION`](ABENCDS_COMPOSITION_V2.html). The only difference is that in to-child associations in CDS abstract entities, the addition `AS` is not used. The name of the to-child association is declared using the name `_compos` in the element list of the CDS abstract entity.

The following DDL source code shows a CDS abstract entity that defines a to-child association to another CDS abstract entity:

@EndUserText.label: 'CDS abstract entity, composition'\\ndefine root abstract entity DEMO\_CDS\_ABSTRACT\_COMPOSITION\\n\\{\\n key key\_field : abap.char(1);\\n data\_field : abap.int4;\\n \_compos : composition \[0..1\] of DEMO\_CDS\_ABSTRACT\_CHILD;\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html abencds\_f1\_absent\_element\_list.html abencds\_f1\_absent\_list\_element.html