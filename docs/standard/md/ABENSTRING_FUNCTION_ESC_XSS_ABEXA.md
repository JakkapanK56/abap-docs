---
title: "ABENSTRING_FUNCTION_ESC_XSS_ABEXA"
description: |
  ABENSTRING_FUNCTION_ESC_XSS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTION_ESC_XSS_ABEXA.htm"
abapFile: "ABENSTRING_FUNCTION_ESC_XSS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSTRING", "FUNCTION", "ESC", "XSS", "ABEXA"]
---

This example demonstrates the string function [`escape`](ABENESCAPE_FUNCTIONS.html) for preventing XSS.

A search term can be entered in a dialog box. An output window provides a search function in the ABAP keyword documentation and with an external search engine. By default, the input is escaped using the function `escape` and the format `cl_abap_format=>e_xss_ml`. This prevents cross site scripting ([XSS](ABENXSS_GLOSRY.html)).

The function can be disabled for specific input to demonstrate the effects of an XSS attack. The input makes the links on the output window and the following input field unusable. More harmful functions could be used instead of the JavaScript function `alert`, but are not allowed in this example.

\* Public class definition \\nCLASS cl\_demo\_xss DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor . \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n in TYPE REF TO if\_demo\_input, \\n icf\_node TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xss IMPLEMENTATION. \\n METHOD main. \\n CONSTANTS xss\_demo TYPE string \\n VALUE \`foo" onmouseover="alert('Gotcha!')\`. \\n\\ \\n DATA: query TYPE string VALUE \`ABAP Objects\`, \\n esc\_flag TYPE abap\_bool VALUE abap\_true, \\n xss\_flag TYPE abap\_bool VALUE abap\_false. \\n\\ \\n DO. \\n in->add\_field( EXPORTING text = 'Input' \\n CHANGING field = query \\n )->add\_field( EXPORTING text = 'Escape' \\n as\_checkbox = abap\_true \\n CHANGING field = esc\_flag \\n )->request( EXPORTING text = 'XSS-Demo' \\n as\_checkbox = abap\_true \\n CHANGING field = xss\_flag ). \\n IF query IS INITIAL AND xss\_flag = abap\_false. \\n EXIT. \\n ENDIF. \\n\\ \\n IF xss\_flag = abap\_true. \\n query = escape( val = xss\_demo \\n format = cl\_abap\_format=>e\_xss\_ml ). \\n xss\_flag = abap\_false. \\n CONTINUE. \\n ENDIF. \\n\\ \\n IF esc\_flag = abap\_true. \\n query = escape( val = query \\n format = cl\_abap\_format=>e\_xss\_ml ). \\n ELSEIF query <> xss\_demo. \\n MESSAGE \\n \`Without escaping only the prepared XSS-Demo is allowed.\` \\n TYPE 'I'. \\n CONTINUE. \\n ENDIF. \\n\\ \\n FINAL(html) = \\n \`\` && \\n \`\` && \\n \`

[Search in ABAP Documentation](` && icf_node && \n        `?query=` && query && \n        `)

\` && \\n \`

[Search with Google](http://www.google.com/search?q=` && \n        query && `)

\` && \\n \`\` && \\n \`\` ##no\_text. \\n cl\_abap\_browser=>show\_html( html\_string = html \\n buttons = abap\_true \\n check\_html = abap\_false \\n context\_menu = abap\_true ). \\n ENDDO. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/docu\`. \\n FINAL(location) = \\n cl\_http\_server=>get\_location( application = path ). \\n IF location IS NOT INITIAL. \\n icf\_node = location && path. \\n ENDIF. \\n in = cl\_demo\_input=>new( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_xss DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor . \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n in TYPE REF TO if\_demo\_input, \\n icf\_node TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xss IMPLEMENTATION. \\n METHOD main. \\n CONSTANTS xss\_demo TYPE string \\n VALUE \`foo" onmouseover="alert('Gotcha!')\`. \\n\\ \\n DATA: query TYPE string VALUE \`ABAP Objects\`, \\n esc\_flag TYPE abap\_bool VALUE abap\_true, \\n xss\_flag TYPE abap\_bool VALUE abap\_false. \\n\\ \\n DO. \\n in->add\_field( EXPORTING text = 'Input' \\n CHANGING field = query \\n )->add\_field( EXPORTING text = 'Escape' \\n as\_checkbox = abap\_true \\n CHANGING field = esc\_flag \\n )->request( EXPORTING text = 'XSS-Demo' \\n as\_checkbox = abap\_true \\n CHANGING field = xss\_flag ). \\n IF query IS INITIAL AND xss\_flag = abap\_false. \\n EXIT. \\n ENDIF. \\n\\ \\n IF xss\_flag = abap\_true. \\n query = escape( val = xss\_demo \\n format = cl\_abap\_format=>e\_xss\_ml ). \\n xss\_flag = abap\_false. \\n CONTINUE. \\n ENDIF. \\n\\ \\n IF esc\_flag = abap\_true. \\n query = escape( val = query \\n format = cl\_abap\_format=>e\_xss\_ml ). \\n ELSEIF query <> xss\_demo. \\n MESSAGE \\n \`Without escaping only the prepared XSS-Demo is allowed.\` \\n TYPE 'I'. \\n CONTINUE. \\n ENDIF. \\n\\ \\n FINAL(html) = \\n \`\` && \\n \`\` && \\n \`

[Search in ABAP Documentation](` && icf_node && \n        `?query=` && query && \n        `)

\` && \\n \`

[Search with Google](http://www.google.com/search?q=` && \n        query && `)

\` && \\n \`\` && \\n \`\` ##no\_text. \\n cl\_abap\_browser=>show\_html( html\_string = html \\n buttons = abap\_true \\n check\_html = abap\_false \\n context\_menu = abap\_true ). \\n ENDDO. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/docu\`. \\n FINAL(location) = \\n cl\_http\_server=>get\_location( application = path ). \\n IF location IS NOT INITIAL. \\n icf\_node = location && path. \\n ENDIF. \\n in = cl\_demo\_input=>new( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_abexas.html