---
title: "ABENNEWS-40-BITOPS"
description: |
  ABENNEWS-40-BITOPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-BITOPS.htm"
abapFile: "ABENNEWS-40-BITOPS.html"
keywords: ["if", "case", "ABENNEWS", "BITOPS"]
---

[1. New Variants `SET BIT` and `GET BIT`](#ABAP_MODIFICATION_1@4@)

[2\. New Bit Operations](#ABAP_MODIFICATION_2@4@)

[3\. Changes in Bit Comparisons](#ABAP_MODIFICATION_3@4@)

[`SET BIT n of f`](ABAPSET_BIT.html) sets the nth bit of the field `f`.

[`GET BIT n OF f INTO g`](ABAPGET_BIT.html) passes the nth bit of the field `f` to the field `g`.

In the [`COMPUTE`](ABAPCOMPUTE_BIT.html) statement, the new operators `BIT-NOT`, `BIT-AND`, `BIT-XOR`, and `BIT-OR` can be used for bit operations.

Complex conditions and sets can be managed efficiently using the new variants **`SET BIT`** and **`GET BIT`** and the new [bit operations](ABENBIT_OPERATOR_GLOSRY.html) applied to bit strings.

In the case of the [comparison operators](ABENLOGEXP_BITMASKS.html)\\ `O`, `Z`, and `M`, comparisons now take place in the length of the second operand, which must have the type `X`.

Before ABAP release 3.0, comparisons took place in length 1 and the second field was considered to be a `X` field, regardless of its type and length.

abenabap.html abennews.html abennews-4.html abennews-40.html