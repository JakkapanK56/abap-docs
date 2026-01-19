---
title: "ABENSTRING_FUNCTION_FIND_ABEXA"
description: |
  ABENSTRING_FUNCTION_FIND_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_FUNCTION_FIND_ABEXA.htm"
abapFile: "ABENSTRING_FUNCTION_FIND_ABEXA.html"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "ABENSTRING", "FUNCTION", "FIND", "ABEXA"]
---

The example demonstrates the string functions [`count`](ABENCOUNT_FUNCTIONS.html), [`find`](ABENSEARCH_FUNCTIONS.html), and [`match`](ABENMATCH_FUNCTIONS.html).

In the text field `text`, all occurrences are found using `count` and `find` that match a regular expression. When a search is successful, the substring found is read and displayed using the function `match`.

Instead of using the function `count`, it is also possible to use an unlimited `DO` loop that is exited using `EXIT` if the result of `find` has the value -1.

\* Public class definition \\nCLASS cl\_demo\_find\_and\_match DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_find\_and\_match IMPLEMENTATION. \\n METHOD main. \\n DATA: text TYPE c LENGTH 120 \\n VALUE \`Cathy's cat with the hat sat on Matt's mat.\`, \\n regx TYPE c LENGTH 120 \\n VALUE \`\\\\b.at\\\\b\`. \\n DATA: result TYPE i, \\n substr TYPE string. \\n DATA o TYPE c LENGTH 120. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = text \\n )->request( CHANGING field = regx ). \\n out->write( text ). \\n TRY. \\n result = count( val = text \\n pcre = regx ). \\n IF result = 0. \\n out->write( 'Nothing found' ). \\n RETURN. \\n ENDIF. \\n DO result TIMES. \\n result = find( val = text \\n pcre = regx \\n occ = sy-index ). \\n substr = match( val = text \\n pcre = regx \\n occ = sy-index ). \\n DATA(len) = strlen( substr ). \\n IF len <> 0. \\n o+result(len) = substr. \\n ELSE. \\n o+result(1) = '°' ##STRING\_OK. \\n ENDIF. \\n ENDDO. \\n CATCH cx\_sy\_invalid\_regex INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n out->write( o ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_find\_and\_match DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_find\_and\_match IMPLEMENTATION. \\n METHOD main. \\n DATA: text TYPE c LENGTH 120 \\n VALUE \`Cathy's cat with the hat sat on Matt's mat.\`, \\n regx TYPE c LENGTH 120 \\n VALUE \`\\\\b.at\\\\b\`. \\n DATA: result TYPE i, \\n substr TYPE string. \\n DATA o TYPE c LENGTH 120. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = text \\n )->request( CHANGING field = regx ). \\n out->write( text ). \\n TRY. \\n result = count( val = text \\n pcre = regx ). \\n IF result = 0. \\n out->write( 'Nothing found' ). \\n RETURN. \\n ENDIF. \\n DO result TIMES. \\n result = find( val = text \\n pcre = regx \\n occ = sy-index ). \\n substr = match( val = text \\n pcre = regx \\n occ = sy-index ). \\n DATA(len) = strlen( substr ). \\n IF len <> 0. \\n o+result(len) = substr. \\n ELSE. \\n o+result(1) = '°' ##STRING\_OK. \\n ENDIF. \\n ENDDO. \\n CATCH cx\_sy\_invalid\_regex INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n out->write( o ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_abexas.html