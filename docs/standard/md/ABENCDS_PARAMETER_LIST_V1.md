---
title: "ABENCDS_PARAMETER_LIST_V1"
description: |
  ABENCDS_PARAMETER_LIST_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PARAMETER_LIST_V1.htm"
abapFile: "ABENCDS_PARAMETER_LIST_V1.html"
keywords: ["select", "case", "try", "class", "data", "ABENCDS", "PARAMETER", "LIST"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in a comma-separated list.

An input parameter called `pname` can be used as an operand in the following places in the [`SELECT`](ABENCDS_SELECT_STATEMENT_V1.html) statement of the view using the syntax [`:pname`](ABENCDS_PARAMETER_V1.html) or [`$parameters.pname`](ABENCDS_PARAMETER_V1.html):

The following CDS view has a list of three input parameters used in the [`WHERE` clause](ABENCDS_WHERE_CLAUSE_V1.html) of the `SELECT` statement. The ABAP class `CL_DEMO_CDS_PARAMETERS` accesses the view and assigns actual parameters to the input parameters.

-   [Element](ABENCDS_SELECT_LIST_ENTRY_V1.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html)
-   Operand of an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V1.html)
-   Operand `operand` directly after `case` in a [case distinction](ABENCDS_CASE_EXPRESSION_V1.html)
-   [Right side](ABENCDS_COND_EXPR_WHERE_V1.html) of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V1.html) clause or [`HAVING` clause](ABENCDS_HAVING_CLAUSE_V1.html)
-   [Right side](ABENCDS_COND_EXPR_WHERE_V1.html) of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in an `ON` condition in an [ABAP join](ABENCDS_JOINED_DATA_SOURCE_V1.html) or a [CDS association](ABENCDS_ASSOCIATION_V1.html)
-   [Right side](ABENCDS_COND_EXPR_WHERE_V1.html) of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V1.html)
-   [Right side](ABENCDS_COND_EXPR_WHERE_V1.html) of an expression [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in the [default filter condition](ABENCDS_ASSOCIATION_V1.html) of a [CDS association](ABENCDS_ASSOCIATION_V1.html)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@Metadata.allowExtensions\\n@EndUserText.label: 'Demo für Parameter-View'\\ndefine view entity demo\_cds\_parameters\\n with parameters\\n p\_distance\_l :s\_distance,\\n p\_distance\_u :s\_distance,\\n p\_unit :s\_distid\\n as select from spfli\\n\\{\\n key carrid,\\n key connid,\\n cityfrom,\\n cityto,\\n distance,\\n distid\\n\\}\\nwhere\\n distid = $parameters.p\_unit\\n and distance between $parameters.p\_distance\_l and $parameters.p\_distance\_u;\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html