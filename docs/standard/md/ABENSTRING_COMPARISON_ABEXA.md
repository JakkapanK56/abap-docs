---
title: "ABENSTRING_COMPARISON_ABEXA"
description: |
  ABENSTRING_COMPARISON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_COMPARISON_ABEXA.htm"
abapFile: "ABENSTRING_COMPARISON_ABEXA.html"
keywords: ["do", "if", "try", "method", "class", "data", "ABENSTRING", "COMPARISON", "ABEXA"]
---

This example demonstrates how text strings of different lengths are compared.

Two text strings `text1` and `text2` are filled using their respective input length with the character *X* and then compared. The shorter text string is smaller than the longer one.

\* Public class definition \\nCLASS cl\_demo\_str\_comparison DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_comparison IMPLEMENTATION. \\n METHOD main. \\n DATA length1 TYPE n LENGTH 1 VALUE '4'. \\n DATA length2 TYPE n LENGTH 1 VALUE '6'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = length1 \\n )->request( CHANGING field = length2 ). \\n\\ \\n FINAL(len1) = CONV i( length1 ). \\n FINAL(len2) = CONV i( length2 ). \\n IF len1 = 0 OR len2 = 0. \\n out->write( 'Try again!' ). \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(text1) = REDUCE string( INIT str = \`\` \\n FOR i = 0 UNTIL i >= len1 \\n NEXT str &&= \`X\` ). \\n FINAL(text2) = REDUCE string( INIT str = \`\` \\n FOR i = 0 UNTIL i >= len2 \\n NEXT str &&= \`X\` ). \\n\\ \\n out->write( \\n COND #( WHEN text1 < text2 THEN |\\{ text1 \\} < \\{ text2 \\}| \\n WHEN text1 > text2 THEN |\\{ text1 \\} > \\{ text2 \\}| \\n ELSE |\\{ text1 \\} = \\{ text2 \\}| ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_comparison DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_comparison IMPLEMENTATION. \\n METHOD main. \\n DATA length1 TYPE n LENGTH 1 VALUE '4'. \\n DATA length2 TYPE n LENGTH 1 VALUE '6'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = length1 \\n )->request( CHANGING field = length2 ). \\n\\ \\n FINAL(len1) = CONV i( length1 ). \\n FINAL(len2) = CONV i( length2 ). \\n IF len1 = 0 OR len2 = 0. \\n out->write( 'Try again!' ). \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(text1) = REDUCE string( INIT str = \`\` \\n FOR i = 0 UNTIL i >= len1 \\n NEXT str &&= \`X\` ). \\n FINAL(text2) = REDUCE string( INIT str = \`\` \\n FOR i = 0 UNTIL i >= len2 \\n NEXT str &&= \`X\` ). \\n\\ \\n out->write( \\n COND #( WHEN text1 < text2 THEN |\\{ text1 \\} < \\{ text2 \\}| \\n WHEN text1 > text2 THEN |\\{ text1 \\} > \\{ text2 \\}| \\n ELSE |\\{ text1 \\} = \\{ text2 \\}| ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_operands\_dobj.html abenlogexp\_character.html