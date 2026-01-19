---
title: "ABENDYNPRO_STRINGS_ABEXA"
description: |
  ABENDYNPRO_STRINGS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_STRINGS_ABEXA.htm"
abapFile: "ABENDYNPRO_STRINGS_ABEXA.html"
keywords: ["select", "do", "method", "class", "data", "ABENDYNPRO", "STRINGS", "ABEXA"]
---

This example demonstrates how to bind strings to dynpro fields.

The static next dynpro number of dynpro 100 is 0. There are four input fields `STRING1`, `STRING2`, `CHAR1`, and `CHAR2` of type `CHAR` with a length of 10. No modules are called in the dynpro flow logic.

When the program is executed, the screen layout is displayed with the values *123* and *1234567890* in the fields `STRING1`\\ `CHAR1` and `STRING2/CHAR2`. After confirming with *Continue*, a list appears that displays the length of the content of the associated ABAP fields at PBO and PAI.

At PBO, `STRING1` contains ten characters, seven of which are trailing blanks. These are lost during the assignment to `CHAR1` and the character length of `CHAR1` is only three.

At PAI, `STRING1` contains only three characters, because the blanks are suppressed during the transport to and from the dynpro.

In both `STRING2` and `CHAR2`, all characters that do not fit into the corresponding dynpro fields are cut off.

REPORT demo\_dynpro\_strings.\\n\\nDATA: string1 TYPE string,\\n string2 TYPE string,\\n char1 TYPE c LENGTH 10,\\n char2 TYPE c LENGTH 100.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n DATA len TYPE i.\\n\\n string1 = \`123 \`.\\n string2 = \`12345678901234567890\`.\\n char1 = string1.\\n char2 = string2.\\n\\n len = STRLEN( string1 ).\\n WRITE: 'PBO:',\\n / 'Length of STRING1:', len.\\n len = STRLEN( char1 ).\\n WRITE: / 'Length of CHAR1: ', len.\\n len = STRLEN( string2 ).\\n WRITE: / 'Length of STRING2:', len.\\n len = STRLEN( char2 ).\\n WRITE: / 'Length of CHAR2: ', len.\\n ULINE.\\n\\n CALL SCREEN 100.\\n\\n len = STRLEN( string1 ).\\n WRITE: 'PAI:',\\n / 'Length of STRING1:', len.\\n len = STRLEN( char1 ).\\n WRITE: / 'Length of CHAR1: ', len.\\n len = STRLEN( string2 ).\\n WRITE: / 'Length of STRING2:', len.\\n len = STRLEN( char2 ).\\n WRITE: / 'Length of CHAR2: ', len.\\n ULINE.\\n\\n ENDMETHOD.\\n ENDCLASS.\\n\\n START-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpro\_user\_actions.html abendynpro\_field\_abexas.html