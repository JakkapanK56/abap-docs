---
title: "ABAPCONVERT_TEXT"
description: |
  ABAPCONVERT_TEXT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCONVERT_TEXT.htm"
abapFile: "ABAPCONVERT_TEXT.html"
keywords: ["while", "if", "case", "catch", "data", "internal-table", "ABAPCONVERT", "TEXT"]
---

`CONVERT TEXT text INTO SORTABLE CODE hex.`

The content of the operand `text` is converted to a sortable byte string and the result is assigned to the target field `hex`. The data object `text` itself remains unchanged.

The operand `text` must be of the type `c` or `string`. `text` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). The following can be specified for `hex`:

The content of `text` must contain valid characters. The sortable byte string is defined as a platform-dependent string in such a way that a size comparison or standard sorting of multiple of these fields produces an order in which the source fields `text` are sorted according to the [locale](ABENLOCALE_GLOSRY.html) defined in the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). The text environment is set when an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is opened.

If the target field `hex` is of type `x` and its length is not sufficient for the byte string, an uncatchable exception is raised. If the length is greater than that of the byte string, it is filled with hexadecimal 0 on the right. The sufficient length for all platforms is calculated as 24 times the length of `text` plus 24, but can be significantly shorter for some platforms. If `hex` is of type `xstring`, its length is adapted automatically.

The statement `CONVERT TEXT` is mainly intended to fill an index column in internal tables where the column can be used to sort the lines of the table according to a locale. Since internal tables can also be sorted directly according to a locale using the addition `AS TEXT` of the statement [`SORT`](ABAPSORT_ITAB.html), `CONVERT TEXT` is particularly suited for the following cases:

The characters *a* and *Z* are compared directly after they have been converted by `CONVERT TEXT`. While *Z* is in front of *a* for most code pages in direct comparisons, the comparison of the converted values returns the expected textual order. See also the [executable example](ABENSORT_TEXT_ABEXA.html) for `SORT` for internal tables.

-   An existing byte-like variable.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `xstring` is declared.

-   An internal table should be sorted according to a locale and then searched binarily using the statement `READ TABLE` or using a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html).
-   An internal table should be sorted more than once according to a locale. Using a sortable byte string ensures better performance than when using the addition `AS TEXT`.
-   Indexes for DDIC database tables should be structured according to a locale.
-   Textual comparisons are to be made between character-like data objects.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nIF 'a' > 'Z'. \\n out->write\_text( \`'a' > 'Z'\` ). \\nELSE. \\n out->write\_text( \`'a' < 'Z'\` ). \\nENDIF. \\n\\ \\nCONVERT TEXT: 'a' INTO SORTABLE CODE FINAL(ax), \\n 'Z' INTO SORTABLE CODE FINAL(zx). \\n\\ \\nIF ax > zx. \\n out->write\_text( \`'a' > 'Z'\` ). \\nELSE. \\n out->write\_text( \`'a' < 'Z'\` ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html