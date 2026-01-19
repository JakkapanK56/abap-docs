---
title: "ABAPSEARCH_ITAB"
description: |
  ABAPSEARCH_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSEARCH_ITAB.htm"
abapFile: "ABAPSEARCH_ITAB.html"
keywords: ["select", "do", "while", "if", "case", "data", "internal-table", "ABAPSEARCH", "ITAB"]
---

[Short Reference](ABAPSEARCH_SHORTREF.html)

`SEARCH itab FOR pattern [IN \{CHARACTER|BYTE\} MODE]`\\ 
       `[STARTING AT idx1]\ [ENDING AT idx2]`\\ 
       `[ABBREVIATED]`\\ 
       `[AND MARK].`

[1. `... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ADDITION_1@3@)

[2. `... [STARTING AT idx1]\ [ENDING AT idx2]`](#ABAP_ADDITION_2@3@)

[3. `... ABBREVIATED`](#ABAP_ADDITION_3@3@)

[4. `... AND MARK`](#ABAP_ADDITION_4@3@)

This statement searches the lines of the [index table](ABENINDEX_TABLE_GLOSRY.html)\\ `itab` for a pattern specified in `pattern`. `SEARCH` cannot be used for [hashed tables](ABENHASHED_TABLE_GLOSRY.html) and not for tables with [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The statement always searches the internal table and does not search any [header line](ABENHEADER_LINE_GLOSRY.html) that might exist.

For `pattern`, a character-like or byte-like data object can be specified, depending on the processing type. The pattern in `pattern` can have the same forms as the statement [`SEARCH`](ABAPSEARCH-.html) has for character-like or byte-like string processing.

The search is terminated at the first hit and `sy-tabix` is set to the index of the table line found. `sy-fdpos` is set to the offset of the character string or byte string found or word found in the table line. If the pattern is not found, `sy-fdpos` and `sy-tabix` are set to 0.

The addition `IN CHARACTER MODE` or `IN BYTE MODE` is used to determine whether [character or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. The line type of the internal table must be suitable for the selected processing type. If no addition is specified, the search is performed character by character.

The additions `STARTING AT` and `ENDING AT` can be used to restrict the search to just some of the table lines of table `itab`. `idx1` and `idx2` expect data objects of the type `i`. The value in `idx1` specifies from which line and to which line the value `idx2` is searched for. If only one of the additions is specified, the search is performed from the first to the last line.

The search is not performed and `sy-subrc` is set to 4, if:

In character-like searches, it is possible to specify an abbreviated pattern in `pattern` for character string processing by using the addition `ABBREVIATED`, like in the statement [`SEARCH`](ABAPSEARCH-.html).

When searching character by character, it is possible to transform a character string or a word found in `itab` to uppercase using the statement `AND MARK` (just as with the statement [`SEARCH` for character string processing](ABAPSEARCH-.html)).

The search character by character is successful and sets `sy-tabix` to the index (2) of the corresponding line and `sy-fdpos` to the offset (7) of the word *see* in the line. After the statement is executed, the second table line contains the content *you'll SEE the line* specified by the addition `AND MARK`.

-   Instead of the statement `SEARCH`, the statement [`FIND IN TABLE`](ABAPFIND_ITAB.html) should be used whenever possible.
-   While `SEARCH` supports all [index tables](ABENINDEX_TABLE_GLOSRY.html), `FIND IN TABLE` supports only [standard tables](ABENSTANDARD_TABLE_GLOSRY.html).
-   See also [Migrating `SEARCH` to `FIND`](ABENMIGRATE_SEARCH_TO_FIND.html).

-   the value of `idx1` or `idx2` is less than 1
-   the value of `idx1` is greater than the number of lines in `itab`
-   the value of `idx2` is less than the value of `idx1`

DATA text\_table TYPE TABLE OF string. \\n\\ \\nAPPEND: 'Sweet child in time' TO text\_table, \\n 'you''ll see the line' TO text\_table, \\n 'the line between' TO text\_table, \\n 'good and bad.' TO text\_table. \\n\\ \\nSEARCH text\_table FOR '.see.' AND MARK. `**sy-subrc**` **Meaning** 0 Pattern found in `itab`. 4 Pattern not found in `itab`. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html