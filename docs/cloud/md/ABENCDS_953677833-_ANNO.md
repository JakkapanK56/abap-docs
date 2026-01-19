---
title: "No KTD found"
description: |
  Runtime Sets the OData annotation for sortable or non-sortable properties according to the annotation value true or false. The annotation overrules element default settings regarding sorting enablement for the element. If the annotated CDS view is exposed in an OData service, the non-sortable proper
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_953677833-_ANNO.htm"
abapFile: "ABENCDS_953677833-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "953677833", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

No KTD found

Runtime

Sets the OData annotation for sortable or non-sortable properties according to the annotation value true or false.

The annotation overrules element default settings regarding sorting enablement for the element.

If the annotated CDS view is exposed in an OData service, the non-sortable properties are marked with an OData annotation in the OData metadata. The default of being sortable is not shown in the metadata.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.sort.enabled`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`