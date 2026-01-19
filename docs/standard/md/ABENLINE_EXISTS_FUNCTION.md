---
title: "ABENLINE_EXISTS_FUNCTION"
description: |
  ABENLINE_EXISTS_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLINE_EXISTS_FUNCTION.htm"
abapFile: "ABENLINE_EXISTS_FUNCTION.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "field-symbol", "ABENLINE", "EXISTS", "FUNCTION"]
---

``... line_exists( [`table_exp`](ABENTABLE_EXPRESSIONS.html) ) ...``

The [built-in](ABENBUILT_IN_FUNCTIONS.html)\\ [predicate function](ABENPREDICATE_FUNCTION_GLOSRY.html)\\ `line_exists` checks whether a line of an internal table [specified](ABENTABLE_EXP_ITAB_LINE.html) in the [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_exp`](ABENTABLE_EXPRESSIONS.html) exists and returns the corresponding [truth value](ABENTRUTH_VALUE_GLOSRY.html). In addition to single table expressions, [chainings](ABENTABLE_EXP_CHAINING.html) can also be specified for `table_exp`, whose result is a line of an internal table.

Within `line_exists`, an explicitly specified table key in the table line [`table_line`](ABENTABLE_EXP_ITAB_LINE.html) of the table expression is handled in the same way as a [free search key](ABAPREAD_TABLE_FREE.html) specified for this table key.

Checks whether the line exists in the internal table *flight\_tab*.

-   The table expression is only used to check the existence of the specified line. No temporary [result](ABENTABLE_EXP_RESULT.html) is created.
-   The predicate function `line_exists` can be considered as a short form of the statement [`READ TABLE`](ABAPREAD_TABLE.html) with the addition [`TRANSPORTING NO FIELDS`](ABAPREAD_TABLE_OUTDESC.html) followed by `sy-subrc` being checked.
-   The predicate function `line_exists` cannot be used to determine the line number in a table index of a search key used for the search, since table expressions do not fill the system field `sy-tabix`. The table function [`line_index`](ABENLINE_INDEX_FUNCTION.html) can be used instead.
-   If a search key specified in [`table_line`](ABENTABLE_EXP_ITAB_LINE.html) in the table expression covers the initial part of a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) without being specified explicitly after `KEY`, a syntax check warning that can be hidden by a pragma occurs, since the function is generally more performant if the secondary key is specified explicitly.
-   As in other use cases of table expressions, `line_exists` must be used carefully to avoid duplicate selections. Therefore, `line_exists` should not be used to first check the existence of a line and then read it. Instead, the table expression can be [assigned to a field symbol](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) and then `sy-subrc` checked. If the line in question usually exists, the table expression can be specified in the required operand position and the exception `CX_SY_ITAB_LINE_NOT_FOUND` caught.
-   As well as assigning a table expression a [default value](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) for lines that are not found, there is also the option of checking the existence of lines.

DATA flight\_tab TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @flight\_tab. \\n\\ \\nIF line\_exists( flight\_tab\[ carrid = 'LH' \\n connid = '0400' \] ). \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicate\_functions.html abenpredicate\_functions\_tabs.html