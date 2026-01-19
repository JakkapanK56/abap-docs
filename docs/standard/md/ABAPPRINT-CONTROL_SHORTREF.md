---
title: "ABAPPRINT-CONTROL_SHORTREF"
description: |
  ABAPPRINT-CONTROL_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPRINT-CONTROL_SHORTREF.htm"
abapFile: "ABAPPRINT-CONTROL_SHORTREF.html"
keywords: ["insert", "if", "ABAPPRINT", "CONTROL", "SHORTREF"]
---

[Reference](ABAPPRINT-CONTROL.html)

`PRINT-CONTROL   \{ INDEX-LINE index_line \}                |\ \{ formats|\{FUNCTION code\}\                    [LINE line]\ [POSITION col]\ \}.`

Creates index entries for list archiving or sets a print format (obsolete).

-   [`INDEX-LINE index_line`](ABAPPRINT-CONTROL.html)\\
    Inserts the content of `index_line` as an index line into the current spool list.
-   **Obsolete:**\\ [`formats`](ABAPPRINT-CONTROL_OBSOLETE.html)\\
    Predefined print formats for print control codes.
-   **Obsolete:**\\ [`FUNCTION code`](ABAPPRINT-CONTROL_OBSOLETE.html)\\
    Specifies print control codes directly in `code`.
-   **Obsolete:**\\ [`[LINE line]\ [POSITION col]`](ABAPPRINT-CONTROL_OBSOLETE.html)\\
    Sets the print format starting from the list line specified in `line` and position specified in `col`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html