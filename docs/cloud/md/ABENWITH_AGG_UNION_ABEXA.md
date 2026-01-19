---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWITH_AGG_UNION_ABEXA.htm"
abapFile: "ABENWITH_AGG_UNION_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENWITH", "AGG", "UNION", "ABEXA"]
---

This example demonstrates how to use [`WITH`](ABAPWITH.html) for an aggregation.

This example has the same result as the executable example for a [union with a global temporary table](ABENSELECT_UNION_SUM_GTT_ABEXA.html). The source code is almost identical. Here the global temporary table `demo_sflight_agg` has been replaced by a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)\\ `+agg` and both `SELECT` statements are part of a `WITH` statement.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_union\_sum\_cte DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_union\_sum\_cte IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE sflight-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n WITH +agg AS ( \\n SELECT carrid, \\n connid, \\n CAST( '00000000' AS DATS ) AS fldate, \\n SUM( seatsocc ) AS seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n GROUP BY carrid, connid ) \\n SELECT ' ' AS mark, carrid, connid, fldate, seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n UNION SELECT 'X' AS mark, \\n carrid, connid, fldate, seatsocc \\n FROM +agg \\n ORDER BY carrid, connid, mark, fldate, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_union\_sum\_cte DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_union\_sum\_cte IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE sflight-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n WITH +agg AS ( \\n SELECT carrid, \\n connid, \\n CAST( '00000000' AS DATS ) AS fldate, \\n SUM( seatsocc ) AS seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n GROUP BY carrid, connid ) \\n SELECT ' ' AS mark, carrid, connid, fldate, seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n UNION SELECT 'X' AS mark, \\n carrid, connid, fldate, seatsocc \\n FROM +agg \\n ORDER BY carrid, connid, mark, fldate, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html abenwith\_abexas.html