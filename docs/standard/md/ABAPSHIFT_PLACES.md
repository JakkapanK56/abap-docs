---
title: "ABAPSHIFT_PLACES"
description: |
  ABAPSHIFT_PLACES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSHIFT_PLACES.htm"
abapFile: "ABAPSHIFT_PLACES.html"
keywords: ["do", "if", "case", "data", "ABAPSHIFT", "PLACES"]
---

[Short Reference](ABAPSHIFT_SHORTREF.html)

`... \{BY num PLACES\}\ |\ \{UP TO substring\} ...`

[1. `... BY num PLACES ...`](#ABAP_VARIANT_1@1@)

[2. `... UP TO substring ...`](#ABAP_VARIANT_2@1@)

The content of `dobj` is shifted to the left or right by the positions specified in `num`, depending on the specification in [`direction`](ABAPSHIFT_DIRECTION.html). `num` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`. If the content of `num` is less than or equal to 0, the content of the data object `dobj` remains unchanged.

The statement `FIND` determines the offset of the word *you* in `text` and shifts its content by this length to the left or right. After the shift, `text` contains *you know* and is eight characters long.

In the data object `dobj`, the first substring is searched for whose content matches that of `substring`. The search is case-sensitive. Depending on the specification in [`direction`](ABAPSHIFT_DIRECTION.html), the content of the data object `dobj` is shifted to the left or right until the byte string or character string contained in `substring` is left-aligned or right-aligned at the position that is at the beginning or end of the data object `dobj` before the shift.

`substring` expects a character-like or byte-like data object. If `substring` is an empty string, the place in front of the first character or byte is found. There is no shift to the left but a shift by the entire length of `dobj` to the right.

In character string processing, `substring` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html); in data objects, `substring` with a fixed length respects the trailing blanks.

For data objects of fixed length, the substring searched for after the shift is either left-aligned at the beginning or right-aligned at the end of the data object, depending on the direction. In the case of strings, the shift makes the data object longer on the right, which means that the substring is not at the right margin after the shift.

This example has the same result as the previous example. However, here the search for *you* is not performed in the statement `SHIFT` itself.

DATA: text TYPE string VALUE \`I know you know\`, \\n off TYPE i. \\n\\ \\nFIND 'you' IN text MATCH OFFSET off. \\n\\ \\nSHIFT text BY off PLACES. DATA text TYPE string VALUE \`I know you know \`. \\n\\ \\nSHIFT text UP TO 'you'. `sy-subrc` **Meaning** 0 The substring in `substring` was found in the data object `dobj` and its content was moved accordingly. 4 The substring in `substring` was not found in the data object `dobj` and its content remain unchanged. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapshift.html