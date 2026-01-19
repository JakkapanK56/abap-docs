---
title: "ABENFOR_IN_GROUP"
description: |
  ABENFOR_IN_GROUP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFOR_IN_GROUP.htm"
abapFile: "ABENFOR_IN_GROUP.html"
keywords: ["select", "loop", "if", "case", "data", "types", "internal-table", "field-symbol", "ABENFOR", "GROUP"]
---

``... FOR \{ wa|<fs> IN GROUP group [INDEX INTO idx]\ [[`WHERE ( log_exp )`](ABENFOR_COND.html)]\ \}\        |\ \{ GROUPS OF            wa|<fs> IN GROUP group [INDEX INTO idx]\ [[`WHERE ( log_exp )`](ABENFOR_COND.html)]\            GROUP BY [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\            [ASCENDING|DESCENDING [AS TEXT]]\            [WITHOUT MEMBERS]\ \}\ [[`let_exp`](ABAPLET.html)] ...``

[`... INDEX INTO idx`](#ABAP_ONE_ADD@1@)

These variants of an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html) using [`FOR`](ABENFOR_ITAB.html) evaluate a line group `group` sequentially like a [member loop](ABENMEMBER_LOOP_GLOSRY.html)\\ [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html). These `FOR` expressions can only be specified in those places in which a group `group` can be accessed, that is:

where in both cases

`group` is used to specify the group to be evaluated using the data object or field symbol to which the group is bound.

The condition [`WHERE ( log_exp )`](ABENFOR_COND.html) can be used to restrict the lines of the group to be evaluated. Conditions other than this static `WHERE` condition cannot be specified.

As in [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html), access to the groups is optimized internally.

Display of a list of the total occupied seats for each airline. A `LOOP` with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) evaluates its groups in a table reduction using `FOR flight IN GROUP <carrier>`. Here, the total for each group is calculated for the column `seatsocc`.

For each read line of the associated `FOR` expression, this addition sets the helper variable `idx` to the value to which the system field `sy-tabix` would be set in a corresponding [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) loop. The same applies to the local data object `idx` as in the variant [`FOR ... IN itab`](ABENFOR_IN_ITAB.html).

-   in a constructor expression after an expression [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html),
-   in a `LOOP` with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html).

-   the internal table must be specified directly and not specified as the result of an expression or a function,
-   the addition `WITHOUT MEMBERS` must not be specified.

-   In the variant `FOR ... IN GROUP` without `GROUPS OF`, the expression evaluates the members of the current group in the same way as the variant [`FOR ... IN itab`](ABENFOR_IN_ITAB.html) evaluates the lines of the internal table `itab`. The result is the lines of the group.
-   In the variant `FOR GROUPS OF ... IN GROUP`, the expression evaluates the members of the current group in the same way as the variant [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html). The current group is grouped again and the result is either representatives or group keys of the subgroups.

SELECT \* FROM sflight INTO TABLE @FINAL(sflight). \\n\\ \\nTYPES group\_keys TYPE STANDARD TABLE OF spfli-carrid WITH EMPTY KEY. \\n\\ \\nTYPES: \\n BEGIN OF list\_line, \\n carrier TYPE sflight-carrid, \\n bookings TYPE i, \\n END OF list\_line, \\n list TYPE STANDARD TABLE OF list\_line WITH EMPTY KEY. \\n\\ \\nDATA(list) = VALUE list( ). \\nLOOP AT sflight INTO FINAL(wa) \\n GROUP BY wa-carrid \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n list = VALUE list( \\n BASE list \\n ( carrier = \\ \\n bookings = REDUCE #( \\n INIT s = 0 \\n FOR flight IN GROUP \\ \\n NEXT s += flight-seatsocc ) ) ). \\nENDLOOP. \\n\\ \\ncl\_demo\_output=>display( list ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html