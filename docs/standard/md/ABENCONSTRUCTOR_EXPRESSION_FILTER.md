---
title: "ABENCONSTRUCTOR_EXPRESSION_FILTER"
description: |
  ABENCONSTRUCTOR_EXPRESSION_FILTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPRESSION_FILTER.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_FILTER.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "method", "data", "internal-table", "ABENCONSTRUCTOR", "EXPRESSION", "FILTER"]
---

1\. `... FILTER type( itab [EXCEPT]\ [USING KEY [keyname](ABENKEYNAME.html)]\ WHERE c1 op \{op f1\}|\{IS [NOT] INITIAL\}\ [AND c2 op \{op f2\}|\{IS [NOT] INITIAL\}\ [...]] ) ...`

2\. `... FILTER type( itab [EXCEPT] IN ftab [USING KEY [keyname](ABENKEYNAME.html)]\ WHERE c1 op f1 [AND c2 op f2 [...]] ) ...`

[`... EXCEPT`](#ABAP_ONE_ADD@1@)

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the component operator `FILTER` creates a result of a table type specified using `type`. The lines are taken from an existing internal table `itab` in accordance with the condition after `WHERE`, converted to the line type of `type`, and inserted into the target table in accordance with the rules of `[INSERT](ABAPINSERT_ITAB.html) ... [INTO TABLE](ABAPINSERT_ITAB_POSITION.html)`. The order in which the lines are taken from `itab` depends on its [table category](ABENTABLE_CATEGORY_GLOSRY.html) and the addition `USING KEY` and is the same as for [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html).

The following can be specified for `type`:

`itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The line type of `itab` must be convertible to the line type of the target type `type`. `USING KEY` can or must be used to specify a table key for evaluating `itab` or `ftab`, depending on the variant.

If `EXCEPT` is not specified, those lines from `itab` are used that meet the `WHERE` condition. If `EXCEPT` is specified, those lines from `itab` are used that do not meet the `WHERE` condition.

The addition `EXCEPT` is not the same as a negation of the `WHERE` condition, particularly in the variant with a [filter table](ABENCONSTRUCTOR_EXPR_FILTER_TABLE.html).

Use of the addition `EXCEPT` in the [basic form](ABENCONSTRUCTOR_EXPR_FILTER_BASIC.html) of the `FILTER` operator. The constructed table contains messages of all languages except *D*.

[Basic Form](ABENCONSTRUCTOR_EXPR_FILTER_BASIC.html)

[Filter Table](ABENCONSTRUCTOR_EXPR_FILTER_TABLE.html)

-   In the [basic form](ABENCONSTRUCTOR_EXPR_FILTER_BASIC.html), the condition is created with single values.
-   When using a [filter table](ABENCONSTRUCTOR_EXPR_FILTER_TABLE.html), the condition is created with values from the filter table `ftab`.

-   A non-generic [table type](ABENTABLE_TYPE_GLOSRY.html).
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html). If the data type required in an operand position is not unique and not known completely, the type of `itab` is used if known.

-   Table filtering can also be performed using a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) or a [table reduction](ABENTABLE_REDUCTION_GLOSRY.html) with an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) for [table iterations](ABENTABLE_ITERATION_GLOSRY.html) with [`FOR`](ABENFOR_ITAB.html). The operator `FILTER` provides a shorter notation for this special case and is more efficient to execute.
-   A table filter constructs the result line by line. If the result contains almost all lines in the source table, this method can be slower than copying the source table and deleting the surplus lines from the target table.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl. \\nSELECT \* \\n FROM t100 \\n WHERE arbgb = 'SABAPDEMOS' \\n ORDER BY msgnr \\n INTO TABLE @messages. \\n\\ \\nout->write( \\n FILTER #( messages EXCEPT WHERE sprsl = 'D' ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html