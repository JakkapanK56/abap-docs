---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENGROUPING_FUNCTION_ABEXA.htm"
abapFile: "ABENGROUPING_FUNCTION_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "ABENGROUPING", "FUNCTION", "ABEXA"]
---

This example demonstrates the grouping function [`GROUPING`](ABENGROUPING_FUNCTION.html).

For Lufthansa flights, this example calculates the sum of the maximum available seats depending on the plane type (column `planetype`), the connection (column `connid`), and the carrier (column `carrid`).

The grouping function for the plane type column, connection column, or carrier column is used to determine whether they are part of the aggregation. The following combinations of the grouping sets are used to do this:

-   `( carrid, connid, planetype )`
-   `( carrid, connid )`
-   `( carrid, planetype )`
-   `( connid, planetype )`
-   `( carrid )`
-   `( connid )`
-   `( planetype )`
-   Empty grouping set `( )`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_grouping\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_grouping\_function IMPLEMENTATION. \\n METHOD main. \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax, \\n grouping( carrid ) AS grouping\_carrid, \\n grouping( connid ) AS grouping\_connid, \\n grouping( planetype ) AS grouping\_planetype \\n WHERE carrid = 'LH' \\n GROUP BY GROUPING SETS ( ( carrid, connid, planetype ), \\n ( carrid, connid ), \\n ( carrid, planetype ), \\n ( connid, planetype ), \\n ( carrid ), \\n ( connid ), \\n ( planetype ), \\n ( ) ) \\n INTO TABLE @FINAL(result\_grouping). \\n\\ \\n out->write( result\_grouping ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_grouping\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_grouping\_function IMPLEMENTATION. \\n METHOD main. \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax, \\n grouping( carrid ) AS grouping\_carrid, \\n grouping( connid ) AS grouping\_connid, \\n grouping( planetype ) AS grouping\_planetype \\n WHERE carrid = 'LH' \\n GROUP BY GROUPING SETS ( ( carrid, connid, planetype ), \\n ( carrid, connid ), \\n ( carrid, planetype ), \\n ( connid, planetype ), \\n ( carrid ), \\n ( connid ), \\n ( planetype ), \\n ( ) ) \\n INTO TABLE @FINAL(result\_grouping). \\n\\ \\n out->write( result\_grouping ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapgroupby\_clause.html