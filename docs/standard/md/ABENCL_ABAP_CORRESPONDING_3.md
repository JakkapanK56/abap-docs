---
title: "ABENCL_ABAP_CORRESPONDING_3"
description: |
  ABENCL_ABAP_CORRESPONDING_3 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_CORRESPONDING_3.htm"
abapFile: "ABENCL_ABAP_CORRESPONDING_3.html"
keywords: ["if", "method", "class", "data", "internal-table", "ABENCL", "ABAP", "CORRESPONDING"]
---

The method `CREATE_WITH_VALUE` of the system class `CL_ABAP_CORRESPONDING` has essentially the same function as the method [`CREATE`](ABENCL_ABAP_CORRESPONDING_1.html). Additionally, the values of any data objects can be assigned to the components of the target structure or target table.

The factory method `CREATE_WITH_VALUE` creates a mapping object:

`DATA(mapper) = cl_abap_corresponding=>create_with_value( source = struct|itab destination = struct|itab mapping = mapping_tab discarding_duplicates = flag ).`

For the parameters `source` and `destination`, the same applies as to the method [`CREATE`](ABENCL_ABAP_CORRESPONDING_1.html). An internal table of the type `CL_ABAP_CORRESPONDING=>MAPPING_TABLE_VALUE` that contains the mapping rule, must be passed to the parameter `mapping`. This mapping table has the same components, with the same meaning as a mapping table of type [`CL_ABAP_CORRESPONDING=>MAPPING_TABLE`](ABENCL_ABAP_CORRESPONDING_1.html) with an additional column and further values for the column `KIND`:

A mapping object created with `CREATE_WITH_VALUE` is used like a mapping object created with [`CREATE`](ABENCL_ABAP_CORRESPONDING_1.html) with the method `EXECUTE`.

The component `b2` is given the value *xxx* and the component `b3` is given the value *yyy*. The components `b1` and `b4` are given the values of the assigned components `a1` and `a4` of the source structure.

-   `VALUE`
-   In this column, a reference to a suitable data object can be specified, whose value is assigned to the component of the target structure that is specified in `DSTNAME`.
-   `KIND`
-   The additional values for the mapping type are:

-   `CL_ABAP_CORRESPONDING=>MAPPING_VALUE` (16), the value specified in `VALUE` is always assigned. The column `SRCNAME` must be initial
-   `CL_ABAP_CORRESPONDING=>MAPPING_DEFAULT_VALUE` (32), the value specified in `VALUE` is only assigned if the component specified in the column `SRCNAME` is initial. The component name in `SRCNAME` must exist in the source structure.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struct1, \\n a1 TYPE string VALUE 'a1', \\n a2 TYPE string VALUE 'a2', \\n a3 TYPE string VALUE ' ', \\n a4 TYPE string VALUE 'a4', \\n END OF struct1, \\n BEGIN OF struct2, \\n b1 TYPE string VALUE 'b1', \\n b2 TYPE string VALUE 'b2', \\n b3 TYPE string VALUE 'b3', \\n b4 TYPE string VALUE 'b4', \\n END OF struct2. \\n\\ \\nFINAL(mapper) = \\n cl\_abap\_corresponding=>create\_with\_value( \\n source = struct1 \\n destination = struct2 \\n mapping = VALUE \\n cl\_abap\_corresponding=>mapping\_table\_value( \\n ( level = 0 kind = 1 srcname = 'a1' dstname = 'b1' ) \\n ( level = 0 kind = 16 dstname = 'b2' \\n value = REF #( \`xxx\` ) ) \\n ( level = 0 kind = 32 srcname = 'a3' dstname = 'b3' \\n value = REF #( \`yyy\` ) ) \\n ( level = 0 kind = 32 srcname = 'a4' dstname = 'b4' \\n value = REF #( \`zzz\` ) ) \\n ) ). \\n\\ \\nmapper->execute( EXPORTING source = struct1 \\n CHANGING destination = struct2 ). \\n\\ \\nout->write( struct2 ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencl\_abap\_corresponding.html