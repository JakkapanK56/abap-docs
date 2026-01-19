---
title: "ABENNEW_CONSTRUCTOR_PARAMS_ITAB"
description: |
  ABENNEW_CONSTRUCTOR_PARAMS_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEW_CONSTRUCTOR_PARAMS_ITAB.htm"
abapFile: "ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html"
keywords: ["insert", "if", "case", "data", "types", "internal-table", "field-symbol", "ABENNEW", "CONSTRUCTOR", "PARAMS", "ITAB"]
---

``... NEW dtype|#( [[`let_exp`](ABAPLET.html)]\                   [BASE itab]\                   [[`FOR for_exp1`](ABENFOR.html)\                    [`FOR for_exp2`](ABENFOR.html)\                    ... ]\                   ( [`line_spec1`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) )                   ( [`line_spec2`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) )                     ... ) ...``

[1. `... BASE itab`](#ABAP_ADDITION_1@3@)

[2. `... FOR for_exp`](#ABAP_ADDITION_2@3@)

If `dtype` is a tabular data type or `#` stands for such a type, the table lines of the constructed table are created as follows:

The constructed lines must meet the requirements of the statement [`INSERT`](ABAPINSERT_ITAB.html) for inserting work areas using table keys and therefore be compatible with the line type, with one exception: when constructing a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) where the lines are only appended anyway, the value can be shorter than the line length for line types `c` and `x` and then padded on the right with blanks or hexadecimal 0.

Construction of an anonymous internal table with a structured line type with substructures and tabular components.

An addition, `BASE`, followed by an internal table, `itab`, can be specified in front of the specification of lines to be inserted. `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The line type of `itab` must be convertible to the line type of the return value. If `BASE` is specified, the content of `itab` is assigned to the return value before the individual lines are inserted. If the character `#` is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of `itab` is used for this expression if it is known.

Construction of three anonymous internal tables with an elementary line type. The first table is filled with three lines, whereby the second inserted line is initial. The second and third tables are filled with the lines of the first table and three further lines. Using `BASE` and [`LINES OF`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) has the same effect here.

If one or more [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html) are specified consecutively using [`FOR`](ABENFOR.html), the lines constructed in [`line_spec`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) for each iteration of the last `FOR` expression are inserted into the target table. When constructing table lines in [`line_spec`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html), the visible local work areas and field symbols of the iteration expressions can be used to construct table lines.

Construction of an anonymous internal table with an elementary line type and filling it with square numbers using an iteration expression.

[Examples of Table Comprehensions](ABENTABLE_COMPREHENSIONS_ABEXAS.html)

-   The first option is to list a `LET` expression [`let_exp`](ABAPLET.html) to define local helper fields whose values can be used to construct the table lines.
-   An optional start value for the content can then be specified for the content of the internal table after `BASE` (see below).
-   One or more optional consecutive [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html) can then be specified using [`FOR`](ABENFOR.html) (see below).
-   The table lines are then constructed in one or more sets of internal parentheses by specifying [`line_spec`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html). Each set of inner parentheses constructs one or more lines in accordance with the information in `line_spec` and inserts them into the new internal table according to the rules for the statement `[INSERT](ABAPINSERT_ITAB.html) ... [INTO TABLE](ABAPINSERT_ITAB_POSITION.html)`. The object is inserted in the order of the parentheses.

-   When a constructor expression is assigned to a reference variable using `NEW`, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html), however, the target variable can only be assigned to a helper variable using `LET` and is then no longer available.
-   The operand type for [`line_spec`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html) in the inner parentheses is the line type of the table type specified using `dtype` or `#` and is always uniquely identifiable. Constructor expressions at this position can therefore always derive the required data type using `#`.

-   If [conditional iterations](ABENFOR_CONDITIONAL.html) are used, the new table lines are created in freely definable iteration steps.
-   If [table iterations](ABENFOR_ITAB.html) are used, the lines of existing internal tables are evaluated. In this case, these are known as [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html), since new table lines are constructed from the lines of existing internal tables.

-   The term *table comprehension* is derived from similar concepts used in many other languages, where it is also referred to as *list comprehension*.
-   Conditional iterations and table comprehensions are also possible with [`FOR` expressions](ABENMESH_FOR.html) for [mesh paths](ABENMESH_PATH_GLOSRY.html).

TYPES: BEGIN OF t\_struct1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF t\_struct1, \\n BEGIN OF t\_struct2, \\n col1 TYPE i, \\n col2 TYPE t\_struct1, \\n col3 TYPE TABLE OF t\_struct1 WITH EMPTY KEY, \\n END OF t\_struct2, \\n t\_itab TYPE TABLE OF t\_struct2 WITH EMPTY KEY. \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\ndref = NEW t\_itab( ( col1 = 1 \\n col2-col1 = 1 \\n col2-col2 = 2 \\n col3 = VALUE #( ( col1 = 1 col2 = 2 ) \\n ( col1 = 3 col2 = 4 ) ) ) \\n ( col1 = 2 \\n col2-col1 = 2 \\n col2-col2 = 4 \\n col3 = VALUE #( ( col1 = 2 col2 = 4 ) \\n ( col1 = 6 col2 = 8 ) ) ) ). TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(dref1) = NEW t\_itab( ( 1 ) ( ) ( 3 ) ). \\n\\ \\nFINAL(dref2) = NEW t\_itab( BASE dref1->\* \\n ( ) ( 5 ) ( ) ). \\n\\ \\nFINAL(dref3) = NEW t\_itab( ( LINES OF dref1->\* ) \\n ( ) ( 5 ) ( ) ). \\n\\ \\ncl\_demo\_output=>write( dref1->\* ). \\ncl\_demo\_output=>write( dref2->\* ). \\ncl\_demo\_output=>display( dref3->\* ). TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(dref) = NEW t\_itab( FOR i = 1 UNTIL i > 10 \\n ( ipow( base = i exp = 2 ) ) ). \\n\\ \\ncl\_demo\_output=>display( dref->\* ). abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html