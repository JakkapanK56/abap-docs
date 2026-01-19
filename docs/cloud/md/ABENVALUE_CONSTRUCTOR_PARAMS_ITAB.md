---
title: "ABENVALUE_CONSTRUCTOR_PARAMS_ITAB"
description: |
  ABENVALUE_CONSTRUCTOR_PARAMS_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.htm"
abapFile: "ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html"
keywords: ["insert", "delete", "loop", "do", "if", "case", "class", "data", "types", "internal-table", "field-symbol", "ABENVALUE", "CONSTRUCTOR", "PARAMS", "ITAB"]
---

``... VALUE dtype|#( [[`let_exp`](ABAPLET.html)]\                     [BASE itab]\                     [[`FOR for_exp1`](ABENFOR.html)\                      [`FOR for_exp2`](ABENFOR.html)\                      ... ]\                     ( [`line_spec1`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html) )                     ( [`line_spec2`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html) )                       ... ) ...``

[1. `... BASE itab`](#ABAP_ADDITION_1@3@)

[2. `... FOR for_exp`](#ABAP_ADDITION_2@3@)

If `dtype` is a tabular data type or `#` stands for such a type, the table lines of the constructed table are created as follows:

The constructed lines must meet the requirements of the statement [`INSERT`](ABAPINSERT_ITAB.html) for inserting work areas using table keys and therefore be compatible with the line type, with one exception: when constructing a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) where the lines are only appended anyway, the value can be shorter than the line length for line types `c` and `x` and then padded on the right with blanks or hexadecimal 0.

If the `VALUE` operator is used as the source of an assignment to an internal table, it is first initialized after the evaluation of a possible [`LET`](ABAPLET.html) expression or is assigned the content of `itab`. Then, [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html) data is then evaluated and inserted directly into the target table.

Construction of an internal table with a structured line type and filling it with two lines. The structures are filled with values component by component.

Construction of an internal table with a tabular line type and filling it with two lines. The first line is assigned a table that is already filled. The second line is constructed using `VALUE`.

An addition, `BASE`, followed by an internal table, `itab`, can be specified in front of the specification of lines to be inserted. `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The line type of `itab` must be convertible to the line type of the return value. If `BASE` is specified, the content of `itab` is assigned to the return value before the individual lines are inserted. If the character `#` is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of `itab` is used for this expression if it is known.

Use of `BASE`. The table type of `base1` or `base2` is transferred in the construction of `tab1` and `tab2`. This is not possible in the construction of `tab3` since the line type of `base2` is not structured and hence does not match the specification of individual components in the following parentheses. The type `itab2` is specified explicitly for `tab3`. This is possible since the line type of `base2` can be converted into this line type. Since sorted tables are constructed, the lines in the results are also sorted.

Use of `BASE` to append lines to existing lines in an internal table.

Use of `BASE` to append lines to an internal table in a loop. After the output, it is shown how the same function can be applied using an iteration expression with [`FOR`](ABENFOR_CONDITIONAL.html).

[`VALUE` - Addition `BASE` for Internal Tables](ABENVALUE_ITAB_BASE_ABEXA.html)

The specification of one or more consecutive [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html) using [`FOR`](ABENFOR.html), this means that the lines constructed in [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html) for each iteration of the last `FOR` expression are inserted into the target table. When constructing table lines in [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html), the visible local work areas and field symbols of the iteration expressions can be used to construct the table lines.

Construction of a temporary internal table with an elementary line type and filling it with square numbers using an iteration expression.

-   The first option is to list a `LET` expression [`let_exp`](ABAPLET.html) to define local helper fields whose values can be used to construct the table lines.
-   An optional start value for the content can then be specified for the content of the internal table after `BASE` (see below).
-   One or more optional consecutive [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html) can then be specified using [`FOR`](ABENFOR.html) (see below).
-   The table lines are then constructed in one or more sets of internal parentheses by specifying [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html). Each set of inner parentheses constructs one or more lines in accordance with the information in `line_spec` and inserts them into the created internal table in accordance with the rules for the statement `[INSERT](ABAPINSERT_ITAB.html) ... [INTO TABLE](ABAPINSERT_ITAB_POSITION.html)`, with one difference: Any conflicts with an existing unique primary table key raise an exception of the class `CX_SY_ITAB_DUPLICATE_KEY`. The object is inserted in the order of the parentheses.

-   In assignments of constructor expressions to an internal table, its existing lines cannot be used directly as an operand in [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html). This is because this table is deleted before `line_spec` is evaluated or overwritten by the content of `itab`. If the entire internal table or lines from the left side are needed on the right side, however, they can be saved in local helper variables using a [`LET`](ABAPLET.html) expression, since this expression is evaluated first.
-   The operand type for [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html) in the inner parentheses is the line type of the table type specified using `dtype` or `#`, which means it is always uniquely identifiable. Constructor expressions at this position can therefore always derive the required data type using `#`.

-   [`VALUE` - Operator for Internal Tables](ABENVALUE_ITAB_ABEXA.html)
-   [`VALUE` Operator with `LET` for Internal Tables](ABENVALUE_ITAB_LET_ABEXA.html)

-   Without the addition `BASE`, the content of tables can only be newly constructed using the value operator, but not extended. If the same table is specified after `BASE` to which the constructor expression is assigned, further lines can be inserted in this table.
-   If the target table is specified as `itab` after `BASE` in an assignment to an existing internal table, there is no assignment before [`line_spec`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html) is evaluated, but the target table simply keeps its value instead.

-   If [conditional iterations](ABENFOR_CONDITIONAL.html) are used, the new table lines are created in freely definable iteration steps.
-   If [table iterations](ABENFOR_ITAB.html) are used, the lines of existing internal tables are evaluated. In this case, these are known as [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html), since new table lines are constructed from the lines of existing internal tables.

-   The term *table comprehension* is derived from similar concepts used in many other languages, where it is also referred to as *list comprehension*.
-   Conditional iterations and table comprehensions are also possible with [`FOR` expressions](ABENMESH_FOR.html) for [mesh paths](ABENMESH_PATH_GLOSRY.html).

-   For tasks that can be solved using both table comprehensions and [special assignments](ABENCORRESPONDING.html) for components, in particular the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html), it is best to use assignments (see the [executable example](ABENCORRESPONDING_VS_FOR_ABEXA.html)).
-   If the `VALUE` operator is used, it should be noted that assignments to internal tables are also initialized or assigned the content of `itab` after `BASE` even in the case of table comprehensions after the evaluation of a [`LET`](ABAPLET.html) expressions and the target table is then used directly. The original table can therefore not be used directly in the `FOR` expressions, unless it is assigned to a helper variable after `LET`.

