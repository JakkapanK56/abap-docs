---
title: "ABENCDS_DDL_ASPECT_ANNO"
description: |
  ABENCDS_DDL_ASPECT_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DDL_ASPECT_ANNO.htm"
abapFile: "ABENCDS_DDL_ASPECT_ANNO.html"
keywords: ["if", "ABENCDS", "DDL", "ASPECT", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an aspect annotation in the definition of a CDS DDL aspect in front of the statement [`DEFINE ASPECT`](ABENCDS_DEFINE_ASPECT.html). The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation must be defined in a [CDS object](ABENCDS_OBJECT_GLOSRY.html); in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). Otherwise, a syntax error occurs. In the annotation definition, the annotation `@Scope` should be used with the value `#ASPECT`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

All annotations are optional, and an aspect can also be created without any annotations.

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`
-   `[EndUserText.quickInfo](ABENCDS_26162021_ANNO.html)`

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_aspects.html abencds\_define\_aspect.html