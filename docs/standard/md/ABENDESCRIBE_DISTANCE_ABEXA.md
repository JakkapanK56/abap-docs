---
title: "ABENDESCRIBE_DISTANCE_ABEXA"
description: |
  ABENDESCRIBE_DISTANCE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDESCRIBE_DISTANCE_ABEXA.htm"
abapFile: "ABENDESCRIBE_DISTANCE_ABEXA.html"
keywords: ["method", "class", "data", "field-symbol", "ABENDESCRIBE", "DISTANCE", "ABEXA"]
---

The example demonstrates how the distance between two data objects can be determined at runtime.

Determines the offset and length of a character-like fragment within the `struc` structure in bytes, accesses the fragment using an offset/length access, and assigns it to a field symbol of type `c`. Since the structure is not character-like only, the offset/length access takes place using a field symbol, otherwise a syntax error occurs. The field symbol is of the type `x`, since offsets and lengths are determined in bytes. The field symbol `<result>` points to the fragment *Hey you!*.

\* Public class definition \\nCLASS cl\_demo\_describe\_distance DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_describe\_distance IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE x LENGTH 1, \\n comp3 TYPE c LENGTH 4 VALUE 'Hey', \\n comp4 TYPE c LENGTH 4 VALUE 'you!', \\n comp5 TYPE x, \\n END OF struc. \\n\\ \\n FIELD-SYMBOLS: TYPE x, \\n TYPE c. \\n\\ \\n DESCRIBE DISTANCE BETWEEN: \\n struc AND struc-comp3 INTO FINAL(off) IN BYTE MODE, \\n struc-comp3 AND struc-comp5 INTO FINAL(len) IN BYTE MODE. \\n\\ \\n ASSIGN: struc TO CASTING, \\n +off(len) TO CASTING. \\n\\ \\n out->write( \\n |Offset off is \\{ off \\}.\\\\n| && \\n |Length len is \\{ len \\}.\\\\n| && \\n | points to "\\{ \\}".| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_describe\_distance DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_describe\_distance IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE x LENGTH 1, \\n comp3 TYPE c LENGTH 4 VALUE 'Hey', \\n comp4 TYPE c LENGTH 4 VALUE 'you!', \\n comp5 TYPE x, \\n END OF struc. \\n\\ \\n FIELD-SYMBOLS: TYPE x, \\n TYPE c. \\n\\ \\n DESCRIBE DISTANCE BETWEEN: \\n struc AND struc-comp3 INTO FINAL(off) IN BYTE MODE, \\n struc-comp3 AND struc-comp5 INTO FINAL(len) IN BYTE MODE. \\n\\ \\n ASSIGN: struc TO CASTING, \\n +off(len) TO CASTING. \\n\\ \\n out->write( \\n |Offset off is \\{ off \\}.\\\\n| && \\n |Length len is \\{ len \\}.\\\\n| && \\n | points to "\\{ \\}".| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abapdescribe.html abapdescribe\_distance.html