-   [Examples of Table Comprehensions](ABENTABLE_COMPREHENSIONS_ABEXAS.html)

TYPES: BEGIN OF t\_struct, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF t\_struct, \\n t\_itab TYPE TABLE OF t\_struct WITH EMPTY KEY. \\n\\ \\nDATA itab TYPE t\_itab. \\n\\ \\nitab = VALUE #( ( col1 = 1 col2 = 2 ) \\n ( col1 = 3 col2 = 4 ) ). TYPES: t\_itab1 TYPE TABLE OF i WITH EMPTY KEY, \\n t\_itab2 TYPE TABLE OF t\_itab1 WITH EMPTY KEY. \\n\\ \\nDATA itab1 TYPE t\_itab1. \\nDATA itab2 TYPE t\_itab2. \\n\\ \\nitab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\nitab2 = VALUE #( ( itab1 ) \\n ( VALUE t\_itab1( ( 4 ) ( 5 ) ( 6 ) ) ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n itab1 TYPE SORTED TABLE OF string WITH UNIQUE KEY table\_line, \\n BEGIN OF struct, \\n col1 TYPE c LENGTH 2, \\n col2 TYPE c LENGTH 2, \\n col3 TYPE c LENGTH 2, \\n END OF struct, \\n itab2 TYPE SORTED TABLE OF struct WITH UNIQUE KEY col1 col2 col3. \\n\\ \\nFINAL(base1) = VALUE itab1( \\n ( \`x1y1z1\` ) \\n ( \`x2y2z2\` ) \\n ( \`x3y3z3\` ) ). \\nFINAL(base2) = VALUE itab2( \\n ( col1 = 'x1' col2 = 'y1' col3 = 'z1' ) \\n ( col1 = 'x2' col2 = 'y2' col3 = 'z2' ) \\n ( col1 = 'x3' col2 = 'y3' col3 = 'z3' ) ). \\n\\ \\nFINAL(tab1) = VALUE #( BASE base1 \\n ( \`A1B1B1\` ) \\n ( \`A2B2B2\` ) ). \\n\\ \\nFINAL(tab2) = VALUE #( \\n BASE base2 \\n ( col1 = 'A1' col2 = 'B1' col3 = 'C1' ) \\n ( col1 = 'A2' col2 = 'B2' col3 = 'C2' ) ). \\n\\ \\nFINAL(tab3) = VALUE itab2( BASE base1 \\n ( col1 = 'A1' col2 = 'B1' col3 = 'C1' ) \\n ( col1 = 'A2' col2 = 'B2' col3 = 'C2' ) ). \\n\\ \\nout->write( tab1 ). \\nout->write( tab2 ). \\nout->write( tab3 ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES itab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nDATA(itab) = \\n VALUE itab( \\n ( \`a\` ) ( \`b\` ) ( \`c\` ) ). \\n\\ \\n... \\n\\ \\nitab = \\n VALUE #( \\n BASE itab \\n ( \`d\` ) ( \`e\` ) ( \`f\` ) ). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nDO 10 TIMES. \\n itab = VALUE #( BASE itab ( ipow( base = sy-index exp = 2 ) ) ). \\nENDDO. \\n\\ \\nout->write( itab ). \\n\\ \\nDATA jtab LIKE itab. \\njtab = VALUE #( FOR j = 1 UNTIL j > 10 \\n ( ipow( base = j exp = 2 ) ) ). \\nASSERT jtab = itab. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nout->write( \\n VALUE t\_itab( FOR i = 1 UNTIL i > 10 \\n ( ipow( base = i exp = 2 ) ) ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html