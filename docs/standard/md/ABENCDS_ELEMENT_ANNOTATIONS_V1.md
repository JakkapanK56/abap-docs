---
title: "ABENCDS_ELEMENT_ANNOTATIONS_V1"
description: |
  ABENCDS_ELEMENT_ANNOTATIONS_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ELEMENT_ANNOTATIONS_V1.htm"
abapFile: "ABENCDS_ELEMENT_ANNOTATIONS_V1.html"
keywords: ["select", "if", "case", "try", "class", "ABENCDS", "ELEMENT", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``\\ 
``... @<[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an [element](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) as element annotation. Element annotations can be specified before and after the element.

The elements of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) can be annotated with the element annotations listed in topic [`element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

In the CDS view `demo_corporation_sales_order`, a short text and a tooltip are assigned to the element `role`. The element `currency_code` is flagged as a currency key and is assigned as a currency key to the element `gross_amount`.

This example demonstrates [inheritance](ABENCDS_ANNOTATIONS_ANALYSIS.html) of the element annotations in [publications](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). The following CDS view defines and exposes a CDS association `_some_assoc`:

A further CDS view accesses the view and also exposes the CDS association. Here, the annotation `@SomeAnno` is inherited.

The following CDS view entity defines and exposes its own CDS association `_some_assoc`. In this case, the CDS annotation `@SomeAnno`\\ **is not** inherited.

If the CDS association `_some_assoc` were exposed from `Demo_Cds_Assoc_Anno2` instead of or in addition to `_some_assoc` by specifying the name `Demo_Cds_Assoc_Anno2._some_assoc` explicitly, the annotation would be inherited again. The class `CL_DEMO_CDS_ASSOC_ANNO` evaluates the annotations of both views. No local element annotations are defined for the locally defined association `_some_assoc` of the view `Demo_Cds_Assoc_Anno1_Loc`, which means that the result for this CDS association is empty.

-   In front of the element, the character `@` must be placed before the name `annotation` of the annotation.
-   Following the element, the characters `@<` must be placed before the name `annotation` of the annotation.

@AbapCatalog.sqlViewName: 'DEMO\_CORP\_SO\_VW'\\ndefine view demo\_corporation\_sales\_order as\\n select from snwd\_bpa as business\_partner\\n inner join snwd\_so as sales\_order\\n on business\_partner.node\_key = sales\_order.buyer\_guid\\n \\{ key sales\_order.so\_id as sales\_order\_id,\\n business\_partner.bp\_id as corporation\_id,\\n business\_partner.company\_name,\\n @EndUserText.label: 'Corporation Role'\\n @EndUserText.quickInfo: 'Customer or supplier'\\n business\_partner.bp\_role as role,\\n @Semantics.currencyCode\\n sales\_order.currency\_code,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n sales\_order.gross\_amount \\}\\n where business\_partner.legal\_form = 'Inc.'; //Corporations only\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN2'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view Demo\_Cds\_Assoc\_Anno2\\n as select from\\n demo\_join2\\n association \[\*\] to demo\_join3 as \_some\_assoc on\\n \_some\_assoc.l = demo\_join2.d\\n \\{\\n @SomeAnno: 'Association to demo\_join3'\\n \_some\_assoc,\\n d\\n \\}\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN1I'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view Demo\_Cds\_Assoc\_Anno1\_Inh\\n as select from\\n Demo\_Cds\_Assoc\_Anno2\\n \\{\\n \_some\_assoc,\\n d\\n \\}\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASAN1L'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view Demo\_Cds\_Assoc\_Anno1\_Loc\\n as select from\\n Demo\_Cds\_Assoc\_Anno2\\n association \[\*\] to demo\_join1 as \_some\_assoc on\\n Demo\_Cds\_Assoc\_Anno2.d = \_some\_assoc.d\\n \\{\\n \_some\_assoc,\\n d\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_list\_v1.html abencds\_select\_list\_entry\_v1.html