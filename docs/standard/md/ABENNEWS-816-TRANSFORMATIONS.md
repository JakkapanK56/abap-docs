---
title: "ABENNEWS-816-TRANSFORMATIONS"
description: |
  ABENNEWS-816-TRANSFORMATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-816-TRANSFORMATIONS.htm"
abapFile: "ABENNEWS-816-TRANSFORMATIONS.html"
keywords: ["do", "if", "try", "data", "types", "ABENNEWS", "816", "TRANSFORMATIONS"]
---

[1\. Regular Expressions for &ABAP\_XSLT@@](#ABAP_MODIFICATION_1@4@)

[2\. New Domain for Mapping from ABAP to XML](#ABAP_MODIFICATION_2@4@)

[3. New Format for `format` in the Attribute `option` of `tt:value`](#ABAP_MODIFICATION_3@4@)

Regular expression functions can now be used in XSLT. The following functions are available:

The following new [special domain](ABENABAP_XSLT_ASXML_SCHEMA.html) has been introduced, which overrides the default mapping of elementary ABAP types to asXML.

The following new format can be specified in parentheses after [`format`](ABENST_OPTION_FORMAT.html) in the [`option`](ABENST_OPTION.html) attribute of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html):

-   [`matches()`](ABENABAP_XPATH_FNCTNS.html)
-   [`replace()`](ABENABAP_XPATH_FNCTNS.html)
-   [`tokenize()`](ABENABAP_SAP_FNCTNS.html)

-   `XSDGEO` for spatial data

-   `geometry`, `geography`, and `geo=SRID` to define a spatial reference system for the conversion of the EWKB representation to GeoJSON and vice versa.

abenabap.html abennews.html abennews-81.html abennews-816.html