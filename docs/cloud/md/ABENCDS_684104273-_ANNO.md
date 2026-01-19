---
title: "ABENCDS_684104273-_ANNO"
description: |
  ABENCDS_684104273-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_684104273-_ANNO.htm"
abapFile: "ABENCDS_684104273-_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "684104273", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`ObjectModel Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/4ddaeef7ad6e4c8899bc74fc5aadd2c0?version=sap_cross_product_abap).

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

This annotations indicates whether or not the UI use case is supported. If supported, then either the creation of UI projections or alternatively the direct consumption in an UI service binding is possible. Otherwise, warnings or errors occur indicating that the UI usage is not supported and might lead to unexpected errors.

\- A secondary object handler must check the suitability of the CDS entity for usage in UI services and will add according messages to the activation log. The list of checks must be aligned.

\- As the secondary object handler cannot block the activation, an ATC check is required.

[Business Objects](https://help.sap.com/docs/abap-cloud/abap-rap/business-object?version=sap_btp&q=Business%20Object)

[Consume](https://help.sap.com/docs/abap-cloud/abap-rap/consume?version=sap_btp&q=Business%2520Object)

[RAP Extensions](https://help.sap.com/docs/abap-cloud/abap-rap/rap-extensions?version=sap_btp&q=Release)

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.supportedCapabilities[ ]`\\ **Scope** `#ENTITY`\\ **Type** `String(60)`\\ **Enums** `#ANALYTICAL_DIMENSION, #ANALYTICAL_DOCUMENT_STORE, #ANALYTICAL_KPI,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE, #ANALYTICAL_PROVIDER, #ANALYTICAL_QUERY, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #COLLECTIVE_VALUE_HELP, #DATA_STRUCTURE, #DERIVATION_FUNCTION, #ENTERPRISE_SEARCH_PROVIDER, #EXTERNAL_DATA_PROVIDER, #EXTRACTION_DATA_SOURCE, #KEY_USER_COPYING_TEMPLATE, #LANGUAGE_DEPENDENT_TEXT, #ODM_COMPLIANT_PROVIDER, #OUTPUT_EMAIL_DATA_PROVIDER, #OUTPUT_FORM_DATA_PROVIDER, #OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE, #PARENT_CHILD_HIERARCHY_NODE_PROVIDER, #SEARCHABLE_ENTITY, #SITUATION_ANCHOR, #SITUATION_DATACONTEXT, #SITUATION_TRIGGER, #SQL_DATA_SOURCE, #TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE, #UNIT_CONVERION_RATE, #VALUE_HELP_PROVIDER`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`