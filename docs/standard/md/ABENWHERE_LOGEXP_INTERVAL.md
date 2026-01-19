---
title: "ABENWHERE_LOGEXP_INTERVAL"
description: |
  ABENWHERE_LOGEXP_INTERVAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_INTERVAL.htm"
abapFile: "ABENWHERE_LOGEXP_INTERVAL.html"
keywords: ["select", "do", "if", "case", "data", "ABENWHERE", "LOGEXP", "INTERVAL"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

`... operand [NOT] BETWEEN operand1 AND operand2 ...`

This relational expression is true if the content of the operand `operand` is (is not) between the values of the operands `operand1` and `operand2`.

The interval limits are included. The comparison is made in the same way as for

`... [[NOT] ( operand >= operand1 AND operand <= operand2 )](ABENWHERE_LOGEXP_COMPARE.html) ...`

and the corresponding rules and notes apply.

Reads all flights within the next 30 days.

-   The following applies to `operand`:

-   Numeric [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   A column [`col`](ABENABAP_SQL_COLUMNS.html) specified individually cannot be numeric.
-   In a [`HAVING`](ABAPHAVING_CLAUSE.html) clause, [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can also be used.

-   The following applies to `operand1` and `operand2`:

-   Elementary [SQL operands](ABENSQL_OPERANDS.html) can be specified.
-   Columns [`col`](ABENABAP_SQL_COLUMNS.html) must have a numeric data type and they need to be prefixed with the name of the [data source](ABAPSELECT_DATA_SOURCE.html) using `~`. In this case, `operand` must also be numeric.
-   Numeric [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   [Cast expressions](ABENSQL_CAST.html) can be specified.
-   The content of ABAP objects, that is, untyped literals, host variables, and host expressions must match the data type of `operand` in accordance with the rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html). This is also checked by the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP08 and can raise an exception.

FINAL(today) = cl\_demo\_date\_time=>get\_system\_date( ). \\nFINAL(date) = CONV d( today + 30 ). \\n\\ \\nSELECT carrid, connid, fldate \\n FROM sflight \\n WHERE fldate BETWEEN @today AND @date \\n INTO TABLE @FINAL(sflight\_tab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html