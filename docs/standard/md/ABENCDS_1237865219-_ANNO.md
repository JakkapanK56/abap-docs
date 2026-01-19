---
title: "Array of elementRef"
description: |
  You can specify a reference characteristic -   SADL/ Query Runtime Framework / Orchestration Framework -   Analytical Engine -   SADL/ Query Runtime Framework / Orchestration Framework -   Analytical Engine Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `Agg
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1237865219-_ANNO.htm"
abapFile: "ABENCDS_1237865219-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1237865219", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Aggregation Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/907bb293348045a9914db195c9af9dfa?version=sap_cross_product_abap).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

This annotation references the element that is used for distinct counts.

In Query scenarios this element can only be used in combination with the annotation `@Aggregation.Default: #COUNT_DISCTINCT`.

*Analytical Engine*

This annotation references the element that is used for the exception. In views of dataCategory: #CUBE or #DIMENSION you can use exactly one element. In analytic queries (Analytics.query: true) you can use up to five elements. The elements in the list cannot be measures.

**Evaluation Runtime**

Array of elementRef

You can specify a reference characteristic

-   SADL/ Query Runtime Framework / Orchestration Framework
-   Analytical Engine

-   SADL/ Query Runtime Framework / Orchestration Framework
-   Analytical Engine

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Aggregation.referenceElement[ ]`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_aggregation\_f.html