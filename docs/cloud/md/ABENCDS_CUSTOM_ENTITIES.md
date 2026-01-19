---
title: "ABENCDS_CUSTOM_ENTITIES"
description: |
  ABENCDS_CUSTOM_ENTITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CUSTOM_ENTITIES.htm"
abapFile: "ABENCDS_CUSTOM_ENTITIES.html"
keywords: ["select", "do", "while", "if", "case", "method", "class", "data", "types", "ABENCDS", "CUSTOM", "ENTITIES"]
---

A [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) is defined in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) using the statement [`DEFINE CUSTOM ENTITY`](ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP Core Data Services (CDS)](ABENCDS.html). The name of the CDS custom entity must match the name of the DDL source code.

Purpose and use cases:

CDS custom entities allow developers to implement their own data provision using ABAP. Data retrieval is implemented via an ABAP class and performed at runtime. On CDS level, only an interface is defined, while the implementation of the logic is encapsulated in the application server artifact. Custom entities are used if data access cannot be done via means of [SQL](ABENSQL_GLOSRY.html) and the available CDS feature set and other CDS entity types. For example, custom entities can be used when

Data retrieval is also possible using an http client.

In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), custom entities are used as a data model basis for [RAP unmanaged queries](ABENRAP_UNMANGED_QUERY_GLOSRY.html).

A CDS custom entity represents all type properties of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html):

A CDS custom entity is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html).

A CDS custom entity can be used as follows:

An instance of a CDS custom entity is not created as a database object and [client handling](ABENCLIENT_HANDLING_GLOSRY.html) is not defined. Custom entities are [client-safe](ABENCLIENT_SAFE_GLOSRY.html) by default.

-   data is stored in non-relational storage, for example in a [BLOB](ABENBLOB_GLOSRY.html).
-   data is stored in SAP liveCache and access is done via ABAP APIs.
-   data cannot be computed by means of CDS due to additional application-server-side logic.
-   a data model can be defined via CDS views, but the [DCL](ABENDCL_GLOSRY.html) feature set is not sufficient to define the necessary authorizations.

-   Metadata defined using [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html)
-   A structured type defined using an [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html)
-   Optionally, a parameter interface defined using [input parameters](ABENCDS_F1_CUSTOM_PARAMETER_LIST.html)
-   Any [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html), [CDS to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or [CDS to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) exposed in the element list.

-   ABAP CDS

-   A CDS custom entity can be specified as the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html), [CDS to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), or [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html). A CDS association, CDS to-child association, or CDS to-parent association of this type can be [exposed](ABENCDS_F1_CUSTOM_ELEMENT.html) only and cannot be created as an instance of a join expression. Such associations can only be followed in Fiori OData scenarios where the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html) (not SQL) is used to execute the query.
-   Since no SQL artifact is generated for CDS custom entities and the query is implemented in ABAP, a CDS custom entity cannot be used as a data source of `SELECT` statements or used by SQL path expressions in other [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

-   ABAP Programs

-   The structured type of the CDS custom entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition `TYPE`.
-   A CDS custom entity cannot be used as a data source of [`SELECT`](ABAPSELECT.html) statements or used by [path expressions](ABENABAP_SQL_PATH.html) in ABAP SQL.

-   Frameworks

-   In the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html), custom entities are used as a data model basis for [RAP unmanaged queries](ABENRAP_UNMANGED_QUERY_GLOSRY.html). The ABAP query is in this case executed by a framework such as the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html).
-   The [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of a CDS custom entity can be evaluated using the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   The parameters and the CDS associations of CDS custom entities can be evaluated by frameworks such as the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html).

-   Custom entities can be nodes in RAP business objects, for example root, parent and/or child nodes using `ROOT` and composition relationships.

-   Development guide for the ABAP RESTful Application Programming model, section [Query](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/511a134f89614e77a2231d0af5b924f8?version=sap_cross_product_abap).
-   ABAP Data Models guide, section about [CDS custom entities](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/0d1e361dedc04116ba335470f3adf408?version=sap_cross_product_abap).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html