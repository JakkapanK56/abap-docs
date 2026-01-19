---
title: "ABENLOGEXP_SELECT_OPTION"
description: |
  ABENLOGEXP_SELECT_OPTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_SELECT_OPTION.htm"
abapFile: "ABENLOGEXP_SELECT_OPTION.html"
keywords: ["select", "if", "catch", "method", "data", "types", "internal-table", "ABENLOGEXP", "SELECT", "OPTION"]
---

`... operand [NOT] IN range_tab ...`

In a comparison expression with the comparison operator `IN`, the conditions of a [ranges table](ABENRANGES_TABLE_GLOSRY.html) or a table of this structure are checked. This means whether an operand `operand` is checked to see whether it meets the conditions in the lines of the ranges table or not, if the addition `NOT` is specified. The tabular comparison expression is equivalent to a combination of [binary](ABENLOGEXP_ANY_OPERAND.html) or [ternary](ABENLOGEXP_BETWEEN.html) comparison expressions whose number is determined by the number of lines in the internal table.

Any internal table whose line type matches that of a ranges table or a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) with the corresponding type of return value can be specified as a table `range_tab`. The ranges table can be of any table type. For the structure of a ranges tables, see [`TYPES RANGE OF`](ABAPTYPES_RANGES.html). The evaluation of a ranges table requires it to contain the valid values listed there in the columns `sign` and `option`. If the ranges table contains invalid values, an uncatchable exception is raised. If the ranges table is initial, the comparison expression is always true.

Each line of a non-initial ranges table is included in the combination using one of the following comparison expressions. Depending on the operator in the column `option`, this is a comparison between two operands using a [binary comparison operator](ABENLOGEXP_ANY_OPERAND.html) or an interval restriction using the [ternary operator](ABENLOGEXP_BETWEEN.html)\\ `BETWEEN`.

`operand` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and the usual [comparison rules](ABENLOGEXP_RULES.html) apply to `operand` and the columns `low` and `high` of the ranges table. The comparison expressions of the individual lines are [combined](ABENLOGEXP_BOOLE.html) into a logical expression in accordance with the following hierarchy:

Filling of a [ranges table](ABENRANGES_TABLE_GLOSRY.html) with a [`SELECT`](ABAPSELECT.html) statement and its use in a logical expression in the conditional operator [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html).

-   The operators *EQ*, *NE*, *GE*, *GT*, *LE*, and *LT* produce a size comparison:
-   `... operand [\{EQ|NE|GE|GT|LE|LT\}](ABENLOGEXP_ANY_OPERAND.html) range_tab-low ...`
-   The comparison operator is derived from the content of the column `range_tab-option` and the content of the column `range_tab-low` is used as the right operand.
-   The operators *CP* and *NP* produce a string comparison:
-   `... operand [\{CP|NP\}](ABENLOGEXP_STRINGS.html) range_tab-low && range_tab-high`
-   The comparison operator is derived from the content of the column `range_tab-option` and the content of the columns `range_tab-low` and `range_tab-high` is concatenated as the right operand.
-   The operators *BT* and *NB* produce a delimitation of an interval:
-   `... operand [NOT]\ [BETWEEN](ABENLOGEXP_BETWEEN.html) range_tab-low AND range_tab-high ...`
-   The comparison is executed without the addition `NOT` if the content of the column `range_tab-option` is *BT* and with the addition `NOT` if the content is *NB*. The content of the columns `range_tab-low` and `range_tab-high` is used for the interval restrictions.

-   The rules above can be interpreted in such a way that the lines containing *I* or *E* in the column `sign` describe two value sets. The set for *I* is the inclusive set and the set for *E* is the exclusive set. By subtracting the exclusive set from the inclusive set, a result set is calculated that contains all values for which the entire logical expression is true.
-   The [comparison rules](ABENLOGEXP_RULES.html) are checked only at runtime and comparisons that are not allowed lead to exceptions.
-   The operator `IN` is, due to its implementation using [binary comparison operators](ABENLOGEXP_ANY_OPERAND.html), not suitable for selecting natural-language text content.

-   [Comparison with Ranges Table](ABENLOGEXP_IN_RANGES_ABEXA.html)

1.  The expressions of all lines that contain *I* in the column `sign` are combined using `OR`. If there are no lines that contain *E* in the column `sign`, this represents the entire logical expression.
2.  The expressions of all lines that contain *E* in the column `sign` are combined using `OR` and then negated using `NOT`. If there are no lines that contain *I* in the column `sign`, this represents the entire logical expression.
3.  If the content *I* and the content *E* are both in the column `sign`, `AND` is used to combine the logical expression that is produced by step 1 with the logical expression from step 2

DATA range\_tab TYPE RANGE OF scarr-carrid. \\n\\ \\nSELECT 'I' AS sign, 'EQ' AS option, carrid AS low \\n FROM scarr \\n INTO TABLE @range\_tab. \\n\\ \\nDATA carrid TYPE scarr-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\ncl\_demo\_output=>display( \\n COND #( WHEN to\_upper( carrid ) IN range\_tab THEN \`Yes!\` \\n ELSE \`No!\` ) ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_compare\_all.html