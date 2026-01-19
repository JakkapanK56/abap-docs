---
title: "ABENCDS_DCL_ROLE_CONDITIONS"
description: |
  ABENCDS_DCL_ROLE_CONDITIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DCL_ROLE_CONDITIONS.htm"
abapFile: "ABENCDS_DCL_ROLE_CONDITIONS.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "DCL", "ROLE", "CONDITIONS"]
---

``... [`literal_condition`](ABENCDS_F1_COND_LITERAL.html)\    |\ [`pfcg_condition`](ABENCDS_F1_COND_PFCG.html)\    |\ [`aspect_condition`](ABENCDS_F1_COND_ASPECT.html)\    |\ [`user_condition`](ABENCDS_F1_COND_USER.html)\    |\ [`inherit_condition`](ABENCDS_F1_COND_INHERIT.html)\    |\ [`dcl_function`](ABENCDS_F1_DCL_FUNCTION.html)\    | TRUE    | FALSE    | VOID    |\ [`if_then_else`](ABENCDS_F1_DCL_IFTHENELSE.html) ...``

Part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) in an [access rule](ABENACCESS_RULE_GLOSRY.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). The following categories of conditions can be specified, which can be combined using `AND` or `OR`:

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](ABENPATH_EXPRESSION_GLOSRY.html). The following restrictions apply:

-   Literal conditions [`literal_condition`](ABENCDS_F1_COND_LITERAL.html) that compare an element of a CDS entity with fixed values.
-   PFCG conditions [`pfcg_condition`](ABENCDS_F1_COND_PFCG.html) that associate an element of a CDS entity with [authorizations](ABENAUTHORIZATION_GLOSRY.html) in the [SAP authorization concept](ABENBC_AUTHORITY_CHECK.html) (which are based on [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html)).
-   User-defined aspects [`aspect_condition`](ABENCDS_F1_COND_ASPECT.html) that join elements in a CDS entity with value sets of any other entity that can itself be addressed using the current user name as a selection condition.
-   User conditions [`user_condition`](ABENCDS_F1_COND_USER.html) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.
-   Inheritance conditions [`inherit_condition`](ABENCDS_F1_COND_INHERIT.html) that apply conditions from other CDS roles.
-   DCL functions [`dcl_function`](ABENCDS_F1_DCL_FUNCTION.html) are evaluated in the application server before the statement is sent to the database. The currently existing DCL functions return a Boolean predicate and in combination with `AND` and `OR` conditions allow enabling or disabling parts of the access conditions based on the function result.
-   Boolean predicates `TRUE` and `FALSE`. These conditions are either always met or not met. They are usually not needed in a role definition, but can be created implicitly in the [inheritance of conditions](ABENCDS_F1_COND_INHERIT.html).
-   The predicate `VOID`. A condition with the value `VOID` is handled as nonexistent.
-   `VOID` conditions are not required in the definition of a role and can be created implicitly in inheritances. The following rules apply in combination with other conditions:

-   `X AND VOID = VOID AND X = X`
-   `X OR VOID = VOID OR X = X`
-   `NOT VOID = VOID`
-   An access rule cannot consist solely of `VOID` conditions.

-   Control structures [`if_then_else`](ABENCDS_F1_DCL_IFTHENELSE.html).

-   Only certain [data types](ABENCDS_F1_DCL_COND_DATA_TYPES.html) are allowed.
-   Path expressions `path_expr` in CDS DCL have the same syntax as [path expressions](ABENCDS_PATH_EXPRESSION_V2.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html).

-   It is advisable to specify an `element` in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases. More specifically, path expressions with multiple values can have a negative effect on the runtime of a [query](ABENASQL_QUERY_GLOSRY.html).

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html