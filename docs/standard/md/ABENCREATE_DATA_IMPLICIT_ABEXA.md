---
title: "ABENCREATE_DATA_IMPLICIT_ABEXA"
description: |
  ABENCREATE_DATA_IMPLICIT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCREATE_DATA_IMPLICIT_ABEXA.htm"
abapFile: "ABENCREATE_DATA_IMPLICIT_ABEXA.html"
keywords: ["loop", "if", "method", "class", "data", "types", "internal-table", "ABENCREATE", "DATA", "IMPLICIT", "ABEXA"]
---

This example demonstrates how data objects are created with an implicit type.

Creation of an internal table and a data object of type `i`. The data types of the created objects are the static types of the reference variables `tab_ref` and `i_ref`. The data objects are created directly before they are used and are then passed to the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) by the initialization of the reference variable. The data objects are accessed by dereferencing the data references.

\* Public class definition \\nCLASS cl\_demo\_create\_data\_implicit DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_data\_implicit IMPLEMENTATION. \\n METHOD main. \\n TYPES t\_itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n\\ \\n DATA: tab\_ref TYPE REF TO t\_itab, \\n i\_ref TYPE REF TO i. \\n\\ \\n IF tab\_ref IS INITIAL. \\n CREATE DATA tab\_ref. \\n ENDIF. \\n\\ \\n tab\_ref->\* = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n\\ \\n IF tab\_ref IS NOT INITIAL. \\n IF i\_ref IS INITIAL. \\n CREATE DATA i\_ref. \\n ENDIF. \\n LOOP AT tab\_ref->\* INTO i\_ref->\*. \\n out->write( |\\{ i\_ref->\* \\}| ). \\n ENDLOOP. \\n ENDIF. \\n\\ \\n CLEAR: tab\_ref, i\_ref. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_create\_data\_implicit DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_data\_implicit IMPLEMENTATION. \\n METHOD main. \\n TYPES t\_itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n\\ \\n DATA: tab\_ref TYPE REF TO t\_itab, \\n i\_ref TYPE REF TO i. \\n\\ \\n IF tab\_ref IS INITIAL. \\n CREATE DATA tab\_ref. \\n ENDIF. \\n\\ \\n tab\_ref->\* = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ). \\n\\ \\n IF tab\_ref IS NOT INITIAL. \\n IF i\_ref IS INITIAL. \\n CREATE DATA i\_ref. \\n ENDIF. \\n LOOP AT tab\_ref->\* INTO i\_ref->\*. \\n out->write( |\\{ i\_ref->\* \\}| ). \\n ENDLOOP. \\n ENDIF. \\n\\ \\n CLEAR: tab\_ref, i\_ref. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html abapcreate\_data\_implicit.html