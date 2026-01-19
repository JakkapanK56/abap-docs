---
title: "ABENSTRING_TEMPLATE_SIGN_ABEXA"
description: |
  ABENSTRING_TEMPLATE_SIGN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_TEMPLATE_SIGN_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_SIGN_ABEXA.html"
keywords: ["delete", "loop", "if", "case", "method", "class", "data", "ABENSTRING", "TEMPLATE", "SIGN", "ABEXA"]
---

The example demonstrates how the plus/minus sign format is specified for embedded expressions.

The six possible settings for the case of a string template are specified dynamically.

\* Public class definition \\nCLASS cl\_demo\_str\_template\_sign DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_sign IMPLEMENTATION. \\n METHOD main. \\n DATA: num1 TYPE i VALUE -10, \\n num2 TYPE i VALUE +10, \\n results TYPE TABLE OF string, \\n formats TYPE abap\_attrdescr\_tab, \\n format LIKE LINE OF formats. \\n\\ \\n FIELD-SYMBOLS LIKE cl\_abap\_format=>s\_left. \\n\\ \\n formats = \\n CAST cl\_abap\_classdescr( \\n cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' ) \\n )->attributes. \\n DELETE formats WHERE name NP 'S\_\*' OR is\_constant <> 'X'. \\n\\ \\n LOOP AT formats INTO format. \\n ASSIGN cl\_abap\_format=>(format-name) TO . \\n APPEND |\\{ format-name WIDTH = 16 \\} | & \\n |"\\{ num1 SIGN = () \\}" | & \\n |"\\{ num2 SIGN = () \\}" | TO results. \\n ENDLOOP. \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_template\_sign DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_sign IMPLEMENTATION. \\n METHOD main. \\n DATA: num1 TYPE i VALUE -10, \\n num2 TYPE i VALUE +10, \\n results TYPE TABLE OF string, \\n formats TYPE abap\_attrdescr\_tab, \\n format LIKE LINE OF formats. \\n\\ \\n FIELD-SYMBOLS LIKE cl\_abap\_format=>s\_left. \\n\\ \\n formats = \\n CAST cl\_abap\_classdescr( \\n cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' ) \\n )->attributes. \\n DELETE formats WHERE name NP 'S\_\*' OR is\_constant <> 'X'. \\n\\ \\n LOOP AT formats INTO format. \\n ASSIGN cl\_abap\_format=>(format-name) TO . \\n APPEND |\\{ format-name WIDTH = 16 \\} | & \\n |"\\{ num1 SIGN = () \\}" | & \\n |"\\{ num2 SIGN = () \\}" | TO results. \\n ENDLOOP. \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html