---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_EXCEPT_MIN_GTT_ABEXA.htm"
abapFile: "ABENSELECT_EXCEPT_MIN_GTT_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENSELECT", "EXCEPT", "MIN", "GTT", "ABEXA"]
---

This example demonstrates a difference across a table and a global temporary table (GTT).

This example has the same result as the executable example for a [difference with aggregate expression](ABENSELECT_EXCEPT_MIN_ABEXA.html). Here, however, the `SELECT` statement is split into two ABAP SQL statements for demonstration purposes:

The GTT must be cleared explicitly before the end of the execution to prevent the runtime error `COMMIT_GTT_ERROR` in the next implicit database commit.

-   The aggregation is performed in the [subquery](ABENSUBQUERY_GLOSRY.html) of an [`INSERT`](ABAPINSERT_DBTAB.html) statement whose result set is written to a [global temporary table (GTT)](ABENDDIC_DATABASE_TABLES_GTT.html).
-   [`EXCEPT`](ABAPUNION.html) is used to create the difference of the result set of a `SELECT` statement on the table `SFLIGHT` and a `SELECT` statement on the GTT.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_except\_min\_gtt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_except\_min\_gtt IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE sflight-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n INSERT demo\_sflight\_agg FROM ( \\n SELECT carrid, \\n connid, \\n CAST( '00000000' AS DATS ) AS fldate, \\n MIN( seatsocc ) AS seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n GROUP BY carrid, connid ). \\n\\ \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n EXCEPT SELECT carrid, connid, seatsocc \\n FROM demo\_sflight\_agg \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n DELETE FROM demo\_sflight\_agg. \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_except\_min\_gtt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_except\_min\_gtt IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE sflight-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n INSERT demo\_sflight\_agg FROM ( \\n SELECT carrid, \\n connid, \\n CAST( '00000000' AS DATS ) AS fldate, \\n MIN( seatsocc ) AS seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n GROUP BY carrid, connid ). \\n\\ \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n EXCEPT SELECT carrid, connid, seatsocc \\n FROM demo\_sflight\_agg \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n DELETE FROM demo\_sflight\_agg. \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapunion.html abenexcept\_abexas.html