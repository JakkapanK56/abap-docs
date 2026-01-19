---
title: "ABENITAB_STREAMS"
description: |
  ABENITAB_STREAMS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_STREAMS.htm"
abapFile: "ABENITAB_STREAMS.html"
keywords: ["while", "if", "class", "data", "internal-table", "ABENITAB", "STREAMS"]
---

The specific classes for [streaming](ABENSTREAMING_GLOSRY.html) for internal tables are:

These classes are subclasses of the abstract superclasses [`CL_ABAP_MEMORY_...`](ABENDATA_OBJECTS_STREAMS.html).

Reading of an internal table using a reader stream.

-   `CL_ABAP_ITAB_C_READER`
-   `CL_ABAP_ITAB_C_WRITER`
-   `CL_ABAP_ITAB_X_READER`
-   `CL_ABAP_ITAB_X_WRITER`

DATA itab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( \`abc\` ) ( \`def\` ) ( \`ghi\` ) ). \\n\\ \\nFINAL(itab\_reader) = NEW cl\_abap\_itab\_c\_reader( itab ). \\n\\ \\nWHILE itab\_reader->data\_available( ) = 'X'. \\n cl\_demo\_output=>write\_text( itab\_reader->read( 3 ) ). \\nENDWHILE. \\nitab\_reader->close( ). \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenstreaming.html abendata\_objects\_streams.html