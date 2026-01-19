---
title: "ABAPREAD_DATASET_SHORTREF"
description: |
  ABAPREAD_DATASET_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_DATASET_SHORTREF.htm"
abapFile: "ABAPREAD_DATASET_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPREAD", "DATASET", "SHORTREF"]
---

[Reference](ABAPREAD_DATASET.html)

`READ DATASET dset INTO dobj [MAXIMUM LENGTH mlen]\                              [[ACTUAL] LENGTH alen].`

Imports data from the file specified in `dset` to the data object `dobj`.

-   `MAXIMUM LENGTH mlen`\\
    Restricts the number of characters and bytes to be read from the file to `mlen`.
-   `[ACTUAL] LENGTH alen`\\
    Returns the number of characters and bytes read from the file to `alen`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html