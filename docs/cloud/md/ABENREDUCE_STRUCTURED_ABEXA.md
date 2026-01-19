---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREDUCE_STRUCTURED_ABEXA.htm"
abapFile: "ABENREDUCE_STRUCTURED_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABENREDUCE", "STRUCTURED", "ABEXA"]
---

This example demonstrates a reduction of the columns of a table to a structure.

Reduces a two-column internal table `itab` using [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html). The content of the first column of all lines is concatenated after the [`FOR` expression](ABENFOR_IN_ITAB.html), the total of the second column is calculated, and the maximum value of the second column is determined. These values are assigned to the components of the local structure `res`, which is provided as the result.

The separator `sep` in the concatenation is declared as a helper variable after `INIT`. It is initial for the first line read and set to a value here for the evaluation of the following lines.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_structured DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor . \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n id TYPE string, \\n num TYPE i, \\n END OF line, \\n BEGIN OF result, \\n text TYPE string, \\n sum TYPE i, \\n max TYPE i, \\n END OF result. \\n DATA \\n itab TYPE TABLE OF line WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_structured IMPLEMENTATION. \\n METHOD main. \\n out->write( itab ). \\n\\ \\n FINAL(result) = REDUCE result( \\n INIT res = VALUE result( max = 0 \\n text = \`Result: \` ) \\n sep = \`\` \\n FOR IN itab \\n NEXT res-text &&= sep && \-id \\n res-sum += \-num \\n res-max = nmax( val1 = res-max \\n val2 = \-num ) \\n sep = \`-\` ). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n FINAL(rnd) = cl\_abap\_random\_int=>create( seed = \\n CONV i( cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 0 \\n max = 1000 ). \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n itab = VALUE #( FOR j = 0 UNTIL j > 9 \\n ( id = abcde+j(1) \\n num = rnd->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_structured DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor . \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line, \\n id TYPE string, \\n num TYPE i, \\n END OF line, \\n BEGIN OF result, \\n text TYPE string, \\n sum TYPE i, \\n max TYPE i, \\n END OF result. \\n DATA \\n itab TYPE TABLE OF line WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_structured IMPLEMENTATION. \\n METHOD main. \\n out->write( itab ). \\n\\ \\n FINAL(result) = REDUCE result( \\n INIT res = VALUE result( max = 0 \\n text = \`Result: \` ) \\n sep = \`\` \\n FOR IN itab \\n NEXT res-text &&= sep && \-id \\n res-sum += \-num \\n res-max = nmax( val1 = res-max \\n val2 = \-num ) \\n sep = \`-\` ). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n FINAL(rnd) = cl\_abap\_random\_int=>create( seed = \\n CONV i( cl\_demo\_date\_time=>get\_user\_time( ) ) \\n min = 0 \\n max = 1000 ). \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n itab = VALUE #( FOR j = 0 UNTIL j > 9 \\n ( id = abcde+j(1) \\n num = rnd->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_reductions\_abexas.html