---
title: "ABENCDS_VIEW_ANNO_V1"
description: |
  ABENCDS_VIEW_ANNO_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_VIEW_ANNO_V1.htm"
abapFile: "ABENCDS_VIEW_ANNO_V1.html"
keywords: ["if", "class", "data", "ABENCDS", "VIEW", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a view annotation in the definition of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in front of the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html). The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#VIEW`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.buffering.status](ABENCDS_1242119123-_ANNO.html)`
-   `[AbapCatalog.buffering.type](ABENCDS_464103458_ANNO.html)`
-   `[AbapCatalog.buffering.numberOfKeyFields](ABENCDS_1619044161-_ANNO.html)`
-   `[AbapCatalog.dataMaintenance](ABENCDS_67699033-_ANNO.html)`
-   `[AbapCatalog.compiler.compareFilter](ABENCDS_1687178802-_ANNO.html)`
-   `[AbapCatalog.sqlViewName](ABENCDS_253495944_ANNO.html)`
-   `[AbapCatalog.viewEnhancementCategory](ABENCDS_801468554-_ANNO.html)`

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   ClientHandling Annotations

-   `[ClientHandling.type](ABENCDS_613831553_ANNO.html)`
-   `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)`

-   Metadata Annotations

-   `[Metadata.ignorePropagatedAnnotations](ABENCDS_1433174898-_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.usageType.dataClass](ABENCDS_1091668137-_ANNO.html)`
-   `[ObjectModel.usageType.serviceQuality](ABENCDS_1255374604-_ANNO.html)`
-   `[ObjectModel.usageType.sizeCategory](ABENCDS_1163152301_ANNO.html)`

-   The ABAP annotation `AbapCatalog.sqlViewName` is **mandatory**. It defines the name of the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) in ABAP Dictionary. The name given to the DDIC database view can no longer be changed after the CDS view is transported into a follow-on system.
-   The following `AbapCatalog` annotations are obsolete:

-   [`@AbapCatalog.dbHints`](ABENCDS_ANNOTATION_OBSOLETE.html)
-   [`@AbapCatalog.preserveKey`](ABENCDS_ANNOTATION_OBSOLETE.html)

-   Alongside the view annotations listed here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html