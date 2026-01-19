---
title: "ABENCDS_ABSTRACT_ENTITIES"
description: |
  ABENCDS_ABSTRACT_ENTITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ABSTRACT_ENTITIES.htm"
abapFile: "ABENCDS_ABSTRACT_ENTITIES.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABENCDS", "ABSTRACT", "ENTITIES"]
---

A CDS abstract entity is defined in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) using the statement [`DEFINE ABSTRACT ENTITY`](ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP Core Data Services (CDS)](ABENCDS.html).

A CDS abstract entity represents all type properties of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html):

An instance of a CDS abstract entity is not created as a database object and client handling is not defined. Abstract entities are [client-safe](ABENCLIENT_SAFE_GLOSRY.html) by default. Abstract entities are [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html).

A CDS abstract entity can be used as follows:

CDS abstract entities can be employed in the following cases:

For more information about CDS abstract entities, see [CDS Abstract Entities](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/c62faa730f5646b08e19cfb335de0f8a?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   Metadata defined using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html)
-   A structured type defined using an element list
-   Optionally a parameter interface defined using input parameters
-   Any [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) or [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) exposed in the [element list](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html)

-   ABAP CDS

-   A CDS abstract entity can be specified as the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html). A CDS association, to-child association, or CDS to-parent association of this type can be [exposed](ABENCDS_F1_ABSENT_LIST_ELEMENT.html) only and cannot be created as an instance of a join expression.
-   A CDS abstract entity cannot be used as a data source of `SELECT` statements or used by SQL path expressions in other CDS entities, such as [CDS view entities](ABENCDS_V2_VIEWS.html) or [DDIC-based CDS views](ABENCDS_V1_VIEWS.html).

-   ABAP Programs

-   The structured type of the CDS abstract entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition `TYPE`.
-   A CDS abstract entity cannot be used as a data source of [`SELECT`](ABAPSELECT.html) statements or used by [path expressions](ABENABAP_SQL_PATH.html) in ABAP SQL.
-   The statement [`ANNOTATE ENTITY`](ABENCDS_F1_ANNOTATE_VIEW.html) can be used to add [CDS metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) to the [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of a CDS abstract entity.

-   Frameworks

-   The [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of a CDS abstract entity can be evaluated using the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   The parameters and the CDS associations of CDS abstract entities can be evaluated by frameworks such as the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html).

-   They can be used as data types whose type properties go beyond the regular [DDIC structures](ABENDDIC_STRUCTURES.html) in the ABAP Dictionary. Examples of this use case can be found in [ABAP RAP](ABENABAP_RAP_GLOSRY.html).
-   They can be used as prototype definitions of data models without being created as instances of data objects.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html