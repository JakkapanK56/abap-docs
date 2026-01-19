---
title: "ABENLINE_INDEX_ABEXA"
description: |
  ABENLINE_INDEX_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLINE_INDEX_ABEXA.htm"
abapFile: "ABENLINE_INDEX_ABEXA.html"
keywords: ["select", "insert", "if", "method", "class", "data", "internal-table", "ABENLINE", "INDEX", "ABEXA"]
---

The example demonstrates the built-in function [`line_index`](ABENLINE_INDEX_FUNCTION.html).

Different line numbers in the same internal table as in the executable example for [specified lines](ABENTABLE_EXP_ITAB_LINE_ABEXA.html) are read and inserted into an internal table, `idx`:

1.  The line number of a line in the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) found using a free search key.
2.  The number `-1`, since the secondary hash key `id` is used.
3.  The number `0`, since no line is found (`0` overrides `-1`).
4.  The line number of a line in the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) found using a different free search key.
5.  The line number of a line found in the assigned [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) using the sorted table key `cities`.
6.  The number `0`, since no line is found.

\* Public class definition \\nCLASS cl\_demo\_line\_index DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n flight\_tab \\n TYPE STANDARD TABLE OF spfli \\n WITH EMPTY KEY \\n WITH UNIQUE HASHED KEY id COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_line\_index IMPLEMENTATION. \\n METHOD main. \\n DATA idx TYPE TABLE OF i. \\n\\ \\n DATA(carrid\_placeholder) = 'xx'. \\n DATA(connid\_placeholder) = 'yyyy'. \\n\\ \\n idx = VALUE #( \\n ( line\_index( flight\_tab\[ carrid = 'UA' \\n connid = '0941' \\n ##primkey\[id\] \] ) ) \\n ( line\_index( flight\_tab\[ KEY id \\n carrid = 'UA' \\n connid = '0941' \] ) ) \\n ( line\_index( flight\_tab\[ KEY id \\n carrid = carrid\_placeholder \\n connid = connid\_placeholder \] ) ) \\n ( line\_index( flight\_tab\[ cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' \\n ##primkey\[cities\] \] ) ) \\n ( line\_index( flight\_tab\[ KEY cities \\n cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' \] ) ) \\n ( line\_index( flight\_tab\[ KEY cities \\n cityfrom = 'xxxxxxxx' \\n cityto = 'yyyyyyyy' \] ) ) ). \\n\\ \\n out->write( idx ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @flight\_tab. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_line\_index DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA \\n flight\_tab \\n TYPE STANDARD TABLE OF spfli \\n WITH EMPTY KEY \\n WITH UNIQUE HASHED KEY id COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_line\_index IMPLEMENTATION. \\n METHOD main. \\n DATA idx TYPE TABLE OF i. \\n\\ \\n DATA(carrid\_placeholder) = 'xx'. \\n DATA(connid\_placeholder) = 'yyyy'. \\n\\ \\n idx = VALUE #( \\n ( line\_index( flight\_tab\[ carrid = 'UA' \\n connid = '0941' \\n ##primkey\[id\] \] ) ) \\n ( line\_index( flight\_tab\[ KEY id \\n carrid = 'UA' \\n connid = '0941' \] ) ) \\n ( line\_index( flight\_tab\[ KEY id \\n carrid = carrid\_placeholder \\n connid = connid\_placeholder \] ) ) \\n ( line\_index( flight\_tab\[ cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' \\n ##primkey\[cities\] \] ) ) \\n ( line\_index( flight\_tab\[ KEY cities \\n cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' \] ) ) \\n ( line\_index( flight\_tab\[ KEY cities \\n cityfrom = 'xxxxxxxx' \\n cityto = 'yyyyyyyy' \] ) ) ). \\n\\ \\n out->write( idx ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n ORDER BY carrid, connid \\n INTO TABLE @flight\_tab. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenitab\_functions.html abenline\_index\_function.html