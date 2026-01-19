---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCREATE_DATA_IMPLICIT_ABEXA.htm"
abapFile: "ABENCREATE_DATA_IMPLICIT_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENCREATE", "DATA", "IMPLICIT", "ABEXA"]
---

This example demonstrates how data objects are created with an implicit type.

Creation of an internal table and a data object of type `i`. The data types of the created objects are the static types of the reference variables `tab_ref` and `i_ref`. The data objects are created directly before they are used and are then passed to the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) by the initialization of the reference variable. The data objects are accessed by dereferencing the data references.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_create\_data\_implicit DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_data\_implicit IMPLEMENTATION. \\n METHOD main. \\n TYPES t\_itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n\\ \\n DATA: tab\_ref TYPE REF TO t\_itab, \\n i\_ref TYPE REF TO i. \\n\\ \\n IF tab\_ref IS INITIAL. \\n CREATE DATA tab\_ref. \\n ENDIF. \\n\\ \\n tab\_ref->\* = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n\\ \\n IF tab\_ref IS NOT INITIAL. \\n IF i\_ref IS INITIAL. \\n CREATE DATA i\_ref. \\n ENDIF. \\n LOOP AT tab\_ref->\* INTO i\_ref->\*. \\n out->write( |\\{ i\_ref->\* \\}| ). \\n ENDLOOP. \\n ENDIF. \\n\\ \\n CLEAR: tab\_ref, i\_ref. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_create\_data\_implicit DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_data\_implicit IMPLEMENTATION. \\n METHOD main. \\n TYPES t\_itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n\\ \\n DATA: tab\_ref TYPE REF TO t\_itab, \\n i\_ref TYPE REF TO i. \\n\\ \\n IF tab\_ref IS INITIAL. \\n CREATE DATA tab\_ref. \\n ENDIF. \\n\\ \\n tab\_ref->\* = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n\\ \\n IF tab\_ref IS NOT INITIAL. \\n IF i\_ref IS INITIAL. \\n CREATE DATA i\_ref. \\n ENDIF. \\n LOOP AT tab\_ref->\* INTO i\_ref->\*. \\n out->write( |\\{ i\_ref->\* \\}| ). \\n ENDLOOP. \\n ENDIF. \\n\\ \\n CLEAR: tab\_ref, i\_ref. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html abapcreate\_data\_implicit.html