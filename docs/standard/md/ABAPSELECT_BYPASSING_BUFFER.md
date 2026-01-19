---
title: "ABAPSELECT_BYPASSING_BUFFER"
description: |
  ABAPSELECT_BYPASSING_BUFFER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_BYPASSING_BUFFER.htm"
abapFile: "ABAPSELECT_BYPASSING_BUFFER.html"
keywords: ["select", "do", "if", "data", "internal-table", "ABAPSELECT", "BYPASSING", "BUFFER"]
---

`... BYPASSING BUFFER ...`

This addition causes the `SELECT` statement to bypass the [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) of buffered DDIC database tables or DDIC views. Any buffers on the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) are not accessed and the database is accessed directly instead.

Access to the most current data of the fully buffered DDIC database table `SPFLI`.

-   The addition `BYPASSING BUFFER` can be used if it is vital that the current data is accessed for a buffered table instead of the buffer.
-   The addition `BYPASSING BUFFER` can be specified for unbuffered DDIC database tables or views, but then describes the regular behavior.
-   The addition `BYPASSING BUFFER` does not ensure that data in an internal table is transported to the database when reads are performed on the table using [`FROM ... @itab`](ABAPSELECT_DATA_SOURCE.html).
-   The addition `BYPASSING BUFFER` should not be specified without the explicit addition [`OPTIONS`](ABAPSELECT_OPTIONS.html).

SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result) \\n OPTIONS \\n BYPASSING BUFFER. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_options.html