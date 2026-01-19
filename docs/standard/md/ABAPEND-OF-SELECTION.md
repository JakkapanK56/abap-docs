---
title: "ABAPEND-OF-SELECTION"
description: |
  ABAPEND-OF-SELECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEND-OF-SELECTION.htm"
abapFile: "ABAPEND-OF-SELECTION.html"
keywords: ["select", "if", "data", "ABAPEND", "SELECTION"]
---

[Short Reference](ABAPEND-OF-SELECTION_SHORTREF.html)

`END-OF-SELECTION.`

The statement `END-OF-SELECTION` is only intended for use in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that are linked with a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). The statement defines an event block whose event is raised as follows by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) during the [process flow](ABENREPORTING_PROCESS.html) of the executable program:

[Logical Database, Linked with a Program](ABENREPORT_ABEXA.html)

-   If the executable program is linked with a logical database, `END-OF-SELECTION` is raised if the logical database has completed its work.
-   In an executable program without a logical database, `END-OF-SELECTION` is raised directly after [`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html) (or [`START-OF-EDITING`](ABAPSTART-OF-EDITING.html)).

-   In this event block, all data read by the logical database can be processed in summarized form.
-   In an executable program without a logical database, there is no need to implement the event block `END-OF-SELECTION`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_reporting\_statements.html