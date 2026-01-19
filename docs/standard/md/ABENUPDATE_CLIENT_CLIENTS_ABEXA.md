---
title: "ABENUPDATE_CLIENT_CLIENTS_ABEXA"
description: |
  ABENUPDATE_CLIENT_CLIENTS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUPDATE_CLIENT_CLIENTS_ABEXA.htm"
abapFile: "ABENUPDATE_CLIENT_CLIENTS_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENUPDATE", "CLIENT", "CLIENTS", "ABEXA"]
---

This example demonstrates client handling in the ABAP SQL statement [`UPDATE`](ABAPUPDATE.html).

The example demonstrates how the additions [`USING CLIENT`](ABAPIUMD_CLIENT.html) and [`USING CLIENTS`](ABAPIUMD_CLIENT.html) are used in the statement [`UPDATE`](ABAPUPDATE.html) and in other ABAP SQL statements.

-   First, the addition [`USING ALL CLIENTS`](ABAPIUMD_CLIENT.html) of the statement [`DELETE`](ABAPDELETE_DBTAB.html) is used to delete all data in all clients from the client-dependent table `DEMO_UPDATE`.
-   The addition [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html) is used to write data with five different client IDs from a table constructed in a host expression into this DDIC database table.
-   The statement [`UPDATE`](ABAPUPDATE.html) with different variants of the [`USING`](ABAPIUMD_CLIENT.html) addition is applied to the filled table:

-   `USING CLIENT` modifies the content of the column `COL1` for the client `100`.
-   `USING CLIENTS IN @( ... )` modifies the content of the column `COL2` for the clients `200` and `300` that meet the conditions of a ranges table constructed in a host expression.
-   `USING CLIENTS IN T000` modifies the content of the column `COL3` for all clients that also exist in the system table `T000`.
-   `USING ALL CLIENTS` modifies the content of the column `COL4` for all clients.

-   In this example, the additions `USING CLIENTS IN T000` and `USING ALL CLIENTS` can select different clients, since the validity of the client IDs is not checked when data is inserted. In real application tables, however, only client IDs from the table `T000` should occur.
-   Finally, the addition [`USING ALL CLIENTS`](ABAPSELECT_CLIENT.html) of the statement [`SELECT`](ABAPSELECT.html) is used to read and display the data from all clients.

\* Public class definition \\nCLASS cl\_demo\_client\_handling DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_client\_handling IMPLEMENTATION. \\n METHOD main. \\n FINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( sy-uzeit ) min = 1 max = 10 ). \\n\\ \\n DELETE FROM demo\_update "#EC CI\_NOWHERE \\n USING ALL CLIENTS. "#EC CI\_CLIENT \\n\\ \\n INSERT demo\_update CLIENT SPECIFIED FROM TABLE @( VALUE #( \\n FOR j = 0 UNTIL j > 4 \\n FOR i = 1 UNTIL i > 4 \\n ( client = |\\{ CONV mandt( j \* 100 ) ALPHA = IN \\}| \\n id = substring( val = sy-abcde off = i - 1 len = 1 ) \\n col1 = rnd->get\_next( ) \\n col2 = rnd->get\_next( ) \\n col3 = rnd->get\_next( ) \\n col4 = rnd->get\_next( ) ) ) ) . "#EC CI\_CLIENT \\n\\ \\n UPDATE demo\_update USING CLIENT '100' "#EC CI\_CLIENT \\n SET col1 = col1 + 1000. \\n\\ \\n UPDATE demo\_update USING CLIENTS IN "#EC CI\_CLIENT \\n @( VALUE #( ( sign = 'I' \\n option = 'BT' \\n low = '200' \\n high = '300' ) ) ) \\n SET col2 = col2 + 1000. \\n\\ \\n UPDATE demo\_update USING CLIENTS IN t000 "#EC CI\_CLIENT \\n SET col3 = col3 + 1000. \\n\\ \\n UPDATE demo\_update USING ALL CLIENTS "#EC CI\_CLIENT \\n SET col4 = col4 + 1000. \\n\\ \\n SELECT client, id, col1, col2, col3, col4 \\n FROM demo\_update USING ALL CLIENTS "#EC CI\_CLIENT \\n ORDER BY client, id \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_client\_handling DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_client\_handling IMPLEMENTATION. \\n METHOD main. \\n FINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( sy-uzeit ) min = 1 max = 10 ). \\n\\ \\n DELETE FROM demo\_update "#EC CI\_NOWHERE \\n USING ALL CLIENTS. "#EC CI\_CLIENT \\n\\ \\n INSERT demo\_update CLIENT SPECIFIED FROM TABLE @( VALUE #( \\n FOR j = 0 UNTIL j > 4 \\n FOR i = 1 UNTIL i > 4 \\n ( client = |\\{ CONV mandt( j \* 100 ) ALPHA = IN \\}| \\n id = substring( val = sy-abcde off = i - 1 len = 1 ) \\n col1 = rnd->get\_next( ) \\n col2 = rnd->get\_next( ) \\n col3 = rnd->get\_next( ) \\n col4 = rnd->get\_next( ) ) ) ) . "#EC CI\_CLIENT \\n\\ \\n UPDATE demo\_update USING CLIENT '100' "#EC CI\_CLIENT \\n SET col1 = col1 + 1000. \\n\\ \\n UPDATE demo\_update USING CLIENTS IN "#EC CI\_CLIENT \\n @( VALUE #( ( sign = 'I' \\n option = 'BT' \\n low = '200' \\n high = '300' ) ) ) \\n SET col2 = col2 + 1000. \\n\\ \\n UPDATE demo\_update USING CLIENTS IN t000 "#EC CI\_CLIENT \\n SET col3 = col3 + 1000. \\n\\ \\n UPDATE demo\_update USING ALL CLIENTS "#EC CI\_CLIENT \\n SET col4 = col4 + 1000. \\n\\ \\n SELECT client, id, col1, col2, col3, col4 \\n FROM demo\_update USING ALL CLIENTS "#EC CI\_CLIENT \\n ORDER BY client, id \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapiumd\_target.html abapiumd\_client.html