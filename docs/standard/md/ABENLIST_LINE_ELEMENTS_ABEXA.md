---
title: "ABENLIST_LINE_ELEMENTS_ABEXA"
description: |
  ABENLIST_LINE_ELEMENTS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_LINE_ELEMENTS_ABEXA.htm"
abapFile: "ABENLIST_LINE_ELEMENTS_ABEXA.html"
keywords: ["select", "do", "while", "method", "class", "data", "ABENLIST", "LINE", "ELEMENTS", "ABEXA"]
---

This example demonstrates line elements on lists.

Displays a spiral using line elements and links these automatically in a list.

REPORT demo\_list\_line\_elements NO STANDARD PAGE HEADING LINE-SIZE 60.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\n PRIVATE SECTION.\\n CLASS-DATA: x TYPE i,\\n y TYPE i.\\n CLASS-METHODS pos.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n DATA: x0 TYPE i VALUE 10,\\n y0 TYPE i VALUE 10,\\n n TYPE i VALUE 16,\\n i TYPE i VALUE 0.\\n\\n x = x0.\\n y = y0.\\n pos( ).\\n\\n WHILE i LE n.\\n WRITE line\_bottom\_left\_corner AS LINE.\\n x += 1. pos( ).\\n ULINE AT x(i).\\n x += i. pos( ).\\n WRITE line\_bottom\_right\_corner AS LINE.\\n y -= 1. pos( ).\\n DO i TIMES.\\n WRITE '|'.\\n y -= 1. pos( ).\\n ENDDO.\\n WRITE line\_top\_right\_corner AS LINE.\\n i += 1.\\n x -= i. pos( ).\\n ULINE AT x(i).\\n x -= 1. pos( ).\\n WRITE line\_top\_left\_corner AS LINE.\\n y += 1. pos( ).\\n DO i TIMES.\\n WRITE '|'.\\n y += 1. pos( ).\\n ENDDO.\\n i += 1.\\n ENDWHILE.\\n ENDMETHOD.\\n\\n METHOD pos.\\n SKIP TO LINE y.\\n POSITION x.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapwrite-.html abapwrite\_list\_elements.html