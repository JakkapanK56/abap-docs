---
title: "ABENVALUE_CONSTRUCTOR_PARAMS_LSPC"
description: |
  ABENVALUE_CONSTRUCTOR_PARAMS_LSPC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.htm"
abapFile: "ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html"
keywords: ["insert", "delete", "do", "while", "if", "catch", "method", "data", "types", "internal-table", "ABENVALUE", "CONSTRUCTOR", "PARAMS", "LSPC"]
---

`... line    |\ \{LINES OF itab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY keyname]\} ...`

[1. `... line`](#ABAP_ALTERNATIVE_1@2@)

[2. `... LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY keyname]`](#ABAP_ALTERNATIVE_2@2@)

Specification of one or more lines to be inserted when constructing an internal table with the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html).

If lines from the target table or the entire target table are used in `line_spec` in an assignment of a constructor expression using the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) to an internal table, these lines are deleted or overwritten with a start value before both variants of `line_spec` are evaluated. The target table must therefore be saved in an auxiliary variable first, for which a [`LET`](ABAPLET.html) expression can be used.

Specification of a line. For `line`, the exact same specifications can be made as in the parentheses of an expression [`NEW line_type( ... )`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), where `line_type` is the line type of the internal table and a corresponding line is constructed. The following special features apply here:

**Short Form for Structured Line Types**

If the line type of the internal table is a structured type, the following short form can be used:

VALUE dtype|#( \[let\_exp\]\\ \\n               \[BASE itab\]\\ \\n               col1 = dobj11 ... ( col2 = dobj12 col3 = dobj13 ... ) \\n                                 ( col2 = dobj22 col3 = dobj23 ... ) \\n                                 ... \\n               col1 = dobj31 col2 = dobj32 ... ( col3 = dobj33 ... ) \\n                                               ( col3 = dobj43 ... ) \\n               ... ).

This has the same semantics as the following:

VALUE dtype|#( \[let\_exp\]\\ \\n               \[BASE itab\]\\ \\n               ( col1 = dobj11 ... col2 = dobj12 col3 = dobj13 ... ) \\n               ( col1 = dobj11 ... col2 = dobj22 col3 = dobj23 ... ) \\n               ... \\n               ( col1 = dobj31 col2 = dobj32 ... col3 = dobj33 ... ) \\n               ( col1 = dobj31 col2 = dobj32 ... col3 = dobj43 ... ) \\n               ... ).

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all subsequent inner parentheses until the next assignment is made to the corresponding component. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. Since a component cannot be assigned a value more than once in the [construction of a structure](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html), a component that has been assigned a value outside of the inner parentheses can no longer be listed in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Construction of a [ranges table](ABENRANGES_TABLE_GLOSRY.html) and filling it with four lines while using the short form for structured line types.

Specification of multiple lines. The lines are taken from the internal table `jtab` and inserted into the target table as a block. The same applies to `jtab` and the additions `FROM`, `TO`, `STEP` and `USING KEY` as to the addition [`LINES OF`](ABAPINSERT_ITAB_LINESPEC.html) of the statement [`INSERT`](ABAPINSERT_ITAB.html) and the block is inserted in accordance with these rules. `jtab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

Construction of an internal table with an elementary line type. `jtab` is filled with three lines and `itab` with six lines. The first line inserted in `itab` is initial and the last three lines are taken from the table `jtab` filled previously.

Construction of an internal table with an elementary line type. `jtab` is filled with ten lines and `itab` with six lines. The first line inserted in `itab` is initial and the last three lines are taken from the table `jtab` filled previously. The additions `FROM` and `STEP` define the step size for processing the table `jtab`: Every second line starting at the sixth line is read.

-   If a data object is specified for `line`, this object must be compatible with the line type.
-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for `line`, the result of the expression must be convertible to the line type.
-   The syntax does not allow further parentheses for constructing tabular line types to be nested directly in `line`.

-   The restriction that the content of tabular line types cannot be constructed directly in `line` is introduced for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression `[VALUE line_type( ... )](ABENCONSTRUCTOR_EXPRESSION_VALUE.html)` can be specified for `line` to construct the content of a tabular line, where `line_type` is the tabular line type.
-   The compatibility requirement for the line type can be met by specifying [`CONV line_type( ... )`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) for the values to be inserted.
-   The short form for structured line types enables columns of internal tables that are to contain an identical value in blocks to be filled more easily.

-   In `VALUE`, the table lines are constructed in accordance with the rules for the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), since new table lines are created here and the restriction for `VALUE` dictating that no values of elementary data objects can be constructed cannot be applied.

-   Since the lines from `jtab` are inserted into the target table using only the table key, `jtab` must be compatible with the target type.
-   If there is a conflict with an existing unique table key, an uncatchable exception is always raised when inserting multiple lines from an internal table using the statement [`INSERT`](ABAPINSERT_ITAB.html).
-   When standard tables are created, the lines of the table `jtab` are appended to the target table in the same way as with the statement [`APPEND LINES OF`](ABAPAPPEND_LINESPEC.html).

DATA itab TYPE RANGE OF i. \\n\\ \\nitab = VALUE #( sign = 'I' option = 'BT' ( low = 1 high = 10 ) \\n ( low = 21 high = 30 ) \\n ( low = 41 high = 50 ) \\n option = 'GE' ( low = 61 ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(jtab) = VALUE t\_itab( ( 10 ) ( 20 ) ( 30 ) ). \\n\\ \\nFINAL(itab) = VALUE t\_itab( ( ) ( 1 ) ( 2 ) ( LINES OF jtab ) ). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(jtab) = VALUE t\_itab( FOR i = 10 THEN i + 10 \\n UNTIL i > 100 ( i ) ). \\n\\ \\nFINAL(itab) = VALUE t\_itab( ( ) ( 20 ) ( 40 ) \\n ( LINES OF jtab FROM 6 STEP 2 ) ). abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html abenvalue\_constructor\_params\_itab.html