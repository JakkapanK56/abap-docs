---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_AT_ITAB_KEY_ABEXA.htm"
abapFile: "ABENLOOP_AT_ITAB_KEY_ABEXA.html"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "ABENLOOP", "ITAB", "KEY", "ABEXA"]
---

The example demonstrates the execution of the statement `LOOP AT itab` with different table keys.

The table `spfli_tab` is a hashed table with an unique primary key and two non-unique sorted secondary keys.

-   The first `LOOP` takes place without a key specification. The table output is in the order in which the table was filled, that is, sorted by the fields specified after `ORDER BY` in the `SELECT` statement.
-   The other two `LOOP` loops are performed with each of the secondary table keys `city_from_to` or `city_to_from` specified.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_at\_itab\_using\_key DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_at\_itab\_using\_key IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF spfli\_line, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF spfli\_line. \\n\\ \\n DATA output TYPE TABLE OF spfli\_line WITH EMPTY KEY. \\n\\ \\n DATA spfli\_tab TYPE HASHED TABLE \\n OF spfli\_line \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY city\_from\_to \\n COMPONENTS cityfrom cityto \\n WITH NON-UNIQUE SORTED KEY city\_to\_from \\n COMPONENTS cityto cityfrom. \\n\\ \\n FIELD-SYMBOLS LIKE LINE OF spfli\_tab. \\n\\ \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @spfli\_tab. \\n\\ \\n CLEAR output. \\n out->next\_section( 'LOOP without USING KEY' ). \\n LOOP AT spfli\_tab ASSIGNING . \\n output = VALUE #( BASE output ( ) ). \\n ENDLOOP. \\n out->write( output ). \\n\\ \\n CLEAR output. \\n out->next\_section( 'LOOP with USING KEY cityfrom cityto' ). \\n LOOP AT spfli\_tab ASSIGNING USING KEY city\_from\_to. \\n output = VALUE #( BASE output ( ) ). \\n ENDLOOP. \\n out->write( output ). \\n\\ \\n CLEAR output. \\n out->next\_section( 'LOOP with USING KEY cityto cityfrom' ). \\n LOOP AT spfli\_tab ASSIGNING USING KEY city\_to\_from. \\n output = VALUE #( BASE output ( ) ). \\n ENDLOOP. \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_at\_itab\_using\_key DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_at\_itab\_using\_key IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF spfli\_line, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF spfli\_line. \\n\\ \\n DATA output TYPE TABLE OF spfli\_line WITH EMPTY KEY. \\n\\ \\n DATA spfli\_tab TYPE HASHED TABLE \\n OF spfli\_line \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY city\_from\_to \\n COMPONENTS cityfrom cityto \\n WITH NON-UNIQUE SORTED KEY city\_to\_from \\n COMPONENTS cityto cityfrom. \\n\\ \\n FIELD-SYMBOLS LIKE LINE OF spfli\_tab. \\n\\ \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @spfli\_tab. \\n\\ \\n CLEAR output. \\n out->next\_section( 'LOOP without USING KEY' ). \\n LOOP AT spfli\_tab ASSIGNING . \\n output = VALUE #( BASE output ( ) ). \\n ENDLOOP. \\n out->write( output ). \\n\\ \\n CLEAR output. \\n out->next\_section( 'LOOP with USING KEY cityfrom cityto' ). \\n LOOP AT spfli\_tab ASSIGNING USING KEY city\_from\_to. \\n output = VALUE #( BASE output ( ) ). \\n ENDLOOP. \\n out->write( output ). \\n\\ \\n CLEAR output. \\n out->next\_section( 'LOOP with USING KEY cityto cityfrom' ). \\n LOOP AT spfli\_tab ASSIGNING USING KEY city\_to\_from. \\n output = VALUE #( BASE output ( ) ). \\n ENDLOOP. \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html abaploop\_at\_itab\_cond.html