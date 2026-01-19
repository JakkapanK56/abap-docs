---
title: "ABENCDS_SEARCHED_CASE_EXPR_V1"
description: |
  ABENCDS_SEARCHED_CASE_EXPR_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SEARCHED_CASE_EXPR_V1.htm"
abapFile: "ABENCDS_SEARCHED_CASE_EXPR_V1.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "SEARCHED", "CASE", "EXPR"]
---

``... CASE WHEN [`cds_cond1`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) THEN result1          [WHEN [`cds_cond2`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) THEN result2]\          [WHEN [`cds_cond3`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) THEN result3]\            ...          [ELSE resultn]\      END ...``

Complex [case distinction](ABENCDS_CASE_EXPRESSION_V1.html) (searched case) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The case distinction evaluates the conditions [`cds_cond1`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html), [`cds_cond2`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html), ... and returns the operand `result` as the result after the first `THEN` for which the condition is true. If none of the conditions are true, the `result` specified after `ELSE` is selected. If `ELSE` is not specified, the result is the [null value](ABENNULL_VALUE_GLOSRY.html). For the operands, [general](ABENCDS_COND_EXPR_OPERANDS_V1.html) and [special rules](ABENCDS_COND_EXPR_CASE_V1.html) apply when specifying the conditions. The same applies to `result1`, `result2`, ... as to [simple case distinction](ABENCDS_SIMPLE_CASE_EXPRESSION_V1.html).

The following CDS view has a complex case distinction in the `SELECT` list.

The class `CL_DEMO_CDS_SEARCHED_CASE` uses [`SELECT`](ABAPSELECT.html) to access the view and shows the result.

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SCASE'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_searched\_case\\n as select from\\n spfli\\n \\{\\n key carrid,\\n key connid,\\n distance,\\n distid,\\n case\\n when distance >= 2000 then 'long-haul flight'\\n when distance >= 1000 and\\n distance < 2000 then 'medium-haul flight'\\n when distance < 1000 then 'short-haul flight'\\n else 'error'\\n end as flight\_type\\n \\}\\n where\\n distid = 'MI'\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_case\_expression\_v1.html