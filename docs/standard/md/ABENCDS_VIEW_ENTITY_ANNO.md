---
title: "ABENCDS_VIEW_ENTITY_ANNO"
description: |
  ABENCDS_VIEW_ENTITY_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_VIEW_ENTITY_ANNO.htm"
abapFile: "ABENCDS_VIEW_ENTITY_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "VIEW", "ENTITY", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a view entity annotation in the definition of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) in front of the statement [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html). The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation must be defined as a [CDS object](ABENCDS_OBJECT_GLOSRY.html) in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs. In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) should be used with the value `#VIEW`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.dataMaintenance](ABENCDS_67699033-_ANNO.html)`
-   `[AbapCatalog.entityBuffer.definitionAllowed](ABENCDS_2036691489-_ANNO.html)`
-   `[AbapCatalog.entityBuffer.propagationAllowed](ABENCDS_1859277801_ANNO.html)`
-   `[AbapCatalog.entityBuffer.definitionType](ABENCDS_1760222934_ANNO.html)`
-   `[AbapCatalog.extensibility.allowNewDatasources](ABENCDS_1925198989-_ANNO.html)`
-   `[AbapCatalog.extensibility.dataSources](ABENCDS_1373877666-_ANNO.html)`
-   `[AbapCatalog.viewEnhancementCategory](ABENCDS_801468554-_ANNO.html)`

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   DataAging Annotations

-   `[DataAging.noAgingRestriction](ABENCDS_128703388_ANNO.html)`

-   Metadata Annotations

-   `[Metadata.ignorePropagatedAnnotations](ABENCDS_1433174898-_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.usageType.dataClass](ABENCDS_1091668137-_ANNO.html)`
-   `[ObjectModel.usageType.serviceQuality](ABENCDS_1255374604-_ANNO.html)`
-   `[ObjectModel.usageType.sizeCategory](ABENCDS_1163152301_ANNO.html)`

-   Alongside the view annotations listed here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).
-   Client handling is done implicitly and automatically for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) by filtering the client [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html). Client handling annotations are not required and not allowed.
-   The following `AbapCatalog` annotations are available in other CDS entities, but they are not supported in CDS view entities:

-   Buffering annotations are currently not supported in CDS view entities, because buffering is not yet possible.
-   The annotation `@AbapCatalog.compiler.compareFilter` is not required and not allowed in CDS view entities, because the filter is implicitly and automatically compared.
-   The [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`@AbapCatalog.dbHints`](ABENCDS_ANNOTATIONS_ABAP_TABLES.html) that was used in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is not supported. The [framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ [`@Consumption.dbHints`](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html) is available instead.

-   The annotations `AccessControl` and `ObjectModel` have further [framework-specific subannotations](ABENCDS_ANNOTATIONS_FRMWRK.html). The subannotations of `ObjectModel` used as ABAP annotations characterize CDS view entities with respect to their performance-relevant properties.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html