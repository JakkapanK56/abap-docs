---
title: "ABENCDS_F1_ENTITY_ANNOTATIONS"
description: |
  ABENCDS_F1_ENTITY_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_ENTITY_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_ENTITY_ANNOTATIONS.html"
keywords: ["if", "data", "ABENCDS", "ENTITY", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an entity annotation in front of the statement `DEFINE` in the definition of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). Can be used for the following entities:

The character `@` must be placed in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#ENTITY`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

The `AbapCatalog` annotations listed here are supported in all CDS entities except for [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html).

-   [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html)
-   [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html)
-   [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html)
-   [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html)
-   [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html)
-   [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html)
-   [`DEFINE CUSTOM ENTITY`](ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html)
-   [`DEFINE ABSTRACT ENTITY`](ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html)
-   [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html)

-   AbapCatalog Annotations

-   `[AbapCatalog.extensibility.allowNewCompositions](ABENCDS_2031682287_ANNO.html)`
-   `[AbapCatalog.extensibility.elementSuffix](ABENCDS_864724495_ANNO.html)`
-   `[AbapCatalog.extensibility.extensible](ABENCDS_1159849682_ANNO.html)`
-   `[AbapCatalog.extensibility.quota.maximumBytes](ABENCDS_699341645-_ANNO.html)`
-   `[AbapCatalog.extensibility.quota.maximumFields](ABENCDS_1345726382_ANNO.html)`

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`

-   Metadata Annotations

-   `[Metadata.allowExtensions](ABENCDS_1985816297-_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.query.implementedBy](ABENCDS_763589850-_ANNO.html)`

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_ddl\_common\_elements.html