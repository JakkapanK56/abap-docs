---
title: "ABENBDL_LOCKING"
description: |
  ABENBDL_LOCKING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_LOCKING.htm"
abapFile: "ABENBDL_LOCKING.html"
keywords: ["update", "delete", "do", "if", "method", "data", "ABENBDL", "LOCKING"]
---

`... lock master [unmanaged]\    | lock dependent by _Assoc`

Specifies the [RAP locking](ABENRAP_LOCKING_GLOSRY.html) mechanism for a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html).. It prevents simultaneous modification access to data on the database by more than one user. This is also known as [pessimistic concurrency control](ABENPESSIMIST_CONC_CONTROL_GLOSRY.html). Whenever a lock is requested for a specific entity instance, its [lock master](ABENRAP_LOCK_MA_ENT_GLOSRY.html) and all [lock-dependent](ABENRAP_LOCK_DEP_ENT_GLOSRY.html) entity instance are locked for editing by a different user, in other words, as soon as one node receives a locking request, the whole BO instance is locked. Lock master entities are locked on each locking request of one of their lock-dependent entities.

The following rules apply:

In a managed RAP BO, the locking mechanism is handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html), so that no implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required. If the optional addition `unmanaged` is used, the lock mechanism must be implemented manually in the method [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) of the behavior pool, just like in the unmanaged scenario. It is then invoked at runtime.

In an unmanaged RAP BO, the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) must be implemented for lock master entities.

If a lock is defined for a RAP BO entity, the entity instances in question are implicitly locked during the runtime of the following [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html):

Development guide for the ABAP RESTful Application Programming Model, section [Pessimistic Concurrency Control (Locking)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/99d8162b8d7d4a83ae65320d2a03b8ab).

-   The root node must be declared as `lock master` entity.
-   Each child entity must be declared as lock-dependent entity using the syntax `lock dependent by _Assoc`. Locking requests of lock-dependent entity instances are delegated to the lock master entity.
-   Each RAP BO entity must be defined as `lock master` or `lock dependent` entity.
-   The association `_Assoc` from the lock-dependent entity to the lock master entity must be explicitly defined in the entity behavior definition using the syntax `association _AssocToLockMaster \{ \}`. The association must also be defined in the underlying CDS data model.

-   [`update`](ABENBDL_STANDARD_OPERATIONS.html)
-   [`delete`](ABENBDL_STANDARD_OPERATIONS.html)
-   [`create by association`](ABENBDL_ASSOCIATION.html)
-   [`action`](ABENBDL_ACTION.html)
-   **Note** The optional addition [`lock:none`](ABENBDL_LOCK_NONE.html) is available for actions. It can be used to prevent the locking mechanism for the entity instance for which an action is executed.
-   **Note** [`create`](ABENBDL_STANDARD_OPERATIONS.html): In a managed RAP BO, the newly created key values (if available) of instances are written into the global lock table during the create operation. This is part of a uniqueness check, which is automatically and implicitly carried out by the RAP framework. In an unmanaged RAP BO, there is no automatic uniqueness check and no key values are written into the global lock table. For further details, see the development guide for the ABAP RESTful Application Programming Model, section [Uniqueness Check](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/cc4064be45ff46d6a6b8828d3aaa9bb9?version=sap_cross_product_abap).

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Draft-enabled RAP business object](ABENDRAFT_RAP_BO_GLOSRY.html)
-   If a BO is [draft-enabled](ABENBDL_WITH_DRAFT.html), locking must also be considered. As soon as a draft instance is created for an existing active instance, the active instance is given an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) and cannot be modified by another user. This exclusive lock remains for a determined time, even if the [ABAP session](ABENABAP_SESSION_GLOSRY.html) terminates. The duration time of the exclusive lock can be configured. Once the exclusive lock expires after the duration time, the [optimistic lock phase](ABENBDL_ETAG.html) begins. During the optimistic lock phase, a draft can be resumed as long as the active instance does not change, but there is no longer an exclusive lock.
-   [Projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html)
-   In a [projection business object](ABENRAP_PROJECTION_BO_GLOSRY.html), the RAP locking mechanism that is defined and implemented for the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) is automatically reused and does not need to be explicitly defined. For details, see topic [RAP - `EntityBehaviorCharacteristics`, Projection BDEF](ABENBDL_CHARACTER_PROJECTION.html).

-   The [draft action `Resume`](ABENBDL_DRAFT_ACTION.html) recreates a lock for an entity instance on the [persistent database table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) when a draft instance is resumed after the lock has expired.
-   The EML statement [`SET LOCKS`](ABAPSET_LOCKS.html) can be used to explicitly lock [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html).
-   Locks are managed in a global lock table.
-   The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:
-   `([lock][, authorization][, etag]) dependent by _assoc`
-   For details, see topic [RAP - `SyntaxShortForm`](ABENBDL_SHORT_SYNTAX.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html