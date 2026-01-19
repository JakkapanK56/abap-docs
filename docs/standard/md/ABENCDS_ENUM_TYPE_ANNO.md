---
title: "ABENCDS_ENUM_TYPE_ANNO"
description: |
  ABENCDS_ENUM_TYPE_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ENUM_TYPE_ANNO.htm"
abapFile: "ABENCDS_ENUM_TYPE_ANNO.html"
keywords: ["do", "if", "case", "types", "ABENCDS", "ENUM", "TYPE", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an enumerated type annotation in the definition of a CDS enumerated type in front of the statement [`DEFINE TYPE ENUM`](ABENCDS_DEFINE_ENUM_TYPE.html). The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation must be defined as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs. In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) should be used with the value `#SIMPLE_TYPE`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

If a CDS enumerated type is based on another CDS enumerated type, it inherits the annotations of the underlying enumerated type. If required, these annotations can be overwritten using locally defined annotations in the overlying enumerated type.

-   AbapCatalog Annotations

-   `[AbapCatalog.typeSpec.changeDocumentRelevant](ABENCDS_2016919924-_ANNO.html)`
-   `[AbapCatalog.typeSpec.conversionExit](ABENCDS_58258031_ANNO.html)`
-   `[AbapCatalog.typeSpec.outputLength](ABENCDS_1569826112_ANNO.html)`

-   EndUserText Annotations

-   `[EndUserText.heading](ABENCDS_92083118_ANNO.html)`
-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`
-   `[EndUserText.quickInfo](ABENCDS_26162021_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.upperCase](ABENCDS_1673459597_ANNO.html)`

abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_enumeration\_types.html abencds\_define\_enum\_type.html