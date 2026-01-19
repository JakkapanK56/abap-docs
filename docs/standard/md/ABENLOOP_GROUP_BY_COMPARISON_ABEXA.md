---
title: "ABENLOOP_GROUP_BY_COMPARISON_ABEXA"
description: |
  ABENLOOP_GROUP_BY_COMPARISON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_GROUP_BY_COMPARISON_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_COMPARISON_ABEXA.html"
keywords: ["loop", "method", "class", "data", "internal-table", "field-symbol", "ABENLOOP", "GROUP", "COMPARISON", "ABEXA"]
---

This example demonstrates the construction of the [group key](ABENGROUP_KEY_GLOSRY.html) using comparison expressions.

[Grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of an internal table `numbers` with [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html). The [group key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) of the [group loop](ABENGROUP_LOOP_GLOSRY.html) is constructed as a value of the type `string`, which is calculated from the content of each table line using the conditional operator `cond`. This creates groups of lines whose content is either less than or equal to or greater than an entered value.

The group key that is bound to a field symbol `<group>` is produced in the group loop. In a [member loop](ABENMEMBER_LOOP_GLOSRY.html), the lines of each group are placed in an internal table `members` using the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) with the addition [`BASE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html). This table is also displayed.

`members` could also be filled by evaluating a table comprehension using [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html), instead of in a [member loop](ABENMEMBER_LOOP_GLOSRY.html)\\ [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with `FOR`](ABENFOR_GROUP_BY_COMPARISON_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

\* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_comparison DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n numbers TYPE TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_comparison IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(threshold) = 5. \\n cl\_demo\_input=>new( )->request( CHANGING field = threshold ). \\n\\ \\n out->begin\_section( \`Grouping\` ). \\n DATA members LIKE numbers. \\n LOOP AT numbers INTO FINAL(number) \\n GROUP BY COND string( \\n WHEN number <= threshold THEN |LE \\{ threshold \\}| \\n ELSE |GT \\{ threshold \\}| ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( ). \\n CLEAR members. \\n LOOP AT GROUP REFERENCE INTO FINAL(member\_ref). \\n members = VALUE #( BASE members ( member\_ref->\* ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_comparison DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n numbers TYPE TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_comparison IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(threshold) = 5. \\n cl\_demo\_input=>new( )->request( CHANGING field = threshold ). \\n\\ \\n out->begin\_section( \`Grouping\` ). \\n DATA members LIKE numbers. \\n LOOP AT numbers INTO FINAL(number) \\n GROUP BY COND string( \\n WHEN number <= threshold THEN |LE \\{ threshold \\}| \\n ELSE |GT \\{ threshold \\}| ) \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( ). \\n CLEAR members. \\n LOOP AT GROUP REFERENCE INTO FINAL(member\_ref). \\n members = VALUE #( BASE members ( member\_ref->\* ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html