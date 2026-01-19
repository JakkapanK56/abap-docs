---
title: "ABENCLIENT_SAFE_GLOSRY"
description: |
  ABENCLIENT_SAFE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLIENT_SAFE_GLOSRY.htm"
abapFile: "ABENCLIENT_SAFE_GLOSRY.html"
keywords: ["do", "if", "method", "data", "ABENCLIENT", "SAFE", "GLOSRY"]
---

A [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that accesses [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html)\\ [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) is client-safe, if it can access data of one [client](ABENCLIENT_GLOSRY.html) only. Such repository objects support the concept of [client isolation](ABENCLIENT_ISOLATION_GLOSRY.html) for [AMDP methods](ABENAMDP_METHOD_GLOSRY.html):

A repository object that accesses only [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) SQL data sources is implicitly client-safe.

-   AMDP methods that have the [ABAP language version](ABENABAP_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or are a [released API](ABENRELEASED_API_GLOSRY.html) with a [C1 contract](ABENC1_CONTRACT_GLOSRY.html) or a [C4 contract](ABENC4_CONTRACT_GLOSRY.html) must be [client-safe](ABENAMDP_CLIENT_SAFETY.html) and must access client-safe objects only.
-   For a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` can be specified that enforces checks that guarantee its client safety. For CDS entities that do not have this annotations but are [released APIs](ABENRELEASED_API_GLOSRY.html), the checks are done implicitly.

ABENABALA\_GLOSSARY.html ABENCDS\_GLOSSARY.html