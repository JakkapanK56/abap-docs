---
title: "ABENSTRING_TEMPLATE_WIDTH_ABEXA"
description: |
  ABENSTRING_TEMPLATE_WIDTH_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_TEMPLATE_WIDTH_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_WIDTH_ABEXA.html"
keywords: ["if", "method", "class", "data", "types", "ABENSTRING", "TEMPLATE", "WIDTH", "ABEXA"]
---

This example demonstrates how to specify a length for embedded expressions.

Two [iteration expressions](ABENFOR_CONDITIONAL.html) perform the built-in function `substring` for the system field `sy-abcde` in an embedded expression of a string template. The first iteration calculates the length from the length of the substring plus a fixed value. The second iteration constantly sets the length to half the length of the full string and is therefore ignored for longer substring accesses.

\* Public class definition \\nCLASS cl\_demo\_str\_template\_width DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_width IMPLEMENTATION. \\n METHOD main. \\n TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n out->write( \\n VALUE result( \\n FOR j = 1 UNTIL j > strlen( abcde ) \\n ( |\\{ substring( val = abcde len = j ) \\n WIDTH = j + 4 \\}<---| ) ) ). \\n\\ \\n out->write( \\n VALUE result( \\n FOR j = 1 UNTIL j > strlen( abcde ) \\n ( |\\{ substring( val = abcde len = j ) \\n WIDTH = strlen( abcde ) / 2 \\} <---| ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_template\_width DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_width IMPLEMENTATION. \\n METHOD main. \\n TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n out->write( \\n VALUE result( \\n FOR j = 1 UNTIL j > strlen( abcde ) \\n ( |\\{ substring( val = abcde len = j ) \\n WIDTH = j + 4 \\}<---| ) ) ). \\n\\ \\n out->write( \\n VALUE result( \\n FOR j = 1 UNTIL j > strlen( abcde ) \\n ( |\\{ substring( val = abcde len = j ) \\n WIDTH = strlen( abcde ) / 2 \\} <---| ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html