---
title: "ABENSELECT_INTERSECT_MAX_GTT_ABEXA"
description: |
  ABENSELECT_INTERSECT_MAX_GTT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_INTERSECT_MAX_GTT_ABEXA.htm"
abapFile: "ABENSELECT_INTERSECT_MAX_GTT_ABEXA.html"
keywords: ["select", "insert", "delete", "method", "class", "data", "ABENSELECT", "INTERSECT", "MAX", "GTT", "ABEXA"]
---

This example demonstrates an intersection across a table and a global temporary table (GTT).

This example has the same result as the executable example for an [intersection with aggregate expression](ABENSELECT_INTERSECT_MAX_ABEXA.html). Here, however, the `SELECT` statement is split into two ABAP SQL statements for demonstration purposes:

The GTT must be cleared explicitly before the end of the execution to prevent the runtime error `COMMIT_GTT_ERROR` in the next implicit database commit.

-   The aggregation is performed in the [subquery](ABENSUBQUERY_GLOSRY.html) of an [`INSERT`](ABAPINSERT_DBTAB.html) statement whose result set is written to a [global temporary table (GTT)](ABENDDIC_DATABASE_TABLES_GTT.html).
-   [`INTERSECT`](ABAPUNION.html) is used to create the intersection of the result set of a `SELECT` statement on the table `SFLIGHT` and a `SELECT` statement on the GTT.

\* Public class definition \\nCLASS cl\_demo\_select\_intrsct\_max\_gtt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_intrsct\_max\_gtt IMPLEMENTATION. \\n METHOD main. \\n\\ \\n INSERT demo\_sflight\_agg FROM ( \\n SELECT carrid, \\n connid, \\n CAST( '00000000' AS DATS ) AS fldate, \\n MAX( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid ). \\n\\ \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n INTERSECT SELECT carrid, connid, seatsocc \\n FROM demo\_sflight\_agg \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n DELETE FROM demo\_sflight\_agg. \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_select\_intrsct\_max\_gtt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_intrsct\_max\_gtt IMPLEMENTATION. \\n METHOD main. \\n\\ \\n INSERT demo\_sflight\_agg FROM ( \\n SELECT carrid, \\n connid, \\n CAST( '00000000' AS DATS ) AS fldate, \\n MAX( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid ). \\n\\ \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n INTERSECT SELECT carrid, connid, seatsocc \\n FROM demo\_sflight\_agg \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n DELETE FROM demo\_sflight\_agg. \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapunion.html abenintersect\_abexas.html