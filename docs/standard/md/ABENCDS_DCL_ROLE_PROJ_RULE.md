---
title: "ABENCDS_DCL_ROLE_PROJ_RULE"
description: |
  ABENCDS_DCL_ROLE_PROJ_RULE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DCL_ROLE_PROJ_RULE.htm"
abapFile: "ABENCDS_DCL_ROLE_PROJ_RULE.html"
keywords: ["select", "do", "if", "case", "ABENCDS", "DCL", "ROLE", "PROJ", "RULE"]
---

`GRANT SELECT ON cds_entity_projection    AS PROJECTION ON cds_entity_base      FALLBACK ASSOCIATION fallback_association;`

Creates an access rule for the [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html)\\ `cds_entity_projection` which is a projection on the base view `cds_entity_base`. `cds_entity_projection` must be a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html), i.e. a projection view with the provider contract `TRANSACTIONAL_QUERY`.

At runtime, the [access conditions](ABENACCESS_CONDITION_GLOSRY.html) of the base view are applied to the projection view if all of the following conditions are met:

If it is not possible to apply the access conditions of the base view directly to the projection view, all access conditions are rewritten at runtime to point to the association `fallback_association`. This association must exist in the projection view and point to the base view.

-   All CDS elements used in the access conditions of the base view are present in the projection view (aliasing using the keyword `AS` is supported).
-   The access conditions of the base view do not use any parameters (`$parameters`...).
-   If the access conditions of the base view use [path expressions](ABENPATH_EXPRESSION_GLOSRY.html) and an [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is redirected to another projection view using the keyword [`REDIRECTED TO`](ABENCDS_PV_ASSOC_REDIRECTED.html), using path filters is not allowed.

-   The fallback association `fallback_association` should be a to-one association to the base view, using the key elements.
-   The syntax check of the projection rule issues a syntax warning if it detects that the access conditions of the base view could potentially trigger the use of the fallback association at runtime. This check is user-independent and realizes a worst case estimation. Depending on the actual authorizations of a user performing the access controlled action, it is still possible that the fallback association is not used at runtime.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_rules.html