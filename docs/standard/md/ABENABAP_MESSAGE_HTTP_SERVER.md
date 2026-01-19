---
title: "ABENABAP_MESSAGE_HTTP_SERVER"
description: |
  ABENABAP_MESSAGE_HTTP_SERVER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MESSAGE_HTTP_SERVER.htm"
abapFile: "ABENABAP_MESSAGE_HTTP_SERVER.html"
keywords: ["do", "if", "data", "types", "ABENABAP", "MESSAGE", "HTTP", "SERVER"]
---

Messages sent during [ICF processing](ABENICF_PROCESSING_GLOSRY.html), that is, when a HTTP/HTTPS query or SMTP query is handled by an [HTTP request handler](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/48D40ACA1904154EE10000000A421937), behave in the same way as in [RFC processing](ABENABAP_MESSAGE_RFC.html). Programs or procedures called in the handler are executed in the service context and their messages behave accordingly.

[Dialog processing](ABENABAP_MESSAGE_DIALOG.html) or [list processing](ABENABAP_MESSAGE_LIST_PROCESSING.html) can only take place for an ICF server if the *Service Data -> GUI Link* setting for the service is set to *Yes* in the transaction `SICF`. Messages of the types *I*, `S`, and *W* are always ignored by default and messages of the types *A*, `E`, and *X* always terminate processing followed by a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_texts.html abenabap\_messages.html abenabap\_messages\_types.html