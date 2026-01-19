---
title: "ABENLIST_FORMAT_COLOR2_ABEXA"
description: |
  ABENLIST_FORMAT_COLOR2_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_FORMAT_COLOR2_ABEXA.htm"
abapFile: "ABENLIST_FORMAT_COLOR2_ABEXA.html"
keywords: ["while", "if", "case", "data", "ABENLIST", "FORMAT", "COLOR2", "ABEXA"]
---

This example demonstrates which colors are available for list formatting.

In the statement `FORMAT`, the `COLOR` option for subsequent `WRITE` statements is set at runtime. The additional options are set individually for each `WRITE` statement in the program.

REPORT demo\_list\_format\_color\_1 .\\n\\nDATA i TYPE i VALUE 0.\\nDATA col(15) TYPE c.\\n\\nWHILE i < 8.\\n\\n CASE i.\\n WHEN 0. col = 'COL\_BACKGROUND '.\\n WHEN 1. col = 'COL\_HEADING '.\\n WHEN 2. col = 'COL\_NORMAL '.\\n WHEN 3. col = 'COL\_TOTAL '.\\n WHEN 4. col = 'COL\_KEY '.\\n WHEN 5. col = 'COL\_POSITIVE '.\\n WHEN 6. col = 'COL\_NEGATIVE '.\\n WHEN 7. col = 'COL\_GROUP '.\\n ENDCASE.\\n\\n FORMAT INTENSIFIED COLOR = i.\\n WRITE: /(4) i, AT 7 sy-vline,\\n col, sy-vline,\\n col INTENSIFIED OFF, sy-vline,\\n col INVERSE.\\n\\n i += 1.\\n\\nENDWHILE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapformat.html