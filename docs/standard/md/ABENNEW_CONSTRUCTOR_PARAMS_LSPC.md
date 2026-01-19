---
title: "ABENNEW_CONSTRUCTOR_PARAMS_LSPC"
description: |
  ABENNEW_CONSTRUCTOR_PARAMS_LSPC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEW_CONSTRUCTOR_PARAMS_LSPC.htm"
abapFile: "ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html"
keywords: ["insert", "do", "if", "catch", "method", "data", "types", "internal-table", "ABENNEW", "CONSTRUCTOR", "PARAMS", "LSPC"]
---

`... line    |\ \{LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY keyname]\} ...`

[1. `... line`](#ABAP_ALTERNATIVE_1@2@)

[2. `... LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY keyname]`](#ABAP_ALTERNATIVE_2@2@)

Specification of one or more lines to be inserted when constructing an internal table with the instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html).

Specification of a line. For `line`, the exact same specifications can be made as in the parentheses of an expression [`NEW line_type( ... )`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), where `line_type` is the line type of the internal table and a corresponding line is constructed. The following special features apply here:

**Short Form for Structured Line Types**

If the line type of the internal table is a structured type, the following short form can be used:

NEW dtype|#( \[let\_exp\]\\ \\n             \[BASE itab\]\\ \\n             col1 = dobj11 ... ( col2 = dobj12 col3 = dobj13 ... ) \\n                               ( col2 = dobj22 col3 = dobj23 ... ) \\n                               ... \\n             col1 = dobj31 col2 = dobj32 ... ( col3 = dobj33 ... ) \\n                                             ( col3 = dobj43 ... ) \\n             ... ).

This has the same semantics as the following form:

NEW dtype|#( \[let\_exp\]\\ \\n             \[BASE itab\]\\ \\n             ( col1 = dobj11 ... col2 = dobj12 col3 = dobj13 ... ) \\n             ( col1 = dobj11 ... col2 = dobj22 col3 = dobj23 ... ) \\n             ... \\n             ( col1 = dobj31 col2 = dobj32 ... col3 = dobj33 ... ) \\n             ( col1 = dobj31 col2 = dobj32 ... col3 = dobj43 ... ) \\n             ... ).

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all subsequent inner parentheses until the next assignment is made to the corresponding component. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. Since a component cannot be assigned a value more than once in the [construction of a structure](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html), a component that has been assigned a value outside of the inner parentheses can no longer be listed in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Construction of an anonymous internal table with a structured line type with a short form for the first column:

Specification of multiple lines. The lines are taken from the internal table `jtab` and inserted into the target table as a block. The same applies to `jtab` and the additions `FROM`, `TO`, `STEP` and `USING KEY` as to the addition [`LINES OF`](ABAPINSERT_ITAB_LINESPEC.html) of the statement [`INSERT`](ABAPINSERT_ITAB.html) and the block is inserted in accordance with these rules. `jtab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

Construction of an internal table `itab` that contains the first three lines and last three lines of the previously constructed internal table `alpha`.

Construction of an internal table `itab` that contains lines of the previously constructed internal table `jtab`. The additions `FROM` and `STEP` define the step size for processing the table `jtab`: First, every second line starting at the third line is read, second, every third line starting at the second line is read.

-   If a data object is specified for `line`, this object must be compatible with the line type.
-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for `line`, the result of the expression must be convertible to the line type.
-   The syntax does not allow further parentheses for constructing tabular line types to be nested directly in `line`.

-   The restriction that the content of tabular line types cannot be constructed directly in `line` is introduced for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression `[VALUE line_type( ... )](ABENCONSTRUCTOR_EXPRESSION_VALUE.html)` can be specified for `line` to construct the content of a tabular line, where `line_type` is the tabular line type.
-   The compatibility requirement for the line type can be met by specifying [`CONV line_type( ... )`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) for the values to be inserted.
-   The short form for structured line types enables columns of internal tables that are to contain an identical value in blocks to be filled more easily.

-   Since the lines from `jtab` are inserted into the target table using only the table key, `jtab` must be compatible with the target type.
-   If there is a conflict with an existing unique table key, an uncatchable exception is always raised when inserting multiple lines from an internal table using the statement [`INSERT`](ABAPINSERT_ITAB.html).
-   When standard tables are created, the lines of the table `jtab` are appended to the target table in the same way as with the statement [`APPEND LINES OF`](ABAPAPPEND_LINESPEC.html).

TYPES: \\n BEGIN OF t\_line, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF t\_line, \\n t\_itab TYPE TABLE OF t\_line WITH EMPTY KEY. \\n\\ \\nFINAL(dref) = NEW t\_itab( col1 = 1 ( col2 = 11 ) \\n ( col2 = 12 ) \\n ( col2 = 13 ) \\n col1 = 2 ( col2 = 21 ) \\n ( col2 = 22 ) \\n ( col2 = 23 ) ). \\n\\ \\ncl\_demo\_output=>display( dref->\* ). DATA: \\n alpha TYPE TABLE OF string WITH EMPTY KEY, \\n itab LIKE REF TO alpha. \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nalpha = VALUE #( FOR j = 0 UNTIL j >= strlen( abcde ) \\n ( substring( val = abcde \\n off = j \\n len = 1 ) ) ). \\n\\ \\nitab = NEW #( ( LINES OF alpha FROM 1 TO 3 ) \\n ( \`-\` ) \\n ( LINES OF alpha FROM lines( alpha ) - 2 \\n TO lines( alpha ) ) ). \\ncl\_demo\_output=>display( itab->\* ). TYPES: t\_itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(jtab) = VALUE t\_itab( FOR i = 1 UNTIL i > 10 ( i ) ). \\n\\ \\nFINAL(itab) = NEW t\_itab( ( LINES OF jtab FROM 3 STEP 2 ) \\n ( LINES OF jtab FROM 2 STEP 3 ) ). abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html abennew\_constructor\_params\_itab.html