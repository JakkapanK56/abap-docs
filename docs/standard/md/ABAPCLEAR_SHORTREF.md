---
title: "ABAPCLEAR_SHORTREF"
description: |
  ABAPCLEAR_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLEAR_SHORTREF.htm"
abapFile: "ABAPCLEAR_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPCLEAR", "SHORTREF"]
---

[Reference](ABAPCLEAR.html)

 `CLEAR dobj [\ \{WITH val [IN \{CHARACTER|BYTE \} MODE]\}\             |\ \{WITH NULL\}\ ].`

Initializes a data object `dobj` by assigning the type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html).

-   `WITH val`\\
    Fills the data object with the characters or bytes specified in `val`.
-   `IN \{CHARACTER|BYTE\} MODE`\\
    Specifies character string or byte string processing.
-   [`WITH NULL`](ABAPCLEAR_WITH_NULL.html)\\
    **Obsolete:** Replaces all the bytes in `dobj` with the hexadecimal value 0.

abenabap.html abenabap\_reference.html abenabap\_shortref.html