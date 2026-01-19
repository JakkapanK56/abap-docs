---
title: "If the representative binding is used,"
description: |
  Outside of the group loop, the representative is not bound to the group and cannot be used to specify it in member loops(ABENMEMBER_LOOP_GLOSRY.html). This applies in particular to procedures called from the group loop. If a representative is bound to the current group, the associated group key ca
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.htm"
abapFile: "ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html"
keywords: ["loop", "do", "if", "case", "data", "types", "internal-table", "field-symbol", "ABAPLOOP", "ITAB", "GROUP", "BINDING"]
---

`... \{\ \}\    |\ \{INTO group\}|\{ASSIGNING <group>\}|\{REFERENCE INTO group_ref\} ...`

[1. `... \{\ \}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... \{INTO group\}|\{ASSIGNING <group>\}|\{REFERENCE INTO group_ref\}`](#ABAP_ALTERNATIVE_2@2@)

Defines the output behavior of the [group loop](ABAPLOOP_AT_ITAB_GROUP_BY.html) in a [grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of an internal table in a `LOOP`. The output behavior defines the following:

Representative binding. If nothing is specified for the output behavior `group_result`, the output behavior is determined for the table lines using the addition [`result`](ABAPLOOP_AT_ITAB_RESULT.html). In each loop pass, the first line of the current group is assigned as a representative of its group to the data object or field symbol defined there. The representative is bound to the current group and the group can be addressed using the name of the representative in the statement [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) or the expression [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html).

If the representative binding is used,

Outside of the group loop, the representative is not bound to the group and cannot be used to specify it in [member loops](ABENMEMBER_LOOP_GLOSRY.html). This applies in particular to procedures called from the group loop.

If a representative is bound to the current group, the associated group key cannot be addressed in the group loop.

The group key in the following example is a structure with two components `key1` and `key2` to which the columns `key1` and `key2` are assigned to each line of the internal table `itab` in the grouping. This produces three groups with the group key values `(a, a)`, `(a, b)`, and `(b, a)`. Accordingly, the group loop is passed three times and the first, second, and sixth line are assigned to the field symbol `<wa>` as representatives. See also the [executable example](ABENLOOP_AT_GROUP_ABEXA.html) of output behavior.

Group key binding. If an explicit output behavior `group_result` is specified, the group key of the current key is assigned to the data object or field symbol specified after `INTO`, `ASSIGNING`, or `REFERENCE INTO` in every loop pass. Here, the same syntax and semantics apply as in the output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html). The data type of the specified data object or field symbol must match the data type of the group key. If the group key is constructed as a new structure in the [group key expression](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html), the target type must be a structure whose components have the same name and in the same order as in the group key.

The specified data object or field symbol is bound to the current group and the group can be addressed using its name in the statement [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) or the expression [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html). Outside of the group loop, the data object or field symbol is not bound to the group and cannot be used to specify it in [member loops](ABENMEMBER_LOOP_GLOSRY.html). This applies in particular to procedures that are called from the group loop. At the end of the group loop, the grouping is canceled and a specified data object is initialized or a field symbol no longer has a group key assigned to it.

The data object or field symbol of the output behavior defined in [`result`](ABAPLOOP_AT_ITAB_RESULT.html) for the table lines can still be addressed in the group loop but it is either initial after the `LOOP` statement or does not point to a line.

Like in the previous example, however the groups are not assigned to an implicit representative here and to the explicitly defined target area for the group key instead. In each of the three loop passes, the reference variable `group_key` declared inline points to the respective structured group key `(a, a)`, `(a, b)`, and `(b, a)`. See also the [executable example](ABENLOOP_AT_GROUP_ABEXA.html) of output behavior.

-   A data object or field symbol whose content is accessed in the group loop and which can also be passed to called procedures.
-   A name for the group which can only be used within the current group loop and loops nested in the statement [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) or in an expression [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html) for specifying a group.

-   the addition [`WITHOUT MEMBERS`](ABAPLOOP_AT_ITAB_GROUP_BY.html) is not possible, since there would be no assignment of the representative to its group in this case,
-   no additional components for [`GROUP SIZE`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) and [`GROUP INDEX`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) can be created for a structured group key, since it is impossible to access these components in this case.

-   To specify a type-compliant data object or field symbol as the target for the group key, it is best to use an [inline declaration](ABENINLINE_DECLARATIONS.html), which is always possible here.
-   The output behavior [`result`](ABAPLOOP_AT_ITAB_RESULT.html) for the table lines is still required when `group_result` is specified explicitly for the construction of the group key [`group_key`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html).
-   Unlike in [`result`](ABAPLOOP_AT_ITAB_RESULT.html) for table lines, no additions `CASTING` or `ELSE UNASSIGN` can be specified after `ASSIGNING`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struct, \\n key1 TYPE string, \\n key2 TYPE string, \\n col TYPE i, \\n END OF struct, \\n itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( \\n ( key1 = \`a\` key2 = \`a\` col = 1 ) \\n ( key1 = \`a\` key2 = \`b\` col = 2 ) \\n ( key1 = \`a\` key2 = \`a\` col = 3 ) \\n ( key1 = \`a\` key2 = \`a\` col = 4 ) \\n ( key1 = \`a\` key2 = \`b\` col = 5 ) \\n ( key1 = \`b\` key2 = \`a\` col = 6 ) \\n ( key1 = \`b\` key2 = \`a\` col = 7 ) ). \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key1 = \-key1 key2 = \-key2 ). \\n out->write( ). \\nENDLOOP. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struct, \\n key1 TYPE string, \\n key2 TYPE string, \\n col TYPE i, \\n END OF struct, \\n itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( \\n ( key1 = \`a\` key2 = \`a\` col = 1 ) \\n ( key1 = \`a\` key2 = \`b\` col = 2 ) \\n ( key1 = \`a\` key2 = \`a\` col = 3 ) \\n ( key1 = \`a\` key2 = \`a\` col = 4 ) \\n ( key1 = \`a\` key2 = \`b\` col = 5 ) \\n ( key1 = \`b\` key2 = \`a\` col = 6 ) \\n ( key1 = \`b\` key2 = \`a\` col = 7 ) ). \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key1 = \-key1 key2 = \-key2 ) \\n WITHOUT MEMBERS \\n REFERENCE INTO FINAL(group\_key). \\n out->write( group\_key->\* ). \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html