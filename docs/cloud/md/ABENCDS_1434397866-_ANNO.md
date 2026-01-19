---
title: "ABENCDS_1434397866-_ANNO"
description: |
  ABENCDS_1434397866-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1434397866-_ANNO.htm"
abapFile: "ABENCDS_1434397866-_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "1434397866", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

Marks a field to be used for navigation if a field is annotated to be a standard response field.

The type of navigation is specified by the respective subannotation.

**Short Description**

Enable intent-based navigation on field level.

The usage of this CDS annotation is optional. You may define a CDS-based Search Model without this CDS annotation.

**Use Case**

If a view field has been marked as a standard response field and additionally this view field has been enabled for intent-based navigation, the field is treated as a link. In this case, the content of the view field is displayed by default as part of the search result item, and you can navigate further based on the semantic object by clicking the displayed field content.

In addition, the CDS View Entity itself must have a semantic object name. To do this, annotate the CDS View Entity with @Consumption.semanticObject. As another prerequisite, via the SAP Fiori Launchpad Designer a catalog with target mappings has to be created. (Intent-based navigation is a concept of SAP Fiori. An intent is a combination of a semantic object and an action.)

If you do not have access to the SAP Fiori Launchpad Designer app, you cannot use intent-based navigation for your CDS-based Search Model. In this case, you should not use the annotation described here.

Contains the name of the semantic object that is used for intent-based navigation.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.navigation.intentBased.semanticObject`\\ **Scope** `#ELEMENT`\\ **Type** `String(120)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`