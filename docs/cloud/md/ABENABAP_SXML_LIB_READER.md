---
title: "ABENABAP_SXML_LIB_READER"
description: |
  ABENABAP_SXML_LIB_READER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SXML_LIB_READER.htm"
abapFile: "ABENABAP_SXML_LIB_READER.html"
keywords: ["if", "method", "class", "data", "types", "ABENABAP", "SXML", "LIB", "READER"]
---

The interfaces and classes of sXML library for the [XML reader](ABENABAP_SXML_LIB_PARSE.html) are:

`` \ `IF_SXML` `IF_SXML_NSURI_HELPER`\ | | |---------| | |--`IF_SXML_READER`\ | |--`CL_SXML_READER`\ | |--`CL_SXML_STRING_READER`\ | |--`CL_SXML_TABLE_READER`\ | |--`CL_SXML_DATASET_READER`\ | |--`CL_SXML_HTTP_READER`\ | |--`CL_SXML_XOP_READER` ``

The interface `IF_SXML_READER` contains the components that are required for every XML reader. The abstract class `CL_SXML_READER` implements all general methods of an XML reader. The subclasses of these classes are specializations for different sources of XML data and provide a factory method for creating the associated XML reader.

The higher-level interfaces contain components for XML reader and XML writer:

-   `IF_SXML` contains constants for the supported XML format.
-   `IF_SXML_NSURI_HELPER` contains methods for namespaces.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_object\_types.html abenabap\_sxml\_lib\_reader\_writer.html