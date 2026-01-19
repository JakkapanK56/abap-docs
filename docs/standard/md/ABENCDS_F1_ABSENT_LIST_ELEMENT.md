---
title: "ABENCDS_F1_ABSENT_LIST_ELEMENT"
description: |
  ABENCDS_F1_ABSENT_LIST_ELEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_ABSENT_LIST_ELEMENT.htm"
abapFile: "ABENCDS_F1_ABSENT_LIST_ELEMENT.html"
keywords: ["if", "case", "method", "class", "data", "types", "ABENCDS", "ABSENT", "LIST", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      [[`@element_annot2`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      ...      \{\ [KEY] name       : [`typing`](ABENCDS_TYPING.html)\ \}\    |\ \{       _assoc     : [`association`](ABENCDS_F1_ABSENT_ASSOCIATION.html)\ \}\    |\ \{       _compos    : [`composition`](ABENCDS_ABSENT_COMPOSITION.html)\ \}\    |\ \{       _to_parent : [`to_parent_assoc`](ABENCDS_ABSENT_TO_PARENT_ASSOC.html)\ \} ...``

[1. `... @element_annot`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

Specifies an element `name` or defines a CDS association `_assoc`, a CDS to-child association `_compos`, or a CDS-to-parent association `_to_parent` in the [list of elements](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) of a [CDS abstract entity](ABENABSTRACT_GLOSRY.html). `name` or `_assoc` or `_compos` and `_to_parent` must be used to specify a unique name that complies with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html). Here, the name of a CDS association, a CDS to-child association, or a CDS-to-parent association can start with an underscore `_`, as recommended. The names of the elements and CDS associations, CDS to-child associations, and CDS-to-parent associations are in the same namespace as the parameters of the abstract entity. Furthermore, `name` cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table `TRESE`.

No component with the name `_assoc`, `_compos`, and `_to_parent` is created in the associated structured data type.

Element names are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

The following DDL source code shows a CDS abstract entity:

The class `CL_DEMO_CDS_ABSTRACT_ENTITY` demonstrates the following:

Specifies annotations for the element. The annotations can be specified in front of every element and every CDS association, CDS to-child association, and CDS-to-parent association using [`@element_annot`](ABENCDS_F1_ABSENT_LIST_ANNOTATION.html).

Element annotations can be used to annotate the elements and CDS associations, CDS to-child associations, plus CDS-to-parent associations of a CDS abstract entity with semantic properties.

`KEY` is used to define the current element as a key element of the current [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). Those elements of the [element list](ABENCDS_F1_RETURN_LIST.html) can be defined as key elements that are placed without gaps at the start of the list.

The key elements of a CDS abstract entity can be used to create an abstract data model.

-   An element `name` defines an element. Elements must be typed with an elementary data type [`typing`](ABENCDS_TYPING.html). All possible data types and the rules for typing are described in the topic about [`typing`](ABENCDS_TYPING.html) in CDS. The typing determines the data type of the corresponding component of the structured data type represented by the CDS abstract entity.
-   The addition [`association`](ABENCDS_F1_ABSENT_ASSOCIATION.html) is used to expose a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) of the name `_assoc`.
-   The addition [`composition`](ABENCDS_ABSENT_COMPOSITION.html) is used to expose a CDS to-child association with the name `_compos`.
-   The addition [`to_parent_assoc`](ABENCDS_ABSENT_TO_PARENT_ASSOC.html) is used to expose a CDS-to-parent association with the name `_to_parent`.
-   The element list must contain at least one element `name`. It is not allowed to specify only an association, to-child association, or to-parent association in the element list.

-   The structure of the CDS abstract entity can be evaluated using [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) methods.
-   The annotations of the CDS abstract entity can be [evaluated](ABENCDS_ANNOTATIONS_ANALYSIS.html) using the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   The structure of the CDS abstract entity can be used as a data type in the ABAP program.

@EndUserText.label: 'Abstract CDS Entity'\\n@Metadata.allowExtensions: false\\ndefine abstract entity demo\_cds\_abstract\_entity\\n \\{\\n key col1 : abap.char(3);\\n col2 : abap.int4;\\n col3 : abap.string;\\n col4 : DEMO\_BT\_CHAR\_TEXT;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html abencds\_f1\_absent\_element\_list.html