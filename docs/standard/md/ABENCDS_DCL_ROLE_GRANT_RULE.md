---
title: "CDS or DDIC source code was not found"
description: |
  -   For a CDS entity(ABENCDS_ENTITY_GLOSRY.html), a full access rule has the same effect as when there is no role for the CDS entity or when CDS access control is forbidden for this CDS entity by using the annotation `@AccessControl.authorizationCheck:#NOT_ALLOWED` or by using `WITH PRIVILEGED
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DCL_ROLE_GRANT_RULE.htm"
abapFile: "ABENCDS_DCL_ROLE_GRANT_RULE.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "DCL", "ROLE", "GRANT", "RULE"]
---

`GRANT SELECT ON cds_entity [REDEFINITION];`

Full access rule in the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). A full access rule `GRANT SELECT ON` without the addition `WHERE` provides access to a CDS entity `cds_entity` without conditions. If `cds_entity` is specified, the same applies as for a [conditional access rule](ABENCDS_DCL_ROLE_COND_RULE.html).

The addition `REDEFINITION` prevents further `REDEFINITION` rules from being created for the same CDS entity and letting their activation fail.

The following CDS role specifies that all users can access the CDS view entity `DEMO_CDS_AUTH_FULLACCESS` without access conditions:

CDS or DDIC source code was not found

-   For a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), a full access rule has the same effect as when there is no role for the CDS entity or when CDS access control is forbidden for this CDS entity by using the annotation `@AccessControl.authorizationCheck:#NOT_ALLOWED` or by using [`[WITH] PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in ABAP SQL when the entity is accessed.
-   SAP does not deliver any CDS roles with full access rules. Partners and customers can use full access rules to override roles supplied by SAP.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_rules.html