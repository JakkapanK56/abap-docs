---
title: "ABENCDS_ELEMENT_ANNOTATIONS_V2"
description: |
  ABENCDS_ELEMENT_ANNOTATIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ELEMENT_ANNOTATIONS_V2.htm"
abapFile: "ABENCDS_ELEMENT_ANNOTATIONS_V2.html"
keywords: ["select", "if", "case", "try", "class", "ABENCDS", "ELEMENT", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an [element](ABENCDS_SELECT_LIST_ENTRY_V2.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) as element annotation. Element annotations must be specified before the element they belong to, and the character `@` must be placed in front of the name `annotation` of the annotation.

For CDS view entities, there are strict checks that all element annotations used must be defined as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs.

All available element annotations are listed in topic [`element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

In the CDS view entity `DEMO_SALES_CDS_ELEM_ANNOT`, a short text and a tooltip are assigned to the element `given_name`.

This example demonstrates how element annotations are [passed on](ABENCDS_ANNOTATIONS_ANALYSIS.html) between views via [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). The following CDS view entity defines and exposes a CDS association `_some_assoc`:

A further CDS view entity accesses the view and also exposes the CDS association. Here, the annotation `@EndUserText.label` is inherited.

The following CDS view entity defines and exposes its own CDS association `_some_assoc`. In this case, the CDS annotation `@EndUserText.label` is not inherited.

If the CDS association `_some_assoc` was exposed from `DEMO_CDS_ASSOC_ANNO2_VE` instead of or in addition to `_some_assoc` by specifying the name `Demo_Cds_Assoc_Anno2_ve._some_assoc` explicitly, the annotation would be inherited again. The class `CL_DEMO_CDS_ASSOC_ANNO_VE` evaluates the annotations of both views. No local element annotations are defined for the locally defined association `_some_assoc` of the view `DEMO_CDS_ASSOC_ANNO1_LOC_VE`, which means that the result for this CDS association is empty.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_ELEM\_ANNOT\\n as select from\\n demo\_sales\_bupa\\n inner join demo\_sales\_order as sales\_order\\n on demo\_sales\_bupa.id = sales\_order.id\\n \\{\\n key demo\_sales\_bupa.id,\\n demo\_sales\_bupa.gender,\\n demo\_sales\_bupa.title,\\n @EndUserText.label: 'First name'\\n @EndUserText.quickInfo: 'Customer''s first name'\\n demo\_sales\_bupa.given\_name\\n \\}\\n where\\n demo\_sales\_bupa.gender = 'f'\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ASSOC\_ANNO2\_VE\\n as select from demo\_join2\\n association to many demo\_join3 as \_some\_assoc \\n on \_some\_assoc.l = demo\_join2.d\\n\\{\\n key d,\\n @EndUserText.label: 'Association to demo\_join3'\\n \_some\_assoc\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ASSOC\_ANNO1\_INH\_VE\\n as select from Demo\_Cds\_Assoc\_Anno2\\n\\{\\n key d,\\n \_some\_assoc\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ASSOC\_ANNO1\_LOC\_VE\\n as select from Demo\_Cds\_Assoc\_Anno2\\n association to many demo\_join1 as \_some\_assoc \\n on Demo\_Cds\_Assoc\_Anno2.d = \_some\_assoc.d\\n\\{\\n key d,\\n \_some\_assoc\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_list\_v2.html abencds\_select\_list\_entry\_v2.html