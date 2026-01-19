---
title: "ABENCDS_F1_ABSENT_LIST_ANNOTATION"
description: |
  ABENCDS_F1_ABSENT_LIST_ANNOTATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_ABSENT_LIST_ANNOTATION.htm"
abapFile: "ABENCDS_F1_ABSENT_LIST_ANNOTATION.html"
keywords: ["if", "case", "class", "data", "ABENCDS", "ABSENT", "LIST", "ANNOTATION"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of an [element](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) or CDS association of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) as element annotation. The character `@` must be placed directly in front of the name `annotation` of the annotation. In a CDS abstract entity, element annotations can only be specified in front of an element or a CDS association and not specified after it using `@<`.

The elements and CDS associations of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) can be assigned to the element annotations grouped under [`element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html).

The following DDL source code shows a CDS abstract entity with element annotations:

The class `CL_DEMO_CDS_ABSTRACT_ENTITY_EL` shows that the element annotations of the CDS abstract entity can be evaluated using the class `CL_DD_DDL_ANNOTATION_SERVICE`. In this case, there are also derived annotations for the data element used for typing and annotations from a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html). The metadata extension is specified as an example for [`ANNOTATE ENTITY`](ABENCDS_F1_ANNOTATE_VIEW.html).

@Metadata.allowExtensions : true\\n\\ndefine abstract entity demo\_cds\_abstract\_entity\_elem\\n \\{\\n @EndUserText.label: 'Key field'\\n key col1 : abap.char(3);\\n @EndUserText.label: 'Integer field'\\n col2 : abap.int4;\\n @EndUserText.label: 'String field'\\n col3 : abap.string;\\n @EndUserText.label: 'Simple type field'\\n col4 : DEMO\_BT\_CHAR\_TEXT;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html abencds\_f1\_absent\_element\_list.html abencds\_f1\_absent\_list\_element.html