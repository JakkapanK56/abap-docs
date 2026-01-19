---
title: "ABENST_OPTION_XSDANY"
description: |
  ABENST_OPTION_XSDANY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_OPTION_XSDANY.htm"
abapFile: "ABENST_OPTION_XSDANY.html"
keywords: ["do", "if", "data", "ABENST", "OPTION", "XSDANY"]
---

`... option="[preserveWS][,stripWS][,preserveCharRef][,noRootAttr]"`

If one or more of the values `preserveWS`, `stripWS`, `preserveCharRef`, or `noRootAttr` are specified for `option`, the [mapping rule for XML fragments](ABENABAP_XSLT_ASXML_FRAGMENT.html) is changed. These values are only respected by data objects that are declared with a reference to the [DDIC domain](ABENDOMAIN_GLOSRY.html)\\ `XSDANY`.

In deserializations to `XSDANY`, whitespace in front of the first element is removed and whitespace from the first element is preserved.

[ST, Mapping of XML Fragments](ABENST_XSDANY_ABEXA.html)

-   `preserveWS`
-   If the value `preserveWS` is specified, all whitespaces (blanks and line breaks) are preserved in deserializations.
-   `stripWS`
-   If the value `stripWS` is specified, all whitespace (blanks and line breaks) is stripped in deserializations.
-   `preserveCharRef`
-   The value `preserveCharRef` prevents character references from being resolved.
-   `noRootAttr`
-   The value `noRootAttr` is used to change the [mapping rule for XML fragments](ABENABAP_XSLT_ASXML_FRAGMENT.html) so that no attribute `asx:root` containing the name of the root element of the XML fragment is added to the XML element. In deserializations, the root element is given the name of the XML element.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html abenst\_option.html