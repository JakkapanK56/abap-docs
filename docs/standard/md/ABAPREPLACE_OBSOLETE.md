---
title: "ABAPREPLACE_OBSOLETE"
description: |
  ABAPREPLACE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPLACE_OBSOLETE.htm"
abapFile: "ABAPREPLACE_OBSOLETE.html"
keywords: ["insert", "do", "while", "if", "data", "ABAPREPLACE", "OBSOLETE"]
---

[Short Reference](ABAPREPLACE_PATTERN_SHORTREF.html)

`REPLACE substring WITH new INTO dobj          [IN \{BYTE|CHARACTER\} MODE]\          [LENGTH len].`

[1. `... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ADDITION_1@3@)

[2. `... LENGTH len`](#ABAP_ADDITION_2@3@)

This statement searches a character string or byte chain `dobj` for the substring specified in `substring` and replaces the first character string or byte string in `dobj` that matches `substring` with the content of the data object `new`.

The memory areas of `substring` and `new` must not overlap, otherwise the result is undefined. If `substring` is an empty string, the position in front of the first character or byte of the search range is found and the content of `new` is inserted in front of the first character.

If the length of the intermediate result is longer than the length of `dobj`, data objects with fixed lengths are truncated on the right. If the length of the intermediate result is shorter than the length of `dobj`, data objects of fixed length are padded on the right with blanks or hexadecimal zeros. Data objects of variable length are adjusted accordingly.

In character string processing, the trailing blanks are respected for data objects `dobj`, `substring`, and `new` of type `c`, `d`, `n`, or `t`.

This variant of the `REPLACE` statement has been replaced by the variant [`REPLACE`](ABAPREPLACE_IN_PATTERN.html).

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is carried out. Depending on the processing type, the data objects `substring`, `new`, and `dobj` must be character-like or byte-like.

If the addition `LENGTH` is not specified, all the data objects involved are evaluated in their entire length. If the addition `LENGTH` is specified, only the first `len` characters or bytes of `substring` are used for the search. `len` expects a data object of the type `i`.

After the replacements, `text1` contains the complete content *I should know that You know*, while `text2` has the cut off content *I should know that*.

DATA: text1 TYPE string VALUE 'I know You know', \\n text2 TYPE c LENGTH 18 VALUE 'I know You know', \\n substring TYPE string VALUE 'know', \\n new TYPE string VALUE 'should know that'. \\n\\ \\nREPLACE substring WITH new INTO text1. \\nREPLACE substring WITH new INTO text2. `**sy-subrc**` **Meaning** 0 The substring in `substring` was replaced in the target field `dobj` by the content of `new`. 4 The substring in `substring` could not be replaced in the target field `dobj` by the content of `new`. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html