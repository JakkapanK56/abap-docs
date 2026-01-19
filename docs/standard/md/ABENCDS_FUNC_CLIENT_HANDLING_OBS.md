---
title: "ABENCDS_FUNC_CLIENT_HANDLING_OBS"
description: |
  ABENCDS_FUNC_CLIENT_HANDLING_OBS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_FUNC_CLIENT_HANDLING_OBS.htm"
abapFile: "ABENCDS_FUNC_CLIENT_HANDLING_OBS.html"
keywords: ["if", "ABENCDS", "FUNC", "CLIENT", "HANDLING", "OBS"]
---

Before the annotation [`@ClientHandling.type`](ABENCDS_F1_FUNCTION_ANNOTATIONS.html) with the values `#CLIENT_DEPENDENT` and `#CLIENT_INDEPENDENT` was introduced, the [client dependency](ABENCDS_FUNC_CLIENT_HANDLING.html) of a CDS table function was switched on and off using the annotation `ClientDependent` with the values `true` and `false`.

Only the annotation `@ClientHandling.type` should now be used in new CDS table functions. The annotations `@ClientHandling` and `@ClientDependent` cannot be used together in the definition of a CDS table function. If neither of the annotations `@ClientHandling.type` and `@ClientDependent` is specified, the default value of `@ClientHandling.type` applies.

-   The annotation `ClientDependent:true` works like `@ClientHandling.type:#CLIENT_DEPENDENT`.
-   The annotation `ClientDependent:false` works like `@ClientHandling.type:#CLIENT_INDEPENDENT`.

abenabap.html abencds.html abencds\_obsolete.html