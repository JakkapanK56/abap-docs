---
title: "ABAPAT_ITAB"
description: |
  ABAPAT_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_ITAB.htm"
abapFile: "ABAPAT_ITAB.html"
keywords: ["select", "loop", "do", "if", "case", "class", "data", "internal-table", "field-symbol", "ABAPAT", "ITAB"]
---

[Short Reference](ABAPAT_SHORTREF.html)

``[`LOOP AT itab`](ABAPLOOP_AT_ITAB.html)\ [`result`](ABAPLOOP_AT_ITAB_RESULT.html)\ [[`cond`](ABAPLOOP_AT_ITAB_COND.html)].``\\ 
  `[AT FIRST.`\\ 
     `...`\\ 
   `ENDAT.]`\\ 
    ``[AT NEW [`comp1`](ABENITAB_COMPONENTS.html).``\\ 
       `...`\\ 
     `ENDAT.`\\ 
       ``[AT NEW [`comp2`](ABENITAB_COMPONENTS.html).``\\ 
         `...`\\ 
       `ENDAT.`\\ 
         `[...]]]`\\ 
           `[ ... ]`\\ 
       `[[[...]`\\ 
       ``AT END OF [`comp2`](ABENITAB_COMPONENTS.html).``\\ 
         `...`\\ 
       `ENDAT.]`\\ 
     ``AT END OF [`comp1`](ABENITAB_COMPONENTS.html).``\\ 
       `...`\\ 
     `ENDAT.]`\\ 
  `[AT LAST.`\\ 
     `...`\\ 
  `ENDAT.]`\\ 
`ENDLOOP.`

[1. `... FIRST`](#ABAP_ADDITION_1@3@)

[2. `... \{NEW\}|\{END OF\} compi`](#ABAP_ADDITION_2@3@)

[3. `... LAST`](#ABAP_ADDITION_3@3@)

The statement block of a [`LOOP`](ABAPLOOP_AT_ITAB.html) without the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) can contain control structures for [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html). The corresponding control statement is `AT`. The statements `AT` and `ENDAT` define statement blocks that are executed at [group breaks](ABENGROUP_BREAK_GLOSRY.html), that is, in the transition of one [group level](ABENGROUP_LEVEL_GLOSRY.html) to another group level. The additions of the statements `AT` define the criteria for a group break and hence the group levels. Group breaks between group levels are a result of the line structure and the processing order in which the `LOOP` reads the lines of the internal table. Within the statement blocks, the statement [`SUM`](ABAPSUM.html) can be specified to total the numeric components of a group level.

Apart from the special variants `AT FIRST` and `AT LAST`, group levels are defined using the variants `AT NEW`\\ `AT END OF` and by the consecutive lines of the internal table specified in accordance with the processing order of the loop. These lines have the same content in a group key defined by their initial part. Here, all lines of the internal table are respected without evaluating any restricting conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html).

Although it is syntactically possible to arrange `AT` control structures in any order and to nest them, however, effective group level processing is usually only achieved by the arrangement above. Here, the control structures are listed in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the `AT`\-`ENDAT` control structures are executed if a corresponding group break takes place in the current table line. Statements in the `LOOP`\-`ENDLOOP` control structure that are not executed within an `AT`\-`ENDAT` control structure are executed in each pass of the loop. If a table line with a group break is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the corresponding statement block is not executed.

The following rules must be observed for effective group level processing:

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), the content of `wa` is overwritten when the `AT`\-`ENDAT` control structure is entered, depending on the respective group level, and is reset to the content of the current line when the control structure is exited. When the additions [`ASSIGNING`](ABAPLOOP_AT_ITAB_RESULT.html) and [`REFERENCE INTO`](ABAPLOOP_AT_ITAB_RESULT.html) are used, the referenced table lines are not modified when entering and exiting the `AT`\-`ENDAT` control structure.

[Group Level Processing](ABENAT_ITAB_ABEXAS.html)

The group level is defined by the first line of the internal table. The group break takes place when this line is read. In the group level `AT FIRST`, the current group key does not contain any components.

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), all character-like components of the work area `wa` are filled with *\** when the control structure `AT FIRST` is entered and all other components are set to their initial value. In the case of an elementary line type, this applies to the entire work area. When the `AT`\-`ENDAT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

If the first line of the internal table is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the statement block of the control structure `AT FIRST` is not executed.

Display of a header and the first line of an internal table at the group level `AT FIRST`.

Group levels are defined by the beginning or end of a group of lines with the same content in the component `compi` (where `i` = `1`, `2`, and so on) and in the components on the left of `compi`. The content of these components determines the group key. The group breaks take place when the content of the component `compi` or another component on the left of `compi` changes.

The `compi` components can be specified as described in [Specification of Components](ABENITAB_COMPONENTS.html), with the restriction that access to data objects using references is not possible here. The following is therefore not possible:

Otherwise, the specified components can have any data type. The corresponding [comparison rules](ABENLOGEXP_RULES.html) apply to the evaluation. In the case of an elementary line type, only `table_line` can be specified as the group key.

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), the content of `wa` is modified as follows when the `AT`\-`ENDAT` control structure is entered:

In the case of an elementary line type, the entire work area corresponds to the current group key and remains unchanged. When the `AT`\-`ENDAT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

Display of the `carrid` column as a header for the chained content of the associated flight numbers.

The first line of the first line group is not read due to the addition `FROM 2`, which means the associated statement block after `AT NEW table_line` is not executed. The program therefore produces a message from the extended program check.

The group level is defined by the last line of the internal table. The group break takes place when this line is read. In the group level `AT LAST`, the current group key does not contain any components.

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), all character-like components of the work area `wa` are filled with *\** when the control structure `AT LAST` is entered and all other components are set to their initial value. In the case of an elementary line type, this applies to the entire work area. When the `AT`\-`ENDAT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

If the last line of the internal table is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the statement block of the control structure `AT LAST` is not executed.

Display of cumulated content during the processing of the last line.

-   A table key specified in `LOOP` in [`cond`](ABAPLOOP_AT_ITAB_COND.html) must be chosen so that it produces the required processing order of the imported lines.
-   The addition [`STEP`](ABAPLOOP_AT_ITAB_COND.html) cannot be specified. Also other restricting conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html) should not be specified. If a condition is specified, it should select consecutive line groups, including the first line in the group where the group break takes place.
-   The internal table must not be modified within the `LOOP` loop.
-   A work area `wa` specified in the `LOOP` statement after the addition `INTO` must be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of the table.
-   A field symbol `<fs>` specified in the statement `LOOP` after the addition `ASSIGNING` must be typed with the line type of the table.
-   The content of a work area [`wa`](ABAPLOOP_AT_ITAB.html) specified in the statement [`LOOP`](ABAPLOOP_AT_ITAB_RESULT.html) after the addition `INTO` cannot be modified.

-   The most common case is when the internal table is sorted exactly by the order of the components of its line type, that is, by the first component first, then by the second component, and so on. In this case, group level processing can also be expressed using a grouping with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html).
-   If possible, the use of the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) is recommended, since the grouping does not depend on the structure of the lines and the processing order in this case.
-   Group level processing with the statement `AT` is not possible in `LOOP` statements across line groups with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html), including member loops using [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html).
-   The group level processing described here can produce unexpected results when a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html) is used, which means that extended syntax check messages can occur.

-   Specifying data objects using data references
-   Specifying attributes of objects using object references

-   The components of the current group key remain unchanged.
-   All components with a character-like [flat](ABENFLAT_GLOSRY.html) data type on the right of the current control key are set to the character *\** in every place.
-   All the other components to the right of the current group key are set to their [initial value](ABENINITIAL_VALUE_GLOSRY.html).

-   Group levels defined in this way consist of the consecutive lines of the internal table that have the same content in an initial part.
-   If the first or last line of a line group is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the statement block of the control structure `AT NEW` or `AT END OF` is not executed.
-   An [obsolete variant](ABAPAT_ITAB_OBSOLETE.html) allows field symbols to also be specified, outside of classes `compi`.

-   *Cause:* Invalid substring access when the group break criterion is specified dynamically.
    *Runtime error:*\\ `AT_BAD_PARTIAL_FIELD_ACCESS`
-   *Cause:* The group break criterion is specified dynamically using the field symbol and the field symbol does not point to the `LOOP` output range.
    *Runtime error:*\\ `AT_ITAB_FIELD_INVALID`
-   *Cause:* The group break criterion is specified dynamically using `(name)` and the `name` field does not contain a valid substring name.
    *Runtime error:*\\ `ITAB_ILLEGAL_COMPONENT`
-   *Cause:* Overflow of totals with `SUM`.
    *Runtime error:*\\ `SUM_OVERFLOW`

DATA itab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE itab. \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n AT FIRST. \\n out->next\_section( 'First' ). \\n out->write( ). \\n ENDAT. \\nENDLOOP. \\nout->display( ). DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE itab. \\n\\ \\nDATA connids TYPE string. \\nFINAL(out) = cl\_demo\_output=>new( ). \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n AT NEW carrid. \\n out->next\_section( \-carrid ). \\n ENDAT. \\n connids = connids && \` \` && \-connid. \\n AT END OF carrid. \\n out->write( connids ). \\n CLEAR connids. \\n ENDAT. \\nENDLOOP. \\nout->display( ). DATA itab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( \`AA\` ) ( \`AA\` ) ( \`AA\` ) \\n ( \`BB\` ) ( \`BB\` ) ( \`BB\` ) ). \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\nLOOP AT itab ASSIGNING FIELD-SYMBOL() FROM 2. \\n AT NEW table\_line. \\n out->write( ). \\n ENDAT. \\nENDLOOP. \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE itab. \\n\\ \\nDATA carrids TYPE string. \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n carrids = carrids && \` \` && \-carrid. \\n AT LAST. \\n out->write( carrids ). \\n ENDAT. \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html