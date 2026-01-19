---
title: "ABENRAP_RESPONSE_GLOSRY"
description: |
  ABENRAP_RESPONSE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAP_RESPONSE_GLOSRY.htm"
abapFile: "ABENRAP_RESPONSE_GLOSRY.html"
keywords: ["if", "method", "data", "types", "ABENRAP", "RESPONSE", "GLOSRY"]
---

Information a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) is provided with by a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) via the [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ `mapped`, `failed` and `reported` of individual [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html).

Depending on the availability of these response parameters in the said methods, the information that is provided can comprise the following:

-   `mapped`: Used to provided mapping information on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html), for example, which key values were created for given content IDs ([`%cid`](ABAPDERIVED_TYPES_CID.html)).
-   `failed`: Information for identifying the data set for which an error occurred in a RAP operation.
-   `reported`: Used to exchange error messages for each entity defined in the BDEF and [not related to a specific entity](ABAPDERIVED_TYPES_OTHER.html).

ABENRAP\_GLOSSARY.html