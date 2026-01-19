---
title: "Arithmetic expression"
description: |
  -   `func( arg1, arg2... )`(ABENSQL_ARITH_FUNC.html) Numeric function or string function. -   `cast( operand AS dtype )`(ABENSQL_CAST.html) Type modification. -   `operand1 && operand2 && operand3 ... `(ABENSQL_STRING.html) Chaining of character strings. -   `COALESCE( arg1, arg2 )`
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_EXP_SHORTREF.htm"
abapFile: "ABENSQL_EXP_SHORTREF.html"
keywords: ["do", "if", "case", "data", "ABENSQL", "EXP", "SHORTREF"]
---

[Reference](ABAPSQL_EXPR.html)

``... \{ col \}\    |\ \{ literal | @dobj  | @( expr ) \}\    |\ \{ operand1 +|-|*|/ operand2 [+|-|*|/ operand3 ... ]\ \}\    |\ \{ func( arg1[, arg2]... ) \}\    |\ \{ cast( operand AS dtype ) \}\    |\ \{ operand1 && operand2 [&&  operand3 ... ]\ \}\    |\ \{ coalesce( arg1, arg2 ) \}\    |\ \{ CASE ... WHEN ... THEN ... ELSE ... END \}\    |\ \{\ [`sql_agg`](ABENAGGREGATE_SHORTREF.html)\ \}\    |\ \{ sql_win \} ...``

Expression that is passed to the database system and executed there.

-   [`col | literal | @dobj | @( expr )`](ABENSQL_ELEM.html)\\
    Column or literal, host variable, host expression.
-   [`operand1 +|-|*|/ operand2 [+|-|*|/ operand3 ... ]`](ABENSQL_ARITH.html)\\
    Arithmetic expression
-   [`func( arg1[, arg2]... )`](ABENSQL_ARITH_FUNC.html)\\
    Numeric function or string function.
-   [`cast( operand AS dtype )`](ABENSQL_CAST.html)\\
    Type modification.
-   [`operand1 && operand2 [&& operand3 ... ]`](ABENSQL_STRING.html)\\
    Chaining of character strings.
-   [`COALESCE( arg1, arg2 )`](ABENSQL_ELEM.html)\\
    Replacement of a null value.
-   [`CASE ... WHEN ... THEN ... ELSE ... END`](ABENSQL_CASE.html)\\
    Case distinction.
-   [`sql_agg`](ABENAGGREGATE_SHORTREF.html)\\
    Aggregate expression.
-   `sql_win`\\
    Window expression.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html