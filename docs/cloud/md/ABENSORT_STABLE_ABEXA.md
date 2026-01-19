---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSORT_STABLE_ABEXA.htm"
abapFile: "ABENSORT_STABLE_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABENSORT", "STABLE", "ABEXA"]
---

This example demonstrates how internal tables are sorted using [`SORT itab`](ABAPSORT_ITAB.html).

The class sorts a standard table with one key field four times. First, the table is sorted twice by the key field (`land`) without the `STABLE` addition. The sort is unstable. The order of lines in which multiple keys appear can change. The same sort is then performed using the `STABLE` addition. The sort is stable. The lines remain in the same sequence. Then, it is sorted by a sort key defined as `land` and `weight`. The general sort order is defined as descending, but for `weight` it is defined as ascending.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_sort IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: BEGIN OF line, \\n land TYPE c LENGTH 3, \\n name TYPE c LENGTH 10, \\n age TYPE i, \\n weight TYPE p LENGTH 8 DECIMALS 2, \\n END OF line. \\n\\ \\n DATA itab TYPE STANDARD TABLE OF line WITH NON-UNIQUE KEY land. \\n\\ \\n itab = \\n VALUE #( \\n ( land = 'D' name = 'Hans' age = 20 weight = '80.00' ) \\n ( land = 'USA' name = 'Nancy' age = 35 weight = '45.00' ) \\n ( land = 'USA' name = 'Howard' age = 40 weight = '95.00' ) \\n ( land = 'GB' name = 'Jenny' age = 18 weight = '50.00' ) \\n ( land = 'F' name = 'Michele' age = 30 weight = '60.00' ) \\n ( land = 'G' name = 'Karl' age = 60 weight = '75.00' ) ). \\n\\ \\n SORT itab. \\n out->write\_data( itab ). \\n\\ \\n SORT itab. \\n out->write\_data( itab ). \\n\\ \\n SORT itab STABLE. \\n out->write\_data( itab ). \\n\\ \\n SORT itab DESCENDING BY land weight ASCENDING. \\n out->write\_data( itab ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_sort IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: BEGIN OF line, \\n land TYPE c LENGTH 3, \\n name TYPE c LENGTH 10, \\n age TYPE i, \\n weight TYPE p LENGTH 8 DECIMALS 2, \\n END OF line. \\n\\ \\n DATA itab TYPE STANDARD TABLE OF line WITH NON-UNIQUE KEY land. \\n\\ \\n itab = \\n VALUE #( \\n ( land = 'D' name = 'Hans' age = 20 weight = '80.00' ) \\n ( land = 'USA' name = 'Nancy' age = 35 weight = '45.00' ) \\n ( land = 'USA' name = 'Howard' age = 40 weight = '95.00' ) \\n ( land = 'GB' name = 'Jenny' age = 18 weight = '50.00' ) \\n ( land = 'F' name = 'Michele' age = 30 weight = '60.00' ) \\n ( land = 'G' name = 'Karl' age = 60 weight = '75.00' ) ). \\n\\ \\n SORT itab. \\n out->write\_data( itab ). \\n\\ \\n SORT itab. \\n out->write\_data( itab ). \\n\\ \\n SORT itab STABLE. \\n out->write\_data( itab ). \\n\\ \\n SORT itab DESCENDING BY land weight ASCENDING. \\n out->write\_data( itab ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapsort\_itab.html