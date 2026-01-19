---
title: "ABENLOOP_GROUP_BY_ABEXA"
description: |
  ABENLOOP_GROUP_BY_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_GROUP_BY_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_ABEXA.html"
keywords: ["select", "insert", "loop", "while", "if", "case", "method", "class", "data", "internal-table", "ABENLOOP", "GROUP", "ABEXA"]
---

The example is a step-by-step introduction to grouping with [`LOOP AT GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html).

Similar to SQL's [`GROUP BY`](ABAPGROUPBY_CLAUSE.html), there is also a [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) for working with internal tables that can be used behind [`LOOP AT itab`](ABAPLOOP_AT_ITAB_VARIANTS.html) or in the form [`IN GROUP`](ABENFOR_IN_GROUP.html) in a table iteration with [`FOR`](ABENFOR_ITAB.html). It replaces the clumsy group level processing with statements [`AT NEW ...`](ABAPAT_ITAB.html) that relies on the order of table columns and content that is sorted respectively.

While there are more examples for all the powerful features of `GROUP BY` and `IN GROUP` under

the above example shows the grouping of internal tables step by step using a very simple case of an internal table `spfli_tab` that is filled with data from the database table `SPFLI`. The following steps explain how the content of the internal table can be grouped using [`LOOP AT GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html):

The simplest form of grouping is by one column without explicitly specifying the output behavior of the group loop:

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY wa-carrid. \\n       ... wa-carrid ... \\nENDLOOP.

Within the loop, there is access to the work area `wa`, in particular to the component `wa-carrid` that is used for grouping. The work area `wa` contains the first line of each group and represents the group in the loop. This is called representative binding.

To access the members of a group, a member loop can be inserted into the group loop:

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY wa-carrid. \\n  ... \\n  LOOP AT GROUP wa INTO DATA(member). \\n    ... member-... ... \\n  ENDLOOP. \\n  ... \\nENDLOOP.

The member loop is executed using the group represented by `wa` and its members are assigned to `member` and are available in the member loop.

To group by more than just one criterion, a structured group key is defined as follows. In the simplest case, the grouping criteria are columns of the internal table:

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ). \\n  ... wa-carrid ... wa-airpfrom ... \\nENDLOOP.

This is also a representative binding in which the work area `wa` is reused in the group loop to access the group key.

To access the members of the groups, the exact same member loop can be inserted as when grouping by one column.

By explicitly specifying an [output area](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) for the group key, a group key binding can be defined explicitly instead of the representative binding in which the output area of the group loop is reused:

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY wa-carrid \\n                  INTO DATA(key). \\n  ... key ... \\nENDLOOP.

The difference to the example with representative binding is the `INTO` addition after `GROUP BY`. Instead of reusing `wa`, an elementary data object `key` represents the group. This can be generated inline. The additions [`GROUP SIZE`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html), [`GROUP INDEX`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html), and [`WITHOUT MEMBERS`](ABAPLOOP_AT_ITAB_GROUP_BY.html) can only be used in the group key binding, which gives it more functions than the representative binding. If these are not required, the representative binding can be used. The group key binding can also be used to make the use of the group key in the loop more explicit.

Inserting a member loop works in the same way as in the representative binding, with the difference that a group is now addressed by `key` instead of `wa`.

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY wa-carrid \\n                  INTO key. \\n  ... \\n  LOOP AT GROUP key INTO member. \\n    ... members ... \\n  ENDLOOP. \\n  ... \\nENDLOOP.

Finally, the group key binding for structured group keys:

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ) \\n                  INTO DATA(key). \\n  ... key-key1 ... key-key2 ... \\nENDLOOP.

Here, `key` is a structure with the components `key1` and `key2`. A member loop can be inserted in exactly the same way as when grouping by one column.

If the group members are not relevant, the addition [`NO MEMBERS`](ABAPLOOP_AT_ITAB_GROUP_BY.html) can be used to save time and memory.

