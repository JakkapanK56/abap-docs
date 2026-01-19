---
title: "ABENNEWS-914-TRANSFORMATIONS"
description: |
  ABENNEWS-914-TRANSFORMATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-914-TRANSFORMATIONS.htm"
abapFile: "ABENNEWS-914-TRANSFORMATIONS.html"
keywords: ["do", "if", "try", "data", "types", "ABENNEWS", "914", "TRANSFORMATIONS"]
---

[1\. New Domain for Mapping from ABAP to XML](#ABAP_MODIFICATION_1@4@)

[2. New Format for `format` in the Attribute `option` of `tt:value`](#ABAP_MODIFICATION_2@4@)

The following new [special domain](ABENABAP_XSLT_ASXML_SCHEMA.html) has been introduced, which overrides the default mapping of elementary ABAP types to asXML.

The following new format can be specified in parentheses after [`format`](ABENST_OPTION_FORMAT.html) in the [`option`](ABENST_OPTION.html) attribute of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html):

-   `XSDGEO` for spatial data

-   `geometry`, `geography`, and `geo=SRID` to define a spatial reference system for the conversion of the EWKB representation to GeoJSON and vice versa.

abenabap.html abennews.html abennews-91.html abennews-914.html