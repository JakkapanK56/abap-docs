---
title: "ABENCDS_F1_COND_ASPECT"
description: |
  ABENCDS_F1_COND_ASPECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_COND_ASPECT.htm"
abapFile: "ABENCDS_F1_COND_ASPECT.html"
keywords: ["select", "while", "if", "case", "ABENCDS", "COND", "ASPECT"]
---

`... (element1 [, element2, ...] ) = ASPECT aspect        [FILTER BY ( aspect filter )] ...`

[`... FILTER BY`](#ABAP_ONE_ADD@1@)

Aspect condition as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) in an [access rule](ABENCDS_DCL_ROLE_RULES.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). An aspect condition specifies the user-defined aspect `aspect` defined in an aspect definition in the right side introduced by `ASPECT`.

In parentheses, the left side contains the ordered list of entity elements that match the output fields of the user-defined aspect.

[Left-side host expressions](ABENCDS_DCL_COND_LEFT_SIDE.html) are not supported in this language element. The only comparison operator allowed is the equality operator `=`.

When any of the left side elements of an aspect condition is declared as optional with default `FALSE` and missing at runtime, the entire aspect is handled as logically false.

Missing optional elements with default `TRUE` are removed from the link condition between the aspect entity and the protected entity. This process may apply to all left side elements, in which case the aspect condition reduces to a mere existence check of any row in the aspect entity for the current user.

When the aspect definition declares at least one filter element (see `DEFINE ASPECT`), you can use this addition to specify an additional selection condition for the rows of the aspect entity, before the result set is used to filter the rows of the protected entity.

The condition can use the declared aspect filters, literals, session variables and parameters of the protected entity, but you cannot refer to elements of the protected entity.

The aspect filter supports logical expressions and brackets.

You have an aspect entity with the following content, where `NULL` denotes a [null value](ABENNULL_VALUE_GLOSRY.html):

In the aspect definition, you specify `USERNAME` as the user element, `COSTCENTER` as the output element, and `STATE` as the filter element:

In an access role you filter the protected entity based on column`CostCenter` using the user-defined aspect.

With this condition, for user A the cost centers 1, 2 and 3 will be returned.

When only the cost centers with state `U` or `NULL` are respected, you can filter the aspect rows:

For user A, this condition will return cost center 1 and 3, while for user B, cost center 2 would be returned.

DEFINE ASPECT DEMO\_ASPECT AS SELECT FROM ... \\n WITH USER ELEMENT USERNAME \\n WITH FILTER ELEMENTS ( STATE ) \\n \\{ COSTCENTER \\} GRANT SELECT ON ... WHERE (CostCenter) = ASPECT DEMO\_ASPECT; **`USERNAME`** **`COSTCENTER`** **`STATE`** *A* `1` `U` *A* `2` `V` *A* `3` `NULL` `B` `1` `V` `B` `2` `U` abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html