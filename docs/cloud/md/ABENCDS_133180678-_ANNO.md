---
title: "This type of graph has two dimensions for x- and y-axis, one measure mapped into a color code"
description: |
  This annotation specifies the type of graphical representation as a tree map chart. This type of graph has one or more hierarchical dimensions, one measure for the rectangle size, optional second measure mapped into color code. This annotation specifies the type of graphical representation as a wate
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_133180678-_ANNO.htm"
abapFile: "ABENCDS_133180678-_ANNO.html"
keywords: ["do", "if", "case", "data", "types", "ABENCDS", "133180678", "ANNO"]
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

This annotation specifies the type of graphical representation most appropriate for the data in the annotated view or entity.

You want to display specific types of charts.

This annotation specifies the type of graphical representation as a column chart. This type of graph presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

This annotation specifies the type of graphical representation as a column chart. This type of graph presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. These values are stacked.

This annotation specifies the type of graphical representation as a 100% stacked column chart. This type of graph presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

This annotation specifies the type of graphical representation as a bar chart. This type of graph presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

This annotation specifies the type of graphical representation as a bar chart. This type of graph presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. These values are stacked.

This annotation specifies the type of graphical representation as a 100% stacked bar chart. This type of graph presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

This annotation specifies the type of graphical representation as an area chart. This type of graph presents graphically quantitive data emphasized through colors, textures and hatchings.

This annotation specifies the type of graphical representation as an stacked area chart. This type of graph presents graphically quantitive data emphasized through colors, textures and hatchings.

This annotation specifies the type of graphical representation as an 100% stacked area chart. This type of graph presents graphically quantitive data emphasized through colors, textures and hatchings.

This annotation represents one dimension on the y-axis, and one or more measures on the x-axis ("horizontal bar").

This annotation represents one dimension on the y-axis, and one or more measures on the x-axis ("horizontal bar"). The values within are stacked.

This annotation represents one dimension on the y-axis, and one or more measures on the x-axis ("horizontal bar"). The values within are 100% stacked.

This annotation specifies the type of graphical representation as a line chart. This type of graph presents a series of data points connected by straight line segments.

This annotation specifies the type of graphical representation as a pie chart. This type of graph presents data in a circular statistical graphic which is divided into slices demonstrating its numerical proportions.

This annotation specifies the type of graphical representation as a donut chart. The visualization is similar to a pie chart, with an empty middle section.

This annotation specifies the type of graphical representation as a scatter chart.

This type of graph has one dimension for x-axis, one measure for y-axis. Data is displayed as a collection of points, having the value of one variable determining the position on the horizontal axis and another determining the position on the vertical axis.

This annotation specifies the type of graphical representation as a bubble chart.

This type of graph displays three dimensions of data.

This annotation specifies the type of graphical representation as a radar chart.

This type of graph has three or more dimensions for the axes of the spider web.

This annotation specifies the type of graphical representation as a heat map chart.

This type of graph has two dimensions for x- and y-axis, one measure mapped into a color code

This annotation specifies the type of graphical representation as a tree map chart.

This type of graph has one or more hierarchical dimensions, one measure for the rectangle size, optional second measure mapped into color code.

This annotation specifies the type of graphical representation as a waterfall chart.

This type of graph has one dimension for x-axis, one measure for y-axis.

This annotation specifies the type of graphical representation as a bullet chart.

This type of graph has one dimension for x-axis, one measure for y-axis. It is a variation of the bar graph.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.chart[ ].chartType`\\ **Scope** `#ENTITY`\\ **Type** `String(40)`\\ **Enums** `#AREA, #AREA_STACKED, #AREA_STACKED_100, #BAR, #BAR_DUAL, #BAR_STACKED, #BAR_STACKED_100, #BAR_STACKED_DUAL, #BAR_STACKED_DUAL_100, #BUBBLE, #BULLET, #COLUMN, #COLUMN_DUAL, #COLUMN_STACKED, #COLUMN_STACKED_100, #COLUMN_STACKED_DUAL, #COLUMN_STACKED_DUAL_100, #COMBINATION, #COMBINATION_DUAL, #COMBINATION_STACKED, #COMBINATION_STACKED_DUAL, #DONUT, #DONUT_100, #HEAT_MAP, #HORIZONTAL_AREA, #HORIZONTAL_AREA_STACKED, #HORIZONTAL_AREA_STACKED_100, #HORIZONTAL_COMBINATION_DUAL, #HORIZONTAL_COMBINATION_STACKED, #HORIZONTAL_COMBINATION_STACKED_DUAL, #HORIZONTAL_WATERFALL, #LINE, #LINE_DUAL, #PIE, #RADAR, #SCATTER, #TREE_MAP, #VERTICAL_BULLET, #WATERFALL`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`