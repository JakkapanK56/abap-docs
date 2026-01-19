---
title: "ABAPSET_BLANK_LINES"
description: |
  ABAPSET_BLANK_LINES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_BLANK_LINES.htm"
abapFile: "ABAPSET_BLANK_LINES.html"
keywords: ["loop", "do", "if", "data", "ABAPSET", "BLANK", "LINES"]
---

[Short Reference](ABAPSET_BLANK_LINES_SHORTREF.html)

`SET BLANK LINES \{ON|OFF\}.`

This statement determines whether the blank lines created using [`WRITE`](ABAPWRITE-.html) are displayed. If the addition `ON` is specified, all subsequent lines created using `WRITE` statements are written in the list. If the addition `OFF` is specified (default), all subsequent lines that contain only blanks after a line break are not written to the list.

Output of a text file loaded from the current presentation server as a list. Blank lines are respected.

-   Blank lines are suppressed regardless of the formatting of the output. Lines that contain only empty checkboxes or input fields are also suppressed.
-   Blank lines created using [`SKIP`](ABAPSKIP.html) are independent of the statement `SET BLANK LINES`. They do not contain any output.

DATA: text\_line TYPE c LENGTH 80, \\n text\_tab LIKE TABLE OF text\_line. \\n\\ \\nCALL FUNCTION 'GUI\_UPLOAD' \\n EXPORTING \\n filename = 'Gone\_with\_the\_Wind.txt' \\n filetype = 'ASC' \\n TABLES \\n data\_tab = text\_tab. \\n\\ \\nSET BLANK LINES ON. \\nLOOP AT text\_tab INTO text\_line. \\n WRITE / text\_line. \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html