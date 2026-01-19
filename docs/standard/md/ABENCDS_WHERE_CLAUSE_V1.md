---
title: "ABENCDS_WHERE_CLAUSE_V1"
description: |
  ABENCDS_WHERE_CLAUSE_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_WHERE_CLAUSE_V1.htm"
abapFile: "ABENCDS_WHERE_CLAUSE_V1.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "WHERE", "CLAUSE"]
---

``... WHERE [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) ...``

Defines a `WHERE` condition for the result set of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). When the CDS view is accessed, the result set contains only the data from the data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) that meets the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) specified after `WHERE`.

The fields evaluated in the condition do not need to be defined as elements of the CDS view in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html). For the operands, [general](ABENCDS_COND_EXPR_OPERANDS_V1.html) and [special rules](ABENCDS_COND_EXPR_WHERE_V1.html) apply when specifying the condition.

Unlike in the [`HAVING` condition](ABENCDS_HAVING_CLAUSE_V1.html), [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) cannot be specified in the `WHERE` condition.

When the CDS view `demo_sales_order_old4` is accessed, the result set contains only orders where the company name of the business partner starts with *S* and that were created between January and March 2013.

@AbapCatalog.sqlViewName: 'DEMO\_SO\_VW4'\\ndefine view DEMO\_SALES\_ORDER\_OLD4\\n as select from snwd\_so\\n association to snwd\_bpa as \_partner\\n on snwd\_so.buyer\_guid = \_partner.node\_key\\n\\{\\n key so\_id,\\n snwd\_so.buyer\_guid,\\n \_partner.company\_name,\\n snwd\_so.created\_at,\\n @Semantics.currencyCode\\n currency\_code,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n gross\_amount\\n\\}\\nwhere\\n \_partner.company\_name like 'S%'\\n and created\_at between 2013010100000.0\\n and 20130401000000.0; //Jan-March\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_clauses\_v1.html