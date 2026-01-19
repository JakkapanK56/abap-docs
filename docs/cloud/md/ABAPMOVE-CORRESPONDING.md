---
title: "Variant for Structures"
description: |
  Variant for Internal Tables -   Both operands are structures(ABENSTRUCTURE_GLOSRY.html). -   Both operands are internal tables(ABENINTERNAL_TABLE_GLOSRY.html). -   If mapping based on identical names is not sufficient for the statement `MOVE-CORRESPONDING`, the component operator `CORRESPONDING
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMOVE-CORRESPONDING.htm"
abapFile: "ABAPMOVE-CORRESPONDING.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "field-symbol", "ABAPMOVE", "CORRESPONDING"]
---

1\. `MOVE-CORRESPONDING [EXACT] struc1 TO struc2 [EXPANDING NESTED TABLES]\ [KEEPING TARGET LINES].`

2\. `MOVE-CORRESPONDING [EXACT] itab1 TO itab2 [EXPANDING NESTED TABLES]\ [KEEPING TARGET LINES].`

[1. `MOVE-CORRESPONDING struc1 TO struc2.`](#ABAP_VARIANT_1@1@)

[2. `MOVE-CORRESPONDING itab1 TO itab2.`](#ABAP_VARIANT_2@1@)

[1. `... EXACT`](#ABAP_ADDITION_1@3@)

[2. `... EXPANDING NESTED TABLES`](#ABAP_ADDITION_2@3@)

[3. `... KEEPING TARGET LINES`](#ABAP_ADDITION_3@3@)

The statement `MOVE-CORRESPONDING` is used to assign identically named components of structured data objects to each other. There are two variants of the statements:

No other combinations of operand types are possible. Field symbols typed with the generic type `ANY` or formal parameters can also be used as operands. An operand of this type must be either a structure or an internal table when the statement is executed and match the other operands, otherwise an uncatchable exception is raised. `struc1` and `itab1` are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

This variant of the statement `MOVE-CORRESPONDING` requires [structures](ABENSTRUCTURE_GLOSRY.html) to be specified for `struc1` and `struc2`. As operands of the statement `MOVE-CORRESPONDING`, [meshes](ABENMESH_GLOSRY.html) are handled like regular structures and can also be specified.

The system searches for all identically named components in `struc1` and `struc2` and the content of components in `struc1` is assigned to the identically named components in `struc2`. Other components are not affected. If field symbols are used as operands, the names of the components are evaluated in accordance with the data type of the field symbols, which can be distinguished by [casting](ABENCAST_CASTING_GLOSRY.html) the names of the actual structures.

Nested structures are fully resolved. The names of the components are compared down to the lowest common level. If the addition `EXPANDING NESTED TABLES` is not specified, the following statement is executed identically for each named component pair `comp`:

[`struc2-comp = struc1-comp.`](ABAPMOVE.html)

Any associated conversions are performed, and the corresponding exceptions may be raised. In particular, if the components are table-like, the entire table body is assigned in accordance with the [conversion rules for internal tables](ABENCONVERSION_ITAB.html).

If `struc1` or `struc2` are empty [customizing includes](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) when the statement is executed (that is they do not contain any components), the statement is ignored. If `struc1` is a structure that contains empty customizing includes as components, these are also ignored when the structure is evaluated.

This example shows how `MOVE-CORRESPONDING` is applied to two structures with the same type `t_str` and which are cast using field symbols with different types. The statement evaluates the names of the types of the field symbols, whereby the content of components that actually have different names are assigned.

This variant of the statement `MOVE-CORRESPONDING` requires [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) to be specified for `itab1` and `itab2`. It searches for all identically named components in the line types of `itab1` and `itab2` and assigns them from `itab1` to `itab2` in accordance with the rules below.

If there are identically named components, the target table `itab2` is deleted without the addition `KEEPING TARGET LINES` and the same number of initial lines are inserted as exist in the source table `itab1`. The lines of the source table are then read sequentially in the same order as in the statement [`LOOP`](ABAPLOOP_AT_ITAB.html), and the content of each line is assigned to the corresponding line in the target table in accordance with the rules for using `EXACT` with structures. Finally, and if necessary, the [table keys](ABENITAB_KEY.html) and associated [table indexes](ABENTABLE_INDEX_GLOSRY.html) are updated in the target table in accordance with the rules for [insertions in internal tables](ABAPINSERT_ITAB.html). The corresponding exceptions are raised if uniqueness is violated.

If there are no identically named components, no assignment is made and the target table remains unchanged.

Assignment of four identically named components of standard table `spfli_tab` to a sorted table `flights`.

**Variant for Structures**

If the addition `EXACT` is specified for `MOVE-CORRESPONDING`, the following [lossless assignment](ABENLOSSLESS_MOVE.html) is performed for each identically named component pair `comp`

`struc2-comp = [EXACT](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) #( struc1-comp ).`

