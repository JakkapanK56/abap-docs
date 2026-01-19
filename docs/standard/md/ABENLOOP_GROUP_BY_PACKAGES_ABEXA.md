---
title: "ABENLOOP_GROUP_BY_PACKAGES_ABEXA"
description: |
  ABENLOOP_GROUP_BY_PACKAGES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_GROUP_BY_PACKAGES_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_PACKAGES_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "internal-table", "ABENLOOP", "GROUP", "PACKAGES", "ABEXA"]
---

This example demonstrates a construction of the [group key](ABENGROUP_KEY_GLOSRY.html) that does not depend on the line content.

[Grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of an internal table `text` with [representative binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html). The [group key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) of the [group loop](ABENGROUP_LOOP_GLOSRY.html) is constructed as a value of the type `i`, which is calculated from the line index of the current line in `sy-tabix`. This creates groups of lines with the same definable size.

In the group loop, the lines of each group are placed in an internal table `group` in a [member loop](ABENMEMBER_LOOP_GLOSRY.html) using the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) with the addition [`BASE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html). This table is also displayed. Here, the group is addressed using the work area `wa` of the original output behavior of the `LOOP` due to the representative binding.

`group` could also be filled by the evaluation of a table comprehension using [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html), instead of in a [member loop](ABENMEMBER_LOOP_GLOSRY.html)\\ [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html):

group = VALUE #( FOR <wa> IN GROUP wa ( <wa> ) ).

The executable example for [grouping with `FOR`](ABENFOR_GROUP_BY_PACKAGES_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

\* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_packages DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n itab TYPE TABLE OF decfloat34 WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_packages IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(n) = 10. \\n cl\_demo\_input=>new( \\n )->request( EXPORTING text = \`Package size\` \\n CHANGING field = n ). \\n IF n <= 0. \\n RETURN. \\n ENDIF. \\n\\ \\n out->begin\_section( |Packages of \\{ n \\}| ). \\n DATA group LIKE itab. \\n LOOP AT itab INTO FINAL(wa) \\n GROUP BY ( sy-tabix - 1 ) DIV n + 1. \\n CLEAR group. \\n LOOP AT GROUP wa ASSIGNING FIELD-SYMBOL(). \\n group = VALUE #( BASE group ( ) ). \\n ENDLOOP. \\n out->write( group ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 100 ( 1 / j ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_packages DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n itab TYPE TABLE OF decfloat34 WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_packages IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(n) = 10. \\n cl\_demo\_input=>new( \\n )->request( EXPORTING text = \`Package size\` \\n CHANGING field = n ). \\n IF n <= 0. \\n RETURN. \\n ENDIF. \\n\\ \\n out->begin\_section( |Packages of \\{ n \\}| ). \\n DATA group LIKE itab. \\n LOOP AT itab INTO FINAL(wa) \\n GROUP BY ( sy-tabix - 1 ) DIV n + 1. \\n CLEAR group. \\n LOOP AT GROUP wa ASSIGNING FIELD-SYMBOL(). \\n group = VALUE #( BASE group ( ) ). \\n ENDLOOP. \\n out->write( group ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 100 ( 1 / j ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html