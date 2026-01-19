---
title: "ABAPTRANSFER_SHORTREF"
description: |
  ABAPTRANSFER_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTRANSFER_SHORTREF.htm"
abapFile: "ABAPTRANSFER_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPTRANSFER", "SHORTREF"]
---

[Reference](ABAPTRANSFER.html)

`TRANSFER dobj TO dset [LENGTH len]\                        [NO END OF LINE].`

Transfers the data of the data object `dobj` to the file specified in `dset`.

-   `LENGTH len`\\
    Restricts the number of characters or bytes to be transferred to `len`.
-   `NO END OF LINE`\\
    Prevents the attachment of an end-of-line marker for text files or legacy text files.

abenabap.html abenabap\_reference.html abenabap\_shortref.html