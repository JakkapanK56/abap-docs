---
title: "ABENITAB_FUNCTIONS"
description: |
  ABENITAB_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENITAB_FUNCTIONS.htm"
abapFile: "ABENITAB_FUNCTIONS.html"
keywords: ["data", "internal-table", "ABENITAB", "FUNCTIONS"]
---

The following [built-in functions](ABENBUILT_IN_FUNCTIONS.html) work with internal tables as arguments:

Furthermore, the string function [`concat_lines_of`](ABENCONCATENATION_FUNCTIONS.html) expects an internal table as an argument and the predicate function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) expects a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) or a [mesh path expression](ABENMESH_PATH_EXPRESSION_GLOSRY.html).

-   [`lines` - Line Function](ABENDESCRIPTIVE_FUNCTIONS_TABLE.html)
-   [`line_index` - Index Function](ABENLINE_INDEX_FUNCTION.html)

-   Built-in functions for internal tables can be used in suitable [operand positions](ABENEXPRESSION_POSITIONS.html), for example directly as an operand of [arithmetic](ABENARITHMETIC_EXPRESSION_GLOSRY.html) or [relational expressions](ABENRELATIONAL_EXPRESSION_GLOSRY.html).
-   The term [table function](ABENTABLE_FUNCTION_GLOSRY.html) is generally used for functions that return tabular data as a result. But the above functions might also be called table functions similar to [string functions](ABENSTRING_FUNCTION_GLOSRY.html) that work with strings as arguments.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html