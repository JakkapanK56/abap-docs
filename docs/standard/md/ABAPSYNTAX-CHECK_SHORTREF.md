---
title: "ABAPSYNTAX-CHECK_SHORTREF"
description: |
  ABAPSYNTAX-CHECK_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSYNTAX-CHECK_SHORTREF.htm"
abapFile: "ABAPSYNTAX-CHECK_SHORTREF.html"
keywords: ["if", "try", "ABAPSYNTAX", "CHECK", "SHORTREF"]
---

[Reference](ABAPSYNTAX-CHECK_FOR_ITAB.html)

`SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd                   [PROGRAM prog]\ [DIRECTORY ENTRY dir]\                   [WITH CURRENT SWITCHSTATES]\                   [INCLUDE incl]\                   [OFFSET off]\                   [MESSAGE-ID mid].`

Checks the syntax of the source code in `itab` and returns the first error message, the first line with an error, and the first word with an error in `mess`, `lin`, and `wrd`.

-   [`PROGRAM prog`](ABAPSYNTAX-CHECK_FOR_ITAB.html)\\
    Defines the program properties with reference to a program `prog`.
-   [`DIRECTORY ENTRY dir`](ABAPSYNTAX-CHECK_FOR_ITAB.html)\\
    Defines the program properties by specifying a structure in `dir` of the type `TRDIR`.
-   [`WITH CURRENT SWITCHSTATES`](ABAPSYNTAX-CHECK_FOR_ITAB.html)\\
    Defines which key configuration is used for the syntax check.
-   [`INCLUDE incl`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html)\\
    Returns the name of the include program in which the error occurs in `incl`.
-   [`OFFSET off`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html)\\
    Returns the offset of the error in the line in `off`.
-   [`MESSAGE-ID mid`](ABAPSYNTAX-CHECK_ERROR_HANDLING.html)\\
    Returns the key of the error message from the table `TRMSG` in `mid`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html