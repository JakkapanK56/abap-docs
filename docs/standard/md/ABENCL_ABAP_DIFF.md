---
title: "ABENCL_ABAP_DIFF"
description: |
  ABENCL_ABAP_DIFF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_DIFF.htm"
abapFile: "ABENCL_ABAP_DIFF.html"
keywords: ["insert", "update", "delete", "if", "case", "method", "class", "data", "internal-table", "ABENCL", "ABAP", "DIFF"]
---

The class `CL_ABAP_DIFF` compares the content of compatible [index tables](ABENINDEX_TABLE_GLOSRY.html) and returns information about any differences found.

[itab -Using `CL_ABAP_DIFF`](ABENCL_ABAP_DIFF_ABEXA.html)

-   The static factory method `CREATE` creates an instance of the class and returns a reference for working with the instance methods. Its importing parameters adjust the granularity of the difference determination:

-   `CASING_MODE` determines whether the comparison of character strings is case sensitive or not.
-   `CASING_MODE` determines whether leading blanks of character strings are respected or not.
-   `TRAILING_SPACES_MODE` determines whether trailing blanks of character strings are respected or not.
-   `OUTPUT_MODE` determines whether the output is shown as insert/delete or insert/delete/update operations.

-   The instance method `DIFF` compares the content of two compatible [index tables](ABENINDEX_TABLE_GLOSRY.html). If the content is different, it returns an internal table that shows how the content of the first internal table can be transformed to the content of the second internal table by insert/delete or optionally by insert/delete/update operations.
-   The instance method `DIFF_WITH_LINE_REF` works as `DIFF` but returns an extended result with references to the original table lines.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abenitab\_system\_classes.html