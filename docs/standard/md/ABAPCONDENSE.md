---
title: "ABAPCONDENSE"
description: |
  ABAPCONDENSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONDENSE.htm"
abapFile: "ABAPCONDENSE.html"
keywords: ["if", "data", "ABAPCONDENSE"]
---

[Short Reference](ABAPCONDENSE_SHORTREF.html)

`CONDENSE text [NO-GAPS].`

The `CONDENSE` statement removes any leading and trailing blanks from the variable `text` and handles blanks within the remaining character string as follows:

The data object `text` must be character-like. If the data object has a fixed length, the space created by condensing is padded with blanks on the right. If the data object is of the type `string`, its length is adapted to the result of the condensing.

A character string can also be condensed in an operand position using a [condense function](ABENCONDENSE_FUNCTIONS.html) that includes the functionality of the statement `CONDENSE`.

The [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html)\\ `sentence` contains only character-like components and can therefore be assigned to the string `text`. After the condensing using the statement `CONDENSE`, `text` contains *She feeds you tea and oranges*. Before condensing, the words in `text` are 30 places apart from one another.

-   Without the optional `NO-GAPS` addition, all substrings of the remaining character string that contain nothing but blanks are replaced by exactly one blank.
-   With the optional `NO-GAPS` addition, all substrings of the remaining character string that contain nothing but blanks are removed completely.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: BEGIN OF sentence, \\n word1 TYPE c LENGTH 30 VALUE 'She', \\n word2 TYPE c LENGTH 30 VALUE 'feeds', \\n word3 TYPE c LENGTH 30 VALUE 'you', \\n word4 TYPE c LENGTH 30 VALUE 'tea', \\n word5 TYPE c LENGTH 30 VALUE 'and', \\n word6 TYPE c LENGTH 30 VALUE 'oranges', \\n END OF sentence, \\n text TYPE string. \\n\\ \\ntext = sentence. \\nout->write( text ). \\n\\ \\nCONDENSE text. \\nout->write( text ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html