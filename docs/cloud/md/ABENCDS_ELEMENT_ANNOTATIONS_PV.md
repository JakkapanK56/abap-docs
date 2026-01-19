---
title: "ABENCDS_ELEMENT_ANNOTATIONS_PV"
description: |
  ABENCDS_ELEMENT_ANNOTATIONS_PV - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ELEMENT_ANNOTATIONS_PV.htm"
abapFile: "ABENCDS_ELEMENT_ANNOTATIONS_PV.html"
keywords: ["if", "case", "data", "ABENCDS", "ELEMENT", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an element of a projection list in a CDS projection view as element annotation. Element annotations must be specified before the element they belong to, and the character `@` must be placed in front of the name `annotation` of the annotation.

For CDS projection views, there are strict checks that all element annotations used must be defined as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs.

All available element annotations are listed in topic [`element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

The CDS projection view `DEMO_SALES_PV_SO_I_LIST` is a projection of the CDS view `DEMO_SALES_CDS_SO_I`. Even though the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) uses a semantics annotation to connect the gross amount to the currency and the quantity field to the respective unit, the projection view repeats these annotations. This is required because of the alias name of the currency and unit fields.

-   Projected elements and exposed associations from the projected entity inherit the element annotations from the projected entity. Any annotations defined in the projected CDS entity `cds_entity` at element level are passed to the CDS projection view `projection_view`. This means that the CDS projection view has the same annotation values as the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Only if an annotation is defined explicitly for the same element in the CDS projection view, the values are overwritten and only the new values are valid for the element in question. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to give the element specific semantic properties for other SAP frameworks.
-   **Caution** If you use an annotation with an element reference `ElementRef` in the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) and the reference element is aliased in the projection entity, the reference is not drawn to the element in the projection view, due to the name change. In such a case, you have to redefine the annotation in the projection view and use the alias name of the element in the annotation value.
-   **Exception:** In an analytical projection view, the annotation `Aggregation.default` that defines an analytical measure is inherited from the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) and it cannot be overwritten.
-   If a field is not directly projected but used in an expression or built-in function, element annotations are not inherited.
-   **Exception:** If a field is used in the [`CAST PRESERVING TYPE`](ABENCDS_CAST_EXPRESSION_V2.html) expression, element annotations are inherited.
-   Inheritance of element annotations can be switched off by using the header annotation [`@Metadata.ignorePropagatedAnnotations`](ABENCDS_PROJ_VIEW_ANNOTATIONS.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html