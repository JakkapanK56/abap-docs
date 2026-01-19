---
title: "ABENCDS_EE_ANNOTATIONS"
description: |
  ABENCDS_EE_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_EE_ANNOTATIONS.htm"
abapFile: "ABENCDS_EE_ANNOTATIONS.html"
keywords: ["if", "ABENCDS", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) in the definition of a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) in front of the statement [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html) as an external entity annotation. The character `@` must be placed in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#EXTERNAL_ENTITY`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   Alongside the external entity annotations shown here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for an external entity.
-   The `AccessControl` annotation has further [framework-specific subannotations](ABENCDS_ANNOTATIONS_FRMWRK.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_external\_entity.html abencds\_define\_external\_entity.html