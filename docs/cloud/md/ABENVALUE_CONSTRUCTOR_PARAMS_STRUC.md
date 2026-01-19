---
title: "ABENVALUE_CONSTRUCTOR_PARAMS_STRUC"
description: |
  ABENVALUE_CONSTRUCTOR_PARAMS_STRUC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.htm"
abapFile: "ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENVALUE", "CONSTRUCTOR", "PARAMS", "STRUC"]
---

``... VALUE dtype|#( [[`let_exp`](ABAPLET.html)]\                     [BASE dobj]\                     comp1 = dobj1 comp2 = dobj2 ... ) ...``

If `dtype` is a structured data type or `#` stands for a type like this, the individual components can be specified as named arguments `comp1`, `comp2`, ... Each component of the return value can be assigned a data object that has the same data type as the component, or whose data type can be converted to this data type. This assignment is made for all data types in accordance with the corresponding [assignment rules](ABENCONVERSION_RULES.html).

An addition `BASE` can be specified in front of the individual component assignments, followed by a data object `dobj`. `dobj` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The type of `dobj` must be convertible to the type of the return value. If `BASE` is specified, the content of `dobj` is assigned to the return value before the individual components are assigned. If the character `#` is specified for the type of the return value and the type cannot be determined from the operand position of the `VALUE` expression, the type of `dobj` is used for this expression if it is known and structured.

