---
title: "ABENCDS_F1_CUSTOM_ELEMENT_ANNO"
description: |
  ABENCDS_F1_CUSTOM_ELEMENT_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_CUSTOM_ELEMENT_ANNO.htm"
abapFile: "ABENCDS_F1_CUSTOM_ELEMENT_ANNO.html"
keywords: ["if", "class", "ABENCDS", "CUSTOM", "ELEMENT", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an [element](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) or CDS association of an [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) as element annotation. The character `@` must be placed directly in front of the name `annotation` of the annotation. In a CDS custom entity, element annotations can only be specified in front of an element or a CDS association.

All element annotations described in topic [`CDS DDL - element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html) can be used to annotate elements and associations in a CDS custom entity.

The following DDL source code shows a CDS custom entity with element annotations:

The class `CL_DEMO_CDS_CUSTOM_ENTITY_ELEM` shows that the element annotations of the CDS custom entity can be [evaluated](ABENCDS_ANNOTATIONS_ANALYSIS.html) using the class `CL_DD_DDL_ANNOTATION_SERVICE`. The result set contains not only the direct element annotations, but also derived annotations which are defined for the simple type used for typing.

define custom entity demo\_cds\_custom\_entity\_elem \\n \\{\\n @EndUserText.label: 'Key field'\\n key col1 : abap.char(3);\\n @EndUserText.label: 'Integer field'\\n col2 : abap.int4;\\n @EndUserText.label: 'String field'\\n col3 : abap.string;\\n @EndUserText.label: 'Simple type field'\\n col4 : DEMO\_BT\_CHAR\_TEXT;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html abencds\_f1\_custom\_element\_list.html abencds\_f1\_custom\_element.html