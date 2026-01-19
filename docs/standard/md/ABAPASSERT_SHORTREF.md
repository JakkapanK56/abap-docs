---
title: "ABAPASSERT_SHORTREF"
description: |
  ABAPASSERT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSERT_SHORTREF.htm"
abapFile: "ABAPASSERT_SHORTREF.html"
keywords: ["if", "try", "data", "ABAPASSERT", "SHORTREF"]
---

[Reference](ABAPASSERT.html)

`ASSERT [\ [ID group [SUBKEY sub]]\           [FIELDS val1 val2 ...]\           CONDITION ] log_exp.`

Defines an [assertion](ABENASSERTION_GLOSRY.html). If the logical expression `log_exp` is false, either the program terminates with a runtime error, or processing switches to the ABAP debugger, or a log entry is created.

-   `ID group`\\
    Assigns the assertion to a [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `group` that controls its activation and behavior.
-   `SUBKEY sub`\\
    Controls the summarization of the log using a subkey `sub`.
-   `FIELDS val1 val2 ...`\\
    Writes the content of data objects `val1 val2 ...` to the log or the [short dump](ABENSHORT_DUMP_GLOSRY.html).
-   `CONDITION`\\
    Must be specified before `log_exp` if one of the other additions is specified.

abenabap.html abenabap\_reference.html abenabap\_shortref.html