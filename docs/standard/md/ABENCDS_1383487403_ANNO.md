---
title: "ABENCDS_1383487403_ANNO"
description: |
  ABENCDS_1383487403_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1383487403_ANNO.htm"
abapFile: "ABENCDS_1383487403_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "1383487403", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

Annotations belonging to UI.chart are used to show a visual representation of aggregated data.

Evaluation Runtime (Engine): SADL: Translates CDS annotations into the corresponding OData annotations

[Micro Chart Facet](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#micro-chart-facet)

This annotation defines an array of data fields of type *FOR\_ACTION* or *FOR\_INTENT\_BASED\_NOTIFICATION*.

This Annotation sets a human-readable and language dependent text as a label for the chart action.

You can use the @UI.chart.actions.label annotation to set a human readable label for the actions annotation. This can be used to ensure an easier interpretation of the functionality of the set action.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.chart[ ].actions[ ].label`\\ **Scope** `#ENTITY`\\ **Type** `String(60)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `X`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_ui\_f.html