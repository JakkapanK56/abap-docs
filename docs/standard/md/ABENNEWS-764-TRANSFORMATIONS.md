---
title: "ABENNEWS-764-TRANSFORMATIONS"
description: |
  ABENNEWS-764-TRANSFORMATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-764-TRANSFORMATIONS.htm"
abapFile: "ABENNEWS-764-TRANSFORMATIONS.html"
keywords: ["do", "if", "data", "types", "ABENNEWS", "764", "TRANSFORMATIONS"]
---

[1\. New Domains for Mapping from ABAP to XML](#ABAP_MODIFICATION_1@4@)

[2. New Formats for `format` in the Attribute `option` of `tt:value`](#ABAP_MODIFICATION_2@4@)

[3. `decimals` New for the Attribute `option` of `tt:value`](#ABAP_MODIFICATION_3@4@)

[4. `regime` New for the Attribute `option` of `tt:value`](#ABAP_MODIFICATION_4@4@)

[5. `noError` New for the Attribute `option` of `tt:value`](#ABAP_MODIFICATION_5@4@)

The following new [special domains](ABENABAP_XSLT_ASXML_SCHEMA.html) have been introduced, which override the default mapping of elementary ABAP types to asXML.

The following new formats can be specified in parentheses after [`format`](ABENST_OPTION_FORMAT.html) in the [`option`](ABENST_OPTION.html) attribute of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html):

Other enhancements:

[`Decimals`](ABENST_OPTION_FORMAT.html) specified in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) specifies the number of decimal places in numeric types.

[`regime(num|char|bin)`](ABENST_OPTION_FORMAT.html) can now be specified in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html), where it can be used to force numeric, character-like, or byte-like handling.

[`noError`](ABENST_OPTION_FORMAT.html) specified in the attribute [`option`](ABENST_OPTION.html) of the ST statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html) prevents exceptions in `language`, `currCode`, and `unitCode` formattings, which evaluate entries in database tables.

-   `XSDUUID_BASE64` for 16-byte UUIDs in base64 format
-   `XSDCURRCODE` for ISO currency keys
-   `XSDUNITCODE` for ISO unit keys

-   `hex` for a hexadecimal display of byte-like values
-   `uri` and `uri_full` for escaping special characters in URIs
-   `uri1` and `uri2` for displaying literal values in URIs for OData.
-   `currCode`, `unitCode` for converting SAP-specific currency and unit keys in ISO units.
-   `currency=CURRCODE`, `unit=UNITCODE` for formatting numbers in accordance with a currency or unit key
-   `alpha` for handling leading zeros in strings

-   `dateTimeLocal`, `dateTimeOffset`, and `ticksOffset` can now be used on the UTC time stamp types `TIMESTAMP` and `TIMESTAMPL`.
-   `guid` can now also be used on the type `c` of length 22 for 16-byte UUIDs in base64 format.

abenabap.html abennews.html abennews-76.html abennews-764.html