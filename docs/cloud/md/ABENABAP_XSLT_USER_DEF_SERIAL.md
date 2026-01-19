---
title: "ABENABAP_XSLT_USER_DEF_SERIAL"
description: |
  ABENABAP_XSLT_USER_DEF_SERIAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_USER_DEF_SERIAL.htm"
abapFile: "ABENABAP_XSLT_USER_DEF_SERIAL.html"
keywords: ["if", "case", "method", "data", "ABENABAP", "XSLT", "USER", "DEF", "SERIAL"]
---

The following image shows the mapping of an XML tree to an ABAP tree using an XSLT program and the mapping of an ABAP tree to an XML tree using an identity transformation and an XSLT program.

[XSL Transformations](ABENXSLT_SPEC_ABEXA.html)

[XSL Transformations Using Parameters](ABENXSLT_PARAMETERS_ABEXA.html)

[XSL Transformations Using ABAP Method Calls](ABENXSLT_ABAP_ABEXA.html)

-   In the case of transformations that use ABAP data as a source, the ABAP data is first serialized to a canonical [XML representation (asXML)](ABENABAP_XSLT_ASXML.html) with the predefined [identity transformation](ABENABAP_XSLT_ID.html)\\ `ID`. This intermediate result is then used as the actual source for the XSL transformation. If the transformation `ID` itself is called in `CALL TRANSFORMATION`, the intermediate result is in the direct output.
-   In the case of transformations that have ABAP data as a result, the result of the XSL transformation is deserialized directly to the ABAP data. A prerequisite for the deserialization is that the result represents a canonical XML representation. When transforming XML to ABAP, there are also two conceptual steps: First, a virtual asXML structure is transformed and then deserialized. Technically, these take place in only one transformation step.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenabap\_xslt\_abap\_serialization.html