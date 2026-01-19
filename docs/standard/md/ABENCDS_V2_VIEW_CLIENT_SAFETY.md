---
title: "ABENCDS_V2_VIEW_CLIENT_SAFETY"
description: |
  ABENCDS_V2_VIEW_CLIENT_SAFETY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_V2_VIEW_CLIENT_SAFETY.htm"
abapFile: "ABENCDS_V2_VIEW_CLIENT_SAFETY.html"
keywords: ["do", "if", "method", "ABENCDS", "VIEW", "CLIENT", "SAFETY"]
---

The annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` declares a CDS view entity as [client-safe](ABENCLIENT_SAFE_GLOSRY.html). If the value `true` (default) is used for that annotation, the following prerequisites for client safety are checked implicitly:

-   All used objects must be client-safe.
-   It is not allowed to pass an actual parameter other than [`$session.client`](ABENCDS_SESSION_VAR_BUILTIN_V2.html) to the input parameter for the client of built-in functions such as [`ABAP_USER_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html) or [`CURRENCY_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html).

-   If the view entity has the ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or is a [released API](ABENRELEASED_API_GLOSRY.html), the checks are done implicitly and client safety is enforced where necessary.
-   [Client safety](ABENCLIENT_SAFE_GLOSRY.html) is required, e.g. when using a client-dependent CDS view entity in a client-safe [AMDP method](ABENAMDP_METHOD_GLOSRY.html),

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_v2\_view\_client\_handling.html