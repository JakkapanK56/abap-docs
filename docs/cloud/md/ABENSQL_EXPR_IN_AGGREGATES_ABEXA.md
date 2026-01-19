---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_IN_AGGREGATES_ABEXA.htm"
abapFile: "ABENSQL_EXPR_IN_AGGREGATES_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "types", "ABENSQL", "EXPR", "AGGREGATES", "ABEXA"]
---

This example demonstrates [SQL expressions](ABAPSQL_EXPR.html) as an argument of [aggregate functions](ABAPSELECT_AGGREGATE.html).

The DDIC database table `DEMO_EXPRESSIONS` is filled with random values in the static constructor.

See also the executable example for [using aggregate expressions in SQL expressions](ABENSQL_EXPR_AGGR_IN_EXPR_ABEXA.html). Here, the roles of the expressions are switched, and different results are produced.

-   The first `SELECT` statement reads the filled columns individually. Here, the total and the product of the numeric columns `NUM1` and `NUM2` are calculated using [arithmetic statements](ABENSQL_ARITH.html) in the `SELECT` list.
-   The second `SELECT` statement performs a grouping by the columns `CHAR1` and `CHAR2`. For each group, aggregate functions are used to determine aggregated values whose arguments are [arithmetic expressions](ABENSQL_ARITH.html)
-   The third `SELECT` statement performs the same grouping as the second `SELECT` statement, but restricts the selected groups using a [`HAVING` clause](ABAPHAVING_CLAUSE.html) in which a condition is set on an aggregate expression that has an [arithmetic expression](ABENSQL_ARITH.html) as an argument.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_in\_aggregates DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_in\_aggregates IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT char1, char2, num1, num2, num1 + num2 AS sum, \\n num1 \* num2 AS product \\n FROM demo\_expressions \\n ORDER BY char1, char2 \\n INTO TABLE @FINAL(ungrouped). \\n out->write( ungrouped ). \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n MAX( num1 + num2 ) AS max, \\n MIN( num1 + num2 ) AS min, \\n MIN( num1 \* num2 ) AS min\_product, \\n MEDIAN( num1 \* num2 ) AS median\_product \\n FROM demo\_expressions \\n GROUP BY char1, char2 \\n ORDER BY group \\n INTO TABLE @FINAL(grouped). \\n out->write( grouped ). \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n MAX( num1 + num2 ) AS max, \\n MEDIAN( num1 + num2 ) AS median \\n FROM demo\_expressions \\n GROUP BY char1, char2 \\n HAVING MIN( num1 \* num2 ) > 25 \\n ORDER BY group \\n INTO TABLE @FINAL(grouped\_having). \\n out->write( grouped\_having ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n TYPES tab\_type TYPE STANDARD TABLE OF \\n demo\_expressions WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type( \\n LET r1 = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 10 ) \\n r2 = cl\_abap\_random\_int=>create( \\n seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 ) \\n c = \`AB\` IN \\n INIT t TYPE tab\_type \\n FOR i = 0 THEN i + 1 UNTIL i > 25 \\n NEXT t = VALUE #( \\n BASE t ( id = abcde+i(1) \\n num1 = r1->get\_next( ) \\n num2 = r1->get\_next( ) \\n char1 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) \\n char2 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) ) ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_in\_aggregates DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_in\_aggregates IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT char1, char2, num1, num2, num1 + num2 AS sum, \\n num1 \* num2 AS product \\n FROM demo\_expressions \\n ORDER BY char1, char2 \\n INTO TABLE @FINAL(ungrouped). \\n out->write( ungrouped ). \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n MAX( num1 + num2 ) AS max, \\n MIN( num1 + num2 ) AS min, \\n MIN( num1 \* num2 ) AS min\_product, \\n MEDIAN( num1 \* num2 ) AS median\_product \\n FROM demo\_expressions \\n GROUP BY char1, char2 \\n ORDER BY group \\n INTO TABLE @FINAL(grouped). \\n out->write( grouped ). \\n\\ \\n SELECT char1 && '\_' && char2 AS group, \\n MAX( num1 + num2 ) AS max, \\n MEDIAN( num1 + num2 ) AS median \\n FROM demo\_expressions \\n GROUP BY char1, char2 \\n HAVING MIN( num1 \* num2 ) > 25 \\n ORDER BY group \\n INTO TABLE @FINAL(grouped\_having). \\n out->write( grouped\_having ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n TYPES tab\_type TYPE STANDARD TABLE OF \\n demo\_expressions WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type( \\n LET r1 = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 10 ) \\n r2 = cl\_abap\_random\_int=>create( \\n seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 ) \\n c = \`AB\` IN \\n INIT t TYPE tab\_type \\n FOR i = 0 THEN i + 1 UNTIL i > 25 \\n NEXT t = VALUE #( \\n BASE t ( id = abcde+i(1) \\n num1 = r1->get\_next( ) \\n num2 = r1->get\_next( ) \\n char1 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) \\n char2 = substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) && \\n substring( val = c \\n off = r2->get\_next( ) \\n len = 1 ) ) ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_aggregate.html abensql\_agg\_expr\_abexas.html