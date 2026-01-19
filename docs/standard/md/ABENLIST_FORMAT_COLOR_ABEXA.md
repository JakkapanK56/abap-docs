---
title: "ABENLIST_FORMAT_COLOR_ABEXA"
description: |
  ABENLIST_FORMAT_COLOR_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_FORMAT_COLOR_ABEXA.htm"
abapFile: "ABENLIST_FORMAT_COLOR_ABEXA.html"
keywords: ["if", "data", "ABENLIST", "FORMAT", "COLOR", "ABEXA"]
---

This example demonstrates how colors can make lists easier to read.

All headers are displayed with the background color `COL_HEADING`. The key fields from the table `SPFLI` are defined using `COL_KEY`. At the event `GET`\\ `sflight`, the list body has a different line background color (`COL_NORMAL`) than the background of the list (`COL_BACKGROUND`). In addition, flights where the number of bookings falls below a certain minimum number, have a red background. The total number of bookings for each flight has a yellow background.

It should be noted that after each event the system assumes the default setting (`COLOR OFF`, `INTENSIFIED ON`). For this reason, the line background of 'Total Bookings:' at the event `GET LATE` becomes `COL_BACKGROUND` again in the program above. `INTENSIFIED` is set to `OFF` here to preserve the same foreground color as for the other values displayed.

REPORT demo\_list\_format\_color\_2 NO STANDARD PAGE HEADING LINE-SIZE 70.\\n\\nNODES: spfli, sflight.\\nDATA sum TYPE i.\\n\\nTOP-OF-PAGE.\\n\\n WRITE 'List of Flights' COLOR COL\_HEADING.\\n ULINE.\\n\\nGET spfli.\\n\\n FORMAT COLOR COL\_HEADING.\\n WRITE: 'CARRID', 10 'CONNID', 20 'FROM', 40 'TO'.\\n\\n FORMAT COLOR COL\_KEY.\\n WRITE: / spfli-carrid UNDER 'CARRID',\\n spfli-connid UNDER 'CONNID',\\n spfli-cityfrom UNDER 'FROM',\\n spfli-cityto UNDER 'TO'.\\n ULINE.\\n\\n FORMAT COLOR COL\_HEADING.\\n WRITE: 'Date', 20 'Seats Occupied', 50 'Seats Available'.\\n ULINE.\\n\\n sum = 0.\\n\\nGET sflight.\\n\\n IF sflight-seatsocc LE 10.\\n FORMAT COLOR COL\_NEGATIVE.\\n ELSE.\\n FORMAT COLOR COL\_NORMAL.\\n ENDIF.\\n\\n WRITE: sflight-fldate UNDER 'Date',\\n sflight-seatsocc UNDER 'Seats Occupied',\\n sflight-seatsmax UNDER 'Seats Available'.\\n\\n sum += sflight-seatsocc.\\n\\nGET spfli LATE.\\n\\n ULINE.\\n WRITE: 'Total Bookings: ' INTENSIFIED OFF,\\n sum COLOR COL\_TOTAL.\\n ULINE.\\n SKIP.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapwrite-.html abapwrite\_ext\_options.html