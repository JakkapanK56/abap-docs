---
title: "ABENDELETE_LINE_IDX_ABEXA"
description: |
  ABENDELETE_LINE_IDX_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDELETE_LINE_IDX_ABEXA.htm"
abapFile: "ABENDELETE_LINE_IDX_ABEXA.html"
keywords: ["delete", "loop", "method", "class", "data", "internal-table", "ABENDELETE", "LINE", "IDX", "ABEXA"]
---

This example demonstrates how lines can be deleted from internal tables using the index.

A sorted table `itab` is filled with five lines. Then an attempt is made to delete the lines with the indexes 2, 3, and 4 using a chained statement. However, after the deletion of each individual line, the index of each subsequent line is lowered by 1. As a result, the second delete operation deletes the line that had the index 4 first. The third deletion fails because the table now has only 4 lines.

To actually delete the lines 2 to 4, the addition [`FROM TO`](ABAPDELETE_ITAB_LINES.html) of the statement `DELETE` is used.

\* Public class definition \\nCLASS cl\_demo\_int\_tbls\_delete\_ind\_1 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_delete\_ind\_1 IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line. \\n\\ \\n FIELD-SYMBOLS LIKE LINE OF itab. \\n\\ \\n itab = VALUE #( FOR j = 1 UNTIL j > 5 ( j ) ). \\n\\ \\n DELETE itab INDEX: 2, 3, 4. \\n\\ \\n out->write( |sy-subrc: \\{ sy-subrc \\}| ). \\n\\ \\n LOOP AT itab ASSIGNING . \\n out->write( |\\{ sy-tabix \\} \\{ \\}| ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_int\_tbls\_delete\_ind\_1 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_delete\_ind\_1 IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line. \\n\\ \\n FIELD-SYMBOLS LIKE LINE OF itab. \\n\\ \\n itab = VALUE #( FOR j = 1 UNTIL j > 5 ( j ) ). \\n\\ \\n DELETE itab INDEX: 2, 3, 4. \\n\\ \\n out->write( |sy-subrc: \\{ sy-subrc \\}| ). \\n\\ \\n LOOP AT itab ASSIGNING . \\n out->write( |\\{ sy-tabix \\} \\{ \\}| ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html abapdelete\_itab\_line.html abapdelete\_itab\_index.html