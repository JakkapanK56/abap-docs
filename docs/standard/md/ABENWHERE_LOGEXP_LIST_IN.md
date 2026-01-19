---
title: "ABENWHERE_LOGEXP_LIST_IN"
description: |
  ABENWHERE_LOGEXP_LIST_IN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENWHERE_LOGEXP_LIST_IN.htm"
abapFile: "ABENWHERE_LOGEXP_LIST_IN.html"
keywords: ["select", "do", "if", "case", "try", "data", "types", "ABENWHERE", "LOGEXP", "LIST"]
---

[Short Reference](ABENSQL_COND_SHORTREF.html)

``... ( operand1, operand2[, ...] ) IN \{ ( ( operand11, operand21[, ...] )[,                                           ( operand12, operand22[, ...] )] ) \}\                                     |\ \{ ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] ) \} ...``

[1. `... ( operand1, operand2[, ...] ) IN ( ( operand11, operand21[, ...] )[, ...] ) )`](#ABAP_VARIANT_1@1@)

[2. `... ( operand1, operand2[, ...] ) IN ( SELECT subquery_clauses [UNION|INTERSECT|EXCEPT ...] )`](#ABAP_VARIANT_2@1@)

Checks whether the values of the operands `operand1`, `operand2`, ... specified on the left side as a parenthesized comma-separated list match a value tuple from a set of value tuples specified in parentheses. The set of value tuples can be specified as follows:

The following applies to `operand1`, `operand2`, ...:

At least one blank must be placed after every opening parenthesis and in front of every closing parenthesis. The comma-separated list `operand1`, `operand2`, ... must contain at least two elements.

The operator `NOT` is currently not supported.

This relational expression is true if the value of every operand `operand1`, `operand2`, ... on the left side matches the content of the operand of a parenthesized value tuple `( operand11, operand21[, ...] )` in the same place on the right side. Every value tuple must contain the same number of elements as the comma-separated list `operand1`, `operand2`, ... on the left side. The value tuples themselves are specified as a parenthesized comma-separated list, which can also consist of only one element.

`operand11`, `operand21`, ... of a value tuple can be any [SQL expressions](ABAPSQL_EXPR.html) except [window expressions](ABAPSELECT_OVER.html). [Aggregate expressions](ABAPSELECT_AGGREGATE.html) are currently only possible in a [`HAVING`](ABAPHAVING_CLAUSE.html) clause. [Literals](ABENABAP_SQL_LITERALS.html), [host variables](ABENABAP_SQL_HOST_VARIABLES.html), and [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) are handled like [elementary SQL expressions](ABENSQL_ELEM.html), which means they are mapped to dictionary types instead of being converted.

The query finds all rows in which the values of the three columns on the left side match one of the two value tuples on the right side.

This relational expression is true if the value of every operand `operand1`, `operand2`, ... on the left side matches the content of the result set of the [subquery](ABENSUBQUERY_GLOSRY.html). The result set of the subquery must contain the same number of elements in the same position as in the comma-separated list `operand1`, `operand2`, ... on the left side. The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, the rules for [`query_clauses`](ABAPUNION_CLAUSE.html) apply.

When used, this variant of `IN` applies the [strict mode from ABAP release 7.78](ABENABAP_SQL_STRICTMODE_778.html).

Reads the country of origin and the country of destination from the DDIC database table `SPFLI` for all flights which cost more than USD 100. The condition 'price > 100' is checked in a subquery that reads from the DDIC database table `SFLIGHT`.

-   Using a comma-separated list of parenthesized tuples `( operand11, operand21[, ...] )`, `( operand12, operand22[, ...] )`, ...
-   Using a [subquery](ABENSUBQUERY_GLOSRY.html).

-   Any [SQL expressions](ABAPSQL_EXPR.html) except [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   [Aggregate expressions](ABAPSELECT_AGGREGATE.html) can be used in a [`HAVING`](ABAPHAVING_CLAUSE.html) clause.

-   This variant of `IN` can also be expressed using individual comparisons combined using `AND` and `OR` and the [comparison operator `=`](ABENWHERE_LOGEXP_COMPARE.html), but SQL expressions are not possible on the right side. This is also how this variant of `IN` is distinguished from the variant with a [single operand](ABENWHERE_LOGEXP_OPERAND_IN.html).
-   When this variant of `IN` is used and not only column specifications are used on the left side of `IN` and not only host variables or expressions are used on the right side, ABAP SQL bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) for buffering types [single record buffering](ABENBUFFER_SINGLE_BUFFERING.html) and [generic buffering](ABENBUFFER_GENERIC_BUFFERING.html).
-   When used, this variant of `IN` applies the [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

DATA cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt'. \\nDATA cityto TYPE spfli-cityto VALUE 'New York'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = cityfrom \\n )->add\_field( CHANGING field = cityto \\n )->request( ). \\ncityfrom = to\_upper( cityfrom ). \\ncityto = to\_upper( cityto ). \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE ( carrid, cityfrom, cityto ) \\n IN ( ( 'LH', @cityfrom, @cityto ), \\n ( 'UA', @cityfrom, @cityto ) ) \\n INTO TABLE @FINAL(itab). \\n\\ \\ncl\_demo\_output=>display( itab ). SELECT countryfr, countryto \\n FROM spfli \\n WHERE ( carrid,connid ) IN ( SELECT carrid,connid \\n FROM sflight \\n WHERE price > 100 ) \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html abenwhere\_logexp\_in.html