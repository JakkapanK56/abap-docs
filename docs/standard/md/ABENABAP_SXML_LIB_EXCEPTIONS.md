---
title: "ABENABAP_SXML_LIB_EXCEPTIONS"
description: |
  ABENABAP_SXML_LIB_EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SXML_LIB_EXCEPTIONS.htm"
abapFile: "ABENABAP_SXML_LIB_EXCEPTIONS.html"
keywords: ["class", "data", "types", "ABENABAP", "SXML", "LIB", "EXCEPTIONS"]
---

The exception classes in the sXML library usually start with the prefix `CX_SXML`. The exceptions of category `CX_DYNAMIC_CHECK` are propagated to the caller and must be handled by the user. The subclass `CX_SXML_INTERNAL_ERROR` of `CX_NO_CHECK` represents internal errors in the library and cannot usually be handled properly in an application program.

`` \ `CX_ROOT`\ | |--`CX_DYNAMIC_CHECK`\ | | | |--`CX_ABAP_XML_NAME_ERROR`\ | | | |--`CX_SXML_ERROR`\ | | | |--`CX_SXML_ILLEGAL_ARGUMENT_ERROR`\ | | | |--`CX_SXML_NAME_ERROR`\ | | | |--`CX_SXML_PARSE_ERROR`\ | | | |--`CX_SXML_STATE_ERROR`\ | |--`CX_NO_CHECK`\ | |--`CX_SXML_INTERNAL_ERROR` ``

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_object\_types.html