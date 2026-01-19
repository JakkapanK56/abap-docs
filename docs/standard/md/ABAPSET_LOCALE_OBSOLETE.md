---
title: "ABAPSET_LOCALE_OBSOLETE"
description: |
  ABAPSET_LOCALE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_LOCALE_OBSOLETE.htm"
abapFile: "ABAPSET_LOCALE_OBSOLETE.html"
keywords: ["if", "try", "data", "ABAPSET", "LOCALE", "OBSOLETE"]
---

[Short Reference](ABAPSET_LOCALE_SHORTREF.html)

`... [COUNTRY cntry]\ [MODIFIER mod]`

[1. `... COUNTRY cntry`](#ABAP_ADDITION_1@3@)

[2. `... MODIFIER mod`](#ABAP_ADDITION_2@3@)

ABAP syntax allows the additions `COUNTRY` and `MODIFIER` to be specified for the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html). These additions should not be used.

The addition `COUNTRY` was intended for explicitly setting country-specific text environments. `cntry` expects a character-like data object that contains a country key with a maximum of three characters.

The function of this addition was not implemented completely and is undefined. If the data object `lang` of the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html) contains only blanks, the addition is ignored.

The statement `SET LOCALE LANGUAGE` must not be confused with the addition `COUNTRY` of the statement [`SET COUNTRY`](ABAPSET_COUNTRY.html) for setting the [formatting settings](ABENFORMAT_SETTING_GLOSRY.html).

The addition `MODIFIER` was intended for setting different locales for a language within a country, for example, for sorting according to different sort criteria. `mod` expects a character-like data object with a maximum of eight places.

This function is not implemented. The addition `MODIFIER` is ignored when the statement is executed.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abentext\_environment\_obsolete.html