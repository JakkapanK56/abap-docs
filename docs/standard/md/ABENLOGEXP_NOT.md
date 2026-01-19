---
title: "ABENLOGEXP_NOT"
description: |
  ABENLOGEXP_NOT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_NOT.htm"
abapFile: "ABENLOGEXP_NOT.html"
keywords: ["select", "do", "if", "ABENLOGEXP", "NOT"]
---

`... NOT log_exp ...`

The negation of a logical expression [`log_exp`](ABENLOGEXP.html) using `NOT` creates a new logical expression that is false if the logical expression `log_exp` is true and vice versa.

Exit the current processing block if `sy-subrc` does not have the value 0.

-   The operator `NOT` binds stronger than `AND`, `OR`, and `EQUIV`.
-   The Boolean operator `NOT` must not be confused with the addition `NOT` of the [comparison operators](ABENCOMP_OPERATOR_GLOSRY.html)\\ [`BETWEEN`](ABENLOGEXP_BETWEEN.html), [`IN`](ABENLOGEXP_SELECT_OPTION.html), and the [predicate operator](ABENPREDICATE_OPERATOR_GLOSRY.html)\\ [`IS`](ABENPREDICATE_EXPRESSIONS.html). The following syntax is possible:
-   `... NOT operand NOT IN range_tab ...`
-   The first `NOT` is a Boolean operator that negates a comparison expression. The second `NOT` is a part of the comparison expression with‎ the comparison operator `IN`. This is illustrated by parentheses around the comparison expression:
-   `... NOT ( operand NOT IN range_tab ) ...`

IF NOT sy-subrc = 0. \\n RETURN. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_boole.html