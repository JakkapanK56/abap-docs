---
title: "ABENNEWS-46C-SONSTIGES"
description: |
  ABENNEWS-46C-SONSTIGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46C-SONSTIGES.htm"
abapFile: "ABENNEWS-46C-SONSTIGES.html"
keywords: ["select", "if", "method", "data", "ABENNEWS", "46C", "SONSTIGES"]
---

[1\. Scan Buffer Enhancement](#ABAP_MODIFICATION_1@4@)

[2\. New Functions for Strings](#ABAP_MODIFICATION_2@4@)

[3\. Greater Precision in BCD Arithmetic](#ABAP_MODIFICATION_3@4@)

[4. New Comparison Expression `IS SUPPLIED`](#ABAP_MODIFICATION_4@4@)

The scan buffer has been increased from 8 `kB` to 28 `kB`. Each ABAP statement can now contain a parameter list of this length. For example, a [`WHERE`](ABAPWHERE.html) clause can now contain 450 selection entries (instead of 100 as before) if variable names of 30 characters are used.

The functions `CHARLEN` and `NUMOFCHAR` are now available for strings.

[`CHARLEN`](ABAPCOMPUTE_ARITH.html) returns the length of the first character in a string or a character-like field. In single-byte code pages, this is always 1. In SAP-compatible multibyte code pages, this can be either 1 or 2.

[`NUMOFCHAR`](ABAPCOMPUTE_ARITH.html) returns the number of characters in a string or character-like field. In single-byte [code pages](ABENCODEPAGE_GLOSRY.html), the behavior is the same as for the [`STRLEN`](ABAPCOMPUTE_ARITH.html). In multibyte code pages, characters occupying more than one byte are considered to have a length of 1.

`BCD` arithmetic for the data type `P` has been modified so that intermediate results are now calculated using 127 digits (instead of 63 as before). This change affects the internal representation only, since type `P` fields are still defined with a maximum of 16 bytes (or 31 digits).

The comparison expression [`IS SUPPLIED`](ABENLOGEXP_SUPPLIED.html) indicates whether an actual parameter is specified for an optional formal parameter of a method or function module. The new expression replaces the expression [`IS REQUESTED`](ABENLOGEXP_REQUESTED.html), and renders it obsolete.

abenabap.html abennews.html abennews-4.html abennews-46c.html