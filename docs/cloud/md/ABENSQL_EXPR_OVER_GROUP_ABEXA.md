---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_OVER_GROUP_ABEXA.htm"
abapFile: "ABENSQL_EXPR_OVER_GROUP_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "method", "class", "types", "ABENSQL", "EXPR", "OVER", "GROUP", "ABEXA"]
---

This example demonstrates [window expressions](ABAPSELECT_OVER.html) for a grouped result set.

The example shows the combination of [window expressions](ABAPSELECT_OVER.html) in the `SELECT` list with a [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause. In this case, [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) used as a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) can also have aggregate functions as arguments.

The `GROUP BY` clause groups by the columns `CHAR1` and `CHAR2`. In the result set created by this, [`OVER`](ABAPSELECT_OVER.html) is used to define windows whose window criterion is the column `CHAR1`. Aggregate expressions that can be specified as columns in the `SELECT` list due to the `GROUP BY` clause are also used as arguments of window functions.

The aggregate functions used as an argument of window functions would not need to appear as separately specified columns in the `SELECT` list but are shown here anyway to highlight how these values are produced.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_over\_group DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_over\_group IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n COUNT(\*) AS cnt, \\n AVG( num1 AS DEC( 12,2 ) ) AS avg, \\n CORR\_SPEARMAN( num1,num2 ) AS corr, \\n SUM( num1 ) AS sum, \\n COUNT(\*) OVER( PARTITION BY char1 ) AS win\_cnt, \\n COUNT( DISTINCT num1 ) \\n OVER( PARTITION BY char1 ) \\n AS win\_cnt\_dist, \\n ROW\_NUMBER( ) OVER( PARTITION BY char1 ) AS win\_num, \\n MIN( AVG( num1 AS DEC( 12,2 ) ) ) \\n OVER( PARTITION BY char1 ) AS win\_min, \\n MAX( AVG( num1 AS DEC( 12,2 ) ) ) \\n OVER( PARTITION BY char1 ) AS win\_max, \\n SUM( SUM( num1 ) ) OVER( PARTITION BY char1 ) AS win\_sum, \\n VAR( CAST( num1 AS FLTP ) ) \\n OVER( PARTITION BY char1 ) AS var, \\n division( 100 \* SUM( num1 ), \\n SUM( SUM( num1 ) ) OVER( PARTITION BY char1 ), \\n 2 ) AS win\_perc \\n FROM demo\_expressions \\n GROUP BY char1, char2, num1 \\n ORDER BY group \\n INTO TABLE @FINAL(groups\_windowed). \\n\\ \\n out->write( groups\_windowed ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n TYPES tab\_type TYPE STANDARD TABLE OF \\n demo\_expressions WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type( \\n LET r1 = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 10 ) \\n r2 = cl\_abap\_random\_int=>create( \\n seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 ) \\n c = \`AB\` IN \\n INIT t TYPE tab\_type \\n FOR i = 0 THEN i + 1 UNTIL i >= 25 \\n NEXT t = VALUE #( \\n BASE t ( id = abcde+i(1) \\n num1 = r1->get\_next( ) \\n char1 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) \\n char2 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) ) ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_over\_group DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_over\_group IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n COUNT(\*) AS cnt, \\n AVG( num1 AS DEC( 12,2 ) ) AS avg, \\n CORR\_SPEARMAN( num1,num2 ) AS corr, \\n SUM( num1 ) AS sum, \\n COUNT(\*) OVER( PARTITION BY char1 ) AS win\_cnt, \\n COUNT( DISTINCT num1 ) \\n OVER( PARTITION BY char1 ) \\n AS win\_cnt\_dist, \\n ROW\_NUMBER( ) OVER( PARTITION BY char1 ) AS win\_num, \\n MIN( AVG( num1 AS DEC( 12,2 ) ) ) \\n OVER( PARTITION BY char1 ) AS win\_min, \\n MAX( AVG( num1 AS DEC( 12,2 ) ) ) \\n OVER( PARTITION BY char1 ) AS win\_max, \\n SUM( SUM( num1 ) ) OVER( PARTITION BY char1 ) AS win\_sum, \\n VAR( CAST( num1 AS FLTP ) ) \\n OVER( PARTITION BY char1 ) AS var, \\n division( 100 \* SUM( num1 ), \\n SUM( SUM( num1 ) ) OVER( PARTITION BY char1 ), \\n 2 ) AS win\_perc \\n FROM demo\_expressions \\n GROUP BY char1, char2, num1 \\n ORDER BY group \\n INTO TABLE @FINAL(groups\_windowed). \\n\\ \\n out->write( groups\_windowed ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n TYPES tab\_type TYPE STANDARD TABLE OF \\n demo\_expressions WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type( \\n LET r1 = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 10 ) \\n r2 = cl\_abap\_random\_int=>create( \\n seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 ) \\n c = \`AB\` IN \\n INIT t TYPE tab\_type \\n FOR i = 0 THEN i + 1 UNTIL i >= 25 \\n NEXT t = VALUE #( \\n BASE t ( id = abcde+i(1) \\n num1 = r1->get\_next( ) \\n char1 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) \\n char2 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) ) ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_over.html abensql\_expr\_over\_abexas.html