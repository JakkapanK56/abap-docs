---
title: "ABENREDUCE_SIMPLE_ABEXA"
description: |
  ABENREDUCE_SIMPLE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREDUCE_SIMPLE_ABEXA.htm"
abapFile: "ABENREDUCE_SIMPLE_ABEXA.html"
keywords: ["while", "if", "method", "class", "data", "ABENREDUCE", "SIMPLE", "ABEXA"]
---

This example demonstrates a simple [table reduction](ABENTABLE_REDUCTION_GLOSRY.html) using [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).

After the [`FOR` expression](ABENFOR_IN_ITAB.html), the content of the table lines in `itab` is added to the local variable `x` and this variable is provided as the result. Instead of `x = 0`, `x TYPE i` could also be specified after `INIT`.

\* Public class definition \\nCLASS cl\_demo\_reduce\_simple DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_simple IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ). \\n out->write( itab ). \\n\\ \\n FINAL(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ). \\n out->write( sum ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_reduce\_simple DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_simple IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ). \\n out->write( itab ). \\n\\ \\n FINAL(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ). \\n out->write( sum ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_reductions\_abexas.html