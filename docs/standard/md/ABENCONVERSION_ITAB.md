---
title: "ABENCONVERSION_ITAB"
description: |
  ABENCONVERSION_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_ITAB.htm"
abapFile: "ABENCONVERSION_ITAB.html"
keywords: ["delete", "if", "catch", "data", "types", "internal-table", "ABENCONVERSION", "ITAB"]
---

Internal tables can only be assigned to internal tables. Whether or not assignment is possible depends exclusively on the line type, and it is independent of table type, table key, and number of lines. Internal tables can be assigned to each other if their line types are [compatible](ABENCOMPATIBLE_GLOSRY.html) or [convertible](ABENCONVERTIBLE_GLOSRY.html).

When assigning an internal table to another, the lines of the target table are deleted. A new line is created in the target table for each line in the source table and then filled with the line content of the source table. The lines are stored according to the table category. For assignments to a [sorted table](ABENSORTED_TABLE_GLOSRY.html), the content is automatically sorted, and [hashed tables](ABENHASHED_TABLE_GLOSRY.html) are stored according to the hash algorithm.

The content of the individual lines in the source table is assigned to the lines of the target table according to the same rules as between individual data objects of the corresponding line types. The same basic rule as for all conversions applies: The converted content of the single lines in the source table must be within the [value range](ABENVALUE_RANGE_GLOSRY.html) of the line type in the target table.

Assignments between internal tables and data objects that are not internal tables lead to a syntax error or the runtime error `OBJECTS_MOVE_NOT_SUPPORTED`.

[Avoid unexpected conversion results](ABENUSE_CONVERSION_RULES_GUIDL.html)

A standard table `text_tab` with line type `c` of length 20 is converted to a sorted table of type `string`.

-   In internal tables with compatible or convertible line types, an uncatchable exception can be raised during assignment if, for example, in the target table a [duplicate](ABENITAB_KEY_DUPLICATES.html) of a unique [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) or [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) would be created.
-   Internal tables with elementary line types can raise the same catchable exceptions as assignments between the associated elementary data types. After an exception of this type, the target table contains all lines assigned until this point.
-   In assignments of an initial internal table to a filled internal table, the target table is initialized in the same way as with the statement [`CLEAR`](ABAPCLEAR.html). This releases the memory space required for the table, except for the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html).

TYPES: \\n text TYPE c LENGTH 20. \\nDATA: \\n text\_tab TYPE STANDARD TABLE OF text WITH EMPTY KEY, \\n string\_tab TYPE SORTED TABLE OF string WITH NON-UNIQUE KEY table\_line. \\n\\ \\ntext\_tab = VALUE #( \\n ( 'Perl' ) ( 'C' ) ( 'Visual Basic' ) ( 'Java' ) \\n ( 'ABAP' ) ( 'Pascal' ) ( 'Python' ) ( 'Lisp' ) ). \\n\\ \\nstring\_tab = text\_tab. \\n\\ \\ncl\_demo\_output=>new( )->write( text\_tab )->display( string\_tab ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html