---
title: "ABENCDS_V2_VIEWS"
description: |
  ABENCDS_V2_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_V2_VIEWS.htm"
abapFile: "ABENCDS_V2_VIEWS.html"
keywords: ["select", "do", "try", "class", "data", "types", "ABENCDS", "VIEWS"]
---

A [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) is a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) defined using the statement [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of ABAP Core Data Services (CDS). A CDS view entity can be used to select fields from one or more data sources (database tables or other CDS entities). Additional semantic properties can be added by using annotations. CDS view entities are the successor of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). They have the same structure and serve the same purpose as [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). Generally spoken, they represent an improved version of *classic*\\ [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

When a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) is activated, a repository object is created. This repository object can be accessed using the name of the CDS view entity. As a global data type, each CDS view entity represents a structured type with the [elements of the CDS view entity](ABENCDS_SELECT_LIST_ENTRY_V2.html) as components and can be used like any [CDS entity](ABENCDS_ENTITY_GLOSRY.html):

The name of the CDS entity is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

A CDS view entity is a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).

The following sections describe client handling and table buffering for CDS view entities. Afterwards, the statement [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html) and all possible additions are described.

The programming of [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

For more information about CDS view entities, see [*CDS View Entities*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/8b3e8e8b8797432abecd7d1fbb6d5c12?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html).

-   [Client handling](ABENCDS_V2_VIEW_CLIENT_HANDLING.html)
-   [Table buffering](ABENCDS_V2_VIEW_BUFFERING.html)
-   [Creation of a CDS view entity](ABENCDS_DEFINE_VIEW_ENTITY.html)

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html