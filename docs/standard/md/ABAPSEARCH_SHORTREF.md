---
title: "ABAPSEARCH_SHORTREF"
description: |
  ABAPSEARCH_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSEARCH_SHORTREF.htm"
abapFile: "ABAPSEARCH_SHORTREF.html"
keywords: ["do", "if", "case", "data", "internal-table", "ABAPSEARCH", "SHORTREF"]
---

[Reference](ABAPSEARCH-.html)

`SEARCH dobj|itab FOR pattern        [IN \{CHARACTER|BYTE\} MODE]\        [STARTING AT p1]\ [ENDING AT p2]\        [ABBREVIATED]\        [AND MARK].`

**Obsolete:** Searches the data object `dobj` or the internal table `itab` for the search pattern specified in `pattern`.

-   [`IN \{CHARACTER|BYTE\} MODE`](ABAPSEARCH-.html)\\
    Specifies character string or byte string processing.
-   [`[STARTING AT p1]\ [ENDING AT p2]`](ABAPSEARCH_ITAB.html)\\
    Restricts the search to the subarea between the positions `p1` and `p2` of `dobj` or to the lines between `p1` and `p2` in `itab`.
-   [`ABBREVIATED`](ABAPSEARCH-.html)\\
    Allows an abbreviated pattern to be specified in `pattern`.
-   [`AND MARK`](ABAPSEARCH-.html)\\
    Converts a found pattern in `dobj` or `itab` to uppercase.

abenabap.html abenabap\_reference.html abenabap\_shortref.html