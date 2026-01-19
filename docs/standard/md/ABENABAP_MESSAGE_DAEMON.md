---
title: "ABENABAP_MESSAGE_DAEMON"
description: |
  ABENABAP_MESSAGE_DAEMON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_DAEMON.htm"
abapFile: "ABENABAP_MESSAGE_DAEMON.html"
keywords: ["method", "types", "ABENABAP", "MESSAGE", "DAEMON"]
---

Messages sent in [ABAP daemon processing](ABENABAP_DAEMON_PROCESSING_GLOSRY.html), that is, when [ABAP daemon](ABENABAP_DAEMON_GLOSRY.html) methods are executed, behave as follows:

Procedures called in an ABAP daemon are executed in the ABAP daemon context and their messages behave accordingly.

-   Messages of types *I*, `S`, and *W* are ignored.
-   Messages of types *A*, *E*, and *X* terminate the [ABAP daemon session](ABENABAP_DAEMON_SESSION_GLOSRY.html) and restart the [ABAP daemon](ABENABAP_DAEMON_GLOSRY.html) in a new user session. After the restart, the [ABAP daemon event](ABENABAP_DAEMON_EVENT_GLOSRY.html)\\ `ON_ERROR` is raised.

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html