`dobj1`, `dobj2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). An optional `LET` expression [`let_exp`](ABAPLET.html) can be specified in front of the assignments to define local helper fields that can be used on the right side of the assignments.

If a component is structured itself, either a suitable data object can be assigned to the entire substructure or its components can be listed individually using the structure component selector (`-`). Non-specified components are ignored and keep their type-specific initial value or the value assigned using `BASE`. If the addition `BASE` is used, at least one component must also be specified.

If the `VALUE` operator is used as the source of an assignment to a structure, this structure is first initialized after any [`LET`](ABAPLET.html) expressions are evaluated or the structure is first assigned the data object `dobj` after `BASE`. The assignments are then executed directly in the parentheses, with the structure components as target fields.

It is not allowed to assign multiple values to a component.

Three different ways of filling a nested structure `struct` with values. The structure is given the same values each time.

This example shows the effects that occur when components of a target structure are used as assignment sources. After the assignment to `struct1`, `col1` and `col2` have the value 0 and `col3` and `col4` have the value 5. The original values of `col1` and `col2` are not switched and `col3` is not given the original value of `col4`. The assignment to `struct2` demonstrates how the behavior can be changed by saving the target object to a helper variable `x` and using it. In `struct2`, the original values of `col1` and `col2` are switched and `col3` is given the original value of `col4`.

Use of `BASE`. The type of the return value of `base1` is transferred in the construction of `struct1`. This is not possible in the construction of `struct2`, since `base2` is not structured. In both results, `col1` and `col3` have the values `xx` or `zz` assigned using `BASE`, whereas `col2` has the directly assigned value *BB*.

Use of `BASE` with a [`CORRESPONDING` expression](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) for an assignment between two incompatible structures. `struct1` is first assigned only the identically named components of `struct2` and then the remaining components are explicitly supplied. The same can be done for the columns of an internal table by performing an appropriate assignment within an iteration using [`FOR`](ABENFOR_ITAB.html).

Constructing a structure with [component groups](ABENCOMPONENT_GROUP_GLOSRY.html). All `VALUE` operators have the same effect.

-   It leads to a syntax error, if the name of a component appears more than once on the left side of an assignment.
-   A syntax warning occurs, if structures are involved that contain [component groups](ABENCOMPONENT_GROUP_GLOSRY.html). Then, the respective components can be addressed as usual as components of the including structures or by using the name of the component group. In that case, a component might be assigned more than one value and the latest assignment is considered.

-   The assignments can be specified in any order in the parentheses after the optional additions `LET ... IN` and `BASE`, in any order.
-   If a component with a complex data type is to be constructed in an operand position, the value operator `VALUE` can be used again. Tabular components, for example, are affected by this. This is also possible for structured components, but not necessary since the subcomponents can be addressed using the structure component selector.
-   The rule that a target structure of an assignment is first completely overwritten and then processed directly can produce surprising results if structure components on the left side are specified as data objects to be assigned on the right side. The assignments on the right are not evaluated and assigned first, but the current value is used for each assignment. If the entire structure or structure components on the left side are needed on the right side, however, they can be saved in local helper variables using a [`LET`](ABAPLET.html) expression, since this expression is evaluated first.
-   If the target table is specified as `dobj` after `BASE` in an assignment to an existing structure, no assignment takes place before the component assignments are evaluated, and the target structure just keeps its value instead.

TYPES: BEGIN OF t\_col2, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF t\_col2. \\n\\ \\nTYPES: BEGIN OF t\_struct, \\n col1 TYPE i, \\n col2 TYPE t\_col2, \\n END OF t\_struct. \\n\\ \\nDATA: struct TYPE t\_struct, \\n col2 TYPE t\_col2. \\n\\ \\nstruct = VALUE t\_struct( col1 = 1 \\n col2-col1 = 1 \\n col2-col2 = 2 ). \\n\\ \\ncol2 = VALUE t\_col2( col1 = 1 \\n col2 = 2 ). \\nstruct = VALUE t\_struct( col1 = 1 \\n col2 = col2 ). \\n\\ \\nstruct = VALUE t\_struct( col1 = 1 \\n col2 = VALUE #( col1 = 1 \\n col2 = 2 ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struct, \\n col1 TYPE i VALUE 1, \\n col2 TYPE i VALUE 2, \\n col3 TYPE i VALUE 3, \\n col4 TYPE i VALUE 4, \\n END OF struct, \\n struct1 LIKE struct, \\n struct2 LIKE struct. \\n\\ \\nstruct1 = struct2 = struct. \\n\\ \\nstruct1 = VALUE #( col1 = struct1-col2 \\n col2 = struct1-col1 \\n col4 = 5 \\n col3 = struct1-col4 ). \\n\\ \\nout->write( struct1 ). \\n\\ \\nstruct2 = VALUE #( LET x = struct2 IN \\n col1 = x-col2 \\n col2 = x-col1 \\n col4 = 5 \\n col3 = x-col4 ). \\n\\ \\nout->write( struct2 ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struct, \\n col1 TYPE c LENGTH 2, \\n col2 TYPE c LENGTH 2, \\n col3 TYPE c LENGTH 2, \\n END OF struct. \\n\\ \\nFINAL(base1) = VALUE struct( col1 = 'xx' col2 = 'yy' col3 = 'zz' ). \\nFINAL(struct1) = VALUE #( BASE base1 col2 = 'BB' ). \\n\\ \\nFINAL(base2) = \`xxyyzz\`. \\nFINAL(struct2) = VALUE struct( BASE base2 col2 = 'BB' ). \\n\\ \\nout->write( struct1 ). \\nout->write( struct2 ). \\n\\ \\nout->display( ). DATA: \\n BEGIN OF struct1, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n col4 TYPE i, \\n col5 TYPE i, \\n END OF struct1, \\n BEGIN OF struct2, \\n col1 TYPE i VALUE 1, \\n col2 TYPE i VALUE 2, \\n col3 TYPE i VALUE 3, \\n END OF struct2. \\n\\ \\nstruct1 = VALUE #( BASE CORRESPONDING #( struct2 ) col4 = 4 col5 = 5 ). TYPES: \\n BEGIN OF struc1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struc1. \\n\\ \\nTYPES: \\n BEGIN OF struc2, \\n col3 TYPE i, \\n col4 TYPE i, \\n END OF struc2. \\n\\ \\nTYPES \\n BEGIN OF struct. \\nINCLUDE TYPE struc1 AS name1. \\nINCLUDE TYPE struc2 AS name2. \\nTYPES \\n END OF struct. \\n\\ \\n\\ \\nFINAL(struct1) = VALUE struct( col1 = 1 col2 = 2 \\n col3 = 3 col4 = 4 ). \\n\\ \\nFINAL(struct2) = VALUE struct( name1-col1 = 1 name1-col2 = 2 \\n name2-col3 = 3 name2-col4 = 4 ). \\n\\ \\nFINAL(struct3) = VALUE struct( name1 = VALUE #( col1 = 1 col2 = 2 ) \\n name2 = VALUE #( col3 = 3 col4 = 4 ) ). \\n\\ \\nASSERT struct1 = struct2. \\nASSERT struct2 = struct3. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html