---
title: "ABENABAP_MESSAGE_RFC"
description: |
  ABENABAP_MESSAGE_RFC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_RFC.htm"
abapFile: "ABENABAP_MESSAGE_RFC.html"
keywords: ["do", "if", "class", "data", "types", "ABENABAP", "MESSAGE", "RFC"]
---

As long as no list or dialog processing takes place during [RFC processing](ABENRFC_PROCESSING_GLOSRY.html), messages behave as follows:

If [dialog processing](ABENABAP_MESSAGE_DIALOG.html) or [list processing](ABENABAP_MESSAGE_LIST_PROCESSING.html) takes place during RFC processing, any messages sent behave as described there.

If a message of type *E* is sent in a remote-enabled function module, it should be noted that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.

-   Messages of types *I*, `S`, and *W* are ignored.
-   Messages of types *A*, *E*, and *X* cause processing to terminated, followed by a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). In the calling program, the classic exception `SYSTEM_FAILURE` is raised.

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html