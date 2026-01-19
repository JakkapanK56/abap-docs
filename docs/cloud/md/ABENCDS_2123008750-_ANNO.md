---
title: "No KTD found"
description: |
  No KTD found Use this annotation in an abstract entity to define which fields are exposed in the cloud event envelope. Furthermore, it can be used to filter the events on a channel. The attribute name must follow these naming guidelines: You can use this annotation in combination with the following
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_2123008750-_ANNO.htm"
abapFile: "ABENCDS_2123008750-_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "2123008750", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Event Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap).

No KTD found

No KTD found

Use this annotation in an abstract entity to define which fields are exposed in the cloud event envelope. Furthermore, it can be used to filter the events on a channel. The attribute name must follow these naming guidelines:

You can use this annotation in combination with the following annotations for the same field:

-   It must have an *xsap* prefix.
-   It must not exceed 20 characters in length.
-   It should only include lowercase letters (a-z) or numbers (0-9).

-   @Semantics.amount.currencyCode
-   @Semantics.quantity.unitofmeasure

-   It must have an *xsap* prefix.
-   It must not exceed 20 characters in length.
-   It should only include lowercase letters (a-z) or numbers (0-9).

-   @Semantics.amount.currencyCode
-   @Semantics.quantity.unitofmeasure

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Event.context.attribute`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`