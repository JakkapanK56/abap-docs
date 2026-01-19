---
title: "ABENSQL_COND_SHORTREF"
description: |
  ABENSQL_COND_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_COND_SHORTREF.htm"
abapFile: "ABENSQL_COND_SHORTREF.html"
keywords: ["select", "if", "ABENSQL", "COND", "SHORTREF"]
---

[Reference](ABENABAP_SQL_STMT_LOGEXP.html)

``... \{\ \{operand1 \{=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE\}\                    \{ operand2                    |\ \{[ALL|ANY|SOME] ( SELECT [`subquery`](ABENSUBQUERY_SHORTREF.html)\ [UNION ...] )\}\ \}\}\      |\ \{operand [NOT] BETWEEN operand1 AND operand2\}\      |\ \{operand1 [NOT] LIKE operand2 [ESCAPE esc]\}\      |\ \{operand IS [NOT] NULL\}\      |\ \{operand IS [NOT] INITIAL\}\      |\ \{EXISTS ( SELECT [`subquery`](ABENSUBQUERY_SHORTREF.html)\ [UNION ...] )\}\      |\ \{operand [NOT] IN (operand1, operand2 ...)\}\      |\ \{operand [NOT] IN ( SELECT [`subquery`](ABENSUBQUERY_SHORTREF.html)\ [UNION ...] )\}\      |\ \{( operand1, operand2, ... ) IN ( ( operand11, operand21 ... ),                                          ( operand12, operand22 ... ), ... )\}\      |\ \{operand [NOT] IN @range_tab\}\      |\ \{(cond_syntax)\}\ \} ...``

Condition for the content of columns after the additions `WHERE`, `ON`, or `HAVING` in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements. The left-hand side can be specified as an SQL expression. Conditions can be put in parentheses explicitly, combined using `AND` and `OR`, and negated using `NOT`.

-   [`=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE`](ABENWHERE_LOGEXP_COMPARE.html)\\
    comparison operators: Column content can be compared with host variables, with host expressions, with the content of other columns, and with the result of a [subquery](ABENSUBQUERY_GLOSRY.html)\\ `subquery`.
-   [`ALL|ANY|SOME`](ABENWHERE_LOGEXP_ALL_ANY_SOME.html)\\
    Must be specified when the results of the subquery `subquery` has more than one line.
-   [`[NOT] BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html)\\
    Checks whether the content of the left side is in an interval.
-   [`[NOT] LIKE operand2 #[ESCAPE esc]`](ABENWHERE_LOGEXP_LIKE.html)\\
    Checks whether the content of the left side matches the pattern in `operand2`. Here, an [escape character](ABENESCAPE_CHARACTER_GLOSRY.html)\\ `esc` can be defined with for the wildcard characters *%* and *\_* using `ESCAPE`.
-   [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html)\\
    Checks whether the content of the left side has the [null value](ABENNULL_VALUE_GLOSRY.html).
-   [`IS [NOT] INITIAL`](ABENWHERE_LOGEXP_INITIAL.html)\\
    Checks whether the content of the left side is the initial values of its built-in dictionary type.
-   [`EXISTS subquery`](ABENWHERE_LOGEXP_EXISTS.html)\\
    Checks the result set of the subquery `subquery`.
-   [`operand [NOT] IN (operand1, operand2 ...)`](ABENWHERE_LOGEXP_OPERAND_IN.html)\\
    Checks whether the content of an operand on the left side is in a value list `operand1, operand2, ...`
-   [`operand [NOT] IN subquery`](ABENWHERE_LOGEXP_OPERAND_IN.html)\\
    Checks whether the content of the left side is in the result set of the scalar subquery `subquery`.
-   [`( operand1, operand2 ) IN ( ( operand11, operand21 ... ), ... )`](ABENWHERE_LOGEXP_LIST_IN.html)\\
    Checks whether the content of a list of operands is in a value list `operand1, operand2, ...`
-   [`[NOT] IN range_tab`](ABENWHERE_LOGEXP_SELTAB.html)\\
    Checks whether the content of the left side meets the conditions of a [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `range_tab`.
-   [`(cond_syntax)`](ABENWHERE_LOGEXP_DYNAMIC.html)\\
    Condition in `cond_syntax` specified dynamically.

abenabap.html abenabap\_reference.html abenabap\_shortref.html