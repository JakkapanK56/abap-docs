---
title: "ABENTABLE_EXP_LHS"
description: |
  ABENTABLE_EXP_LHS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_EXP_LHS.htm"
abapFile: "ABENTABLE_EXP_LHS.html"
keywords: ["select", "loop", "do", "if", "case", "data", "internal-table", "field-symbol", "ABENTABLE", "EXP", "LHS"]
---

Table expressions and their [chainings](ABENTABLE_EXP_CHAINING.html) can be specified as [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) in [result positions](ABENRESULT_POSITION_GLOSRY.html). The result of a table expression in these positions is always a temporary field symbol.

In the case of writes performed on the temporary field symbol, the same rules apply as to a field symbol assigned a table line using [`READ TABLE ASSIGNING`](ABAPREAD_TABLE_OUTDESC.html). More specifically, the read-only character of key fields must be respected. Table expressions that return a line of a sorted table or hashed table to write positions such as the left side of an assignment or as actual parameters for output parameters always raise an exception.

The constructor operators `VALUE` and `REF` used to control the [result](ABENTABLE_EXP_RESULT.html) of the table expression cannot be used in write positions.

An internal table is prefilled with initial lines, which are overwritten with a value in the [`DO`](ABAPDO.html) loop.

[Table Expressions, Write Position](ABENTABLE_EXP_ITAB_CHANGING_ABEXA.html)

-   If a single table expression is specified, or a [chaining](ABENTABLE_EXP_CHAINING.html) whose last position is a table expression, the entire line found is modified in the write position.
-   If a [chaining](ABENTABLE_EXP_CHAINING.html) is specified whose last position is a structure component after a structure component selector, this component is modified in the write position.

DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 5 ( ) ). \\n\\ \\nDO lines( itab ) TIMES. \\n itab\[ sy-index \] = sy-index \*\* 2. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html