---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_INTERSECT_MAX_ABEXA.htm"
abapFile: "ABENSELECT_INTERSECT_MAX_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSELECT", "INTERSECT", "MAX", "ABEXA"]
---

This example demonstrates how an intersection is created across a table using an aggregate expression.

[`INTERSECT`](ABAPUNION.html) is used to create the intersection of the result sets of two `SELECT` statements for the same DDIC database table. The first `SELECT` statement reads all flights and the second `SELECT` statement aggregates the flights by connection, determining the maximum number of occupied seats. The entire result contains the aggregated rows checked against the associated rows of the first result set. Only the connections with the highest seats occupation are shown.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_intrsct\_max DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_intrsct\_max IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n INTERSECT SELECT carrid, \\n connid, \\n MAX( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_intrsct\_max DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_intrsct\_max IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, seatsocc \\n FROM sflight \\n INTERSECT SELECT carrid, \\n connid, \\n MAX( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid, seatsocc \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapunion.html abenintersect\_abexas.html