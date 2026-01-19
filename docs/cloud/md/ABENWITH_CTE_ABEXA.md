---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWITH_CTE_ABEXA.htm"
abapFile: "ABENWITH_CTE_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENWITH", "CTE", "ABEXA"]
---

This example demonstrates how common table expressions are used in the statement [`WITH`](ABAPWITH.html).

A common table expression `+conns` creates a table of flight connections. A further expression, `+cnts`, determines the number of entries in the result set of `+conns`. The closing main query combines the result sets of both common table expressions using a [cross join](ABAPSELECT_JOIN.html). This makes available the number of entries in every row of the result set of the `WITH` statement. The common table expression `+conns` is used twice in the `WITH` statement.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cte DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: BEGIN OF struct, \\n carrname TYPE scarr-carrname, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n cnt TYPE int8, \\n END OF struct. \\n DATA itab TYPE TABLE OF struct WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cte IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE spfli-carrid VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n carrid = to\_upper( carrid ). \\n\\ \\n WITH \\n +conns AS ( \\n SELECT carrname, connid, cityfrom, cityto \\n FROM spfli \\n JOIN scarr ON spfli~carrid = scarr~carrid \\n WHERE spfli~carrid = @carrid ), \\n +cnts AS ( \\n SELECT COUNT(\*) AS cnt \\n FROM +conns ) \\n SELECT \* \\n FROM +cnts \\n CROSS JOIN +conns \\n ORDER BY carrname, connid \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cte DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: BEGIN OF struct, \\n carrname TYPE scarr-carrname, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n cnt TYPE int8, \\n END OF struct. \\n DATA itab TYPE TABLE OF struct WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cte IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE spfli-carrid VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n carrid = to\_upper( carrid ). \\n\\ \\n WITH \\n +conns AS ( \\n SELECT carrname, connid, cityfrom, cityto \\n FROM spfli \\n JOIN scarr ON spfli~carrid = scarr~carrid \\n WHERE spfli~carrid = @carrid ), \\n +cnts AS ( \\n SELECT COUNT(\*) AS cnt \\n FROM +conns ) \\n SELECT \* \\n FROM +cnts \\n CROSS JOIN +conns \\n ORDER BY carrname, connid \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html abenwith\_abexas.html