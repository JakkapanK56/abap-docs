---
title: "ABENVALUE_ITAB_LET_ABEXA"
description: |
  ABENVALUE_ITAB_LET_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENVALUE_ITAB_LET_ABEXA.htm"
abapFile: "ABENVALUE_ITAB_LET_ABEXA.html"
keywords: ["method", "class", "types", "internal-table", "ABENVALUE", "ITAB", "LET", "ABEXA"]
---

This example demonstrates the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for internal tables with a [`LET` expression](ABAPLET.html).

Construction of an internal table with an elementary line type with type `string` and filling it with three lines. The result is a table that contains the previous day, today, and the next day in the formatting for the current language environment. Today's date is produced using a method. To make sure that the method is called only once, the return value is assigned to a local helper field in a [`LET` expression](ABAPLET.html).

\* Public class definition \\nCLASS cl\_demo\_value\_constr\_itab\_let DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS date DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS get RETURNING VALUE(d) TYPE d. \\nENDCLASS. \\n\\ \\nCLASS date IMPLEMENTATION. \\n METHOD get. \\n d = cl\_demo\_date\_time=>get\_user\_date( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_constr\_itab\_let IMPLEMENTATION. \\n METHOD main. \\n TYPES t\_date\_tab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\n out->write( \\n VALUE t\_date\_tab( \\n LET d = date=>get( ) IN \\n ( |\\{ CONV d( d - 1 ) DATE = ENVIRONMENT \\}| ) \\n ( |\\{ d DATE = ENVIRONMENT \\}| ) \\n ( |\\{ CONV d( d + 1 ) DATE = ENVIRONMENT \\}| ) ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_value\_constr\_itab\_let DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS date DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS get RETURNING VALUE(d) TYPE d. \\nENDCLASS. \\n\\ \\nCLASS date IMPLEMENTATION. \\n METHOD get. \\n d = cl\_demo\_date\_time=>get\_user\_date( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_constr\_itab\_let IMPLEMENTATION. \\n METHOD main. \\n TYPES t\_date\_tab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\n out->write( \\n VALUE t\_date\_tab( \\n LET d = date=>get( ) IN \\n ( |\\{ CONV d( d - 1 ) DATE = ENVIRONMENT \\}| ) \\n ( |\\{ d DATE = ENVIRONMENT \\}| ) \\n ( |\\{ CONV d( d + 1 ) DATE = ENVIRONMENT \\}| ) ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html abenvalue\_constructor\_params\_itab.html