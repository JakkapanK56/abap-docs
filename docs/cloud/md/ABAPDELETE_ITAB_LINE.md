---
title: "ABAPDELETE_ITAB_LINE"
description: |
  ABAPDELETE_ITAB_LINE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDELETE_ITAB_LINE.htm"
abapFile: "ABAPDELETE_ITAB_LINE.html"
keywords: ["delete", "if", "data", "internal-table", "ABAPDELETE", "ITAB", "LINE"]
---

``... \{\ [`table_key`](ABAPDELETE_ITAB_KEY.html)  |\ [`index`](ABAPDELETE_ITAB_INDEX.html)\ \}.``

In this variant, the statement `DELETE` deletes a line specified by a table key in [`table_key`](ABAPDELETE_ITAB_KEY.html) or a line specified by a line number [`index`](ABAPDELETE_ITAB_INDEX.html).

Deletion of individual lines in an internal table. The first `DELETE` statement uses the primary table key to find the line. The second `DELETE` statement deletes the line by specifying a line number, which is also determined here by accessing a key.

DATA itab TYPE SORTED TABLE OF string \\n WITH UNIQUE KEY primary\_key COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( \`X\` ) ( \`Y\` ) ( \`Z\` ) ). \\n\\ \\nDELETE TABLE itab WITH TABLE KEY \\n primary\_key COMPONENTS table\_line = \`X\`. \\n\\ \\nDELETE itab INDEX \\n line\_index( itab\[ KEY primary\_key table\_line = \`Z\` \] ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html