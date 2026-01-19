---
title: "ABENCDS_TABLE_ENTITY_ELEMENT"
description: |
  ABENCDS_TABLE_ENTITY_ELEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TABLE_ENTITY_ELEMENT.htm"
abapFile: "ABENCDS_TABLE_ENTITY_ELEMENT.html"
keywords: ["select", "insert", "delete", "do", "if", "class", "data", "types", "ABENCDS", "TABLE", "ENTITY", "ELEMENT"]
---

``... [[`@element_annot1`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      [[`@element_annot2`](ABENCDS_ELEMENT_ANNOTATIONS_V2.html)]\      ...      \{\ [KEY] name      : [`typing`](ABENCDS_TYPING.html)\ [NULL]; \}\    |\ \{      _assoc     : [`association`](ABENCDS_TABLE_ENTITY_ASSOC.html); \}\    |\ \{      _compos    : [`composition`](ABENCDS_TABLE_ENTITY_COMPOS.html); \}\    |\ \{      _to_parent : [`association to parent`](ABENCDS_TABLE_ENTITY_TO_PARENT.html); \}``

[1. `... @element_annot ...`](#ABAP_ADDITION_1@3@)

[2. `... KEY`](#ABAP_ADDITION_2@3@)

[3. `... NULL`](#ABAP_ADDITION_3@3@)

Defines an element of a [`element list`](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html). The following elements are possible:

No component with the name `_assoc`, `_compos`, and `_to_parent` is created in the associated structured data type.

The following source code shows the different options for typing for a CDS table entity:

Specifies annotations for the element. The annotations must be specified before the element using `@element_annot`. All possible element annotations are listed in topic [element annotations](ABENCDS_F1_ELEMENT_ANNOTATION.html).

The keyword `KEY` is used to define the current element as a [key field](ABENKEY_FIELD_GLOSRY.html) of the current CDS table entity. All key elements must be placed without gaps at the start of the `element` list. The fields flagged as key fields become the [primary key](ABENPRIMARY_KEY_GLOSRY.html) of the table entity. If a table entity is defined as client-dependent, the client field is implicitly added to the primary key as its first field.

A table entity without any to-child or to-parent association can be defined without any key fields. A table entity without a primary key has limitations during write access using ABAP SQL.

If the table entity defines any to-child or to-parent association, then it must contain at least one key field at the start of the element list.

The CDS table entity `DEMO_CDS_TE_NOKEY` does not define a primary key.

Therefore, multiple identical data records can be inserted using ABAP SQL `INSERT`.

Defines that a column may contain [null values](ABENNULL_VALUE_GLOSRY.html). A null value on the database is an undefined value.

Per default, the fields of a table entity are created as `NOT NULL` on the database. For example, `field : abap.int4` is created on the SAP HANA database as

"FIELD" INTEGER DEFAULT 0 NOT NULL

For fields that are not nullable, the type-specific default value is inserted implicitly.

Fields with the data type `abap.string` and `abap.rawstring` must be defined as `NULL`, as they do not have any default value on the SAP HANA database.

Key fields defined using the keyword `KEY` cannot be defined as `NULL`.

-   [`@element_annot1`](ABENCDS_F1_ELEMENT_ANNOTATION.html), [`@element_annot2`](ABENCDS_F1_ELEMENT_ANNOTATION.html), ... define annotations for an element or an association of a table entity. All element annotations described in the topic [CDS DDL - `element_annot`](ABENCDS_F1_ELEMENT_ANNOTATION.html) can be used.
-   `name`: Defines a single field in the element list of a table entity. A field can optionally be defined as key element using the keyword `KEY` and it must be typed with an elementary data type or an enumerated type as described in the topic [`typing`](ABENCDS_TYPING.html). The optional addition `NULL` is available to define that a column may contain null values.
-   **Caution** Note that the addition `NULL` is not available for key fields.
-   The addition [`association`](ABENCDS_TABLE_ENTITY_ASSOC.html) is used to define and expose a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) of the name `_assoc`.
-   The addition [`composition`](ABENCDS_TABLE_ENTITY_COMPOS.html) is used to define and expose a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) with the name `_compos`.
-   The addition [`association to parent`](ABENCDS_TABLE_ENTITY_TO_PARENT.html) is used to define and expose a [to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) with the name `_to_parent`.

-   The fields `KEY_ELEMENT` and `COL1` are typed using [CDS built-in types](ABENCDS_BUILT_IN_TYPE_GLOSRY.html).
-   The field `COL2` is typed using a [CDS simple type](ABENCDS_SIMPLE_TYPE_GLOSRY.html).
-   The field `COL3` is typed using a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html).
-   The field `COL4` is typed using a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html).

@ClientHandling.type: #CLIENT\_INDEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS table entity, client independent'\\ndefine table entity DEMO\_CDS\_TE\_CLIENT\_IND\\n\\{\\n key key\_element : abap.char(1);\\n\\n @EndUserText.label: 'This field is nullable'\\n col1 : abap.char(3) null;\\n \\n @EndUserText.label: 'This field uses a CDS simple type'\\n col2 : demo\_simple\_type;\\n\\n @EndUserText.label: 'This field uses a data element'\\n col3 : demo\_bt\_inheritance;\\n\\n @EndUserText.label: 'This field uses a CDS enum type'\\n col4 : DEMO\_CDS\_ENUM\_WEEKDAY;\\n\\n \_assoc : association of many to many DEMO\_CDS\_TE\_ASSOC \\n on $projection.key\_element = \_assoc.col3;\\n\\n\\}\\n @ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS table entity without key fields'\\ndefine table entity DEMO\_CDS\_TE\_NOKEY\\n\\{\\n col1 : abap.int4;\\n col2 : abap.char(2);\\n col3 : abap.int4;\\n\\n\\}\\n DELETE FROM demo\_cds\_te\_nokey. \\nINSERT demo\_cds\_te\_nokey FROM TABLE @( VALUE #( \\n ( col1 = 1 col2 = 'A' col3 = 1 ) \\n ( col1 = 1 col2 = 'A' col3 = 1 ) \\n ( col1 = 1 col2 = 'A' col3 = 1 ) ) ). \\n\\ \\nSELECT \* FROM demo\_cds\_te\_nokey INTO TABLE @FINAL(result). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html abencds\_define\_table\_entity.html abencds\_table\_entity\_element\_list.html