---
title: "ABENNEWS-912-ITAB"
description: |
  ABENNEWS-912-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-912-ITAB.htm"
abapFile: "ABENNEWS-912-ITAB.html"
keywords: ["if", "ABENNEWS", "912", "ITAB"]
---

The [variants](ABENTABLE_EXP_ITAB_LINE.html) for specifying a table line in table expressions are now mapped exactly to the respective variants of the [`READ TABLE`](ABAPREAD_TABLE.html) statement. The same rules apply and the same syntax warnings can occur. For that, the internal behavior of the variants

[`[KEY keyname [COMPONENTS]] ...`](ABENTABLE_EXP_ITAB_LINE.html)

was adjusted to match the behavior of the respective [`READ` variants](ABAPREAD_TABLE_FREE.html) and a new variant

[`TABLE KEY keyname [COMPONENTS] ...`](ABENTABLE_EXP_ITAB_LINE.html)

was introduced for [`READ ... WITH TABLE KEY ...`](ABAPREAD_TABLE_KEY.html).

Before, the syntax of the existing variants was not stringently mapped. Despite this adjustment, the behavior of existing programs is not changed. The adjustment offers new possibilities, such as specifying only a part of a table key or specifying additional search fields with a table key. Some new syntax warnings regarding performance might show up and can be either corrected or hidden by a pragma.

abenabap.html abennews.html abennews-91.html abennews-912.html