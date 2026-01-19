---
title: "Group Level Processing"
description: |
  The group level is defined by the first line of the internal table. The group break takes place when this line is read. In the group level `AT FIRST`, the current group key does not contain any components. If the addition `INTO wa`(ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement `LOOP`(AB
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPAT_ITAB.htm"
abapFile: "ABAPAT_ITAB.html"
keywords: ["select", "loop", "do", "if", "case", "data", "internal-table", "field-symbol", "ABAPAT", "ITAB"]
---

`[LOOP AT itab](ABAPLOOP_AT_ITAB.html)\ [result](ABAPLOOP_AT_ITAB_RESULT.html)\ [[cond](ABAPLOOP_AT_ITAB_COND.html)].`\\
`[AT FIRST.`\\
`...`\\
`ENDAT.]`\\
`[AT NEW [comp1](ABENITAB_COMPONENTS.html).`\\
`...`\\
`ENDAT.`\\
`[AT NEW [comp2](ABENITAB_COMPONENTS.html).`\\
`...`\\
`ENDAT.`\\
`[...]]]`\\
`[ ... ]`\\
`[[[...]`\\
`AT END OF [comp2](ABENITAB_COMPONENTS.html).`\\
`...`\\
`ENDAT.]`\\
`AT END OF [comp1](ABENITAB_COMPONENTS.html).`\\
`...`\\
`ENDAT.]`\\
`[AT LAST.`\\
`...`\\
`ENDAT.]`\\
`ENDLOOP.`

[1. `... FIRST`](#ABAP_ADDITION_1@3@)

[2. `... \{NEW\}|\{END OF\} compi`](#ABAP_ADDITION_2@3@)

[3. `... LAST`](#ABAP_ADDITION_3@3@)

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

The statement block of a [`LOOP`](ABAPLOOP_AT_ITAB.html) without the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) can contain control structures for [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html). The corresponding control statement is `AT`. The statements `AT` and `ENDAT` define statement blocks that are executed at [group breaks](ABENGROUP_BREAK_GLOSRY.html), that is, in the transition of one [group level](ABENGROUP_LEVEL_GLOSRY.html) to another group level. The additions of the statements `AT` define the criteria for a group break and hence the group levels. Group breaks between group levels are a result of the line structure and the processing order in which the `LOOP` reads the lines of the internal table.

Apart from the special variants `AT FIRST` and `AT LAST`, group levels are defined using the variants `AT NEW`\\ `AT END OF` and by the consecutive lines of the internal table specified in accordance with the processing order of the loop. These lines have the same content in a group key defined by their initial part. Here, all lines of the internal table are respected without evaluating any restricting conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html).

Although it is syntactically possible to arrange `AT` control structures in any order and to nest them, however, effective group level processing is usually only achieved by the arrangement above. Here, the control structures are listed in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the `AT`\-`ENDAT` control structures are executed if a corresponding group break takes place in the current table line. Statements in the `LOOP`\-`ENDLOOP` control structure that are not executed within an `AT`\-`ENDAT` control structure are executed in each pass of the loop. If a table line with a group break is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the corresponding statement block is not executed.

The following rules must be observed for effective group level processing:

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), the content of `wa` is overwritten when the `AT`\-`ENDAT` control structure is entered, depending on the respective group level, and is reset to the content of the current line when the control structure is exited. When the additions [`ASSIGNING`](ABAPLOOP_AT_ITAB_RESULT.html) and [`REFERENCE INTO`](ABAPLOOP_AT_ITAB_RESULT.html) are used, the referenced table lines are not modified when entering and exiting the `AT`\-`ENDAT` control structure.

Group Level Processing

The group level is defined by the first line of the internal table. The group break takes place when this line is read. In the group level `AT FIRST`, the current group key does not contain any components.

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), all character-like components of the work area `wa` are filled with *\** when the control structure `AT FIRST` is entered and all other components are set to their initial value. In the case of an elementary line type, this applies to the entire work area. When the `AT`\-`ENDAT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

If the first line of the internal table is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the statement block of the control structure `AT FIRST` is not executed.

Group levels are defined by the beginning or end of a group of lines with the same content in the component `compi` (where `i` = `1`, `2`, and so on) and in the components on the left of `compi`. The content of these components determines the group key. The group breaks take place when the content of the component `compi` or another component on the left of `compi` changes.

The `compi` components can be specified as described in [Specification of Components](ABENITAB_COMPONENTS.html), with the restriction that access to data objects using references is not possible here. The following is therefore not possible:

Otherwise, the specified components can have any data type. The corresponding [comparison rules](ABENLOGEXP_RULES.html) apply to the evaluation. In the case of an elementary line type, only `table_line` can be specified as the group key.

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), the content of `wa` is modified as follows when the `AT`\-`ENDAT` control structure is entered:

In the case of an elementary line type, the entire work area corresponds to the current group key and remains unchanged. When the `AT`\-`ENDAT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

The group level is defined by the last line of the internal table. The group break takes place when this line is read. In the group level `AT LAST`, the current group key does not contain any components.

If the addition [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html) is used in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), all character-like components of the work area `wa` are filled with *\** when the control structure `AT LAST` is entered and all other components are set to their initial value. In the case of an elementary line type, this applies to the entire work area. When the `AT`\-`ENDAT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

If the last line of the internal table is not read due to a restricting condition [`cond`](ABAPLOOP_AT_ITAB_COND.html), the statement block of the control structure `AT LAST` is not executed.

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

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html