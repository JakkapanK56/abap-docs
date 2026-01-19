---
title: "ABENCDS_F1_DEFINE_ACCESSPOLICY"
description: |
  ABENCDS_F1_DEFINE_ACCESSPOLICY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ACCESSPOLICY.htm"
abapFile: "ABENCDS_F1_DEFINE_ACCESSPOLICY.html"
keywords: ["if", "ABENCDS", "DEFINE", "ACCESSPOLICY"]
---

``[[`@access_policy_annot`](ABENCDS_F1_DCL_AP_ANNOTATIONS.html)]\  [DEFINE] ACCESSPOLICY access_policy \{    [`pfcg_mapping_definition`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html)\ |\ [`aspect_definition`](ABENCDS_F1_DEFINE_GENERIC_ASPECT.html)\  \}``

Defines a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html)\\ `access_policy` in the [CDS DCL](ABENCDS_DCL_GLOSRY.html) to be used as a medium for further definitions.

An `ACCESSPOLICY` contains the definition of one of the following objects (which must have the same name as the access policy):

`DEFINE ACCESSPOLICY` can be used to specify the optional annotation [`@access_policy_annot`](ABENCDS_F1_DCL_AP_ANNOTATIONS.html) in front of the actual definition of the access policy.

-   A [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html)\\ [`DEFINE PFCG_MAPPING`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html)
-   A user-defined aspect [`DEFINE ASPECT`](ABENCDS_F1_DEFINE_GENERIC_ASPECT.html).

-   Separate [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) must be created for each CDS access policy.
-   The [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) of a CDS access policy must have the same name as this policy.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html