---
title: "ABENCDS_ELEMENT_ANNOTATIONS_V1"
description: |
  ABENCDS_ELEMENT_ANNOTATIONS_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ELEMENT_ANNOTATIONS_V1.htm"
abapFile: "ABENCDS_ELEMENT_ANNOTATIONS_V1.html"
keywords: ["select", "if", "try", "ABENCDS", "ELEMENT", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``\\ 
``... @<[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an [element](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) as element annotation. Element annotations can be specified before and after the element.

The elements of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) can be annotated with the element annotations listed in topic [`element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

In the CDS view `demo_corporation_sales_order`, a short text and a tooltip are assigned to the element `role`. The element `currency_code` is flagged as a currency key and is assigned as a currency key to the element `gross_amount`.

-   In front of the element, the character `@` must be placed before the name `annotation` of the annotation.
-   Following the element, the characters `@<` must be placed before the name `annotation` of the annotation.

@AbapCatalog.sqlViewName: 'DEMO\_CORP\_SO\_VW'\\ndefine view demo\_corporation\_sales\_order as\\n select from snwd\_bpa as business\_partner\\n inner join snwd\_so as sales\_order\\n on business\_partner.node\_key = sales\_order.buyer\_guid\\n \\{ key sales\_order.so\_id as sales\_order\_id,\\n business\_partner.bp\_id as corporation\_id,\\n business\_partner.company\_name,\\n @EndUserText.label: 'Corporation Role'\\n @EndUserText.quickInfo: 'Customer or supplier'\\n business\_partner.bp\_role as role,\\n @Semantics.currencyCode\\n sales\_order.currency\_code,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n sales\_order.gross\_amount \\}\\n where business\_partner.legal\_form = 'Inc.'; //Corporations only\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_list\_v1.html abencds\_select\_list\_entry\_v1.html