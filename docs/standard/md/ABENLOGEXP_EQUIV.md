---
title: "ABENLOGEXP_EQUIV"
description: |
  ABENLOGEXP_EQUIV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_EQUIV.htm"
abapFile: "ABENLOGEXP_EQUIV.html"
keywords: ["if", "data", "ABENLOGEXP", "EQUIV"]
---

`... log_exp1 EQUIV log_exp2 ...`

Combining two logical expressions [`log_exp`](ABENLOGEXP.html) with `EQUIV` creates a new logical expression that is true if both expressions are true or both expressions are false. If one of the expressions is true and the other one is false, the combined expression is false.

Within a [parenthesis level](ABENLOGEXP_BRACKET.html), only two logical expressions can be combined using `EQUIV`.

The condition in the `IF` statement is true if `o1`, `o2`, and `o3`, `o4` are either both equal or both unequal.

-   The operator `EQUIV` binds weaker than `NOT`, `AND`, and `OR`.
-   The operator `EQUIV` implements an equivalence operation. Negating such an operation using [`NOT`](ABENLOGEXP_NOT.html) is the same as using an `XOR` operation (`eXclusive OR`). It is true if one of the expressions is true and the other one is false.

DATA: o1 TYPE i, \\n o2 TYPE i, \\n o3 TYPE i, \\n o4 TYPE i. \\n\\ \\n... \\n\\ \\nIF o1 = o2 EQUIV o3 = o4. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_boole.html