and the corresponding checks are performed. If an exception is raised, all components are assigned up to the component that raised the exception. This component, and all following components, are not assigned.

**Variant for Internal Tables**

If the source table contains valid values in all components of the internal table line and no values are lost, the conversion is performed in accordance with the associated conversion rules. This check is performed line-wise beginning with the first line of the internal table. If at least one component of the line causes a conversion error, the whole line is not assigned and none of the following lines either. In that case, initial lines are added to the target table.

The following example demonstrates assignments with `MOVE-CORRESPONDING EXACT` and internal tables. One of the internal tables that is filled for demonstration purposes before the assignment purposely includes a component value (component `b` has a value including three characters which is not compatible with `... b TYPE c LENGTH 2 ...`) for which a lossless assignment fails. The output shows that up to this line, the assignment works. For the table line for which the assignment error happens and all of the following lines, no assignments are made. There are only initial lines added to the target table.

**Variant for Structures**

With this addition, two identically named components, that are both internal tables, are not simply assigned. Instead, for these components, the statement `MOVE-CORRESPONDING [EXACT]` for internal tables with the addition `EXPANDING NESTED TABLES` and without the addition `KEEPING TARGET LINES` is executed.

Tabular components are resolved at every hierarchy level and identically named components are assigned line by line. The target tables are deleted before an assignment.

If one of two identically named components is an internal table and the other is not, `MOVE-CORRESPONDING` is never possible, regardless of whether `EXPANDING NESTED TABLES` is used.

In the following example, the structure `struc1` contains the components:

The structure `struc2` contains the components:

Over the length of the shorter path, the components `struci-comp1`, `struci-comp2`, and `itab` have the same name. These are assigned from `struc1` to `struc2` in both `MOVE-CORRESPONDING` statements. In `struc1`, `struci-comp2` is self-structured; in `struc2`, `struci-comp2` is elementary. When `struc1-struci-comp2` is assigned to `struc2-struci-comp2`, the source field is interpreted as an elementary field of type `c` in accordance with the conversion rules for structures.

The components `itab` are table-like and have compatible line types. The statement `MOVE-CORRESPONDING` without the addition `EXPANDING NESTED TABLE` is used to assign the table body and the content of `itab` in `struc2` then matches the content of `itab` in `struc1`. If the addition `EXPANDING NESTED TABLE` is used, only the component `col2` is assigned and `col3` remains initial.

The components `struc1-comp1` and `struc2-struci-comp3` do not have any equivalents with the same name and are ignored in the assignment.

**Variant for Internal Tables**

If this addition is specified, the individual lines are assigned in accordance with the rules for `MOVE-CORRESPONDING [EXACT]` with `EXPANDING NESTED TABLES` specified, and tabular components are resolved at every hierarchy level.

If the addition is not specified, the individual lines are assigned in accordance with the rules for `MOVE-CORRESPONDING [EXACT]` without `EXPANDING NESTED TABLES` specified, and tabular components are assigned in accordance with the [rules](ABENCONVERSION_ITAB.html) for [assignments](ABAPMOVE.html) or [lossless assignments](ABAPMOVE_EXACT.html).

**Variant for Structures**

This addition affects two identically named components that are both internal tables. It ensures that the nested target tables in `struc2` are not deleted. Furthermore, it appends the lines of the nested source tables in `struc1` by executing the statement `MOVE-CORRESPONDING [EXACT]` for internal tables without an addition.

**Variant for Internal Tables**

This addition ensures that the target table `itab2` is not deleted. Instead, it appends the same number of initial lines as exist in the source table `itab1` and assigns the lines of the source table to these initial lines. The table keys and indexes are then updated across all lines. If no identically named components are found, the target table remains unchanged.

