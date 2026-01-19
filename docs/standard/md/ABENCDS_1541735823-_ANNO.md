---
title: "ABENCDS_1541735823-_ANNO"
description: |
  ABENCDS_1541735823-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1541735823-_ANNO.htm"
abapFile: "ABENCDS_1541735823-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1541735823", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Specifies query settings.

This annotation can be used to combine two SQL queries coming from the same Fiori list report to one. You can mark a managed query to retrieve both data and count together.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.query.combinedCountAndDataRetrievalEnabled`\\ **Scope** `#CUSTOM_ENTITY`, `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_objectmodel\_f.html