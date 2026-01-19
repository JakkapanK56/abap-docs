---
title: "ABENRELEASE_CONTRACT_GLOSRY"
description: |
  ABENRELEASE_CONTRACT_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRELEASE_CONTRACT_GLOSRY.htm"
abapFile: "ABENRELEASE_CONTRACT_GLOSRY.html"
keywords: ["if", "try", "method", "class", "data", "ABENRELEASE", "CONTRACT", "GLOSRY"]
---

Classification of a [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that is a prerequisite for its usability as an [released API](ABENRELEASED_API_GLOSRY.html). A release contract ensures a certain stability regarding consistency and compatibility of released APIs.

There are currently the following release contracts:

Objects are classified in [ADT](ABENADT_GLOSRY.html) or using special transactions such as `SCFD_REGISTRY`.

[**\-> More about**](ABENABAP_RELEASE_CONTRACTS.html)

-   [C0 contract, release](ABENC0_CONTRACT_GLOSRY.html), which allows enhancement fields to be added at specified extension options.
-   [C1 contract, use system-internally](ABENC1_CONTRACT_GLOSRY.html), which guarantees a stable interface for use within the [AS ABAP](ABENAS_ABAP_GLOSRY.html)
-   [C2 contract, use as remote API](ABENC2_CONTRACT_GLOSRY.html), which also guarantees a stable interface for use outside the AS ABAP.
-   [C3 contract, manage configuration content](ABENC3_CONTRACT_GLOSRY.html), which ensures a stable persistence for configuration content.
-   [C4 contract, use in ABAP-Managed Database Procedures](ABENC4_CONTRACT_GLOSRY.html), which guarantees a stable interface of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) for use in other AMDP methods.

ABENTECHNO\_GLOSSARY.html