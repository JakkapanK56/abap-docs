---
title: "ABENCDS_ACCESS_CONTROL"
description: |
  ABENCDS_ACCESS_CONTROL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ACCESS_CONTROL.htm"
abapFile: "ABENCDS_ACCESS_CONTROL.html"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "ABENCDS", "ACCESS", "CONTROL"]
---

ABAP CDS enables access control based on a [data control language (CDS DCL)](ABENCDS_F1_DCL_SYNTAX.html). Access control in ABAP CDS further restricts the data returned from a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in ABAP CDS. CDS access control is based on the following aspects:

If a CDS role with access rules is defined for a [CDS entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html), the access conditions are evaluated implicitly in each [ABAP SQL](ABENABAP_SQL_GLOSRY.html) read, unless access control is switched off using the value `#NOT_ALLOWED` for the annotation `@AccessControl.authorizationCheck` or using the addition [`[WITH] PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in ABAP SQL. If access control is enabled, only that data is read that meets the access conditions.

Every CDS role is defined in its own separate piece of [DCL source code](ABENDCL_SOURCE_CODE_GLOSRY.html). These pieces of DCL source code can only be edited in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). The DCL source code of a CDS role is edited in a different editor than [DDL](ABENDDL_SOURCE_CODE_GLOSRY.html), [DDLA](ABENDDLA_SOURCE_CODE_GLOSRY.html), and [DDLX source code](ABENDDLX_SOURCE_CODE_GLOSRY.html). The [ADT](ABENADT_GLOSRY.html) documentation describes how the different types of source code are created.

-   [CDS roles](ABENCDS_ROLE_GLOSRY.html) defined using the CDS DCL statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html). A CDS role is not assigned to individual users and is evaluated for every user instead.
-   [Access rules](ABENACCESS_RULE_GLOSRY.html) defined for [CDS entities](ABENCDS_ENTITY_GLOSRY.html) in a CDS role. [Access rules](ABENCDS_DCL_ROLE_RULES.html) can define conditions, but also provide full access. In a CDS role, access rules can be inherited from another CDS entity or rule.
-   [Access conditions](ABENACCESS_CONDITION_GLOSRY.html) defined in an access rule for the elements of [CDS entities](ABENCDS_ENTITY_GLOSRY.html). Access conditions are based primarily on literal values, on classic [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current users, or on data from other CDS entities defined by a selection with the current user ([user-defined aspects](ABENCDS_F1_DEFINE_GENERIC_ASPECT.html)).

-   When a CDS entity is used as a data source in another CDS entity, its access controls are not considered when the wrapping entity is accessed. CDS access control only applies to the entry level entities accessed by ABAP SQL. In other words, there is no automatic inheritance of CDS access control to higher layers of a CDS data model.
-   It is advisable to continue to use classic authorization checks for start authorizations (used to check whether a user can start an application in the first place). CDS access control can be used within an application to perform authorization checks (used to check the authorization of a user as defined by the data model and the data in question).
-   When CDS entities are accessed using ABAP SQL, ABAP programs cannot distinguish whether data is not read because it does not exist or because they are not allowed by CDS access control.
-   CDS access control modifies the database selection performed by the application code. Although the amount of data returned is reduced, the additional filter work may have an affect on the statement performance. The effect depends on the complexity of the access control, the complexity of the protected CDS entity, the amount of data in the PFCG role data assigned to the user and the position of the protected entity in the concrete database statement.
-   CDS roles can be defined for [CDS views](ABENCDS_VIEW_GLOSRY.html), [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html), [CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) and [CDS static external entities](ABENCDS_STATIC_EE_GLOSRY.html). Implicit access control is applied only when a CDS entity of this type is accessed directly using ABAP SQL.
-   In emergency mode (user `SAP*`), CDS access control is disabled. This not only affects PFCG conditions but also literal access conditions and user-defined aspect conditions.
-   The CDS entity annotation `@AccessControl.authorizationCheck` affects access control by its value:

-   `#NOT_REQUIRED` (default): When no access control exists, all users have full access to the entity. When an access control exists, it is evaluated.
-   `#CHECK`: The runtime behavior is identical to `#NOT_REQUIRED`, but there is a syntax check warning in the CDS entity if no access control object exists.
-   `#MANDATORY`: An access control must exist. If no access control has been created for the entity, a runtime error will occur when the entity is accessed in ABAP SQL. Use this for entities where access control is critical and accidental removal of the access control must not remain unnoticed.
-   `#NOT_ALLOWED`: No access control is allowed to exist. When an access control exists, it is ignored at runtime. Use this for technical entities where access control would be harmful. This value does not prevent the creation of access controls, but a warning message is issued that the access control is not applied at runtime.
-   `#PRIVILEGED_ONLY`: This special value is only evaluated by dedicated frameworks, such as [SADL](ABENSADL_GLOSRY.html). For ABAP SQL, the actual behavior is the same as `#CHECK`. Customers should not use this value unless explicitly requested by the documentation.

-   Access control can be disabled in particular in the following ways:

-   If access control is not applicable in general (for example because the unit in question is a technical unit), the annotation `@AccessControl.authorizationCheck` with the value `#NOT_ALLOWED` can be specified in its CDS data definition.
-   If access control is not applicable only in specific places, the addition `WITH PRIVILEGED ACCESS` can be used in the [`FROM`](ABAPFROM_CLAUSE.html) clause of an ABAP SQL query to disable access control for the particular entity in use.
-   It is also possible to disable access control for an entire statement with the addition `PRIVILEGED ACCESS` as last position. This syntax variant in addition to the direct entity usage in the statement also covers usage by association traversal in ABAP SQL based on [path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) (introduced by the *\\\\* character).
-   Access control can be disabled for an entity (without making modifications) by creating a full access rule for the entity in a customer CDS role.
-   A CDS entity can also be used as a data source in another CDS entity for which access control is disabled.

-   CDS access control provides an additional method for checking authorizations in the [SAP authorization concept](ABENBC_AUTHORITY_CHECK.html). Authorizations in the SAP authorization concept are based on [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) and are granted in the classic role maintenance (transaction PFCG). CDS access control expands these checks to include implicit evaluations of [access conditions](ABENACCESS_CONDITION_GLOSRY.html).

abenabap.html abencds.html