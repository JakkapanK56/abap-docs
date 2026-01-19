---
title: "No KTD found"
description: |
  Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `EnterpriseSearch.filteringFacet.order.direction` Scope `#ELEMENT` Type `String(4)` Enums `#ASC, #DESC` Default `-` Text `-` MDE `X` API `RELEASED_FOR_KEY_USER_APPS, REL
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_328055812_ANNO.htm"
abapFile: "ABENCDS_328055812_ANNO.html"
keywords: ["select", "do", "if", "case", "ABENCDS", "328055812", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

Based on the value distribution of a view field, a more specific search is enabled.

The usage of this CDS annotation is optional. You may define a CDS-based Search Model without this CDS annotation.

**Use Case**

In the “Filter By” section of the Fiori Launchpad Search UI, different values of the view field are displayed with the number of search hits that contain the respective value (the values displayed are called filter values). By selecting one or more filter values, you can restrict the current list of search result items to the respective hits (for multiple selected filter values, the filter values are connected using “or”). If, for example, the view field “locationOfBuilding” is annotated accordingly, the following (selectable) filter values may be provided in the “Filter By” section: Walldorf (326), Bangalore (102), New York (57), Berlin (32), Tokyo (27) – saying that the list of search result items contains 326 buildings located in Walldorf, 102 buildings located in Bangalore, 57 buildings located in New York and so on. By selecting the filter values “Walldorf” and “New York”, you can restrict the current list of search result items to buildings that are located in Walldorf or New York.

The subannotation default defines, that the view field (along with its filter values) is displayed by default in the “Filter By” section (in case the “Filter By” section is not hidden). The subannotation displayPosition defines the position at which the view field (along with its filter values) is displayed in the “Filter By” section. The subannotation numberOfValues defines how many different filter values are displayed for the view field (maximum). If you omit the subannotation numberOfValues, the system typically displays a maximum of five filter values. However, it may make sense to display more than five filter values.

Define how the filter values are sorted.

The natural order (which is applied if this annotation is not there) for character-like content is descending by hit count per filter value.

No KTD found

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.filteringFacet.order.direction`\\ **Scope** `#ELEMENT`\\ **Type** `String(4)`\\ **Enums** `#ASC, #DESC`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_enterprisesearch\_f.html