---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_IND_BITFIELD_ABEXA.htm"
abapFile: "ABENSELECT_IND_BITFIELD_ABEXA.html"
keywords: ["select", "do", "while", "if", "case", "method", "class", "data", "types", "internal-table", "ABENSELECT", "IND", "BITFIELD", "ABEXA"]
---

This example demonstrates a [condensed indicator structure](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) as a [null indicator](ABENNULL_INDICATOR_GLOSRY.html) in a `SELECT` statement. It shows the difference between position-based and name-based assignments of indicator bits without and with `CORRESPONDING FIELDS`.

Data are selected with and without `CORRESPONDING FIELDS` from an internal table `@data_tab` with five columns `col1` to `col5`. In the result set, columns `col1`\\ `col3` and `col4` contain the [null value](ABENNULL_VALUE_GLOSRY.html). The target areas contains a byte field `null_ind` as the last component but are differently structured than the result set in front of `null_ind`. The following figure illustrates the behavior:

The assignments take place as follows:

-   Without `CORRESPONDING FIELDS`, the values from the columns of the result set are assigned from left to right to the components of the target area. Accordingly. the first five bits of the null indicator are set from left to right. The bits at positions 1, 3, and 4 are set to 1. The bit at positions 2 and 5 as well as the excess bits at positions 6 to 8 are set to 0.
-   With `CORRESPONDING FIELDS`, the columns of the result set are assigned to the components of the target area that have the same name. Since the positions of the columns named `col1` to `col5` in the target are 5, 6, 3, 7, and 1, the respective bits are set in the null indicator: The bits at positions 3, 5 and 7 are set to 1 and the bits at positions 1 and 6 are set to 0. `colx` and `coly` at positions 2 and 4 of the target area do not correspond to columns of the result set and the bits at these positions as well as the excess bit at position 8 are set to 0.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_indicators\_bitfield DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_indicators\_bitfield IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: \\n BEGIN OF data\_line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n col4 TYPE i, \\n col5 TYPE i, \\n END OF data\_line. \\n\\ \\n DATA data\_tab TYPE STANDARD TABLE OF data\_line WITH EMPTY KEY. \\n\\ \\n data\_tab = VALUE #( ( col2 = 10 col3 = 10 col4 = 10 ) ). \\n\\ \\n TYPES: \\n BEGIN OF wa\_ind, \\n col5 TYPE i, \\n colx TYPE i, \\n col3 TYPE i, \\n coly TYPE i, \\n col1 TYPE i, \\n col2 TYPE i, \\n col4 TYPE i, \\n null\_ind TYPE x LENGTH 1, \\n END OF wa\_ind. \\n\\ \\n DATA: \\n wa\_ind1 TYPE wa\_ind, \\n wa\_ind2 TYPE wa\_ind. \\n\\ \\n SELECT SINGLE \\n FROM @data\_tab AS data\_tab \\n FIELDS CASE WHEN 1 = 0 THEN 0 END AS col1 , \\n col2, \\n CASE WHEN 1 = 0 THEN 0 END AS col3, \\n CASE WHEN 1 = 0 THEN 0 END AS col4, \\n col5 \\n INTO @wa\_ind1 INDICATORS NULL BITFIELD null\_ind. \\n\\ \\n DATA binary\_ind1 TYPE string. \\n WHILE sy-index <= xstrlen( wa\_ind1-null\_ind ) \* 8. \\n GET BIT sy-index OF wa\_ind1-null\_ind INTO FINAL(bit1). \\n binary\_ind1 &&= bit1. \\n ENDWHILE. \\n\\ \\n SELECT SINGLE \\n FROM @data\_tab AS data\_tab \\n FIELDS CASE WHEN 1 = 0 THEN 0 END AS col1, \\n col2, \\n CASE WHEN 1 = 0 THEN 0 END AS col3, \\n CASE WHEN 1 = 0 THEN 0 END AS col4, \\n col5 \\n INTO CORRESPONDING FIELDS OF @wa\_ind2 \\n INDICATORS NULL BITFIELD null\_ind. \\n\\ \\n DATA binary\_ind2 TYPE string. \\n WHILE sy-index <= xstrlen( wa\_ind2-null\_ind ) \* 8. \\n GET BIT sy-index OF wa\_ind2-null\_ind INTO FINAL(bit2). \\n binary\_ind2 &&= bit2. \\n ENDWHILE. \\n\\ \\n out->write( wa\_ind1 \\n )->write\_data( binary\_ind1 \\n )->write( wa\_ind2 \\n )->write\_data( binary\_ind2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_indicators\_bitfield DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_indicators\_bitfield IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: \\n BEGIN OF data\_line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n col4 TYPE i, \\n col5 TYPE i, \\n END OF data\_line. \\n\\ \\n DATA data\_tab TYPE STANDARD TABLE OF data\_line WITH EMPTY KEY. \\n\\ \\n data\_tab = VALUE #( ( col2 = 10 col3 = 10 col4 = 10 ) ). \\n\\ \\n TYPES: \\n BEGIN OF wa\_ind, \\n col5 TYPE i, \\n colx TYPE i, \\n col3 TYPE i, \\n coly TYPE i, \\n col1 TYPE i, \\n col2 TYPE i, \\n col4 TYPE i, \\n null\_ind TYPE x LENGTH 1, \\n END OF wa\_ind. \\n\\ \\n DATA: \\n wa\_ind1 TYPE wa\_ind, \\n wa\_ind2 TYPE wa\_ind. \\n\\ \\n SELECT SINGLE \\n FROM @data\_tab AS data\_tab \\n FIELDS CASE WHEN 1 = 0 THEN 0 END AS col1 , \\n col2, \\n CASE WHEN 1 = 0 THEN 0 END AS col3, \\n CASE WHEN 1 = 0 THEN 0 END AS col4, \\n col5 \\n INTO @wa\_ind1 INDICATORS NULL BITFIELD null\_ind. \\n\\ \\n DATA binary\_ind1 TYPE string. \\n WHILE sy-index <= xstrlen( wa\_ind1-null\_ind ) \* 8. \\n GET BIT sy-index OF wa\_ind1-null\_ind INTO FINAL(bit1). \\n binary\_ind1 &&= bit1. \\n ENDWHILE. \\n\\ \\n SELECT SINGLE \\n FROM @data\_tab AS data\_tab \\n FIELDS CASE WHEN 1 = 0 THEN 0 END AS col1, \\n col2, \\n CASE WHEN 1 = 0 THEN 0 END AS col3, \\n CASE WHEN 1 = 0 THEN 0 END AS col4, \\n col5 \\n INTO CORRESPONDING FIELDS OF @wa\_ind2 \\n INDICATORS NULL BITFIELD null\_ind. \\n\\ \\n DATA binary\_ind2 TYPE string. \\n WHILE sy-index <= xstrlen( wa\_ind2-null\_ind ) \* 8. \\n GET BIT sy-index OF wa\_ind2-null\_ind INTO FINAL(bit2). \\n binary\_ind2 &&= bit2. \\n ENDWHILE. \\n\\ \\n out->write( wa\_ind1 \\n )->write\_data( binary\_ind1 \\n )->write( wa\_ind2 \\n )->write\_data( binary\_ind2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html abapselect\_indicators.html