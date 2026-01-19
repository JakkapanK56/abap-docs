---
title: "No KTD found"
description: |
  Runtime Defines the associated view, which provides textual descriptions for the annotated field. SADL - Enriches the OData entity type of the view with the textual description of the target view applying an automated language filtering. The name of the auto-generated text property will be composed
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_155024245-_ANNO.htm"
abapFile: "ABENCDS_155024245-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "155024245", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

No KTD found

Runtime

Defines the associated view, which provides textual descriptions for the annotated field.

SADL - Enriches the OData entity type of the view with the textual description of the target view applying an automated language filtering. The name of the auto-generated text property will be composed out of the annotated field name and the constant suffix \_Text. This OData property is mapped onto the first text field of the associated target CDS view annotated with @Semantics.text:true.

Analytic Manager - Uses the associated view as TEXT view for annotated field.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.text.association`\\ **Scope** `#ELEMENT`\\ **Type** `AssociationRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_objectmodel\_f.html