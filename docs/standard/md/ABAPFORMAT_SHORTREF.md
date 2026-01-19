---
title: "ABAPFORMAT_SHORTREF"
description: |
  ABAPFORMAT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORMAT_SHORTREF.htm"
abapFile: "ABAPFORMAT_SHORTREF.html"
keywords: ["if", "ABAPFORMAT", "SHORTREF"]
---

[Reference](ABAPFORMAT.html)

`FORMAT [COLOR \{\ \{\ [=]\ \{\ \{ COL_BACKGROUND                          |\ \{1 | COL_HEADING \}\                          |\ \{2 | COL_NORMAL \}\                          |\ \{3 | COL_TOTAL \}\                          |\ \{4 | COL_KEY \}\                          |\ \{5 | COL_POSITIVE \}\                          |\ \{6 | COL_NEGATIVE \}\                          |\ \{7 | COL_GROUP \}\ \}\ [ON]\ \}\                        | OFF\}\                |\ \{= col\}\ \}]\         [INTENSIFIED [\{ON|OFF\}|\{= flag\}]]\         [INVERSE     [\{ON|OFF\}|\{= flag\}]]\         [HOTSPOT     [\{ON|OFF\}|\{= flag\}]]\         [INPUT       [\{ON|OFF\}|\{= flag\}]]\         [FRAMES      [\{ON|OFF\}|\{= flag\}]]\         [RESET].`

Formats a list by sections.

-   `ON | OFF |\ \{= flag\}`\\
    Enables and disables a format. In `flag`, the value is checked for 0 or not equal to 0.
-   `COLOR`\\
    Sets the color:
    \\
    `COL_BACKGROUND` - GUI-dependent
    `1 | COL_HEADING` - gray-blue
    `2 | COL_NORMAL` - light gray
    `3 | COL_TOTAL` - yellow
    `4 | COL_KEY` - blue-green
    `5 | COL_POSITIVE` - green
    `6 | COL_NEGATIVE` - red
    `7 | COL_GROUP` - orange
    `= col` - specifies a color key figure dynamically in `col`.
-   `INTENSIFIED`\\
    Sets the intensity of the background color.
-   `INVERSE`\\
    Switches between the foreground and the background.
-   `HOTSPOT`\\
    Creates a hotspot for responding to single mouse clicks.
-   `INPUT`\\
    Creates an input area.
-   `FRAMES`\\
    Specifies how *\-* and *|* are transformed to line elements.
-   `RESET`\\
    Sets all settings apart from `FRAMES` to `OFF`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html