---
title: "ABAPREPLACE_IN_POSITION"
description: |
  ABAPREPLACE_IN_POSITION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREPLACE_IN_POSITION.htm"
abapFile: "ABAPREPLACE_IN_POSITION.html"
keywords: ["do", "if", "data", "ABAPREPLACE", "POSITION"]
---

`REPLACE SECTION [OFFSET off]\ [LENGTH len] OF dobj WITH new`\\ 
                `[IN \{CHARACTER|BYTE\} MODE].`

[`... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ONE_ADD@1@)

In position-based replacements, the section in `dobj` is replaced starting at the offset specified in `off` for the length specified in `len` with the content of the operand `new`. The same applies to the additions `OFFSET` and `LENGTH` as to [`FIND SECTION OF`](ABAPFIND_SECTION_OF.html).

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, `dobj` and `new` must be character-like or byte-like.

The statement `FIND` determines the offset and length of the first word *know* in the data objects `text1` and `text2` and to replace this section in a position-based manner in `text1` and `text2` with *should know that*. After the first `REPLACE` statement, `text1` contains the complete content *I should know that you know* and `sy-subrc` contains 0. After the second `REPLACE` statement, `text2` contains the truncated content *I should know that* and `sy-subrc` contains 2.

`CX_SY_RANGE_OUT_OF_BOUNDS`

-   *Cause:* Specified offset or length violated the bounds of the string `dobj`.
    *Runtime error:*\\ `REFI_WRONG_SECTION`

DATA: text1 TYPE string, \\n text2 TYPE c LENGTH 18, \\n off TYPE i, \\n len TYPE i. \\n\\ \\ntext1 = text2 = 'I know you know'. \\n\\ \\nFIND 'know' IN text1 MATCH OFFSET off \\n MATCH LENGTH len. \\n\\ \\nREPLACE SECTION OFFSET off LENGTH len OF: \\n text1 WITH 'should know that', \\n text2 WITH 'should know that'. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapreplace.html