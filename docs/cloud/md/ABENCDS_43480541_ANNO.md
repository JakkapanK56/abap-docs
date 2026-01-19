---
title: "ABENCDS_43480541_ANNO"
description: |
  ABENCDS_43480541_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_43480541_ANNO.htm"
abapFile: "ABENCDS_43480541_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "43480541", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

Contains an ordered collection of abstract DataFields that describes the status of an entity identified by HeaderInfo and Identification.

UI.statusInfo annotations are usually used in the header section of an item's object view floorplan.

array of

SADL: Translates CDS annotations into the corresponding OData annotations

This annotation is used to display a button, if the user selects one or more lineitems. Buttons used for external navigation are displayed only if the navigation target is supported on the current device.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.statusInfo[ ].requiresContext`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`