---
title: "ABENCDS_311394813_ANNO"
description: |
  ABENCDS_311394813_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_311394813_ANNO.htm"
abapFile: "ABENCDS_311394813_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "311394813", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

You can use this annotation to define and add a rating indicator (stars) to the object page header. The property where the datapoint is defined determines the number of visible stars. Values between x.25 and x.74 are displayed as a half star. The attribute targetValue defines how many stars are possible.

Note: the qualifier needs to match the property name.

You want to rate the quality of a product.

<a href="https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#data-points">https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#data-points</a>

This annotation specifies the displayed format of the value.

All UI.dataPoint.valueFormat annotations are optional. For more information about value formats, see [Person Responsible and Reference Period](https://help.sap.com/viewer/DRAFT/cc0c305d2fab47bd808adcad3ca7ee9d/201909.000/en-US/a68d63bd2e2842e6b11e606cfcfff320.html).

This annotation contains the number of fractional digits to be displayed.

If the element value is 1, one decimal place is rendered, for example, 34.5.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.dataPoint.valueFormat.numberOfFractionalDigits`\\ **Scope** `#ELEMENT`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_ui\_f.html