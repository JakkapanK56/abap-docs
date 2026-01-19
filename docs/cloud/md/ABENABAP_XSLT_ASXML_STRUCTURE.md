---
title: "ABENABAP_XSLT_ASXML_STRUCTURE"
description: |
  ABENABAP_XSLT_ASXML_STRUCTURE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_ASXML_STRUCTURE.htm"
abapFile: "ABENABAP_XSLT_ASXML_STRUCTURE.html"
keywords: ["do", "if", "case", "data", "ABENABAP", "XSLT", "ASXML", "STRUCTURE"]
---

The asXML representation of structures is significant mainly for XSL transformations. In Simple Transformations, this representation is important only when using the statement [`tt:copy`](ABENST_TT_COPY.html).

The components of an ABAP structure are represented in asXML as a sequence of subelements of the structure element. The content of each subelement corresponds to the canonical representation of the component value. The name of each subelement is the name of the corresponding component. In serializations, the subelements are represented in the order of the components in the structure. In deserializations of the asXML representation of a structure, the order of the subcomponents is not important and redundant XML elements are ignored. Components of the structure for which there are no subelements remain unchanged.

If the required XML element does not exist in deserializations to a structure, the structure data object retains its previous value. If an empty element is assigned to a structure, the subelements are missing for all components of the structure and the structure also remains unchanged. To initialize the structure in deserializations in these cases, the transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) with the value *all* can be used.

-   [asXML, Mapping of Structures](ABENASXML_STRUCTURE_ABEXA.html)
-   [Deserializing Structure Components](ABENABAP_ASXML_ASJSON_EMPTY_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html