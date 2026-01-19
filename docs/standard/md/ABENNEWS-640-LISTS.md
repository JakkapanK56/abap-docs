---
title: "ABENNEWS-640-LISTS"
description: |
  ABENNEWS-640-LISTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-LISTS.htm"
abapFile: "ABENNEWS-640-LISTS.html"
keywords: ["do", "if", "ABENNEWS", "640", "LISTS"]
---

In **Unicode systems**, each character in the list buffer has a position but can occupy more than one column in the list, which is of particular relevance for Asian characters. However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is therefore shortened accordingly and the page conforms to the [alignment](ABENALIGNMENT_GAP_GLOSRY.html). The horizontal position of the [list cursor](ABENLIST_CURSOR_GLOSRY.html) is only the same in the non-Unicode systems as the output column of displayed or spooled lists. In Unicode systems, this is only guaranteed for the top and bottom output limits.

The following changes were made in ABAP to comply with the behavior of lists in Unicode systems:

These changes were also downported to ABAP release 6.20.

-   If list output in a Unicode system is reduced, this is indicated by an indicator `>` or `<`. The complete content can then be displayed by choosing *System -> List -> Unicode Display*.
-   So that unnecessary reductions are not made in the Unicode systems, the new specifications `*` and `**` were introduced for the [output length](ABENWRITE_OUTPUT_LENGTH.html) in the [`WRITE`](ABAPWRITE-.html) statement.
-   In Unicode systems, [predefined output formats](ABENWRITE_FORMATS.html) or [predefined output lengths](ABENWRITE_OUTPUT_LENGTH.html) that are different to non-Unicode systems are valid.

abenabap.html abennews.html abennews-6.html abennews-640.html