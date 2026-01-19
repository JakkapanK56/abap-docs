---
title: "The assignment is performed component by component"
description: |
  In assignments between structures, components of the target structure to which no components of the source structure are assigned keep their previous value, like the statement `MOVE-CORRESPONDING`(ABAPMOVE-CORRESPONDING.html) and like the operator `CORRESPONDING`(ABENCORRESPONDING_CONSTR_ARG_TYP
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_CORRESPONDING_1.htm"
abapFile: "ABENCL_ABAP_CORRESPONDING_1.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENCL", "ABAP", "CORRESPONDING"]
---

The methods `CREATE` and `EXECUTE` of the system class `CL_ABAP_CORRESPONDING` can be used to assign components between structures or between internal tables with a dynamically specified mapping rule.

The factory method `CREATE` is used to create a mapping object:

`DATA(mapper) = cl_abap_corresponding=>create( source = struct|itab destination = struct|itab mapping = mapping_tab discarding_duplicates = flag ).`

Structures `struct` or internal tables `itab` of data types for which the assignment is to be executed must be passed to the parameters `source` and `destination`. An internal table of the type `CL_ABAP_CORRESPONDING=>MAPPING_TABLE`, which contains the mapping rule, must be passed to the parameter `mapping`. If an initial mapping table is passed, only the identically named components are assigned. The mapping table has the following components:

The lines of the internal table must be constructed so that they result in a mapping rule in the correct order. Components of the source structure for which no mapping is defined and that were not excluded are assigned identically named components of the target structure.

The method `EXECUTE` of a mapping object can be used to perform any number of assignments between structures or internal tables `src` and `dst` whose data type matches the source type or target type specified when the object was created:

`mapper->execute( EXPORTING source = src keeping_lines = flag CHANGING destination = dst ).`

The assignment is performed component by component

In assignments between structures, components of the target structure to which no components of the source structure are assigned keep their previous value, like the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) and like the operator [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) with the addition `BASE`. Nested internal tables are always resolved, as if the addition `EXPANDING NESTED TABLES` is specified in `MOVE-CORRESPONDING` or the addition `DEEP` for the operator `CORRESPONDING`. In assignments between internal tables, the target table is always initialized first. The additions `KEEPING TARGET LINES` in `MOVE-CORRESPONDING` or `BASE` in `CORRESPONDING` are reflected in the optional parameter `KEEPING_LINES` which represents a flag. If it is not flagged, internal table lines are not retained.

If the value *X* was passed to the parameter `DISCARDING_DUPLICATES` of the method `CREATE`, duplicate rows are handled in tabular component assignments in the same way as when using the addition [`DISCARDING DUPLICATES`](ABENCORRESPONDING_CONSTR_DUPL.html) in the basic form of the component operator. Here, the target table must have a unique table key.

The source and the target may be the same. However, it should be noted that, unlike in the operator [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) for reflexive assignments. the target object is used directly like in the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) and no temporary interim result is created.

The passing of incorrect parameters to the methods of the class `CL_ABAP_CORRESPONDING` raises exceptions of the class `CX_CORR_DYN_ERROR`.

Use of the class `CL_ABAP_CORRESPONDING` for assignments of components to a simple structure. The mapping rule specifies that the components `a3` are assigned to `b1` and `a1` to `b3`. The component `a2` is ignored since there are no identically named components in the target structure and `b2` keeps its value. `a4` and `a5` in the target structure also keep their values, even though the source structure contains identically named components, since the value of `CL_ABAP_CORRESPONDING=>MAPPING_EXCEPT_ALL` is specified for the mapping type for all non-specified components. The executable [example for simple structures](ABENCL_ABAP_CORR_DYN_ABEXA.html) enables interactive input of the component names that are mapped to each other.

The following example demonstrates the use of the `KEEPING_LINES` parameter. An assignment is done for structures containing an internal table as component. The first call of the `EXECUTE` method does not include the `KEEPING_LINES` parameter, i. e. it is not flagged by default. In the second call of the `EXECUTE` method, the parameter is flagged, i. e. existing table lines are retained.

-   `LEVEL`
-   Level of the components in the structure or line structure. The value 0 represents the top level.
-   `KIND`
-   Mapping type. The possible values are:

-   `CL_ABAP_CORRESPONDING=>MAPPING_COMPONENT` (1) The components specified in this line are mapped to each other.
-   `CL_ABAP_CORRESPONDING=>MAPPING_EXCEPT_COMPONENT` (2) The component of the source structure specified in this line is excluded from the mapping of identically named components.
-   `CL_ABAP_CORRESPONDING=>MAPPING_EXCEPT_ALL` (3) All components of the current source structure are excluded from the mapping of identically name components.
-   `CL_ABAP_CORRESPONDING=>MAPPING_DISCARDING_DUPLICATES` (9) In a source table, duplicate rows are ignored as when using [`DISCARDING DUPLICATES`](ABENCORRESPONDING_CONSTR_DUPL.html) in a mapping rule of the component operator. The target table must have a unique table key.

-   `SRCNAME`
-   Component of the source structure.
-   `DSTNAME`
-   Component of the target structure.

-   between the components specified in the mapping rule
-   between the remaining identically named components at the same level if they were not excluded in the mapping rule.

