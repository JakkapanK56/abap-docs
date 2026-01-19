---
title: "ABENABAP_SQL_STMT_LOGEXP"
description: |
  ABENABAP_SQL_STMT_LOGEXP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STMT_LOGEXP.htm"
abapFile: "ABENABAP_SQL_STMT_LOGEXP.html"
keywords: ["select", "update", "delete", "do", "while", "if", "case", "data", "types", "internal-table", "ABENABAP", "SQL", "STMT", "LOGEXP"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

``... \{\ \{operand1 \{[`=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE`](ABENWHERE_LOGEXP_COMPARE.html)\}\                    \{  [`operand2`](ABENWHERE_LOGEXP_COMPARE.html)\                    |\ \{[`[ALL|ANY|SOME]`](ABENWHERE_LOGEXP_ALL_ANY_SOME.html) ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] )\}\ \}\}\      |\ \{[`operand [NOT] BETWEEN operand1 AND operand2`](ABENWHERE_LOGEXP_INTERVAL.html)\}\      |\ \{[`operand1 [NOT] LIKE operand2 [ESCAPE esc]`](ABENWHERE_LOGEXP_LIKE.html)\}\      |\ \{[`operand IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html)\}\      |\ \{[`operand IS [NOT] INITIAL`](ABENWHERE_LOGEXP_INITIAL.html)\}\      |\ \{[`EXISTS`](ABENWHERE_LOGEXP_EXISTS.html) ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] )\}\      |\ \{[`operand [NOT] IN (operand1, operand2 ...)`](ABENWHERE_LOGEXP_OPERAND_IN.html)\}\      |\ \{[`operand [NOT] IN`](ABENWHERE_LOGEXP_OPERAND_IN.html) ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] )\}\      |\ \{[`( operand1, operand2, ... ) IN ( ( operand11, operand21 ... ),`](ABENWHERE_LOGEXP_LIST_IN.html)\                                          [`( operand12, operand22 ... ), ... )`](ABENWHERE_LOGEXP_LIST_IN.html)\}\      |\ \{[`operand [NOT] IN @range_tab`](ABENWHERE_LOGEXP_SELTAB.html)\}\      |\ \{[`(cond_syntax)`](ABENWHERE_LOGEXP_DYNAMIC.html)\}\ \} ...``

Relational expression in a condition of an ABAP SQL statement. Logical expressions `sql_cond` can be formed from the relational expressions shown here for the following conditions:

Possible operands of a relational expression are elementary [SQL operands](ABENSQL_OPERANDS.html) and [SQL expressions](ABAPSQL_EXPR.html). The kind of expression and where it is used determine which operands can be used and where. The following principles apply:

A relational expression `rel_exp` is either

The expression is unknown if one of the operands involved contains the [null value](ABENNULL_VALUE_GLOSRY.html) and is evaluated with a comparison other than [`IS NULL`](ABENWHERE_LOGEXP_NULL.html). The result of joins of relational expressions with unknown results is described under [`AND, OR, NOT`](ABENWHERE_LOGEXP_ANDORNOT.html).

In an SQL condition of a statement, the [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source of a query or of the target of a write statement cannot be used as an operand due to [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). This is checked completely in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.

-   Read accesses

-   [`WHERE` clause](ABAPWHERE.html) of a [query](ABENASQL_QUERY_GLOSRY.html)
-   [`HAVING` clause](ABAPHAVING_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html)
-   [`ON` condition](ABAPSELECT_JOIN.html) of a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html)

-   Modifying accesses

-   [`WHERE` condition](ABAPUPDATE_SOURCE.html) of the statement [`UPDATE`](ABAPUPDATE.html)
-   [`WHERE` condition](ABAPDELETE_WHERE.html) of the statement [`DELETE`](ABAPDELETE_DBTAB.html)

-   On the right side of relational expressions, [elementary SQL expressions](ABENSQL_ELEM.html), [cast expressions](ABENSQL_CAST.html), and built-in [SQL functions](ABENSQL_BUILTIN_FUNC.html) can be used. No other [SQL expressions](ABAPSQL_EXPR.html) are possible. [Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) are handled as elementary SQL expressions, while [untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) are handled like [host variables](ABENABAP_SQL_HOST_VARIABLES.html).
-   [Aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can only be used as operands in the [`HAVING`](ABAPHAVING_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html), but also on the right side.
-   [Window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html) cannot be used.
-   Operands of the type `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, or `GEOM_EWKB` cannot be used. One exception is the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html), which can also evaluate [LOBs](ABENLOB_GLOSRY.html) and [geodata types](ABENGEO_DATA_TYPE_GLOSRY.html).

-   true
-   false, or
-   unknown.

-   In comparisons between values determined on the database, it is essential that only operands of the same type and the same length are used. This avoids platform-dependent conversions from taking place.
-   The following elements of relational expressions cannot be handled by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html):

-   [SQL Expressions](ABAPSQL_EXPR.html) except those listed under [ABAP SQL In-Memory Engine, Supported SQL Expressions](ABENSQL_ENGINE_EXPR.html).
-   Comparisons between different types except the following cases: Both operands have numeric types except `DF16_DEC` or `DF34_DEC`; both operands are character-like; both operands have the type `RAW` with the same length.

-   Statements that use relational expressions that cannot be handled by the ABAP SQL in-memory engine bypass the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   The ABAP SQL statement bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) if items other than [host variables](ABENHOST_VARIABLE_GLOSRY.html) or [host expressions](ABENHOST_EXPRESSION_GLOSRY.html) are specified on the right side of a relational expression or are used to identify a single record or a generically buffered area.
-   A client column can be used as an operand only if [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is disabled using the obsolete addition `CLIENT SPECIFIED` for the query or the write statement.
-   That the result of a check is unknown if one of the operands has the [null value](ABENNULL_VALUE_GLOSRY.html), is especially true for the [null expression `NULL`](ABENSQL_NULL.html) that contains the null value by definition.
-   Single relational expressions that are unknown can be handled similarly to expressions that are false in the sense that they are not true. Caution is needed when using [`AND, OR, NOT`](ABENWHERE_LOGEXP_ANDORNOT.html). For example, an unknown expression cannot be made true by using `NOT`.
-   The rule that the result of an relational expression is unknown if an operand contains the [null value](ABENNULL_VALUE_GLOSRY.html) is overridden by an initial ranges table in the expression [`IN range_tab`](ABENWHERE_LOGEXP_SELTAB.html). It also has no effect if an empty internal table is used for [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) because then the entire `WHERE` condition is ignored.
-   If in [dynamic conditions](ABENWHERE_LOGEXP_DYNAMIC.html) alias names defined with [`AS`](ABAPFROM_CLAUSE.html) or [joins](ABAPFROM_CLAUSE.html) are used, a [client column](ABENCLIENT_COLUMN_GLOSRY.html) can be accessed outside the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check in `WHERE` conditions and `ON` conditions, without [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) being disabled using `CLIENT SPECIFIED`. In this case, there are two conditions for the client column: the implicit condition of the automatic client handler for the [current client](ABENCURRENT_CLIENT_GLOSRY.html) and the explicitly specified condition. If the current client is not specified in the explicitly specified condition, no rows are selected.
-   When SQL expressions occur on the left side of a relational expression, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_760.html), which handles the statement more strictly than the regular syntax check.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html