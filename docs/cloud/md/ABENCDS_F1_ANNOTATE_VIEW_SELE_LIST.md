---
title: "ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST"
description: |
  ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST.htm"
abapFile: "ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST.html"
keywords: ["select", "do", "if", "try", "data", "ABENCDS", "ANNOTATE", "VIEW", "SELE", "LIST"]
---

``... [`@element_annot1`](ABENCDS_F1_ELEMENT_ANNOTATION.html)\     [[`@element_annot2`](ABENCDS_F1_ELEMENT_ANNOTATION.html)\      ...]\      element1[;      [`@element_annot1`](ABENCDS_F1_ELEMENT_ANNOTATION.html)\     [[`@element_annot2`](ABENCDS_F1_ELEMENT_ANNOTATION.html)\      ...]\      element2;      ...;]``

Specifies annotations in a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html) introduced with [`ANNOTATE`](ABENCDS_F1_ANNOTATE_VIEW.html) for the following:

A semicolon-separated list `element1`; `element2`; ...; prefixed with annotations `element_annot` can be specified in the curly brackets of the statement `ANNOTATE`. There must be a semicolon after the last element of the list.

Each specified element `element` should appear in the `SELECT` list of the entity that is annotated using `ANNOTATE`. If not, the syntax check produces a warning. An externally visible element name must be used. For [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), this is either the direct name, an alternative element name defined with [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html), or the name defined in a [name list](ABENCDS_NAME_LIST_V1.html). For [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), this is either the direct name, or an alternative element name defined with [`AS`](ABENCDS_SELECT_LIST_ENTRY_V2.html).

All elements of the `SELECT` list can be used exactly once. Valid [SAP annotations](ABENCDS_ANNOTATIONS_SAP.html)\\ `@element_annot` can be specified before these as [element annotations](ABENCDS_F1_ELEMENT_ANNOTATION.html). It is not possible here to specify annotations after the name of an element `element` with the syntax `@<element_annot`.

At least one element annotation`@element_annot` must be specified before each element of the list. However, the curly brackets of the `ANNOTATE` statement can also be empty.

-   [Elements](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) in the [element list](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)
-   [Elements](ABENCDS_SELECT_LIST_ENTRY_V2.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)
-   [Elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the entity for its definition.
-   The program `ABAP_DOCU_MDE_ANNOS` shows all annotations that can be specified in metadata extensions.

abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_meta\_data\_extensions.html abencds\_f1\_ddlx\_syntax.html abencds\_f1\_annotate\_view.html