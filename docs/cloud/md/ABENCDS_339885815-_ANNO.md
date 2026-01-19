---
title: "This annotation specifies what hierarchy type is used"
description: |
  different values determine which CDS elements are required or available. maps to DataFieldForAnnotation label element is available value element is available maps to DataFieldForAnnotation label element is available value element is available valueQualifier element is available maps to DataFieldForA
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_339885815-_ANNO.htm"
abapFile: "ABENCDS_339885815-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "339885815", "ANNO"]
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

This annotation specifies what hierarchy type is used

different values determine which CDS elements are required or available.

maps to DataFieldForAnnotation

label element is available

value element is available

maps to DataFieldForAnnotation

label element is available

value element is available

valueQualifier element is available

maps to DataFieldForAnnotation

label element is available

value element is available

maps to DataFieldForAnnotation

label element is available

value element is available

maps to DataFieldForAction

label element is available

dataAction element is required

invocationGrouping element is available.

maps to DataFieldForIntentBasedNavigation

label element is available

semanticObjectAction element is required.

This maps to DataField

label element is available (i.e. it is optional and may be specified)

value element is available.

maps to DataFieldForIntentBasedNavigation

label element is available

semanticObjectAction element is required.

value element is available

maps to DataFieldWithNavigationPath

label element is available

value element is available

targetElement element is required

maps to DataFieldWithURL

label element is available

value element is available

url element is required

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.statusInfo[ ].type`\\ **Scope** `#ELEMENT`\\ **Type** `String(40)`\\ **Enums** `#AS_ADDRESS, #AS_CHART, #AS_CONNECTED_FIELDS, #AS_CONTACT, #AS_DATAPOINT, #AS_FIELDGROUP, #AS_PRESENTATION_VARIANT, #AS_SELECTION_PRESENTATION_VARIANT, #FOR_ACTION, #FOR_ACTION_GROUP, #FOR_INTENT_BASED_NAVIGATION, #STANDARD, #WITH_ACTION, #WITH_ACTION_GROUP, #WITH_INTENT_BASED_NAVIGATION, #WITH_NAVIGATION_PATH, #WITH_URL`\\ **Default** `#STANDARD`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`