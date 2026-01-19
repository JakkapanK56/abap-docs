---
title: "ABENWRITE_LINES"
description: |
  ABENWRITE_LINES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWRITE_LINES.htm"
abapFile: "ABENWRITE_LINES.html"
keywords: ["do", "if", "case", "data", "ABENWRITE", "LINES"]
---

When a list is output using [`WRITE`](ABAPWRITE-.html), the characters *\-* and *|* are replaced by suitable [line elements](ABENLINE_ELEMENT_GLOSRY.html) if they are displayed directly beside or above each other. Line elements are horizontal and vertical lines, corners, crosses, and T elements. Character replacement produces continuous lines. A solitary character *|* is always replaced by a vertical line. When the system field `sy-uline` is displayed, each character in the field is always replaced by a horizontal line as in the statement [`ULINE`](ABAPULINE.html).

The replacement of characters with line elements depends on how the character is shown in the list and not on how it is defined in the list buffer. Consequently, the characters *\-* and *|* can be joined to form a line although they are not directly adjacent in the list buffer.

The replacement of characters by line elements can be switched off using the addition [`FRAMES OFF`](ABAPFORMAT.html).

-   Data objects whose characters *\-* and *|* are to be replaced by line elements may only contain blanks in addition to these characters. Otherwise, replacement with line elements cannot be guaranteed.
-   In most cases, the line elements used to replace character produce the required results. Only in a few irrelevant cases can it happen that characters are replaced unexpectedly.
-   The line elements used to replace characters can also be displayed explicitly as [list elements](ABAPWRITE_LIST_ELEMENTS.html). These can be used deliberately if the automatic replacements do not work as expected.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapwrite-.html