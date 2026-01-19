---
title: "ABAPSPLIT"
description: |
  ABAPSPLIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSPLIT.htm"
abapFile: "ABAPSPLIT.html"
keywords: ["loop", "do", "while", "if", "case", "data", "internal-table", "ABAPSPLIT"]
---

`SPLIT dobj AT sep INTO`\\ 
      `\{\ \{result1 result2 [...]\}\ |\ \{TABLE result_tab\}\ \}`\\ 
      `[IN \{CHARACTER|BYTE\} MODE].`

[`... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ONE_ADD@1@)

The content of the operand `dobj` is split into segments in accordance with the sequence of separators in `sep` and the results are either stored in individual target fields `result1 result2 ...` or in the lines of an internal table `result_tab`.

\\ `dobj` and `sep` are [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

The system searches the operand `dobj` from left to right for all occurrences of the content of the operand `sep`. The search is case-sensitive. All segments between the start of the operand and the first occurrence, between the occurrences, and between the last occurrence and the end of the operand are assigned one by one to the individual target fields `result1 result2 ...`, or appended to the internal table `result_tab` as follows.

If the content of the operand `sep` is found immediately at the start of `dobj`, or occurs in direct succession in `dobj`, the result of the split is an empty string. If the content of `sep` is at the end of `dobj`, the search is completed there and no further separation takes place to the right of this point.

If the content of the operand `sep` is not found or is an empty string, the result of the split is a single segment that contains the entire content of `dobj`, and which is assigned to the first individual target field or the first line of the internal table.

In character string processing, trailing blanks are respected in separators `sep` of fixed length. If the operand `dobj` has a fixed length, any trailing blanks are ignored in the operand `dobj` and in the segments created by the split. If the operand `dobj` has the type `string`, any trailing blanks are respected in the operand `dobj` and in the segments created by the split.

The text field `text` is separated at its blanks into the three strings `str1`, `str2`, and `str3`, and also into an internal table with the line type `string`. Since the three strings are not sufficient for all seven parts, `str3` contains *drag it is getting old* after the split, while the internal table contains seven lines; one for each word in `text`.

A text string `text1` and a text field `text2` have the same content and are split into a table in the same way. When the text string is split, the segments contain trailing blanks. This is not the case when the text field is split.

The following `SPLIT` statement extracts all strings of digits in a text string to an internal table.

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is performed. Depending on the type of processing, the operands `dobj`, `sep`, and the target fields `result1 result2 ...` or the lines of the internal table `result_tab` must be byte-like or character-like.

The byte string `xstr` is split into an internal table with line type `xstring` at bytes with the value hexadecimal 20, which stands for a blank in code page UTF-8.

-   At least two target fields `result1 result2 ...` must be specified. The following can be specified for the target fields:

-   Existing character-like or byte-like variables.
-   Inline declarations with [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). If `IN CHARACTER MODE` is used, the declared variables are of the type `string`; if `IN BYTE MODE` is used, they are of the type `xstring`.

-   The following can be specified for the internal table `result_tab`:

-   An existing internal table with character-like or byte-like line type. It must be a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The table is initialized before being split.
-   An inline declaration with [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). A standard table is declared with the table line as the primary table key and without secondary table keys. If `IN CHARACTER MODE` is used, the line type is of the type `string`; if `IN BYTE MODE` is used, it is of the type `xstring`.

-   If the target fields `result1 result2 ...` or the lines of the internal table `result_tab` have a fixed length and this length is not sufficient for a segment, the segment is truncated on the right and `sy-subrc` is set to 4. If the length is greater than the length of the segment, it is padded with blanks or hexadecimal 0 on the right. If the target fields `result1 result2 ...` or the lines of the internal table `result_tab` are strings, their length is adjusted to that of the associated segment.
-   If not enough target fields `result1 result2 ...` are specified to include all the segments, `dobj` is only split until all the target fields `result1 result2 ...` have been assigned values, except for the last one. The remaining content of `dobj` is then assigned to the final operand, without being split.
-   The segments are assigned directly while ignoring the conversion rules.
-   If more target fields `result1 result2 ...` are specified than required, the surplus target fields with fixed lengths contain blanks or hexadecimal 0 after the statement and surplus strings are initial.

-   Provided that enough target fields are specified or that the segments are stored in an internal table, the number of segments created is determined by the number of separators found, as follows:

-   If the last occurrence is not at the end of the operand, the number of segments matches the number of occurrences plus 1.
-   If the last occurrence is at the end of the operand, the number of segments matches the number of occurrences.

-   In the case of target fields or table lines with the type `n`, `d`, or `t`, the type-dependent assignment rules and initial values are not relevant. The segments are assigned as unconverted segments and any surplus target fields are filled with blanks.
-   All specified single fields `result1 result2 ...` are given values.
-   To access the segments of a character string directly in an operand position, a [segment function](ABENSEGMENT_FUNCTIONS.html) can be used that covers some of the functions of the statement `SPLIT`.

DATA text TYPE string. \\n\\ \\ntext = \`What a drag it is getting old\`. \\n\\ \\nSPLIT text AT space INTO: FINAL(str1) FINAL(str2) FINAL(str3), \\n TABLE FINAL(itab). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n text1 TYPE string VALUE \` 1 : 2 : 3 \`, \\n text2 TYPE c LENGTH 11 VALUE ' 1 : 2 : 3 '. \\n\\ \\nSPLIT text1 AT ':' INTO TABLE DATA(segments). \\nLOOP AT segments INTO DATA(segment). \\n out->write( segment && \`<--\` ). \\nENDLOOP. \\n\\ \\nout->line( ). \\n\\ \\nSPLIT text2 AT ':' INTO TABLE segments. \\nLOOP AT segments INTO segment. \\n out->write( segment && \`<--\` ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(text) = \`aaa123bbb456ccc789\`. \\ncl\_demo\_input=>request( CHANGING field = text ). \\n\\ \\nSPLIT condense( replace( val = text \\n pcre = \`\\\\D\` \\n with = \` \` \\n occ = 0 ) ) AT \` \` INTO TABLE FINAL(itab). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(xstr) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \`Like a Hurricane\` ). \\n\\ \\nSPLIT xstr AT CONV xstring( '20' ) \\n INTO TABLE FINAL(xtab) IN BYTE MODE. \\n\\ \\nLOOP AT xtab INTO xstr. \\n out->write( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ). \\nENDLOOP. \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 The segments were passed to the target fields or the internal table without being truncated. 4 At least one of the segments was truncated on the right when passed to the target fields or internal table. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html