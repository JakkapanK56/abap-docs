---
title: "ABENLOGEXP_OR"
description: |
  ABENLOGEXP_OR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_OR.htm"
abapFile: "ABENLOGEXP_OR.html"
keywords: ["if", "case", "ABENLOGEXP"]
---

`... log_exp1 OR log_exp2 OR log_exp3 ...`

If multiple logical expressions [`log_exp`](ABENLOGEXP.html) are combined using `OR`, a new logical expression is created that is true if at least one of the logical expressions `log_exp` is true. The combination is false only if all logical expressions of the combination are false.

Check whether the local time is within one of two intervals. The language elements `AND` are not Boolean operators in this case but belong to the comparison operator [`BETWEEN`](ABENLOGEXP_BETWEEN.html).

-   The operator `OR` binds weaker than `NOT` or `AND` and binds stronger than `EQUIV`.
-   The operator `OR` implements an `OR` operation. Negating such an operation using [`NOT`](ABENLOGEXP_NOT.html) is the same as using a `NOR` operation. It is true if all expressions are false.

FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\nIF time BETWEEN '080000' AND '120000' OR \\n time BETWEEN '130000' AND '170000'. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_boole.html