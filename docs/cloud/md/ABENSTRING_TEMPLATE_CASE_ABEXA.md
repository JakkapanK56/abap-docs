---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATE_CASE_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_CASE_ABEXA.html"
keywords: ["delete", "loop", "do", "if", "case", "method", "class", "data", "ABENSTRING", "TEMPLATE", "CASE", "ABEXA"]
---

This example demonstrates how case is specified for embedded expressions.

The three possible settings for case in a string template are specified dynamically.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_case DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_case IMPLEMENTATION. \\n METHOD main. \\n DATA: output TYPE TABLE OF string, \\n formats TYPE abap\_attrdescr\_tab, \\n format LIKE LINE OF formats. \\n\\ \\n FIELD-SYMBOLS LIKE cl\_abap\_format=>c\_raw. \\n\\ \\n formats = \\n CAST cl\_abap\_classdescr( \\n cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' ) \\n )->attributes. \\n DELETE formats WHERE name NP 'C\_\*' OR is\_constant <> 'X'. \\n\\ \\n LOOP AT formats INTO format. \\n ASSIGN cl\_abap\_format=>(format-name) TO . \\n\\ \\n APPEND |\\{ format-name WIDTH = 20 \\}| & \\n |\\{ \`UPPER CASE, lower case \` CASE = () \\}| \\n TO output. \\n ENDLOOP. \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_case DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_case IMPLEMENTATION. \\n METHOD main. \\n DATA: output TYPE TABLE OF string, \\n formats TYPE abap\_attrdescr\_tab, \\n format LIKE LINE OF formats. \\n\\ \\n FIELD-SYMBOLS LIKE cl\_abap\_format=>c\_raw. \\n\\ \\n formats = \\n CAST cl\_abap\_classdescr( \\n cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' ) \\n )->attributes. \\n DELETE formats WHERE name NP 'C\_\*' OR is\_constant <> 'X'. \\n\\ \\n LOOP AT formats INTO format. \\n ASSIGN cl\_abap\_format=>(format-name) TO . \\n\\ \\n APPEND |\\{ format-name WIDTH = 20 \\}| & \\n |\\{ \`UPPER CASE, lower case \` CASE = () \\}| \\n TO output. \\n ENDLOOP. \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html