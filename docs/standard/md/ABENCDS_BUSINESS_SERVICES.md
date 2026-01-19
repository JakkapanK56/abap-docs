---
title: "ABENCDS_BUSINESS_SERVICES"
description: |
  ABENCDS_BUSINESS_SERVICES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_BUSINESS_SERVICES.htm"
abapFile: "ABENCDS_BUSINESS_SERVICES.html"
keywords: ["if", "case", "ABENCDS", "BUSINESS", "SERVICES"]
---

A [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html) is a [RESTful](ABENRESTFUL_GLOSRY.html) service provided by [AS ABAP](ABENAS_ABAP_GLOSRY.html) as part of [ABAP RAP](ABENABAP_RAP_GLOSRY.html). A RAP business service consists mainly of the following parts:

A business service can be used for both read and write access to AS ABAP. In the latter case, the CDS entity exposed by the service definition must be the root entity of a [RAP business object](ABENRAP_BO_GLOSRY.html) for which there is a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) and a behavior pool.

A service definition can be published multiple times by different service bindings using different protocols.

-   [Service definition](ABENCDS_SERVICE_DEFINITIONS.html)
-   A service definition exposes CDS entities that can be accessed by a business service.
-   [Service binding](ABENCDS_SERVICE_BINDINGS.html)
-   A service binding is a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that binds a service definition to a [RESTful](ABENRESTFUL_GLOSRY.html) protocol, thereby publishing the business service for external consumption.

abenabap.html abenabap\_rap.html