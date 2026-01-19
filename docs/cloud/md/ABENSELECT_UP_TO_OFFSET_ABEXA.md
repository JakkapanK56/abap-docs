---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_UP_TO_OFFSET_ABEXA.htm"
abapFile: "ABENSELECT_UP_TO_OFFSET_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENSELECT", "OFFSET", "ABEXA"]
---

This example demonstrates the additions [`UP TO` and `OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) of the statement [`SELECT`](ABAPSELECT.html).

An offset and a maximum number of rows can be entered for the result set of a `SELECT` statement.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_up\_to\_offset DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n o TYPE int8, \\n n TYPE int8. \\n METHODS \\n setup. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_up\_to\_offset IMPLEMENTATION. \\n METHOD main. \\n setup( ). \\n\\ \\n SELECT FROM demo\_expressions \\n FIELDS id, num1 AS number, numlong1 AS result \\n ORDER BY id, num1 \\n INTO TABLE @FINAL(itab) \\n OFFSET @o \\n UP TO @n ROWS. \\n\\ \\n out->write( itab ). \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n ENDMETHOD. \\n METHOD setup. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = o \\n )->request( CHANGING field = n ). \\n IF NOT ( ( o BETWEEN 0 AND 2147483646 ) AND \\n ( n BETWEEN 0 AND 2147483646 ) ). \\n out->write( \\n \`Input not in allowed interval!\` ). \\n RETURN. \\n ENDIF. \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DO strlen( abcde ) TIMES. \\n INSERT demo\_expressions FROM @( \\n VALUE #( id = substring( val = abcde \\n off = sy-index - 1 \\n len = 1 ) \\n num1 = sy-index \\n numlong1 = ipow( base = 2 exp = sy-index ) ) ). \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_up\_to\_offset DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n o TYPE int8, \\n n TYPE int8. \\n METHODS \\n setup. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_up\_to\_offset IMPLEMENTATION. \\n METHOD main. \\n setup( ). \\n\\ \\n SELECT FROM demo\_expressions \\n FIELDS id, num1 AS number, numlong1 AS result \\n ORDER BY id, num1 \\n INTO TABLE @FINAL(itab) \\n OFFSET @o \\n UP TO @n ROWS. \\n\\ \\n out->write( itab ). \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n ENDMETHOD. \\n METHOD setup. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = o \\n )->request( CHANGING field = n ). \\n IF NOT ( ( o BETWEEN 0 AND 2147483646 ) AND \\n ( n BETWEEN 0 AND 2147483646 ) ). \\n out->write( \\n \`Input not in allowed interval!\` ). \\n RETURN. \\n ENDIF. \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\n DO strlen( abcde ) TIMES. \\n INSERT demo\_expressions FROM @( \\n VALUE #( id = substring( val = abcde \\n off = sy-index - 1 \\n len = 1 ) \\n num1 = sy-index \\n numlong1 = ipow( base = 2 exp = sy-index ) ) ). \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapselect\_up\_to\_offset.html