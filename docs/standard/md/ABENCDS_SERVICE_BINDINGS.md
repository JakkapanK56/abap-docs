---
title: "ABENCDS_SERVICE_BINDINGS"
description: |
  ABENCDS_SERVICE_BINDINGS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SERVICE_BINDINGS.htm"
abapFile: "ABENCDS_SERVICE_BINDINGS.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENCDS", "SERVICE", "BINDINGS"]
---

A service binding is a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) defined in a form-based tool in [ABAP Development Tool (ADT)](ABENADT_GLOSRY.html) that binds a [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) to a communication protocol and provides it as a [business service](ABENBS_GLOSRY.html) to be used outside of [AS ABAP](ABENAS_ABAP_GLOSRY.html).

The following service binding types are currently available:

When a service binding is activated, it makes the business service accessible in accordance with the protocol used. This involves technologies such as [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html) and the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html). To provide access to the OData-based data outside AS ABAP, [ICF](ABENICF_GLOSRY.html) services are created. They are visible in transaction `SICF`.

See [Consuming Business Services](ABENSERVICE_BINDINGS_ABEXAS.html).

-   Different variants of [OData](ABENODATA_GLOSRY.html) can be used as the [RESTful](ABENRESTFUL_GLOSRY.html) protocol:

-   OData in versions 2 and 4
-   OData for UIs or Web APIs
-   OData for UIs is designed for access to business services using UI technologies like [SAPUI5](ABENSAPUI5_GLOSRY.html). The data provided by a business service contains control elements for user interfaces. These elements are themselves defined by [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) in the [CDS entities](ABENCDS_ENTITY_GLOSRY.html) in question.
-   OData for [Web APIs](ABENWEB_API_GLOSRY.html) is limited to the data-only content of the business services and does not contain any control elements for user interfaces.

-   The [Information Access (InA) protocol](ABENINA_PROTOCOL_GLOSRY.html) can be used for [analytical queries](ABENCDS_ANALYTICAL_PV_GLOSRY.html).
-   [SQL services](ABENABAP_SQL_SERVICES_GLOSRY.html)

-   The ICF node of a service binding is `/sap/opu/odata/sap/SB_NAME`, where `SB_NAME` is the name of the service binding in uppercase letters.
-   A client can access the ICF node and use it for reads. For example, for the OData protocol, this works as follows:

-   Access to the metadata of the OData service
-   `.../sap/opu/odata/sap/SB_NAME/$metadata`
-   Access to the data of a CDS entity `cds_entity` exposed in the service definition:
-   `.../sap/opu/odata/sap/SB_NAME/cds_entity`
-   Passing formal parameters to CDS entities with input parameters
-   `.../sap/opu/odata/sap/SB_NAME/cds_entity(p1=...,p2=...,...)`
-   Path specified for CDS entities with CDS associations whose [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) are exposed in the service definition
-   `.../sap/opu/odata/sap/SB_NAME/cds_entity?$expand=to.../to...`

-   If the service binding for the [root entity](ABENROOT_ENTITY_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) is defined by the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and behavior pools, transactional HTTP POST requests can be used to access the ICF node. The internal frameworks are responsible for calling the methods of the handler classes in the behavior pools in the correct order.

-   Once a service binding is activated, the form-based tool of [ABAP Development Tool (ADT)](ABENADT_GLOSRY.html) shows the associated URL and enables comprehensive testing of the service.
-   [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html) offers [OData client proxies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/68bf513362174d54b58cddec28794093/bb778da49bf34e03a699eb476d4bb316) in order to access OData data of an AS ABAP. These are of special use for OData data of business services.
-   The default HTTP request handler of an [ICF](ABENICF_GLOSRY.html) service created when a service binding is activated is the class `/IWFND/CL_SODATA_HTTP_HNDL_OAT` in [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html).

-   Development guide for the ABAP RESTful Application Programming Model, section [*Service Binding*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/b58a3c27df4e406f9335d4b346f6be04?version=sap_cross_product_abap).

abenabap.html abencds.html abencds\_service\_definitions.html