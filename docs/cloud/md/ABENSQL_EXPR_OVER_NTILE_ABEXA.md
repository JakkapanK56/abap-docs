---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_OVER_NTILE_ABEXA.htm"
abapFile: "ABENSQL_EXPR_OVER_NTILE_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "ABENSQL", "EXPR", "OVER", "NTILE", "ABEXA"]
---

This example demonstrates the [window expression](ABAPSELECT_OVER.html) with the [window function](ABENWINDOW_FUNCTION_GLOSRY.html)\\ [`NTILE`](ABENSQL_WIN_FUNC.html).

All employees from the `DEMO_EMPLOYEES` table are sorted by their salary, starting with the lowest, and distributed into five salary groups by the `NTILE` function. The first group, group 1, has one entry more than the other four groups, as the number of employees (11) cannot be distributed equally into the number of buckets (five in this example).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_over\_ntile DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_over\_ntile IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT name, \\n salary, \\n NTILE( 5 ) OVER( ORDER BY salary ) AS ntile \\n FROM demo\_employees \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n\\ \\n DELETE FROM demo\_employees. "#EC CI\_NOWHERE \\n INSERT demo\_employees FROM TABLE @( \\n VALUE #( ( name = 'Lothar Sudhoff' salary = '1354.00' ) \\n ( name = 'Christa Martin' salary = '3247.00' ) \\n ( name = 'Illya Gueldenpfennig' salary = '7453.00' ) \\n ( name = 'Johannes Legrand' salary = '1468.00' ) \\n ( name = 'Johann Buchholm' salary = '3245.00' ) \\n ( name = 'Holm Trensch' salary = '2324.00' ) \\n ( name = 'Laura Lindwurm' salary = '3247.00' ) \\n ( name = 'Thilo Eichbaum' salary = '5436.00' ) \\n ( name = 'Amelie Babilon' salary = '3485.00' ) \\n ( name = 'Ulla Babilon' salary = '5489.00' ) \\n ( name = 'Anna Picard' salary = '7453.00' ) \\n ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_over\_ntile DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_over\_ntile IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT name, \\n salary, \\n NTILE( 5 ) OVER( ORDER BY salary ) AS ntile \\n FROM demo\_employees \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n\\ \\n DELETE FROM demo\_employees. "#EC CI\_NOWHERE \\n INSERT demo\_employees FROM TABLE @( \\n VALUE #( ( name = 'Lothar Sudhoff' salary = '1354.00' ) \\n ( name = 'Christa Martin' salary = '3247.00' ) \\n ( name = 'Illya Gueldenpfennig' salary = '7453.00' ) \\n ( name = 'Johannes Legrand' salary = '1468.00' ) \\n ( name = 'Johann Buchholm' salary = '3245.00' ) \\n ( name = 'Holm Trensch' salary = '2324.00' ) \\n ( name = 'Laura Lindwurm' salary = '3247.00' ) \\n ( name = 'Thilo Eichbaum' salary = '5436.00' ) \\n ( name = 'Amelie Babilon' salary = '3485.00' ) \\n ( name = 'Ulla Babilon' salary = '5489.00' ) \\n ( name = 'Anna Picard' salary = '7453.00' ) \\n ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_over.html abensql\_expr\_over\_abexas.html