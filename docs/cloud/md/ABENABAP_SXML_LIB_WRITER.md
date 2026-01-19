---
title: "ABENABAP_SXML_LIB_WRITER"
description: |
  ABENABAP_SXML_LIB_WRITER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SXML_LIB_WRITER.htm"
abapFile: "ABENABAP_SXML_LIB_WRITER.html"
keywords: ["if", "method", "class", "data", "types", "ABENABAP", "SXML", "LIB", "WRITER"]
---

The interfaces and classes of sXML library for the [XML writer](ABENABAP_SXML_LIB_RENDER.html) are:

`` \ `IF_SXML` `IF_SXML_NSURI_HELPER`\ | | |---------| | |--`IF_SXML_WRITER`\ | |--`CL_SXML_WRITER`\ | |-------`CL_SXML_STRING_WRITER`\ | |-------`CL_SXML_TABLE_WRITER`\ | |-------`CL_SXML_DATASET_WRITER`\ | |-------`CL_SXML_HTTP_WRITER`\ | | `IF_SXML_XOP`\ | | |----|--`CL_SXML_XOP_WRITER` ``

The interface `IF_SXML_WRITER` contains the components that are required for every XML writer. The abstract class `CL_SXML_WRITER` implements all the general methods of an XML writer. The subclasses of these classes are specializations for different repositories of XML data and provide a factory method for creating the associated XML writer.

The higher-level interfaces contain components for XML reader and XML writer:

-   `IF_SXML` contains constants for the supported XML format.
-   `IF_SXML_NSURI_HELPER` contains methods for namespaces.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html abenabap\_sxml\_lib\_object\_types.html abenabap\_sxml\_lib\_reader\_writer.html