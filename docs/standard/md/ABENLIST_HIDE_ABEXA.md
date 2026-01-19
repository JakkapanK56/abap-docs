---
title: "ABENLIST_HIDE_ABEXA"
description: |
  ABENLIST_HIDE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_HIDE_ABEXA.htm"
abapFile: "ABENLIST_HIDE_ABEXA.html"
keywords: ["select", "do", "while", "if", "case", "class", "data", "ABENLIST", "HIDE", "ABEXA"]
---

This example demonstrates how to implement program-driven data passes for lists to the ABAP program using `HIDE`.

At the event `START-OF-SELECTION`, the status `FLIGHT` is set for the basic list. In the status `FLIGHT`, the function key F2 and a pushbutton are assigned the function code `SELE` (text *`SELECT`*). This means the event `AT USER-COMMAND` is raised when the user double-clicks, presses F2, or chooses the pushbutton *`SELECT`*.

The three fields `spfli-carrid`, `spfli-connid`, and `num` are written to the [Hide](ABENHIDE_AREA_GLOSRY.html) area while the basic list is created. After a line is selected, the details list defined for the function code `SELE` in `AT USER-COMMAND` is displayed. After the `AT USER-COMMAND` event, all fields of the selected line that were stored in the Hide area are loaded again. `num` is used to check whether a line from the actual list was selected. The details list is given the status `BOOKING`, where F2 is assigned the function code `INFO` (with the text *Booking Information*) The details list displays data which can be selected using the Hide fields of the basic list. For each list line that is output, the system stores additional information in the [Hide](ABENHIDE_AREA_GLOSRY.html) area.

If the user selects a line of the details list, the system displays the stored information in a dialog box with the status `WIND`. For the `WIND` status, the default values are applied when the list status is synchronized. `sbook-bookid` is used to check whether a valid line was selected.

The program itself sets all page headers and the title bar of the dialog box.

REPORT demo\_list\_hide NO STANDARD PAGE HEADING.\\n\\nTABLES: spfli, sbook.\\n\\nDATA: num TYPE i,\\n dat TYPE d.\\n\\nSTART-OF-SELECTION.\\n\\n num = 0.\\n SET PF-STATUS 'FLIGHT'.\\n\\nGET spfli.\\n\\n num += 1.\\n WRITE: / spfli-carrid, spfli-connid,\\n spfli-cityfrom, spfli-cityto.\\n HIDE: spfli-carrid, spfli-connid, num.\\n\\nEND-OF-SELECTION.\\n\\n CLEAR num.\\n\\nTOP-OF-PAGE.\\n\\n WRITE 'List of Flights'.\\n ULINE.\\n WRITE 'CA CONN FROM TO'.\\n ULINE.\\n\\nTOP-OF-PAGE DURING LINE-SELECTION.\\n\\n CASE sy-pfkey.\\n WHEN 'BOOKING'.\\n WRITE sy-lisel.\\n ULINE.\\n WHEN 'WIND'.\\n WRITE: 'Booking', sbook-bookid,\\n / 'Date ', sbook-fldate.\\n ULINE.\\n ENDCASE.\\n\\nAT USER-COMMAND.\\n\\n CASE sy-ucomm.\\n WHEN 'SELE'.\\n IF num NE 0.\\n SET PF-STATUS 'BOOKING'.\\n CLEAR dat.\\n SELECT \* FROM sbook WHERE carrid = spfli-carrid\\n AND connid = spfli-connid.\\n IF sbook-fldate NE dat.\\n dat = sbook-fldate.\\n SKIP.\\n WRITE / sbook-fldate.\\n POSITION 16.\\n ELSE.\\n NEW-LINE.\\n POSITION 16.\\n ENDIF.\\n WRITE sbook-bookid.\\n HIDE: sbook-bookid, sbook-fldate, sbook-custtype,\\n sbook-smoker, sbook-luggweight, sbook-class.\\n ENDSELECT.\\n IF sy-subrc NE 0.\\n WRITE / 'No bookings for this flight'.\\n ENDIF.\\n num = 0.\\n CLEAR sbook-bookid.\\n ENDIF.\\n WHEN 'INFO'.\\n IF NOT sbook-bookid IS INITIAL.\\n SET PF-STATUS 'WIND'.\\n SET TITLEBAR 'BKI'.\\n WINDOW STARTING AT 30 5 ENDING AT 60 10.\\n WRITE: 'Customer type :', sbook-custtype,\\n / 'Smoker :', sbook-smoker,\\n / 'Luggage weigtht :', sbook-luggweight UNIT 'KG',\\n / 'Class :', sbook-class.\\n ENDIF.\\n ENDCASE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abaphide.html