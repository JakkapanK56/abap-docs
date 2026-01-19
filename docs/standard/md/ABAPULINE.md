---
title: "ABAPULINE"
description: |
  ABAPULINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPULINE.htm"
abapFile: "ABAPULINE.html"
keywords: ["if", "case", "data", "ABAPULINE"]
---

[Short Reference](ABAPULINE_SHORTREF.html)

`ULINE \{[AT]\ [/][pos][(len)]\}\ [NO-GAP].`

Output of horizontal lines in lists.

This statement mainly has the same effect as the following [`WRITE`](ABAPWRITE-.html) statement:

`WRITE \{[AT]\ [/][pos][(len)]\} line [NO-GAP].`

Here, `line` is a data object with type `c` and length 1023, which is completely filled with *\-* characters. In accordance with the predefined formatting rule for the character *\-*, these are joined with each other to form a continuous line and are replaced by the appropriate [line element](ABENLINE_ELEMENT_GLOSRY.html). The same applies to directly consecutive characters *\-* and *|*. In contrast to the `WRITE` statement, `ULINE` replaces the characters with the line element for an output length of 1.

The position and length of the line are determined by the rules for the `WRITE` statement. In the simplest case, `ULINE` produces the following output:

Output of a horizontal line along the entire line after the first `WRITE` output, and two horizontal lines as a part of a frame.

-   A continuous horizontal line along an entire line, if no position and length are specified after `AT`. In contrast to the `WRITE` statement, the [list cursor](ABENLIST_CURSOR_GLOSRY.html) is positioned in the first position of the next line.
-   A line of length `len` at the horizontal position `pos` if a position and length are specified after `AT`.

-   If the statement [`FORMAT FRAMES OFF`](ABAPFORMAT.html) is used beforehand, the output of `ULINE` is not displayed as a continuous line, as this statement prevents replacement of the *\-* characters with line elements.
-   Output of the system field `sy-uline` using the statement [`WRITE`](ABAPWRITE-.html) behaves like the statement `ULINE`.

WRITE 'A text in a frame'. \\nULINE. \\nSKIP. \\n\\ \\nULINE AT 10(10). \\nWRITE: /10 '|', 11(8) 'Text' CENTERED, 19 '|'. \\nULINE AT /10(10). abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html