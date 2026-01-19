---
title: "ABENCL_ABAP_STRUCT_UTILITIES"
description: |
  ABENCL_ABAP_STRUCT_UTILITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCL_ABAP_STRUCT_UTILITIES.htm"
abapFile: "ABENCL_ABAP_STRUCT_UTILITIES.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENCL", "ABAP", "STRUCT", "UTILITIES"]
---

The system class `CL_ABAP_STRUCT_UTILITIES` allows an efficient processing of non-initial components of a structure. The following static methods are available:

The following example demonstrates `FILLED_COMPONENTS` as follows: A structure is created with components of different types. Values are assigned to all components. All components are retrieved using RTTI. Using `FILLED_COMPONENTS`, an internal table is retrieved that contains the names and indexes of the non-initial components. In a `DO` loop, structure components are initialized one by one, and `FILLED_COMPONENTS` is called again to show that components with their type-specific initial values are not included in the result.

Similarly, `FILLED_COMPONENTS_C` and `FILLED_COMPONENTS_X` are demonstrated. `FILLED_COMPONENTS_X` is demonstrated using a BDEF derived type to check the flags in the `%control` structure.

-   `FILLED_COMPONENTS`
-   Returns an internal table containing the names of the non-initial components of the structure and their index.
-   `FILLED_COMPONENTS_C`
-   Same as above. All structure components must be typed with `c LENGTH 1`.
-   `FILLED_COMPONENTS_X`
-   Same as above. All structure components must be typed with `x LENGTH 1`. It is especially useful for checking filled components of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html), for example, [`%control`](ABAPDERIVED_TYPES_CONTROL.html).

DATA(o) = cl\_demo\_output=>new( ). \\no->write( \`\*\*\*\*\*\*\*\*\*\*\* filled\_components \*\*\*\*\*\*\*\*\*\*\*\` ). \\nDATA: BEGIN OF struct, \\n a TYPE c LENGTH 1, \\n b TYPE i, \\n c TYPE spfli, \\n d TYPE REF TO string, \\n END OF struct. \\n\\ \\nstruct = VALUE #( a = 'X' \\n b = 123 \\n c = VALUE #( carrid = 'LH' ) \\n d = NEW #( \`ABAP\` ) ). \\n\\ \\nDATA(all\_comps) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( struct ) )->components. \\no->write( |Number of components: \\{ lines( all\_comps ) \\}| ). \\no->write( all\_comps ). \\n\\ \\nDATA(filled\_comps) = \\n cl\_abap\_struct\_utilities=>filled\_components( struct ). \\no->write( filled\_comps ). \\nDATA(comp\_num) = lines( all\_comps ). \\nDO lines( all\_comps ) TIMES. \\n CLEAR struct-(comp\_num). \\n filled\_comps = cl\_abap\_struct\_utilities=>filled\_components( struct ). \\n o->write( filled\_comps ). \\n comp\_num -= 1. \\nENDDO. \\n\\ \\no->write( \`\*\*\*\*\*\*\*\*\*\*\* filled\_components\_c \*\*\*\*\*\*\*\*\*\*\*\` ). \\nDATA: BEGIN OF struct\_c1, \\n a TYPE c LENGTH 1 VALUE 'X', \\n b TYPE c LENGTH 1, \\n c TYPE c LENGTH 1 VALUE 'X', \\n END OF struct\_c1. \\n\\ \\nDATA(all\_comps\_c1) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( struct\_c1 ) )->components. \\no->write( |Number of components: \\{ lines( all\_comps\_c1 ) \\}| ). \\no->write( all\_comps\_c1 ). \\n\\ \\nfilled\_comps = \\n cl\_abap\_struct\_utilities=>filled\_components\_c( struct\_c1 ). \\no->write( filled\_comps ). \\n\\ \\no->write( \`\*\*\*\*\*\*\*\*\*\*\* filled\_components\_x \*\*\*\*\*\*\*\*\*\*\*\` ). \\nDATA struc\_der\_type TYPE STRUCTURE FOR READ IMPORT demo\_managed\_root\_4. \\nstruc\_der\_type = VALUE #( \\n %control = VALUE #( key\_field = if\_abap\_behv=>mk-on \\n field1 = if\_abap\_behv=>mk-on \\n field4 = if\_abap\_behv=>mk-on ) ). \\n\\ \\nDATA(all\_comps\_ctrl) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( \\n struc\_der\_type-%control ) )->components. \\no->write( |Number of components: \\{ lines( all\_comps\_ctrl ) \\}| ). \\no->write( all\_comps\_ctrl ). \\n\\ \\nfilled\_comps = cl\_abap\_struct\_utilities=>filled\_components\_x( \\n struc\_der\_type-%control ). \\no->write( filled\_comps ). \\no->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html