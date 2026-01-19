---
title: "ABENCDS_F1_HIERARCHY_ANNOTATIONS"
description: |
  ABENCDS_F1_HIERARCHY_ANNOTATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_HIERARCHY_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_HIERARCHY_ANNOTATIONS.html"
keywords: ["if", "data", "ABENCDS", "HIERARCHY", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a hierarchy annotation in front of the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) in the definition of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html). The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) should be used with the value `#HIERARCHY`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.dataMaintenance](ABENCDS_67699033-_ANNO.html)`

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   Alongside the hierarchy annotations shown here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for a CDS hierarchy.
-   Regarding `AccessControl.authorizationCheck`, there are some restrictions that are described under [DCL Restrictions for CDS Hierarchies](ABENCDS_F1_DCL_HIERARCHIES.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html abencds\_f1\_define\_hierarchy.html