---
title: "ABAPGET_LOCALE_OBSOLETE"
description: |
  ABAPGET_LOCALE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_LOCALE_OBSOLETE.htm"
abapFile: "ABAPGET_LOCALE_OBSOLETE.html"
keywords: ["do", "if", "try", "data", "ABAPGET", "LOCALE", "OBSOLETE"]
---

[Short Reference](ABAPGET_LOCALE_SHORTREF.html)

`... COUNTRY cntry MODIFIER mod`

[1. `... COUNTRY cntry`](#ABAP_ADDITION_1@3@)

[2. `... MODIFIER mod`](#ABAP_ADDITION_2@3@)

Although ABAP syntax requires the additions `COUNTRY` and `MODIFIER` to be specified for the statement [`GET LOCALE`](ABAPGET_LOCALE.html), the results of these additions should not be used.

The addition `COUNTRY` was intended for reading the country key of the current text environment explicitly. `cntry` expects a character-like data object.

The function of this addition was not implemented completely and the result is undefined.

The addition `COUNTRY` of the statement `GET LOCALE` does not extract the [formatting setting](ABENFORMAT_SETTING_GLOSRY.html) that can be set using [`SET COUNTRY`](ABAPSET_COUNTRY.html).

The addition `MODIFIER` was intended for reading the identifier of a special locale. `mod` expects a character-like data object with a maximum of eight places.

This function is not implemented. Instead, the addition initializes the variable `mod`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abentext\_environment\_obsolete.html