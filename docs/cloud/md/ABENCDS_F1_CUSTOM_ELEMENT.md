---
title: "ABENCDS_F1_CUSTOM_ELEMENT"
description: |
  ABENCDS_F1_CUSTOM_ELEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_CUSTOM_ELEMENT.htm"
abapFile: "ABENCDS_F1_CUSTOM_ELEMENT.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "CUSTOM", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      [[`@element_annot2`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      ...      \{\ [KEY] name      : [`typing`](ABENCDS_TYPING.html)\ \}\    |\ \{      _assoc     : [`association`](ABENCDS_F1_CUSTOM_ASSOCIATION.html)\ \}\    |\ \{      _compos    : [`composition`](ABENCDS_F1_CUSTOM_COMPOSITION.html)\ \}\    |\ \{      _to_parent : [`to_parent_assoc`](ABENCDS_F1_CUSTOM_TP_ASSOCIATION.html)\ \} ...``

[1. `... @element_annot`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

Specifies an element `name` or exposes a CDS association `_assoc`, a to-child association `_compos`, or a CDS-to-parent association `_to_parent` in the [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) of a CDS custom entity. At least one element must be defined as a key element.

The element names `name`, `_assoc`, `_compos`, and `_to_parent` must specify a unique name that complies with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html). It is recommended that the name of a CDS association, a CDS to-child association, or a CDS-to-parent association starts with an underscore `_`. The names of the elements are in the same namespace as the parameters of the custom entity. Furthermore, `name` cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table `TRESE`.

Specifies annotations for an element. The annotations can be specified in front of every element using [`@element_annot`](ABENCDS_F1_ABSENT_LIST_ANNOTATION.html). Element annotations can be used to annotate the elements and CDS associations, CDS to-child associations, and CDS to-parent associations of a CDS custom entity with semantic properties.

`KEY` is used to define the current element as a key element of the current CDS custom entity. Those elements of the [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) can be defined as key elements that are placed without gaps at the start of the list. At least the first element **must** be a key element.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

-   An element `name` can optionally be defined as key element using the keyword `KEY` and it must be typed with an elementary data type [`typing`](ABENCDS_TYPING.html). The typing determines the data type of the corresponding component of the structured data type represented by the CDS custom entity.
-   The addition [`association`](ABENCDS_F1_CUSTOM_ASSOCIATION.html) is used to expose a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) of the name `_assoc`.
-   The addition [`composition`](ABENCDS_F1_CUSTOM_COMPOSITION.html) is used to expose a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) with the name `_compos`.
-   The addition [`to_parent_assoc`](ABENCDS_F1_CUSTOM_TP_ASSOCIATION.html) is used to expose a [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) with the name `_to_parent`. No component with the name `_assoc`, `_compos`, and `_to_parent` is created in the associated structured data type. Element names are not case-sensitive. The blanks in the semicolon-separated list are ignored and can be omitted.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html abencds\_f1\_custom\_element\_list.html