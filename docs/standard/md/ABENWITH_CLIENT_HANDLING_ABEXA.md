---
title: "ABENWITH_CLIENT_HANDLING_ABEXA"
description: |
  ABENWITH_CLIENT_HANDLING_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWITH_CLIENT_HANDLING_ABEXA.htm"
abapFile: "ABENWITH_CLIENT_HANDLING_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENWITH", "CLIENT", "HANDLING", "ABEXA"]
---

This example demonstrates client handling in the statement [`WITH`](ABAPWITH.html).

In the subquery of the [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)\\ `+cte`, the addition `USING ALL CLIENTS` is used to access the client-dependent DDIC database table `SCARR`. This means data is read from all clients. The client column is part of the `SELECT` list.

The main query of the `WITH` statement reads the common table expressions. A restriction to one specific client is achieved by defining the column `MANDT` of the client-independent result set of `+cte` as a client column and using the addition `USING CLIENT`.

\* Public class definition \\nCLASS cl\_demo\_cte\_client\_handling DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cte\_client\_handling IMPLEMENTATION. \\n METHOD main. \\n DATA client TYPE scarr-mandt. \\n cl\_demo\_input=>new( )->request( CHANGING field = client ). \\n\\ \\n WITH \\n +cte AS ( SELECT mandt, carrid, carrname \\n FROM scarr USING ALL CLIENTS ) \\n SELECT \* \\n FROM +cte DECLARE CLIENT mandt \\n USING CLIENT @client \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cte\_client\_handling DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cte\_client\_handling IMPLEMENTATION. \\n METHOD main. \\n DATA client TYPE scarr-mandt. \\n cl\_demo\_input=>new( )->request( CHANGING field = client ). \\n\\ \\n WITH \\n +cte AS ( SELECT mandt, carrid, carrname \\n FROM scarr USING ALL CLIENTS ) \\n SELECT \* \\n FROM +cte DECLARE CLIENT mandt \\n USING CLIENT @client \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html abenwith\_abexas.html