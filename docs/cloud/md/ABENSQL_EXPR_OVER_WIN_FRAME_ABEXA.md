---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_OVER_WIN_FRAME_ABEXA.htm"
abapFile: "ABENSQL_EXPR_OVER_WIN_FRAME_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "OVER", "WIN", "FRAME", "ABEXA"]
---

The example demonstrates how different [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) are applied to frames inside a window.

-   `count` sorts the rows by the column `ID` and counts the number of rows from the first row of the window to the current row. The result is the same as that returned by the [`ROW_NUMBER( )`](ABENSQL_WIN_FUNC.html) function.
-   `count_reverse` sorts the rows by the column `ID` and counts the number of rows from the current row to the last row of the window. The result is reverse numbering.
-   `average` sorts the rows by the column `ID` and calculates the rolling averages of a subset of rows from column `COL1`. The subset consists of the current row plus one preceding and one following row. With this function, it is possible, for example, to calculate the 3-day-average temperature for every day from a list of temperature data.
-   `accumulate` sorts the rows by the column `ID` and accumulates the values from the first row of the window up to the current row, thus computing the running total of column `COL1`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_ovr\_win\_frm\_spe DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_ovr\_win\_frm\_spe IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_update. "#EC CI\_NOWHERE \\n INSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'A' col1 = '3' col2 = '7' ) \\n ( id = 'B' col1 = '5' col2 = '5' ) \\n ( id = 'C' col1 = '4' col2 = '5' ) \\n ( id = 'D' col1 = '1' col2 = '1' ) \\n ( id = 'E' col1 = '927' ) \\n ) ). \\n\\ \\n SELECT id, col1, col2, \\n COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING \\n AND CURRENT ROW ) \\n AS count, \\n COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN CURRENT ROW \\n AND UNBOUNDED FOLLOWING ) \\n AS count\_reverse, \\n AVG( col1 ) OVER( ORDER BY id ROWS BETWEEN 1 PRECEDING \\n AND 1 FOLLOWING ) \\n AS average, \\n SUM( col1 ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING \\n AND CURRENT ROW ) \\n AS accumulate \\n FROM demo\_update \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_ovr\_win\_frm\_spe DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_ovr\_win\_frm\_spe IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_update. "#EC CI\_NOWHERE \\n INSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'A' col1 = '3' col2 = '7' ) \\n ( id = 'B' col1 = '5' col2 = '5' ) \\n ( id = 'C' col1 = '4' col2 = '5' ) \\n ( id = 'D' col1 = '1' col2 = '1' ) \\n ( id = 'E' col1 = '927' ) \\n ) ). \\n\\ \\n SELECT id, col1, col2, \\n COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING \\n AND CURRENT ROW ) \\n AS count, \\n COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN CURRENT ROW \\n AND UNBOUNDED FOLLOWING ) \\n AS count\_reverse, \\n AVG( col1 ) OVER( ORDER BY id ROWS BETWEEN 1 PRECEDING \\n AND 1 FOLLOWING ) \\n AS average, \\n SUM( col1 ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING \\n AND CURRENT ROW ) \\n AS accumulate \\n FROM demo\_update \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_over.html abensql\_expr\_over\_abexas.html