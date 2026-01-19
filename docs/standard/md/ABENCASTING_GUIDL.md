---
title: "ABENCASTING_GUIDL"
description: |
  ABENCASTING_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCASTING_GUIDL.htm"
abapFile: "ABENCASTING_GUIDL.html"
keywords: ["select", "do", "if", "data", "types", "internal-table", "field-symbol", "ABENCASTING", "GUIDL"]
---

Casting refers to the process of handling a data object by assuming a certain data type. This definition is different to the meaning of the concept in other programming languages, such as Java. Here, casting means a different concept which is referred to as 'conversion' in ABAP. Casting in ABAP is either explicit or implicit:

**Avoid implicit casting**

Avoid implicit casting. If a cast to another data type is required, it can usually be implemented explicitly using `ASSIGN ... CASTING`.

Implicit casting can potentially occur if structures are used as follows:

The use of implicit casting is prone to errors and produces source code that is difficult to understand. If the `CASTING` addition is used when handling field symbols, explicit casting can be implemented, which is easier to follow and understand. The explicit casting option is a very important reason to [use field symbols](ABENDYN_ACCESS_DATA_OBJ_GUIDL.html).

The following source code shows the assignment of a text string to a structure with only character-like components. An implicit casting occurs here, which is regarded as unwanted according to the above rule. The entire structure is handled as a text field of type `c` and length 6.

The following source code improves the example above, by assigning the structure to a field symbol of type c. Explicit casting occurs. Only the character-like field symbol is used to handle the structure as a character-like field.

-   Explicit casting is possible by using the `CASTING` addition with the `ASSIGN` statement and by using the `ASSIGNING` addition in statements for processing internal tables. Assignments between reference variables allow [upcasts](ABENUP_CAST_GLOSRY.html) and [downcasts](ABENDOWN_CAST_GLOSRY.html). Obsolete explicit casting is also possible for formal parameters and field symbols, if the `STRUCTURE` addition is used.
-   Implicit casting is sometimes performed for special assignments or during operand handling at certain operand positions. A common example is the handling of flat structures using character-like-only components as a single field of type c.

-   Assignments between incompatible structures or structures and elementary data objects
-   Comparisons between structures and elementary data objects
-   Using structures in operand positions where elementary data objects are expected
-   Reads from the database using `SELECT * ... INTO wa`
-   Using the `INCREMENT` addition for the `ASSIGN` statement

TYPES: BEGIN OF structure, \\n comp1 TYPE c LENGTH 2, \\n comp2 TYPE c LENGTH 4, \\n END OF structure. \\nDATA structure TYPE structure. \\nDATA text TYPE string. \\n... \\ntext = ... \\nstructure = text. ... \\nFIELD-SYMBOLS TYPE c. \\n... \\nASSIGN structure TO CASTING. \\n = ... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html