-   Using the `CREATE` method comes with performance costs. Hence, `CL_ABAP_CORRESPONDING` should be used if the created instance is reused within the code.
-   The methods `CREATE` and `EXECUTE` of the system class `CL_ABAP_CORRESPONDING` implement an assignment similar to the statement
-   `dst = [CORRESPONDING](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) #( BASE ( dst ) struct|itab [MAPPING ... EXCEPT ...](ABENCORRESPONDING_CONSTR_MAPPING.html) ).`
-   Here, the [mapping rule](ABENCORRESPONDING_CONSTR_MAPPING.html) is specified dynamically, however, as the content of a special internal table.
-   The same restrictions apply as to the operator [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html). Components can only be mapped to each other if they are on the same level. Components of a substructure cannot be assigned to the components at higher levels and vice versa.
-   The class `CL_ABAP_CORRESPONDING` always resolves tabular components, which corresponds to the behavior of the operator [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) if a mapping rule is specified. In this case, the addition `DEEP` is also set implicitly.
-   To achieve the same results for standalone components in assignments between structures as in the operator [`CORRESPONDING`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) without the addition `BASE`, an initial structure can be assigned to the parameter `destination`.
-   The [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` cannot be addressed in the mapping table.
-   In reflexive assignments between components of the same object, as in [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html), it should be noted that the processing order is not defined and that a call of the method `EXECUTE` cannot be used to swap the content of two components.
-   See the executable example [Reflexive Component Assignments](ABENREFLEXIVE_CORRESPONDING_ABEXA.html).

-   [`CL_ABAP_CORRESPONDING` for Simple Structures](ABENCL_ABAP_CORR_DYN_ABEXA.html)
-   [`CL_ABAP_CORRESPONDING` for Nested Structures](ABENCL_ABAP_CORR_STRUC_ABEXA.html)
-   [`CL_ABAP_CORRESPONDING` for Internal Tables](ABENCL_ABAP_CORR_ITAB_ABEXA.html)
-   [`CL_ABAP_CORRESPONDING` for Tabular Components](ABENCL_ABAP_CORR_DEEP_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struct1, \\n a1 TYPE string VALUE 'a1', \\n a2 TYPE string VALUE 'a2', \\n a3 TYPE string VALUE 'a3', \\n a4 TYPE string VALUE 'a4', \\n a5 TYPE string VALUE 'a5', \\n END OF struct1, \\n BEGIN OF struct2, \\n b1 TYPE string VALUE 'b1', \\n b2 TYPE string VALUE 'b2', \\n b3 TYPE string VALUE 'b3', \\n a4 TYPE string VALUE 'b4', \\n a5 TYPE string VALUE 'b5', \\n END OF struct2. \\n\\ \\nFINAL(mapper) = \\n cl\_abap\_corresponding=>create( \\n source = struct1 \\n destination = struct2 \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'a1' dstname = 'b3' ) \\n ( level = 0 kind = 1 srcname = 'a3' dstname = 'b1' ) \\n ( level = 0 kind = 3 ) ) ). \\n\\ \\nmapper->execute( EXPORTING source = struct1 \\n CHANGING destination = struct2 ). \\n\\ \\nout->write( struct2 ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: BEGIN OF line1, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE c LENGTH 1, \\n END OF line1, \\n BEGIN OF line2, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE c LENGTH 1, \\n col3 TYPE c LENGTH 1, \\n END OF line2. \\n\\ \\nDATA: \\n BEGIN OF struc\_a, \\n comp TYPE c LENGTH 1, \\n itab\_a TYPE TABLE OF line1 WITH EMPTY KEY, \\n END OF struc\_a, \\n\\ \\n BEGIN OF struc\_b, \\n comp TYPE c LENGTH 1, \\n itab\_b TYPE TABLE OF line2 WITH EMPTY KEY, \\n END OF struc\_b. \\n\\ \\nstruc\_a = VALUE #( comp = 'A' \\n itab\_a = VALUE #( ( col1 = 'a' col2 = 'b' ) \\n ( col1 = 'c' col2 = 'd' ) ) ). \\nstruc\_b = VALUE #( comp = 'B' \\n itab\_b = VALUE #( \\n ( col1 = 'Z' col2 = 'Y' col3 = 'X' ) \\n ( col1 = 'W' col2 = 'V' col3 = 'U' ) ) ). \\n\\ \\nDATA(struc\_c) = struc\_b. \\n\\ \\nFINAL(mapper) = \\n cl\_abap\_corresponding=>create( \\n source = struc\_a \\n destination = struc\_b \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'itab\_a' dstname = 'itab\_b' ) ) ). \\n\\ \\nmapper->execute( EXPORTING source = struc\_a \\n CHANGING destination = struc\_b ). \\n\\ \\nout->write( struc\_b ). \\n\\ \\nFINAL(mapper2) = \\n cl\_abap\_corresponding=>create( \\n source = struc\_a \\n destination = struc\_c \\n mapping = VALUE cl\_abap\_corresponding=>mapping\_table( \\n ( level = 0 kind = 1 srcname = 'itab\_a' dstname = 'itab\_b' ) ) ). \\n\\ \\nmapper2->execute( EXPORTING source = struc\_a \\n keeping\_lines = abap\_true \\n CHANGING destination = struc\_c ). \\n\\ \\nout->write( struc\_c ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencl\_abap\_corresponding.html