The addition `KEEPING TARGET LINES` is only effective on the lines of `itab2`. It cannot be effective on nested tables, even if it is specified with the addition `EXPANDING NESTED TABLES`. This is because nested tables are always resolved in new initial lines.

Variant for Structures

Variant for Internal Tables

-   Both operands are [structures](ABENSTRUCTURE_GLOSRY.html).
-   Both operands are [internal tables](ABENINTERNAL_TABLE_GLOSRY.html).

-   If mapping based on identical names is not sufficient for the statement `MOVE-CORRESPONDING`, the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) can be used, which makes it possible to define separate mapping rules statically.
-   If dynamic mapping rules are needed, the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html) can be used.
-   If an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html) is specified for one of the operands, the header line is used as an operand in accordance with its data type and not the table body.
-   For assignments of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html), use the `CORRESPONDING` operator and the RAP-related additions described [here](ABAPEML_CORRESPONDING.html).

-   If structures are specified for `struc1` and `struc2` that are known statically, the names are compared once when the program is generated by the ABAP Compiler. If untyped field symbols or formal parameters are used, the associated names comparison must be performed each time the statement is executed.
-   The compiler optimizes the `MOVE-CORRESPONDING` statement for structures so that sequences of components that have the same names in both structures are grouped and copied together. It is therefore recommended that the involved structures are constructed in the same way if possible.
-   `MOVE-CORRESPONDING` for structures ignores names that were only defined with the `AS name` addition of the [`INCLUDE`](ABAPINCLUDE_TYPE.html) statement or when structures were included in the ABAP Dictionary. Any components renamed using the addition `RENAMING WITH SUFFIX` of the statement `INCLUDE` or renamed similarly in the ABAP Dictionary are, however, not ignored.
-   Field symbols that point to structures can have different names for the components than the structure itself, as specified by the [`CASTING`](ABAPASSIGN_CASTING.html) addition of the statement [`ASSIGN`](ABAPASSIGN.html). The statement `MOVE-CORRESPONDING` evaluates the names of the data type of the current operand. This means that components in the same structure can also be assigned to each other. Note that the order of processing and therefore the result in a component that is used both as a source and as a target is usually undefined. No temporary interim result is created, and it is not possible to exchange the content of two components of the same structure in a single statement.

-   If the line type is structured, the components are the structure components.
-   A non-structured line type is handled like a structure with a single component. The type of the component is the line type of the internal table, that is, elementary, a table itself, or a reference variable. The component has an internal name that is the same for all tables.

-   `MOVE-CORRESPONDING` is always ignored when an internal table with a non-structured line type is assigned to an internal table with a structured line type and vice versa.
-   Without additions, `MOVE-CORRESPONDING` has the same effect on the assignment of an internal table with non-structured line type to a similar table as a regular [assignment](ABAPMOVE.html).
-   If an internal table `itab` is assigned to itself using `MOVE-CORRESPONDING`, the statement is ignored. This also means that the lines are not deleted first and then filled again.
-   The convertibility of the components, if it is known, is checked statically. If the convertibility cannot be determined statically, a runtime error is only raised if an assignment is actually performed.

-   `struc1-comp1`
-   `struc1-struci-comp1`
-   `struc1-struci-comp2-col1`
-   `struc1-struci-comp2-col2`
-   `struc1-itab`

-   `struc2-struci-comp1`
-   `struc2-struci-comp2`
-   `struc2-struci-comp3`
-   `struc2-itab`

-   The entire table bodies of the nested source tables are assigned in accordance with the [conversion rules for internal tables](ABENCONVERSION_ITAB.html).
-   The use of `... EXPANDING NESTED TABLES KEEPING TARGET LINES` with structures affects two identically named components that are both internal tables. It ensures that the nested target tables in `struc2` are not deleted. Furthermore, it appends the lines of the nested source tables in `struc1` by executing the statement `MOVE-CORRESPONDING [EXACT] EXPANDING NESTED TABLES` for internal tables without an addition.

