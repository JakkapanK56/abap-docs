---
title: "ABENSTRING_PROCESSING_STATEMENTS"
description: |
  ABENSTRING_PROCESSING_STATEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_PROCESSING_STATEMENTS.htm"
abapFile: "ABENSTRING_PROCESSING_STATEMENTS.html"
keywords: ["if", "case", "data", "ABENSTRING", "PROCESSING", "STATEMENTS"]
---

The following table shows the key words for character and byte string processing and the processing supported by these statements.

There is a strict split between character string processing and byte string processing. Each of the key words in the table that supports both character string and byte string processing has the optional addition

`... IN \{CHARACTER|BYTE\} MODE ...`

This addition determines which processing is used. If this addition is not specified, character string processing is performed in these statements.

-   In most cases, [expressions and functions for character string processing](ABENSTRING_PROCESSING_EXPR_FUNC.html) can be used instead of the above statements for character string processing. These have the advantage that expressions can be specified for all operands, which is only possible to a very limited extent in the above statements.
-   In addition to the statements shown here, there is a range of [obsolete statements for character and byte string processing](ABENCHARACTER_STRING_OBSOLETE.html).

**Keyword** **Character String Processing** **Byte String Processing** [`CONCATENATE`](ABAPCONCATENATE.html) X X [`FIND`](ABAPFIND.html) X X [`REPLACE`](ABAPREPLACE.html) X X [`SHIFT`](ABAPSHIFT.html) X X [`SPLIT`](ABAPSPLIT.html) X X [`CONDENSE`](ABAPCONDENSE.html) X - [`CONVERT TEXT`](ABAPCONVERT_TEXT.html) X - [`OVERLAY`](ABAPOVERLAY.html) X - [`TRANSLATE`](ABAPTRANSLATE.html) X - [`WRITE TO`](ABAPWRITE_TO.html) X - [`SET BIT`](ABAPSET_BIT.html) - X [`GET BIT`](ABAPGET_BIT.html) - X abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html