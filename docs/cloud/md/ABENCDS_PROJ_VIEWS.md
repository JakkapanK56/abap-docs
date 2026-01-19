---
title: "ABENCDS_PROJ_VIEWS"
description: |
  ABENCDS_PROJ_VIEWS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PROJ_VIEWS.htm"
abapFile: "ABENCDS_PROJ_VIEWS.html"
keywords: ["do", "if", "case", "data", "types", "ABENCDS", "PROJ", "VIEWS"]
---

A [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) is defined in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) using the statement `DEFINE [TRANSIENT] VIEW ENTITY AS PROJECTION ON` in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP Core Data Services (CDS)](ABENCDS.html).

A CDS projection view is based on another [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) (called [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html)). CDS projection views adapt a CDS data model for service-specific use cases.

The name of a CDS projection view is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

[Client handling](ABENCLIENT_HANDLING_GLOSRY.html) is done implicitly and automatically for CDS projection views. The rules are the same as for CDS view entities, see section [ABAP CDS - Client Handling in CDS View Entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html). A projection view is [client-safe](ABENCLIENT_SAFE_GLOSRY.html) when the underlying [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) is client-safe and as long as no client-critical functions are used.

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) for CDS projection views works in the same way as for CDS view entities. Table buffering settings can be defined in a separate repository object called [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html). [CDS view entity buffers](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) and [CDS propagated buffers](ABENCDS_PROP_BUFFER_GLOSRY.html) can be defined for a CDS projection view. For details, see the following topics:

There are different types of projection views available, depending on the purpose and use case of the projection view. The type of projection view is specified using the syntax addition [`PROVIDER CONTRACT`](ABENCDS_PV_PROVIDER_CONTRACT.html). The following types of CDS projection views are available:

A CDS projection view can be extended using a [CDS view entity extension](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html)\\ `EXTEND VIEW ENTITY`. For details, see topic [CDS DDL - `EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html).

CDS projection views cannot be used as base objects for reports. More information can be found in the [data source matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

For more information about CDS projection views, see [*CDS Projection Views*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/f6e118ed57374f96984d55e78d1f9871?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   [ABAP CDS - Table Buffering of CDS View Entities](ABENCDS_V2_VIEW_BUFFERING.html)
-   [CDS DDL - `DEFINE VIEW | TABLE ENTITY BUFFER`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)
-   [CDS DDL - `PROPAGATE VIEW ENTITY BUFFER`](ABENCDS_PROPAGATE_BUFFER.html)

-   [CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html)
-   Transactional queries define the projection layer of a RAP business object. They are [CDS SQL entities](ABENCDS_SQL_ENTITY_GLOSRY.html).
-   For details, see the section about [Transactional Queries](ABENCDS_PV_TRANSACTIONAL_QUERY.html).
-   [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html)
-   CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html).
-   CDS transactional interfaces are [SQL entities](ABENCDS_SQL_ENTITY_GLOSRY.html).
-   For details, see the section about [CDS Transactional Interfaces](ABENCDS_PV_TRANSACTIONAL_INTERFACE.html).
-   [CDS analytical queries](ABENCDS_ANALYTICAL_PV_GLOSRY.html)
-   [CDS analytical queries](ABENCDS_ANALYTICAL_PV_GLOSRY.html) are intended for modelling analytical queries within the CDS data model. They are evaluated by an analytical engine.
-   Analytical queries are [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html).
-   For details, see the section about [Analytical Queries](ABENCDS_ANALYTICAL_QUERY_APV.html).
-   no provider contract specified
-   Deprecated. It is strongly recommended that a provider contract is specified. If no provider contract is specified, the same features are available as for transactional queries. There are only a few differences in the syntax checks to transactional queries. The differences are listed in topic [no contract](ABENCDS_PV_NO_CONTRACT.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html