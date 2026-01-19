---
title: "ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS"
description: |
  ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html"
keywords: ["if", "ABENCDS", "EXTEND", "VIEW", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an extension annotation in the definition of a [CDS view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html) before the statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html). The character `@` must be placed in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#EXTEND_VIEW`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.sqlViewAppendName](ABENCDS_873797739_ANNO.html)`

-   Each definition of a CDS view extension must contain the ABAP annotation `AbapCatalog.sqlViewAppendName` that defines the name of the DDIC append view in ABAP Dictionary.
-   The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_extension.html abencds\_extend\_view.html