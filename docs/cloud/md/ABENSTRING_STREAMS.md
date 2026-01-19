---
title: "ABENSTRING_STREAMS"
description: |
  ABENSTRING_STREAMS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_STREAMS.htm"
abapFile: "ABENSTRING_STREAMS.html"
keywords: ["do", "while", "if", "class", "data", "ABENSTRING", "STREAMS"]
---

The specific classes for [streaming](ABENSTREAMING_GLOSRY.html) for strings are:

These classes are subclasses of the abstract superclasses [`CL_ABAP_MEMORY_...`](ABENDATA_OBJECTS_STREAMS.html).

A writer stream is used to fill a string and then pass it to a reader stream. The reader stream skips three characters and then reads the remaining characters.

-   `CL_ABAP_STRING_C_READER`
-   `CL_ABAP_STRING_C_WRITER`
-   `CL_ABAP_STRING_X_READER`
-   `CL_ABAP_STRING_X_WRITER`

FINAL(string\_writer) = NEW cl\_abap\_string\_c\_writer( ). \\n\\ \\nDO 10 TIMES. \\n string\_writer->write( |\\{ sy-index - 1 \\}| ). \\nENDDO. \\nstring\_writer->close( ). \\n\\ \\nFINAL(string\_reader) = \\n NEW cl\_abap\_string\_c\_reader( string\_writer->get\_result\_string( ) ). \\n\\ \\nstring\_reader->skip( 3 ). \\nWHILE string\_reader->data\_available( ) = 'X'. \\n cl\_demo\_output=>write( string\_reader->read( 1 ) ). \\nENDWHILE. \\nstring\_reader->close( ). \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenstreaming.html abendata\_objects\_streams.html