---
title: "ABENBDL_BO_INTERFACE_HEADER"
description: |
  ABENBDL_BO_INTERFACE_HEADER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_BO_INTERFACE_HEADER.htm"
abapFile: "ABENBDL_BO_INTERFACE_HEADER.html"
keywords: ["update", "delete", "if", "class", "data", "types", "ABENBDL", "INTERFACE", "HEADER"]
---

``[`interface`](ABENBDL_IMPL_TYPE.html);  [[`extensible`](ABENBDL_EXTENSIBLE.html);]\  [[`with managed instance filter;`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html)]\  [[`use draft;`](ABENBDL_USE_PROJECTION.html)\ |\ [`use collaborative draft;`](ABENBDL_USE_PROJECTION.html)]\  [[`use side effects;`](ABENBDL_USE_PROJECTION.html)]\  [[`with privileged mode;`](ABENBDL_PRIVILEGED_MODE.html)]\  [[`foreign entity EntityName`](ABENBDL_FOREIGN.html);]\  \ [`EntityBehaviorDefinition1`](ABENBDL_DEFINE_BEH_INTERFACE.html)\ [,[`EntityBehaviorDefinition2`](ABENBDL_DEFINE_BEH_INTERFACE.html)]\ [, ...]\  ...``

The [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) of an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html) can project certain elements from its base BO. Defining new elements is not possible. All possible elements are listed below. The implementation type is mandatory and all other attributes are optional.

The behavior definition header is followed by one or more [entity behavior definition(s)](ABENBDL_DEFINE_BEH_INTERFACE.html)\\ `EntityBehaviorDefinition1`, `EntityBehaviorDefinition2`, ... that start with `define behavior for`.

The following example shows an interface BDEF. The projected BO is `DEMO_RAP_UNMANAGED_DRAFT_ROOT`. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes a field from the BDEF derived types.

-   [`interface`](ABENBDL_IMPL_TYPE.html): An interface BDEF must have the [implementation type](ABENBDL_IMPL_TYPE.html)\\ `interface` and it must be based on a [CDS transactional interface](ABENCDS_PROJECTION_VIEW_GLOSRY.html).
-   [`extensible`](ABENBDL_EXTENSIBLE.html): If specified, [BDEF extensions](ABENBDL_EXTENSION.html) are allowed. As a prerequisite, the projected BDEF must define at least one entity as [`extensible`](ABENBDL_EXTENSIBLE.html).
-   [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html): Optional addition. If specified, the `WHERE` condition of the underlying [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is evaluated when the BDEF is accessed with [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) requests from Web clients. If this addition is not specified, the `WHERE` clause is ignored. For further details, see topic [RAP - `with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html).
-   [`use draft`](ABENBDL_USE_PROJECTION.html): The [draft concept](ABENBDL_WITH_DRAFT.html) can be reused from the base BO.

-   For details on the draft concept, see topic [RAP - `with draft`](ABENBDL_WITH_DRAFT.html).
-   For details on the reuse, see topic [RAP BDL - use](ABENBDL_USE_PROJECTION.html).

-   [`use collaborative draft`](ABENBDL_USE_PROJECTION.html): The [draft concept](ABENBDL_WITH_COLL_DRAFT.html) can be reused from the base BO.

-   For details on the draft concept, see topic [RAP - with collaborative draft](ABENBDL_WITH_COLL_DRAFT.html).
-   For details on the reuse, see topic [RAP BDL - use](ABENBDL_USE_PROJECTION.html).

-   [`use side effects`](ABENBDL_USE_PROJECTION.html): [RAP side effects](ABENRAP_SIDE_EFFECTS_GLOSRY.html) can be reused from the base BO.

-   For details on side effects, see topic [RAP - `side effects`](ABENBDL_SIDE_EFFECTS.html).
-   For details on the reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   [`with privileged mode`](ABENBDL_PRIVILEGED_MODE.html): [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) can be used. As a prerequisite, it must be specified in the projected BO. For details, see topic [RAP - `with privileged mode`](ABENBDL_PRIVILEGED_MODE.html).
-   [`foreign entity`](ABENBDL_FOREIGN.html): Defines a [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html), this means, an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

-   An [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) must not be specified. The syntax [`implementation in class`](ABENBDL_IN_CLASS_UNIQUE.html) is not supported. An interface BDEF is a BDEF type without runtime handler.
-   [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) cannot be defined explicitly. Strict checks are automatically applied.
-   `[with cross associations](ABENBDL_WITH_CROSS_ASSOC.html)` cannot be defined explicitly. Cross-BO transactional enablement is automatically applied, if specified in the underlying behavior definition.

interface;\\nuse draft;\\nforeign entity demo\_cds\_validation;\\ndefine behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root\\nuse etag\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Activate;\\n use action Discard;\\n use action Edit;\\n use action Resume;\\n use action Prepare;\\n\\n field(suppress) DataFieldRoot;\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo\_interface.html