---
title: "ABAPWRITE_SHORTREF"
description: |
  ABAPWRITE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_SHORTREF.htm"
abapFile: "ABAPWRITE_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPWRITE", "SHORTREF"]
---

[Reference](ABAPWRITE-.html)

`WRITE \{[AT]\ [/][pos][(len|*|**)]\} dobj    [UNDER other_dobj]\    [NO-GAP]\    [LEFT-JUSTIFIED|CENTERED|RIGHT-JUSTIFIED]\    [EXPONENT exp]\    [NO-GROUPING]\    [NO-SIGN]\    [NO-ZERO]\    [CURRENCY cur]\    [DECIMALS dec]\    [ROUND scale]\    [UNIT unit]\    [ENVIRONMENT TIME FORMAT]\    [TIME ZONE tz]\    [STYLE stl]\    [USING \{\{NO EDIT MASK\}|\{EDIT MASK mask\}\}]\  [DD/MM/YY|MM/DD/YY|DD/MM/YYYY|MM/DD/YYYY|DDMMYY|MMDDYY|YYMMDD]\    [COLOR \{\ \{\ [=]\ \{\ \{ COL_BACKGROUND                     |\ \{1 | COL_HEADING \}\                     |\ \{2 | COL_NORMAL \}\                     |\ \{3 | COL_TOTAL \}\                     |\ \{4 | COL_KEY \}\                     |\ \{5 | COL_POSITIVE \}\                     |\ \{6 | COL_NEGATIVE \}\                     |\ \{7 | COL_GROUP \}\ \}\ [ON]\ \}\                   | OFF\}\           |\ \{= col\}\ \}]\    [INTENSIFIED [\ \{ON|OFF\}\ |\ \{= flag\}\ ]]\    [INVERSE     [\ \{ON|OFF\}\ |\ \{= flag\}\ ]]\    [HOTSPOT     [\ \{ON|OFF\}\ |\ \{= flag\}\ ]]\    [INPUT       [\ \{ON|OFF\}\ |\ \{= flag\}\ ]]\    [FRAMES      [\ \{ON|OFF\}\ |\ \{= flag\}\ ]]\    [RESET]\    \{\ [AS CHECKBOX]\    |\ [AS ICON]\    |\ [AS SYMBOL]\    |\ [AS LINE]\ \}\    [QUICKINFO info].`

Formats the content of the data object `dobj` and writes it to the current list.

-   [`[AT]\ [/][pos][(len|*|**)]`](ABAPWRITE-.html)\\
    Specifies the line break `/`, the horizontal position `pos`, and the length `len|*|**` of the output.
-   [`UNDER other_dobj`](ABAPWRITE-.html)\\
    Positions the output in the current line at the position where the data object `other_dobj` was in the output of a previous `WRITE` statement.
-   [`NO-GAP`](ABAPWRITE-.html)\\
    Positions the [list cursor](ABENLIST_CURSOR_GLOSRY.html) directly after the output and not in the next but one position of the list buffer.
-   [`LEFT-JUSTIFIED`, ..., `YYMMDD`](ABAPWRITE_INT_OPTIONS.html)\\
    As in the statement [`WRITE TO`](ABAPWRITE_TO_SHORTREF.html) but with reference to the output area of the list.
-   [`COLOR`, `INTENSIFIED`, `INVERSE`, `HOTSPOT`, `INPUT`, `FRAMES`, `RESET`](ABAPWRITE_EXT_OPTIONS.html)\\
    As in the statement [`FORMAT`](ABAPFORMAT_SHORTREF.html) but with reference to the current output.
-   [`AS CHECKBOX`](ABAPWRITE_LIST_ELEMENTS.html)\\
    Produces a one-character checkbox which is ready for input.
-   [`AS ICON`](ABAPWRITE_LIST_ELEMENTS.html)\\
    Produces an icon if `dobj` contains the corresponding internal representation.
-   [`AS SYMBOL`](ABAPWRITE_LIST_ELEMENTS.html)\\
    Produces a symbol if `dobj` contains the corresponding internal representation.
-   [`AS LINE`](ABAPWRITE_LIST_ELEMENTS.html)\\
    Produces a line element if `dobj` contains the corresponding internal representation.
-   [`QUICKINFO info`](ABAPWRITE-.html)\\
    Assigns a [tooltip](ABENTOOL_TIP_GLOSRY.html) to the output.
-   Information about other additions can be found in [`WRITE TO`](ABAPWRITE_TO_SHORTREF.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html