---
title: "ABENCDS_ABSENT_TO_PARENT_ASSOC"
description: |
  ABENCDS_ABSENT_TO_PARENT_ASSOC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ABSENT_TO_PARENT_ASSOC.htm"
abapFile: "ABENCDS_ABSENT_TO_PARENT_ASSOC.html"
keywords: ["if", "data", "ABENCDS", "ABSENT", "PARENT", "ASSOC"]
---

``... ASSOCIATION TO PARENT target [ON $projection.[`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html)] ...``

Defines a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).

The CDS to-parent association associates the current CDS entity, as a [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and the same rules apply as described in topic [CDS DDL - CDS View Entity, `ASSOCIATION TO PARENT`](ABENCDS_TO_PARENT_ASSOC_V2.html). There is only one exception to the rules described in topic [CDS DDL - CDS View Entity, `ASSOCIATION TO PARENT`](ABENCDS_TO_PARENT_ASSOC_V2.html): If the association target of a to-parent association is another CDS abstract entity, then the `ON` condition is not mandatory and can be left out.

The following DDL source code shows a CDS abstract entity that defines a CDS to-parent association to another CDS abstract entity:

@EndUserText.label: 'CDS abstract entity, to-parent assoc'\\ndefine abstract entity DEMO\_CDS\_ABSTRACT\_CHILD\\n\\{\\n key key\_field : abap.char(1);\\n data\_field : abap.int4;\\n \_to\_parent : association to parent DEMO\_CDS\_ABSTRACT\_COMPOSITION \\n on \_to\_parent.key\_field = $projection.key\_field;\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html abencds\_f1\_absent\_element\_list.html abencds\_f1\_absent\_list\_element.html