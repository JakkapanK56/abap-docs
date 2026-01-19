---
title: "ABENCDS_F1_COND_INHERIT"
description: |
  ABENCDS_F1_COND_INHERIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_COND_INHERIT.htm"
abapFile: "ABENCDS_F1_COND_INHERIT.html"
keywords: ["select", "insert", "do", "if", "case", "ABENCDS", "COND", "INHERIT"]
---

``... \{\ \{ INHERIT parent_role FOR GRANT SELECT ON cds_entity \}\    |\ \{ INHERITING CONDITIONS FROM         \{ ENTITY cds_entity [DEFAULT TRUE|FALSE]\ \}\         | SUPER \}\ \}\      [\ [`replacing`](ABENCDS_F1_COND_INHERIT_REPLACING.html)\ ] ...``

[1. `... INHERIT parent_role FOR GRANT SELECT ON cds_entity`](#ABAP_VARIANT_1@1@)

[2. `... INHERITING CONDITIONS FROM ENTITY cds_entity ...`](#ABAP_VARIANT_2@1@)

[3. `... INHERITING CONDITIONS FROM SUPER`](#ABAP_VARIANT_3@1@)

Inheritance condition as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) in an [access rule](ABENCDS_DCL_ROLE_RULES.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). There are three variants:

In all variants, the inherited conditions can be altered by [`replacing`](ABENCDS_F1_COND_INHERIT_REPLACING.html) before they are applied to the CDS entity of the current access control.

This syntax is not available in the current ABAP language version.

[`... DEFAULT TRUE|FALSE`](#ABAP_ONE_ADD@1@)

From a CDS entity `cds_entity`, this variant of an inheritance condition inherits the access roles defined for it using CDS roles and inserts them at the location of the inheritance condition. This joins the access rules of multiple CDS roles using the same algorithm which also applies to access to the CDS entity `cds_entity`, that is, `COMBINATION MODE` and `REDEFINITION` are respected.

If the CDS entity does not have any access conditions yet, a syntax warning occurs and the expression is replaced with the Boolean predicate `TRUE`. You can avoid this warning by the `DEFAULT` addition.

The inherited access conditions must match the CDS entity for which the current access rule is defined.

An annotation `@AccessControl.authorizationCheck` in the source code of the parent CDS entity `cds_entity` is ignored by `INHERITING CONDITIONS`. The access rules are passed to the current CDS role even if the value `#NOT_ALLOWED` is specified.

If the source CDS entity does not have a CDS role, this addition replaces the expression `INHERITING CONDITIONS ...` with the Boolean predicate [`TRUE`](ABENCDS_DCL_ROLE_CONDITIONS.html) or [`FALSE`](ABENCDS_DCL_ROLE_CONDITIONS.html).

This variant is possible only if the access rule has the addition [`REDEFINITION`](ABENCDS_DCL_ROLE_COND_RULE.html) and only if the inherited CDS entity has access controls.

Instead of this condition, those conditions are used that would have been applied by the access controls disabled by `REDEFINITION`.

-   The variant `INHERIT FOR GRANT` applies the access conditions from a different CDS role.
-   The variant `INHERITING CONDITIONS FROM ENTITY` applies the access conditions from a CDS entity.
-   The variant `INHERITING CONDITIONS FROM SUPER` applies the access conditions from roles that are redefined by the current role.

-   Multiple inheritance conditions can be specified within a single access condition and these can be combined with [literal conditions](ABENCDS_F1_COND_LITERAL.html), [PFCG conditions](ABENCDS_F1_COND_PFCG.html), and [user conditions](ABENCDS_F1_COND_USER.html).
-   The inherited access conditions are parenthesized implicitly. It is not necessary to set parentheses explicitly.
-   An inheritance condition cannot be negated using [`NOT`](ABENCDS_DCL_ROLE_COND_EXPR.html).
-   Full access rules can be inherited and are represented in the resulting conditions as the Boolean predicate `TRUE`.
-   Using inheritance can cause cycles which result in syntax errors.
-   Both inheritance flavors respect access rules that are declared in the same access role as the inheritance statement. The access rule which contains the inheritance statement is excluded. This feature allows the demonstration of inheritance within a single access control document for test purposes.

-   If an inherited access condition does not match the current CDS entity, for example because the wrong field or path is specified, all access rules of the parent CDS role are ignored.

-   If there is no [full access rule](ABENCDS_DCL_ROLE_GRANT_RULE.html) for the entity in this case, the current CDS role cannot be activated.
-   If there is a [full access rule](ABENCDS_DCL_ROLE_GRANT_RULE.html) for the entity, the CDS role can be activated but a syntax check warning occurs.

-   If specified for the variant `INHERITING CONDITIONS`, `DEFAULT TRUE` is designed to inherit access conditions from other CDS entities regardless of whether a CDS role is already defined for them or not.
-   If the variant `INHERITING CONDITIONS` is the only access condition of an access rule and no CDS role is defined for the CDS entity `cds_entity`, the rule is applied like a [full access rule](ABENCDS_DCL_ROLE_GRANT_RULE.html) if `DEFAULT TRUE` is specified and like a rule that generally blocks access if `DEFAULT FALSE` is specified.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html