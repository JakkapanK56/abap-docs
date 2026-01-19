---
title: "ABENCDS_F1_DCL_PROJECTION_VIEWS"
description: |
  ABENCDS_F1_DCL_PROJECTION_VIEWS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DCL_PROJECTION_VIEWS.htm"
abapFile: "ABENCDS_F1_DCL_PROJECTION_VIEWS.html"
keywords: ["ABENCDS", "DCL", "PROJECTION", "VIEWS"]
---

[CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) and [CDS transactional interfaces](ABENCDS_TRANS_INTERFACE_GLOSRY.html) (`DEFINE ROOT VIEW ENTITY ... AS PROJECTION ON ...`) are designed to apply CDS access control from the underlying CDS entity `1:1`.

For this purpose, CDS access control provides a special rule type [`projection_rule`](ABENCDS_DCL_ROLE_PROJ_RULE.html).

Prior to the introduction of projection rules, access rules for transactional projection views were regular access rules, which had to comply with the following restrictions:

-   The use of [`REDEFINITION`](ABENCDS_DCL_ROLE_COND_RULE.html) is not allowed.
-   Only the condition [`INHERITING CONDITIONS FROM ENTITY`](ABENCDS_F1_COND_INHERIT.html) can be used.
-   The only exception is to create an access control with a full access rule.
-   The inheriting entity in `INHERITING CONDITIONS FROM ENTITY` must match the source entity of the CDS projection view.
-   The only allowed [replacement step](ABENCDS_F1_COND_INHERIT_RPL_STEP.html) is [`ELEMENT WITH`](ABENCDS_F1_COND_INHERIT_RPL_STEP.html) in one of the following flavors:

-   Replacing a plain entity field with a plain entity field.
-   Renaming of an association.
-   Replacing a path expression that ends with a field with a plain entity field.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html