---
title: "ABENCL_ABAP_GZIP"
description: |
  ABENCL_ABAP_GZIP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_GZIP.htm"
abapFile: "ABENCL_ABAP_GZIP.html"
keywords: ["method", "class", "data", "ABENCL", "ABAP", "GZIP"]
---

These classes offer a range of methods that enable text in text fields or text strings, or binary data in byte fields or byte strings to be compressed or decompressed using `GZIP`.

For more information, see the individual classes and methods.

Compression and decompression of text.

-   `CL_ABAP_GZIP`
-   `CL_ABAP_GZIP_BINARY_STREAM`
-   `CL_ABAP_GZIP_TEXT_STREAM`
-   `CL_ABAP_UNGZIP_BINARY_STREAM`
-   `CL_ABAP_UNGZIP_TEXT_STREAM`

DATA zip TYPE xstring. \\ncl\_abap\_gzip=>compress\_text( \\n EXPORTING text\_in = \`Hello!\` \\n IMPORTING gzip\_out = zip ). \\n\\ \\nDATA txt TYPE string. \\ncl\_abap\_gzip=>decompress\_text( \\n EXPORTING gzip\_in = zip \\n IMPORTING text\_out = txt ). \\n\\ \\nASSERT txt = \`Hello!\`. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abencl\_abap\_string\_utilities.html