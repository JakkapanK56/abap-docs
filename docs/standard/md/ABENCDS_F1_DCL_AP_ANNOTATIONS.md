---
title: "ABENCDS_F1_DCL_AP_ANNOTATIONS"
description: |
  ABENCDS_F1_DCL_AP_ANNOTATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DCL_AP_ANNOTATIONS.htm"
abapFile: "ABENCDS_F1_DCL_AP_ANNOTATIONS.html"
keywords: ["if", "ABENCDS", "DCL", "ANNOTATIONS"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as an access policy annotation in the definition of a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html) in front of the statement [`DEFINE ACCESSPOLICY`](ABENCDS_F1_DEFINE_ACCESSPOLICY.html). The character `@` must be placed directly in front of the name `annotation` of the annotation.

The following [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) can be specified for `annotation`. No other annotations can be specified.

The `EndUserText.label` annotation is not recommended for CDS access policies, since its value is overwritten by the identically named annotation of the [PFCG mapping](ABENCDS_F1_DCL_PM_ANNOTATIONS.html) or [aspect](ABENCDS_F1_DCL_AS_ANNOTATIONS.html) in question.

This means that the short text for these objects should be entered there directly and not in the CDS access policy.

-   EndUserText Annotations

-   `[EndUserText.label](ABENCDS_924137870_ANNO.html)`

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_accesspolicy.html