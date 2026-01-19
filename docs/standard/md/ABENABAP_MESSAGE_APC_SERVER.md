---
title: "ABENABAP_MESSAGE_APC_SERVER"
description: |
  ABENABAP_MESSAGE_APC_SERVER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_APC_SERVER.htm"
abapFile: "ABENABAP_MESSAGE_APC_SERVER.html"
keywords: ["case", "method", "types", "ABENABAP", "MESSAGE", "APC", "SERVER"]
---

Messages sent during [APC processing](ABENAPC_PROCESSING_GLOSRY.html), that is, when a Web socket query or TCP query is handled by an [APC handler](ABENAPC.html), behave as follows:

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.

-   Messages of types *I*, `S`, and *W* are ignored.
-   Messages of types *A*, *E*, and *X* cause the [APC session](ABENAPC_SESSION_GLOSRY.html) to terminate. In the case of stateful APC servers, the connection is closed. The methods `ON_CLOSE` and `ON_ERROR` can no longer be executed.

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html