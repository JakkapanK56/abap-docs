---
title: "ABENFOR"
description: |
  ABENFOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFOR.htm"
abapFile: "ABENFOR.html"
keywords: ["select", "loop", "do", "while", "data", "types", "internal-table", "ABENFOR"]
---

``... [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html)|[`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html)|[`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) type( ... FOR [`... UNTIL|WHILE ...`](ABENFOR_CONDITIONAL.html)\                                   |\ [`... IN ...`](ABENFOR_ITAB.html) ...) ...``

The language element `FOR` introduces an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) as a subexpression in [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) and in the variants of the instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for creating internal tables.

There are two main variants of iteration expressions:

Two `FOR` loops are constructing an internal table `conn_tab` from an existing internal table `connections` using [grouping](ABENFOR_GROUPS_OF.html). The first [l`LET`](ABAPLET.html) expression is executed once per group of lines, the second [l`LET`](ABAPLET.html) expression is executed for each group member.

-   Iteration expressions with [`UNTIL`](ABENFOR_CONDITIONAL.html) or [`WHILE`](ABENFOR_CONDITIONAL.html) for conditional iterations. These expressions are used to iteratively create the results of any data types using `REDUCE` or to create lines of internal tables using `NEW` or `VALUE`. The iteration steps can be defined as required.
-   Iteration expressions with [`IN`](ABENFOR_ITAB.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html). These expressions are used for [table reductions](ABENTABLE_REDUCTION_GLOSRY.html) using `REDUCE` or [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) using `NEW` or `VALUE`. The iteration steps here evaluate an existing internal table.

-   Any `FOR` variants can be used in any way in a constructor expression and produce nested iterations.
-   The reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) must contain at least one iteration expression. The variants of the instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) and the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for creating internal tables can contain iteration expressions.
-   The conditional iterations using [`UNTIL`](ABENFOR_CONDITIONAL.html) or [`WHILE`](ABENFOR_CONDITIONAL.html) provide an expression-oriented alternative to the loop statements [`DO`](ABAPDO.html) and [`WHILE`](ABAPWHILE.html). The same applies to the table iterations using [`IN`](ABENFOR_ITAB.html) and the statement [`LOOP`](ABAPLOOP_AT_ITAB_VARIANTS.html). The direct use of operand positions on the expression-oriented variants helps to avoid helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

SELECT s~carrname, p~carrid, p~connid, p~cityfrom, p~cityto \\n FROM scarr AS s \\n INNER JOIN spfli AS p ON s~carrid = p~carrid \\n ORDER BY p~carrid \\n INTO TABLE @FINAL(connections) \\n UP TO 100 ROWS. \\n\\ \\nTYPES: \\n BEGIN OF conn, \\n carrier TYPE string, \\n connection TYPE string, \\n cities TYPE string, \\n END OF conn, \\n conn\_tab TYPE TABLE OF conn WITH EMPTY KEY. \\n\\ \\nFINAL(conn\_tab) = VALUE conn\_tab( \\n FOR GROUPS group OF flight IN connections \\n GROUP BY ( carrname = flight-carrname carrid = flight-carrid ) \\n LET \_carrier = group-carrname && \` (\` && group-carrid && \`)\` IN \\n FOR member IN GROUP group \\n LET \_cities = member-cityfrom && \` - \` && member-cityto IN \\n ( carrier = \_carrier \\n connection = member-connid \\n cities = \_cities ) ). \\n\\ \\ncl\_demo\_output=>display( conn\_tab ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html