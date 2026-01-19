---
title: "ABENBDL_CDS_BASED_AUTH"
description: |
  ABENBDL_CDS_BASED_AUTH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_CDS_BASED_AUTH.htm"
abapFile: "ABENBDL_CDS_BASED_AUTH.html"
keywords: ["if", "data", "ABENBDL", "CDS", "BASED", "AUTH"]
---

Read access to RAP business objects can be limited using the data control language of ABAP CDS ([CDS DCL](ABENCDS_DCL_GLOSRY.html)) in the CDS data model that a RAP BO is based on.

The following annotations are available in CDS data definitions to define access control settings:

The following rules apply to the CDS entities belonging to a RAP behavior definition regarding the CDS-based access control. The rules are checked per authorization master group, this means, for a [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and all its [authorization dependent entities](ABENRAP_AUTH_DEP_ENT_GLOSRY.html). Authorizations are considered as hierarchical, meaning that the authorization checks may get at most stricter.

-   [`AccessControl.authorizationCheck`](ABENCDS_1180334353_ANNO.html)

-   [`AccessControl.authorizationCheck`](ABENCDS_1180334353_ANNO.html)

-   The value `#CHECK` should not be used at all. Use `#MANDATORY` instead.
-   All children of an entity with value `#NOT_REQUIRED` must be either `#NOT_REQUIRED` or `#MANDATORY`.
-   All children of an entity with value `#NOT_ALLOWED` must be one of `#NOT_ALLOWED`, `#NOT_REQUIRED`, or `#MANDATORY`.
-   All children of `#PRIVILEGED_ONLY` must be `#PRIVILEGED_ONLY` too.
-   All children of `#PRIVILEGED_ONLY` must be related by one of the [CDS compositions](ABENCDS_COMPOSITION_GLOSRY.html) specified as values of this annotation.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html abenbdl\_authorization.html