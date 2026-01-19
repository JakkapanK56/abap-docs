---
title: "No KTD found"
description: |
  This annotation enables Analytical Engine to read data from the data base with different detailed levels when a user runs an analytical CDS query. For example, when a CDS analytical query with active hierarchy is executed, data is retrieved at leaf level or at node level. This can impact the query p
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1374018734_ANNO.htm"
abapFile: "ABENCDS_1374018734_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1374018734", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

This annotation enables Analytical Engine to read data from the data base with different detailed levels when a user runs an analytical CDS query.

For example, when a CDS analytical query with active hierarchy is executed, data is retrieved at leaf level or at node level. This can impact the query performance in different navigation steps when a huge amount of data is selected. If the data is retrieved with all the details at leaf level and stored in the memory, the initial query result will take longer time, but open hierarchy nodes will be fast. If the data is retrieved at node level, the initial query result is faster, additional data is read from DB when expanding a hierarchy node. The annotation provides user the flexibility to choose a data retrieval mode which fits to the application requirement.

This annotation can be set in analytical Provider View ( Analytics.Datacategory #CUBE or Analytics.Datacategory #DIMENSION ) or analytical Query View ( Analytics.Query: true or Projection View with provider contract analytical query ). The setting in the query view overwrites the setting in the provider view. When it is not set in a CDS analytical query view, the setting in the CDS provider view takes effect.

Without this annotation, by default the dataRetrieval = #ON\_HIERARCHY\_DRILLDOWN.

When run a CDS analytical query, the data required for all possible navigation steps for this query is read in one go. When navigating further (add more drill down, expanding hierarchy, etc), all new navigation statuses are aggregated and calculated from the main memory data.

No further data is read from the data base .

This corresponds to ReadMode = A in Analytical Engine.

Note: @Analytics.settings.dataRetrieval: #ALL\_AT\_ONCE can't be used together with @Analytics.settings.olapPushdown: #MAX

When run a CDS analytical query, at the beginning only data for necessary fields for the initial query result are selected from DB. When a field has hierarchy active, all values for the whole hierarchy tree are selected. In this way, the query is open faster. Later if additional drill down is added, a new data read will be triggered.

This corresponds to ReadMode = X in Analytical Engine.

When run a CDS analytical query, at the beginning the smallest data necessary for initial query result are selected from DB. When a hierarchy is active on the field, only the aggregated value to the node level is read. Later when add a new drill down, or expand a hierarchy node, a new data read is triggered.

This corresponds to ReadMode = H in Analytical Engine.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.dataRetrieval`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(30)`\\ **Enums** `#ALL_AT_ONCE, #ON_HIERARCHY_DRILLDOWN, #ON_NAVIGATION`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`