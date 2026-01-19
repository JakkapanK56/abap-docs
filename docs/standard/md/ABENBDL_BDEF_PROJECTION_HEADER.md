---
title: "The behavior definition header is followed by"
description: |
  The following example shows a projection BDEF based on the projected BO `DEMO_SALES_CDS_BUPA_2`. It defines the managed BDEF `DEMO_CDS_VALIDATION` as foreign entity and exposes the standard operations and associations of the underlying BO. Like in a RAP BO of type managed or unmanaged, the foreign e
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_BDEF_PROJECTION_HEADER.htm"
abapFile: "ABENBDL_BDEF_PROJECTION_HEADER.html"
keywords: ["update", "delete", "do", "if", "class", "data", "ABENBDL", "BDEF", "PROJECTION", "HEADER"]
---

``[`projection`](ABENBDL_IMPL_TYPE.html);  \{[[`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html)]\};  [[`strict[(version)];`](ABENBDL_STRICT.html)]\  [[`extensible;`](ABENBDL_EXTENSIBLE.html)]\  [[`with managed instance filter;`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html)]\  [[`use draft;`](ABENBDL_USE_PROJECTION.html)]\  [[`use side effects;`](ABENBDL_USE_PROJECTION.html)]\  [[`with privileged mode disabling base context;`](ABENBDL_PRIVILEGED_MODE.html)]\  [[`foreign entity EntityName`](ABENBDL_FOREIGN.html);]\  \ [`EntityBehaviorDefinition1`](ABENBDL_DEFINE_BEH_PROJECTION.html)[,[`EntityBehaviorDefinition2`](ABENBDL_DEFINE_BEH_PROJECTION.html)][, ...]\  [[`AuthorizationContext1`](ABENBDL_AUTHORIZATION_CONTEXT.html)][, [`AuthorizationContext2`](ABENBDL_AUTHORIZATION_CONTEXT.html)][, ... ]\  ...``

The [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) of a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html) can consist of one or more of the elements listed below. The implementation type is mandatory and all other attributes are optional.

Elements that must be specified explicitly, if required:

Elements that are automatically reused:

The behavior definition header is followed by

The following example shows a projection BDEF based on the projected BO `DEMO_SALES_CDS_BUPA_2`. It defines the managed BDEF `DEMO_CDS_VALIDATION` as foreign entity and exposes the standard operations and associations of the underlying BO.

Like in a RAP BO of type managed or unmanaged, the foreign entity is included in the `reported` structure:

-   [`projection`](ABENBDL_IMPL_TYPE.html): A projection BDEF must start with the keyword `projection` and it must be based on a [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html).
-   [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE.html): In a projection behavior definition, an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is not mandatory but possible:

-   Functionality that is reused from the [projected BO](ABENRAP_PROJECTION_BO_GLOSRY.html) does not require its own implementation. The implementation from the projected BO is reused.
-   If the projection BDEF defines [new actions or functions](ABENBDL_NONSTANDARD_PROJECTION.html), an ABAP behavior pool is required.

-   [`strict[(version)]`](ABENBDL_STRICT.html): [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) can be used. As a prerequisite, it must be specified in the projected BO. The projected BO and the projection must use the same version of strict mode.
-   [`extensible`](ABENBDL_EXTENSIBLE.html): if specified, [BDEF extensions](ABENBDL_EXTENSION.html) are allowed. As a prerequisite, [BDEF strict mode](ABENBDL_STRICT.html) must be switched on. In projection BDEFs, only the keyword `extensible` is possible, without the additions described in topic [`extensible`](ABENBDL_EXTENSIBLE.html).
-   [`use draft`](ABENBDL_USE_PROJECTION.html): The [draft concept](ABENBDL_WITH_DRAFT.html) can be reused from the base BO.

-   For details on the draft concept, see topic [RAP - `with draft`](ABENBDL_WITH_DRAFT.html).
-   For details on the reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html): Optional addition for [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) and [interface BDEFs](ABENCDS_INTERFACE_BDEF_GLOSRY.html). If specified, the `WHERE` condition of the underlying [CDS transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is evaluated when the BDEF is accessed with [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) requests from Web clients. If this addition is not specified, the `WHERE` clause is ignored. For further details, see topic [RAP - `with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html).
-   [`use side effects`](ABENBDL_USE_PROJECTION.html): [RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) can be reused from the base BO.

-   For details on RAP side effects, see topic [RAP - `side effects`](ABENBDL_SIDE_EFFECTS.html).
-   For details on the reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   [`with privileged mode disabling base context`](ABENBDL_PRIVILEGED_MODE.html): [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [RAP - `with privileged mode`](ABENBDL_PRIVILEGED_MODE.html).
-   [`foreign entity`](ABENBDL_FOREIGN.html): Defines a [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html), that is, an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

-   `[with cross associations](ABENBDL_WITH_CROSS_ASSOC.html)`: Cross-BO transactional enablement is automatically reused, if specified in the underlying behavior definition.

-   one or more [entity behavior definition(s)](ABENBDL_DEFINE_BEH_PROJECTION.html) that start with `define behavior for`
-   or by the definition of one or more [authorization contexts](ABENCDS_AUTH_CONTEXT_GLOSRY.html) that start with [`define [own] authorization context`](ABENBDL_AUTHORIZATION_CONTEXT.html).

projection;\\nstrict(2);\\nforeign entity demo\_cds\_validation;\\ndefine behavior for DEMO\_RAP\_PROJECTION\_1 alias Parent\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use association \_BuPa \\{ create; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJECTION\_1\_CHILD alias Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_Address;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html