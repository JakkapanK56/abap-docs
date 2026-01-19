---
title: "CDS or DDIC source code was not found"
description: |
  The CDS view entity is as follows: The class `CL_DEMO_CDS_AUTH_LIT_PFCG_VE` uses `SELECT`(ABAPSELECT.html) to access the view entity. CDS access control restricts the selections to data for which the current user has authorization according to classic role maintenance (transaction PFCG) and that m
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DCL_ROLE_COND_RULE.htm"
abapFile: "ABENCDS_DCL_ROLE_COND_RULE.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENCDS", "DCL", "ROLE", "COND", "RULE"]
---

``GRANT SELECT ON cds_entity       [WITH OPTIONAL ELEMENTS ( element1 DEFAULT  \{ TRUE | FALSE \}, ...  ) ]\       [COMBINATION MODE OR | COMBINATION MODE AND | REDEFINITION]\        WHERE [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html);``

[1. `... WITH OPTIONAL ELEMENTS`](#ABAP_ADDITION_1@3@)

[2. `... COMBINATION MODE AND|OR`](#ABAP_ADDITION_2@3@)

[3. `... REDEFINITION`](#ABAP_ADDITION_3@3@)

[4. `....WHERE`](#ABAP_ADDITION_4@3@)

Conditional access rule in the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) of the [CDS DCL](ABENCDS_DCL_GLOSRY.html). A conditional access rule `GRANT SELECT ON` with the addition `WHERE` restricts access to a CDS entity `cds_entity` using [access conditions](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html).

A single CDS entity can be specified in multiple access rules of a CDS role and multiple CDS roles can contain access rules for a single CDS entity.

If a CDS entity is specified in multiple access rules of a CDS role or in multiple CDS roles, the resulting access conditions are combined using the method specified by the addition `COMBINATION MODE`.

No [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) can be specified for `cds_entity`.

When you use condition inheritance to apply the access conditions of a CDS entity to another CDS entity, subsequent changes to the inheritance source conditions may invalidate the inheritance target because newly introduced elements are not present.

By declaring elements of an access control as optional you specify that these elements may be missing in inheritance targets of the access conditions using those elements.

The syntax check of the inheriting access controls will then report a warning instead of an error and at runtime, conditions using those elements are processed according to the declared default value (specific details are provided in the documentation of the respective conditions).

The optional addition `COMBINATION MODE AND|OR` can be used to define how the access conditions of multiple access rules for the same CDS entity `cds_entity` are combined. This addition can be applied regardless of whether other access rules already exist for the CDS entity.

`COMBINATION MODE OR` is used to combine the access conditions using the logical operator *or*. If created, these access rules make the restrictions less strong.

`COMBINATION MODE AND` combines the current access rule with the logical operator *and* and the other access rules. This means the restrictions are made stronger.

If multiple access rules with the combination methods *AND* (`cond_and_1`, `cond_and_2`, ...), and *OR* (`cond_or_1`, `cond_or_2`, ...) exist, the following expression produces the full condition:

`( cond_or_1 OR cond_or_2 OR ... ) AND cond_and_1 AND cond_and_2 AND ...`

A full access rule overrides the construction above, however, and produces a full access rule as the end result, even if there are rules with the mode `COMBINATION MODE AND`.

The following applies to the addition `COMBINATION MODE OR`:

The optional addition `REDEFINITION` is used to indicate that the access rule in question is the only existing access rule for the CDS entity and any other access rules are ignored. The addition makes it possible for customers and partners to replace all access rules delivered by SAP for CDS entity with their own access rules without making modifications. The language element `INHERITING CONDITIONS FROM SUPER` can, however, be used to incorporate conditions delivered by SAP in customer or partner access rules.

The following applies to the addition `REDEFINITION`:

A `WHERE` clause is used to define an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) for the CDS entity `cds_entity`. When a CDS entity is accessed using ABAP SQL, and an access rule is configured for this entity in a role, the access conditions are evaluated implicitly. This means their selection is restricted accordingly and hence any [`SELECT`](ABAPSELECT.html) reads use a logical *and* to add the access condition to the select condition of the statement passed to the database by the database interface.

The following CDS role `DEMO_CDS_ROLE_LIT_PFCG_VE` defines an access condition for the CDS view entity `demo_cds_authority_lit_pfcg_ve` in an access rule. Both a [PFCG condition](ABENCDS_F1_COND_PFCG.html) for the [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `S_CARRID` and a [literal condition](ABENCDS_F1_COND_LITERAL.html) for the currency field are specified.

CDS or DDIC source code was not found

The CDS view entity is as follows:

The class `CL_DEMO_CDS_AUTH_LIT_PFCG_VE` uses [`SELECT`](ABAPSELECT.html) to access the view entity. CDS access control restricts the selections to data for which the current user has authorization according to classic role maintenance (transaction PFCG) and that meets the literal condition.

-   Optionality can only be declared for a directly specified field or the first association of a path expression. In the latter case, all path expressions starting with this association are considered optional and are handled with the default value when this association does not exist at runtime. However, when the association exists but any of the following path components is missing, this is considered an error and results in a syntax error of the inheriting access control and potential runtime error at entity access.
-   In the access control where the optionality is declared, the element must exist. It is not possible to create access controls for non-existing elements.
-   Optionality can get lost in condition inheritance by application of certain replacement steps. This is documented in the respective steps.
-   Optionality is only applied to left side CDS elements which are written in the current access control. It does not apply to left side CDS elements which are inherited from other access controls.
-   Optionality shall bridge a short time-gap between the modification of access conditions acting as inheritance source and the necessary adoptions of CDS entities protected by inheriting access controls. It is not recommended that it used as a permanent constituent of an access control design.
-   The default value must be chosen carefully. *Secure by default* implies using `DEFAULT FALSE`, by using `DEFAULT TRUE` you declare that it is temporarily acceptable that access control may ignore this element. This situation may be on hand when an established authorization concept is refined by additional fields.
-   Optional elements cannot be used inside of `NOT` conditions, to avoid that a secure `DEFAULT FALSE` is accidentally flipped to the Boolean predicate `TRUE`.

-   The addition `COMBINATION MODE OR` does not need to be specified explicitly. If there are multiple access rules for a CDS entity, they are combined implicitly using the logical operator *or*. For reasons of consistency, however, the addition `COMBINATION MODE OR` is recommended.
-   Any existing access controls without the explicit addition `COMBINATION MODE OR` are valid.
-   In roles with the [`SWITCHABLE`](ABENCDS_F1_DEFINE_ROLE.html) addition, the `COMBINATION MODE` addition is mandatory, including for the mode `OR`.

-   This addition can be used in customer systems only. SAP does not deliver access rules of this type.
-   The addition can also be applied if there are no other access rules for an entity. It ensures that the conditions defined here are not disabled by any later access rules.
-   The addition can be used for a maximum of one access rule for a CDS entity. If used more than once, an activation error or import error occurs.
-   This addition also disables existing full access rules for a CDS entity. SAP does not deliver full access rules, which means that this statement applies only to customer full access rules that are themselves overridden by customer `REDEFINITION` rules.
-   In roles with the [`SWITCHABLE`](ABENCDS_F1_DEFINE_ROLE.html) addition, `REDEFINITION` is not allowed.

@AccessControl.authorizationCheck: #CHECK\\ndefine view entity DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE\\n as select from\\n scarr\\n \\{\\n key carrid,\\n carrname,\\n currcode,\\n url\\n \\}\\n abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_rules.html