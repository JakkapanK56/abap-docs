---
title: "ABENTABLE_EXPRESSIONS"
description: |
  ABENTABLE_EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXPRESSIONS.htm"
abapFile: "ABENTABLE_EXPRESSIONS.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "field-symbol", "ABENTABLE", "EXPRESSIONS"]
---

``... itab[ [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) ][`[-comp|[ ... ]|->comp]`](ABENTABLE_EXP_CHAINING.html) ...``

A table expression consists of an internal table `itab` directly followed by a line specification [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) in square brackets `[ ]`. A chaining [`-comp|[ ... ]|->comp`](ABENTABLE_EXP_CHAINING.html) can be appended to this line. The expression searches for the specified line in the internal table.

The result of a table expression can be used as follows:

The internal table `itab` must be specified directly using its name, a field symbol, or a dereferenced data reference as described under [Read Positions](ABENDATA_OBJECTS_USAGE_READING.html). In a table with [header line](ABENHEADER_LINE_GLOSRY.html), the table body is addressed and not the header line.

If the specified line is not found, a catchable exception of the class `CX_SY_ITAB_LINE_NOT_FOUND` is raised in all operand positions, except when

The content of the component `carrid` of the line of the internal table `carrier_tab` is passed to the method `get_spfli`. In this table, the component `carrname` of the [secondary key](ABENSECONDARY_KEY_GLOSRY.html)\\ `name` has a specific value.

The first calculation with table lines is a bad example of how to use table expressions. The same selection is made three times in the same statement. The second calculation shows how this can be avoided by using an [assignment to a field symbol](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html).

The program `DEMO_TABLE_EXPRESSIONS` shows further examples of how to use table expressions.

`CX_SY_ITAB_LINE_NOT_FOUND`

-   If no chaining is specified, the entire line is returned as the result of the corresponding line type.
-   If a [chaining](ABENTABLE_EXP_CHAINING.html) is specified, the following is possible:

-   The structure component selector `-` can be used to access the component `comp` in the read line.
-   Square brackets `[ ... ]` can be used to chain multiple table expressions.
-   The object component selector `->` can be used to access a component `comp` of the object referenced by the preceding expression.

-   Read positions

-   A table expression can be specified in [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html) and [functional operand positions](ABENFUNCTIONAL_POSITIONS.html) with a suitable [operand type](ABENOPERAND_TYPE_GLOSRY.html). The result is used here as an operand. The [type of the result](ABENTABLE_EXP_RESULT.html) cannot be controlled in these operand positions using [constructor operators](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html). A [default value](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) can be specified for lines that are not found.
-   A table expression can be specified as a special [expression variant](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) for the memory area in the statement [`ASSIGN`](ABAPASSIGN.html).
-   A table expression can be specified as an argument of the built-in function [`line_index`](ABENLINE_INDEX_FUNCTION.html) and the [predicate function](ABENPREDICATE_FUNCTION_GLOSRY.html)\\ [`line_exists`](ABENLINE_EXISTS_FUNCTION.html).

-   Write positions

-   A table expression can be specified as a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) in [result positions](ABENRESULT_POSITION_GLOSRY.html). The line found can be modified directly here.

-   a [default value](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) is specified in the definition of the [type of the result](ABENTABLE_EXP_RESULT.html),
-   a table expression is used in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), where `sy-subrc` is set to the value 4,
-   used in the predicate function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html), where the truth value *false* is returned,
-   used in the built-in function [`line_index`](ABENLINE_INDEX_FUNCTION.html), where the value *0* is returned.

-   In table expressions, the empty square brackets `[]` cannot be specified after `itab`. In other operand positions, these empty brackets distinguish the table body from [header lines](ABENHEADER_LINE_GLOSRY.html).
-   Functions and constructor expressions cannot currently be specified for `itab`, but the table expressions shown under [Chainings](ABENTABLE_EXP_CHAINING.html) are possible.
-   A table expression cannot be followed directly by a [specified offset/length](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html)\\ [`+off(len)`](ABENOFFSET_LENGTH.html), but after a [chaining](ABENTABLE_EXP_CHAINING.html) whose final place is a suitable structure component after a structure component selector.
-   Duplicate selections, that is, multiple reads performed on the same line of an internal table in different expressions, must be avoided in a statement or a loop with multiple table expressions. In these cases, a selection should be made before the statement or the loop and the result referenced by a field symbol or reference variable.
-   The exception class `CX_SY_ITAB_LINE_NOT_FOUND` contains attributes for displaying the line number in the index or key used if an access fails. If only index accesses are used in statements with multiple table expressions, it is not possible to distinguish which expression was unsuccessful.
-   Each table expression can be viewed as a short form for a variant of the statement [`READ TABLE`](ABAPREAD_TABLE.html) that enables reads to be performed on lines of internal tables in operand positions.
-   In write positions, the same [restrictions](ABAPREAD_TABLE_OUTDESC.html) apply with respect to modifying key fields to table expressions whose [result](ABENTABLE_EXP_RESULT.html) is a field symbol or temporary reference variable as to other field symbols or data reference variables that point to lines of internal tables. In particular, table expressions that return a line of a sorted table or hashed table to write positions like the left side of an assignment or as actual parameters for output parameters always raise an exception.
-   A table expression cannot be specified in a write position if it is a read-only table, such as an input parameter passed by reference. This restriction applies even if a [chaining](ABENTABLE_EXP_CHAINING.html) is used and the content of the table itself is not actually modified.
-   Unlike [`READ TABLE`](ABAPREAD_TABLE.html), a table expression does not change the value of the system field `sy-tabix`, except when used in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html).
-   Like the statement [`READ TABLE`](ABAPREAD_TABLE.html), a table expression is a single line read. If multiple lines of an internal table are to be read, the statement [`LOOP`](ABAPLOOP_AT_ITAB.html) or a [`FOR` expression](ABENFOR.html) generally has better performance than using table expressions in a loop.
-   [Mesh path expressions](ABENMESH_PATH_EXPRESSION.html) are a special form of table expression that can be used in exactly the same way as table expressions.

-   *Cause:* The specified table line was not found.
    *Runtime error:*\\ `ITAB_LINE_NOT_FOUND`

DATA carrier\_tab TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid \\n WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname. \\n\\ \\nSELECT \* FROM scarr INTO TABLE @carrier\_tab. \\n\\ \\nTRY. \\n FINAL(flight\_tab) = cl\_demo\_spfli=>get\_spfli( \\n carrier\_tab\[ KEY name \\n COMPONENTS carrname = 'United Airlines' \]-carrid ). \\n cl\_demo\_output=>display( flight\_tab ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n cl\_demo\_output=>display( \`Nothing found\` ). \\nENDTRY. DATA itab TYPE TABLE OF i. \\nitab = VALUE #( ( 3 ) ( 5 ) ). \\n\\ \\n"Bad example \\nitab\[ table\_line = 3 \] = \\n itab\[ table\_line = 3 \] \* itab\[ table\_line = 3 \]. \\n\\ \\n"Good example \\nASSIGN itab\[ table\_line = 5 \] TO FIELD-SYMBOL(). \\n = \* . abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html