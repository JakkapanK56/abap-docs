---
title: "ABENABAP_XSLT_ASXML_TABLE"
description: |
  ABENABAP_XSLT_ASXML_TABLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_ASXML_TABLE.htm"
abapFile: "ABENABAP_XSLT_ASXML_TABLE.html"
keywords: ["do", "if", "case", "data", "internal-table", "ABENABAP", "XSLT", "ASXML", "TABLE"]
---

The asXML representation of internal tables is significant mainly for XSL transformations. In Simple Transformations, this representation is important only when using the statement [`tt:copy`](ABENST_TT_COPY.html).

The lines of an internal table are represented in asXML as a sequence of subelements of the table element. The content of each subelement matches the canonical representation of the line value. The name of a subelement is not relevant. If the canonical XML representation is created by a serialization, the name from the ABAP Dictionary is used when it is referred to, otherwise the name is `item`. All table categories are allowed. Serializations do not pass any information about the table category to the XML data. If the target field of an [XSL transformation](ABENXSL_TRANSFORMATION_GLOSRY.html) is a [sorted table](ABENSORTED_TABLE_GLOSRY.html), the lines are sorted accordingly in the deserialization.

If the required XML element does not exist in deserializations to an internal table, the internal table retains its previous content. If an empty element is assigned to an internal table, it is set to its type-dependent initial value, that is, it is emptied. To initialize the internal table in either case, the transformation option [`clear`](ABAPCALL_TRANSFORMATION_OPTIONS.html) with the value *all* can be used.

[asXML, Mapping of Tables](ABENASXML_TABLE_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html