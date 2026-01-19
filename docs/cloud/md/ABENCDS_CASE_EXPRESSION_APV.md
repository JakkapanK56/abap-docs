---
title: "ABENCDS_CASE_EXPRESSION_APV"
description: |
  ABENCDS_CASE_EXPRESSION_APV - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CASE_EXPRESSION_APV.htm"
abapFile: "ABENCDS_CASE_EXPRESSION_APV.html"
keywords: ["select", "if", "case", "ABENCDS", "CASE", "EXPRESSION", "APV"]
---

1\. `... CASE WHEN [cds_cond](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\ THEN result [ELSE NULL]\ END ...`

2\. `@Aggregation.default: #FORMULA CASE WHEN [cds_cond](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\ THEN result1 ELSE \{result2 | NULL\}\ END ...`

[Case distinction](ABENCASE_DISTINCTION_GLOSRY.html) in the [element list](ABENCDS_ELEMENT_LIST_APV.html) of an analytical query. Either a selection-related case expression (restricted measure) or a formula-related case expression.

The following CDS analytical projection view `DEMO_CDS_ANALYTIC_CASE` defines an analytical query. It is based on the cube view `DEMO_CDS_CUBE_VIEW`. The projection view defines one selection-related case expression and one formula-related case expression.

[Selection-Related Case Expression (Restricted Measure)](ABENCDS_SEL_CASE_EXPRESSION_APV.html)

[Formula-Related Case Expression](ABENCDS_FOR_CASE_EXPRESSION_APV.html)

-   In a selection-related case expression (restricted measure), the field in the `WHEN` clause must be an [analytical dimension field](ABENCDS_DIMENSION_GLOSRY.html).
-   In a formula-related case expression, the field in the `WHEN` clause must be an [analytical measure field](ABENCDS_MEASURE_GLOSRY.html).

@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine transient view entity DEMO\_CDS\_ANALYTIC\_CASE\\n provider contract analytical\_query\\n as projection on DEMO\_CDS\_CUBE\_VIEW\\n\\{\\n so\_key,\\n\\n currency\_sum,\\n\\n //selection-related case expression\\n @Semantics.amount.currencyCode: 'currency\_sum'\\n case when lifecycle\_status between 'A' and 'B'\\n then amount\_sum else null end as QuantityAB,\\n\\n ////formula-related case expression\\n @Aggregation.default: #FORMULA\\n // case\\n // when created\_on = $session.system\_date\\n // then abap.int8'200'\\n // else abap.int8'700'\\n // end as formula\_demo\\n\\n case\\n when amount\_sum is initial\\n then abap.int8'200'\\n else abap.int8'700'\\n end as formula\_demo\\n\\}\\nwhere\\n created\_on = $session.system\_date\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_analytical\_query\_apv.html abencds\_element\_list\_apv.html abencds\_element\_apv.html