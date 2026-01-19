---
title: "CDS or DDIC source code was not found"
description: |
  The language element `INHERIT` inherits the access conditions of the existing role and combines them with the additional condition. Expressed explicitly, the resulting access condition looks like this: -   Inherited access rules are obsolete. Inheritance conditions(ABENCDS_F1_COND_INHERIT.html) sh
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DCL_ROLE_INHERITED_RULE.htm"
abapFile: "ABENCDS_DCL_ROLE_INHERITED_RULE.html"
keywords: ["select", "data", "ABENCDS", "DCL", "ROLE", "INHERITED", "RULE"]
---

`GRANT SELECT ON cds_entity INHERIT parent_role [AND|OR [cds_cond](ABENCDS_DCL_ROLE_COND_EXPR.html)] ...;`

Obsolete inherited access rule in the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in the [CDS DCL](ABENCDS_DCL_GLOSRY.html). An inherited access rule `GRANT SELECT ON` with the addition `INHERIT` inherits the access rules of an existing CDS role `parent_role` for a CDS entity `cds_entity`. The same applies to `cds_entity` as to a [conditional access rule](ABENCDS_DCL_ROLE_COND_RULE.html).

As an option, [access conditions](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) can be added to the inherited access rule using `AND` or `OR`. A CDS role can only contain one inherited access rule, but can contain additional [conditional](ABENCDS_DCL_ROLE_COND_RULE.html) or [full access rules](ABENCDS_DCL_ROLE_GRANT_RULE.html). The existing CDS role `parent_role` can only contain a single access rule for exactly one CDS entity, which itself can be an inherited access rule.

The inherited access conditions inherited from `parent_role` must match the CDS entity `cds_entity`. [Full access rules](ABENCDS_DCL_ROLE_GRANT_RULE.html) cannot be inherited.

This example demonstrates how an obsolete inherited access rules is used. The example for [inheritance conditions](ABENCDS_F1_COND_INHERIT.html) shows how access conditions should be applied instead.

The following CDS view entity uses the CDS view entity `DEMO_CDS_AUTHORITY_LIT_PFCG_VE` from the example for [conditional access rules](ABENCDS_DCL_ROLE_COND_RULE.html) as the data source:

The view entity `DEMO_CDS_AUTHORITY_LIT_PFCG_VE` is assigned to the CDS role `DEMO_CDS_ROLE_LIT_PFCG_VE`. This role is inherited in the following CDS role and hence passes its access rules to the view `DEMO_CDS_AUTH_INH_OBS_VE`. An additional literal condition allows access to another currency.

CDS or DDIC source code was not found

The language element `INHERIT` inherits the access conditions of the existing role and combines them with the additional condition. Expressed explicitly, the resulting access condition looks like this:

-   Inherited access rules are obsolete. [Inheritance conditions](ABENCDS_F1_COND_INHERIT.html) should be used as [access conditions](ABENCDS_DCL_ROLE_CONDITIONS.html) instead.
-   There is currently no check to determine whether the CDS entity `cds_entity` contains as a data source the CDS entity for which the role `parent_role` is defined.
-   Changes to the CDS entity for which the role `parent_role` is defined can lead to errors in the inheriting roles.

@AccessControl.authorizationCheck: #CHECK\\ndefine view entity demo\_cds\_auth\_inh\_obs\_ve \\nas select from DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE \\n\\{\\n key carrid,\\n carrname,\\n currcode,\\n url\\n\\}\\n ... where (carrid) = \\n aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and \\n currcode = 'EUR' or \\n currcode = 'USD' ... abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_rules.html