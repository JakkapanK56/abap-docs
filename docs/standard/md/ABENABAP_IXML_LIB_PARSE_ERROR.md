---
title: "ABENABAP_IXML_LIB_PARSE_ERROR"
description: |
  ABENABAP_IXML_LIB_PARSE_ERROR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_PARSE_ERROR.htm"
abapFile: "ABENABAP_IXML_LIB_PARSE_ERROR.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "IXML", "LIB", "PARSE", "ERROR"]
---

If a parser detects errors in the XML data to be parsed, its method `NUM_ERRORS` returns the number of errors. These can be analyzed using the objects created as follows:

DATA(error) = parser->get\_error( index = ... ).

The static type of the reference variable `error` is then the interface `IF_IXML_PARSE_ERROR`. The number of the error can be passed to the parameter `index`. Counting begins at zero. If `index` has any other values, `error` remains initial.

The parsed XML data contains tags that are not closed correctly, which means that parsing is terminated after the first incorrect tag. The parser adds the first closing tag but does not write any further data to DOM. The method `handle_errors` reads the errors.

CLASS demo DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n METHODS main. \\n METHODS handle\_errors. \\n PRIVATE SECTION. \\n DATA parser TYPE REF TO if\_ixml\_parser. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DATA(ixml) = cl\_ixml=>create( ). \\n DATA(stream\_factory) = ixml->create\_stream\_factory( ). \\n DATA(istream) = stream\_factory->create\_istream\_string( \\n \`aaabbb\` ). \\n DATA(document) = ixml->create\_document( ). \\n parser = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\n IF parser->parse( ) <> ixml\_mr\_parser\_ok. \\n handle\_errors( ). \\n RETURN. \\n ENDIF. \\n\\ \\n ... \\n ENDMETHOD. \\n\\ \\n METHOD handle\_errors. \\n DO parser->num\_errors( ) TIMES. \\n DATA(error) = parser->get\_error( index = sy-index - 1 ). \\n DATA(line) = error->get\_line( ). \\n DATA(column) = error->get\_column( ). \\n DATA(reason) = error->get\_reason( ). \\n ... \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_parse.html