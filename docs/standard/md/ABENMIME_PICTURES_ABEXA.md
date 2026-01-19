---
title: "ABENMIME_PICTURES_ABEXA"
description: |
  ABENMIME_PICTURES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMIME_PICTURES_ABEXA.htm"
abapFile: "ABENMIME_PICTURES_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENMIME", "PICTURES", "ABEXA"]
---

The example demonstrates how images are displayed in HTML controls.

Images loaded here from the `MIME` repository using an API are displayed in two browser controls.

See also `CL_DEMO_PICTURE_FROM_MIME` for direct access to objects from the `MIME` repository using ICF.

-   The method `main1` uses the class `CL_GUI_HTML_VIEWER` directly. Its method `LOAD_DATA` is used to get a URL for the image in the internal table, which is then used on the HTML page.
-   The method `main2` uses the class `CL_ABAP_BROWSER` as a wrapper for the direct use of `CL_GUI_HTML_VIEWER` and calls of the method `LOAD_DATA`. A reference, linked with the name used in the HTML page, is passed to the internal table.

REPORT demo\_picture\_in\_html.\\n\\nCLASS picture\_demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS: main1, main2.\\n PRIVATE SECTION.\\n TYPES: html TYPE c LENGTH 255,\\n html\_tab TYPE STANDARD TABLE OF html WITH EMPTY KEY.\\n TYPES: pict\_line(1022) TYPE x,\\n pict\_tab TYPE STANDARD TABLE OF pict\_line\\n WITH EMPTY KEY.\\n CLASS-METHODS get\_pict\_tab\\n IMPORTING\\n mime\_url TYPE csequence\\n RETURNING\\n VALUE(pict\_tab) TYPE pict\_tab.\\nENDCLASS.\\n\\nCLASS picture\_demo IMPLEMENTATION.\\n METHOD main1.\\n DATA html\_url TYPE c LENGTH 255.\\n DATA pict\_url TYPE c LENGTH 255.\\n\\n FINAL(custom\_container) = NEW\\n cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER1' ).\\n FINAL(html\_control) = NEW\\n cl\_gui\_html\_viewer( parent = custom\_container ).\\n\\n DATA(pict\_tab) = get\_pict\_tab(\\n mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).\\n html\_control->load\_data(\\n EXPORTING\\n url = 'picture\_url'\\n type = 'image'\\n subtype = '.gif'\\n IMPORTING\\n assigned\_url = pict\_url\\n CHANGING\\n data\_table = pict\_tab ).\\n\\n DATA(html\_tab) = VALUE html\_tab(\\n ( '' )\\n ( 'Picture with CL\_GUI\_HTML\_VIEWER
' )\\n ( '![](' && pict_url && ')' )\\n ( '' ) ).\\n html\_control->load\_data(\\n IMPORTING\\n assigned\_url = html\_url\\n CHANGING\\n data\_table = html\_tab ).\\n\\n html\_control->show\_url(\\n EXPORTING\\n url = html\_url ).\\n ENDMETHOD.\\n\\n METHOD main2.\\n FINAL(custom\_container) = NEW\\n cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER2' ).\\n\\n DATA(pict\_tab) = get\_pict\_tab(\\n mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).\\n DATA(ext\_data) =\\n VALUE cl\_abap\_browser=>load\_tab( ( name = 'PICT.GIF'\\n type = 'image'\\n dref = REF #( pict\_tab ) ) ).\\n\\n FINAL(html\_tab) = VALUE cl\_abap\_browser=>html\_table(\\n ( '' )\\n ( 'Picture with CL\_ABAP\_BROWSER
' )\\n ( '![](PICT.GIF)' )\\n ( '' ) ).\\n\\n cl\_abap\_browser=>show\_html( html = html\_tab\\n container = custom\_container\\n data\_table = ext\_data ).\\n ENDMETHOD.\\n\\n METHOD get\_pict\_tab.\\n cl\_mime\_repository\_api=>get\_api( )->get(\\n EXPORTING i\_url = mime\_url\\n IMPORTING e\_content = FINAL(pict\_wa)\\n EXCEPTIONS OTHERS = 4 ).\\n IF sy-subrc = 4.\\n RETURN.\\n ENDIF.\\n pict\_tab =\\n VALUE #( LET l1 = xstrlen( pict\_wa ) l2 = l1 - 1022 IN\\n FOR j = 0 THEN j + 1022 UNTIL j >= l1\\n ( COND #( WHEN j <= l2 THEN\\n pict\_wa+j(1022)\\n ELSE pict\_wa+j ) ) ).\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n picture\_demo=>main1( ).\\n picture\_demo=>main2( ).\\n CALL SCREEN 100.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html