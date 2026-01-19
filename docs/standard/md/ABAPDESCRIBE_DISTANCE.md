---
title: "ABAPDESCRIBE_DISTANCE"
description: |
  ABAPDESCRIBE_DISTANCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_DISTANCE.htm"
abapFile: "ABAPDESCRIBE_DISTANCE.html"
keywords: ["do", "if", "case", "catch", "data", "types", "internal-table", "ABAPDESCRIBE", "DISTANCE"]
---

[Short Reference](ABAPDESCRIBE_DISTANCE_SHORTREF.html)

`DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst`\\ 
                          `IN \{BYTE|CHARACTER\} MODE.`

This statement determines the distance between the start positions of the data objects `dobj1` and `dobj2`.

The return value has the type `i`. The following can be specified for `dst`:

It is not important in which order `dobj1` and `dobj2` are specified.

The variant with the addition `IN BYTE MODE` determines the distance in bytes. The variant with the addition `IN CHARACTER MODE` converts the distance into the number of characters that can be stored in this length according to the current character format. When this addition is used in `IN CHARACTER MODE` and the determined distance cannot be converted into a number of characters, an uncatchable exception is raised.

In the case of [deeper](ABENDEEP_GLOSRY.html) data types, the referenced data object is not relevant but the position of the internal reference (for strings and internal tables) or the reference variables instead.

The results of the two statements in a Unicode system are 5 and 10.

The `DESCRIBE` statement returns the offset of component `col3` in structure `struct` in bytes. The result is `8`. It consists of 1 byte for `col1`, 3 bytes for an alignment gap, and 4 bytes for `col2`.

[Determining Data Object Distances](ABENDESCRIBE_DISTANCE_ABEXA.html)

-   An existing variable to which the return value can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `i` is declared.

-   The distance between data objects should only be determined within a structure for its components, since this is the only way to guarantee that they follow each other directly in the memory. It should be noted that the [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) are counted as well, which is why the addition in `IN BYTE MODE` should be used to avoid an uncatchable exception.
-   The byte offset of a component in a structure can be determined by applying `DESCRIBE DISTANCE` to this component and the first component of the structure.
-   With respect to `DESCRIBE DISTANCE`, every substructure declared as a [boxed component](ABENBOXED_COMPONENT_GLOSRY.html) is an independent structure. The distance between components which are not in the same boxed component is undefined.

-   *Cause:* Distance cannot be converted into characters.
    *Runtime error:*\\ `UC_NO_CHAR_NUMBER`

DATA text TYPE c LENGTH 10 VALUE '0123456789'. \\n\\ \\nDESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1) \\n INTO FINAL(cdist) \\n IN CHARACTER MODE. \\n\\ \\nDESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1) \\n INTO FINAL(bdist) \\n IN BYTE MODE. DATA: \\n BEGIN OF struct, \\n col1 TYPE x LENGTH 1 VALUE 'FF', \\n col2 TYPE i VALUE 333, \\n col3 TYPE c LENGTH 1 VALUE 'X', \\n END OF struct. \\n\\ \\nDESCRIBE DISTANCE BETWEEN struct-col3 AND struct-col1 \\n INTO FINAL(dist) IN BYTE MODE. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( struct \\n )->display( dist ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abapdescribe.html