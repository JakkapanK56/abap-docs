---
title: "No KTD found"
description: |
  No KTD found This annotation is mandatory in the context of dynamic topics in the Advanced Event Mesh (AEM). It provides the exact position of the context attribute within the dynamic topic string to the Enterprise Event Enablement framework. The following annoations must always be used in combinati
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_123886785-_ANNO.htm"
abapFile: "ABENCDS_123886785-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "123886785", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Event Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41c9ebb8bc5a428d8332a8cd891e307f?version=sap_cross_product_abap).

No KTD found

No KTD found

This annotation is mandatory in the context of dynamic topics in the Advanced Event Mesh (AEM). It provides the exact position of the context attribute within the dynamic topic string to the Enterprise Event Enablement framework.

The following annoations must always be used in combination with this annotation for dynamic topics

-   Define the the order of the context attributes in events using integer values. Values must be greater than 0 and Every field must have its own individual value.

-   @event.context.attribute

-   Define the the order of the context attributes in events using integer values. Values must be greater than 0 and Every field must have its own individual value.

-   @event.context.attribute

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Event.context.position`\\ **Scope** `#ELEMENT`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`