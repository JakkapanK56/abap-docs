---
title: "ABAPWRITE_TO_ITAB"
description: |
  ABAPWRITE_TO_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_TO_ITAB.htm"
abapFile: "ABAPWRITE_TO_ITAB.html"
keywords: ["do", "if", "catch", "class", "data", "internal-table", "field-symbol", "ABAPWRITE", "ITAB"]
---

[Short Reference](ABAPWRITE_TO_ITAB_SHORTREF.html)

`WRITE dobj TO itab[+off][(len)] INDEX idx`\\ 
      `[[format_options](ABAPWRITE_TO_OPTIONS.html)].`

This variant, of the statement `WRITE TO`, which is forbidden in classes, has the same effect as the allowed [variant](ABAPWRITE_TO.html), except that the formatted content is written to the line of the internal table `itab` specified in `idx`. The internal table must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The same requirements apply to the line type as to the variable [`destination`](ABAPWRITE_TO.html).

`idx` expects a data object of the data type `i`. It must be a data type. When the statement is executed, this data object must contain the index of the line to be overwritten. If the value of `idx` is less than or equal to 0, an uncatchable exception is raised. If the value of `idx` is greater than the number of table lines, no line is overwritten and `sy-subrc` is set to 4.

After the table name `itab`, [offset and length specifications](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html)\\ `off` and `len` can be made that refer to the specified table line.

This form of the statement `WRITE TO` is now only possible outside of classes and is replaced by accessing table lines using field symbols or data references. The following lines show the implementation with a field symbol:

`FIELD-SYMBOLS <line> LIKE LINE OF itab.`\\
`ASSIGN itab[ idx ] TO <line>.`\\
`WRITE dobj TO <line>[+off][(len)]``[[format_options](ABAPWRITE_TO_OPTIONS.html)].`

Formatted write of the current date into the first line of the internal table `itab`. The first statement `WRITE TO` uses the obsolete form; the second statement `WRITE TO` represents the recommended variant.

-   *Cause:* Incorrect index specification <= 0 in `idx`\\
    *Runtime error:*\\ `TABLE_INVALID_INDEX`
-   *Cause:* Negative length specification for offset/length specification.
    *Runtime error:*\\ `WRITE_TO_LENGTH_NEGATIVE`
-   *Cause:* Negative offset specification for offset/length specification.
    *Runtime error:*\\ `WRITE_TO_OFFSET_NEGATIVE`
-   *Cause:* Offset specification for offset/length specification is greater than the field length.
    *Runtime error:*\\ `WRITE_TO_OFFSET_TOOLARGE`

DATA line TYPE c LENGTH 80. \\nDATA itab LIKE TABLE OF line. \\n\\ \\nFIELD-SYMBOLS LIKE LINE OF itab. \\n\\ \\nAPPEND line TO itab. \\n\\ \\nWRITE sy-datum TO itab INDEX 1 DD/MM/YYYY. \\n\\ \\nASSIGN itab\[ 1 \] TO . \\nWRITE sy-datum TO DD/MM/YYYY. `**sy-subrc**` **Meaning** 0 The data object specified in `source_name` and the line specified in `idx` were found and the statement was executed. 4 The data object specified in `source_name` or the line specified in `idx` were not found and the statement was not executed. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html