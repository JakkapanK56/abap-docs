---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFILTER_TABLE_ABEXA.htm"
abapFile: "ABENFILTER_TABLE_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENFILTER", "TABLE", "ABEXA"]
---

This example demonstrates [table filtering](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) using a filter table.

Those lines are filtered out of an internal table `spfli_tab` filled with flight data that have specific values in the columns `cityfrom` and `cityto`. The filter is applied using a filter table of the type `filter_tab` constructed using `VALUE` filled with input values. The result includes all outbound and return flights for the entered cities.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_filter\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA: \\n cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt', \\n cityto TYPE spfli-cityto VALUE 'New York'. \\n METHODS init. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_filter\_table IMPLEMENTATION. \\n METHOD main. \\n init( ). \\n\\ \\n TYPES: BEGIN OF filter, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF filter, \\n filter\_tab TYPE HASHED TABLE OF filter \\n WITH UNIQUE KEY cityfrom cityto. \\n\\ \\n FINAL(filter\_tab) = VALUE filter\_tab( \\n ( cityfrom = cityfrom cityto = cityto ) \\n ( cityfrom = cityto cityto = cityfrom ) ). \\n\\ \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid, cityfrom, cityto \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n out->write( \\n FILTER #( spfli\_tab IN filter\_tab \\n WHERE cityfrom = cityfrom AND cityto = cityto ) ). \\n ENDMETHOD. \\n METHOD init. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = cityfrom \\n )->request( CHANGING field = cityto ). \\n cityfrom = to\_upper( cityfrom ). \\n cityto = to\_upper( cityto ). \\n IF cityfrom = cityto. \\n EXIT. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_filter\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA: \\n cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt', \\n cityto TYPE spfli-cityto VALUE 'New York'. \\n METHODS init. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_filter\_table IMPLEMENTATION. \\n METHOD main. \\n init( ). \\n\\ \\n TYPES: BEGIN OF filter, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF filter, \\n filter\_tab TYPE HASHED TABLE OF filter \\n WITH UNIQUE KEY cityfrom cityto. \\n\\ \\n FINAL(filter\_tab) = VALUE filter\_tab( \\n ( cityfrom = cityfrom cityto = cityto ) \\n ( cityfrom = cityto cityto = cityfrom ) ). \\n\\ \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid, cityfrom, cityto \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n out->write( \\n FILTER #( spfli\_tab IN filter\_tab \\n WHERE cityfrom = cityfrom AND cityto = cityto ) ). \\n ENDMETHOD. \\n METHOD init. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = cityfrom \\n )->request( CHANGING field = cityto ). \\n cityfrom = to\_upper( cityfrom ). \\n cityto = to\_upper( cityto ). \\n IF cityfrom = cityto. \\n EXIT. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenconstructor\_expression\_filter.html abentable\_filtering\_abexas.html