---
title: "The following CDS abstract entity extension"
description: |
  adds a new element and a new association to the existing CDS abstract entity. The class `CL_DEMO_CDS_ABSTRACT_EXTEND` evaluates the structure of the extended CDS abstract entity using RTTI(ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) methods. -   New elements. These new elements are defined as describ
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_EXTEND_ABSTRACT_ENTITY.htm"
abapFile: "ABENCDS_EXTEND_ABSTRACT_ENTITY.html"
keywords: ["delete", "if", "method", "class", "ABENCDS", "EXTEND", "ABSTRACT", "ENTITY"]
---

`\  EXTEND ABSTRACT ENTITY cds_abstract_entity         WITH              \{ element_list_extension \}`

Extends an existing [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html)\\ `cds_abstract_entity` using a [CDS abstract entity extension](ABENCDS_ABS_ENTITY_EXTEND_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). An existing CDS abstract entity can have one or more CDS abstract entity extensions.

As a prerequisite for the extension of the CDS abstract entity with the statement `EXTEND ABSTRACT ENTITY`, the base entity must allow extensions. Extensions are allowed per default or can be explicitly allowed with the annotation [`AbapCatalog.extensibility.extensible`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) with the value `true`. If the value `false` is specified, extensions are not allowed.

Abstract entity extensions can make additions to the original entity, but they cannot modify, overwrite, or delete elements from the original entity. An abstract entity extension can specify only features that are possible within abstract entities, but with some limitations. The following can be specified in an abstract entity extension:

The following CDS abstract entity extension

adds a new element and a new association to the existing CDS abstract entity.

The class `CL_DEMO_CDS_ABSTRACT_EXTEND` evaluates the structure of the extended CDS abstract entity using [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) methods.

-   New elements. These new elements are defined as described in topic [`DEFINE ABSTRACT ENTITY`, element](ABENCDS_F1_ABSENT_LIST_ELEMENT.html). Those elements can have [element annotations](ABENCDS_F1_ABSENT_LIST_ANNOTATION.html). New key elements are not possible.
-   New associations `_assoc1`, `_assoc2` can be defined in the CDS abstract entity extension. The same rules apply that are described in topic [`DEFINE ABSTRACT ENTITY`, association](ABENCDS_F1_ABSENT_ASSOCIATION.html).
-   **Note** It is **not** allowed to define new [CDS to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in an abstract entity extension. New [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) are allowed under the condition that the composition target is also defined as composition child and has the required to-parent association. The composition target is the extended abstract entity, not the extension itself.
-   Each appended element must have a unique name.

-   CDS abstract entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](ABENCDS_F1_ENTITY_PARAMETER_LIST.html) in an abstract entity extension.
-   No addition `ROOT` can be specified in the statement `EXTEND ABSTRACT ENTITY` to transform a regular entity to a [root entity](ABENROOT_ENTITY_GLOSRY.html).
-   An appended element cannot be defined as a `KEY` element.
-   In an abstract entity extension, [header annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) are not supported. That means that no annotations are allowed in front of the statement `EXTEND ABSTRACT ENTITY`.

extend abstract entity DEMO\_CDS\_ORIGINAL\_ABSTRACT with\\n\\{\\n col4 : abap.char( 1 );\\n \_assoc : association to demo\_cds\_abstract\_entity \\n on $projection.col1 = \_assoc.col1;\\n\\}\\n @EndUserText.label: 'CDS abstract entity with extension'\\n@AbapCatalog.extensibility.extensible: true\\n\\ndefine abstract entity DEMO\_CDS\_ORIGINAL\_ABSTRACT\\n with parameters\\n param1 : abap.int4\\n\\{\\n col1 : abap.char( 5 );\\n col2 : abap.int4;\\n col3 : abap.int4;\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_extension.html