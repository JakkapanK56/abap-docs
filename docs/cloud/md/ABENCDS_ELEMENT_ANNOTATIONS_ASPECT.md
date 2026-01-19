---
title: "ABENCDS_ELEMENT_ANNOTATIONS_ASPECT"
description: |
  ABENCDS_ELEMENT_ANNOTATIONS_ASPECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ELEMENT_ANNOTATIONS_ASPECT.htm"
abapFile: "ABENCDS_ELEMENT_ANNOTATIONS_ASPECT.html"
keywords: ["if", "ABENCDS", "ELEMENT", "ANNOTATIONS", "ASPECT"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an [element](ABENCDS_ASPECT_ELEMENT.html) of a [element list](ABENCDS_DDL_ASPECT_ELEMENT_LIST.html) in a CDS DDL aspect as element annotation. Element annotations must be specified before the element they belong to, and the character `@` must be placed in front of the name `annotation` of the annotation.

For CDS DDL aspects, there are strict checks that all element annotations used must be defined as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs.

All available element annotations are listed in topic [`element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_aspects.html abencds\_define\_aspect.html abencds\_ddl\_aspect\_element\_list.html abencds\_aspect\_element.html