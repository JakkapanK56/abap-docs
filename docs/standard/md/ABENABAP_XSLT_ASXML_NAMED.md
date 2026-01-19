---
title: "ABENABAP_XSLT_ASXML_NAMED"
description: |
  ABENABAP_XSLT_ASXML_NAMED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT_ASXML_NAMED.htm"
abapFile: "ABENABAP_XSLT_ASXML_NAMED.html"
keywords: ["data", "types", "internal-table", "ABENABAP", "XSLT", "ASXML", "NAMED"]
---

Named data objects other than reference variables are represented in asXML as the content of the following elements:

[`<bn1>...</bn1>`](ABENABAP_XSLT_ASXML_GENERAL.html)\\ \\n[`<bn2>...</bn2>`](ABENABAP_XSLT_ASXML_GENERAL.html)\\ \\n[`...`](ABENABAP_XSLT_ASXML_GENERAL.html)

An additional area is implemented for the objects referenced by reference variables:

[`<asx:heap>`](ABENABAP_XSLT_ASXML_GENERAL.html)\\ 
  [...](ABENABAP_XSLT_ASXML_GENERAL.html)\\ 
[`</asx:heap>`](ABENABAP_XSLT_ASXML_GENERAL.html)

Depending on the ABAP data type, serializations map the value of named data objects to a particular XML representation and deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](ABENABAP_XSLT_ASXML_ELEMENTARY.html)
-   [Mapping of Structures](ABENABAP_XSLT_ASXML_STRUCTURE.html)
-   [Mapping of Internal Tables](ABENABAP_XSLT_ASXML_TABLE.html)
-   [Mapping of Enumerated Types](ABENABAP_XSLT_ASXML_ENUM.html)
-   [Mapping of Reference Variables and Referenced Objects](ABENABAP_XSLT_ASXML_REFERENCES.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html