---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_OVER_ALL_ABEXA.htm"
abapFile: "ABENSQL_EXPR_OVER_ALL_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "types", "ABENSQL", "EXPR", "OVER", "ALL", "ABEXA"]
---

This example demonstrates [window expressions](ABAPSELECT_OVER.html) without partition.

The example defines the same columns as the executable example [Window Expressions](ABENSQL_EXPR_OVER_ABEXA.html). There is, however, no [`PARTITION BY`](ABAPSELECT_OVER.html) addition after [`OVER`](ABAPSELECT_OVER.html) of the window expressions. This creates a single window that covers all rows in the result set to which the [window functions](ABENSQL_WIN_FUNC.html) are applied.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_over\_all DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_over\_all IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n num1, \\n COUNT(\*) OVER( ) AS cnt, \\n ROW\_NUMBER( ) OVER( ) AS rnum, \\n MIN( num1 ) OVER( ) AS min, \\n MAX( num1 ) OVER( ) AS max, \\n SUM( num1 ) OVER( ) AS sum, \\n division( 100 \* num1, \\n SUM( num1 ) OVER( ), \\n 2 ) AS perc \\n FROM demo\_expressions \\n ORDER BY group \\n INTO TABLE @FINAL(windowed). \\n\\ \\n out->write( windowed ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n\\ \\n TYPES tab\_type TYPE STANDARD TABLE OF \\n demo\_expressions WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type( \\n LET r1 = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 10 ) \\n r2 = cl\_abap\_random\_int=>create( \\n seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 ) \\n c = \`AB\` IN \\n INIT t TYPE tab\_type \\n FOR i = 0 THEN i + 1 UNTIL i >= 25 \\n NEXT t = VALUE #( \\n BASE t ( id = abcde+i(1) \\n num1 = r1->get\_next( ) \\n char1 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) \\n char2 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) ) ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_over\_all DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_over\_all IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n num1, \\n COUNT(\*) OVER( ) AS cnt, \\n ROW\_NUMBER( ) OVER( ) AS rnum, \\n MIN( num1 ) OVER( ) AS min, \\n MAX( num1 ) OVER( ) AS max, \\n SUM( num1 ) OVER( ) AS sum, \\n division( 100 \* num1, \\n SUM( num1 ) OVER( ), \\n 2 ) AS perc \\n FROM demo\_expressions \\n ORDER BY group \\n INTO TABLE @FINAL(windowed). \\n\\ \\n out->write( windowed ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n\\ \\n TYPES tab\_type TYPE STANDARD TABLE OF \\n demo\_expressions WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type( \\n LET r1 = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 10 ) \\n r2 = cl\_abap\_random\_int=>create( \\n seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 ) \\n c = \`AB\` IN \\n INIT t TYPE tab\_type \\n FOR i = 0 THEN i + 1 UNTIL i >= 25 \\n NEXT t = VALUE #( \\n BASE t ( id = abcde+i(1) \\n num1 = r1->get\_next( ) \\n char1 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) \\n char2 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) ) ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_over.html abensql\_expr\_over\_abexas.html