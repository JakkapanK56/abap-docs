---
title: "No KTD found"
description: |
  Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `Semantics.largeObject.cacheControl.maxAge` Scope `#ELEMENT` Type `String(30)` Enums `#LONG, #MEDIUM, #SHORT, #VERY_LONG` Default `-` Text `-` MDE `-` API `RELEASED_FOR_
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1095859513-_ANNO.htm"
abapFile: "ABENCDS_1095859513-_ANNO.html"
keywords: ["update", "do", "while", "if", "case", "data", "types", "ABENCDS", "1095859513", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Semantics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap).

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

You can enable your RAP application for maintaining large objects (LOBs). By doing so, you provide end users the option to incorporate external binary files or text files when editing entity instances. First the appropriate fields should be added into the database table and the CDS view, and also the annotations @Semantics.largeObject and @Semantics.mimeType. To show it in a table, you will need annotation @UI.lineItem. Lastly, you should also update the mapping and the draft table in your behaviour definition.

[Adding Large Object/Stream Property to a Table](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase/wiki/Feature-Showcase-App-Guide#adding-large-objectstream-property-to-a-table)

No KTD found

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.largeObject.cacheControl.maxAge`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `#LONG, #MEDIUM, #SHORT, #VERY_LONG`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_semantics\_f.html