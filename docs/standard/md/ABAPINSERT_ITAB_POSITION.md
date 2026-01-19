---
title: "ABAPINSERT_ITAB_POSITION"
description: |
  ABAPINSERT_ITAB_POSITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_ITAB_POSITION.htm"
abapFile: "ABAPINSERT_ITAB_POSITION.html"
keywords: ["select", "insert", "update", "delete", "loop", "if", "case", "try", "catch", "class", "data", "internal-table", "ABAPINSERT", "ITAB", "POSITION"]
---

[Short Reference](ABAPINSERT_ITAB_SHORTREF.html)

`... \{TABLE itab\}`\\ 
  `|\ \{itab INDEX idx\}`\\ 
  `|\ \{itab\} ...`

[1. `... TABLE itab`](#ABAP_ALTERNATIVE_1@2@)

[2. `... itab INDEX idx`](#ABAP_ALTERNATIVE_2@2@)

[3. `... itab`](#ABAP_ALTERNATIVE_3@2@)

These alternatives specify the position in the internal table `itab` at which lines are inserted. In the variant with the addition `TABLE`, the position of the insert is specified using the primary table key. In any of the other variants, a line number from the primary table index is used. The latter is only possible for [index tables](ABENINDEX_TABLE_GLOSRY.html).

The insert position is determined exclusively using either the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) or the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) only. For the [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) in the internal table, the system checks for uniqueness and adds the new table line to the corresponding administration (hash administration, secondary table index). In the case of secondary keys, the administration is updated before the next access; for non-unique secondary keys, it is updated before the secondary key is used again.

The lines to be inserted [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html) must be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of the internal table. Depending on the table category, each line is inserted as follows:

If the internal table has one or more unique table keys, no entries are inserted that would produce duplicate entries in one of the unique table keys. When single lines are inserted, `sy-subrc` is set to 4 if a duplicate entry with respect to the primary key were to be produced, and a catchable exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised if a duplicate entry with respect to a secondary key were to be produced. If multiple lines are inserted, an uncatchable exception is raised.

If the primary table key is used, it should be noted that this key can be the [standard key](ABENSTANDARD_KEY_GLOSRY.html) that covers all character-like and byte-like components if the line type is structured. An empty standard key is possible only for standard tables. In these tables, `INSERT` always works like `APPEND` in this variant.

Filling of an internal table `connection_tab` with data from the database table `spfli`. Single lines are inserted using the primary table key and are filled with the content of the work area `connection`. Since the internal table has a unique primary key, any duplicate entries are discarded. The better performing [`SELECT`](ABAPSELECT.html) statement, in which the internal table is specified directly after [`INTO TABLE`](ABAPINTO_CLAUSE.html), could raise an exception due to the uniqueness of the primary table key.

This variant can only be used for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) and [sorted tables](ABENSORTED_TABLE_GLOSRY.html). Each of the lines to be inserted [`line_spec`](ABAPINSERT_ITAB_LINESPEC.html) is inserted before the line with the line number `idx` in the primary table index. The line numbers in the primary table index of the following lines are increased by one. `idx` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`.

If `idx` contains a value that corresponds to the number of existing table lines plus one, the new line is appended as the last line to the internal table. If `idx` contains a greater value, no line is inserted and `sy-subrc` is set to 4.

An uncatchable exception is raised in the following cases:

If a single line to be inserted produces a duplicate entry in a unique secondary table key, a catchable exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised.

Insertion of a line after a previously searched for line.

This variant is only possible within a [`LOOP`](ABAPLOOP_AT_ITAB.html) across the same internal table and if the addition [`USING KEY`](ABAPLOOP_AT_ITAB_COND.html) is not specified in the `LOOP`. Each line to be inserted can be inserted in front of the current line in the `LOOP`.

If the current line was already deleted in the same loop, however, the behavior is undefined.

This alternative is not recommended. Instead, the addition `INDEX` should be used to specify the line number explicitly.

Conditional insertion of a line in front of every line in an internal table.

-   For [standard tables](ABENSTANDARD_TABLE_GLOSRY.html), each new line is appended as the last line to the internal table regardless of the primary table key.
-   For [sorted tables](ABENSORTED_TABLE_GLOSRY.html), each new line is inserted into the sort order of the internal table in accordance with its key values with respect to the primary key. The line numbers in the primary table index of the following lines are increased by one. If the internal table has a non-unique key, duplicate entries are inserted before the existing line.
-   In [hashed tables](ABENHASHED_TABLE_GLOSRY.html), each new line is inserted into the internal table by the hash administration in accordance with its key values with respect to the primary key.

-   If `idx` contains a value less than or equal to 0.
-   If a single line to be inserted would produce a duplicate entry in a unique primary or secondary table key.
-   If a block of lines to be inserted would produce a duplicate entry in a unique primary table key.
-   If a line to be inserted would disrupt the sort order of a sorted table.
-   Modifying the sort order with respect to a sorted secondary key, however, never raises an exception. Instead, the associated secondary index is either updated directly ([direct update](ABENDIRECT_UPDATE_GLOSRY.html)) or updated after a delay ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)).

SELECT cityfrom, cityto, distid, distance \\n FROM spfli \\n INTO @FINAL(connection). \\n DATA connection\_tab LIKE SORTED TABLE OF connection \\n WITH UNIQUE KEY cityfrom cityto \\n distid distance. \\n INSERT connection INTO TABLE connection\_tab. \\nENDSELECT. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA html TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nhtml = VALUE #( ( \`\` ) \\n ( \`\` ) \\n ( \`\` ) \\n ( \`\` ) ). \\n\\ \\nFIND \`\` IN TABLE html MATCH LINE FINAL(idx). \\n\\ \\nINSERT \`**Text**\` INTO html INDEX idx + 1. \\n\\ \\nout->write\_html( concat\_lines\_of( html ) ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( CONV #( i ) ) ). \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n IF conv i( ) / 2 \* 2 = CONV i( ). \\n INSERT 'Pair' INTO itab. \\n ELSE. \\n INSERT 'Impair' INTO itab. \\n ENDIF. \\nENDLOOP. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapinsert\_itab.html