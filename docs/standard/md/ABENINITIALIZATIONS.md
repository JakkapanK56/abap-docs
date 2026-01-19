---
title: "ABENINITIALIZATIONS"
description: |
  ABENINITIALIZATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINITIALIZATIONS.htm"
abapFile: "ABENINITIALIZATIONS.html"
keywords: ["delete", "do", "data", "internal-table", "ABENINITIALIZATIONS"]
---

The following statements initialize data objects, which means they set the content of a data object to an initial value:

Initialization does not delete the corresponding data objects. Data objects created by declarative statements are only deleted from the memory when exiting a program, together with the [internal session](ABENINTERNAL_SESSION_GLOSRY.html). Objects created dynamically by the statement [`CREATE`](ABAPCREATE_OBJECT.html) are deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html). The initialization of reference variables can, however, cause the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) to delete the referenced objects.

[`REFRESH`](ABAPREFRESH_ITAB.html) is an obsolete statement used to initialize internal tables.

-   [`CLEAR`](ABAPCLEAR.html)
-   [`FREE`](ABAPFREE_DATAOBJECT.html)

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html