---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_GROUP_BY_FOR_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_FOR_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "ABENLOOP", "GROUP", "FOR", "ABEXA"]
---

This example demonstrates aggregates using table reductions.

This example works in the same way as the [executable example](ABENLOOP_GROUP_BY_AGGREGATES_ABEXA.html) for aggregates. Here, expressions [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html) are used instead of the [member loop](ABENMEMBER_LOOP_GLOSRY.html) to calculate aggregates using [table reductions](ABENTABLE_REDUCTION_GLOSRY.html) and to determine the group members using a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html). A further [executable example](ABENFOR_GROUP_BY_AGGREGATES_ABEXA.html) demonstrates how the entire group loop can be implemented using expressions.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_for DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS initialize. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n key TYPE i, \\n num TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n DATA \\n numbers TYPE itab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_for IMPLEMENTATION. \\n METHOD main. \\n initialize( ). \\n\\ \\n DATA: \\n BEGIN OF aggregate, \\n sum TYPE i, \\n max TYPE i, \\n min TYPE i, \\n avg TYPE decfloat34, \\n END OF aggregate. \\n\\ \\n out->next\_section( \`Table\` \\n )->write( numbers ). \\n\\ \\n LOOP AT numbers ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key = \-key count = GROUP SIZE ) \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n out->next\_section( |Group Key: \\{ \-key \\}| ). \\n DATA(members) = VALUE itab( FOR m IN GROUP ( m ) ). \\n aggregate-sum = REDUCE i( INIT sum = 0 \\n FOR m IN GROUP \\ \\n NEXT sum += m-num ). \\n aggregate-max = REDUCE i( INIT max = 0 \\n FOR m IN GROUP \\ \\n NEXT max = nmax( val1 = max \\n val2 = m-num ) ). \\n aggregate-min = REDUCE i( INIT min = 101 \\n FOR m IN GROUP \\ \\n NEXT min = nmin( val1 = min \\n val2 = m-num ) ). \\n aggregate-avg = aggregate-sum / \-count. \\n\\ \\n SORT members BY num DESCENDING. "#EC CI\_SORTLOOP \\n out->write( members \\n )->write( aggregate ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD initialize. \\n DATA(keys) = 3. \\n DATA(lines) = 10. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = keys \\n )->request( CHANGING field = lines ). \\n IF keys <= 0 OR lines <= 0. \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(rnd\_key) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = keys ). \\n FINAL(rnd\_num) = cl\_abap\_random\_int=>create( \\n seed = \\n cl\_demo\_date\_time=>get\_user\_time( ) + 1 min = 1 max = 100 ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > lines \\n ( key = rnd\_key->get\_next( ) \\n num = rnd\_num->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_for DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS initialize. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n key TYPE i, \\n num TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n DATA \\n numbers TYPE itab. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_for IMPLEMENTATION. \\n METHOD main. \\n initialize( ). \\n\\ \\n DATA: \\n BEGIN OF aggregate, \\n sum TYPE i, \\n max TYPE i, \\n min TYPE i, \\n avg TYPE decfloat34, \\n END OF aggregate. \\n\\ \\n out->next\_section( \`Table\` \\n )->write( numbers ). \\n\\ \\n LOOP AT numbers ASSIGNING FIELD-SYMBOL() \\n GROUP BY ( key = \-key count = GROUP SIZE ) \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n out->next\_section( |Group Key: \\{ \-key \\}| ). \\n DATA(members) = VALUE itab( FOR m IN GROUP ( m ) ). \\n aggregate-sum = REDUCE i( INIT sum = 0 \\n FOR m IN GROUP \\ \\n NEXT sum += m-num ). \\n aggregate-max = REDUCE i( INIT max = 0 \\n FOR m IN GROUP \\ \\n NEXT max = nmax( val1 = max \\n val2 = m-num ) ). \\n aggregate-min = REDUCE i( INIT min = 101 \\n FOR m IN GROUP \\ \\n NEXT min = nmin( val1 = min \\n val2 = m-num ) ). \\n aggregate-avg = aggregate-sum / \-count. \\n\\ \\n SORT members BY num DESCENDING. "#EC CI\_SORTLOOP \\n out->write( members \\n )->write( aggregate ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD initialize. \\n DATA(keys) = 3. \\n DATA(lines) = 10. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = keys \\n )->request( CHANGING field = lines ). \\n IF keys <= 0 OR lines <= 0. \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(rnd\_key) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = keys ). \\n FINAL(rnd\_num) = cl\_abap\_random\_int=>create( \\n seed = \\n cl\_demo\_date\_time=>get\_user\_time( ) + 1 min = 1 max = 100 ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > lines \\n ( key = rnd\_key->get\_next( ) \\n num = rnd\_num->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html