---
title: "ABAPGENERATE_SHORTREF"
description: |
  ABAPGENERATE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGENERATE_SHORTREF.htm"
abapFile: "ABAPGENERATE_SHORTREF.html"
keywords: ["if", "internal-table", "ABAPGENERATE", "SHORTREF"]
---

[Reference](ABAPGENERATE_SUBROUTINE_POOL.html)

`GENERATE SUBROUTINE POOL itab NAME prog    [MESSAGE mess]\    [INCLUDE incl]\    [LINE lin]\    [WORD wrd]\    [OFFSET off]\    [MESSAGE-ID mid]\    [SHORTDUMP-ID sid].`

Generates a temporary [subroutine pool](ABENSUBROUTINE_POOL_GLOSRY.html) from the content of an internal table `itab`. Its name is returned in `prog`.

-   [`MESSAGE mess`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a syntax error, returns the first error message in `mess`.
-   [`INCLUDE incl`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a syntax error, returns the name of the include program in which the error occurred in `incl`.
-   [`LINE lin`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a syntax error, returns the first line with an error in `lin`.
-   [`WORD wrd`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a syntax error, returns the first word with an error in `wrd`.
-   [`OFFSET off`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a syntax error, returns the offset of the first error in the line in `off`.
-   [`MESSAGE-ID mid`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a syntax error, returns the key of the first error message from the table `TRMSG` in `mid`.
-   [`SHORTDUMP-ID sid`](ABAPGENERATE_SUBR_ERROR_HANDLING.html)\\
    If there is a generation error, returns the ID of the error from the table `SNAPT` in `sid`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html