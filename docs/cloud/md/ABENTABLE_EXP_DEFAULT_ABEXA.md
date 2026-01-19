---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_EXP_DEFAULT_ABEXA.htm"
abapFile: "ABENTABLE_EXP_DEFAULT_ABEXA.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENTABLE", "EXP", "DEFAULT", "ABEXA"]
---

This example demonstrates default values for table expressions.

The result `result1` of the first table expression has the line type of the internal table `itab`. The specified line is not found, which means that the structure `def` specified after `DEFAULT` is returned instead.

The result `result2` of the second table expression results from a chaining with the structure component selector and is a component with the type `string`. Here, only the corresponding component of the structure `def` is specified as the default value.

The result `result3` of the third table expression again has the line type of the internal table `itab`. Further table expressions with default values are specified as the default value. In the case shown here, the table expression in the second default value finds a line and returns it. If no searches are successful, an initial line is returned due to the closing `OPTIONAL`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_tab\_exp\_default DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_default IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n id TYPE i, \\n value TYPE string, \\n END OF line, \\n itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id. \\n\\ \\n FINAL(def) = VALUE line( id = 0 value = \`not found\` ). \\n\\ \\n FINAL(itab) = VALUE itab( ( id = 3 value = \`CCC\` ) \\n ( id = 4 value = \`DDD\` ) \\n ( id = 5 value = \`EEE\` ) ). \\n\\ \\n FINAL(result1) = VALUE #( itab\[ id = 1 \] DEFAULT def ). \\n out->write( result1 ). \\n\\ \\n\\ \\n FINAL(result2) = VALUE #( itab\[ id = 1 \]-value DEFAULT def-value ). \\n out->write\_data( result2 ). \\n\\ \\n FINAL(result3) = VALUE #( itab\[ id = 1 \] DEFAULT VALUE #( \\n itab\[ id = 2 \] DEFAULT VALUE #( \\n itab\[ id = 3 \] OPTIONAL ) ) ). \\n out->write\_data( result3 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_tab\_exp\_default DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_tab\_exp\_default IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n id TYPE i, \\n value TYPE string, \\n END OF line, \\n itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id. \\n\\ \\n FINAL(def) = VALUE line( id = 0 value = \`not found\` ). \\n\\ \\n FINAL(itab) = VALUE itab( ( id = 3 value = \`CCC\` ) \\n ( id = 4 value = \`DDD\` ) \\n ( id = 5 value = \`EEE\` ) ). \\n\\ \\n FINAL(result1) = VALUE #( itab\[ id = 1 \] DEFAULT def ). \\n out->write( result1 ). \\n\\ \\n\\ \\n FINAL(result2) = VALUE #( itab\[ id = 1 \]-value DEFAULT def-value ). \\n out->write\_data( result2 ). \\n\\ \\n FINAL(result3) = VALUE #( itab\[ id = 1 \] DEFAULT VALUE #( \\n itab\[ id = 2 \] DEFAULT VALUE #( \\n itab\[ id = 3 \] OPTIONAL ) ) ). \\n out->write\_data( result3 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html abentable\_exp\_optional\_default.html