---
title: "ABAPLOOP_AT_ITAB_GROUP_BY"
description: |
  ABAPLOOP_AT_ITAB_GROUP_BY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPLOOP_AT_ITAB_GROUP_BY.htm"
abapFile: "ABAPLOOP_AT_ITAB_GROUP_BY.html"
keywords: ["select", "loop", "do", "if", "case", "data", "internal-table", "ABAPLOOP", "ITAB", "GROUP"]
---

``LOOP AT itab [`result`](ABAPLOOP_AT_ITAB_RESULT.html)\ [[`cond`](ABAPLOOP_AT_ITAB_COND.html)] GROUP BY [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\                             [ASCENDING|DESCENDING [AS TEXT]]\                             [WITHOUT MEMBERS]\                             [[`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html)].    ...    [`[LOOP AT GROUP ...`](ABAPLOOP_AT_GROUP.html)\      [`...`](ABAPLOOP_AT_GROUP.html)\    [`ENDLOOP.]`](ABAPLOOP_AT_GROUP.html)\    ...  ENDLOOP.``

[1. `... ASCENDING|DESCENDING [AS TEXT]`](#ABAP_ADDITION_1@3@)

[2. `... WITHOUT MEMBERS`](#ABAP_ADDITION_2@3@)

This variant of the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB_VARIANTS.html) groups the lines of the internal table and executes a loop across the groups. The same applies to the syntax of the additions [`result`](ABAPLOOP_AT_ITAB_RESULT.html) and [`cond`](ABAPLOOP_AT_ITAB_COND.html) as to a [loop across lines](ABAPLOOP_AT_ITAB.html) with the exception that the addition [`TRANSPORTING NO FIELDS`](ABAPLOOP_AT_ITAB_RESULT.html) cannot be specified.

If the addition `GROUP BY` is specified, the `LOOP` is processed in two phases:

The default order of the groups in the group loop as well as the order of the members within a group is defined by the processing order of the `LOOP` in the first phase:

The internal table `itab` cannot be modified in the group loop unless the addition `WITHOUT MEMBERS` is specified.

This variant of the statement `LOOP AT` with the addition `GROUP BY` sets the values of the system field `sy-tabix` in the group loop as follows:

After leaving the loop using `ENDLOOP`, `sy-tabix` is set to the value that it had before entering the loop. The same applies to `sy-subrc` as in a [loop across lines](ABAPLOOP_AT_ITAB.html).

The example shows the simplest form of grouping by a column without explicitly specifying the output behavior of the group loop. Within the loop, there is access to the work area `wa`, in particular to the component `wa-carrid` that is used for grouping. The work area `wa` contains the first line of each group and represents the group in the loop. This is called a representative binding.

[Grouping Internal Tables](ABENLOOP_GROUP_BY_ABEXAS.html)

These additions sort the groups by the group key in ascending or descending order before the group loop is executed. The groups are sorted in exactly the same way as when the statement [`SORT`](ABAPSORT_ITAB.html) is used on an internal table whose primary table key is the group key and the addition `AS TEXT` is applied accordingly.

The group loop is executed in the sort order. If the additions `ASCENDING` and `DESCENDING` are not specified, the groups are in the order in which the value of a group key was constructed for the first time.

Groups can be sorted as an addition to the statement [`SORT`](ABAPSORT_ITAB.html) if the criteria here are not sufficient.

Like the example above, but with sorting by group key in descending order.

[Grouping with `LOOP` and Sort](ABENLOOP_GROUP_BY_SORT_ABEXA.html)

The addition `WITHOUT MEMBERS` deactivates the default internal variant of the assignment of each table line to its group. This addition constructs groups, but there is no access to the lines of the groups in the group loop. If the addition `WITHOUT MEMBERS` is specified, the following applies:

The addition `WITHOUT MEMBERS` is used to improve performance in all cases where the content of the groups is not required.

Like the example above, but with the addition `WITHOUT MEMBERS`, for which a group key binding is defined with `INTO DATA(key)`. There is no access to the lines of the groups in the loop.

-   **Grouping**
-   In the first phase, all lines determined by the conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html) are read in the processing order described in a [loop across lines](ABAPLOOP_AT_ITAB.html). The statements in the statement block between `LOOP` and `ENDLOOP` are not executed during this process. For each line read, a group key is constructed in the group key expression [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) instead. Each group key represents a group. Each line is assigned to exactly one group as a member, namely the group of all lines with the same group key. If the addition `WITHOUT MEMBERS` is not used, this assignment is internal and can be used for access to the members of a group in the second phase.
-   **Group Loop**
-   In the second phase, a loop is executed across all groups. The statements in the statement block between `LOOP` and `ENDLOOP` are executed for each loop pass. The output behavior for the group loop is defined in [`group_result`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) and the corresponding values can be accessed in the loop. If the assignment of the table lines to their groups is defined, a member loop [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) can be nested in the `LOOP` to read the lines in each group.

-   The default order of the groups depends on the time their group key is first created, which itself can be overridden by an explicit sorting using the additions `ASCENDING` or `DESCENDING`.
-   If the assignment of the lines to their group is defined, the order of the lines of a group is based on the time they are assigned to the group. This defines, in particular, the first line of each group that is used as a representative in the [representative binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html).

-   If a representative binding is defined in the [output behavior](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html), `sy-tabix` is set to the value that would be set for the line representing the group in the `LOOP` without grouping.
-   If a group key binding is defined in the [output behavior](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html), the groups are counted in `sy-tabix`. The first loop pass sets `sy-tabix` to 1 and each subsequent loop pass raises it by 1.

-   A grouping, that is, the assignment of lines to a group, only exists within the group loop and a group can only be addressed after [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) or [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html).
-   A member loop [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) is only possible in `LOOP` statements for which the internal table `itab` is specified directly as a data object and not as the result of a call or expression. If the table is specified as the result of a call or expression, only the group keys exist in the group loop and no longer the groups themselves.
-   A `LOOP` with the addition `GROUP BY` is not possible for [mesh paths](ABENMESH_PATH_GLOSRY.html).
-   No [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html) with the statement [`AT`](ABAPAT_ITAB.html) is possible in a `LOOP` with the addition `GROUP BY`.
-   Internal tables can also be grouped using the expression [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html).
-   Unlike in [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html), a grouping with `GROUP BY` does not depend on the structure of the lines and the processing order of the loop. A grouping with `GROUP BY` can usually replace group level processing in cases where the internal table is sorted before the loop by the group key.
-   Groupings using `GROUP BY` replace self-programmed group loops.

-   The [output behavior](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) cannot be defined for a line of the group as a representative and a group key binding must be defined.
-   The group loop cannot contain a nested member loop [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html).
-   The internal table `itab` can be modified in the group loop.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY wa-carrid. \\n out->write( wa-carrid ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY wa-carrid DESCENDING. \\n out->write( wa-carrid ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nLOOP AT spfli\_tab INTO FINAL(wa) \\n GROUP BY wa-carrid WITHOUT MEMBERS \\n INTO FINAL(key). \\n out->write( key ). \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html