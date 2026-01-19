---
title: "ABENCDS_DCL_ROLE_RULES"
description: |
  ABENCDS_DCL_ROLE_RULES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DCL_ROLE_RULES.htm"
abapFile: "ABENCDS_DCL_ROLE_RULES.html"
keywords: ["if", "types", "ABENCDS", "DCL", "ROLE", "RULES"]
---

1\. ``... [`conditional_rule`](ABENCDS_DCL_ROLE_COND_RULE.html)|[`grant_rule`](ABENCDS_DCL_ROLE_GRANT_RULE.html)\       [[`conditional_rule`](ABENCDS_DCL_ROLE_COND_RULE.html)|[`grant_rule`](ABENCDS_DCL_ROLE_GRANT_RULE.html)]\        ...``\\ 
\\ 
2\. ``... `inherited_rule`\       [[`conditional_rule`](ABENCDS_DCL_ROLE_COND_RULE.html)|[`grant_rule`](ABENCDS_DCL_ROLE_GRANT_RULE.html)]\       [[`conditional_rule`](ABENCDS_DCL_ROLE_COND_RULE.html)|[`grant_rule`](ABENCDS_DCL_ROLE_GRANT_RULE.html)]\        ...``\\ 
\\ 
3\. ``... [`projection_rule`](ABENCDS_DCL_ROLE_PROJ_RULE.html) ...``

Access rules that can be specified in curly brackets in the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) to define a [CDS role](ABENCDS_ROLE_GLOSRY.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). Each access rule defines access to a [CDS](ABENCDS_ENTITY_GLOSRY.html) entity. There are the following types of access rule:

Multiple access rules can be combined in a single CDS role, but an inherited access rule `inherited_rule` can only occur once.

The access conditions defined by the individual access rules are joined with a logical *or*. In the same way, the access rules defined by different CDS roles for a CDS entity are joined by a logical *or*.

It is advisable to use only one access rule in a CDS role.

-   Conditional access rules [`conditional_rule`](ABENCDS_DCL_ROLE_COND_RULE.html), which control access using [access conditions](ABENCDS_DCL_ROLE_CONDITIONS.html).
-   Full access rules [`grant_rule`](ABENCDS_DCL_ROLE_GRANT_RULE.html) that grant unrestricted access.
-   A projection rule [`projection_rule`](ABENCDS_DCL_ROLE_PROJ_RULE.html) for transactional projection views.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html