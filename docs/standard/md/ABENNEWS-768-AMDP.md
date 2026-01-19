---
title: "ABENNEWS-768-AMDP"
description: |
  ABENNEWS-768-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-768-AMDP.htm"
abapFile: "ABENNEWS-768-AMDP.html"
keywords: ["method", "class", "data", "ABENNEWS", "768", "AMDP"]
---

The new addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) for [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html) statements can be used to define attributes of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) in their declaration:

-   The [`READ-ONLY`](ABAPMETHODS_AMDP_OPTIONS.html) option only allows reads in the implementation of the AMDP methods.
-   The [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) option sets the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `CDS_CLIENT` of the database that can be addressed under the name [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) to a particular value when the method is called from ABAP. It avoids the warning from the syntax check and the exception `CX_AMDP_CDS_CLIENT_MISMATCH` when an AMDP method accesses the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) whose [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is determined by the annotation [`@ClientHandling.algorithm: #SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html).

abenabap.html abennews.html abennews-76.html abennews-768.html