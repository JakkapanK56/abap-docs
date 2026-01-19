---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_FUNCTION_SHIFT_ABEXA.htm"
abapFile: "ABENSTRING_FUNCTION_SHIFT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSTRING", "FUNCTION", "SHIFT", "ABEXA"]
---

This example demonstrates the string functions [`shift`](ABENSHIFT_FUNCTIONS.html) and [`substring`](ABENSUBSTRING_FUNCTIONS.html).

This class creates a diamond shape in the display.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_shift\_substring DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_shift\_substring IMPLEMENTATION. \\n METHOD main. \\n DATA output TYPE TABLE OF string. \\n output = VALUE #( \\n ( \` oo \` ) ). \\n output = VALUE #( \\n LET n = strlen( output\[ 1 \] ) IN \\n BASE output \\n FOR j = 2 UNTIL j > n / 2 \\n LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN \\n ( shift\_left( val = substring( val = r \\n len = l ) \\n circular = 1 ) && \\n shift\_right( val = substring( val = r \\n off = l ) \\n circular = 1 ) ) ). \\n output = VALUE #( \\n LET n = strlen( output\[ 1 \] ) IN \\n BASE output \\n FOR j = n / 2 + 1 UNTIL j > n - 1 \\n LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN \\n ( shift\_right( val = substring( val = r \\n len = l ) \\n circular = 1 ) && \\n shift\_left( val = substring( val = r \\n off = l ) \\n circular = 1 ) ) ). \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_shift\_substring DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_shift\_substring IMPLEMENTATION. \\n METHOD main. \\n DATA output TYPE TABLE OF string. \\n output = VALUE #( \\n ( \` oo \` ) ). \\n output = VALUE #( \\n LET n = strlen( output\[ 1 \] ) IN \\n BASE output \\n FOR j = 2 UNTIL j > n / 2 \\n LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN \\n ( shift\_left( val = substring( val = r \\n len = l ) \\n circular = 1 ) && \\n shift\_right( val = substring( val = r \\n off = l ) \\n circular = 1 ) ) ). \\n output = VALUE #( \\n LET n = strlen( output\[ 1 \] ) IN \\n BASE output \\n FOR j = n / 2 + 1 UNTIL j > n - 1 \\n LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN \\n ( shift\_right( val = substring( val = r \\n len = l ) \\n circular = 1 ) && \\n shift\_left( val = substring( val = r \\n off = l ) \\n circular = 1 ) ) ). \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_abexas.html