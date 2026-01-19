---
title: "ABENCMAX_CMIN_FUNCTION_ABEXA"
description: |
  ABENCMAX_CMIN_FUNCTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCMAX_CMIN_FUNCTION_ABEXA.htm"
abapFile: "ABENCMAX_CMIN_FUNCTION_ABEXA.html"
keywords: ["do", "try", "catch", "method", "class", "data", "ABENCMAX", "CMIN", "FUNCTION", "ABEXA"]
---

This example demonstrates the extremum functions [`cmax`](ABENCMAX_CMIN_FUNCTIONS.html) and [`cmin`](ABENNMAX_NMIN_FUNCTIONS.html), plus the segment function [`segment`](ABENSEGMENT_FUNCTIONS.html).

This class determines the minimum and the maximum segment of a character string with respect to the current [code page](ABENCODEPAGE_GLOSRY.html).

\* Public class definition \\nCLASS cl\_demo\_cmax\_cmin DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cmax\_cmin IMPLEMENTATION. \\n METHOD main. \\n DATA: txt TYPE string, \\n max TYPE string, \\n min TYPE string, \\n msg TYPE string. \\n txt = \`one two three four five six seven eight nine ten\`. \\n max = \` \`. \\n min = \`§\` ##STRING\_OK. \\n DO. \\n TRY. \\n max = cmax( val1 = max \\n val2 = segment( val = txt \\n index = sy-index sep = \` \` ) ). \\n min = cmin( val1 = min \\n val2 = segment( val = txt \\n index = sy-index sep = \` \` ) ). \\n CATCH cx\_sy\_strg\_par\_val. \\n EXIT. \\n ENDTRY. \\n ENDDO. \\n out->write( \\n |Maximum is \\{ max \\} and minimum is \\{ min \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cmax\_cmin DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cmax\_cmin IMPLEMENTATION. \\n METHOD main. \\n DATA: txt TYPE string, \\n max TYPE string, \\n min TYPE string, \\n msg TYPE string. \\n txt = \`one two three four five six seven eight nine ten\`. \\n max = \` \`. \\n min = \`§\` ##STRING\_OK. \\n DO. \\n TRY. \\n max = cmax( val1 = max \\n val2 = segment( val = txt \\n index = sy-index sep = \` \` ) ). \\n min = cmin( val1 = min \\n val2 = segment( val = txt \\n index = sy-index sep = \` \` ) ). \\n CATCH cx\_sy\_strg\_par\_val. \\n EXIT. \\n ENDTRY. \\n ENDDO. \\n out->write( \\n |Maximum is \\{ max \\} and minimum is \\{ min \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_abexas.html