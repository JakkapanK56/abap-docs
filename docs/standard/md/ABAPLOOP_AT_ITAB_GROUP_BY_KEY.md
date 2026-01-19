---
title: "ABAPLOOP_AT_ITAB_GROUP_BY_KEY"
description: |
  ABAPLOOP_AT_ITAB_GROUP_BY_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_ITAB_GROUP_BY_KEY.htm"
abapFile: "ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html"
keywords: ["select", "loop", "do", "if", "case", "data", "types", "internal-table", "field-symbol", "ABAPLOOP", "ITAB", "GROUP", "KEY"]
---

`... key | ( key1 = dobj1 key2 = dobj2 ...             [gs = GROUP SIZE]\ [gi = GROUP INDEX] ) ...`

[1. `... gs = GROUP SIZE`](#ABAP_ADDITION_1@3@)

[2. `... gi = GROUP INDEX`](#ABAP_ADDITION_2@3@)

Group key expression for constructing the group key in the [grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of internal tables. The group key is the result of the group key expression, whose data type can be defined as follows:

`key` or `key1`, `key2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) in which the current line can be used in accordance with the output behavior defined in [`result`](ABAPLOOP_AT_ITAB.html). The data types of `key` or `key1`, `key2`, ... must be known completely and statically.

For each line of the internal table `itab` read in the grouping phase, the value of the group key is calculated from the data objects, expressions, or calls specified here using the group key expression.

If a group key binding is defined in the output behavior [`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) of the group loop, the data object or field symbol specified here can be used to access the value of the group key of every group in the group loop.

A structured group key is used to group by more than just one criterion. The group criteria here are simply columns of the internal table. This is a representative binding in which the work area `wa` is reused in the group loop to access the group key.

Declares additional components for a structured group key. These components are not part of the group key and are used to store group-specific information instead:

Before the additional components can be declared, a group key binding must be defined in the output behavior [`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html). The additional components can be accessed in the group loop using the data object or field symbol specified here.

The names of the components `gs` and `gi` can be freely defined. The language elements `GROUP SIZE` or `GROUP INDEX` on the right side give the components their special semantics.

Declaration of a structured group key with additional components for group index and group size. A group key binding must be defined with `INTO data(key)`.

-   If `key` is specified, the group key is a single data object with any data type.
-   If `( key1 = dobj1 key2 = dobj2 ... )` is specified, the group key is a structure with the components `key1`, `key2`, ... The components can have any name and any data type. The structure type is defined here as a bound data type of the structure.

-   The calculated value of the group key for each read line of `itab` must depend on the appropriate type of the read line to achieve a useful grouping. The following are some special cases:

-   If the group key is a value independent of the line, there is only one group to which all read lines belong.
-   If the group key is different for each line, there are as many groups as lines and each group contains only one line.

-   The simplest solution is to directly assign the values of the lines to the group key or its components. However, since they are general expression positions on the right side, any type of evaluation is possible.
-   The ability to directly construct any type of structure makes it easy to create multicomponent group keys without having to declare a matching structure first or to concatenate the key components into, for example, a string.
-   The syntax shown here applies both to groupings with [`LOOP AT itab ... GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) and to groupings with [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html).

-   The component `gs` is filled with the number of group members for each group.
-   The component `gi` is filled with a group index for each group. The group index of the group key constructed first is 1 and is raised by 1 for each new group key.

-   If the groups are not sorted using [`ASCENDING`](ABAPLOOP_AT_ITAB_GROUP_BY.html) or [`DESCENDING`](ABAPLOOP_AT_ITAB_GROUP_BY.html), the groups in the group loop are processed in the order of the group index. If the groups are sorted differently, the original position is noted in the group index.
-   The additional components can still be evaluated even if the addition [`WITHOUT MEMBERS`](ABAPLOOP_AT_ITAB_GROUP_BY.html) is used and the group members cannot be accessed.
-   Implicitly, no further values are created that match the results of [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) when [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) is used in the ABAP SQL statement [`SELECT`](ABAPSELECT.html), except in the component `gs` with the right side `GROUP SIZE`. Aggregations like this are easy to program particularly when applying constructor operators such as [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) to the group members. The ABAP SQL addition [`HAVING`](ABAPHAVING_CLAUSE.html) for restricting the loops of groups is a similar case. Here, for example, the [filter operator](ABENFILTER_OPERATOR_GLOSRY.html)\\ [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) can be used.
-   For the latter see the [example](ABENLOOP_GROUP_BY_AGGREGATES_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ). \\n out->write( |\\{ wa-carrid \\} \\{ wa-airpfrom \\}| ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom \\n indx = GROUP INDEX \\n size = GROUP SIZE ) \\n INTO data(key). \\n out->write( |\\{ key-indx \\} \\{ key-key1 \\n \\} \\{ key-key2 \\} \\{ key-size \\}| ). \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html