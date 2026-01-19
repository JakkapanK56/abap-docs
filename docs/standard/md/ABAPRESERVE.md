---
title: "ABAPRESERVE"
description: |
  ABAPRESERVE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRESERVE.htm"
abapFile: "ABAPRESERVE.html"
keywords: ["select", "loop", "do", "if", "data", "ABAPRESERVE"]
---

[Short Reference](ABAPRESERVE_SHORTREF.html)

`RESERVE n LINES.`

This statement creates a page break if there is not enough space left on the current list page between the last output and the page end or [page footer](ABENPAGE_FOOTER_GLOSRY.html), as specified in `n`. `n` expects a data object of type `i`. No page break is triggered if the value of `n` is less than or equal to 0.

The page break raises the list event [`END-OF-PAGE`](ABAPEND-OF-PAGE.html) regardless of whether or not a page footer was defined in the program-initiating statement.

Furthermore, the statement `RESERVE` affects the behavior of the statement [`BACK`](ABAPBACK.html).

If the page length is greater than the value of `n`, the `RESERVE` statement can be used to define blocks of lines that can only be displayed completely on one page.

The three lines produced by the `DO` loop and the blank line that follows them form a line block and are not separated by page breaks.

REPORT NO STANDARD PAGE HEADING LINE-COUNT 10(2). \\n\\ \\nSTART-OF-SELECTION. \\n DO 5 TIMES. \\n RESERVE 4 LINES. \\n WRITE: / '1', / '2', / '3'. \\n SKIP. \\n ENDDO. \\n\\ \\nEND-OF-PAGE. \\n ULINE. \\n WRITE sy-pagno. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html