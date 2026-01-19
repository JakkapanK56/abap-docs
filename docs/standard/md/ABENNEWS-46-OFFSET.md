---
title: "ABENNEWS-46-OFFSET"
description: |
  ABENNEWS-46-OFFSET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-OFFSET.htm"
abapFile: "ABENNEWS-46-OFFSET.html"
keywords: ["if", "ABENNEWS", "OFFSET"]
---

Offsets/lengths specified dynamically enable a specific position to be accessed within a field or structure using values that are only known at runtime. This access type is available in Release 4.6A for all statements relating to fields.

Starting with offset `off2` in length `len2`, the field `g` is assigned the content of field `f` starting with offset `off1` in length `len2`. If the two field lengths are not identical, the remaining positions are cut off or padded with initial values. The fields `f` and `g` must have the type `x`, `c`, `n`, `d`, or `t`. Structures are also allowed.

g+off2(len2) = f+off1(len1). abenabap.html abennews.html abennews-4.html abennews-46a.html