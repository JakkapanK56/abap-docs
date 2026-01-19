---
title: "ABENABAP_XSLT_ASXML_FRAGMENT"
description: |
  ABENABAP_XSLT_ASXML_FRAGMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT_ASXML_FRAGMENT.htm"
abapFile: "ABENABAP_XSLT_ASXML_FRAGMENT.html"
keywords: ["do", "if", "data", "types", "ABENABAP", "XSLT", "ASXML", "FRAGMENT"]
---

asXML allows the mapping of entire XML fragments, that is, of complete elements and their subelements that exist in XML format in ABAP as the content of data objects or of parts of data objects (such as structure components or table rows). The data objects must have the type `xstring` and be declared with reference to the [DDIC domain](ABENDOMAIN_GLOSRY.html)\\ `XSDANY`.

The following restrictions apply:

[asXML, Mapping of XML Fragments](ABENASXML_FRAGMENTS_ABEXA.html)

-   When serialized, such a data object or part of a data object must contain the [UTF-8](ABENUTF8_GLOSRY.html) representation of a complete XML fragment. The content of the root element of the XML fragment is passed unchanged to the XML element for which the data object was created. If the name of the XML element is not the same as the name of the root element of the XML fragment, the latter is used as the content of an attribute `asx:root` that is added to the XML element. No attribute is created if the names are the same.
-   When deserialized, an XML element that contains the attribute `asx:root` must be assigned to such a data object or part of a data object. An XML fragment is created in the data object that has the content of the attribute as a root element and whose content is inherited unchanged from the XML element. If the attribute `asx:root` does not exist, the root element is given the name of the XML element.

-   XML fragments whose elements do not contain attributes cannot be deserialized.
-   XML fragments whose root element is in the standard namespace cannot be serialized or deserialized.

-   An XML fragment that exists in a data object of type `xstring` and that is not declared with reference to the domain `XSDANY` is formatted as the XML schema type `xsd:base64Binary` in accordance with the rules for [mapping elementary data types](ABENABAP_XSLT_ASXML_ELEMENTARY.html).
-   An XML element that contains the attribute `asx:root` cannot be deserialized to data objects that are not declared with reference to the domain `XSDANY`.
-   The handling of XML fragments in the statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) is supported in [Simple Transformations](ABENABAP_ST.html), but not in the statements [`tt:write`](ABENST_TT_WRITE.html) or [`tt:read`](ABENST_TT_READ.html). In `tt:value`, the mapping rule for XML fragments can be modified using certain values for the attribute [`option`](ABENST_OPTION_XSDANY.html).
-   XML fragments in byte strings with reference to the domain `XSDANY` are not supported in [transformations for JSON](ABENABAP_JSON_TRAFOS.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html