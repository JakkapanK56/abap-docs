---
title: "ABENSELECT_EXCEPT_MIN_ABEXA"
description: |
  ABENSELECT_EXCEPT_MIN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_EXCEPT_MIN_ABEXA.htm"
abapFile: "ABENSELECT_EXCEPT_MIN_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENSELECT", "EXCEPT", "MIN", "ABEXA"]
---

This example demonstrates how a difference is created across a table using an aggregate expression.

[`EXCEPT`](ABAPUNION.html) is used to create the difference of the result sets of two `SELECT` statements for the same DDIC database table. The first `SELECT` statement reads all flights for a carrier and the second `SELECT` statement aggregates the flights by connection, adding the minimum number of occupied seats. The entire result contains only the non-aggregated rows as they are only available in the first result set.

\* Public class definition \\nCLASS cl\_demo\_select\_except\_min DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_except\_min IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE sflight-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n EXCEPT SELECT carrid, \\n connid, \\n MIN( seatsocc ) AS seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_select\_except\_min DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_except\_min IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE sflight-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n EXCEPT SELECT carrid, \\n connid, \\n MIN( seatsocc ) AS seatsocc \\n FROM sflight \\n WHERE carrid = @( to\_upper( carrid ) ) \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapunion.html abenexcept\_abexas.html