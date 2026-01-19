---
title: "ABENCDS_DEFINE_SERVICE_ANNOS"
description: |
  ABENCDS_DEFINE_SERVICE_ANNOS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_SERVICE_ANNOS.htm"
abapFile: "ABENCDS_DEFINE_SERVICE_ANNOS.html"
keywords: ["if", "ABENCDS", "DEFINE", "SERVICE", "ANNOS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a service definition annotation in the definition of a [service definition](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) in front of the statement [`DEFINE SERVICE`](ABENSRVD_DEFINE_SERVICE.html).

The character `@` must be placed directly in front of the name `annotation` of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation `@Scope` should be used with the value `#SERVICE`.

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.extensibility.extensible](ABENCDS_1159849682_ANNO.html)`

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`

abenabap.html abencds.html abencds\_service\_definitions.html abencds\_f1\_sdl\_syntax.html abensrvd\_define\_service.html