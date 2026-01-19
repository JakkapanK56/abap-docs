---
title: "ABENSPOOL_LIST_GLOSRY"
description: |
  ABENSPOOL_LIST_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSPOOL_LIST_GLOSRY.htm"
abapFile: "ABENSPOOL_LIST_GLOSRY.html"
keywords: ["class", "ABENSPOOL", "LIST", "GLOSRY"]
---

Also referred to as a spool list. [List](ABENCLASSIC_LIST_GLOSRY.html) that is not stored as a [screen list](ABENSCREEN_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html) but is sent page by page to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html). When it is created, a spool list is linked to exactly one [spool request](ABENSPOOL_REQUEST_GLOSRY.html) only. Spool lists can be stacked in [spool list levels](ABENSPOOL_LIST_LEVEL_GLOSRY.html). No more than two spool requests can be open at the same time for a spool list level. The statements used to create a spool list are [`NEW-PAGE PRINT ON|OFF`](ABAPNEW-PAGE_PRINT.html) and [`SUBMIT TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html).

[**\-> More about**](ABENPRINT.html)

ABENSAP\_GUI\_GLOSSARY.html