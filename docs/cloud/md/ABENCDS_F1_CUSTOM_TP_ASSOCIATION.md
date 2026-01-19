---
title: "ABENCDS_F1_CUSTOM_TP_ASSOCIATION"
description: |
  ABENCDS_F1_CUSTOM_TP_ASSOCIATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_CUSTOM_TP_ASSOCIATION.htm"
abapFile: "ABENCDS_F1_CUSTOM_TP_ASSOCIATION.html"
keywords: ["if", "ABENCDS", "CUSTOM", "ASSOCIATION"]
---

``... ASSOCIATION TO PARENT target ON $projection.[`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) ...``

Defines a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) of a [CDS custom entity](ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html).

The CDS to-parent association associates the current CDS entity, as a [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the CDS to-parent association.

CDS to-parent associations are specialized [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and the same rules apply as described in topic [CDS DDL - CDS View Entity, `ASSOCIATION TO PARENT`](ABENCDS_TO_PARENT_ASSOC_V2.html). The only difference is that the addition `AS_assoc` is not used. The name of the to-parent association is declared using the name `_to_parent` in the [element list](ABENCDS_F1_CUSTOM_ELEMENT.html) of the CDS custom entity.

The following DDL source code shows a CDS custom entity that defines a CDS to-parent association to another CDS custom entity:

@EndUserText.label: 'Child custom entity'\\ndefine custom entity DEMO\_SALES\_CUSTOM\_CHILD\\n \\{\\n key id : abap.char(20);\\n parent\_id : abap.char(20);\\n item\_number : abap.char(20);\\n type\_code : abap.char(5);\\n \_items : \\n association to parent demo\_sales\_custom\_composition\\n on \_items.id = $projection.id;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html abencds\_f1\_custom\_element\_list.html abencds\_f1\_custom\_element.html