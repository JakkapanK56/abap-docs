---
title: "ABENNEWS-773-AMDP"
description: |
  ABENNEWS-773-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-773-AMDP.htm"
abapFile: "ABENNEWS-773-AMDP.html"
keywords: ["if", "case", "method", "class", "data", "ABENNEWS", "773", "AMDP"]
---

[1\. AMDP Scalar Functions](#ABAP_MODIFICATION_1@4@)

[2. Option `CDS SESSION CLIENT` Mandatory](#ABAP_MODIFICATION_2@4@)

In the implementation of [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html), it is now possible to specify the database-specific option [`DETERMINISTIC`](ABAPMETHOD_BY_DB_PROC.html) after `OPTIONS`. This buffers the result of the function for the duration of a query.

The option [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is now mandatory when an AMDP method accesses the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) whose [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is determined by the annotation [`@ClientHandling.algorithm: #SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html). If this option is not specified in this case, a syntax error occurs. The option sets the [session variable](ABENSESSION_VARIABLE_GLOSRY.html) of the database that can be addressed under the name [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) to a particular value when the method is called from ABAP. An exception of the class `CX_AMDP_CDS_CLIENT_MISMATCH` can now no longer be raised.

abenabap.html abennews.html abennews-77.html abennews-773.html