---
title: "ABENSYS_TABLE_BODY"
description: |
  ABENSYS_TABLE_BODY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSYS_TABLE_BODY.htm"
abapFile: "ABENSYS_TABLE_BODY.html"
keywords: ["select", "do", "if", "data", "ABENSYS", "TABLE", "BODY"]
---

`... itab-*sys* ...`

If `itab` is an obsolete standard table with a [header line](ABENHEADER_LINE_GLOSRY.html), instead of specifying `itab[]` to address the table body, the pseudo component `itab-*sys*` can be used. This also addresses the table body.

If tables with header lines are also to be accessed, only `itab[]` should be used to address the table body, not `itab-*sys*`.

This example shows that `itab-*sys*` has the same meaning as `itab[]`.

DATA itab TYPE TABLE OF scarr WITH HEADER LINE. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @itab. \\n\\ \\nASSERT itab\[\] = itab-\*sys\*. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html