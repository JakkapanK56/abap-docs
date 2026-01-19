---
title: "ABENPRINT"
description: |
  ABENPRINT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT.htm"
abapFile: "ABENPRINT.html"
keywords: ["delete", "data", "ABENPRINT"]
---

The *spooling* of lists means the list output is not passed to the [list buffer](ABENLIST_BUFFER_GLOSRY.html) for [screen lists](ABENSCREEN_LIST_GLOSRY.html) and it is passed page by page to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html) instead. After a page has been passed, it is deleted from the ABAP runtime framework and only exists in the SAP spool system.

The size of a spool list is therefore only limited by the intake capacity of the spool system and can become very large. On the other hand, when spool lists are created, it is not possible to refer to previous pages.

Each spooling of list output is linked to a [spool request](ABENSPOOL_REQUEST_GLOSRY.html). The list pages that are output for a spool request comprise a [spool list](ABENSPOOL_LIST_GLOSRY.html). The spool list of a spool request can be

For the spooling of lists, both the activation and deactivation of spooling and the association with spool requests are important.

The following topics also play a role in spooling lists:

Separate solutions are provided for form-based output of data, instead of spool lists.

-   stored in the spool system,
-   printed on a printer, or
-   archived using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html).

-   [Switching Spooling On and Off](ABENPRINT_ON_OFF.html)
-   [Spool List Levels and Spool Requests](ABENPRINT_SPOOL.html)

-   [Spool Parameters](ABENPRINT_PARAMETERS.html)
-   [Spool Control](ABENPRINT_CONTROL.html)
-   [Spooling Screen Lists](ABENPRINT_SCREEN.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html