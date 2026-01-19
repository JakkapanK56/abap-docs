---
title: "ABENCDS_F1_METADATA_EXT_ANNOS"
description: |
  ABENCDS_F1_METADATA_EXT_ANNOS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_METADATA_EXT_ANNOS.htm"
abapFile: "ABENCDS_F1_METADATA_EXT_ANNOS.html"
keywords: ["if", "data", "ABENCDS", "METADATA", "EXT", "ANNOS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a metadata extension annotation in front of the statement [`ANNOTATE`](ABENCDS_F1_ANNOTATE_VIEW.html) in the definition of a CDS metadata extension in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) The character `@` must be placed in front of the name `annotation` of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) must be specified using the value `#ANNOTATE`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

All other annotations specified in this place are extension annotations [`@entity_annot1`](ABENCDS_F1_ANNOTATE_VIEW.html), [`@entity_annot2`](ABENCDS_F1_ANNOTATE_VIEW.html), ..., [`@view_annot1`](ABENCDS_F1_ANNOTATE_VIEW.html), [`@view_annot2`](ABENCDS_F1_ANNOTATE_VIEW.html), ..., used to expand the entity.

-   AbapAnnotation Annotations

-   `[Metadata.layer](ABENCDS_195182532_ANNO.html)`

abenabap.html abencds.html abencds\_annotations.html abencds\_anno\_usage.html abencds\_meta\_data\_extensions.html abencds\_f1\_ddlx\_syntax.html abencds\_f1\_annotate\_view.html