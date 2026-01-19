---
title: "ABENBDL_IN_CLASS_UNIQUE"
description: |
  ABENBDL_IN_CLASS_UNIQUE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_IN_CLASS_UNIQUE.htm"
abapFile: "ABENBDL_IN_CLASS_UNIQUE.html"
keywords: ["do", "while", "if", "case", "class", "ABENBDL", "CLASS", "UNIQUE"]
---

`... implementation in class ClassName unique`

Specifies an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) for the [RAP business object](ABENRAP_BO_GLOSRY.html). An ABAP behavior pool is a special class pool for an ABAP behavior implementation. The name of the [global class](ABENGLOBAL_CLASS_GLOSRY.html) of a behavior pool is usually prefixed with `BP_`. It does not implement the behavior itself. The [behavior implementation](ABENBEHAVIOR_IMPLEMENT_GLOSRY.html) is coded in local [handler classes](ABENABP_HANDLER_CLASS_GLOSRY.html) and [saver classes](ABENABP_SAVER_CLASS_GLOSRY.html). The classes implement the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) that is called by the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html) when the [RAP business object](ABENRAP_BO_GLOSRY.html) is accessed.

There exist different options for notation that define how the implementation is distributed:

The behavior for a certain entity or group can only be implemented in the specified behavior pool. Any other class that attempts this will get an error message.

The mandatory addition `unique` defines that each operation can be implemented exactly once.

Behavior definition with a behavior pool on header level:

Behavior definition with a behavior pool on entity level:

Behavior definition with implementation groups. Each group has its own implementation class. An implementation class on header level is required to implement the [unmanaged save](ABENRAP_UNMAN_SAVE_GLOSRY.html).

-   The behavior pool can be defined in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html).
-   In this case, all implementation-relevant parts of all [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) that do not have an own implementation class are implemented in the same class.
-   Further behavior pools on entity-level are possible.
-   The behavior pool can be defined in the [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) for each CDS entity. Each node of a [RAP business object](ABENRAP_BO_GLOSRY.html) can have an own implementation class.
-   If there is an additional implementation on header level, this applies to all entities which do not have their own implementation class.
-   The behavior pool can be defined within the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) for one or more [implementation groups](ABENBDL_GROUPING.html) specified using the addition [`group`](ABENBDL_GROUPING.html). Each group must have an own implementation class, while entities must not have an implementation class. An additional implementation class on header level is possible.

-   Managed RAP BO
-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), certain components are provided by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html), such as [standard operations](ABENBDL_STANDARD_OPERATIONS.html), [operations for associations](ABENBDL_ASSOCIATION.html), the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), and the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). For these components, no implementation in a behavior pool is necessary. A behavior pool is required for the components that cannot be handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html), such as [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html).
-   Unmanaged RAP BO
-   In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), an ABAP behavior pool is mandatory. The implementation of an unmanaged RAP BO is fully provided by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) in the ABAP behavior pool.
-   [Projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html)
-   In a projection BDEF, an ABAP behavior pool is not necessary, but possible:

-   Functionality that is [reused](ABENBDL_USE_PROJECTION.html) from the [projected BO](ABENRAP_PROJECTED_BO_GLOSRY.html) does not require its own implementation. The implementation from the projected BO is reused.
-   If the projection BDEF defines [new actions or functions](ABENBDL_NONSTANDARD_PROJECTION.html), an ABAP behavior pool is required.

-   For further details on ABAP behavior pools, see the topic [ABAP Behavior Pools (ABP)](ABENABAP_BEHAVIOR_POOLS.html)

managed implementation in class ClassName unique; \\n define behavior for CDSEntityName alias AliasName \\n ... managed; \\n define behavior for CDSEntityName alias AliasName \\n implementation in class ClassName unique; \\n ... managed implementation in class ClassName unique; \\n define behavior for CDSEntityName alias AliasName \\n with unmanaged save \\n\\{ \\ngroup Group1 implementation in class Class1 unique \\{ ... \\} \\ngroup Group2 implementation in class Class2 unique \\{ ... \\} \\n... \\n\\} \\n ... abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html