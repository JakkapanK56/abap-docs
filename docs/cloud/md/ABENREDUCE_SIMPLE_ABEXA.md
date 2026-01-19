---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREDUCE_SIMPLE_ABEXA.htm"
abapFile: "ABENREDUCE_SIMPLE_ABEXA.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENREDUCE", "SIMPLE", "ABEXA"]
---

This example demonstrates a simple [table reduction](ABENTABLE_REDUCTION_GLOSRY.html) using [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).

After the [`FOR` expression](ABENFOR_IN_ITAB.html), the content of the table lines in `itab` is added to the local variable `x` and this variable is provided as the result. Instead of `x = 0`, `x TYPE i` could also be specified after `INIT`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_simple DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_simple IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ). \\n out->write( itab ). \\n\\ \\n FINAL(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ). \\n out->write( sum ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_simple DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_simple IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ). \\n out->write( itab ). \\n\\ \\n FINAL(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ). \\n out->write( sum ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_reductions\_abexas.html