---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_GROUPING_SETS_ABEXA.htm"
abapFile: "ABENSELECT_GROUPING_SETS_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "ABENSELECT", "GROUPING", "SETS", "ABEXA"]
---

This example demonstrates the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html).

For Lufthansa flights, this example calculates the sum of the maximum available seats depending on the plane type (column `planetype`) and the connection (column `connid`). Two grouping sets are defined, which contain either the plane type or the connection.

The example shows that `SELECT` statements that use [`UNION ALL`](ABAPUNION.html) or `GROUPING SETS` are equivalent. The first [query](ABENASQL_QUERY_GLOSRY.html) defines the grouping sets `( carrid, planetype )` and `( carrid, connid )` with a `GROUP BY` clause. The second query, on the other hand, specifies the same grouping sets using two `GROUP BY` clauses and merges them using `UNION ALL`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_grouping\_sets DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_grouping\_sets IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Example for GROUPING SETS \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY GROUPING SETS ( ( carrid, planetype ), \\n ( carrid, connid ) ) \\n ORDER BY connid, planetype \\n INTO TABLE @FINAL(result\_grouping\_sets). \\n\\ \\n "Example for UNION ALL \\n SELECT FROM sflight \\n FIELDS carrid, \\n @( VALUE sflight-connid( ) ) AS connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY carrid, planetype \\n UNION ALL \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n @( VALUE sflight-planetype( ) ) AS planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid, planetype, sum\_seatsmax \\n INTO TABLE @FINAL(result\_union). \\n\\ \\n ASSERT result\_union = result\_grouping\_sets. \\n\\ \\n out->write( result\_grouping\_sets ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_grouping\_sets DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_grouping\_sets IMPLEMENTATION. \\n METHOD main. \\n\\ \\n "Example for GROUPING SETS \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY GROUPING SETS ( ( carrid, planetype ), \\n ( carrid, connid ) ) \\n ORDER BY connid, planetype \\n INTO TABLE @FINAL(result\_grouping\_sets). \\n\\ \\n "Example for UNION ALL \\n SELECT FROM sflight \\n FIELDS carrid, \\n @( VALUE sflight-connid( ) ) AS connid, \\n planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY carrid, planetype \\n UNION ALL \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n @( VALUE sflight-planetype( ) ) AS planetype, \\n SUM( seatsmax ) AS sum\_seatsmax \\n WHERE carrid = 'LH' \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid, planetype, sum\_seatsmax \\n INTO TABLE @FINAL(result\_union). \\n\\ \\n ASSERT result\_union = result\_grouping\_sets. \\n\\ \\n out->write( result\_grouping\_sets ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapgroupby\_clause.html