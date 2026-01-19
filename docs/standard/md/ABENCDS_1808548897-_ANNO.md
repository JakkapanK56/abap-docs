---
title: "ABENCDS_1808548897-_ANNO"
description: |
  ABENCDS_1808548897-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1808548897-_ANNO.htm"
abapFile: "ABENCDS_1808548897-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1808548897", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

This annotation can be used to enable Enterprise Search for Natural Language Search (NLS) based on GenAI technology. The information is needed to generate the required GenAI prompts.

The @EntepriseSearch.nls CDS annotations are used to enrich CDS-based Search Models with information that is required for GenAI prompt generation in the context of Natural Language Search.

Indicate that the natural language search should consider an enumeration of values for the annotated field.

The subannotations specify the source of the values.

Indicates that the enumerated values are derived from a CDS view/view entity or a database table.

The entity must contain fields (elements) for language, enumerated value and text.

The elements for enumerated value and text are specified by **codeElement** and **textElement**.

The element that contains the language is determined automatically:

Specify the element (field) of the entity that contains the enumerated values.

-   CDS views/view entities must have a key field that is annotated with @Semantics.language: true.
-   In database tables there must be a key field with data type LANG.

-   CDS views/view entities must have a key field that is annotated with @Semantics.language: true.
-   In database tables there must be a key field with data type LANG.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.nls.valueEnumeration.entityBased.codeElement`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_enterprisesearch\_f.html