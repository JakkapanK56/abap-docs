---
title: "ABENCDS_1673459597_ANNO"
description: |
  ABENCDS_1673459597_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1673459597_ANNO.htm"
abapFile: "ABENCDS_1673459597_ANNO.html"
keywords: ["do", "if", "case", "data", "types", "ABENCDS", "1673459597", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

ObjectModel annotations provide definitions of text-related aspects of the CDS-based data model.

Specifies whether a CDS object is case-sensitive or not.

`true`: The output of the CDS object is all uppercase letters.

`false`: The output of the CDS object can be uppercase and lowercase letters.

If the annotation is not specified, the value `false` is used.

-   The annotation `@ObjectModel.upperCase` is only available if the CDS object has a character-like data type. In case of numeric types, a syntax check error occurs.

-   The annotation `@ObjectModel.upperCase` is evaluated by frameworks such as OData.

-   The annotation `@ObjectModel.upperCase` is mapped to the semantic DDIC domain property **Lowercase letters**. If a CDS simple type is typed using a data element that in turn is typed using a DDIC domain, the annotation value is derived from the domain setting. If the domain allows only uppercase letters, then the annotation value in the simple type is set to true. If the domain also allows lowercase letters the annotation is not set at all. If not set, the default value is false.

-   The annotation `@ObjectModel.upperCase` is only available if the CDS object has a character-like data type. In case of numeric types, a syntax check error occurs.

-   The annotation `@ObjectModel.upperCase` is evaluated by frameworks such as OData.

-   The annotation `@ObjectModel.upperCase` is mapped to the semantic DDIC domain property **Lowercase letters**. If a CDS simple type is typed using a data element that in turn is typed using a DDIC domain, the annotation value is derived from the domain setting. If the domain allows only uppercase letters, then the annotation value in the simple type is set to true. If the domain also allows lowercase letters the annotation is not set at all. If not set, the default value is false.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ObjectModel.upperCase`\\ **Scope** `#ELEMENT`, `#SIMPLE_TYPE`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_objectmodel\_a.html