---
title: "ABENABAP_IXML_LIB_C_PARSE_ERROR"
description: |
  ABENABAP_IXML_LIB_C_PARSE_ERROR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_IXML_LIB_C_PARSE_ERROR.htm"
abapFile: "ABENABAP_IXML_LIB_C_PARSE_ERROR.html"
keywords: ["if", "method", "data", "ABENABAP", "IXML", "LIB", "PARSE", "ERROR"]
---

If a parser detects errors in the XML data to be parsed, its method `NUM_ERRORS` returns the number of errors. These can be analyzed using the objects created as follows:

DATA(error) = parser->get\_error( index = ... ).

The static type of the reference variable `error` is then the interface `IF_IXML_PARSE_ERROR_CORE`. The number of the error can be passed to the parameter `index`. Counting begins at zero. If `index` has any other values, `error` remains initial.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_parse.html