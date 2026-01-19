---
title: "No KTD found"
description: |
  No KTD found This annotation defines what can be shown in the title of a table or list. UI.badge.headLine represent a property of type UI.DataFieldAbstract restricted to the types STANDARD, WITH_NAVIGATION_PATH, and WITH_URL. The OData annotations DataFieldAbstract are the basis for all DataField
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1676199671_ANNO.htm"
abapFile: "ABENCDS_1676199671_ANNO.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "1676199671", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

No KTD found

No KTD found

This annotation defines what can be shown in the title of a table or list.

UI.badge.headLine represent a property of type UI.DataFieldAbstract restricted to the types STANDARD, WITH\_NAVIGATION\_PATH, and WITH\_URL.

The OData annotations DataFieldAbstract are the basis for all DataField types and represent values with optional labels that can trigger navigation to related data, or execute actions on data.

choose STANDARD, if you want to use the elements:

(can use) label

(can use) value

(can use) criticality

choose WITH\_NAVIGATION\_PATH, if you want to use the elements:

(can use) label

(can use) value

(must use) targetElement

choose WITH\_URL, if you want to use the elements:

(can use) label

(can use) value

(must use) url

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.badge.headLine.type`\\ **Scope** `#ENTITY`\\ **Type** `String(40)`\\ **Enums** `#STANDARD, #WITH_INTENT_BASED_NAVIGATION, #WITH_NAVIGATION_PATH, #WITH_URL`\\ **Default** `#STANDARD`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`