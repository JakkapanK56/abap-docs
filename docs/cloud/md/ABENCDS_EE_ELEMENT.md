---
title: "ABENCDS_EE_ELEMENT"
description: |
  ABENCDS_EE_ELEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_EE_ELEMENT.htm"
abapFile: "ABENCDS_EE_ELEMENT.html"
keywords: ["do", "if", "case", "data", "types", "ABENCDS", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      [[`@element_annot2`](ABENCDS_F1_RETURN_LIST_ANNOTATION.html)]\      ...      \{\ [KEY] name1 : [`typing`](ABENCDS_TYPING.html)\ [EXTERNAL NAME ext_name1]; \}\          [\ \{ name2 : [`typing`](ABENCDS_TYPING.html)\ [EXTERNAL NAME ext_name2]; \}\ ]\          [...]``

[1. `... @element_annot`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

Specifies elements `name1`, `name2`, ... of a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html). These elements specify the names of the components of the CDS entity. At least one element must be defined as a key element using the keyword `KEY`. The elements must be assigned a data type that is compatible with the data type of the corresponding element of the remote source. Typing can be done using a [CDS built-in type](ABENCDS_BUILT_IN_TYPE_GLOSRY.html), a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html), or a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html).

The following rules apply:

Specifies annotations for an element. The annotations can be specified in front of every element using [`@element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html). Element annotations can be used to annotate the elements of a CDS external entity with semantic properties.

`KEY` is used to define the current element as a key element of the current CDS external entity. Those elements of the [element list](ABENCDS_EE_ELEM_LIST.html) can be defined as key elements that are placed at the beginning of the list without gaps. At least the first element **must** be a key element. The primary key of an external entity does not have to match the primary key of the remote data source.

**Caution** The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

-   The element names `name1`, `name2`, ... can be used when accessing the external entity in ABAP. They must be unique and conform to the naming rules for CDS objects described in the topic about [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html).
-   The element names of the external entity must exactly match the element names of the remote data source. To do this, it is possible to specify an external name `ext_name1`, `ext_name2`, ... using the syntax `EXTERNAL NAME`. These names are case-sensitive and they do not need to conform to the naming rules for CDS objects. They can be escaped using double quotes. This might be useful, for example, if the name contains characters not supported by ABAP.
-   The data types of the elements must be compatible with the data types of the elements of the remote database object.
-   **Note** If an element of the remote database object has a boolean data type, the external entity can consume this as `abap.char(1)` with *X* and *' '* as resulting values.
-   **Note** If an element of the remote database object has the data type `decimal` with length > 31 or scale > 14, external entities allow the type adoption `abap.d34n`.
-   Each field of the external entity must have a corresponding field in the remote database object. However, not all the fields of the remote database object must be used in the external entity. It is also possible to define only a subset of the fields of the remote database object. The order of the fields is not relevant. Mapping is done implicitly according to the element names.
-   An element `name1`, `name2`, ... can optionally be defined as key element using the keyword `KEY`.
-   Each element must be typed with an elementary data type [`typing`](ABENCDS_TYPING.html). The rules for typing are described in the topic [CDS DDL - `typing`](ABENCDS_TYPING.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_external\_entity.html abencds\_define\_external\_entity.html abencds\_ee\_elem\_list.html