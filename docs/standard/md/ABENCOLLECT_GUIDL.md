---
title: "ABENCOLLECT_GUIDL"
description: |
  ABENCOLLECT_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOLLECT_GUIDL.htm"
abapFile: "ABENCOLLECT_GUIDL.html"
keywords: ["insert", "do", "if", "internal-table", "ABENCOLLECT", "GUIDL"]
---

The statement `COLLECT` can be used to collect lines and insert them in an internal table. If a line with the relevant primary key already exists in the target table, the values of numeric components are added to the values in the existing table line. Otherwise, a new line is inserted in the table.

**Do not fill standard tables with collections of lines**

Only use the statement `COLLECT` for hashed tables or sorted tables with a unique key. Do not use it any more for standard tables.

The statement `COLLECT` is based on unique entries with respect to the primary key and stable key administration. This means that not all categories of internal tables are suitable for `COLLECT`:

-   If the statement `COLLECT` is applied to a standard table, this table first needs its own internal hash administration. Change operations on the table can invalidate this temporary hash administration. After a change operation of this type, the following `COLLECT` statements must resort to a linear search, which can affect performance considerably. The primary key of a standard table is also never unique.
-   `COLLECT` can be used for sorted tables and hashed tables without any problems since these, unlike standard tables, always have a separate, stable key administration that can be utilized by `COLLECT`. `COLLECT` can work properly for sorted tables only if the primary key is unique. If a sorted table has a non-unique key, only `COLLECT` can be used to fill the table, which is difficult to guarantee. In hashed tables, the key values are always unique.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenitab\_gdl.html