---
title: "ABENRAP_RESPONSE_PARAM_GLOSRY"
description: |
  ABENRAP_RESPONSE_PARAM_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAP_RESPONSE_PARAM_GLOSRY.htm"
abapFile: "ABENRAP_RESPONSE_PARAM_GLOSRY.html"
keywords: ["if", "method", "data", "types", "ABENRAP", "RESPONSE", "PARAM", "GLOSRY"]
---

Implicit changing parameters of [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) (implicitly) typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`... TYPE RESPONSE FOR ...`](ABAPTYPE_RESPONSE_FOR.html). Depending on the RAP handler or saver method, the signatures of the individual methods can include all of the following three formal parameters `mapped`, `failed` and `reported`, a subset or none of them. The names of the parameters are predefined. They are used to provide a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) with information by a [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html).

Parameters:

-   `failed`: Information for identifying the data set for which an error occurred in a RAP operation
-   `reported`: Used to exchange messages (for example, error messages) for each entity defined in the BDEF and [not related to a specific entity](ABAPDERIVED_TYPES_OTHER.html).
-   `mapped`: Used to provide mapping information on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html), for example, which key values were created for given content IDs ([`%cid`](ABAPDERIVED_TYPES_CID.html)).

ABENRAP\_GLOSSARY.html