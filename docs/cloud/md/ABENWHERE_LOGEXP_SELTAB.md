---
title: "ABENWHERE_LOGEXP_SELTAB"
description: |
  ABENWHERE_LOGEXP_SELTAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_SELTAB.htm"
abapFile: "ABENWHERE_LOGEXP_SELTAB.html"
keywords: ["select", "insert", "do", "if", "case", "catch", "class", "data", "internal-table", "ABENWHERE", "LOGEXP", "SELTAB"]
---

`... operand [NOT] IN @range_tab ...`

This variant of the operator `IN` checks whether the operands on the left side match a [ranges condition](ABENRANGES_CONDITION_GLOSRY.html) in a [ranges table](ABENRANGES_TABLE_GLOSRY.html). The relational expression is true if the value of the operand `operand` is (is not) in the result set described in the rows of the [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `range_tab` specified as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html).

The ranges table is evaluated in the same way as in [comparison expressions](ABENLOGEXP_SELECT_OPTION.html), with the difference that any comparisons using the operators `CP` and `NP` are transformed into [`LIKE` conditions](ABENWHERE_LOGEXP_LIKE.html) for which the ABAP SQL escape character *#* is defined. The pattern after `CP` or `NP` is transformed to a pattern for `LIKE` as follows:

If the ranges table is initial, the expression `IN range_tab` is always true. This overrides the general rule that the result of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) is unknown if an operand has the [null value](ABENNULL_VALUE_GLOSRY.html).

The content of the columns `LOW` and `HIGH` in the ranges table must match the data type of the operand in accordance with the rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).

A ranges table is filled as follows and the order of the rows is not important:

When used in `sql_cond`, this generates the following combination of relational expressions:

Use of a ranges table in a `WHERE` clause.

-   The following applies to `operand`:

-   [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   In a [`HAVING`](ABAPHAVING_CLAUSE.html) clause, [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can also be used.

-   Any internal table whose row type corresponds to that of a [ranges table](ABENRANGES_TABLE_GLOSRY.html) can be specified for the ranges table `range_tab`.

-   If the ABAP SQL wildcard characters *%* and *\_* are contained in the pattern, the *#* escape character is inserted in front of these characters.
-   Any wildcard characters *\** and *+* that are not prefixed with the escape character *#* are transformed to the ABAP SQL wildcard characters *%* and *\_*.
-   Any *#* escape characters that do not prefix themselves or the ABAP SQL wildcard characters *%* and *\_* are removed.

-   `LIKE` conditions resulting from `CP` or `NP` are case-sensitive, which is not the case in ABAP comparison expressions.
-   If no conditions are specified apart from `IN range_tab`, all rows of the data source are selected if the ranges table is initial.
-   The conditions specified in the ranges table are passed by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) to the database as SQL statement input values. The maximum number of input values depends on the database system and is usually between 2000 and 10000. If the maximum number is exceeded an exception of the class `CX_SY_OPEN_SQL_DB` is raised.
-   For an initial ranges table, no condition is passed to the database and therefore, the result is always true.
-   If the ranges table contains invalid values, an uncatchable exception is raised.
-   No [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) can be specified on the right side whose result represents a ranges table.

SIGN OPTION LOW HIGH \\n--------------------------------------- \\nI EQ 01104711 \\nI BT 10000000 19999999 \\nI GE 90000000 \\nE EQ 10000911 \\nE BT 10000810 10000815 \\nE CP 1%2##3#+4++5\* ... ( ID = '01104711' OR \\n ID BETWEEN '10000000' AND '19999999' OR \\n ID >= '90000000' ) AND \\n ID <> '10000911' AND \\n ID NOT BETWEEN '10000810' AND '10000815' AND \\n ID NOT LIKE '1#%2##3+4\_\_5%' ESCAPE '#' ... DATA airlines TYPE RANGE OF spfli-carrid. \\n\\ \\nairlines = VALUE #( \\n ( sign = 'I' option = 'EQ' low = 'AA' ) \\n ( sign = 'I' option = 'BT' low = 'SQ' high = 'ZZ' ) ). \\n\\ \\nSELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n WHERE carrid IN @airlines \\n INTO TABLE @FINAL(flights). \\n\\ \\ncl\_demo\_output=>display( flights ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html