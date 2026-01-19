---
title: "ABENLIST_PAGES_ABEXA"
description: |
  ABENLIST_PAGES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_PAGES_ABEXA.htm"
abapFile: "ABENLIST_PAGES_ABEXA.html"
keywords: ["select", "do", "if", "ABENLIST", "PAGES", "ABEXA"]
---

This example demonstrates how to design the page header and footer and the page breaks in lists.

The addition `LINE-SIZE` of the statement `REPORT` sets the width of the output list of the program to 60. Furthermore, the addition `LINE-COUNT` is used to set the page length to 12 and the length of the page footer to 3 (in parentheses).

This program does not use the standard page header, but one that is user-defined using `TOP-OF-PAGE`. The header consists of a single line. The page number is taken from the system field `sy-pagno`. The page footer is also user-defined and is determined in the event `END-OF-PAGE`, in the same way as the page header. Although the page footer comprises only one line, it is filled with two empty lines since three lines have been reserved for it. After subtracting the *list title* and the *column title*, this leaves four lines for the actual output.

The program starts by creating five pages with different page headers, indicating the statement to be used for initiating the next page break on each preceding page. The *list title* was defined as 'List Title' and the *column title* as the 'Column Title' in the text elements.

The statement `RESERVE` raises the event `END-OF-PAGE` and a page break since the page no longer has three more lines.

Finally, the addition `LINE-COUNT` of the statement `NEW-PAGE` sets the page length of the following pages to 15.

\\n\\n\\n\\n\\n\\n\\n\\nREPORT DEMO\_LIST\_PAGES LINE-SIZE 60 LINE-COUNT 12(3).\\n\\n\\nTOP-OF-PAGE.\\n\\n WRITE: '------', ' Top-of-page', (3) sy-pagno, '------'.\\n\\nEND-OF-PAGE.\\n\\n WRITE: '------', ' End-of-page', (3) sy-pagno, '------'.\\n\\n\\nSTART-OF-SELECTION.\\n\\n DO 32 TIMES.\\n IF sy-index = 7.\\n WRITE:/ '"NEW-PAGE NO-TITLE"'.\\n NEW-PAGE NO-TITLE.\\n ENDIF.\\n IF sy-index = 9.\\n WRITE: / '"NEW-PAGE NO-HEADING"'.\\n NEW-PAGE NO-HEADING.\\n ENDIF.\\n IF sy-index = 11.\\n WRITE: / '"NEW-PAGE WITH-TITLE"'.\\n NEW-PAGE WITH-TITLE.\\n ENDIF.\\n IF sy-index = 13.\\n WRITE: / '"NEW-PAGE WITH-HEADING"'.\\n NEW-PAGE WITH-HEADING.\\n ENDIF.\\n IF sy-index = 15.\\n WRITE: / '"RESERVE 3 LINES"'.\\n RESERVE 3 LINES.\\n ENDIF.\\n IF sy-index = 18.\\n WRITE: / '"NEW-PAGE LINE-COUNT 15"'.\\n NEW-PAGE LINE-COUNT 15.\\n ENDIF.\\n WRITE: / sy-index.\\n ENDDO.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html