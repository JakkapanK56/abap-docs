---
title: "ABENABAP_PROCESSING_BLOCKS"
description: |
  ABENABAP_PROCESSING_BLOCKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_PROCESSING_BLOCKS.htm"
abapFile: "ABENABAP_PROCESSING_BLOCKS.html"
keywords: ["select", "data", "ABENABAP", "PROCESSING", "BLOCKS"]
---

The following are event key words for [reporting](ABENREPORTING_GLOSRY.html) events:

Reporting events occur in a [predefined order](ABENREPORTING_PROCESS.html) and only in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) started with `SUBMIT`. In general, every executable program is started implicitly using `SUBMIT`. Only starts with regular transaction codes (no reporting transactions) or external calls of their procedures are not connected to a `SUBMIT` statement.

When an executable program is connected to a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), the assigned subroutine is [executed](ABENLDB_USAGE_EXECUTABLE.html) in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) before a reporting event is raised.

-   [`INITIALIZATION`](ABAPINITIALIZATION.html),
-   [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html),
-   [`GET node`](ABAPGET-.html) (obsolete, for logical databases only),
-   [`END-OF-SELECTION`](ABAPEND-OF-SELECTION.html) (obsolete, for logical databases only).

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html