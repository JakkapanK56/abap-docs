---
title: "ABENBDL_DEFINE_BEH_INTERFACE"
description: |
  ABENBDL_DEFINE_BEH_INTERFACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DEFINE_BEH_INTERFACE.htm"
abapFile: "ABENBDL_DEFINE_BEH_INTERFACE.html"
keywords: ["update", "delete", "do", "if", "method", "data", "types", "ABENBDL", "DEFINE", "BEH", "INTERFACE"]
---

``define behavior for ProjectedEntity [alias AliasName]\ [\ [`external`](ABENBDL_EXTERNAL.html) ExternalName]\  [[`use etag`](ABENBDL_USE_PROJECTION.html)]\  \{    [`EntityBehaviorBody`](ABENBDL_BODY_INTERFACE.html)\  \}  \  [behavior for ChildEntity1][, behavior for ChildEntity2][, ...  ]``

Defines the behavior for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). An interface behavior definition can project a subset or all of the nodes of its underlying [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html). The [root entity](ABENROOT_ENTITY_GLOSRY.html)\\ `ProjectedEntity` must be a [CDS transactional interface](ABENCDS_PROJECTION_VIEW_GLOSRY.html).

Syntax additions and components:

The following entity behavior characteristics are reused automatically, if applicable, and therefore must not be defined again in an interface:

The following example shows an interface BDEF. The projected BO is `DEMO_RAP_UNMANAGED_DRAFT_ROOT`. The interface BDEF reuses draft handling and standard operations from the underlying BO. It also defines a foreign entity and excludes a field from the BDEF derived types.

-   An alias name should be specified using the keyword `alias`. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). The length of an alias name `AliasName` is restricted to 30 characters. If no alias name is specified, a syntax check warning occurs.
-   The optional addition [`external`](ABENBDL_EXTERNAL.html) can be used to provide an alias name for external usage. This external name can be used, for example, if another projection layer is built on top of the interface BDEF. It can be much longer than the alias name.
-   Only one [entity behavior characteristic](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) is available, namely [`use etag`](ABENBDL_USE_PROJECTION.html). An ETag field for [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html) can be reused if it is specified in the base BO.

-   For details on optimistic concurrency control, see topic [RAP BDL - ETag](ABENBDL_ETAG.html).
-   For details on reuse, see topic [RAP BDL - use](ABENBDL_USE_PROJECTION.html).

-   The [entity behavior body](ABENBDL_BODY_INTERFACE.html)\\ `EntityBehaviorBody` can expose a subset of the transactional behavior or the base BDEF, for example, [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html).

-   [RAP authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) for [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html).
-   [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html)
-   [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html)
-   [`SavingOptions`](ABENBDL_SAVING.html)
-   [RAP locking](ABENRAP_LOCKING_GLOSRY.html): Interfaces inherit the lock master and lock dependent relations. Upon each modify operation on an interface instance, the method [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) is called and the respective entities are locked.
-   [RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html)
-   [RAP early numbering](ABENRAP_EARLY_NUMBERING_GLOSRY.html)
-   [RAP late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html)

interface;\\nuse draft;\\nforeign entity demo\_cds\_validation;\\ndefine behavior for DEMO\_RAP\_INTERFACE\_DRAFT alias Root\\nuse etag\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action Activate;\\n use action Discard;\\n use action Edit;\\n use action Resume;\\n use action Prepare;\\n\\n field(suppress) DataFieldRoot;\\n\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo\_interface.html