---
title: "ABAPSPLIT_SHORTREF"
description: |
  ABAPSPLIT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSPLIT_SHORTREF.htm"
abapFile: "ABAPSPLIT_SHORTREF.html"
keywords: ["do", "if", "internal-table", "ABAPSPLIT", "SHORTREF"]
---

[Reference](ABAPSPLIT.html)

`SPLIT dobj AT sep INTO`\\ 
      `\{\ \{result1 result2 ...\}\ |\ \{TABLE result_tab\}\ \}`\\ 
      `[IN \{CHARACTER|BYTE\} MODE].`

Splits a character string or byte string `dobj`.

-   `AT sep`\\
    Specifies the separator sequence `sep` where the split is made.
-   `INTO \{\ \{result1 result2 ...\}\ |\ \{TABLE result_tab\}\ \}`\\
    Specifies the target fields either as a list `result1 result2 ...` or as lines of the internal table `result_tab`.
-   `IN \{CHARACTER|BYTE\} MODE`\\
    Specifies character string or byte string processing.

abenabap.html abenabap\_reference.html abenabap\_shortref.html