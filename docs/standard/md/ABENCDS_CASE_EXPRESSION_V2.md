---
title: "ABENCDS_CASE_EXPRESSION_V2"
description: |
  ABENCDS_CASE_EXPRESSION_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CASE_EXPRESSION_V2.htm"
abapFile: "ABENCDS_CASE_EXPRESSION_V2.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "CASE", "EXPRESSION"]
---

1\. `... CASE operand WHEN operand1 THEN result1 [WHEN operand2 THEN result2]\ ... [\{ELSE resultn | ELSE NULL\}]\ END ...`

2\. `... CASE WHEN cds_cond1 THEN result1 [WHEN cds_cond2 THEN result2]\ [WHEN cds_cond3 THEN result3]\ ... [\{ELSE resultn | ELSE NULL\}]\ END ...`

Case distinction in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). Either a [simple case distinction](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html) (simple case) or a [complex case distinction](ABENCDS_SEARCHED_CASE_EXPR_V2.html) (searched case).

Case distinctions can be specified in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) and in operand positions of other expressions.

The following rules apply to simple and complex case distinctions regarding the handling of semantic information from [CDS simple types](ABENCDS_SIMPLE_TYPE_GLOSRY.html) or [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html):

[Simple Case Distinction](ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html)

[Complex Case Distinction](ABENCDS_SEARCHED_CASE_EXPR_V2.html)

-   The maximum technical data type of all `THEN` and `ELSE` branches is determined.
-   The semantic information is determined as follows:

-   If none of the `THEN` or `ELSE` branches has the maximum technical data type, the result has the maximum technical data type and no semantic information.
-   If all `THEN` or `ELSE` branches that have the maximum technical data type also have the same semantic information (simple type or data element), the result has the maximum technical data type and the semantic information. Otherwise (i.e. different semantic information) the result has no semantic information.

-   When migrating a [CDS DDIC -based view](ABENCDS_V1_VIEW_GLOSRY.html) to a view entity, there may be an implicit behavior change in the derivation of semantic information from a DDIC data element or a CDS simple type, since there is a different logic for deriving semantic information. A different or no data element may be used for the CDS element resulting from a `CASE` expression. To prevent a behavior change, the element in question can be cast to a data element or simple type with the addition `PRESERVING TYPE`. For example:
-   `... CAST ( my_element AS simple_type PRESERVING TYPE ) ...`
-   Nested `CASE` expressions are evaluated from inner to outer.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html