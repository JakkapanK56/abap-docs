---
title: "ABENNEWS-30-STRING"
description: |
  ABENNEWS-30-STRING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-STRING.htm"
abapFile: "ABENNEWS-30-STRING.html"
keywords: ["insert", "if", "case", "data", "internal-table", "ABENNEWS", "STRING"]
---

[1\. Assignments with Variable Offsets and Lengths Specified](#ABAP_MODIFICATION_1@4@)

[2. `ASSIGN` and `PERFORM` with Offsets Specified and Field Limits Not Exceeded](#ABAP_MODIFICATION_2@4@) 

[3. New `SHIFT` Variants](#ABAP_MODIFICATION_3@4@) 

[4. New Language Element `CONCATENATE`](#ABAP_MODIFICATION_4@4@)

[5. New Language Element `SPLIT`](#ABAP_MODIFICATION_5@4@)

[6. New Additions for `WRITE` \[`TO`\] for Alignment Purposes](#ABAP_MODIFICATION_6@4@)

[`destination = source`](ABAPMOVE.html) can be used with respect to the source and target field when variable offsets and lengths are specified.

The language elements [`ASSIGN`](ABAPASSIGN.html) and [`PERFORM`](ABAPPERFORM.html) can now be used to specify offsets without exceeding field limits (using `field+off(*)`).

The new variants of [`SHIFT`](ABAPSHIFT.html) allow field content to be shifted so that a prefix or suffix consisting of a certain number of characters is omitted. In the character string `gaps`, for example, it is possible to specify which characters constitute the prefix or suffix (using `SHIFT field LEFT DELETING LEADING gaps` or `SHIFT field RIGHT DELETING TRAILING gaps`).

[`CONCATENATE`](ABAPCONCATENATE.html) can be used to append character strings to a target field (using `CONCATENATE f1 ... fn INTO g`). The addition `SEPARATED BY h` makes it possible to insert the separator `h` between the character strings `fi`.

[`SPLIT`](ABAPSPLIT.html) can be used to split a string in accordance with a sequence of separators (`SPLIT f AT g`) and place the resulting substrings in the specified fields (`... INTO h1 ... hn`) or in an internal table (`... INTO TABLE itab`).

`WRITE` now has the additions `LEFT-JUSTIFIED`, `CENTERED`, and `RIGHT-JUSTIFIED` for left-aligned, centered, or right-aligned output. These can be used both when displaying data in [lists](ABAPWRITE-.html) and for string processing using [`WRITE ... TO`](ABAPWRITE_TO.html). In the first case, the alignment refers to the output field in the list. In the latter case, it refers to the target field specified after `TO`.

abenabap.html abennews.html abennews-30.html