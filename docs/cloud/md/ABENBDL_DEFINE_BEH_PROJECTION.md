---
title: "ABENBDL_DEFINE_BEH_PROJECTION"
description: |
  ABENBDL_DEFINE_BEH_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DEFINE_BEH_PROJECTION.htm"
abapFile: "ABENBDL_DEFINE_BEH_PROJECTION.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "types", "ABENBDL", "DEFINE", "BEH", "PROJECTION"]
---

``define behavior for ProjectedEntity [alias AliasName]\ [\ [`external`](ABENBDL_EXTERNAL.html) ExternalName]\  \{[[`implementation in class ClassName [unique]`](ABENBDL_IN_CLASS_UNIQUE.html)]\}\  [`EntityBehaviorCharacteristics`](ABENBDL_CHARACTER_PROJECTION.html)\  \{    [`EntityBehaviorBody`](ABENBDL_BODY_PROJECTION.html)\  \}  \  [behavior for ChildEntity1][, behavior for ChildEntity2][, ...  ]``

Defines the behavior for a [RAP projection business object](ABENRAP_PROJECTION_BO_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). A [RAP projection behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) can project a subset or all of the nodes of its underlying [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html). The [root entity](ABENROOT_ENTITY_GLOSRY.html)\\ `ProjectedEntity` must be a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html).

Syntax additions and components:

The following example shows a projection BDEF. The projected BO is `DEMO_SALES_CDS_BUPA_2`. It exposes the standard operations and associations of the underlying BO.

-   An alias name can be specified using the keyword `alias`. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). The alias name is visible in the method syntax of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) of the business object and in the [derived types](ABENRPM_DERIVED_TYPES.html). The length of an alias name `AliasName` is restricted to 30 characters.
-   The optional addition [`external`](ABENBDL_EXTERNAL.html) can be used to provide an alias name for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the alias name.
-   An [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html), defined using [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html), can be specified for each entity that defines [new actions or functions](ABENBDL_NONSTANDARD_PROJECTION.html) and thus requires an implementation. It can be specified either in the [BDEF projection header](ABENBDL_BDEF_PROJECTION_HEADER.html) or as part of the projection behavior definition.
-   [Entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html)\\ [`EntityBehaviorCharacteristics`](ABENBDL_CHARACTER.html) define general properties for each entity.
-   The [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html)\\ [`EntityBehaviorBody`](ABENBDL_BODY.html) can expose a subset of the transactional behavior or the base BDEF, for example, standard operations or field properties. It is also possible to define new [actions](ABENBDL_NONSTANDARD_PROJECTION.html), [functions](ABENBDL_FUNCTION_PROJECTION.html), or [field properties](ABENBDL_FIELD_PROJECTION.html).

projection;\\nstrict(2);\\nforeign entity demo\_cds\_validation;\\ndefine behavior for DEMO\_RAP\_PROJECTION\_1 alias Parent\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use association \_BuPa \\{ create; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJECTION\_1\_CHILD alias Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_Address;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html