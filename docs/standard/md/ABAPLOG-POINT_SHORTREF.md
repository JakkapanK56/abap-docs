---
title: "ABAPLOG-POINT_SHORTREF"
description: |
  ABAPLOG-POINT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOG-POINT_SHORTREF.htm"
abapFile: "ABAPLOG-POINT_SHORTREF.html"
keywords: ["try", "ABAPLOG", "POINT", "SHORTREF"]
---

[Reference](ABAPLOG-POINT.html)

`LOG-POINT ID group`\\ 
          `[SUBKEY sub]`\\ 
          `[FIELDS val1 val2 ...].`

Defines a [logpoint](ABENLOGPOINT_GLOSRY.html) to write a log entry.

-   `ID group`\\
    Assigns the logpoint to a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `group`, which controls its activation.
-   `SUBKEY sub`\\
    Controls the summarization of the log using a subkey `sub`.
-   `FIELDS val1 val2 ...`\\
    Writes the values `val1`, `val2`, ... to the log.

abenabap.html abenabap\_reference.html abenabap\_shortref.html