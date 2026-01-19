---
title: "ABENCDS_DCL_ROLE_COND_EXPR"
description: |
  ABENCDS_DCL_ROLE_COND_EXPR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DCL_ROLE_COND_EXPR.htm"
abapFile: "ABENCDS_DCL_ROLE_COND_EXPR.html"
keywords: ["select", "if", "ABENCDS", "DCL", "ROLE", "COND", "EXPR"]
---

``... [`condition`](ABENCDS_DCL_ROLE_CONDITIONS.html)\    | [NOT] cds_cond [AND|OR cds_cond] ...``

Formulates an [access condition](ABENACCESS_CONDITION_GLOSRY.html) in the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). The result of an access condition is true or false.

An access condition is either a single condition, [`condition`](ABENCDS_DCL_ROLE_CONDITIONS.html), or an expression constructed from the Boolean operators `NOT`, `AND`, and `OR` in which parenthesized full conditions `cds_cond` using parentheses `( ... )` are possible. The Boolean operators work as follows:

The operator `NOT` is a stronger binding than `AND`, which itself is a strong binding than `OR`. This produces implicit parentheses, which can be overridden by explicit parentheses.

When an access condition is evaluated using CDS access control, only those lines are selected for which the access condition is true.

Inside of the `NOT` operator (also in nested subconditions), some constituents of access conditions cannot be used:

-   `NOT` negates the result of the following condition. It cannot be used if `cds_cond` is one of the following conditions:

-   A PFCG condition [`pfcg_condition`](ABENCDS_F1_COND_PFCG.html) whose left side specifies CDS elements that themselves are assigned authorization fields on the right side after `ASPECT pfcg_auth` using `mapped_field1`, `mapped_field2`, ...
-   A user-defined aspect [`aspect`](ABENCDS_F1_COND_ASPECT.html).
-   An inheritance condition [`inherit_condition`](ABENCDS_F1_COND_INHERIT.html).

-   An `AND` combination is true if both combined conditions are true.
-   An `OR` combination is true if at least one of the combined conditions is true.

-   PFCG conditions with left side elements.
-   User-defined aspects.
-   Literal conditions using optional elements.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_rules.html abencds\_dcl\_role\_cond\_rule.html