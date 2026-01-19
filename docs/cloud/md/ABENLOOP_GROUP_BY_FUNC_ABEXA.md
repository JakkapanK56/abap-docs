---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_GROUP_BY_FUNC_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_FUNC_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "internal-table", "field-symbol", "ABENLOOP", "GROUP", "FUNC", "ABEXA"]
---

This example demonstrates the construction of the group key using a string function.

[Grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of an internal table `text` with [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html). The [group key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) of the [group loop](ABENGROUP_LOOP_GLOSRY.html) is constructed as a value of the type `string`, which is calculated from the content of each table line using the built-in function `replace`. This creates groups of lines that contain the same digits in the same order in their text. The groups are sorted in ascending order according to the group key.

The group key that is bound to a field symbol `<group>` is produced in the group loop. The first group key is an initial text string. In a [member loop](ABENMEMBER_LOOP_GLOSRY.html), the lines of each group are placed in an internal table `members` using the [value operator](ABENVALUE_OPERATOR_GLOSRY.html) with the addition [`BASE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html). This table is also displayed.

`members` could also be filled by evaluating a table comprehension using [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html), instead of in a [member loop](ABENMEMBER_LOOP_GLOSRY.html)\\ [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with `FOR`](ABENFOR_GROUP_BY_FUNC_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_string\_fnc DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA text TYPE TABLE OF string WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_string\_fnc IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`Text\` ). \\n out->write( text ). \\n out->next\_section( \`Grouping\` ). \\n DATA members LIKE text. \\n LOOP AT text INTO FINAL(line) \\n GROUP BY replace( val = line pcre = \`\\\\D\` with = \`\` occ = 0 ) \\n ASCENDING AS TEXT \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( |Group Key: \\{ \\}| ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n text = VALUE #( ( \`aaa1aaaaa2aaaaa\` ) \\n ( \`bbbbb3bbbbbbbbb\` ) \\n ( \`cccccccccc3cccc\` ) \\n ( \`ddddddddddddddd\` ) \\n ( \`eeeee1eeeeee2ee\` ) \\n ( \`ffff1fff2ff3fff\` ) \\n ( \`ggggggggggggggg\` ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_string\_fnc DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA text TYPE TABLE OF string WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_string\_fnc IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`Text\` ). \\n out->write( text ). \\n out->next\_section( \`Grouping\` ). \\n DATA members LIKE text. \\n LOOP AT text INTO FINAL(line) \\n GROUP BY replace( val = line pcre = \`\\\\D\` with = \`\` occ = 0 ) \\n ASCENDING AS TEXT \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( |Group Key: \\{ \\}| ). \\n CLEAR members. \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n ENDLOOP. \\n out->write( members )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n text = VALUE #( ( \`aaa1aaaaa2aaaaa\` ) \\n ( \`bbbbb3bbbbbbbbb\` ) \\n ( \`cccccccccc3cccc\` ) \\n ( \`ddddddddddddddd\` ) \\n ( \`eeeee1eeeeee2ee\` ) \\n ( \`ffff1fff2ff3fff\` ) \\n ( \`ggggggggggggggg\` ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html