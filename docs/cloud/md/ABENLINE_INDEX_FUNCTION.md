---
title: "ABENLINE_INDEX_FUNCTION"
description: |
  ABENLINE_INDEX_FUNCTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLINE_INDEX_FUNCTION.htm"
abapFile: "ABENLINE_INDEX_FUNCTION.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABENLINE", "INDEX", "FUNCTION"]
---

``... line_index( [`table_exp`](ABENTABLE_EXPRESSIONS.html)  ) ...``

The [built-in](ABENBUILT_IN_FUNCTIONS.html) function `line_index` returns the number of the line found using the [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_exp`](ABENTABLE_EXPRESSIONS.html) with respect to the [table index](ABENTABLE_INDEX_GLOSRY.html) used. The return value has the type `i`.

The line [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) to be searched for using the table expression must be determined by a key specification. An index cannot be specified. For `table_exp`, in addition to individual table expressions, all [chainings](ABENTABLE_EXP_CHAINING.html) whose result is a line of an internal table, that is, they are closed using angle brackets, can also be specified. The result always refers to the line specified in the final angle bracket and the key access restrictions apply only to this angle bracket.

Within `line_index`, an explicitly specified table key in the table line [`table_line`](ABENTABLE_EXP_ITAB_LINE.html) of the table expression is handled in the same way as a [free search key](ABAPREAD_TABLE_FREE.html) specified for this table key.

The table index used depends on the specified key as follows:

If the line searched for is not found, no exception is raised. The value 0 is returned instead. In the case of [chainings](ABENTABLE_EXP_CHAINING.html), of table expressions, the first unsuccessful from the left produces this value.

The index function can be used on chained table expressions as follows, where the nested internal table accessed is taken from the example for [Chainings with Table Expressions](ABENTABLE_EXP_CHAINING.html). The first read returns the value *1* for the first line of the innermost table. The second read returns the value *0*, since there is no line available for the index read on the outermost table.

[Internal Tables, Index Function](ABENLINE_INDEX_ABEXA.html)

-   If a search key is specified without a table key being specified explicitly, the number of a found line is returned with respect to the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) and, in the case of a [hashed table](ABENHASHED_TABLE_GLOSRY.html), the value *\-1*.
-   If a [table key](ABENTABLE_KEY_GLOSRY.html) is specified explicitly after `KEY`, the number of a found line is returned with respect to the assigned [table index](ABENTABLE_INDEX_GLOSRY.html). If the key is a [hash key](ABENHASH_KEY_GLOSRY.html), the value *\-1* is returned.

-   An index specified in [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) of the table expression is not possible here, since it does not make sense.
-   The table expression is only used to check the existence of the line number specified line. No temporary [result](ABENTABLE_EXP_RESULT.html) is created.
-   The function `line_index` can be understood as a short form of the statement [`READ TABLE`](ABAPREAD_TABLE.html) with the addition [`TRANSPORTING NO FIELDS`](ABAPREAD_TABLE_OUTDESC.html) followed by the evaluation of `sy-tabix`. If a line is not found, `0` is always returned. `sy-tabix`, on the other hand, has the value where the line would be found after a binary search using `READ TABLE`.
-   If a search key specified in [`table_line`](ABENTABLE_EXP_ITAB_LINE.html) in the table expression covers the initial part of a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) without being specified explicitly after `KEY`, a syntax check warning is produced that can be hidden by a pragma, since the function is generally quicker if the secondary key is specified explicitly.
-   As in other use cases for table expressions, it is important that no duplicate selections are made, especially in the case of `line_index`. Generally speaking, it is best not to first check the line number using `line_index` and then read the line immediately using the index.
-   The [predicate function](ABENPREDICATE_FUNCTION_GLOSRY.html)\\ [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) can be used to check the existence of a line. The function `line_index` can also be used to check whether a line exists. If the line is found, the result is not equal to 0 for every table category. A check on a value greater than 0, on the other hand, is sufficient only for [index tables](ABENINDEX_TABLE_GLOSRY.html) or when using [sorted keys](ABENSORTED_KEY_GLOSRY.html).

DATA(idx1) = line\_index( \\n itab\[ 2 \]\[ 2 \]\[ KEY primary\_key table\_line = 7 \] ). \\n\\ \\nDATA(idx2) = line\_index( \\n itab\[ 9 \]\[ 2 \]\[ KEY primary\_key table\_line = 7 \] ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenitab\_functions.html