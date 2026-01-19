---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_FUNCTION_MIXED_ABEXA.htm"
abapFile: "ABENSTRING_FUNCTION_MIXED_ABEXA.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "ABENSTRING", "FUNCTION", "MIXED", "ABEXA"]
---

This example demonstrates the string functions [`to_mixed`](ABENCASE_FUNCTIONS.html) and [`from_mixed`](ABENCASE_FUNCTIONS.html).

The class queries the parameters for the functions `to_mixed` and `from_mixed`. The result of `to_mixed` is processed by `from_mixed`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_to\_from\_mixed DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_to\_from\_mixed IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n original TYPE c LENGTH 30 VALUE 'ABAP\_DOCU\_START', \\n to\_sep TYPE c LENGTH 1 VALUE '\_', \\n to\_case TYPE c LENGTH 1 VALUE 'a', \\n to\_min TYPE i VALUE 1, \\n from\_sep TYPE c LENGTH 1 VALUE '.', \\n from\_case TYPE c LENGTH 1 VALUE 'A', \\n from\_min TYPE i VALUE 5. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = original \\n )->add\_line( \\n )->add\_field( CHANGING field = to\_sep \\n )->add\_field( CHANGING field = to\_case \\n )->add\_field( CHANGING field = to\_min \\n )->add\_line( \\n )->add\_field( CHANGING field = from\_sep \\n )->add\_field( CHANGING field = from\_case \\n )->add\_field( CHANGING field = from\_min \\n )->request( ). \\n\\ \\n TRY. \\n out->write( |original: \\{ original \\}| ). \\n FINAL(to\_mixed) = to\_mixed( val = original \\n sep = to\_sep \\n case = to\_case \\n min = to\_min ). \\n out->write( |to\_mixed: \\{ to\_mixed \\}| ). \\n FINAL(from\_mixed) = from\_mixed( val = to\_mixed \\n sep = from\_sep \\n case = from\_case \\n min = from\_min ). \\n out->write( |from\_mixed: \\{ from\_mixed \\}| ). \\n CATCH cx\_sy\_strg\_par\_val. \\n out->write( 'Invalid parameters' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_to\_from\_mixed DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_to\_from\_mixed IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n original TYPE c LENGTH 30 VALUE 'ABAP\_DOCU\_START', \\n to\_sep TYPE c LENGTH 1 VALUE '\_', \\n to\_case TYPE c LENGTH 1 VALUE 'a', \\n to\_min TYPE i VALUE 1, \\n from\_sep TYPE c LENGTH 1 VALUE '.', \\n from\_case TYPE c LENGTH 1 VALUE 'A', \\n from\_min TYPE i VALUE 5. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = original \\n )->add\_line( \\n )->add\_field( CHANGING field = to\_sep \\n )->add\_field( CHANGING field = to\_case \\n )->add\_field( CHANGING field = to\_min \\n )->add\_line( \\n )->add\_field( CHANGING field = from\_sep \\n )->add\_field( CHANGING field = from\_case \\n )->add\_field( CHANGING field = from\_min \\n )->request( ). \\n\\ \\n TRY. \\n out->write( |original: \\{ original \\}| ). \\n FINAL(to\_mixed) = to\_mixed( val = original \\n sep = to\_sep \\n case = to\_case \\n min = to\_min ). \\n out->write( |to\_mixed: \\{ to\_mixed \\}| ). \\n FINAL(from\_mixed) = from\_mixed( val = to\_mixed \\n sep = from\_sep \\n case = from\_case \\n min = from\_min ). \\n out->write( |from\_mixed: \\{ from\_mixed \\}| ). \\n CATCH cx\_sy\_strg\_par\_val. \\n out->write( 'Invalid parameters' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenstring\_functions\_abexas.html