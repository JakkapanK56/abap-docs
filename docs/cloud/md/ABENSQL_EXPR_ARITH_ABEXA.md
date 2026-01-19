---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_ARITH_ABEXA.htm"
abapFile: "ABENSQL_EXPR_ARITH_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "internal-table", "ABENSQL", "EXPR", "ARITH", "ABEXA"]
---

This example demonstrates arithmetic calculations in [SQL expressions](ABAPSQL_EXPR.html).

Calculations are made and functions called in a list of columns specified after `SELECT`.

Using the alias names defined after `AS`, the results are assigned to identically named columns of an internal table `results` declared inline. The result of the final calculation is used as a sort criterion.

-   To perform [floating point division](ABENSQL_ARITH.html) with integer columns, these columns are converted to the type `DECFLOAT34` using a [`cast`](ABENSQL_CAST.html) expression.
-   Integer divisions with the functions [`DIV`](ABENSQL_ARITH_FUNC.html), [`MOD`](ABENSQL_ARITH_FUNC.html), and [`DIVISION`](ABENSQL_ARITH_FUNC.html) do not require this conversion.
-   A [host variable](ABENABAP_SQL_HOST_VARIABLES.html) is added to the absolute value of a difference between column values.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_arith DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_arith IMPLEMENTATION. \\n METHOD main. \\n FINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 100 ). \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n FOR i = 0 UNTIL i > 9 \\n ( id = |\\{ i \\}| \\n num1 = rnd->get\_next( ) \\n num2 = rnd->get\_next( ) ) ) ). \\n\\ \\n FINAL(offset) = 10000. \\n SELECT id, num1, num2, \\n CAST( num1 AS D34N ) / CAST( num2 AS D34N ) AS ratio, \\n div( num1, num2 ) AS div, \\n division( num1, num2, 2 ) AS division, \\n mod( num1, num2 ) AS mod, \\n @offset + abs( num1 - num2 ) AS sum \\n FROM demo\_expressions \\n ORDER BY sum DESCENDING \\n INTO TABLE @FINAL(results). \\n\\ \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_arith DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_arith IMPLEMENTATION. \\n METHOD main. \\n FINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 1 max = 100 ). \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n FOR i = 0 UNTIL i > 9 \\n ( id = |\\{ i \\}| \\n num1 = rnd->get\_next( ) \\n num2 = rnd->get\_next( ) ) ) ). \\n\\ \\n FINAL(offset) = 10000. \\n SELECT id, num1, num2, \\n CAST( num1 AS D34N ) / CAST( num2 AS D34N ) AS ratio, \\n div( num1, num2 ) AS div, \\n division( num1, num2, 2 ) AS division, \\n mod( num1, num2 ) AS mod, \\n @offset + abs( num1 - num2 ) AS sum \\n FROM demo\_expressions \\n ORDER BY sum DESCENDING \\n INTO TABLE @FINAL(results). \\n\\ \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_arith.html