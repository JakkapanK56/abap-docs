---
title: "ABAPINITIALIZATION"
description: |
  ABAPINITIALIZATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINITIALIZATION.htm"
abapFile: "ABAPINITIALIZATION.html"
keywords: ["select", "data", "ABAPINITIALIZATION"]
---

[Short Reference](ABAPINITIALIZATION_SHORTREF.html)

`INITIALIZATION.`

This event keyword defines an event block for initializing an executable program. The associated event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) during the [flow](ABENREPORTING_PROCESS.html) of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html), directly after `LOAD-OF-PROGRAM` and before the [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) of any existing standard selection screen. Here, the input fields of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) can be initialized only once, including those fields defined in the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) linked with the program.

When an executable program defines a standard selection screen, it is called again by the ABAP runtime framework after it has been executed, whereby the event `INITIALIZATION` is raised again. However, the initialization of parameters or selection criteria of the selection screen no longer has any effect, since these are automatically filled with previous user entries on the selection screen during the [selection screen event](ABENSELECTION_SCREEN_EVENT_GLOSRY.html)\\ `AT SELECTION-SCREEN OUTPUT`. To initialize the selection screen explicitly for each call, the event `AT SELECTION-SCREEN OUTPUT` must be used.

Prefills a parameter on the standard selection screen of an executable program when the event `INITIALIZATION` is raised.

PARAMETERS p\_langu TYPE pgl\_langu. \\n\\ \\nINITIALIZATION. \\n p\_langu = sy-langu. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html abenabap\_processing\_blocks.html