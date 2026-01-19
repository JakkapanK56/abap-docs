---
title: "ABENCDS_HAVING_CLAUSE_V1"
description: |
  ABENCDS_HAVING_CLAUSE_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_HAVING_CLAUSE_V1.htm"
abapFile: "ABENCDS_HAVING_CLAUSE_V1.html"
keywords: ["select", "do", "if", "ABENCDS", "HAVING", "CLAUSE"]
---

``... HAVING [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) ...``

Defines a `HAVING` condition for the result set of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) after a [`GROUP BY` clause](ABENCDS_GROUP_BY_V1.html) is evaluated. A `HAVING` condition can only be specified together with `GROUP BY`. For the operands, [general](ABENCDS_COND_EXPR_OPERANDS_V1.html) and [special rules](ABENCDS_COND_EXPR_HAVING_V1.html) apply when specifying the condition.

Removes all rows from the result set that do not meet the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) specified after `HAVING`.

[Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) can be specified in the `HAVING` condition, which is not possible in the [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V1.html).

When accessed, the CDS view `sales_order` returns the number of business partners for each business partner role in which the total gross amount in euros is greater than `100000.00`.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW' \\ndefine view sales\_order as \\n select from snwd\_so \\n inner join \\n snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key \\n \\{ key bp\_role as role, //e.g. customer or supplier \\n count(distinct buyer\_guid) as partners\_count, \\n sum(snwd\_so.gross\_amount) as sum\_gross\_amount \\} \\n where snwd\_so.currency\_code = 'EUR' \\n group by bp\_role \\n having sum(snwd\_so.gross\_amount) > 100000.00; abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_clauses\_v1.html