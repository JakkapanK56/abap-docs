---
title: "ABAPLOOP_AT_GROUP"
description: |
  ABAPLOOP_AT_GROUP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_GROUP.htm"
abapFile: "ABAPLOOP_AT_GROUP.html"
keywords: ["select", "loop", "do", "if", "case", "method", "data", "types", "internal-table", "field-symbol", "ABAPLOOP", "GROUP"]
---

[Short Reference](ABAPLOOP_AT_GROUP_SHORTREF.html)

```LOOP AT GROUP group [`` `result` ``](ABAPLOOP_AT_ITAB_RESULT.html)\ [[`WHERE log_exp`](ABAPLOOP_AT_ITAB_COND.html)]\ [[`GROUP BY ...`](ABAPLOOP_AT_ITAB_GROUP_BY.html)].```\\ 
  `...`\\ 
`ENDLOOP.`

[`... WHERE log_exp`](#ABAP_ONE_ADD@1@)

Member loop across the lines of a group within the [group loop](ABAPLOOP_AT_ITAB_GROUP_BY.html) in the [grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of internal tables. This loop is only possible within a [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html) across an internal table with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html),

`group` is used to specify the group across which the member loop passes. The target object must be specified that is defined in the output behavior [`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) of the group loop and bound to the group:

The member loop across the current group is executed just like a regular [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html) across a standard table with the line type of `itab` which contains the lines of the group. Both variants are possible:

The second option enables further groupings of existing groups.

The statement `LOOP AT GROUP` sets the value of the system field `sy-tabix` in the member loop to the value that would be set for the current line in the `LOOP` without grouping.

A member loop always sets the system field `sy-subrc` to 0.

Member loop in a group loop, where the flight numbers belonging to an airline are grouped together in a string.

The following example shows each of the six different syntax methods of specifying a group in a member loop:

The lines read from the group can be restricted using a static [`WHERE` condition](ABAPLOOP_AT_ITAB_COND.html). The syntax and semantics are the same as in a `LOOP` across an internal table with the line type of `itab`.

The additions [`USING KEY`](ABAPLOOP_AT_ITAB_COND.html), [`FROM`](ABAPLOOP_AT_ITAB_COND.html), [`TO`](ABAPLOOP_AT_ITAB_COND.html), and a dynamic `WHERE` condition cannot be specified after `LOOP AT GROUP`.

Like the example above, but with a restricted `WHERE` condition for the member loop.

-   for which the internal table `itab` is specified directly as a data object and not as the result of a call or expression,
-   in which the addition `WITHOUT MEMBERS` is not used.

-   In the representative binding, this is a representative specified in the output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html).
-   In the group key binding, this is a data object or field symbol specified in the output behavior [`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).

-   [Loop across lines](ABAPLOOP_AT_ITAB.html) without the addition `GROUP BY`.
-   [Loop across groups](ABAPLOOP_AT_ITAB.html) with the addition `GROUP BY`.

-   Despite the fact that there is always only one grouping for a single `LOOP`, it is still necessary to specify the group `group` explicitly, since multiple groups can be accessed in nested `LOOP` statements.
-   `group` expects the precise name specified in the output behavior, namely a field symbol with angle brackets specified after `ASSIGNING` and a data reference variable without dereferencing operator `->` specified after `REFERENCE INTO`.
-   The statement `LOOP AT GROUP` can only be listed within a loop defined using [`LOOP AT ... GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html), since the name for the group defined using its [output behavior](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) is only valid here. `LOOP AT GROUP` is in particular not possible in procedures called from a group loop, even if the data object or field symbol defined by the output behavior can be accessed here.
-   Despite the syntax and semantics of `LOOP AT GROUP` being the same as a regular nested loop, the way the lines of the group are actually accessed is optimized. This exploits the internal variant of the assignment of the lines to their group.
-   A loop `LOOP AT GROUP` does not allow [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html) with the statement [`AT`](ABAPAT_ITAB.html).
-   A group loop does not create any empty groups, which means that a member loop is always passed as a rule. Only `WHERE` conditions can be used to prevent members of a group from being processed. Internally, however, this is not detected until the start of the first loop pass, which means that `sy-subrc` is set to 0 in this case as well.
-   The statement `LOOP AT GROUP` corresponds to the expression [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html). This means its functions can often be expressed more elegantly using [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) or [table reductions](ABENTABLE_REDUCTION_GLOSRY.html).

-   Work area `wa` of the `LOOP` in a [representative binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).
-   Field symbol `<fs>` of the `LOOP` in a [representative binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).
-   Data reference variable `dref` of the `LOOP` in a [representative binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).
-   Work area `group` of the group loop in a [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).
-   Field symbol `group` of the group loop in a [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).
-   Data reference variable `group_ref` of the group loop in a [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY wa-carrid \\n INTO FINAL(key). \\n out->next\_section( |\\{ key \\}| ). \\n DATA(str) = \`\`. \\n LOOP AT GROUP key ASSIGNING FIELD-SYMBOL(). \\n str = str && \` \` && \-connid. \\n ENDLOOP. \\n out->write( str ). \\nENDLOOP. \\n\\ \\nout->display( ). TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( ( 1 ) ( 1 ) ( 2 ) ( 2 ) ). \\n\\ \\nLOOP AT itab INTO DATA(wa) GROUP BY wa. \\n LOOP AT GROUP wa INTO DATA(member). \\n ... \\n ENDLOOP. \\nENDLOOP. \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL() GROUP BY . \\n LOOP AT GROUP INTO member. \\n ... \\n ENDLOOP. \\nENDLOOP. \\n\\ \\nLOOP AT itab REFERENCE INTO FINAL(dref) GROUP BY dref->\*. \\n LOOP AT GROUP dref INTO member. \\n ... \\n ENDLOOP. \\nENDLOOP. \\n\\ \\nLOOP AT itab INTO wa GROUP BY wa \\n INTO FINAL(group). \\n LOOP AT GROUP group INTO member. \\n ... \\n ENDLOOP. \\nENDLOOP. \\n\\ \\nLOOP AT itab INTO wa GROUP BY wa \\n ASSIGNING FIELD-SYMBOL(). \\n LOOP AT GROUP INTO member. \\n ... \\n ENDLOOP. \\nENDLOOP. \\n\\ \\nLOOP AT itab INTO wa GROUP BY wa \\n REFERENCE INTO FINAL(group\_ref). \\n LOOP AT GROUP group\_ref INTO member. \\n ... \\n ENDLOOP. \\nENDLOOP. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY wa-carrid \\n INTO FINAL(key). \\n out->next\_section( |\\{ key \\}| ). \\n DATA(str) = \`\`. \\n LOOP AT GROUP key ASSIGNING FIELD-SYMBOL() \\n WHERE cityfrom = 'NEW YORK'. \\n str = str && \` \` && \-connid. \\n ENDLOOP. \\n out->write( str ). \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html