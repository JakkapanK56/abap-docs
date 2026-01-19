---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_GROUP_BY_AGGREGATES_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_AGGREGATES_ABEXA.html"
keywords: ["loop", "do", "while", "if", "method", "class", "data", "types", "internal-table", "ABENLOOP", "GROUP", "AGGREGATES", "ABEXA"]
---

This example demonstrates a grouping with aggregates.

In a [group loop](ABENGROUP_LOOP_GLOSRY.html) across an internal table `numbers` grouping is performed by the content of the column `key` and, for the groups, the usual SQL aggregates sum, maximum, minimum, and average are calculated for the second column `num`. The output is the group members and the associated aggregates. The example enables a maximum number of different key values and lines in the internal table to be entered. The values in the second column are random numbers between 1 and 100.

The example above demonstrates an implementation with a [member loop](ABENMEMBER_LOOP_GLOSRY.html). A further [executable example](ABENLOOP_GROUP_BY_FOR_ABEXA.html) shows how the member loop can be replaced by table comprehensions and table reductions while preserving the function. Another [executable example](ABENFOR_GROUP_BY_AGGREGATES_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_aggregates DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS initialize. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n key TYPE i, \\n num TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n DATA \\n numbers TYPE itab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_aggregates IMPLEMENTATION. \\n METHOD main. \\n initialize( ). \\n\\ \\n DATA: \\n BEGIN OF aggregate, \\n sum TYPE i, \\n max TYPE i, \\n min TYPE i, \\n avg TYPE decfloat34, \\n END OF aggregate. \\n\\ \\n out->next\_section( \`Table\` \\n )->write( numbers ). \\n\\ \\n LOOP AT numbers ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key = \-key count = GROUP SIZE ) \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n out->next\_section( |Group Key: \\{ \-key \\}| ). \\n aggregate = VALUE #( min = 101 ). \\n DATA(members) = VALUE itab( ). \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n aggregate-sum += \-num. \\n aggregate-max = nmax( val1 = aggregate-max \\n val2 = \-num ). \\n aggregate-min = nmin( val1 = aggregate-min \\n val2 = \-num ). \\n ENDLOOP. \\n aggregate-avg = aggregate-sum / \-count. \\n SORT members BY num DESCENDING. "#EC CI\_SORTLOOP \\n out->write( members \\n )->write( aggregate ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD initialize. \\n DATA(keys) = 3. \\n DATA(lines) = 10. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = keys \\n )->request( CHANGING field = lines ). \\n IF keys <= 0 OR lines <= 0. \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(rnd\_key) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = keys ). \\n FINAL(rnd\_num) = cl\_abap\_random\_int=>create( \\n seed = \\n cl\_demo\_date\_time=>get\_user\_time( ) + 1 min = 1 max = 100 ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > lines \\n ( key = rnd\_key->get\_next( ) \\n num = rnd\_num->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_aggregates DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS initialize. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n key TYPE i, \\n num TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n DATA \\n numbers TYPE itab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_aggregates IMPLEMENTATION. \\n METHOD main. \\n initialize( ). \\n\\ \\n DATA: \\n BEGIN OF aggregate, \\n sum TYPE i, \\n max TYPE i, \\n min TYPE i, \\n avg TYPE decfloat34, \\n END OF aggregate. \\n\\ \\n out->next\_section( \`Table\` \\n )->write( numbers ). \\n\\ \\n LOOP AT numbers ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key = \-key count = GROUP SIZE ) \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n out->next\_section( |Group Key: \\{ \-key \\}| ). \\n aggregate = VALUE #( min = 101 ). \\n DATA(members) = VALUE itab( ). \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL(). \\n members = VALUE #( BASE members ( ) ). \\n aggregate-sum += \-num. \\n aggregate-max = nmax( val1 = aggregate-max \\n val2 = \-num ). \\n aggregate-min = nmin( val1 = aggregate-min \\n val2 = \-num ). \\n ENDLOOP. \\n aggregate-avg = aggregate-sum / \-count. \\n SORT members BY num DESCENDING. "#EC CI\_SORTLOOP \\n out->write( members \\n )->write( aggregate ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD initialize. \\n DATA(keys) = 3. \\n DATA(lines) = 10. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = keys \\n )->request( CHANGING field = lines ). \\n IF keys <= 0 OR lines <= 0. \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(rnd\_key) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = keys ). \\n FINAL(rnd\_num) = cl\_abap\_random\_int=>create( \\n seed = \\n cl\_demo\_date\_time=>get\_user\_time( ) + 1 min = 1 max = 100 ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > lines \\n ( key = rnd\_key->get\_next( ) \\n num = rnd\_num->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html