---
title: "ABAPSELECT_ALLOW_PRECISION_LOSS"
description: |
  ABAPSELECT_ALLOW_PRECISION_LOSS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_ALLOW_PRECISION_LOSS.htm"
abapFile: "ABAPSELECT_ALLOW_PRECISION_LOSS.html"
keywords: ["select", "if", "ABAPSELECT", "ALLOW", "PRECISION", "LOSS"]
---

``... ALLOW_PRECISION_LOSS( [`SUM`](ABENSQL_AGG_FUNC.html)( [DISTINCT]\ [`sql_exp`](ABAPSQL_EXPR.html) ) )``

The `ALLOW_PRECISION_LOSS` statement can improve the performance of an [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html)\\ [`agg_exp`](ABAPSELECT_AGGREGATE.html) at the cost of accuracy of the result. This function should only be used on decimal values and when loss of precision is acceptable. Currently, [`SUM`](ABENSQL_AGG_FUNC.html) is the only supported aggregate expression.

A different result is not necessarily obtained when using the `ALLOW_PRECISION_LOSS` statement to sum up decimal values. A different result and simultaneous improvement in performance is only obtained during certain complex operations. One example is when operations are carried out in a different order to reduce the total number of operations. See the executable example below for further details.

[Aggregate function, allow precision loss](ABENSQL_EXPR_AGGR_PREC_LOSS_ABEXA.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_aggregate.html abensql\_agg\_func.html