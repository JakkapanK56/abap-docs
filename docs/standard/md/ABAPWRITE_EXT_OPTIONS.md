---
title: "ABAPWRITE_EXT_OPTIONS"
description: |
  ABAPWRITE_EXT_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_EXT_OPTIONS.htm"
abapFile: "ABAPWRITE_EXT_OPTIONS.html"
keywords: ["do", "if", "data", "ABAPWRITE", "EXT", "OPTIONS"]
---

[Short Reference](ABAPWRITE_SHORTREF.html)

`... [COLOR       \{[=]\{color [ON]\}|OFF\}|\{= col\}]`\\ 
    `[INTENSIFIED [\{ON|OFF\}|\{= flag\}]]`\\ 
    `[INVERSE     [\{ON|OFF\}|\{= flag\}]]`\\ 
    `[HOTSPOT     [\{ON|OFF\}|\{= flag\}]]`\\ 
    `[INPUT       [\{ON|OFF\}|\{= flag\}]]`\\ 
    `[FRAMES      [\{ON|OFF\}|\{= flag\}]]`\\ 
    `[RESET] ...`

The meaning of the additions is the same as for the statement [`FORMAT`](ABAPFORMAT.html), with the difference that they only affect the output of the current `WRITE` statement. If the additions are not specified, the standard settings described in `FORMAT` or the settings set by the previous `FORMAT` statements are used.

The use of such an addition in the `WRITE` statement overrides the standard settings or the formats set by the previous `FORMAT` statements for exactly one output and for exactly the property concerned. All the other properties and the subsequent `WRITE` statements are not affected.

Changes the background color for output of the data object `sum`. All other output and any spaces between the output have the background color that is set in the `FORMAT` statement.

DATA sum TYPE i. \\n\\ \\nFORMAT COLOR COL\_NORMAL. \\n\\ \\nDO 10 TIMES. \\n WRITE / sy-index. \\n sum += sy-index. \\n WRITE sum COLOR COL\_TOTAL. \\nENDDO. \\nULINE. \\nWRITE sum UNDER sum COLOR COL\_GROUP. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapwrite-.html