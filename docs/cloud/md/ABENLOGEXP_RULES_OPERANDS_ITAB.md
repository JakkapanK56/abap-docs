---
title: "ABENLOGEXP_RULES_OPERANDS_ITAB"
description: |
  ABENLOGEXP_RULES_OPERANDS_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_OPERANDS_ITAB.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS_ITAB.html"
keywords: ["if", "data", "types", "internal-table", "ABENLOGEXP", "RULES", "OPERANDS", "ITAB"]
---

Internal tables can be compared with other internal tables if their line types are comparable. Internal tables are compared based on the following hierarchy:

If an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html) is specified as the operand of an assignment, the header line is addressed in nearly all [operand positions](ABENOPERANDS_DATA_OBJECTS.html) and not the [table body](ABENTABLE_BODY_GLOSRY.html). To address the table body of a table with a header, `[]` must be appended to the name.

`itab2` is greater than `itab1`, despite having the same number of lines, because the content of its second line is greater than that of `itab1`.

[Comparing Internal Tables](ABENCOMPARE_TABLE_ABEXA.html).

1.  The internal table that has more lines than the other internal table is the larger table.
2.  Internal tables with the same number of lines are compared line by line. If an internal table contains nested internal tables, these are compared recursively. Two internal tables are identical if the content of each corresponding line matches. If two internal tables are not identical, the first non-matching pair of lines determines the result of the comparison.

DATA: \\n itab1 TYPE TABLE OF i WITH EMPTY KEY, \\n itab2 TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\nitab2 = VALUE #( ( 1 ) ( 3 ) ( 3 ) ). \\n\\ \\nASSERT itab2 > itab1. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html