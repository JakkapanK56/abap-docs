---
title: "ABENCDS_969786454-_ANNO"
description: |
  ABENCDS_969786454-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_969786454-_ANNO.htm"
abapFile: "ABENCDS_969786454-_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "969786454", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Semantic Key fields can be defined using the annotation @ObjectModel.semanticKey, which consists of an array of properties from the entity. The given fields will be displayed in bold and the editing status will be displayed.

[Handling Semantic Key Fields](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#handling-semantic-key-fields)

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.semanticKey[ ]`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`