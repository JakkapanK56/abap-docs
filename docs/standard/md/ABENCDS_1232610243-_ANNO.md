---
title: "ABENCDS_1232610243-_ANNO"
description: |
  ABENCDS_1232610243-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1232610243-_ANNO.htm"
abapFile: "ABENCDS_1232610243-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1232610243", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This is an annotation for a parameter. In core CDS a parameter represents a mandatory, single value variable at runtime. With this annotation a parameter becomes a variable which represents a hierarchy node, an interval or a range. It can also become optional or can represent multiple values. This is only supported in analytics. Analytical queries using this feature can't be published via OData.

This annotation specifies a default value for a hierarchy node filter. It has to be used in combination with selectionType #HIERARCHY\_NODE. A hierarchy node is seen as list of elements (structured type), which are the semantic elements in the corresponding view with ‘@ObjectModel.dataCategory: #HIERARCHY’. With sub annotation 'node', each part can be set to a constant separately. Element is referencing to the element in the hierarchy view.

This annotation defines a literal value for the reference element name. If the value of the field NodeType is initial, the value represents a leaf.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.variable.defaultHierarchyNode.nodeType`\\ **Scope** `#PARAMETER`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html