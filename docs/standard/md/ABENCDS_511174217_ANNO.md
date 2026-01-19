---
title: "No KTD found"
description: |
  SADL Sets the OData annotation for filterable or non-filterable elements according to the annotation value true or false. The annotation overrules element default settings regarding filter enablement for the element. If the annotated CDS view is exposed in an OData service, the non-filterable proper
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_511174217_ANNO.htm"
abapFile: "ABENCDS_511174217_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "511174217", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

No KTD found

SADL

Sets the OData annotation for filterable or non-filterable elements according to the annotation value true or false.

The annotation overrules element default settings regarding filter enablement for the element.

If the annotated CDS view is exposed in an OData service, the non-filterable properties are marked with an OData annotation in the OData metadata. The default of being filterable is not shown in the metadata.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.filter.enabled`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_objectmodel\_f.html