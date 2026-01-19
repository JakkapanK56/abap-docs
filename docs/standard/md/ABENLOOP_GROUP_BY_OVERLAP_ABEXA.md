---
title: "In the first group loop,"
description: |
  In the second group loop, The result of this is that the lines with the values 3, 4, and 5 are assigned to different groups. The group assignments of the lines would not change, however, even if the internal table were sorted differently. The executable example for grouping with `FOR`(ABENFOR_GROU
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_GROUP_BY_OVERLAP_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_OVERLAP_ABEXA.html"
keywords: ["loop", "if", "method", "class", "data", "internal-table", "ABENLOOP", "GROUP", "OVERLAP", "ABEXA"]
---

This example demonstrates the construction of the [group key](ABENGROUP_KEY_GLOSRY.html) if conditions overlap.

This example works in a similar way to the [executable example](ABENLOOP_GROUP_BY_COMPARISON_ABEXA.html) for constructions using comparison expressions. The following shows how the result of comparison expressions that overlap depends on the order in which the expressions are evaluated.

In the first group loop,

In the second group loop,

The result of this is that the lines with the values 3, 4, and 5 are assigned to different groups. The group assignments of the lines would not change, however, even if the internal table were sorted differently.

The executable example for [grouping with `FOR`](ABENFOR_GROUP_BY_OVERLAP_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

-   those lines are identified first whose value is less than or equal to 5,
-   then the lines whose value is between 2 and 7,
-   then the lines whose value is greater than 5.

-   those lines are identified first whose value is between 2 and 7,
-   then the lines whose value is less than or equal to 5,
-   then the lines whose value is greater than 5.

\* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_overlap DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n itab TYPE TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_overlap IMPLEMENTATION. \\n METHOD main. \\n DATA members LIKE itab. \\n\\ \\n out->begin\_section( \`LE 5, BT 2 AND 7, GT 5\` ). \\n LOOP AT itab INTO DATA(wa) \\n GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\` \\n WHEN wa > 2 AND \\n wa <= 7 THEN \`BT 2 AND 7\` \\n WHEN wa > 5 THEN \`GT 5\` ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \`BT 2 AND 7, LE 5, GT 5\` ). \\n LOOP AT itab INTO wa \\n GROUP BY COND string( WHEN wa > 2 AND \\n wa <= 7 THEN \`BT 2 AND 7\` \\n WHEN wa <= 5 THEN \`LE 5\` \\n WHEN wa > 5 THEN \`GT 5\` ) \\n ASSIGNING . \\n out->begin\_section( ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING . \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_overlap DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n itab TYPE TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_overlap IMPLEMENTATION. \\n METHOD main. \\n DATA members LIKE itab. \\n\\ \\n out->begin\_section( \`LE 5, BT 2 AND 7, GT 5\` ). \\n LOOP AT itab INTO DATA(wa) \\n GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\` \\n WHEN wa > 2 AND \\n wa <= 7 THEN \`BT 2 AND 7\` \\n WHEN wa > 5 THEN \`GT 5\` ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n\\ \\n out->next\_section( \`BT 2 AND 7, LE 5, GT 5\` ). \\n LOOP AT itab INTO wa \\n GROUP BY COND string( WHEN wa > 2 AND \\n wa <= 7 THEN \`BT 2 AND 7\` \\n WHEN wa <= 5 THEN \`LE 5\` \\n WHEN wa > 5 THEN \`GT 5\` ) \\n ASSIGNING . \\n out->begin\_section( ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING . \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html