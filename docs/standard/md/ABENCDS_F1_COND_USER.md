---
title: "CDS or DDIC source code was not found"
description: |
  The role grants a user AS ABAP access to his or her own entries in the DDIC database table `ABDOCMODE`, as well as to entries in which the `UNAME` column is initial or contains a null value(ABENNULL_VALUE_GLOSRY.html). -   The base syntax `ASPECT_USER` is deprecated and should be replaced by `$ses
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_COND_USER.htm"
abapFile: "ABENCDS_F1_COND_USER.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "COND", "USER"]
---

``...[ALL|EXISTS] element [`=|<>|?=`](ABENCDS_F1_DCL_COND_EXPRESSION.html) ASPECT user ...``

[1. `... ( element ) = ASPECT user_alias ...`](#ABAP_VARIANT_1@1@)

[2. `... ( element ) = ASPECT user_business_partner_number ...`](#ABAP_VARIANT_2@1@)

[`... ALL|EXISTS`](#ABAP_ONE_ADD@1@)

User condition as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) in an [access rule](ABENCDS_DCL_ROLE_RULES.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). In a user condition, the predefined [aspect](ABENCDS_ASPECT_GLOSRY.html)\\ `user` is specified on the right side introduced with `ASPECT`.

The left side is compared with the [user name](ABENUSER_NAME_GLOSRY.html) of the user currently logged on to AS ABAP by using one of the three operators [`=`](ABENCDS_F1_DCL_COND_EXPRESSION.html), [`<>`](ABENCDS_F1_DCL_COND_EXPRESSION.html), [`?=`](ABENCDS_F1_DCL_COND_EXPRESSION.html), as in a [literal condition](ABENCDS_F1_DCL_COND_EXPRESSION.html).

The behavior when `element` is declared as optional element and missing at runtime is the same as for literal conditions.

The value of the alias can be checked instead of the user name.

If the user does not have an alias, the condition behaves like the Boolean predicate `FALSE`.

The number of the business partner assigned to the user can be checked instead of the user name.

If the user does not have an assigned business partner, the condition behaves like the Boolean predicate `FALSE`.

The `ALL` or `EXISTS` quantifiers can be specified for user conditions and behave as for literal conditions.

The following CDS view entity contains an element `uname`, which contains a user name:

The following role can be defined for the view:

CDS or DDIC source code was not found

The role grants a user AS ABAP access to his or her own entries in the DDIC database table `ABDOCMODE`, as well as to entries in which the `UNAME` column is initial or contains a [null value](ABENNULL_VALUE_GLOSRY.html).

-   The base syntax `ASPECT_USER` is deprecated and should be replaced by `$session.user.`
-   In the syntax check, the new syntax validates that `element` is compatible with all possible user names. The deprecated syntax emitted a warning only and a runtime error was possible.
-   User conditions can be combined within an access rule using [literal conditions](ABENCDS_F1_COND_LITERAL.html) and [PFCG conditions](ABENCDS_F1_COND_PFCG.html), and [inheritance conditions](ABENCDS_F1_COND_INHERIT.html).
-   A user condition acts like a comparison with the session variable [`$session.user`](ABENCDS_SESSION_VARIABLE_V2.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). It is not currently possible to use session variables on the right side of conditions in DCL.
-   The behavior when an element is declared as optional element and is missing at runtime matches the one for literal conditions.

@AccessControl.authorizationCheck: #CHECK\\ndefine view entity demo\_cds\_auth\_user\\n as select from\\n abdocmode\\n \\{\\n key uname,\\n key langu,\\n flag\\n \\}\\n abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html