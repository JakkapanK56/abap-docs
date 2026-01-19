---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINTERFACE_ABEXA.htm"
abapFile: "ABENINTERFACE_ABEXA.html"
keywords: ["insert", "loop", "do", "if", "method", "class", "data", "internal-table", "ABENINTERFACE", "ABEXA"]
---

This example demonstrates the use of interfaces.

This example shows a local interface `status` for displaying the attributes of an object and its implementation in two different local classes.

The interface `status` contains a method `write`. The classes `counter` and `bicycle` implement the interface in the public area. Both classes must implement the interface method in the implementation part according to the required semantics.

First, two class reference variables `count` and `bike` are declared for the classes `counter` and `bicycle`. An interface reference variable `status` and an internal table `status_tab` with a suitable line type for the interface reference variable are created for the interface `status`. All reference variables begin with initial values.

Using the constructor operator `NEW`, an object is created for each class to which the references in `count` and `bike` point. Using the class reference variable, the methods `increment` and `drive` are called in the respective objects.

Class reference variables are inserted in the interface reference table to have the lines in `status_tab` point to the two objects as well. Using the interface references, it is possible to call the interface method `write` in the objects, but not the class methods `increment` or `drive`.

\* CCDEF \\nCLASS o DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_interface DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nINTERFACE status. \\n METHODS write. \\nENDINTERFACE. \\nCLASS counter DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES status. \\n METHODS increment. \\n PRIVATE SECTION. \\n DATA count TYPE i. \\nENDCLASS. \\n\\ \\nCLASS counter IMPLEMENTATION. \\n METHOD status~write. \\n o=>out->write\_text( \\n |Count in counter is \\{ count \\}| ). \\n ENDMETHOD. \\n METHOD increment. \\n count += 1. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS bicycle DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES status. \\n METHODS drive. \\n PRIVATE SECTION. \\n DATA speed TYPE i. \\nENDCLASS. \\n\\ \\nCLASS bicycle IMPLEMENTATION. \\n METHOD status~write. \\n o=>out->write\_text( \\n |Speed of bicycle is \\{ speed \\}| ). \\n ENDMETHOD. \\n METHOD drive. \\n speed += 10. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_interface IMPLEMENTATION. \\n METHOD main. \\n o=>out = out. \\n\\ \\n DATA status\_tab TYPE TABLE OF REF TO status WITH EMPTY KEY. \\n\\ \\n FINAL(count) = NEW counter( ). \\n FINAL(bike) = NEW bicycle( ). \\n\\ \\n DO 5 TIMES. \\n count->increment( ). \\n bike->drive( ). \\n ENDDO. \\n\\ \\n status\_tab = VALUE #( ( count ) \\n ( bike ) ). \\n\\ \\n LOOP AT status\_tab ASSIGNING FIELD-SYMBOL(). \\n \->write( ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS o DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_interface DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nINTERFACE status. \\n METHODS write. \\nENDINTERFACE. \\nCLASS counter DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES status. \\n METHODS increment. \\n PRIVATE SECTION. \\n DATA count TYPE i. \\nENDCLASS. \\n\\ \\nCLASS counter IMPLEMENTATION. \\n METHOD status~write. \\n o=>out->write\_text( \\n |Count in counter is \\{ count \\}| ). \\n ENDMETHOD. \\n METHOD increment. \\n count += 1. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS bicycle DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES status. \\n METHODS drive. \\n PRIVATE SECTION. \\n DATA speed TYPE i. \\nENDCLASS. \\n\\ \\nCLASS bicycle IMPLEMENTATION. \\n METHOD status~write. \\n o=>out->write\_text( \\n |Speed of bicycle is \\{ speed \\}| ). \\n ENDMETHOD. \\n METHOD drive. \\n speed += 10. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_interface IMPLEMENTATION. \\n METHOD main. \\n o=>out = out. \\n\\ \\n DATA status\_tab TYPE TABLE OF REF TO status WITH EMPTY KEY. \\n\\ \\n FINAL(count) = NEW counter( ). \\n FINAL(bike) = NEW bicycle( ). \\n\\ \\n DO 5 TIMES. \\n count->increment( ). \\n bike->drive( ). \\n ENDDO. \\n\\ \\n status\_tab = VALUE #( ( count ) \\n ( bike ) ). \\n\\ \\n LOOP AT status\_tab ASSIGNING FIELD-SYMBOL(). \\n \->write( ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_abexas.html