---
title: "ABENMIME_HTML_ABEXA"
description: |
  ABENMIME_HTML_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMIME_HTML_ABEXA.htm"
abapFile: "ABENMIME_HTML_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENMIME", "HTML", "ABEXA"]
---

This example demonstrates how a HTML file is displayed from the MIME repository.

An API is used to load a HTML file and an image from the `MIME` repository and store them in internal tables. The method `LOAD_DATA` of the class `CL_GUI_HTML_VIEWER` is used to associate the data with the HTML control of CFW and the HTML file is displayed. The name of the image in the HTML file is the same as the URL passed to the method `LOAD_DATA` for the image. `LOAD_DATA` is given a URL for the image in the internal table and is used on the HTML page.

See also `CL_DEMO_PICTURE_FROM_MIME` for direct access to objects from the `MIME` repository using ICF.

REPORT demo\_html\_from\_mime.\\n\\nCLASS mime\_demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\n PRIVATE SECTION.\\n TYPES: mime\_line(1022) TYPE x,\\n mime\_tab TYPE STANDARD TABLE OF mime\_line\\n WITH EMPTY KEY.\\n CLASS-METHODS get\_mime\_obj\\n IMPORTING\\n mime\_url TYPE csequence\\n RETURNING\\n VALUE(mime\_tab) TYPE mime\_tab.\\nENDCLASS.\\n\\nCLASS mime\_demo IMPLEMENTATION.\\n METHOD main.\\n DATA html\_url TYPE c LENGTH 255.\\n\\n FINAL(custom\_container) = NEW\\n cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER' ).\\n FINAL(html\_control) = NEW\\n cl\_gui\_html\_viewer( parent = custom\_container ).\\n\\n DATA(pict\_tab) = get\_mime\_obj(\\n mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).\\n html\_control->load\_data(\\n EXPORTING\\n url = 'picture\_url'\\n type = 'image'\\n subtype = '.gif'\\n CHANGING\\n data\_table = pict\_tab ).\\n\\n DATA(html\_tab) = get\_mime\_obj(\\n mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/demo\_html.html' ).\\n html\_control->load\_data(\\n IMPORTING\\n assigned\_url = html\_url\\n CHANGING\\n data\_table = html\_tab ).\\n\\n html\_control->show\_url(\\n EXPORTING\\n url = html\_url ).\\n ENDMETHOD.\\n\\n METHOD get\_mime\_obj.\\n cl\_mime\_repository\_api=>get\_api( )->get(\\n EXPORTING i\_url = mime\_url\\n IMPORTING e\_content = FINAL(mime\_wa)\\n EXCEPTIONS OTHERS = 4 ).\\n IF sy-subrc = 4.\\n RETURN.\\n ENDIF.\\n mime\_tab =\\n VALUE #( LET l1 = xstrlen( mime\_wa ) l2 = l1 - 1022 IN\\n FOR j = 0 THEN j + 1022 UNTIL j >= l1\\n ( COND #( WHEN j <= l2 THEN\\n mime\_wa+j(1022)\\n ELSE mime\_wa+j ) ) ).\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n mime\_demo=>main( ).\\n CALL SCREEN 100.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html