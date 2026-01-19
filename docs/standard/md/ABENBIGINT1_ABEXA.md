---
title: "ABENBIGINT1_ABEXA"
description: |
  ABENBIGINT1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBIGINT1_ABEXA.htm"
abapFile: "ABENBIGINT1_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENBIGINT1", "ABEXA"]
---

This example uses methods of the system class `CL_ABAP_BIGINT` to calculate the square root of a natural number to any number of decimal places.

The user can enter two integers:

Methods of the system class `CL_ABAP_BIGINT` are used to return the square root of `p_int` with the required number of decimal places.

-   `p_int` is an integer that the square root will be calculated from.
-   `p_digits` specifies the number of decimal places of the result.

\* Public class definition \\nCLASS cl\_demo\_bigint\_sqrt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA:p\_int TYPE i VALUE 2, \\n p\_digits TYPE i VALUE 1000. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bigint\_sqrt IMPLEMENTATION. \\n METHOD main. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = p\_int \\n )->add\_field( CHANGING field = p\_digits \\n )->request( ). \\n\\ \\n " compute arbitrary many digits of sqrt( p\_int ) \\n\\ \\n\\ \\n " compute the integer square root and add "2 \* p\_digits" \\n " 0s at the end to get the "rational" part \\n " at the end only the decimal point has to be positioned at the \\n " right place \\n out->write\_html( \\n shift\_right( val = \\n shift\_right( val = REDUCE string( LET number\_string = \\n shift\_left( val = |\\{ p\_int NUMBER = RAW \\}| && \\n repeat( val = \`0\` occ = p\_digits \* 2 ) sub = \`0\` ) \\n sqrt = cl\_abap\_bigint=>factory\_from\_string( \\n number\_string )->sqrt( )->to\_string( ) \\n IN INIT sqrt\_str = \`\` \\n FOR n = 0 UNTIL n >= strlen( sqrt ) \\n LET char = sqrt+n(1) IN \\n NEXT sqrt\_str = sqrt\_str && \\n COND #( WHEN n = strlen( sqrt ) - p\_digits \\n THEN \`.\` && char ELSE char ) ) \\n sub = \`0\` ) \\n sub = \`.\` ) \\n ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_bigint\_sqrt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA:p\_int TYPE i VALUE 2, \\n p\_digits TYPE i VALUE 1000. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bigint\_sqrt IMPLEMENTATION. \\n METHOD main. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = p\_int \\n )->add\_field( CHANGING field = p\_digits \\n )->request( ). \\n\\ \\n " compute arbitrary many digits of sqrt( p\_int ) \\n\\ \\n\\ \\n " compute the integer square root and add "2 \* p\_digits" \\n " 0s at the end to get the "rational" part \\n " at the end only the decimal point has to be positioned at the \\n " right place \\n out->write\_html( \\n shift\_right( val = \\n shift\_right( val = REDUCE string( LET number\_string = \\n shift\_left( val = |\\{ p\_int NUMBER = RAW \\}| && \\n repeat( val = \`0\` occ = p\_digits \* 2 ) sub = \`0\` ) \\n sqrt = cl\_abap\_bigint=>factory\_from\_string( \\n number\_string )->sqrt( )->to\_string( ) \\n IN INIT sqrt\_str = \`\` \\n FOR n = 0 UNTIL n >= strlen( sqrt ) \\n LET char = sqrt+n(1) IN \\n NEXT sqrt\_str = sqrt\_str && \\n COND #( WHEN n = strlen( sqrt ) - p\_digits \\n THEN \`.\` && char ELSE char ) ) \\n sub = \`0\` ) \\n sub = \`.\` ) \\n ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abencl\_abap\_math.html abencl\_abap\_bigint\_doc.html