---
title: "ABENEXTRACT_GROUP_ABEXA"
description: |
  ABENEXTRACT_GROUP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXTRACT_GROUP_ABEXA.htm"
abapFile: "ABENEXTRACT_GROUP_ABEXA.html"
keywords: ["select", "insert", "loop", "method", "class", "data", "ABENEXTRACT", "GROUP", "ABEXA"]
---

This example demonstrates group level processing of extracts.

An example extract is created that contains only the fields from the field group `header` and is sorted by these fields. The content of the data set and the resulting group level break are produced in the `LOOP`.

REPORT demo\_extract\_at\_new.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nDATA: t1 TYPE c LENGTH 4,\\n t2 TYPE i.\\n\\nFIELD-GROUPS header.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n INSERT t2 t1 INTO header.\\n\\n t1 = 'AABB'. t2 = 1. EXTRACT header.\\n t1 = 'BBCC'. t2 = 2. EXTRACT header.\\n t1 = 'AAAA'. t2 = 2. EXTRACT header.\\n t1 = 'AABB'. t2 = 1. EXTRACT header.\\n t1 = 'BBBB'. t2 = 2. EXTRACT header.\\n t1 = 'BBCC'. t2 = 2. EXTRACT header.\\n t1 = 'AAAA'. t2 = 1. EXTRACT header.\\n t1 = 'BBBB'. t2 = 1. EXTRACT header.\\n t1 = 'AAAA'. t2 = 3. EXTRACT header.\\n t1 = 'AABB'. t2 = 1. EXTRACT header.\\n\\n SORT BY t1 t2.\\n\\n FINAL(out) = cl\_demo\_output=>new( ).\\n\\n LOOP.\\n\\n AT FIRST.\\n out->write( 'Start of LOOP' ).\\n out->line( ).\\n ENDAT.\\n\\n AT NEW t1.\\n out->write( 'New T1' ).\\n ENDAT.\\n\\n AT NEW t2.\\n out->write( 'New T2' ).\\n ENDAT.\\n\\n out->write( |\\{ t1 \\} \\{ t2 \\}| ).\\n\\n AT END OF t2.\\n out->write( 'End of T2' ).\\n ENDAT.\\n\\n AT END OF t1.\\n out->write( 'End of T1' ).\\n ENDAT.\\n\\n AT LAST.\\n out->line( ).\\n ENDAT.\\n\\n ENDLOOP.\\n\\n out->display( ).\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html abenextract\_abexas.html