LOOP AT spfli\_tab INTO wa \\n                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom \\n                             index = GROUP INDEX size = GROUP SIZE ) \\n                  WITHOUT MEMBERS \\n                  INTO DATA(key). \\n  ... key-key1 ... key-key2 ... key-index ... key-size ... \\nENDLOOP.

It is no longer possible to use a member loop here. Instead, the group key was enriched with optional components for further information using [`GROUP INDEX`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\\ [`GROUP SIZE`](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html).

-   [Examples of Grouping with `LOOP`](ABENLOOP_GROUP_BY_ABEXAS.html),
-   [Examples of Grouping with `FOR`](ABENFOR_GROUPING_ABEXAS.html),

\* Public class definition \\nCLASS cl\_demo\_loop\_at\_itab\_group\_by DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_at\_itab\_group\_by IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: \\n wa TYPE spfli, \\n member TYPE spfli, \\n members TYPE STANDARD TABLE OF spfli WITH EMPTY KEY. \\n\\ \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n out->begin\_section( \`Representative Binding\` ). \\n\\ \\n out->begin\_section( \\n \`Grouping by one column\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid. \\n out->write( wa-carrid ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of one column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid. \\n CLEAR members. \\n LOOP AT GROUP wa INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Grouping by two columns\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ). \\n out->write( |\\{ wa-carrid \\} \\{ wa-airpfrom \\}| ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of two column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ). \\n CLEAR members. \\n LOOP AT GROUP wa INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n out->end\_section( )->next\_section( \`Group Key Binding\` ). \\n\\ \\n out->next\_section( \\n \`Grouping by one column\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid \\n INTO DATA(key). \\n out->write( key ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of one column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid \\n INTO key. \\n CLEAR members. \\n LOOP AT GROUP key INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Grouping by two columns\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ) \\n INTO DATA(keys). \\n out->write( keys ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of two column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ) \\n INTO keys. \\n CLEAR members. \\n LOOP AT GROUP keys INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n\\ \\n out->next\_section( \\n \`Two column groups without members\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom \\n index = GROUP INDEX size = GROUP SIZE ) \\n WITHOUT MEMBERS \\n INTO FINAL(keysplus). \\n out->write( keysplus ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_loop\_at\_itab\_group\_by DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_at\_itab\_group\_by IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: \\n wa TYPE spfli, \\n member TYPE spfli, \\n members TYPE STANDARD TABLE OF spfli WITH EMPTY KEY. \\n\\ \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n out->begin\_section( \`Representative Binding\` ). \\n\\ \\n out->begin\_section( \\n \`Grouping by one column\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid. \\n out->write( wa-carrid ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of one column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid. \\n CLEAR members. \\n LOOP AT GROUP wa INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Grouping by two columns\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ). \\n out->write( |\\{ wa-carrid \\} \\{ wa-airpfrom \\}| ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of two column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ). \\n CLEAR members. \\n LOOP AT GROUP wa INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n out->end\_section( )->next\_section( \`Group Key Binding\` ). \\n\\ \\n out->next\_section( \\n \`Grouping by one column\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid \\n INTO DATA(key). \\n out->write( key ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of one column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY wa-carrid \\n INTO key. \\n CLEAR members. \\n LOOP AT GROUP key INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Grouping by two columns\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ) \\n INTO DATA(keys). \\n out->write( keys ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \\n \`Members of two column groups\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ) \\n INTO keys. \\n CLEAR members. \\n LOOP AT GROUP keys INTO member. \\n members = VALUE #( BASE members ( member ) ). \\n ENDLOOP. \\n out->write( members ). \\n ENDLOOP. \\n\\ \\n\\ \\n out->next\_section( \\n \`Two column groups without members\` ). \\n LOOP AT spfli\_tab INTO wa \\n GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom \\n index = GROUP INDEX size = GROUP SIZE ) \\n WITHOUT MEMBERS \\n INTO FINAL(keysplus). \\n out->write( keysplus ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html