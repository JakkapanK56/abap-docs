---
title: "ABENCLIENT_DEPENDENT_SCRTY"
description: |
  ABENCLIENT_DEPENDENT_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLIENT_DEPENDENT_SCRTY.htm"
abapFile: "ABENCLIENT_DEPENDENT_SCRTY.html"
keywords: ["select", "if", "method", "data", "ABENCLIENT", "DEPENDENT", "SCRTY"]
---

Each [client](ABENCLIENT_GLOSRY.html) is a self-contained unit. [Implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) ensures that application programs can only access the business data in the [current client](ABENCURRENT_CLIENT_GLOSRY.html) by default. In ABAP SQL, using the addition [`USING`](ABAPSELECT_CLIENT.html) to switch to different clients or using the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) to disable implicit client handling can be viewed as a critical attack on the security of data in other clients.

In [Native SQL](ABENNATIVE_SQL_GLOSRY.html) and [AMDP](ABENAMDP_GLOSRY.html), there is no implicit client handling and the client in question must be specified explicitly in the access conditions. Here, specifying a client other than the current client entails accessing foreign data. For AMDP, this is supported by the possibility to create [client-safe](ABENCLIENT_SAFE_GLOSRY.html) AMDP methods, refer to [AMDP - Client Safety](ABENAMDP_CLIENT_SAFETY.html).

Cross-client access to database tables is allowed only in [system programs](ABENSYSTEM_PROGRAM_GLOSRY.html) in the [system client](ABENSYSTEM_CLIENT_GLOSRY.html).

See also the programming guidelines for [client handling](ABENCLIENT_HANDLING_GUIDL.html).

The following program section allows a user to access customer data in any client. This should be avoided at all costs.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA client TYPE sy-mandt. \\nclient = sy-mandt. \\ncl\_demo\_input=>request( CHANGING field = client ). \\n\\ \\nSELECT \* \\n FROM scustom USING CLIENT @client \\n INTO TABLE @FINAL(customers). \\nout->write( customers ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_security.html abenother\_programming\_scrty.html