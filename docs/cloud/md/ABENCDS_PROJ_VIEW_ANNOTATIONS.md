---
title: "ABENCDS_PROJ_VIEW_ANNOTATIONS"
description: |
  ABENCDS_PROJ_VIEW_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PROJ_VIEW_ANNOTATIONS.htm"
abapFile: "ABENCDS_PROJ_VIEW_ANNOTATIONS.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "PROJ", "VIEW", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a view annotation in the definition of a CDS projection view in front of the statement`DEFINE [TRANSIENT] VIEW ENTITY AS PROJECTION ON`. The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#VIEW`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.dataMaintenance](ABENCDS_67699033-_ANNO.html)`
-   `[AbapCatalog.extensibility.allowNewDatasources](ABENCDS_1925198989-_ANNO.html)`
-   `[AbapCatalog.extensibility.dataSources](ABENCDS_1373877666-_ANNO.html)`
-   `[AbapCatalog.viewEnhancementCategory](ABENCDS_801468554-_ANNO.html)`

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   Metadata Annotations

-   `[Metadata.ignorePropagatedAnnotations](ABENCDS_1433174898-_ANNO.html)`

-   ObjectModel Annotations

-   `[ObjectModel.usageType.dataClass](ABENCDS_1091668137-_ANNO.html)`
-   `[ObjectModel.usageType.serviceQuality](ABENCDS_1255374604-_ANNO.html)`
-   `[ObjectModel.usageType.sizeCategory](ABENCDS_1163152301_ANNO.html)`

-   Projection views inherit the field and association annotations of the [projected entity](ABENCDS_PV_PROJECTED_ENTITY_GLOSRY.html). Header annotations are not inherited and must be specified anew, if required.
-   Alongside the view annotations shown here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for a CDS projection view.
-   Only a limited number of view annotations can be used in CDS projection views. The following groups of annotations are not possible and are therefore not listed below:

-   Client handling is done implicitly in CDS projection views. The client is always set to `#session_variable_filter`. Therefore, client handling annotations cannot be explicitly set in CDS projection views.
-   `DataAging` annotations are currently not supported for projection views.

-   Most `Abap.Catalog` annotations supported in CDS views are not supported in CDS projection views, for the following reasons:

-   `AbapCatalog.buffering` annotations are not possible, since [buffering](ABENTABLE_BUFFERING_GLOSRY.html) does not work with another CDS view as data source.
-   `AbapCatalog.compiler.compareFilter` is not required, since the optimization of joins is done automatically.
-   `AbapCatalog.sqlViewName` is not required, since projection views do not have a corresponding SQL view in ABAP Dictionary.

-   The annotations `AccessControl` and `ObjectModel` have further [framework-specific subannotations](ABENCDS_ANNOTATIONS_FRMWRK.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html