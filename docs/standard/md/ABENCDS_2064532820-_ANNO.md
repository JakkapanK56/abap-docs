---
title: "No KTD found"
description: |
  The content of UI.badge.secondaryInfo annotations is subordinate to the content of the UI.badge.mainInfo annotations. This annotation represents a property of type UI.DataFieldAbstract restricted to the types STANDARD, WITH_NAVIGATION_PATH, and WITH_URL. The OData annotations DataFieldAbstr
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2064532820-_ANNO.htm"
abapFile: "ABENCDS_2064532820-_ANNO.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "2064532820", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

No KTD found

The content of UI.badge.secondaryInfo annotations is subordinate to the content of the UI.badge.mainInfo annotations. This annotation represents a property of type UI.DataFieldAbstract restricted to the types *STANDARD*, *WITH\_NAVIGATION\_PATH*, and *WITH\_URL*.

The OData annotations DataFieldAbstract are the basis for all DataField types and represent values with optional labels that can trigger navigation to related data, or execute actions on data.

This annotation represents the path to an element of an associated CDS view. The path is converted to an OData NavigationPropertyPath.

You want to link from the header part of an object view floorplan to a target element. You need to specify UI.badge.headLine.targetElement when you use the annotation UI.badge.headLine.type of type *WITH\_NAVIGATION\_PATH*. You might, for example, provide background information to an item that is opened on the object view floorplan.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.badge.secondaryInfo.targetElement`\\ **Scope** `#ENTITY`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_ui\_f.html