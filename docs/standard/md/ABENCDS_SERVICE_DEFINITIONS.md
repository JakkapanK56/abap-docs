---
title: "ABENCDS_SERVICE_DEFINITIONS"
description: |
  ABENCDS_SERVICE_DEFINITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SERVICE_DEFINITIONS.htm"
abapFile: "ABENCDS_SERVICE_DEFINITIONS.html"
keywords: ["data", "ABENCDS", "SERVICE", "DEFINITIONS"]
---

A [CDS service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) exposes [CDS entities](ABENCDS_ENTITY_GLOSRY.html) for a [RAP business service](ABENBUSINESS_SERVICE_GLOSRY.html). Service definitions are created in [SDL source code](ABENSDL_SOURCE_CODE_GLOSRY.html) using [CDS SDL](ABENCDS_SDL_GLOSRY.html).

Service definitions can expose regular CDS entities and root entities of [RAP business objects](ABENRAP_BO_GLOSRY.html):

-   [SDL for Service Definitions](ABENCDS_F1_SDL_SYNTAX.html)

-   [Service bindings](ABENCDS_SERVICE_BINDINGS.html) can be used to bind a CDS service definition to a communication protocol and publish it as a [business service](ABENBS_GLOSRY.html).
-   The publication of a regular CDS entity as a business service enables queries to be made from outside AS ABAP on the associated data using the protocol from the service binding.
-   The publication of root entities of [RAP business objects](ABENRAP_BO_GLOSRY.html) also enables transactional writes to be made on the associated data.

abenabap.html abencds.html