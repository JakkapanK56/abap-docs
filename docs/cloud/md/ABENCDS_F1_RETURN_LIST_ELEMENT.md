---
title: "ABENCDS_F1_RETURN_LIST_ELEMENT"
description: |
  ABENCDS_F1_RETURN_LIST_ELEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_RETURN_LIST_ELEMENT.htm"
abapFile: "ABENCDS_F1_RETURN_LIST_ELEMENT.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABENCDS", "RETURN", "LIST", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      [[`@element_annot2`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      ...        [KEY] name : [`typing`](ABENCDS_TYPING.html)\      [[`@<element_annot1`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      [[`@<element_annot2`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)] ...``

[1. `... @element_annot ... @<element_annot`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

Specifies an element in the [list of elements](ABENCDS_F1_RETURN_LIST.html) of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html). `name` expects a unique element name that complies with the [naming rules](ABENCDS_GENERAL_SYNTAX_RULES.html). The names of the elements are in the same namespace as the [parameters](ABENCDS_F1_FUNC_PARAMETER_LIST.html) of the table function. Furthermore, `name` cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table `TRESE`.

Each element must be typed with an elementary data type [`typing`](ABENCDS_TYPING.html). This typing determines the data type of the corresponding component of the structured data type represented by the CDS table function and the associated column of the tabular return value `result` of the associated AMDP function implementation.

It is not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

Specifies annotations for the element. The annotations can be specified before the element using [`@element_annot`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html) or after the element using [`@<element_annot`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html).

An [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html) can be used to assign further technical and semantic properties to an element for evaluation by the ABAP runtime framework. [Framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be used to give the element specific semantic properties for other SAP frameworks.

`KEY` is used to define the current element as a key element of the current [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html). Elements of the [element list](ABENCDS_F1_RETURN_LIST.html) can be defined as key elements, which are coherently grouped at the beginning of the list, whereby the client field of a [client-dependent](ABENCDS_FUNC_CLIENT_HANDLING.html) CDS table function is ignored. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [`SELECT`](ABAPSELECT.html) statement in ABAP SQL:

Apart of that, the key elements of the CDS entity are used to document the semantics of the data model. The addition `KEY` is then ignored when the CDS table function is activated and when other accesses are performed in program executions.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

-   By the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html).
-   In implicit [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.

-   In the ABAP SQL syntax check, the key elements are used in places where the key is respected.
-   The key elements are not relevant for the uniqueness of rows within the result set of the CDS table function, which means that exceptions can be raised when making assignments to internal tables with appropriately unique table keys.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_f1\_define\_table\_function.html abencds\_f1\_return\_list.html