---
title: "ABENINT_TABLE_AT_ABEXA"
description: |
  ABENINT_TABLE_AT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINT_TABLE_AT_ABEXA.htm"
abapFile: "ABENINT_TABLE_AT_ABEXA.html"
keywords: ["loop", "method", "class", "data", "types", "internal-table", "ABENINT", "TABLE", "ABEXA"]
---

This example demonstrates group level processing in internal tables.

A hashed table `itab` is created, filled with six lines, and sorted by the primary table key. In the `LOOP` - `ENDLOOP` loop, the work area `line` is used and is displayed for every loop pass. The first field of the primary table key `col1` is used for group level processing. The sum of all numeric fields is calculated each time the content of `col1` changes and once for the last table line.

The executable example [Grouping in Group Levels](ABENLOOP_GROUP_BY_LEVELS_ABEXA.html) shows how the same function can be achieved using the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html).

\* Public class definition \\nCLASS cl\_demo\_int\_tbls\_at DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\n\\ \\n PRIVATE SECTION. \\n TYPES: BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_at IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA itab TYPE HASHED TABLE OF line \\n WITH UNIQUE KEY col1 col2. \\n\\ \\n itab = VALUE #( \\n FOR j = 1 UNTIL j > 3 \\n ( col1 = 'A' \\n col2 = j \\n col3 = j \*\* 2 ) \\n ( col1 = 'B' \\n col2 = 2 \* j \\n col3 = ( 2 \* j ) \*\* 2 ) ). \\n\\ \\n SORT itab. \\n out->write( itab )->line( ). \\n\\ \\n DATA group LIKE itab. \\n LOOP AT itab INTO FINAL(line). \\n AT NEW col1. \\n CLEAR group. \\n ENDAT. \\n group = VALUE #( BASE group ( line ) ). \\n AT END OF col1. \\n out->write( group ). \\n SUM. \\n out->line( )->write( line )->line( ). \\n ENDAT. \\n AT LAST. \\n SUM. \\n out->line( )->write( line ). \\n ENDAT. \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_int\_tbls\_at DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\n\\ \\n PRIVATE SECTION. \\n TYPES: BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_at IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA itab TYPE HASHED TABLE OF line \\n WITH UNIQUE KEY col1 col2. \\n\\ \\n itab = VALUE #( \\n FOR j = 1 UNTIL j > 3 \\n ( col1 = 'A' \\n col2 = j \\n col3 = j \*\* 2 ) \\n ( col1 = 'B' \\n col2 = 2 \* j \\n col3 = ( 2 \* j ) \*\* 2 ) ). \\n\\ \\n SORT itab. \\n out->write( itab )->line( ). \\n\\ \\n DATA group LIKE itab. \\n LOOP AT itab INTO FINAL(line). \\n AT NEW col1. \\n CLEAR group. \\n ENDAT. \\n group = VALUE #( BASE group ( line ) ). \\n AT END OF col1. \\n out->write( group ). \\n SUM. \\n out->line( )->write( line )->line( ). \\n ENDAT. \\n AT LAST. \\n SUM. \\n out->line( )->write( line ). \\n ENDAT. \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html abapat\_itab.html abenat\_itab\_abexas.html