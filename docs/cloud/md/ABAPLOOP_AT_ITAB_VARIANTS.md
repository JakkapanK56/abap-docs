---
title: "ABAPLOOP_AT_ITAB_VARIANTS"
description: |
  ABAPLOOP_AT_ITAB_VARIANTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPLOOP_AT_ITAB_VARIANTS.htm"
abapFile: "ABAPLOOP_AT_ITAB_VARIANTS.html"
keywords: ["select", "loop", "if", "data", "internal-table", "ABAPLOOP", "ITAB", "VARIANTS"]
---

1\. `LOOP AT itab [result](ABAPLOOP_AT_ITAB_RESULT.html)\ [[cond](ABAPLOOP_AT_ITAB_COND.html)].`\\
`...`\\
`ENDLOOP.`\\

2\. `LOOP AT itab [result](ABAPLOOP_AT_ITAB_RESULT.html)\ [[cond](ABAPLOOP_AT_ITAB_COND.html)] GROUP BY [group_key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\ [ASCENDING|DESCENDING [AS TEXT]]\ [WITHOUT MEMBERS]\ [[group_result](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html)]. ... ENDLOOP.`

Executes a [table iteration](ABENTABLE_ITERATION_GLOSRY.html) as a [loop](ABENLOOP_GLOSRY.html) across an internal table `itab`. `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

The statements `LOOP` and `ENDLOOP` define the statement block of the loop. The statement `LOOP` reads lines from the internal table `itab` sequentially that meet an optional condition [`cond`](ABAPLOOP_AT_ITAB_COND.html).

To exit processing of the loop, the following statements can be used:

In order to exit the current loop pass and to continue with the next loop pass, the statements [`CONTINUE`](ABAPCONTINUE.html) and [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html) can be used.

**Caution**\\ [Special rules apply](ABENITAB_LOOP_CHANGE.html) when changing the internal table within a loop. In particular you should never perform write accesses on a complete table body.

Internal tables can also be specified as a [data source](ABAPSELECT_ITAB.html) of a [query](ABENASQL_QUERY_GLOSRY.html) in ABAP SQL.

Simple `LOOP` over an internal table.

[Loop Across Table Lines](ABAPLOOP_AT_ITAB.html)

[Loop Across Line Groups](ABAPLOOP_AT_ITAB_GROUP_BY.html)

-   [If the addition `GROUP BY`](ABAPLOOP_AT_ITAB.html) is not specified, the statement block is executed for each read line and the line can be processed here. The way in which the read line can be addressed in the statement block is specified in the output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html).
-   [The addition `GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) is used to group the read lines by a group key [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) and the statement block is then executed for each group. The way in which the current group can be addressed in the statement block is specified in the output behavior [`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).

-   [`EXIT`](ABAPEXIT_LOOP.html) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](ABENLEAVE_PROCESSING_BLOCKS.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF i WITH EMPTY KEY. \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ). \\n\\ \\nDATA(str) = \`\`. \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n str = str && CONV string( ) && \` \`. \\nENDLOOP. \\nout->write( str ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html