---
title: "ABENWHERE_LOGEXP_OPERAND_IN"
description: |
  ABENWHERE_LOGEXP_OPERAND_IN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_OPERAND_IN.htm"
abapFile: "ABENWHERE_LOGEXP_OPERAND_IN.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENWHERE", "LOGEXP", "OPERAND"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

``... operand [NOT] IN \{ (operand1[, operand2[, ...]]) \}\                     |\ \{ ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] ) \} ...``

[1. `... operand [NOT] IN (operand1[, operand2[, ...]])`](#ABAP_VARIANT_1@1@)

[2. `... operand [NOT] IN ( SELECT subquery_clauses [UNION|INTERSECT|EXCEPT ...] )`](#ABAP_VARIANT_2@1@)

Checks whether the value of an operand `operand` matches a value in a set of values specified in parentheses. The set of values can be specified as follows:

The following applies to `operand`:

This relational expression is true if the value of the operand `operand` matches (does not match) the content of one of the operands `operand1, operand2 ...` in a parenthesized comma-separated value list.

The following applies to `operand1`, `operand2`, ...:

It is also possible to specify just one operand `operand1` in the parentheses. Blanks can be placed after the opening parenthesis, in front of the closing parenthesis, and after the commas. If blank is placed after the opening parenthesis, there must also be a blank in front of the closing parenthesis.

No columns [`col`](ABENABAP_SQL_COLUMNS.html), no [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), and no other [SQL expressions](ABAPSQL_EXPR.html) can be specified here on the right side. SQL expressions are, however, specified in the variant of `IN` with an [operand list](ABENWHERE_LOGEXP_LIST_IN.html).

Reads the bookings in which the class is not in the value range (C - Business, F - First, Y - Economy) of the corresponding domain in the ABAP Dictionary.

This relational expression is true if the value of the operand `operand` is (is not) contained in the result set of a [subquery](ABENSUBQUERY_GLOSRY.html). The clauses in the subquery [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html) must represent a [scalar subquery](ABENSCALAR_SUBQUERY_GLOSRY.html). The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses.

Reads the geographical latitude and longitude of a city from the DDIC database table `SGEOCITY`, where this city is the city of origin of a flight in the DDIC database table `SPFLI`.

-   Using a comma-separated list of individual literals or host variables.
-   Using a [scalar subquery](ABENSCALAR_SUBQUERY_GLOSRY.html).

-   [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   [Aggregate expressions](ABAPSELECT_AGGREGATE.html) can also be used in a [`HAVING`](ABAPHAVING_CLAUSE.html) clause.

-   [Literals](ABENABAP_SQL_LITERALS.html) and [host variables](ABENABAP_SQL_HOST_VARIABLES.html) can be specified.
-   The content of untyped literals and host variables must match the data type of `operand` in accordance with the rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html). This is checked by the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP08 and can produce a syntax error or raise an exception.

SELECT \* \\n FROM sbook \\n WHERE class NOT IN ('C','F','Y') \\n INTO TABLE @FINAL(sbook\_tab). \\n\\ \\nIF sy-subrc = 0. \\n "Error handling \\nENDIF. DATA: carr\_id TYPE spfli-carrid VALUE 'LH', \\n conn\_id TYPE spfli-connid VALUE '400'. \\n\\ \\nSELECT SINGLE city, latitude, longitude \\n FROM sgeocity \\n WHERE city IN ( SELECT cityfrom \\n FROM spfli \\n WHERE carrid = @carr\_id AND \\n connid = @conn\_id ) \\n INTO (@FINAL(city), @FINAL(lati), @FINAL(longi)). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html abenwhere\_logexp\_in.html