---
title: "ABENBDL_DEFINE_BEH"
description: |
  ABENBDL_DEFINE_BEH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DEFINE_BEH.htm"
abapFile: "ABENBDL_DEFINE_BEH.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "types", "ABENBDL", "DEFINE", "BEH"]
---

``define behavior for RootEntity [alias AliasName]\ [\ [`external`](ABENBDL_EXTERNAL.html) ExternalName]\  \{[[`implementation in class ClassName [unique]`](ABENBDL_IN_CLASS_UNIQUE.html)]\}\  [`EntityBehaviorCharacteristics`](ABENBDL_CHARACTER.html)\  \{    [`EntityBehaviorBody`](ABENBDL_BODY.html)\  \}  \  [define behavior for ChildEntity1][, define behavior for ChildEntity2][, ...  ]``

Defines the behavior for a [RAP business object](ABENRAP_BO_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). A [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) can consist of one or more [entity behavior definitions](ABENCDS_ENTITY_BDEF_GLOSRY.html) that start with `define behavior for`, each one referring to a different [node](ABENRAP_BO_ENTITY_GLOSRY.html) of the business object. An entity behavior definition for the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html)\\ `RootEntity` is mandatory, whereas entity behavior definitions for [child entities](ABENCHILD_ENTITY_GLOSRY.html) are optional. If a RAP BO entity does not have a dedicated entity behavior definition, the entity does not have a transactional character. It is then not modifiable within the [ABAP RESTful application programming model](ABENARAP_GLOSRY.html).

In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), the possible root entities `RootEntity` are [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), the possible root entities `RootEntity` are [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), or [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). **Note:** Custom entities serve as data model basis for [RAP unmanaged queries](ABENRAP_UNMANGED_QUERY_GLOSRY.html).

Syntax additions and components:

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_MANAGED_ASSOC_ROOT`. The CDS composition tree consists of the root entity and one child entity. For both entities, an entity behavior definition is defined.

**Note** This example does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

The following example shows an unmanaged BDEF based on the CDS root view entity `DEMO_RAP_UNMANAGED_DRAFT_ROOT`. The CDS composition tree consists of the root entity and one child entity. For both entities, an entity behavior definition is defined.

The behavior is defined in the `BP_DEMO_RAP_UNMANAGED_DRAFT_ROCCIMP` of the ABAP behavior pool.

-   An alias name `AliasName` can be specified using the keyword `alias`. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). The alias name is visible in the method syntax of the [behavior pool](ABENABAP_BEHAVIOR_POOLS.html) of the business object and in the [derived types](ABENRPM_DERIVED_TYPES.html). The length of an alias name `AliasName` is restricted to 30 characters.
-   The optional addition [`external`](ABENBDL_EXTERNAL.html) can be used to provide an alias name `ExternalName` for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the alias name.
-   An [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) can be specified for each RAP BO entity using the syntax [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html). This class can be used to implement the transactional behavior for the RAP BO entity it refers to.
-   [Entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html)\\ [`EntityBehaviorCharacteristics`](ABENBDL_CHARACTER.html) define general properties for a RAP BO entity.
-   The [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html)\\ [`EntityBehaviorBody`](ABENBDL_BODY.html) defines the transactional behavior of the RAP BO entity.

-   If [BDEF strict mode](ABENBDL_STRICT.html) is enabled, no gaps are allowed in the behavior enablement of a [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html). For example, if a composition tree consists of entities 1 (root), 2 (child), and 3 (grandchild), the definition of a behavior for entities 1 and 3 but not for entity 2 is not allowed, as this would be a gap.
-   If [BDEF strict mode](ABENBDL_STRICT.html) is enabled, the underlying CDS entities `RootEntity`, `ChildEntity1`, `ChildEntity2` and so on, must not be [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

managed\\nimplementation in class BP\_DEMO\_RAP\_MANAGED\_ASSOC\_ROOT unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master(global)\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n association \_ext \\{ create; \\}\\n field ( readonly:update ) KeyFieldRoot;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n DecFieldRoot = dec\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child\\npersistent table demo\_dbtab\_child\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n association \_parent \\{ \\}\\n\\n field ( readonly:update ) KeyField, KeyFieldChild;\\n mapping for demo\_dbtab\_child\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;\\nstrict(2);\\nwith draft;\\n\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT alias ParentEntity\\ndraft table demo\_dbtab\_draft\\nlock master\\ntotal etag Timestamp\\netag master LastChangedAt\\nauthorization master ( global, instance )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) KeyFieldRoot;\\n field ( readonly ) Timestamp, LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n draft determine action Prepare;\\n\\n association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_CHILD alias ChildEntity\\ndraft table demo\_draft\_ch5\\n(lock, authorization, etag) dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n association \_parent \\{ with draft; \\}\\n\\n field ( readonly:update ) keyfield, KeyFieldChild;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html