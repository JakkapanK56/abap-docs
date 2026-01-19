---
title: "ABAPRANGES"
description: |
  ABAPRANGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRANGES.htm"
abapFile: "ABAPRANGES.html"
keywords: ["do", "if", "class", "data", "types", "internal-table", "ABAPRANGES"]
---

[Short Reference](ABAPRANGES_SHORTREF.html)

`RANGES range_tab FOR dobj [OCCURS n].`

Obsolete declaration of a [ranges table](ABENRANGES_TABLE_GLOSRY.html). This statement, which is forbidden in classes, is a short form of the following statement string which is also not allowed in classes:

[DATA: BEGIN OF range\_tab OCCURS](ABAPDATA_BEGIN_OF_OCCURS.html)\\ \\{10|n\\}, \\n        sign   TYPE c LENGTH 1, \\n        option TYPE c LENGTH 2, \\n        low    LIKE dobj, \\n        high   LIKE dobj, \\n      END OF range\_tab.

Declares an internal table `range_tab` with the structure of a [ranges table](ABENRANGES_TABLE_GLOSRY.html) and a [header line](ABENHEADER_LINE_GLOSRY.html). Without the addition [`OCCURS`](ABAPDATA_OCCURS.html), the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) of the ranges table is set to ten lines. The addition `OCCURS` can be used to specify either a numeric literal or a numeric constant `n` to determine a different initial memory requirement.

-   The statement `RANGES` is replaced by the addition `TYPE|LIKE RANGE OF` of the statements [`TYPES`](ABAPTYPES_RANGES.html) and [`DATA`](ABAPDATA_RANGES.html). If used, these declare ranges tables without header lines.
-   The `sign` and `option` columns of a ranges table declared using `RANGES` are not related to data types in the ABAP Dictionary. For a ranges table defined in the ABAP Dictionary, these columns refer to the data elements `DDSIGN` and `DDOPTION`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html abenitab\_header\_line.html