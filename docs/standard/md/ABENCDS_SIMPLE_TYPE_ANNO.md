---
title: "ABENCDS_SIMPLE_TYPE_ANNO"
description: |
  ABENCDS_SIMPLE_TYPE_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SIMPLE_TYPE_ANNO.htm"
abapFile: "ABENCDS_SIMPLE_TYPE_ANNO.html"
keywords: ["do", "if", "case", "class", "data", "types", "ABENCDS", "SIMPLE", "TYPE", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a simple type annotation in the definition of a CDS simple type in front of the statement [`DEFINE TYPE`](ABENCDS_DEFINE_SIMPLE_TYPE.html). The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation must be defined as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs. In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) should be used with the value `#SIMPLE_TYPE`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

If a CDS simple type is based on another CDS simple type, it inherits the annotations of the underlying simple type. If required, these annotations can be overwritten using locally defined annotations in the overlying simple type.

The following CDS simple type is based on a built-in data type in ABAP Dictionary.

The following CDS simple type reuses the simple type `DEMO_SIMPLE_TYPE`. It inherits its properties and metadata.

The following code snippet evaluates the annotations of the simple type using the class `CL_DD_DDL_ANNOTATION_SERVICE`.

Result: The following image shows the result of the evaluation of annotations. The three `@EndUserText` annotations and their values are inherited from the underlying CDS simple type `DEMO_SIMPLE_TYPE`.

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

@EndUserText.heading: 'abc' \\n@EndUserText.label: 'myLabel' \\n@EndUserText.quickInfo: 'lala' \\ndefine type demo\_simple\_type : abap.int4; define type DEMO\_SIMPLE\_TYPE\_2 : DEMO\_SIMPLE\_TYPE; DATA(o) = cl\_demo\_output=>new( ). \\n\\ \\ncl\_dd\_ddl\_annotation\_service=>get\_annos\_4\_elementary\_type( \\n EXPORTING \\n type\_name = 'DEMO\_SIMPLE\_TYPE\_2' \\n IMPORTING \\n annos = DATA(annos) ). \\no->write( annos ). \\no->display( ). abenabap.html abencds.html abencds\_tdl.html abencds\_types.html abencds\_define\_type.html abencds\_simple\_types.html abencds\_define\_simple\_type.html