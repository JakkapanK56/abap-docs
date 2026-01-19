---
title: "Note"
description: |
  If you want to use Aggregation.exception, you have to define Aggregation.default (not equal to NONE) and Aggregation.referenceElement in order to define the granularity with which the aggregation rule is applied. The following values determine the aggregation of teh measure in the same way as in Agg
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1540548770_ANNO.htm"
abapFile: "ABENCDS_1540548770_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1540548770", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Aggregation Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

*not evaluated by SADL*

*Analytical Engine*:

Exception aggregation is always performed in addition to default aggregation, which must not be be equal to #NONE. This is not an alternative to default aggregation. This means that data is first aggregated through the default aggregation grouped by the reference elements, and then aggregated with the exception aggregation.

Note

If you want to use Aggregation.exception, you have to define Aggregation.default (not equal to NONE) and Aggregation.referenceElement in order to define the granularity with which the aggregation rule is applied.

The following values determine the aggregation of teh measure in the same way as in Aggregation.default

*Analytical Engine*

This value determines the aggregation of the measure in the same way as SUM, MAX, MIN, AVG, COUNT, COUNT\_DISTINCT in Aggregation.default.

*Analytical Engine*

This value determines the aggregation of the measure in the same way as SUM, MAX, MIN, AVG, COUNT, COUNT\_DISTINCT in Aggregation.default.

*Analytical Engine*

This value determines the aggregation of the measure in the same way as SUM, MAX, MIN, AVG, COUNT, COUNT\_DISTINCT in Aggregation.default.

*Analytical Engine*

This value determines the aggregation of the measure in the same way as SUM, MAX, MIN, AVG, COUNT, COUNT\_DISTINCT in Aggregation.default.

*Analytical Engine*

This value determines the aggregation of the measure in the same way as SUM, MAX, MIN, AVG, COUNT, COUNT\_DISTINCT in Aggregation.default.

*Analytical Engine*

This value determines the aggregation of the measure in the same way as SUM, MAX, MIN, AVG, COUNT, COUNT\_DISTINCT in Aggregation.default.

*Analytical Engine*

This value indicates that the first value in relation to the reference characteristic is shown in the result line.

*Analytical Engine*

This value indicates that the last value in relation to the reference characteristic is shown in the result line.

*Analytical Engine*

This value indicates that, after aggregating with the reference characteristic, the standard deviation of the calculated values is shown in the results row.

*Analytical Engine*

This value indicates that, after aggregating with the reference characteristic, the variance of the calculated values is shown in the results row.

*Analytical Engine*

This value indicates that the middle value (central value) of a set sorted in ascending order is calculated:

For a set with an uneven number of elements, the result is the middle value.

Example 1:

For a set of five elements, the result is the value of the third element. Suppose you have the following values: 1, 12, 2, 4, 24. When the values are sorted in ascending order (1, 2, 4, 12, 24), the median is the third middle value, which is 4.

For a set with an even number of elements, the result is the average of the two middle values.

Example 2:

For a set of six elements, the result is the average of the third and fourth elements. Suppose you have the following values: 1, 12, 2, 4, 24, 6. When the values are sorted in ascending order (1, 2, 4, 6, 12, 24), the median is the average of the values 4 and 6, which is 5.

*Analytical Engine*

No aggregation along the hierarchy. This value ensures that nodes with a postable value part, and which only aggregate the values of their children, are calculated as NULL. This means they have no value if they are not postable nodes.

-   SUM
-   MAX
-   MIN
-   AVG
-   COUNT
-   COUNT\_I

-   SUM
-   MAX
-   MIN
-   AVG
-   COUNT
-   COUNT\_I

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Aggregation.exception`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `#AVG, #COUNT, #COUNT_DISTINCT, #FIRST, #LAST, #MAX, #MEDIAN, #MIN, #NHA, #STANDARD_DEVIATION, #SUM, #VARIANCE`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`