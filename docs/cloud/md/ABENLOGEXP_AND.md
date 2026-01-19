---
title: "ABENLOGEXP_AND"
description: |
  ABENLOGEXP_AND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_AND.htm"
abapFile: "ABENLOGEXP_AND.html"
keywords: ["if", "ABENLOGEXP", "AND"]
---

`... log_exp1 AND log_exp2 AND log_exp3 ...`

The combination of multiple logical expressions [`log_exp`](ABENLOGEXP.html) using `AND` creates a new logical expression that is true if all logical expressions `log_exp` are true. If one of the logical expressions is false, the combined expression is also false.

Check of an assignment to an interval, ignoring interval boundaries.

-   The operator `AND` binds weaker than `NOT` and stronger than `OR` and `EQUIV`.
-   The operator `AND` implements an `AND` operation. Using [`NOT`](ABENLOGEXP_NOT.html) to negate such a operation is the same as using a `NAND` operation. It is true if at least one expression is false.
-   The Boolean operator `AND` should not be confused with the addition `AND` of the [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html)\\ [`BETWEEN`](ABENLOGEXP_BETWEEN.html).

IF operand > limit1 AND operand < limit2. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_boole.html