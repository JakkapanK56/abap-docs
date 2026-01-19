---
title: "ABENCORRESPONDING_CONSTR_MAPPING"
description: |
  ABENCORRESPONDING_CONSTR_MAPPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCORRESPONDING_CONSTR_MAPPING.htm"
abapFile: "ABENCORRESPONDING_CONSTR_MAPPING.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "ABENCORRESPONDING", "CONSTR", "MAPPING"]
---

``... [ MAPPING \{t1 = s1 [[`duplicates`](ABENCORRESPONDING_CONSTR_DUPL.html)]\}\ |\                   ( t1 = s1 [[`duplicates`](ABENCORRESPONDING_CONSTR_DUPL.html)]\ [MAPPING ...]\ [EXCEPT ...] ) |\                   \{t1 = [s1] DEFAULT expr\}\                \{t2 = s2 [[`duplicates`](ABENCORRESPONDING_CONSTR_DUPL.html)]\}\ |\                   ( t2 = s2 [[`duplicates`](ABENCORRESPONDING_CONSTR_DUPL.html)]\ [MAPPING ...]\ [EXCEPT ...] ) |\                   \{t2 = [s2] DEFAULT expr\}\                ...  ]\      [ EXCEPT \{ti tj ...\}|* ] ...``

[1. `... MAPPING t1 = s1 [duplicates] t2 = s2 [duplicates] ...`](#ABAP_ADDITION_1@3@)

[2. `... t1 = [s1] DEFAULT expr ...`](#ABAP_ADDITION_2@3@)

[3. `... EXCEPT \{t1 t2 ...\}|*`](#ABAP_ADDITION_3@3@)

Mapping rule for the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html). The optional mapping rule overrides the default assignment of identically named components only. The additions `MAPPING` and `EXCEPT` can be used individually or together. `EXCEPT` must always be specified behind `MAPPING`.

Behind `MAPPING`, the components `s1`, `s2`,... of a source structure or source table are assigned to the components of a target structure or target table `t1`, `t2`, .... in mapping relationships.

If the components specified on the left and right of an equal sign of a mapping relationship are themselves structured or tabular with a structured line type, a separate mapping rule can be nested for them. Here, the mapping relationship is set in parentheses `( ... )` and a further mapping rule `MAPPING ...` and/or `EXCEPT ...` is specified behind the mapping relationship in accordance with the same rules as on the top level. The parentheses are not allowed if a nested mapping rule is not used.

If the components specified to the left and right of an equal sign of a mapping relationship are tabular, the addition [`duplicates`](ABENCORRESPONDING_CONSTR_DUPL.html) can be used to control the behavior used when duplicate lines appear in target tables with unique table keys.

A component of a target object cannot occur more than once in a list behind `MAPPING`. The structure component selector cannot be used to access subcomponents. Components can only be mapped that are on the same nesting level. **Note:** When using the component selector (even though it is not allowed), a syntax warning indicating that the result is undefined or an error will be displayed.

If `MAPPING` is used, the table types involved must also have structured line types in the [basic form](ABENCORRESPONDING_CONSTR_ARG_TYPE.html) and the addition `DEEP` is set implicitly.

The content of the component specified on the right side of an equal sign in a mapping relationship is assigned to each component specified on the left side. If there is an identically named component in the target structure for a component specified on the right side, it is also assigned content, unless it is listed on the left side of a mapping relationship itself. In elementary components, the assignment is made in accordance with the associated [assignment rules](ABENCONVERSION_RULES.html). In structured and tabular components, the assignment is made in accordance with the rules of [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) with the addition `EXPANDING NESTED TABLES`.

Identically named components can also be listed on the right and left side of the equal sign of a mapping relationship. This is a good idea in the following cases:

If the line type of a source table is elementary, the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be specified as a component on the right of an equal sign of a mapping relationship and the entire table line is mapped to the target component. In all other cases, the behavior is undefined when the pseudo component `table_line` is specified.

Assignment of the components of the structure `struct1` to the components of the structure `struct2` using mapping rules for the components at the top level and the components of the substructure.

Specification of the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` as the right side of a mapping rule. The content of the table lines of an internal table of type `itab1` is copied to column `col1` of an internal table of type `itab2`.

The addition `DEFAULT` allows the assignment of values for a target component based on an [expression](ABENEXPRESSION_GLOSRY.html)\\ `expr`. The expression is evaluated before the `CORRESPONDING` expression.

... MAPPING a1 = a2 \\n            b1 = DEFAULT expr1 \\n            c1 = DEFAULT expr2 ...

On the right-hand side of the assignment, `DEFAULT` can be preceded by the source component. In this case, the source component's value is assigned to the left-hand side only if the source component is not initial. If it is initial, the value of the expression `expr` following the `DEFAULT` addition is assigned.

... MAPPING a1 = a2 \\n            b1 = b2 DEFAULT expr1 \\n            c1 = c2 DEFAULT expr2 ...

[`CORRESPONDING` Operator Using the Additions `MAPPING` and `DEFAULT`](ABENCORRESP_MAPPING_DEFAULT_ABEXA.html)

Behind `EXCEPT`, components `t1`, `t2`, ... of the target structure or target table that are not listed in a preceding mapping relationship or an asterisk, `*`, can be specified:

Access to subcomponents of components of the target object using the structure component selector is also not allowed in the list behind `EXCEPT` either.

If components of the target structure are included using [`INCLUDE TYPE|STRUCTURE`](ABAPINCLUDE_TYPE.html) and these components are assigned a name using [`AS`](ABAPINCLUDE_TYPE.html), this name can be specified behind `EXCEPT`. In that case, all the components of the included structure are handled as if they had been specified explicitly in the `EXCEPT` list and are not assigned content.

Effect of the addition `EXCEPT`. In `struct3`, the components `col2` and `col3` remain initial.

-   The system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html) is used for assignments between structures or internal tables with a dynamic mapping rule.
-   It is best to use the component operator for mapping tasks that can be solved using either the component operator or [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html).
-   For the latter, see the [executable example](ABENCORRESPONDING_VS_FOR_ABEXA.html).

-   In the [basic form](ABENCORRESPONDING_CONSTR_ARG_TYPE.html), `t1`, `t2`, ... are components of the target type and `s1`, `s2`, ... are components of the parameter `struct` or `itab`.
-   In the [variant with lookup table](ABENCORRESPONDING_CONSTR_USING.html), `t1`, `t2`, ... are columns of the parameter `itab` and `s1`, `s2`, ... are columns of the parameter `lookup_tab`.

-   If the [variant with lookup table](ABENCORRESPONDING_CONSTR_USING.html) are used, identically named components in a mapping relationship override the rule that the components `s1`, `s2`, ... and `t1`, `t2`, ... used for searches are not assigned by default.
-   Identically named components must be listed in a mapping relationship if a nested mapping rule is to be specified for these components.
-   Identically named tabular components can be listed in a mapping relationship to control the behavior of duplicate lines using [`duplicates`](ABENCORRESPONDING_CONSTR_DUPL.html).

-   [Component Operator, Mapping Rule](ABENCORRESPONDING_MAPPING_ABEXA.html)
-   [Component Operator, Nested Mapping Rule](ABENCORRESPONDING_DEEP_MAPP_ABEXA.html)

-   If explicit components `t1`, `t2`, ... are listed, these components of the result are not assigned content and remain initial.
-   If an asterisk, `*`, is specified, all components of the result remain initial that are not specified explicitly in a preceding mapping relationship.

-   If there are identically named components in the source and target object that are not compatible or convertible, they can be excluded from the assignment using `EXCEPT`. This avoids syntax errors or runtime errors.
-   If `EXCEPT *` is specified without preceding mapping relationships, all components of the result remain initial.

-   [Component Operator, Mapping Rule](ABENCORRESPONDING_MAPPING_ABEXA.html)
-   [Component Operator, Nested Mapping Rule](ABENCORRESPONDING_DEEP_MAPP_ABEXA.html)

DATA: BEGIN OF struct1, \\n mcomp1 TYPE i VALUE 1, \\n mcomp2 TYPE i VALUE 2, \\n BEGIN OF substruc, \\n subcomp1 TYPE i VALUE 1, \\n subcomp2 TYPE i VALUE 2, \\n subcomp3 TYPE i VALUE 3, \\n END OF substruc, \\n END OF struct1. \\n\\ \\nDATA: BEGIN OF struct2, \\n comp2 TYPE i, \\n comp1 TYPE i, \\n BEGIN OF substruc, \\n comp3 TYPE i, \\n comp2 TYPE i, \\n comp1 TYPE i, \\n END OF substruc, \\n END OF struct2. \\n\\ \\nstruct2 = \\n CORRESPONDING #( \\n struct1 MAPPING comp1 = mcomp1 \\n comp2 = mcomp2 \\n ( substruc = substruc MAPPING comp1 = subcomp1 \\n comp2 = subcomp2 \\n comp3 = subcomp3 ) ). TYPES: \\n itab1 TYPE STANDARD TABLE OF i WITH EMPTY KEY, \\n BEGIN OF struct, \\n col1 TYPE i, \\n col2 TYPE string, \\n END OF struct, \\n itab2 TYPE STANDARD TABLE OF struct WITH EMPTY KEY. \\n\\ \\ncl\_demo\_output=>display( \\n CORRESPONDING itab2( VALUE itab1( ( 1 ) ( 2 ) ( 3 ) ) \\n MAPPING col1 = table\_line ) ). DATA: \\n BEGIN OF struct1, \\n col1 TYPE string VALUE \`COL1\`, \\n col2 TYPE string VALUE \`COL2\`, \\n col3 TYPE string VALUE \`COL3\`, \\n col4 TYPE string VALUE \`COL4\`, \\n END OF struct1, \\n BEGIN OF struct2, \\n col4 TYPE string, \\n col3 TYPE string, \\n col2 TYPE string, \\n col1 TYPE string, \\n END OF struct2, \\n struct3 LIKE struct2. \\n\\ \\n struct2 = CORRESPONDING #( struct1 ). \\n struct3 = CORRESPONDING #( struct1 EXCEPT col2 col3 ) \\n ##OPERATOR\[STRUCT1\]. \\n\\ \\n cl\_demo\_output=>new( \\n )->write( struct1 \\n )->write( struct2 \\n )->display( struct3 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abenconstructor\_expr\_corresponding.html