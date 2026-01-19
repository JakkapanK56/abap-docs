---
title: "ABENCL_ABAP_CORRESPONDING_2"
description: |
  ABENCL_ABAP_CORRESPONDING_2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCL_ABAP_CORRESPONDING_2.htm"
abapFile: "ABENCL_ABAP_CORRESPONDING_2.html"
keywords: ["if", "method", "class", "data", "types", "internal-table", "ABENCL", "ABAP", "CORRESPONDING"]
---

The methods `CREATE_USING` and `EXECUTE_USING` of the system class `CL_ABAP_CORRESPONDING` can be used to assign components between internal tables with a dynamically specified mapping rule. The source table acts as a lookup table.

The factory method `CREATE_USING` is used to create a mapping object:

`DATA(mapper) = cl_abap_corresponding=>create_using( destination = itab using = lookup_tab mapping = mapping_tab ).`

Internal tables `itab` and `lookup_table` of the table types to which the assignment is to be made must be passed to the parameters `destination` and `using`. An internal table of the type `CL_ABAP_CORRESPONDING=>MAPPING_TABLE` that contains the mapping rule, must be passed to the parameter `mapping`. The mapping table has the same components as in the methods for [simple assignments](ABENCL_ABAP_CORRESPONDING_1.html) with the following special semantics:

The method `EXECUTE_USING` of a mapping object can be used to perform any number of assignments between tables `lookup_src` and `dst` whose data type matches the source type or target type `lookup_tab` or `itab` specified when the object was created:

`mapper->execute_using( EXPORTING using = lookup_src CHANGING destination = dst ).`

For each line in `dst`, a line is searched for in the lookup table `lookup_src` that matches this line in accordance with the relationship defined using the mapping type `CL_ABAP_CORRESPONDING=>MAPPING_USING_COMPONENT` in the mapping table. If the key is not unique, the first line found is used. If no line like this is found, the line from `dst` remains unchanged. If a line like this is found in `lookup_src`, it is assigned to the line from `dst` in accordance with the rules of [`MOVE-CORRESPONDING` for structures](ABAPMOVE-CORRESPONDING.html) using the addition `EXPANDING NESTED TABLES`, with the following exception. The components used for the search are not assigned by default. The lines in the mapping table with mapping types for [simple assignments](ABENCL_ABAP_CORRESPONDING_1.html) can be used to override the default assignment of identically named components and the default exclusion of the components used for the search. It is not possible to specify the same table for `dst` and `lookup_src`, otherwise the runtime error `CORRESPONDING_SELF` occurs.

The example shows the implementation of the example of component operator [`CORRESPONDING` with lookup table](ABENCORRESPONDING_CONSTR_USING.html) to class `CL_ABAP_CORRESPONDING`.

[`CL_ABAP_CORRESPONDING` with Lookup Table](ABENCL_ABAP_CORR_LOOKUP_ABEXA.html)

-   `KIND`
-   Mapping type. Additional possible values are:

-   `CL_ABAP_CORRESPONDING=>USING_KEY` (4), the table key of the lookup table used for the evaluation is specified in the component `SRCNAME` in this line. The table must contain such a line.
-   `CL_ABAP_CORRESPONDING=>MAPPING_USING_COMPONENT` (5), the name of a column of the lookup table in `SRCNAME` is linked with the name of a column of the target table in `DSTNAME` in a line like this. All key fields of the table key used must be covered by a line like this.

-   The mapping types for [simple assignments](ABENCL_ABAP_CORRESPONDING_1.html) can also be used and have the same semantics as described here.

-   The methods `CREATE_USING` and `EXECUTE_USING` of the system class `CL_ABAP_CORRESPONDING` implement an assignment similar to the statement
-   `dst = [CORRESPONDING](ABENCORRESPONDING_CONSTR_USING.html) #( dst FROM lookup_tab KEY key_name ... ).`
-   However, the columns used for comparison between the target table and lookup table and the [mapping rule](ABENCORRESPONDING_CONSTR_MAPPING.html) are specified dynamically as the content of a special internal table.
-   In the mapping table, the columns of the target table `dst` are part of the column `DSTNAME`, regardless of the mapping type, and the columns of the lookup table are part of the column `SRCNAME`. In the [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_USING.html) operator, however, the arrangement of the operands after `USING` is different from the arrangement after `MAPPING`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n value TYPE i, \\n comment TYPE string, \\n END OF line, \\n itab1 TYPE STANDARD TABLE OF line WITH EMPTY KEY, \\n itab2 TYPE HASHED TABLE OF line WITH UNIQUE KEY value. \\n\\ \\nDATA(itab1) = VALUE itab1( FOR i = 1 UNTIL i >= 10 ( value = i ) ). \\nFINAL(itab2) = VALUE itab2( ( value = 2 comment = \`...\` ) \\n ( value = 3 comment = \`...\` ) \\n ( value = 5 comment = \`...\` ) \\n ( value = 8 comment = \`...\` ) ). \\n\\ \\nFINAL(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 4 srcname = 'PRIMARY\_KEY' ) \\n ( level = 0 kind = 5 srcname = 'VALUE' dstname = 'VALUE' ) ). \\n\\ \\ncl\_abap\_corresponding=>create\_using( \\n destination = itab1 \\n using = itab2 \\n mapping = mapping\_tab \\n )->execute\_using( EXPORTING using = itab2 \\n CHANGING destination = itab1 ). \\n\\ \\nout->write( itab1 ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencl\_abap\_corresponding.html