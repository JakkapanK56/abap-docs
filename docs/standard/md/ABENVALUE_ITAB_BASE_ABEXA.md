---
title: "ABENVALUE_ITAB_BASE_ABEXA"
description: |
  ABENVALUE_ITAB_BASE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENVALUE_ITAB_BASE_ABEXA.htm"
abapFile: "ABENVALUE_ITAB_BASE_ABEXA.html"
keywords: ["insert", "loop", "do", "method", "class", "data", "types", "internal-table", "ABENVALUE", "ITAB", "BASE", "ABEXA"]
---

This example demonstrates the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for internal tables with and without the addition `BASE`

Without the addition `BASE`, the value operator constructs a new internal table from scratch during each call and this is assigned to `itab_no_base`. As a result, `itab_no_base` contains only one line after the `DO` loop.

With the addition `BASE`, the value operator inserts a line into an internal table that is prefilled with the content of `itab_base` during each call. As a result, `itab_base` contains 10 lines after the `DO` loop.

\* Public class definition \\nCLASS cl\_demo\_value\_base DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_base IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE TABLE OF i. \\n\\ \\n DATA itab\_no\_base TYPE itab. \\n DO 10 TIMES. \\n itab\_no\_base = VALUE #( ( sy-index ) ). \\n ENDDO. \\n\\ \\n DATA itab\_base TYPE itab. \\n DO 10 TIMES. \\n itab\_base = VALUE #( BASE itab\_base ( sy-index ) ). \\n ENDDO. \\n\\ \\n out->write( itab\_no\_base \\n )->write( itab\_base ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_value\_base DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_base IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE TABLE OF i. \\n\\ \\n DATA itab\_no\_base TYPE itab. \\n DO 10 TIMES. \\n itab\_no\_base = VALUE #( ( sy-index ) ). \\n ENDDO. \\n\\ \\n DATA itab\_base TYPE itab. \\n DO 10 TIMES. \\n itab\_base = VALUE #( BASE itab\_base ( sy-index ) ). \\n ENDDO. \\n\\ \\n out->write( itab\_no\_base \\n )->write( itab\_base ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html abenvalue\_constructor\_params\_itab.html