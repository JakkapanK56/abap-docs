---
title: "ABENCDS_F1_DCL_ROLE_ANNOTATIONS"
description: |
  ABENCDS_F1_DCL_ROLE_ANNOTATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DCL_ROLE_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html"
keywords: ["if", "ABENCDS", "DCL", "ROLE", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a role annotation in front of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in the definition of a [CDS role](ABENCDS_ROLE_GLOSRY.html). The character `@` must be placed in front of the name `annotation` of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html). In the annotation definition, the annotation [`@Scope`](ABENCDS_F1_DEFINE_ANNO_ANNOS.html) must be specified using the value `#ROLE`.

The following [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) can be specified for `annotation`. No other annotations can be specified.

Every definition of a CDS role must contain the ABAP annotation `MappingRole` with the value `true`.

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`

-   MappingRole Annotations

-   `[MappingRole](ABENCDS_984551930-_ANNO.html)`

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html