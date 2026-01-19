---
title: "ABENCDS_F1_DEFINE_ROLE"
description: |
  ABENCDS_F1_DEFINE_ROLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DEFINE_ROLE.htm"
abapFile: "ABENCDS_F1_DEFINE_ROLE.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "DEFINE", "ROLE"]
---

``[`@MappingRole: true`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html)\  [[`@role_annot1`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html)]\  [[`@role_annot2`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html)]\  ...  [DEFINE] ROLE role_name [SWITCHABLE] \{ [`access_rules`](ABENCDS_DCL_ROLE_RULES.html) \}``

[1. `... SWITCHABLE ...`](#ABAP_ADDITION_1@3@)

Defines a [CDS role](ABENCDS_ROLE_GLOSRY.html) called `role_name` in the [CDS DCL](ABENCDS_DCL_GLOSRY.html). A CDS role consists of one or more access rules [`access_rules`](ABENCDS_DCL_ROLE_RULES.html) specified within the curly brackets. Each access rule defines access to a [CDS](ABENCDS_ENTITY_GLOSRY.html) entity. A CDS role can contain access rules for different CDS entities. An access rule either defines an [access condition](ABENACCESS_CONDITION_GLOSRY.html) for the CDS entity or grants full access. When a CDS entity of this type is accessed using ABAP SQL, an access condition is evaluated as an additional selection condition.

Before the role is defined using `DEFINE ROLE`, the annotation [`@MappingRole`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html) must be specified with the value `true`. The annotation [`@MappingRole`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html) is used to assign the CDS role to every user regardless of the client. Further optional annotations [`role_annot1`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html), [`role_annot2`](ABENCDS_F1_DCL_ROLE_ANNOTATIONS.html), ... can also be specified.

With this addition, the content of the role reacts to status changes in the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) with respect to the package of the access control:

-   Every CDS role defined using `DEFINE ROLE` is assigned to every user implicitly, which means that the associated access control is applied to every user. User-specific checks are applied using [PFCG conditions](ABENPFCG_CONDITION_GLOSRY.html) and [user conditions](ABENUSER_CONDITION_GLOSRY.html).
-   A CDS role can be defined for a CDS entity in every package and in every system and specifies that implicit access control applies.
-   Access control can be disabled for a CDS entity as follows:

-   Specify the annotation `@AccessControl.authorizationCheck` with the value `#NOT_ALLOWED` in the definition of the entity. In this case, the definition of a role for the CDS entity produces a syntax check warning in the DCL editor.
-   Use the addition [`[WITH] PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in ABAP SQL when the entity is accessed.

-   Separate [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html) must be created for each CDS role. The DCL source code of a CDS role is edited in a different editor from the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) (a [CDS view](ABENCDS_VIEW_GLOSRY.html) or [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)) or a [CDS metadata extension](ABENCDS_METADATA_EXTENSION_GLOSRY.html). The ADT documentation describes how the different types of source code are created.
-   CDS source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

-   If the package has no switch assigned or when it has a switch assigned with state *On*, the role content is generated.
-   If a switch is assigned to the package and that switch has a state other than *On*, the role is generated with empty content, in particular, all rules in the role are no longer present at runtime.

-   The keyword `SWITCHABLE` can be applied to roles even if they are not in a switchable package. The keyword then has no function.
-   Roles without the keyword `SWITCHABLE` can be in switchable packages. The role then does not react to the switch state and its content is always generated.
-   If a switchable role is not generated due to the current switch state, the syntax check does not detect all errors in the rule content. It is possible to deliver access roles from a system where the role is not generated, causing import errors in a system where the role is generated.
-   In a switchable role, you can use elements of the protected entity itself and of [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html) of that entity, as long as they are located in the same package as the access control. The access control syntax checker issues an error message if an access rule violates this constraint.
-   In a non-switchable role, you should only use elements of the protected entity itself and avoid using elements that are in switchable [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html), because importing this role may cause syntax errors in systems where the package of the extension is switched off. The access control syntax checker issues a warning message for this constellation.
-   In switchable roles, the addition [`COMBINATION MODE`](ABENCDS_DCL_ROLE_COND_RULE.html) is mandatory, even if the chosen combination mode is [`OR`](ABENCDS_DCL_ROLE_COND_RULE.html).
-   In switchable roles, the addition [`REDEFINITION`](ABENCDS_DCL_ROLE_COND_RULE.html) is not allowed.
-   In switchable roles, using inheritance statements is not allowed.
-   Switchable roles cannot be the source for role-based inheritance in another access control.
-   Switchable roles can be part of entity-based inheritance in other access controls. The switch state is respected when the inheritance is resolved. This means that, in a system where the role is not generated, it is not part of the access conditions of the inheritance source because the access rule for the entity inside the role does not exist.
-   Switchable roles respect the switchability of packages on a structural level and thus allow the use of elements of switched [CDS entity extensions](ABENCDS_ENTITY_EXTEND_GLOSRY.html). In contrast to this, the DCL functions [`SWITCH_RUNTIME_STATE`](ABENCDS_F1_DCL_FUNCTION.html) and [`TOGGLE_RUNTIME_STATE`](ABENCDS_F1_DCL_FUNCTION.html) allow querying a switch state as a runtime-only check and are the preferred way to implement switch dependency if this need does not exist.
-   A switchable role for a CDS entity can exist as the only access control for a CDS entity. For a switch state other than *On*, the entity then behaves as if no access control is defined. In conjunction with the entity annotation `@AccessControl.authorizationCheck: #MANDATORY`, this can lead to a runtime error when the entity is accessed.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html