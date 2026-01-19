---
title: "ABENCDS_PARAMETER_LIST_APV"
description: |
  ABENCDS_PARAMETER_LIST_APV - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PARAMETER_LIST_APV.htm"
abapFile: "ABENCDS_PARAMETER_LIST_APV.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "PARAMETER", "LIST", "APV"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of a [CDS analytical projection view](ABENCDS_ANALYTICAL_PV_GLOSRY.html) in a comma-separated list.

An input parameter called `pname` can be accessed using the syntax `$parameters.pname`.

It can be used as an operand in the following places in the [`element_list`](ABENCDS_ELEMENT_LIST_APV.html) of the projection view:

**Caution** Not more than one parameter can be annotated with *@Semantics.businessDate.At*, because the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html) currently supports only one temporal dependency.

How to pass values to input parameter is described in topic [CDS parameter passing](ABENCDS_SELECT_PARAMETERS_V2.html).

If the underlying [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html) requires parameters, you can pass them on using the following syntax:
`DEFINE TRANSIENT VIEW ENTITY analytical_query AS PROJECTION ON cds_entity ( parameter : $parameter.param )`

The following CDS analytical projection view `DEMO_CDS_ANALYTIC_PARAMETER` defines an analytical query with an input parameter. The input parameter is used for a currency conversion. The projection view is based on the cube view `DEMO_CDS_CUBE_VIEW`.

-   [Element](ABENCDS_ELEMENT_APV.html) in the [element list](ABENCDS_ELEMENT_LIST_APV.html). An [alias name](ABENALIAS_GLOSRY.html) is mandatory.
-   Operand of an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html). The parameter can have any of the numeric data types that are supported in arithmetic expressions (see [here](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)).
-   Operand of a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html).
-   Operand of a [case expression](ABENCDS_CASE_EXPRESSION_APV.html).
-   Operand of a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), as long as it has a suitable data type.
-   Operand of an expression `cds_cond` in a [`WHERE`](ABENCDS_WHERE_APV.html) clause.

@EndUserText.label: 'analytical pv, parameter'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_CDS\_ANALYTIC\_PARAMETER\\n provider contract analytical\_query\\n with parameters\\n p\_targetCurrency : abap.cuky\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n so\_key,\\n @Aggregation.default: #FORMULA\\n @Semantics.amount.currencyCode: 'targetCurrency'\\n currency\_conversion(\\n amount => amount\_sum,\\n source\_currency => currency\_sum,\\n target\_currency => $parameters.p\_targetCurrency,\\n exchange\_rate\_date => created\_on\\n ) as convertedAmount,\\n\\n @Aggregation.default: #FORMULA\\n $parameters.p\_targetCurrency as targetCurrency\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html