-   [`MOVE-CORRESPONDING` for Structures](ABENMOVE_CORRESPONDING_STRUC_ABEXA.html)
-   [Variants of `MOVE-CORRESPONDING` and the `CORRESPONDING` operator using deep structures](ABENCORRESPONDING_VARIANTS_S_ABEXA.html)
-   [`MOVE-CORRESPONDING` for Internal Tables](ABENMOVE_CORRESPONDING_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: BEGIN OF t\_str, \\n a1 TYPE i, \\n a2 TYPE i, \\n END OF t\_str. \\n\\ \\nTYPES: BEGIN OF t\_str1, \\n b1 TYPE i, \\n b2 TYPE i, \\n END OF t\_str1. \\n\\ \\nTYPES: BEGIN OF t\_str2, \\n b2 TYPE i, \\n b1 TYPE i, \\n END OF t\_str2. \\n\\ \\nFINAL(str1) = VALUE t\_str( a1 = 1 a2 = 2 ). \\nDATA str2 LIKE str1. \\n\\ \\nFIELD-SYMBOLS TYPE t\_str1. \\nASSIGN str1 TO CASTING. \\n\\ \\nFIELD-SYMBOLS TYPE t\_str2. \\nASSIGN str2 TO CASTING. \\n\\ \\nMOVE-CORRESPONDING TO . \\n\\ \\nout->write( str1 \\n )->write( str2 ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF flight, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF flight. \\nDATA \\n flights TYPE SORTED TABLE OF flight WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(spfli\_tab). \\n\\ \\nMOVE-CORRESPONDING spfli\_tab TO flights. \\n\\ \\nout->write( flights ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struc1, \\n a TYPE c LENGTH 3, \\n b TYPE c LENGTH 3, \\n c TYPE i, \\n END OF struc1, \\n\\ \\n BEGIN OF struc2, \\n a TYPE c LENGTH 2, \\n b TYPE c LENGTH 2, \\n c TYPE i, \\n END OF struc2, \\n\\ \\n BEGIN OF struc3, \\n a TYPE c LENGTH 3, \\n b TYPE c LENGTH 3, \\n c TYPE i, \\n END OF struc3. \\n\\ \\nDATA itab1 TYPE TABLE OF struc1 WITH EMPTY KEY. \\nDATA itab2 TYPE TABLE OF struc2 WITH EMPTY KEY. \\nDATA itab3 TYPE TABLE OF struc3 WITH EMPTY KEY. \\n\\ \\nitab1 = VALUE #( ( a = \`aa\` b = \`bb\` c = 123 ) \\n ( a = \`cc\` b = \`ddd\` c = 456 ) \\n ( a = \`ee\` b = \`ff\` c = 789 ) ). \\n\\ \\nTRY. \\n MOVE-CORRESPONDING EXACT itab1 TO itab2. \\n CATCH cx\_sy\_conversion\_data\_loss INTO DATA(error). \\nENDTRY. \\n\\ \\nIF error IS NOT INITIAL. \\n out->write( error->get\_text( ) ). \\nENDIF. \\n\\ \\nout->write( itab2 ). \\n\\ \\nTRY. \\n MOVE-CORRESPONDING EXACT itab1 TO itab3. \\n CATCH cx\_sy\_conversion\_data\_loss INTO DATA(error2). \\nENDTRY. \\n\\ \\nIF error2 IS NOT INITIAL. \\n out->write( error2->get\_text( ) ). \\nENDIF. \\n\\ \\nout->write( itab3 ). \\n\\ \\n\\ \\nout->display( ). TYPES: BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line1, \\n BEGIN OF line2, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2. \\n\\ \\nDATA: BEGIN OF struc1, \\n comp1 TYPE c LENGTH 1 VALUE 'U', \\n BEGIN OF struci, \\n comp1 TYPE c LENGTH 1 VALUE 'V', \\n BEGIN OF comp2, \\n col1 TYPE c LENGTH 1 VALUE 'X', \\n col2 TYPE c LENGTH 1 VALUE 'Y', \\n END OF comp2, \\n END OF struci, \\n itab TYPE TABLE OF line1 WITH EMPTY KEY, \\n END OF struc1. \\n\\ \\nDATA: BEGIN OF struc2, \\n BEGIN OF struci, \\n comp1 TYPE string, \\n comp2 TYPE string, \\n comp3 TYPE string, \\n END OF struci, \\n itab TYPE TABLE OF line2 WITH EMPTY KEY, \\n END OF struc2. \\n\\ \\nstruc1-itab = VALUE #( \\n ( col1 = 11 col2 = 12 ) \\n ( col1 = 21 col2 = 22 ) ). \\n\\ \\nMOVE-CORRESPONDING struc1 TO struc2. \\nMOVE-CORRESPONDING struc1 TO struc2 EXPANDING NESTED TABLES. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html