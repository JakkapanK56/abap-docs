---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_SUBQUERY_ABEXA.htm"
abapFile: "ABENSELECT_SUBQUERY_ABEXA.html"
keywords: ["select", "loop", "do", "if", "method", "class", "types", "ABENSELECT", "SUBQUERY", "ABEXA"]
---

This example demonstrates a [subquery](ABENSUBQUERY_GLOSRY.html) in a [`WHERE`](ABAPWHERE.html) condition.

For each flight, all alternative plane types, if available, are displayed that meet a connection and the current booking status but that have fewer seats than the current plane type.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_subquery DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_subquery IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, planetype, seatsmax, \\n MAX( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid, planetype, seatsmax \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(flights). \\n\\ \\n LOOP AT flights INTO FINAL(wa). \\n out->next\_section( |\\{ wa-carrid \\} \\{ wa-connid \\}| \\n )->begin\_section( |\\{ wa-planetype \\}, \\{ \\n wa-seatsmax \\}, \\{ wa-seatsocc \\}| ). \\n SELECT planetype, seatsmax \\n FROM saplane AS plane \\n WHERE seatsmax < @wa-seatsmax AND \\n seatsmax >= ALL \\n ( SELECT seatsocc \\n FROM sflight \\n WHERE carrid = @wa-carrid AND \\n connid = @wa-connid ) \\n ORDER BY seatsmax \\n INTO (@FINAL(plane), @FINAL(seats)). \\n out->write( |\\{ plane \\}, \\{ seats \\}| )->end\_section( ). \\n ENDSELECT. \\n IF sy-subrc <> 0. \\n out->write( 'No alternative plane types found' \\n )->end\_section( ). \\n ENDIF. \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_subquery DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_subquery IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, planetype, seatsmax, \\n MAX( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid, planetype, seatsmax \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(flights). \\n\\ \\n LOOP AT flights INTO FINAL(wa). \\n out->next\_section( |\\{ wa-carrid \\} \\{ wa-connid \\}| \\n )->begin\_section( |\\{ wa-planetype \\}, \\{ \\n wa-seatsmax \\}, \\{ wa-seatsocc \\}| ). \\n SELECT planetype, seatsmax \\n FROM saplane AS plane \\n WHERE seatsmax < @wa-seatsmax AND \\n seatsmax >= ALL \\n ( SELECT seatsocc \\n FROM sflight \\n WHERE carrid = @wa-carrid AND \\n connid = @wa-connid ) \\n ORDER BY seatsmax \\n INTO (@FINAL(plane), @FINAL(seats)). \\n out->write( |\\{ plane \\}, \\{ seats \\}| )->end\_section( ). \\n ENDSELECT. \\n IF sy-subrc <> 0. \\n out->write( 'No alternative plane types found' \\n )->end\_section( ). \\n ENDIF. \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html abenwhere\_logexp\_subquery.html