---
title: "ABENEXTRACT_SUM_ABEXA"
description: |
  ABENEXTRACT_SUM_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXTRACT_SUM_ABEXA.htm"
abapFile: "ABENEXTRACT_SUM_ABEXA.html"
keywords: ["select", "insert", "loop", "if", "method", "class", "data", "ABENEXTRACT", "SUM", "ABEXA"]
---

This example demonstrates how numbers and totals are determined in extracts.

An example extract is created that contains only fields from the field group `header`. After being sorted, the content of the data set, as well as the numbers from the different fields `t1` and the sums of the fields `t2`, are produced at the end of every group level and at the end of the loop.

REPORT demo\_extract\_cnt\_sum.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nDATA: t1 TYPE c LENGTH 4,\\n t2 TYPE i.\\n\\nFIELD-GROUPS: header, test.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n INSERT t2 t1 INTO header.\\n\\n t1 = 'AABB'. t2 = 1. EXTRACT test.\\n t1 = 'BBCC'. t2 = 2. EXTRACT test.\\n t1 = 'AAAA'. t2 = 2. EXTRACT test.\\n t1 = 'AABB'. t2 = 1. EXTRACT test.\\n t1 = 'BBBB'. t2 = 2. EXTRACT test.\\n t1 = 'BBCC'. t2 = 2. EXTRACT test.\\n t1 = 'AAAA'. t2 = 1. EXTRACT test.\\n t1 = 'BBBB'. t2 = 1. EXTRACT test.\\n t1 = 'AAAA'. t2 = 3. EXTRACT test.\\n t1 = 'AABB'. t2 = 1. EXTRACT test.\\n\\n SORT BY t1 t2.\\n\\n FINAL(out) = cl\_demo\_output=>new( ).\\n\\n LOOP.\\n\\n out->write( |\\{ t1 \\} \\{ t2 \\}| ).\\n\\n AT END OF t2.\\n out->line( ).\\n out->write( |Sum: \\{ sum(t2) \\}| ).\\n out->line( ).\\n ENDAT.\\n\\n AT END OF t1.\\n out->write( |Different values: \\{ cnt(t1) \\}| ).\\n out->line( ).\\n ENDAT.\\n\\n AT LAST.\\n out->line( ).\\n out->write( |Sum: \\{ sum(t2) \\}| ).\\n out->write( |Different values: \\{ cnt(t1) \\}| ).\\n ENDAT.\\n\\n ENDLOOP.\\n\\n out->display( ).\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html abenextract\_abexas.html