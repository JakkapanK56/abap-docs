---
title: "ABENCDS_CASE_EXPRESSION_V1"
description: |
  ABENCDS_CASE_EXPRESSION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CASE_EXPRESSION_V1.htm"
abapFile: "ABENCDS_CASE_EXPRESSION_V1.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "CASE", "EXPRESSION"]
---

1\. `... CASE operand WHEN operand1 THEN result1 [WHEN operand2 THEN result2]\ ... [ELSE resultn]\ END ...`

2\. `... CASE WHEN cds_cond1 THEN result1 [WHEN cds_cond2 THEN result2]\ [WHEN cds_cond3 THEN result3]\ ... [ELSE resultn]\ END ...`

Case distinction in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). Either a [simple case distinction](ABENCDS_SIMPLE_CASE_EXPRESSION_V1.html) (simple case) or a [complex case distinction](ABENCDS_SEARCHED_CASE_EXPR_V1.html) (searched case).

Case distinctions can be specified in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) and in operand positions of other expressions.

The following rules apply to simple and complex case distinctions regarding the handling of semantic information from [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html):

[Simple Case Distinction](ABENCDS_SIMPLE_CASE_EXPRESSION_V1.html)

[Complex Case Distinction](ABENCDS_SEARCHED_CASE_EXPR_V1.html)

-   The maximum technical data type of all branches (`CASE`, `THEN`, `ELSE`) is determined.
-   If there are several branches that have the maximum technical type, the data element of the last branch is inherited.
-   If the branches have different technical data types, the result has the maximum technical data type and no data element. Data elements are inherited only if the data type, length, and number of decimal places match between the different branches.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html