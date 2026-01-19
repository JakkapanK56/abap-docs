---
title: "ABENCDS_ASPECT_ELEMENT"
description: |
  ABENCDS_ASPECT_ELEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ASPECT_ELEMENT.htm"
abapFile: "ABENCDS_ASPECT_ELEMENT.html"
keywords: ["select", "if", "case", "try", "data", "types", "ABENCDS", "ASPECT", "ELEMENT"]
---

``... \{  [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_ASPECT.html)]\         [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_ASPECT.html)]\         ...         \{\ [KEY] element1 : [`element1_type`](ABENCDS_TYPING.html); \}\       |\ \{       element2 : [`arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html);    \}\       |\ \{       element4 : [`case_expr`](ABENCDS_CASE_EXPRESSION_V2.html);     \}\       |\ \{       element5 : [`builtin_func`](ABENCDS_BUILTIN_FUNCTIONS_V2.html);  \}\                 ...      \} ...``

Defines an element of a [`element list`](ABENCDS_DDL_ASPECT_ELEMENT_LIST.html) of a CDS DDL aspect. The names of the elements in an `element` list must be unique and they are in the same namespace as the [parameters](ABENCDS_PARAMETER_LIST_V2.html) and [element list](ABENCDS_SELECT_LIST_ENTRY_V2.html) of the view that the CDS DDL aspect is to be included in.

The types available in CDS aspects are listed in [ABAP CDS - Built-In Data Types](ABENCDS_OVERVIEW_BUILTIN_TYPES.html).

[1. `... @element_annot ...`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

Specifies annotations for the element. The annotations must be specified before the element using `@element_annot`. All possible element annotations are listed in topic [element annotations](ABENCDS_ELEMENT_ANNOTATIONS_V2.html).

An annotation can be used to assign further technical and semantic properties to an element for evaluation by the ABAP runtime framework. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to give the element specific semantic properties that are evaluated by other SAP frameworks.

The keyword `KEY` is used to define the current element as a key element of the current CDS aspect. All key elements must be placed without gaps at the start of the `element` list.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_aspects.html abencds\_define\_aspect.html abencds\_ddl\_aspect\_element\_list.html